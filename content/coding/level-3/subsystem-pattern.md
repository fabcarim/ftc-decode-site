---
title: "Subsystem Pattern"
order: 1
level: 3
tags: [architecture, subsystems]
---

## Objective
Group related hardware and logic into a simple subsystem class.

## Simple explanation
A subsystem is one file that owns its motors/sensors and exposes clear methods. This makes code reusable.

## Code snippet
```java filename=IntakeSubsystem.java
public class IntakeSubsystem {
  private final DcMotor intake;

  public IntakeSubsystem(HardwareMap hw) {
    intake = hw.get(DcMotor.class, "intakeMotor");
  }

  public void intakeIn() { intake.setPower(1.0); }
  public void intakeOut() { intake.setPower(-1.0); }
  public void stop() { intake.setPower(0); }
}
```

## Practical exercise
Create one subsystem for a single motor on your robot.

## What to submit
- The subsystem class file
- One OpMode line that uses it
