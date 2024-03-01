@echo off
::___________Set Variables______________________
:: Origin for this repo
@REM   set this_repo=https://github.com/Pyran-Ranjith/Global.git
  set this_repo=https://github.com/Pyran-Ranjith/PyraN-Technologies.git
@REM   set this_repo= https://github.com/Dinesh-Saman/PyraN-Technologies.git
::____________Process begin here________________________
::echo Hear is the result_______________________
::set origin 1. after clone to create local repo 
    git remote set-url origin %this_repo%
::set origin 2. Otherwise (after creade local git manually)
    ::git remote add origin %this_repo%
::disply origin
    git remote -v
