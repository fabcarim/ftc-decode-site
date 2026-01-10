---
title: "Motor Directions"
order: 2
level: 1
tags: [hardware, motors]
---

## Objective
Make all drive motors spin the correct direction.

## Simple explanation
If one motor is reversed, the robot will spin instead of going straight. Fix it in code, not by swapping wires.

## Code snippet
```java filename=DriveMotors.java
leftFront.setDirection(DcMotorSimple.Direction.REVERSE);
leftRear.setDirection(DcMotorSimple.Direction.REVERSE);
rightFront.setDirection(DcMotorSimple.Direction.FORWARD);
rightRear.setDirection(DcMotorSimple.Direction.FORWARD);
```

## Practical exercise
Drive forward for 2 seconds. If the robot turns, reverse one side and test again.

## What to submit
- A note of which motors were reversed
- A short video or photo of the robot driving straight
