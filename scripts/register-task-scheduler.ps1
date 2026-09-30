# Windows 작업 스케줄러 자동 등록 스크립트
# 1) 의학 칼럼 하루 4회: 08:00, 12:00, 16:00, 20:00
# 2) 임상 Q&A 매일 1회: 10:00 AM

$WorkingDir = "c:\Users\PC\Downloads\home"
$NodePath = (Get-Command node).Source

# -------------------------------------------------------------
# 1. 칼럼 자동발행 작업 스케줄러 등록
# -------------------------------------------------------------
$ColumnTaskName = "Healim_Column_AutoPublisher"
$ColumnAction = New-ScheduledTaskAction -Execute $NodePath -Argument "scripts/auto-publish-column.mjs" -WorkingDirectory $WorkingDir

$ColTrigger1 = New-ScheduledTaskTrigger -Daily -At 08:00AM
$ColTrigger2 = New-ScheduledTaskTrigger -Daily -At 12:00PM
$ColTrigger3 = New-ScheduledTaskTrigger -Daily -At 04:00PM
$ColTrigger4 = New-ScheduledTaskTrigger -Daily -At 08:00PM

$Settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable

Unregister-ScheduledTask -TaskName $ColumnTaskName -Confirm:$false -ErrorAction SilentlyContinue
Register-ScheduledTask -TaskName $ColumnTaskName -Action $ColumnAction -Trigger @($ColTrigger1, $ColTrigger2, $ColTrigger3, $ColTrigger4) -Settings $Settings -Description "해아림한의원 인천부평점 매일 4회 칼럼 자동발행 및 Cloudflare Pages 배포"

Write-Host "✅ [1/2] 칼럼 작업 스케줄러 등록 완료 (08:00, 12:00, 16:00, 20:00)" -ForegroundColor Green

# -------------------------------------------------------------
# 2. Q&A 자동발행 작업 스케줄러 등록
# -------------------------------------------------------------
$QaTaskName = "Healim_QA_AutoPublisher"
$QaAction = New-ScheduledTaskAction -Execute $NodePath -Argument "scripts/auto-publish-qa.mjs" -WorkingDirectory $WorkingDir

$QaTrigger = New-ScheduledTaskTrigger -Daily -At 10:00AM

Unregister-ScheduledTask -TaskName $QaTaskName -Confirm:$false -ErrorAction SilentlyContinue
Register-ScheduledTask -TaskName $QaTaskName -Action $QaAction -Trigger @($QaTrigger) -Settings $Settings -Description "해아림한의원 인천부평점 매일 1회 임상 Q&A 자동발행 및 Cloudflare Pages 배포"

Write-Host "✅ [2/2] Q&A 작업 스케줄러 등록 완료 (매일 10:00 AM)" -ForegroundColor Green

Write-Host ""
Write-Host "🎉 [전체 완료] 칼럼 4회 및 Q&A 1회 자동발행 스케줄이 Windows 시스템에 정상 등록되었습니다!" -ForegroundColor Cyan
