---
title: "Tank vs Arcade Drive"
order: 1
level: 2
tags: [drive, gamepad]
---

## Objective
Understand two common drive styles and when to use them.

## Simple explanation
- **Tank**: left stick controls left wheels, right stick controls right wheels.
- **Arcade**: one stick drives forward/back and turning.

## Code snippet
```java filename=DriveStyles.java
// Tank drive
leftPower = -gamepad1.left_stick_y;
rightPower = -gamepad1.right_stick_y;

// Arcade drive
drive = -gamepad1.left_stick_y;
turn = gamepad1.left_stick_x;
leftPower = drive + turn;
rightPower = drive - turn;
```

## Practical exercise
Test both styles for 2 minutes each. Decide which feels easier for your drivers.

## What to submit
- Which drive style you chose and why (1-2 sentences)
