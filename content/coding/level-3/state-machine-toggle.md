---
title: "Enum State + Toggle with Debounce"
order: 2
level: 3
tags: [state, input]
---

## Objective
Use an enum state and a button toggle with debounce.

## Simple explanation
A state machine is a small set of named states. Debounce means a button press only counts once.

## Code snippet
```java filename=ToggleExample.java
enum ClawState { OPEN, CLOSED }
ClawState state = ClawState.OPEN;
boolean lastButton = false;

boolean button = gamepad1.a;
if (button && !lastButton) {
  state = (state == ClawState.OPEN) ? ClawState.CLOSED : ClawState.OPEN;
}
lastButton = button;
```

## Practical exercise
Add a toggle to open/close a servo on button A.

## What to submit
- The enum you used
- A short note that debounce works
