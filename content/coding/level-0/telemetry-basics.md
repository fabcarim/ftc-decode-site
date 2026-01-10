---
title: "Telemetry Basics"
order: 3
level: 0
tags: [basics, telemetry]
---

## Objective
Use telemetry to show robot status on the Driver Station.

## Simple explanation
Telemetry is a text dashboard. Use it to show values like power, position, or state.

## Code snippet
```java filename=TelemetryDemo.java
telemetry.addData("Drive power", drivePower);
telemetry.addData("State", currentState);
telemetry.update();
```

## Practical exercise
Add two telemetry lines to your TeleOp and check they update.

## What to submit
- The two telemetry lines you added
- A screenshot of the Driver Station telemetry
