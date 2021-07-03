---
title: String Generation(Problem 1461A Codeforces)
date: "2020-12-12T22:40:32.169Z"
description: A greedy, string programming problem - Discussed in detail in the post
tags: ["dsa"]

---

> Problem Statement : Create a string of length n using letters a, b, c only, such that the ength of any palindromic 'xsubstring'(henceforth referred to as px) of the string does not exceed a given k. 'xsubstring' is a special kind of substring that doesn't allow elements to be picked non-contiguously. For instance, for a string abc, a, ab, abc, bc are xsubstrings, but ac, ba, ca, etc are not.

For a better understanding, check out the detailed problem statement [here](https://codeforces.com/contest/1461/problem/A)

Solution : 

Step 1 : The easiest way to solve string problems, is to focus on the constraints - here, it is that the length of any px doesn't exceed k. That means, that I have to make sure that no pattern repeats more than k times. 

Step 2 : What this also implies, is that there is no lower limit. No one is asking you to create a px of length at least 2. You can equally well have a string with NO px's. That's an awesome realization - strings that are not palindromic are much easier to make than strings that are palindromic; you just have to have three distinct letters

Step 3 : Did you see it?! Three distinct letters - we have 3 distinct letters. If I keep repeating abcabcabc for length n, I will never have a palindrome longer than 1!! 

Step 4 : And that's where we have it sorted. Just keep appending abc's to the string till we reach the required length. Done!

Step 5 : Here's the code snippet for the same : 

```
// This code includes the test case input too, as required to submit on Codeforces
#include <bits/stdc++.h>
using namespace std;
 
int main()
{
    int t;
    cin >> t;
    while(t--)
    {
        string s = "";
        int n, k;
        cin >> n >> k;
        int i = n;
        if (n > 3)
        {
            
            while(i >= 3)
            {
                s += "abc";
                i -= 3;
            }
            if(i == 1)
            s += "a";
        else if(i == 2)
            s += "ab";
        
        }
        else if(n == 3)
            s = "abc";
        else if (n == 2)
            s = "ab";
        else if (n == 1)
            s = "a";
        
        cout << s << endl;
    }
}
```

Step 6 : Time complexity(Ignoring the test cases) - O(n)
		Space complexity : O(1)