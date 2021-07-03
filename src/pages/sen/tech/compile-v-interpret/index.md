---
title: Compiled vs Interpreted languages
date: "2021-04-19T22:40:32.169Z"
description: Definition and misconceptions
tags: ["tech"]

---

Suppose you want to read a German book, and you don't know German. You could do either of two things : 

1. Get an English version of the book and read it yourself.

2. Get a German guy, and ask him/her to read it line by line and translate it to you.

The former is analogous to compiled languages, the latter to interpreted.

Compiled languages are compiled - they are first converted into some gibberish, aka, machine code, a bunch of illegible numbers and letters that a processor can read and parse blazingly fast.

There needs to be this additional step of compilation, or build as it's often called - to translate human written code to this gibberish. Someone needs to sit and write out the whole English translation from the German one.

However, once we have the translation, we are able to read a lot faster.

Interpreted languages, on the other hand, are not compiled before running, but rather, go through it line by line. Your German friend sits alongside you and translates it line by line. 

Examples of compiled languages are C++, C, Go 

Examples of interpreted languages are PHP, Javascript.

Python has a compiled and an interpreted implementation both.

The advantages of compiled languages are the speed of running after they're built. You don't have to worry about the German translatior at all, after you have the English copy.

The disadvantage is the additional build step. 
Also, the generated code is platform specific. A code generated for a particular type of machine can only work on that machine. Running it on a different one would need rebuilding on that machine.

Interpreted languages take time to interpret and be run, but they can easily be modified on the fly.

Wonder why Java isn't a part of the examples? Wait for my next probe to find out.
