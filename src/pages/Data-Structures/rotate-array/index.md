---
title: Rotate Array of Size N by D
date: "2020-07-18T22:40:32.169Z"
description: Rotate array of size N
tags: 
- dsa
---

This question usually isn't asked directly, but rather as a prerequisite to solving more complex questions, and thus, it is imperative to understand.

> Given an unsorted array of size N, rotate it counter clockwise by D elements.

For instance, A = [2, 1, 4, 3] with D = 2, would become [4, 3, 1, 2].

If you look carefully, what has happened is, the last D elements have just been shifted to the first D, and the others have been pushed back.

A naive solution is immediately apparent. We use another array to store the last D elements temporarily, and then just push the remaining ones to the back of the new array. It'd give a TC of O(N) and an SC of O(N).

Another variation of this might be, use the new array ONLY to store the last d elements, edit the previous array so that the remaining elements are pushed back, and then, add the d elements in their rightful place.

Again, TC of O(N), SC will be a little better, O(D).

Now, if it was going to be that easy, I wouldn't be writing this.

What if, I want to solve it in constant space, that is, without using an extra data structure?

One possible solution is to actually rotate the array, one by one. That is, for the above example, we first store 3 in a temp variable, push all elements back by 1, and add 3 to the front. We then repeat this d times, in our case, once more. 

We only used an extra variable

BUT

The time complexity is O(D*N), because, we're moving all elements one to the right, that's O(N) elements, D times.

So, the time complexity is a question here.