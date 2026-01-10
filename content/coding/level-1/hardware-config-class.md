---
title: "Centralized Hardware Config Class"
order: 3
level: 1
tags: [hardware, architecture]
---

## Objective
Create one class that holds all hardware devices.

## Simple explanation
Instead of finding hardware in every OpMode, store it once and reuse it.

## Code snippet
```java filename=RobotHardware.java
public class RobotHardware {
  public DcMotor leftFront;
  public DcMotor rightFront;

  public void init(HardwareMap hw) {
    leftFront = hw.get(DcMotor.class, "leftFront");
    rightFront = hw.get(DcMotor.class, "rightFront");
  }
}
```

## Practical exercise
Make a RobotHardware class and move your motor setup into it.

## What to submit
- The RobotHardware class
- One OpMode that uses it
