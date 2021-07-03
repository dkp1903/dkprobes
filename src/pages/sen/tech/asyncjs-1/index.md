---
title: First step to AsyncJS
date: "2020-07-18T22:40:32.169Z"
description: AsyncJS - the beginning
tags: ["tech"]

---

Most developers who come to JavaScript from Java, which uses threads for Asynchronicity are often left wondering - why the hell can
JS not do the same? Or can it? Let's find out. 

Asynchronicity is the ability to break the regular flow of control in a script, in order to not let the program stall on blocking operations - calls that take a long time to complete - talk network requests or such.

Asynchronicity is usually achieved by using multiple threads - this is the way Java does it - all the stuff that you don't want your main thread to bother wasting time on, just spawn off a new thread for.

But that means, that Java has the ability to directly create and manage threads - this makes it decidedly more complex, but that's the way it was built.

JavaScript is higher order than Java, and was initially meant to be a scripting language, and not to manage threads. Now, when the use case for it did come, the powers that be had two choices - add new features to the language 
to make threading allowable from within JavaScript, or find another way for it.

And the far thinking powers behind the language, decided to try something else, rather than complicate JavaScript.

How could you make a language Asynchronous, without actually calling multiple threads?

The first place they looked for, is where JS ran - in the browser, initially. Java, on the other hand, runs on a server.

JavaScript doesn't do every little thing itself - it takes help of several web browser 'APIs', to do things - for instance, there's a timer API, an XHR API, and so on.

JavaScript uses these APIs to defer some logic to the browser, and expects the output when it's done.

That means, that JavaScript could also use the same logic to defer code that it knows would take a long time.

And that's where comes in setTimeout(), the gateway to the world of AsyncJS.

To the uninitiated, setTimeout() is a function used within JavaScript, which looks something like this - 

```
setTimeout(() => alert('Hello'), 1000)
```

Don't worry if it looks like Gobbledygook, here's a more readable version of the same snippet : 

```
setTimeout(function a(){
    alert('Hello')
    }, 1000)
```

Better now? 

setTimeout takes two params - a function, and a time in milliseconds. The function is what you'd call a callback function, a function that will be
CALLED BACK, when the time as provided as the second param, is up. Meaning, after 1000ms, the function a is called.

That's the more widely accepted, slightly inaccurate version.

What goes behind the scenes, is horrifyingly amazing(Go figure:/)

setTimeout is NOT a JavaScript function, first. There goes your belief system, but I am sorry - it is what it is.

It's instead, a facade, for a web browser API being called behind the scenes - the Timer API, and for once, in the godforsaken world of 
bad naming conventions, does exactly what it sounds like - it's a TIMER.

The execution is interesting - when the JavaScript compiler runs into setTimeout, it just does two things - it first heaves a sigh of relief, and then, throws the whole thing, 
the callback, and the time, to the web browser API, and forgets all about it. Literally, yes. Forgets.

For JavaScript, that line has finished execution. It can continue on with the rest of the code.

Did you see it happen? Did you see how JavaScript went asynchronous without us having to mess with threads? 

That's the beauty.

So, what happens when the compiler throws the stuff to the browser API? Simple, the browser counts till the time given as param is up, and then adds the function to the call stack.

The call stack is where functions go, to get called.

This isn't entirely accurate, but that's something we'll discuss in a coming probe. 

Till then, just remember this - JavaScript is NOT an Asynchronous language. It's synchronous by design, but supports Async functionality by cleverly
utilizing the environment it runs in - the browser.

Coming in the next probe, what really happens with the callback function, and why it isn't very good.