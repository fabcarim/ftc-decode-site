---
title: "Step-Based Autonomous"
order: 1
level: 4
tags: [autonomous, sequencing]
---

## Objective
Create a simple step-by-step autonomous sequence.

## Simple explanation
Use a step number and timers to move from one action to the next.

## Code snippet
```java filename=AutoSteps.java
int step = 0;
ElapsedTime timer = new ElapsedTime();

if (step == 0) {
  driveForward(0.4);
  if (timer.seconds() > 1.5) { step++; timer.reset(); }
} else if (step == 1) {
  stopDrive();
  if (timer.seconds() > 0.2) { step++; }
}
```

## Practical exercise
Make a 3-step routine: drive forward, stop, then turn.

## What to submit
- Your step list (3 steps)
- A short note that it runs in the correct order
