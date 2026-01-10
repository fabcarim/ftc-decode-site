---
title: "Debugging & Code Quality"
order: 1
level: 5
tags: [debug, quality]
---

## Objective
Add logging, tunable values, and safety checks.

## Simple explanation
Good robots report what they are doing and stop safely when something is wrong.

## Code snippet
```java filename=QualityChecks.java
public static double DRIVE_POWER = 0.5; // tunable

if (!leftFront.isBusy() || !rightFront.isBusy()) {
  telemetry.addLine("Drive motor stopped early!");
}
telemetry.addData("Drive power", DRIVE_POWER);
```

## Practical exercise
Add one telemetry line and one tunable constant to your TeleOp.

## What to submit
- The telemetry line
- The tunable constant name and value
