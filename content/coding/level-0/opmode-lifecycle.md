---
title: "OpMode Lifecycle: init → start → loop"
order: 2
level: 0
tags: [basics, opmode, lifecycle]
---

## Objective
Know what runs once and what runs repeatedly in an OpMode.

## Simple explanation
- **init** runs once when you press INIT.
- **start** runs once when you press PLAY.
- **loop** runs many times until STOP.

## Code snippet
```java filename=BasicOpMode.java
@TeleOp
public class BasicOpMode extends OpMode {
  @Override public void init() {
    // set up hardware
  }
  @Override public void start() {
    // reset timers
  }
  @Override public void loop() {
    // drive and update telemetry
  }
}
```

## Practical exercise
Write one sentence for what you would do in init, start, and loop.

## What to submit
- Three sentences (init, start, loop)
