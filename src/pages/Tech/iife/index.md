---
title: Immediately Invoked Function Expressions
date: "2021-02-18T22:40:32.169Z"
description: IIFEs in Javascript - what they are and why they're useful
tags: ["tech"]

---

Like few other concepts in Javascript, IIFEs are exactly what they sound like - they're function expressions, that are invoked
immediately, that is, as soon as they're declared.

Here's a normal function in JS - 

```
// Function declaration
function a() {
    console.log('b')
}

// Function call
a()
// Logs 'b'
```

Here's the same thing done using IIFE 

```
(function a() {
    console.log('b')
})()
// Logs 'b'
```

Two things are different here - 
1. The function definition is wrapped in parens
2. The calling parens are added immediately after the function definition, rather than calling it separately.

And that's essentially what IIFEs are - they allow the function to be called immediately after it's defined.