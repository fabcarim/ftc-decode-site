---
title: "Gamepad Mapping & Safe Stop"
order: 2
level: 2
tags: [drive, safety]
---

## Objective
Map controls clearly and add a safe stop.

## Simple explanation
Good mapping prevents confusion. A safe stop forces the robot to stop even if a stick is stuck.

## Code snippet
```java filename=SafeStop.java
boolean stopPressed = gamepad1.back;
if (stopPressed) {
  leftPower = 0;
  rightPower = 0;
}
```

## Practical exercise
Assign a "panic" button and test it by holding the stick forward, then pressing the button.

## What to submit
- Which button is your safe stop
- A short note that the stop works
