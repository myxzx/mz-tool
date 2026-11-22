@echo off
title MZ TOOL
cd /d "%~dp0"
echo MZ TOOL : http://localhost:8000  (ferme cette fenetre pour arreter)
start "" http://localhost:8000
python -m http.server 8000 || py -m http.server 8000 || (echo Python introuvable : ouvre simplement index.html && pause)
