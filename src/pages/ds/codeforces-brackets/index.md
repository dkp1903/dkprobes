---
title: Two Brackets(Problem 1452C Codeforces)
date: "2020-11-24T22:40:32.169Z"
description: A stack approach competitive programming problem - Discussed in detail in the post
tags: ["dsa"]

---

> Problem : You are given a string s, consisting of brackets of two types: '(', ')', '[' and ']'.

> A string is called a regular bracket sequence (RBS) if it's of one of the following types:

> - empty string;
> - '(' + RBS + ')';
> - '[' + RBS + ']';
> - RBS + RBS.

> where plus is a concatenation of two strings.

> In one move you can choose a non-empty subsequence of the string s (not necessarily consecutive) that is an RBS, remove it from the string and concatenate the remaining parts without changing the order.

> What is the maximum number of moves you can perform?

[Here](https://codeforces.com/problemset/problem/1452/C) is the full problem statement.

Step 1 : Pro-tip : Matching brackets and related questions usually are solved using a stack. Remember the typical, overused
[check matching brackets problem](https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/), or the [infix to postfix conversion](https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/) problem?

Step 2 : Warning - The problem has been purposely formulated to make it look like a DP problem - 
an empty string is the base case, you add elements one by one. However, it needn't use DP.

Step 3 : A trick used for CP problems is to look at the given examples to try and figure out a pattern. So, let's look through the 
examples given in the 
