---
title: 'Sorting in coding challenges'
date: "2020-07-27T22:40:32.169Z"
description: Given an array, find the next greater element for every element
tags: ["dsa"]
---

The posts on Merge sort and Quick sort talk about two sound sorting algorithms, which are a personal favorite for personal interviews. You might have heard of three others, namely, Bubble sort, Insertion sort and Selection sort. All of these are O(N^2) approaches, and thus, not very appealing for interviewers who’re looking for speed-of-light approaches.

Here’s a quick brief on the approaches they take :

Bubble sort : Array is divided ‘virtually‘ into two, unsorted elements in the beginning, sorted in the end. After every iteration, the LARGEST element in the unsorted half, goes to its correct place in the SORTED HALF. So, for the ith iteration, you only have to check upto n-i-1 positions in the array, since the ones following are already sorted.

It’s called Bubble sort, because the elements larger than their nearby element ‘BUBBLE‘ to the end. 

![](./sort-coding-3.jpg)

O(N^2) is the time, because we are comparing O(N) elements, for every iteration. Note here, that even if we are NOT checking the last i elements, does NOT change the time complexity. Don’t believe me? Try it out.

———————————————————————————————

Insertion sort : Kind of like Bubble sort, in the sense that we again ‘virtually‘ split the array into two halves, this time, the left half being the sorted one.

With every iteration, we pick an element from the unsorted half, and ‘insert‘ it into the sorted half, pushing all elements one place to the right, to make place for Mr Small Guy. Again, that’s O(N^2). No brainer there.

Selection sort : If there was an award given out for the longest chain of people who copied from their predecessor in the chain, it’d sure go to the sorting algorithms.They give engineering students a run for their money.

![](./sort-coding-4.png)

Selection sort is almost the same as insertion sort, with ONE SMALL MAJOR DIFFERENCE. Yep. Small but major. Just like in insertion sort, we ‘virtually‘ divide the array into two halves, the left one being sorted, and for every iteration, shift elements to accommodate an extra guy coming from the unsorted half.

The difference being, in selection sort, for every iteration, it’s the MINIMUM element from the unsorted portion that comes into the sorted section, unlike the insertion sort, for which it’s the NEXT element that goes to its rightful place, irrespective of whether it’s tiny or huge. 

Again, time complexity is O(N^2), because for every iteration, we loop through all elements in the unsorted half to look for the smallest element.

————————————————————————————

When it comes to coding rounds for placements, which are a regular first round for hiring in most companies, or for coding contests like those on Codeforces, Codechef or Leetcode, you aren't supposed to code out the entire logic for the merge or quick sorts. You use inbuilt library functions for sorting.

Since I am a C++ buff, I'll talk about the inbuilt C++ STL(Standard Template Library) function for sort.

It's called

.

.

sort

(Major anti-climax :/)

![](./sort-coding-1.jpg)

sort for arrays is as simple as

sort(a, a + n);

where n is the size of the array

For the more stylish form of dynamic arrays, aka, vectors, it's as easy as
```
sort(v.begin(), v.end());
```
For once, C++ syntax is clear enough to not need explanation :P

This function encapsulates Introsort, a hybrid sorting algorithm, which is a fashionable way of saying that there's more than one algo at play here. Three, to be precise : Quick sort, Heap sort, and Insertion sort. It has a TC of O(N log N)

You might have a question called, why use this more complicated version when we have merge and quick sorts that give us the same TC? That's because Introsort gives O(N log N) TC in ALL cases, best, worst and average. Remember how Quick sort used to go O(N^2) in worst case?

I wrote this brief on the implementation of the STL sort function, because it was asked in a DirectI interview. So, in case it's asked to you too, you know what to answer.

For more details, our favorite GeeksforGeeks has a detailed article [here](https://www.geeksforgeeks.org/internal-details-of-stdsort-in-c/), although I don't think it's very important to keep in mind.

Coming back to our main topic of coding rounds, you can use this function to sort. What if, you need to customize this a bit? For instace, sort in decreasing order? Or maybe, sort a vector of pairs, or something more complex?

Worry not, because our dear little sort() function also takes in an optional third argument, a function, where we can write the logic that we can use to compare two elements. So, you can write something like

```
bool compare(int a, int b)
{
    return a > b;
}

sort(v.begin(), v.end(), compare);
```

What happens is, that compare takes in elements of the vector, two at a time, compares them based on the logic in compare, and returns the output accordingly. So, through the above code, the vector will be sorted in descending order.

If there's a question that involves vectors of pairs, something like [<1, 3>, <2, 4>...], passing this vector directly to sort would sort it by the first element of the pair, which, if same, would then compare by second element. 

Using compare, we can customize this to do the reverse. I'm not gonna tell you how. Let's see if you can work that out!

To get these posts via mail, subscribe [here](https://dkprobescode.substack.com/subscribe)


So long

DKP

ITUS(International Talent of Ultimate Student)

(Phir Hera Pheri fans would know this :P)


