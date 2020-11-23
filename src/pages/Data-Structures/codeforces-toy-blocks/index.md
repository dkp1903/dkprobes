---
title: Toy Blocks(Problem 1452B Codeforces)
date: "2020-11-23T22:40:32.169Z"
description: A greedy, math competitive programming problem - Discussed in detail in the post
tags: ["dsa"]

---

> Problem Statement :  You are given n boxes. Each of them has some balls in it. No. of balls in each box may/may not be equal.
> You pick a box, take out all the balls, and redistribute them among the remaining boxes. How many minimum additional balls would
> you need to add, to make sure that each of the n-1 boxes have the same number of balls?

In case the problem is still not clear, check out the original problem statement [here](https://codeforces.com/problemset/problem/1452/B)

Step 1 : The first point that we have to realize in such problems, is that you aren't actually supposed to use a for loop to add a ball one-by-one to a box.
You just need to have a formula, and for that, you need to have a logic.

Step 2 : Most CP problems have a hidden hint in the problem itself - here, check the word 'minimum'. So, even 0 is a possible answer - you don't have to add any ball. It just redistributes well enough.

Step 3 : Remember - easy isn't silly in competitive programming. We can see, that the number of balls will either increase, or remain the same.
They can never decrease. So, the minimum total number of balls AFTER the operation has to be equal to the number of balls before.

Step 4 : We need equal number of balls in all boxes, finally. So, we need to worry about the boxes that are going to disturb this equality - aka, the box with the max number of balls.

Step 5 : There'll be two cases - 
    A. We pick a box that has the max no. of balls in them. 
    B. We pick a box other than the one with the max.

Step 6 : Case A is straightforward - the only constraint we'd be bothered by is the one described in Step 3.

Step 7 : Case B is not that easy - you now have to make sure that all the boxes have as many balls in them as there are in the
box with the max balls, to ensure that there are same no. of balls in all boxes.

Step 8 : What the hell just happened.

Step 9 : This just happened - the minimum number of balls PER BOX has to be - the larger of 

