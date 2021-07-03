---
title: 'Next greater element in an array'
date: "2020-07-27T22:40:32.169Z"
description: Given an array, find the next greater element for every element
tags: ["dsa"]
---

Hola! 

Today, we’re talking about a problem that’s commonly asked in tech interviews. Tbh, I was asked this very question in my interview for an internship at Amazon, and to be even more honest, I could get it right only too late. 

So I thought, 

![](./a2a.jpg)

The problem is, that given an array, you’re supposed to find the next greater element, for every element of that array, and if one doesn’t exist, give -1. 

For instance, for an array A = [1, 3, 4, 2, 0], you’d get

next = [3, 4, -1, -1, -1]. 

The brute force solution should be pretty straightforward. We loop through the array, and check all the elements AFTER the particular element we are at, if it’s bigger. If we reach the end, that means the particular element doesn’t have a next greater element. 

Time complexity?

For the first element, we check elements from the second to the last element, in the worst case. That’s n-1 checks. For the second, n-2, and so on. For the kth(index = k-1) element, we make n-k checks. Thus, 

total checks = n-1 + n-2 + n-3 + …..1 = n*(n-1)/2 

Which is O(N^2). 

Space complexity is O(1). 

Optimized solution

Thought process : 

For every element, only the elements AFTER matter. We are least bothered with the ones BEFORE.

In such type of questions, a stack is generally used. So, let’s take that as a hint and think that way. 

The last element will always give a -1, since there is no next element.

A particular element will be the NGE for all elements before it, until a larger element comes. This larger element will be the NGE for all elements before, until a larger element comes, and so on. This continues until we reach the first element.

Thus, if we go reverse, that is, from last to first in the array, we can employ this logic.

```
#define vector<int> vi;

vi NGE(vi a)
{    
    stack<int>s;    
    vi next(a.size());    
    int n = a.size();    
    for(int i = n-1; i >= 0; i--)    
    {        //Removing the smaller elements            

        while(!s.empty() && s.top() <= a[i])            
            s.pop();

        // If the stack is empty, it means that this element is 
        // the largest one encountered so far.         
        // Thus, its next will be -1.        
        if(s.empty())            
            next[i] = -1;

        // If there’s a larger element, it’ll be the next for all 

        //elements, until a larger one comes.        
        else            
            next[i] = s.top();

        s.push(a[i]);    
    }

    return next;
}

```

Time complexity : There’s a while loop, inside of a for loop, which can make some people confuse it as O(N^2). However, do note that inside the while loop, there’s only one operation, and that is s.pop(), which takes O(1) time. So, the while loop will be constant time, thus bringing the overall complexity to be O(N), where N is the size of the array. 

Space complexity : We are using a stack, which, in the worst case, can hold all elements of the array, making the complexity as O(N).

To get these probes via mail, subscribe [here](https://dkprobescode.substack.com/subscribe). 

Code on GitHub [here](https://github.com/dkp1903/CodeProbes/next-greater-element.cpp)

DKP

ITUS