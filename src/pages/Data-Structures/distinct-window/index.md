---
title: Distinct elements in windows
date: "2020-07-18T22:40:32.169Z"
description: Distinct elements in all windows of size K
tags: ["dsa"]

---

Remember back in the day, we discussed two problems based on Kadane's algorithm? The [largest sum subarray](https://dkprobes.tech/Data-Structures/kadane) and [subarray with equal no of 0s and 1s](https://dkprobes.tech/Data-Structures/kadane-2). Here's another problem, that is a slight modification of Kadane's. And believe me when I say, that this is a VERY VERY common problem in coding rounds and tech interviews, and has many variations. I'd strongly recommend going through at least the first post, if you haven't already, to get a better intuition.

![](./khel.jpg)

> Given an array of size N, find the number of DISTINCT elements, in ALL windows of SIZE k.

For eg, given an array [1, 2, 1, 4, 5, 4] and k = 3, our windows will be 

[1, 2, 1], [2, 1, 4], [1, 4, 5], [4, 5, 4]

and the distinct elements in each are, 

2, 3, 3, 2, respectively. 

Hope you got the idea of what exactly is asked, as well as, how this is similar to Kadane. Remember in Kadane, instead of forgetting stuff from a particular iteration, we only remove the one element and add the new one, and retain the other info, a concept that's the base of the very infamous Dynamic Programming.

The naive solution would be to traverse through the array, making each and every window, and calculating the number of distinct elements. You might relate this to the brute force approach used in our [first kadane problem](https://dkprobes.tech/Data-Structures/kadane).

So, for n elements, we first make a window, that's O(k), and for every k size window, we traverse through ALL element to find the number of distinct elements. That's another O(k), finally giving us O(nk^2).

![](./maza.jpg)

That's understandable.

Let's see how we can bring Kadane into this.


The problem with the naive solution is, that for every window, even if there's just one element changing, we're having to start comparing ALL elements in the present window from scratch, even though k-1 elements have already been checked! For instance, in the above example, from [1, 2, 1] to [2, 1, 4], we're just changing a 1 to a 4. But, we still check 2 and 1 for distinction. 

We need a way to STORE the count of each element. 1 has come once, 2 has come once, 1 come twice. Next window, reduce the count of the element leaving, increase the count of the element entering. Get the idea? And how do we keep track of count?

That's hashing, using Map in C++, or HashMap in Java.

> Pro tip : Anytime a problem involves something like keeping a count, there's always a possible solution using a HashMap. 

So, let's try and implement this in code: 

```
#define vi vector<int>
vector <int> countDistinct (vi A, int n, int k)
{
    map<int, int>m;
    int count = 0;
    vector<int>ans;
    
    //Checking First k elements
    for (int i = 0; i < k ; i++)
    {
        if (m[A[i]] == 0)
            count++;
        m[A[i]]++;
    }
    ans.push_back(count);
    
    // Rest of the elements
    for(int i = k ; i < n ; i++)
    {
        if (m[A[i - k]] == 1)
            count--;
        m[A[i - k]]--;
        
        if (m[A[i]] == 0)
            count++;
        m[A[i]]++;
        
        ans.push_back(count);
    }
    return ans;
}
```

Doubt number 1 : Why did we consider the first k elements, aka first window, differently, and the others differently? 

For the first window, we're only ADDING elements, NOT removing any. So, the code for removing isn't to be included for the first window.

Doubt number 2 : What the hell's going on?

We're declaring a map between each element, and the number of times it occurs in the present window. If there isn't an occurrence of an element in the map, it means it's a new distinct element, and we add it to our count. If it's a non-distinct one, we only increase its count.

When we shift the window, we reduce the count of the element that's leaving, and increase the count of the element that's entering.

For every window, we push the value of count onto our answer vector.

Hope that makes sense now.

Another doubt you might have is, why do we need to keep a map? Why do we have to keep COUNT of the elements? Why can't we just check if an element EXISTS, or NOT?

To understand that, consider the case above : [1, 2, 1] and [2, 1, 4]. We're removing a 1 and adding a 4. 

BUTTTTTTTT

There are two 1s present in the first window, so if we had only kept the existence of an element, our answer for the second window would be 2, since we would have kicked out the 1.

Time complexity? k elements for the first loop, and n-k elements for the second, bringing us to O(n) overall, a HUGGEE improvement from O(nk^2).

![](./rdj.jpg)

Space? k windows, so there will be k pushes of count to the answer vector, that's O(k), and the map at any time, will have k elements, so, that's O(k) too. Therefore, a total SC of O(k).


Hope the post was intuitive. The code for this question can also be found on my GitHub [here](https://github.com/dkp1903/CodeProbes)