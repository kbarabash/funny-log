#FunnyLog
[![Build Status](https://travis-ci.org/kbarabash/funny-log.svg?branch=master)](https://travis-ci.org/kbarabash/funny-log)
[![npm version](https://badge.fury.io/js/funny-log.svg)](https://badge.fury.io/js/funny-log)

Decorator which updates user's messages.
I don't know why I did it.

##on off functionality
* FunnyLog **on**() - turn on the logger
* FunnyLog **off**() - turn off the logger
* boolean **isOff**() - shows the funny logger's status
* boolean **isOn**() - shows the funny logger's status

##Methods
* FunnyLog **haha**(string message) - ☜(ﾟヮﾟ☜) %message% 
* FunnyLog **goToYourDaddy**(string message) - ┌∩┐(◣_◢)┌∩┐ %message% 
* FunnyLog **angry**(string message) - (ノಠ益ಠ)ノ彡┻━┻ %message%.
    Prefix can be one of these:
    - (ノಠ益ಠ)ノ彡┻━┻
    - (ಠ益ಠ)
    - (っ-●益●)っ ~~
    - (╬ ಠ益ಠ)
* FunnyLog **why**(string message) - ლ(`◉◞౪◟◉‵ლ) %message% 
* FunnyLog **partyTime**(string message) - ┏(-_-)┛┗(-_-﻿ )┓┗(-_-)┛┏(-_-)┓ %message% 
* FunnyLog **wtf**(string message) - (ಠ_ಠ) %message% 
* FunnyLog **iAmChampion**(string message) - ᕦ(ò_ó*)ᕤ %message% 
* FunnyLog **youSoMean**(string message) - (づ｡◕‿‿◕｡)づ %message% 
* FunnyLog **iDontCare**(string message) - ╭∩╮（︶︿︶）╭∩╮ %message% 
* FunnyLog **hehehe**(string message) - ( ¬‿¬) %message% 
* FunnyLog **allPraiseToHim**(string message) - し(*･∀･)／♡＼(･∀･*)ノ %message% 
* FunnyLog **mmmOkay**(string message) - ༼ ºل͟º ༽ %message% 
* FunnyLog **homer**(string message) - (_8(l) %message%,
* FunnyLog **really**(string message) - "﴾͡๏̯͡๏﴿ O'RLY? %message%,
* FunnyLog **soWhat**(string message) - ¯\_(ツ)_/¯ %message%,
    Prefix can be one of these:
    - ¯\_(ツ)_/¯
    - ʅ(｡◔‸◔｡)ʃ
* FunnyLog **omg**(string message) - ┌༼ ⊘ _ ⊘ ༽┐ %message%,
    Prefix can be one of these:
    - ┌༼ ⊘ _ ⊘ ༽┐
    - ༼ᶿ᷇ཫᶿ᷆༽
* FunnyLog **noWay**(string message) - ༼ ಥل͟ಥ ༽ %message%,
* FunnyLog **facepalm**(string message) - (－_ლ) %message%,
* FunnyLog **doubleFacepalm**(string message) - (ლ_－)(－_ლ) %message%,
* FunnyLog **bender**(string message) - |==(̢└͇̅┘͇̅(▤8כ−◦  %message%
* FunnyLog **smile**(string message) - (ツ) %message%.
    Prefix can be one of these:
    - (ツ)
    - (ღ˘⌣˘ღ)
    - ( ͡° ͜ʖ ͡°)
    -  ༼ຈل͜ຈ༽
* FunnyLog **random**(string message) - %random-prefix% %message%.


##Example
```JavaScript
var logger = new FunnyLogger();
logger.haha('Hello World!'); //☜(ﾟヮﾟ☜) Hello World!
```
