---
title: "Timeouts & Deterministic Behavior"
order: 2
level: 4
tags: [autonomous, safety]
---

## Objective
Use timeouts so autonomous steps always finish.

## Simple explanation
A timeout forces a step to end even if a sensor fails. This keeps your auto predictable.

## Code snippet
```java filename=TimeoutGuard.java
if (step == 2) {
  liftUp();
  if (timer.seconds() > 2.0 || liftAtTarget()) {
    stopLift();
    step++;
    timer.reset();
  }
}
```

## Practical exercise
Add a timeout to one step in your autonomous routine.

## What to submit
- The step number with the timeout
- The timeout value you chose
