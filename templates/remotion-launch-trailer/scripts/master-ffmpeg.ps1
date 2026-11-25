<#
.SYNOPSIS
    Runs The Gauntlet 2fps frame extraction + -14 LUFS social loudness mastering on a rendered Remotion MP4.
#>
param(
    [string]$InputMp4 = "out\draft-16x9.mp4",
    [string]$OutputMp4 = "out\master-16x9.mp4"
)

$FramesDir = "out\gauntlet-frames"
New-Item -ItemType Directory -Force -Path $FramesDir | Out-Null

Write-Host "[1/2] Extracting 2fps beat-boundary frames for Gauntlet inspection -> $FramesDir" -ForegroundColor Cyan
& ffmpeg -y -i $InputMp4 -vf "fps=2" "$FramesDir\frame_%03d.png"

Write-Host "[2/2] Mastering crisp yuv420p H.264 (-crf 18) + -14 LUFS audio -> $OutputMp4" -ForegroundColor Green
& ffmpeg -y -i $InputMp4 -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow -af "loudnorm=I=-14:TP=-1.5:LRA=11" $OutputMp4
