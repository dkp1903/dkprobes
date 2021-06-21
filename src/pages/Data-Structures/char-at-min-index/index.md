---
title: Character of one string at min index in other
date: "2021-06-21T12:20:32.169Z"
description: Find the character of one string present at the minimum index in other
tags: ["dsa"]

---

You're given two strings, S and P. You have to find the character in P that is present at the minimum index in S, and return that index. If no element of P is in S, return -1.

Eg : S = ABCD, P = FCBJ. C and B of P are present in S. Since B is present at an index smaller than C, we return the index of B in S, that is, 1.

Why is this problem here?

Seemingly a standard hashing problem, but it can get a lil confusing since you don't know which to hash - S or P.

Brute force approach?

Keep one variable, minIndex to keep track of the min Index. Since it has to be MIN, we initialize it with INT_MAX.

Concept : Every time you have to find a min, initialize it with a very large number. Every time you have to find a max, initialize it with a very small number.

We then have two nested loops - the first loop will traverse through each character of P. For each P[i], we run through all of S. The first place we find P[i] = S[j], we set minIndex = min(minIndex, j). We return teh final minIndex if such a character exists in S, else, -1.

The TC will be O(mn), where m and n are the sizes of P and S, respectively.

Optimizing the above approach

Before optimizing, think of what CAN be optimized. We note two points : 

1. We don't really need to check every char in S. For instance, if S is ABCDA, then, when we're checking for P[i] = A, we need not even care about the second A. 
2. We can do better than running over the entire S for every character, since we're just iterating through the same elements again and again.

Concept : We see that we need a way to store the mapping between a character, and the index it occurs at, in S.

Bingo! Hashing.

How to implement it?

What do we hash? P or S? The answer lies with what index do we need - we need the index from S, so we need to store the indices of S, and thus, it is S that will be hashed.

We first run through each character of S, hashing the unique ones. Remember, we don't need to hash the indices of the later repetitions - for instance, A in the example above, since we're only bothered with the first occurrence.

Once we're done hashing, we need to traverse through every character in P, and find the character appearing at the min index using the hash. The time complexity will be reduced to O(m+n).

Here's the code snippet(C++)

```cpp
int minIndexChar(string str, string patt)
    {
        unordered_map<char, int> ma;
        int minIndex = INT_MAX;
        int m = str.size();
        int n = patt.size();
        for(int i = 0; i < m; i++) {
            if(ma.find(str[i]) == ma.end())
                ma[str[i]] = i;
                
        }
        for(int i = 0; i < n; i++) {
            if(ma.find(patt[i]) != ma.end() && ma[patt[i]] < minIndex)
                minIndex = ma[patt[i]];
        }
        if(minIndex != INT_MAX)
            return minIndex;
        return -1;
        // Your code here
    }
```