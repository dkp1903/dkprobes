---
title: Deflowering the event loop
date: "2020-12-05T22:40:32.169Z"
description: The event loop, and why it is such a big deal
tags: ["tech"]

---

How does JS run? The script files are parsed by the JS interpreter, with functions 
being added to the call stack, and being called from there. 
That was something that we discussed in the [AsyncJS-1 Probe](../asyncjs-1).


