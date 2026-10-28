<#
.SYNOPSIS
    AI Design Playbook -- Security-Auditing Skill & Combo Installer (PowerShell)
.DESCRIPTION
    Installs built-in Meta-Skills (design-router + 7 Combos) and selectively fetches
    upstream design skills from GitHub using git sparse-checkout + static security auditing.
.EXAMPLE
    .\install.ps1 -List
    .\install.ps1 -Router
    .\install.ps1 -Combo anti-slop-landing
    .\install.ps1 -Combo scroll-3d-world -Target antigravity
    .\install.ps1 -Skill impeccable -Target global-claude
#>

param(
    [switch]$List,
    [switch]$Router,
    [string]$Combo,
    [string]$Skill,
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

$Registry = Get-Content $RegistryPath -Raw | ConvertFrom-Json

function Resolve-TargetDir([string]$TargetSpec) {
    switch ($TargetSpec.ToLower()) {
        "claude"        { return Join-Path (Get-Location) ".claude\skills" }
        "global-claude" { return Join-Path $HOME ".claude\skills" }
        "cursor"        { return Join-Path (Get-Location) ".cursor\skills" }
        "antigravity"   { return Join-Path $HOME ".gemini\config\skills" }
        "codex"         { return Join-Path (Get-Location) ".agents\skills" }
        default         { return $TargetSpec }
    }
}

function Show-RegistryList {
    Write-Host "`n============================================================" -ForegroundColor Cyan
    Write-Host "  AI DESIGN PLAYBOOK -- SKILL & COMBO REGISTRY (v$($Registry.version))" -ForegroundColor Cyan
    Write-Host "============================================================`n" -ForegroundColor Cyan

    Write-Host "[Built-in MIT Meta-Skills (Included in this Repo)]" -ForegroundColor Green
    foreach ($s in $Registry.localSkills) {
        Write-Host ("  - {0,-28} : {1}" -f $s.id, $s.description)
    }

    Write-Host "`n[7 Curated Workflow Combos (-Combo <name>)]" -ForegroundColor Yellow
    foreach ($prop in $Registry.combos.PSObject.Properties) {
        $c = $prop.Value
        $upList = ($c.upstreamSkills -join ", ")
        Write-Host ("  - {0,-24} : {1}" -f $prop.Name, $c.name)
        Write-Host ("    Upstream Skills          : {0}" -f $upList) -ForegroundColor DarkGray
    }

    Write-Host "`n[Upstream Skills Catalog (-Skill <id>)]" -ForegroundColor Magenta
    foreach ($u in $Registry.upstreamSkills) {
        Write-Host ("  - {0,-32} [{1}] ({2}) - {3}" -f $u.id, $u.category, $u.license, $u.repo)
    }
    Write-Host ""
}

function Test-SkillSecurity([string]$ScanDir, [string]$SkillId) {
    if ($SkipAudit) {
        Write-Host "  [WARN] Skipping security audit for '$SkillId' (-SkipAudit specified)." -ForegroundColor Yellow
        return $true
    }

    Write-Host "  [AUDIT] Scanning '$SkillId' for prompt injection, hidden Unicode & malicious hooks..." -ForegroundColor Cyan
    $Findings = @()

    # 1. Check package.json for preinstall / postinstall hooks
    $PkgFiles = Get-ChildItem -Path $ScanDir -Filter "package.json" -Recurse -File -ErrorAction SilentlyContinue
    foreach ($pkg in $PkgFiles) {
        $content = Get-Content $pkg.FullName -Raw -ErrorAction SilentlyContinue
        if ($content -match '"(preinstall|postinstall|preuninstall)"\s*:') {
            $Findings += "Suspicious lifecycle hook ($($Matches[1])) in $($pkg.FullName)"
        }
    }

    # 2. Scan text files for prompt injection & remote code execution pipes
    $TextFiles = Get-ChildItem -Path $ScanDir -Recurse -File -Include *.md,*.txt,*.json,*.yaml,*.yml,*.sh,*.ps1,*.js,*.ts,*.py -ErrorAction SilentlyContinue
    $DangerPatterns = @(
        @{ Name = "Prompt Injection Override"; Regex = '(?i)(ignore all previous instructions|ignore prior instructions|disregard system prompt|you are now in developer mode)' },
        @{ Name = "Shell Pipe Execution";      Regex = '(?i)(curl\s+[^\n|]+\|\s*(ba)?sh|wget\s+[^\n|]+\|\s*(ba)?sh|Invoke-Expression\s+\(New-Object\s+Net\.WebClient)' },
        @{ Name = "Bidi Unicode Override";     Regex = '[\u202A-\u202E\u2066-\u2069]' }
    )

    foreach ($file in $TextFiles) {
        $raw = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
        if ([string]::IsNullOrEmpty($raw)) { continue }
        foreach ($pat in $DangerPatterns) {
            if ($raw -match $pat.Regex) {
                $Findings += "$($pat.Name) detected in $($file.Name)"
            }
        }
    }

    if ($Findings.Count -gt 0) {
        Write-Host "  [BLOCKED] Security audit FAILED for '$SkillId':" -ForegroundColor Red
        foreach ($f in $Findings) {
            Write-Host "    - $f" -ForegroundColor Red
        }
        return $false
    }

    Write-Host "  [PASS] '$SkillId' passed static security audit." -ForegroundColor Green
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

        # Remove .git directory inside quarantine before scanning/copying
        $GitFolder = Join-Path $TempRoot ".git"
        if (Test-Path $GitFolder) {
            Remove-Item -Path $GitFolder -Recurse -Force
        }

        if (-not (Test-SkillSecurity -ScanDir $SourcePayload -SkillId $SkillId)) {
            Write-Warning "  [ABORTED] Skipping installation of '$SkillId' due to security findings."
            return
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

# --- Execution Flow ---

if ($List) {
    Show-RegistryList
    exit 0
}

$DestRoot = Resolve-TargetDir $Target
New-Item -ItemType Directory -Force -Path $DestRoot | Out-Null

if ($Router) {
    Write-Host "Installing built-in MIT Meta-Skills to $DestRoot ..." -ForegroundColor Cyan
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
    Write-Host "Installing ALL local Meta-Skills + ALL 44 Upstream Skills to $DestRoot ..." -ForegroundColor Cyan
    foreach ($s in $Registry.localSkills) {
        Install-LocalSkill -SkillId $s.id -DestRoot $DestRoot
    }
    foreach ($u in $Registry.upstreamSkills) {
        Install-UpstreamSkill -SkillId $u.id -DestRoot $DestRoot
    }
    exit 0
}

# Default if no flags passed: show help + list summary
Write-Host "Usage:" -ForegroundColor Yellow
Write-Host "  .\install.ps1 -List                                    # List all Combos & Upstream Skills"
Write-Host "  .\install.ps1 -Router [-Target claude|antigravity|...] # Install built-in Router + 7 Combo skills"
Write-Host "  .\install.ps1 -Combo <combo-name> [-Target ...]        # Install a Combo + fetch & audit its upstream skills"
Write-Host "  .\install.ps1 -Skill <skill-id> [-Target ...]          # Fetch & audit a single skill by ID"
Write-Host "  .\install.ps1 -All [-Target ...]                       # Install everything in registry.json"
