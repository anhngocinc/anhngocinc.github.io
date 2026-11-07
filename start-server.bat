@echo off
title AnhNgocInc.com - Local Web Server
chcp 65001 >nul
cls
echo =========================================================================
echo   ANHNGOCINC.COM - MÁY CHỦ WEB NỘI BỘ (LOCAL HTTP SERVER)
echo =========================================================================
echo.
echo   [*] Dang khoi dong may chu web tai: http://localhost:8080/videos.html
echo   [*] Giao thuc HTTP giup phat video YouTube Embed 100%% khong bi chan CORS!
echo.
echo   De dung may chu: Nhan to hop phim Ctrl + C trong cua so nay.
echo =========================================================================
echo.
start http://localhost:8080/videos.html
python -m http.server 8080
if %errorlevel% neq 0 (
    echo.
    echo Khong tim thay Python! Dang thu bang npx serve...
    npx serve -l 8080
)
pause

