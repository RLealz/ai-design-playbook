<#
.SYNOPSIS
    AI Design Playbook v2.0 -- Security-Auditing Skill, Combo, Preset & Template Installer (PowerShell)
.DESCRIPTION
    Installs built-in MIT Meta-Skills (design-router + 13 Combos), drops DESIGN.md + OKLCH CSS Presets,
    scaffolds runnable Starter Templates, syncs local cross-agent skills non-destructively, and fetches
    upstream design skills from GitHub using git sparse-checkout + static quarantine security auditing.
.EXAMPLE
    .\install.ps1 -List
    .\install.ps1 -Router -Target antigravity
    .\install.ps1 -Combo storycraft-studio -Target antigravity
    .\install.ps1 -Preset obsidian-precision -OutDir .\my-app
    .\install.ps1 -Template scroll-3d-stage -OutDir .\my-scroll-site
    .\install.ps1 -Skill impeccable -Target global-claude
    .\install.ps1 -SyncLocal
#>

param(
    [switch]$List,
    [switch]$Router,
    [string]$Combo,
    [string]$Skill,
    [string]$Preset,
    [string]$Template,
    [string]$OutDir = "",
    [switch]$SyncLocal,
    [switch]$All,
    [string]$Target = "claude",
    [switch]$SkipAudit
)

$ErrorActionPreference = "Stop"
$RepoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$RegistryPath = Join-Path $RepoRoot "registry.json"

if (-not (Test-Path $RegistryPath)) {
    Write-Error "registry.json not found at $RegistryPath"
    exit 1
}

$Registry = Get-Content $RegistryPath -Raw -Encoding UTF8 | ConvertFrom-Json

function Resolve-TargetDir([string]$TargetSpec) {
    switch ($TargetSpec.ToLower()) {
        "claude"        { return Join-Path (Get-Location) ".claude\skills" }
        "global-claude" { return Join-Path $HOME ".claude\skills" }
        "cursor"        { return Join-Path (Get-Location) ".cursor\skills" }
        "antigravity"   { return Join-Path $HOME ".gemini\config\skills" }
        "codex"         { return Join-Path (Get-Location) ".agents\skills" }
        "global-codex"  { return Join-Path $HOME ".codex\skills" }
        default         { return $TargetSpec }
    }
}

function Show-RegistryList {
    $localCount = $Registry.localSkills.Count
    $comboCount = $Registry.combos.PSObject.Properties.Count
    $presetCount = if ($Registry.presets) { $Registry.presets.Count } else { 0 }
    $templateCount = if ($Registry.templates) { $Registry.templates.Count } else { 0 }
    $upCount = $Registry.upstreamSkills.Count

    Write-Host "`n======================================================================" -ForegroundColor Cyan
    Write-Host "  AI DESIGN PLAYBOOK -- ECOSYSTEM REGISTRY (v$($Registry.version))" -ForegroundColor Cyan
    Write-Host "======================================================================`n" -ForegroundColor Cyan

    Write-Host "[$localCount Built-in MIT Meta-Skills (-Router)]" -ForegroundColor Green
    foreach ($s in $Registry.localSkills) {
        Write-Host ("  - {0,-28} : {1}" -f $s.id, $s.description)
    }

    Write-Host "`n[$comboCount Curated Workflow Combos (-Combo <name>)]" -ForegroundColor Yellow
    foreach ($prop in $Registry.combos.PSObject.Properties) {
        $c = $prop.Value
        $upList = ($c.upstreamSkills -join ", ")
        Write-Host ("  - {0,-24} : {1}" -f $prop.Name, $c.name)
        if ($c.recommendedPreset -or $c.starterTemplate) {
            Write-Host ("    Preset / Template        : preset={0} | template={1}" -f $(if($c.recommendedPreset){$c.recommendedPreset}else{"none"}), $(if($c.starterTemplate){$c.starterTemplate}else{"none"})) -ForegroundColor DarkCyan
        }
        Write-Host ("    Upstream Skills          : {0}" -f $upList) -ForegroundColor DarkGray
    }

    if ($presetCount -gt 0) {
        Write-Host "`n[$presetCount DESIGN.md + Tailwind v4 OKLCH Token Presets (-Preset <id> [-OutDir <dir>])]" -ForegroundColor Cyan
        foreach ($p in $Registry.presets) {
            Write-Host ("  - {0,-26} : {1} ({2})" -f $p.id, $p.name, $p.fonts)
        }
    }

    if ($templateCount -gt 0) {
        Write-Host "`n[$templateCount Runnable Starter Templates (-Template <id> [-OutDir <dir>])]" -ForegroundColor Blue
        foreach ($t in $Registry.templates) {
            Write-Host ("  - {0,-26} : [{1}] {2}" -f $t.id, $t.stack, $t.description)
        }
    }

    Write-Host "`n[$upCount Security-Audited Upstream Skills (-Skill <id>)]" -ForegroundColor Magenta
    foreach ($u in $Registry.upstreamSkills) {
        Write-Host ("  - {0,-34} [{1}] ({2}) - {3}" -f $u.id, $u.category, $u.license, $u.repo)
    }
    Write-Host ""
}

function Test-SkillSecurity([string]$ScanDir, [string]$SkillId) {
    if ($SkipAudit) {
        Write-Host "  [WARN] Skipping security audit for '$SkillId' (-SkipAudit specified)." -ForegroundColor Yellow
        return $true
    }

    Write-Host "  [AUDIT] Running static quarantine security audit on '$SkillId'..." -ForegroundColor Cyan

    # Prefer external Python scanner if configured on host
    $ScannerPy = "C:\Users\homeh\Projects\Mine\AI-Skills-MCPs-Plugins\scripts\scan_quarantine.py"
    $PyCmd = $null
    if (Test-Path "C:\Users\homeh\AppData\Local\Programs\Python\Python314\python.exe") {
        $PyCmd = "C:\Users\homeh\AppData\Local\Programs\Python\Python314\python.exe"
    } elseif (Get-Command python -ErrorAction SilentlyContinue) {
        $PyCmd = (Get-Command python).Source
    }

    if ((Test-Path $ScannerPy) -and $PyCmd) {
        $jsonRaw = & $PyCmd $ScannerPy --path $ScanDir --json 2>$null
        if ($LASTEXITCODE -eq 0 -and $jsonRaw) {
            $jsonOut = $jsonRaw | ConvertFrom-Json
            $failed = $jsonOut | Where-Object { $_.status -eq "FAIL" }
            if ($failed) {
                Write-Host "  [BLOCKED] Security audit FAILED for '$SkillId':" -ForegroundColor Red
                foreach ($r in $failed) {
                    foreach ($f in $r.findings) {
                        Write-Host "    - [$($f.severity)] $($f.rule) @ $($f.file):$($f.line) ($($f.detail))" -ForegroundColor Red
                    }
                }
                return $false
            }
            Write-Host "  [PASS] '$SkillId' passed static security audit." -ForegroundColor Green
            return $true
        }
    }

    # Portable built-in PowerShell static security scanner (works on any machine with zero external deps)
    $Findings = @()
    $TextExtensions = @(".md", ".txt", ".json", ".yaml", ".yml", ".js", ".mjs", ".cjs", ".ts", ".tsx", ".py", ".sh", ".ps1")
    $Files = Get-ChildItem -Path $ScanDir -Recurse -File -ErrorAction SilentlyContinue | Where-Object {
        $TextExtensions -contains $_.Extension.ToLower() -and $_.Length -lt 2097152
    }

    $PromptInjectionRegex = '(?i)(ignore\s+(all\s+)?(previous|prior)\s+instructions|disregard\s+system\s+prompt|you\s+are\s+now\s+in\s+developer\s+mode)'
    $RemotePipeRegex      = '(?i)((curl|wget)\s+[^|`r`n]+\|\s*(ba)?sh|Invoke-WebRequest[^|`r`n]+\|\s*(iex|Invoke-Expression))'
    $BidiUnicodeRegex     = '[\u202A-\u202E\u2066-\u2069]'
    $PkgHookRegex         = '"(preinstall|postinstall|preuninstall)"\s*:'

    foreach ($f in $Files) {
        $content = Get-Content -Path $f.FullName -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
        if (-not $content) { continue }

        if ($f.Name -eq "package.json" -and $content -match $PkgHookRegex) {
            $Findings += "Suspicious package.json lifecycle hook ($($Matches[1])) in $($f.Name)"
        }
        if ($content -match $PromptInjectionRegex) {
            $Findings += "Prompt injection override phrase in $($f.Name)"
        }
        if ($content -match $RemotePipeRegex) {
            $Findings += "Suspicious remote shell pipe in $($f.Name)"
        }
        if ($content -match $BidiUnicodeRegex) {
            $Findings += "Hidden bidirectional Unicode control character in $($f.Name)"
        }
    }

    if ($Findings.Count -gt 0) {
        Write-Host "  [BLOCKED] Built-in security audit FAILED for '$SkillId':" -ForegroundColor Red
        foreach ($msg in $Findings) {
            Write-Host "    - $msg" -ForegroundColor Red
        }
        return $false
    }

    Write-Host "  [PASS] '$SkillId' passed built-in static security audit." -ForegroundColor Green
    return $true
}

function Install-LocalSkill([string]$SkillId, [string]$DestRoot) {
    $LocalEntry = $Registry.localSkills | Where-Object { $_.id -eq $SkillId }
    if (-not $LocalEntry) {
        Write-Error "Local skill '$SkillId' not found in registry.json"
        return
    }
    $SrcDir = Join-Path $RepoRoot ($LocalEntry.path -replace '/', '\')
    $TargetDir = Join-Path $DestRoot $SkillId
    New-Item -ItemType Directory -Force -Path $TargetDir | Out-Null
    Copy-Item -Path (Join-Path $SrcDir "*") -Destination $TargetDir -Recurse -Force
    Write-Host "  [INSTALLED] Local meta-skill '$SkillId' -> $TargetDir" -ForegroundColor Green
}

function Install-UpstreamSkill([string]$SkillId, [string]$DestRoot) {
    $UpEntry = $Registry.upstreamSkills | Where-Object { $_.id -eq $SkillId }
    if (-not $UpEntry) {
        Write-Warning "Upstream skill '$SkillId' not found in registry.json. Skipping."
        return
    }

    $TempRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("ai-design-quarantine-" + [System.Guid]::NewGuid().ToString("N").Substring(0, 8))
    New-Item -ItemType Directory -Force -Path $TempRoot | Out-Null

    try {
        $RepoUrl = "https://github.com/$($UpEntry.repo).git"
        Write-Host "`n[FETCH] Cloning '$SkillId' from $($UpEntry.repo) (License: $($UpEntry.license))..." -ForegroundColor Cyan

        if ($UpEntry.subPath -and $UpEntry.subPath -ne "") {
            & git clone --depth 1 --filter=blob:none --sparse -c core.hooksPath=NUL $RepoUrl $TempRoot 2>&1 | Out-Null
            Push-Location $TempRoot
            & git sparse-checkout set $UpEntry.subPath 2>&1 | Out-Null
            Pop-Location
            $SourcePayload = Join-Path $TempRoot ($UpEntry.subPath -replace '/', '\')
        } else {
            & git clone --depth 1 --filter=blob:none -c core.hooksPath=NUL $RepoUrl $TempRoot 2>&1 | Out-Null
            $SourcePayload = $TempRoot
        }

        if (-not (Test-Path $SourcePayload)) {
            Write-Warning "  [WARN] Subpath '$($UpEntry.subPath)' not found in $($UpEntry.repo); falling back to repo root."
            $SourcePayload = $TempRoot
        }

        $GitFolder = Join-Path $TempRoot ".git"
        if (Test-Path $GitFolder) {
            Remove-Item -Path $GitFolder -Recurse -Force
        }

        if (-not (Test-SkillSecurity -ScanDir $SourcePayload -SkillId $SkillId)) {
            Write-Warning "  [ABORTED] Skipping installation of '$SkillId' due to security findings."
            return
        }

        # Auto-detect multi-skill packs when root SKILL.md is absent or flattenSubskills is true
        $RootSkillMd = Join-Path $SourcePayload "SKILL.md"
        $ShouldFlatten = ($UpEntry.PSObject.Properties["flattenSubskills"] -and $UpEntry.flattenSubskills -eq $true) -or (-not (Test-Path $RootSkillMd))

        if ($ShouldFlatten) {
            $ChildSkillDirs = @()
            foreach ($searchRoot in @($SourcePayload, (Join-Path $SourcePayload "skills"), (Join-Path $SourcePayload ".claude\skills"), (Join-Path $SourcePayload ".agents\skills"))) {
                if (Test-Path $searchRoot) {
                    $ChildSkillDirs += Get-ChildItem -Path $searchRoot -Directory -ErrorAction SilentlyContinue | Where-Object {
                        Test-Path (Join-Path $_.FullName "SKILL.md")
                    }
                }
            }
            $ChildSkillDirs = $ChildSkillDirs | Sort-Object FullName -Unique
            if ($ChildSkillDirs.Count -gt 0) {
                foreach ($child in $ChildSkillDirs) {
                    $ChildDest = Join-Path $DestRoot $child.Name
                    New-Item -ItemType Directory -Force -Path $ChildDest | Out-Null
                    Copy-Item -Path (Join-Path $child.FullName "*") -Destination $ChildDest -Recurse -Force
                    Write-Host "  [INSTALLED] Sub-skill '$($child.Name)' (from $SkillId) -> $ChildDest" -ForegroundColor Green
                }
                if (-not (Test-Path $RootSkillMd)) {
                    return
                }
            }
        }

        $FinalDest = Join-Path $DestRoot $SkillId
        New-Item -ItemType Directory -Force -Path $FinalDest | Out-Null
        Copy-Item -Path (Join-Path $SourcePayload "*") -Destination $FinalDest -Recurse -Force
        Write-Host "  [INSTALLED] Upstream skill '$SkillId' -> $FinalDest" -ForegroundColor Green
    }
    finally {
        if (Test-Path $TempRoot) {
            Remove-Item -Path $TempRoot -Recurse -Force -ErrorAction SilentlyContinue
        }
    }
}

function Install-PresetPack([string]$PresetId, [string]$DestPath) {
    $Entry = $Registry.presets | Where-Object { $_.id -eq $PresetId }
    if (-not $Entry) {
        Write-Error "Unknown preset '$PresetId'. Run .\install.ps1 -List to see available presets."
        exit 1
    }
    $SrcDir = Join-Path $RepoRoot ($Entry.path -replace '/', '\')
    $TargetFolder = if ($DestPath -and $DestPath -ne "") { $DestPath } else { (Get-Location).Path }
    New-Item -ItemType Directory -Force -Path $TargetFolder | Out-Null
    Copy-Item -Path (Join-Path $SrcDir "*") -Destination $TargetFolder -Recurse -Force
    Write-Host "[PRESET] Installed '$PresetId' (DESIGN.md + tokens.css) -> $TargetFolder" -ForegroundColor Green
}

function Install-StarterTemplate([string]$TemplateId, [string]$DestPath) {
    $Entry = $Registry.templates | Where-Object { $_.id -eq $TemplateId }
    if (-not $Entry) {
        Write-Error "Unknown template '$TemplateId'. Run .\install.ps1 -List to see available starter templates."
        exit 1
    }
    $SrcDir = Join-Path $RepoRoot ($Entry.path -replace '/', '\')
    $TargetFolder = if ($DestPath -and $DestPath -ne "") { $DestPath } else { Join-Path (Get-Location).Path $TemplateId }
    New-Item -ItemType Directory -Force -Path $TargetFolder | Out-Null
    Copy-Item -Path (Join-Path $SrcDir "*") -Destination $TargetFolder -Recurse -Force
    Write-Host "[TEMPLATE] Scaffolded starter template '$TemplateId' -> $TargetFolder" -ForegroundColor Green
}

# --- Execution Flow ---

if ($List) {
    Show-RegistryList
    exit 0
}

if ($Preset) {
    Install-PresetPack -PresetId $Preset -DestPath $OutDir
    exit 0
}

if ($Template) {
    Install-StarterTemplate -TemplateId $Template -DestPath $OutDir
    exit 0
}

if ($SyncLocal) {
    $AntigravitySkills = Resolve-TargetDir "antigravity"
    New-Item -ItemType Directory -Force -Path $AntigravitySkills | Out-Null
    Write-Host "Syncing all $($Registry.localSkills.Count) built-in Meta-Skills to $AntigravitySkills (zero deletions)..." -ForegroundColor Cyan
    foreach ($s in $Registry.localSkills) {
        Install-LocalSkill -SkillId $s.id -DestRoot $AntigravitySkills
    }
    $GlobalClaude = Resolve-TargetDir "global-claude"
    if (Test-Path $GlobalClaude) {
        Write-Host "Syncing all $($Registry.localSkills.Count) built-in Meta-Skills to $GlobalClaude (zero deletions)..." -ForegroundColor Cyan
        foreach ($s in $Registry.localSkills) {
            Install-LocalSkill -SkillId $s.id -DestRoot $GlobalClaude
        }
    }
    exit 0
}

$DestRoot = Resolve-TargetDir $Target
New-Item -ItemType Directory -Force -Path $DestRoot | Out-Null

if ($Router) {
    Write-Host "Installing $($Registry.localSkills.Count) built-in MIT Meta-Skills to $DestRoot ..." -ForegroundColor Cyan
    foreach ($s in $Registry.localSkills) {
        Install-LocalSkill -SkillId $s.id -DestRoot $DestRoot
    }
    exit 0
}

if ($Combo) {
    $ComboProp = $Registry.combos.PSObject.Properties[$Combo]
    if (-not $ComboProp) {
        Write-Error "Unknown combo '$Combo'. Run .\install.ps1 -List to see available combos."
        exit 1
    }
    $ComboData = $ComboProp.Value
    Write-Host "Installing Combo '$Combo' ($($ComboData.name)) to $DestRoot ..." -ForegroundColor Cyan
    Install-LocalSkill -SkillId "design-router" -DestRoot $DestRoot
    Install-LocalSkill -SkillId $ComboData.localSkill -DestRoot $DestRoot
    foreach ($upId in $ComboData.upstreamSkills) {
        Install-UpstreamSkill -SkillId $upId -DestRoot $DestRoot
    }
    exit 0
}

if ($Skill) {
    $IsLocal = $Registry.localSkills | Where-Object { $_.id -eq $Skill }
    if ($IsLocal) {
        Install-LocalSkill -SkillId $Skill -DestRoot $DestRoot
    } else {
        Install-UpstreamSkill -SkillId $Skill -DestRoot $DestRoot
    }
    exit 0
}

if ($All) {
    Write-Host "Installing ALL $($Registry.localSkills.Count) local Meta-Skills + ALL $($Registry.upstreamSkills.Count) Upstream Skills to $DestRoot ..." -ForegroundColor Cyan
    foreach ($s in $Registry.localSkills) {
        Install-LocalSkill -SkillId $s.id -DestRoot $DestRoot
    }
    foreach ($u in $Registry.upstreamSkills) {
        Install-UpstreamSkill -SkillId $u.id -DestRoot $DestRoot
    }
    exit 0
}

Write-Host "Usage:" -ForegroundColor Yellow
Write-Host "  .\install.ps1 -List                                    # List all Combos, Presets, Templates & Upstream Skills"
Write-Host "  .\install.ps1 -Router [-Target claude|antigravity|...] # Install built-in Router + $($Registry.combos.PSObject.Properties.Count) Combo skills"
Write-Host "  .\install.ps1 -Combo <combo-name> [-Target ...]        # Install a Combo + fetch & audit its upstream skills"
Write-Host "  .\install.ps1 -Preset <preset-id> [-OutDir <dir>]      # Drop DESIGN.md + Tailwind v4 OKLCH tokens into a project"
Write-Host "  .\install.ps1 -Template <template-id> [-OutDir <dir>]  # Scaffold a runnable starter template"
Write-Host "  .\install.ps1 -Skill <skill-id> [-Target ...]          # Fetch & audit a single skill by ID"
Write-Host "  .\install.ps1 -SyncLocal                               # Non-destructively sync all Meta-Skills locally"
Write-Host "  .\install.ps1 -All [-Target ...]                       # Install everything in registry.json"
