

> The question : Given an array of size n with elements from 1 to n + 1, one element is repeated. Find it.

Example :  a = [1,3,4,2,2]
Output : 2

Approach : 

1. One idea would have been to sort the array, then check if 
```
a[i] == i+1
```

Howevever, we note that the elements will be ONLY from 1 to n + 1, but it does NOT say that there'll be all but one elements from 1 to n+1 - that means, if the array is of size 5, it does NOT say that there'll be just one element missing and one element occurring twice. There can be more than one. So this logic doesn't work.

2. What can work is to sort the array, then compare every element with the next and return the one that repeats - that'd give us a Time complexity of O(n log n). Let's see if we can improve it.

3. An inspiration can be taken from the In questions where there is an n size array with elements from 1 to n+1 only, one logic that usually is used is to use array elements themselves as indices. That is, element 1 at position 1, and so on.

4. We can sort the elements through swapping while traversing through the array, instead of using the sort function. We can use, as described in the point above, the elements as indices. So, if we run across a case where the element is already in the sorted position, that means this element has been repeated - so we return it. 

Code - 

```
int findDuplicate(vector<int>& a) {
        int length = a.size();
        for(int i = 0 ; i<length;i++)
            while(a[i]>=1  and a[i]<=length+1 and a[i]!=i+1)
                if(a[i]==a[a[i]-1])
                    return a[i];
                else
                    swap(a[i],a[a[i]-1]);
        return -1;

```

The code can be a little cryptic to understand at first shot, so let's try and understand using an example - 
a = [2, 1, 4, 3, 4]

5. First iteration - a[i] = 2, a[a[i] - 1] = a[1] = 1 => goes into else, 2 and 1 are swapped. a = [1, 2, 4, 3, 4] -> Notice that 2 has reached its sorted position

6. Second iteration - while loop will be skipped since a[i] = 2 = i+1 -> See? 2 is in its sorted position and thus, is skipped.

7. Third iteration - a[i] = 4 -> Goes into else, 4 and 3 are swapped. Notice, again, 4 goes to its sorted place.

8. Fourth iteration - i = 3 => a[i] = 4 = a[a[i] - 1] => goes into if, returns 4

That's it. We got the right answer. Magic, eh?

![](./magic.gif)

9. Well, not really- we did exactly what we said we'd do. We used the elements themselves as indices, so 2 would go to the second position, 3 would go to third, and so on. We'd swap elements with their rightful place until they do. If there's a repeated element, it'll clash with the element which was already placed at the right place(4 in our example), and we return it.

10. Time and space complexities? We're using no extra data structure, so space is constant. Look at time carefully - it might seem that two nested loops might give a TC of O(n^2), but in any case, the inner loop won't run n times for all elements, and the overall TC just sticks to O(n)