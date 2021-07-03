---
title: Minimize the max difference of heights
date: "2020-07-18T22:40:32.169Z"
description: Given an array, add or subtract a positive integer k from each element to minimize the maximum difference between any two elements of the array.
tags: 
- dsa
---

Given an array of n tower heights, and a positive integer k, you have to minimize the max difference between the heights of any 2 towers by adding or subtracting k from each of the tower heights, at most once. Constraint is that you cannot pick elements you want to operate on. You either operate on all of them, or none of them.

For instance, a = [15, 10, 1] and k = 6. Subtracting 6 from 15 and 10, and adding 6 to 1, we get [9, 4, 7]. The max difference is now 5, which is the minimum possible. Try any other +/- combination, the max difference will always be larger. 

Approach : 

1. The hint is always in the question - MAX difference. And the max difference will be between the largest and smallest elements. 
We'll call the largest big, and the smallest, small.
2. Thus, we can set the difference between small and big as a milestone - we have to find a difference smaller than this.
3. So far, we have set one element each as the largest and smallest. But if we operate, that could change. And we have to find the largest and smallest out of the operated ones.
4. Also, it is not necessary that we always need to add to the lower half, or always subtract from the upper half of elements. We need to do both and see which gives us the smaller difference. 
5. Thus, we traverse through the remaining elements. For each element, we need to have a variable subtract storing the element minus k, and another, add, storing element plus k. 
6. Now, if add becomes bigger than the largest element, or if subtract becomes smaller than the smallest element, only then will the max difference change. If neither of them go beyond the extremes, we can safely disregard the case and go to the next element.
7. However, if either of them beats the extremes, we get to work.  
8. If it is the subtract that has become smaller than small, we need to update small, since it will now be big - subtract, that will now give the maximum difference. If it is add that has become larger than big, we'll have to update big.
9. Now, we have a new big or small. This process is repeated for all array elements to find the number that could be the biggest on operating and the number that could be the smallest.
10. Thus, at the end of the loop, we may have a new big or a new small, or both, or none.
11. Our final job is to now check, if doing the operation would make the difference smaller, or would the original difference still be smaller.
12. The smaller of these two differences will be our final answer.

Time complexity - since we'd need to sort the elements, O(n log n)

Space complexity - O(1)