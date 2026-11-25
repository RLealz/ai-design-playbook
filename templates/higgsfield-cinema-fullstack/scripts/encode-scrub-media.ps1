<#
.SYNOPSIS
    Deterministic GOP-4 Scroll-Scrub MP4 + Exact First-Frame Poster Encoder for Higgsfield Websites.
#>
param(
    [Parameter(Mandatory=$true)][string]$SourceMp4,
    [string]$OutDir = "app\public\assets\world",
    [string]$SceneName = "scene-01"
)

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null
$DesktopMp4    = Join-Path $OutDir "$SceneName.mp4"
$MobileMp4     = Join-Path $OutDir "$SceneName-mobile.mp4"
$DesktopPoster = Join-Path $OutDir "$SceneName-poster.png"
$MobilePoster  = Join-Path $OutDir "$SceneName-mobile-poster.png"

Write-Host "[1/4] Encoding GOP-4 scrub-friendly desktop MP4 -> $DesktopMp4" -ForegroundColor Cyan
& ffmpeg -y -i $SourceMp4 -an -c:v libx264 -pix_fmt yuv420p -vf "scale=1920:-2" -g 4 -keyint_min 4 -sc_threshold 0 -crf 21 -movflags +faststart $DesktopMp4

Write-Host "[2/4] Encoding GOP-2 scrub-friendly mobile MP4 -> $MobileMp4" -ForegroundColor Cyan
& ffmpeg -y -i $SourceMp4 -an -c:v libx264 -pix_fmt yuv420p -vf "scale=960:-2" -g 2 -keyint_min 2 -sc_threshold 0 -crf 23 -movflags +faststart $MobileMp4

Write-Host "[3/4] Extracting exact post-encode frame-0 posters..." -ForegroundColor Green
& ffmpeg -y -i $DesktopMp4 -frames:v 1 $DesktopPoster
& ffmpeg -y -i $MobileMp4 -frames:v 1 $MobilePoster
Write-Host "[4/4] Done! Wire $SceneName into ScrollScrubStage." -ForegroundColor Green
