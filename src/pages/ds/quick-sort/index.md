Hope you found the last post on Merge sort interesting. If you haven’t seen it, do check out the post [here](https://dkprobes.tech/Data-Structures/merge-sort). 

Also, I left you with a question in the last post : What is the space complexity of the Merge Sort? Some of you evaluated it to be O(N^2) or O(N) or O(1). 

The answer is O(N). How? Look at the merge function for which, we’re ACTUALLY CREATING two arrays. That gives us a space complexity of O(N). Now, we’re creating a constant number of such arrays. So, SC would be O(k*N) = O(N). 

Some of you might be confused, that we’re making repeated calls (because that’s what recursion is) and thus, might be tempted to think of the space complexity being more. But, dry run the code using a small example, and you’ll see that O(N) indeed, makes sense.

Since we’re on the topic of sorting, I thought it best that we learn another, equally common sorting algorithm, with a similar implementation, the Quick sort. Disclaimer, a lot of the concepts of quick sort are the same as Merge sort, recursive calls and their base condition, so, I’d strongly recommend you to go through the Merge sort article here, before continuing with Quick sort.

Quick sort is another divide and conquer algorithm, like Merge sort. The method is, we choose an element that we want to act as a pivot. Then we sort the array, such that all elements to the left of the pivot are smaller than it, and all to the right are greater. ‘Virtually‘ dividing the array.(Getting a deja vu from Merge sort!?)

Now, we break the array into two along the pivot, and repeat the same thing with the two halves. This goes on until there are only single elements.

One question : What’d the pivot be? Since the end result is going to be a sorted array, it doesn’t matter what you choose the pivot to be. You could take it to be the first element, last element, middle element, or a random one. Often in interviews, you might be asked by the interviewer to take one of the approaches. But note that the concept doesn’t change with the choice of the pivot.

I am lazy, so I’ll just take the first element of each array as the pivot.

As done for merge sort, let’s try and write our quick_sort function : 

```
void quick_sort(vector<int>a, int start, int end)
{
    if(start >= end)
        return;
    int piv = pivot(a, start, end);
    quick_sort(a, start, piv - 1);
    quick_sort(a, piv + 1, end);
}
```

This should be pretty clear, especially if you have read merge sort, since the function is almost the same. Our base condition, when we stop the recursion, is start >= end. Initial values of start and end, as expected, would be 0 and size of array - 1, respectively.

After finding the pivot(discussed below), we call the function recursively for the two halves, just like merge sort. 

Now, we have to break the array by the pivot, such that the left side has all elements smaller than the pivot, and the right, larger. 

Try thinking about how you might want to do this before you look at the code. A hint : It’s just a simple traditional compare and swap.

.

.

.

So, here we go. The first element is the pivot. We maintain two pointers, both starting at the element AFTER the pivot. We then use one pointer(j) to iterate through the array. Any element smaller than the pivot, is swapped with the element just after the pivot, which is denoted by the other pointer(i). 

What we’ve done is moved a smaller element to the front of the array. Get it? We continue this till our iterating pointer(j) reaches end, and at last, we swap the pivot, which was so far sitting at the start of the array, with where it should rightfully be, that is, at position i-1.

Whew! Confused? Let’s dry run through an example.

a = 4 7 1 2 5 3. 

We assume our pivot as 4. i and j point to 2.

We compare 7 and 4. Since 7 is greater than 4, we do nothing.

We then move our iterator j.

Now, j is at 1. 1 is smaller than 4. So, we swap 7 and 1. i points to 7 and j to 2.

a = 4 1 7 2 5 3

2 is less than 4, so we swap 2 and 7. 

a = 4 1 2 7 5 3. i points to 7 and j to 5. 5 isn’t less than 7, so we do nothing.

j points to 3, which is less than 4. So, we swap 7 and 3. i points to 5, and j reaches end.

a = 4 1 2 3 5 7. Finally, we swap (i-1)th position, that is, 3 with 4.

Giving us 

a = 3 1 2 4 5 7

We return the element at (i-1)th position, that is, 4, which was our pivot!!

As you can see, our array is now broken down into two halves, the half before 4, are all elements less than 4. And the half after, are elements greater! 

Here’s the implementation in code.
```
int pivot(vector<int>a, int start, int end)
{
	int i = start + 1, j = start + 1;
  	int piv = start;
  
  	while(j <= end)
    {
    	if (a[j] < a[piv])
        {
        	swap(a[j], a[i]);
          	i++;
        }
      	j++;
    
    }
  	swap(a[piv], a[i-1]);
  	return (i-1);
}
```

Time complexity? We’re traversing the array from start to end, for a number of different subarrays. 

When we take the first element to be the pivot like we’ve done in this case, the worse case scenario will be when the array is sorted. This is because there won’t be any actual swapping happening, and we’d just be rechecking the same array with just one element removed.(Eg : 1,2,3,4,5 - try working this out).

We can improve this, by choosing a random pivot, which will, unfortunately, still give the worst case scenario of O(N^2). But, the average case scenario will give us an O(N log N) time. And this works well enough for most use cases, so much so that the TC of Quick sort is generally assumed to be O(N log N), the same as Merge sort.

Space complexity? O(1). Unlike Merge sort, we didn’t create any supplementary data structure.

Hope you could make sense out of this post. The best way to make sure you don’t forget the logic, is to write the code yourself, thrice, at a gap of three days each. Trust me, this way helps.

Should you have any suggestions  or wish to discuss, I am available on mail : dushyant@dkprobes.tech or on [LinkedIn](https://linkedin.com/in/dkp1903) or [Telegram](https://t.me/dkp1903). 

If you want to receive these posts by mail, subscribe [here](https://dkprobescode.substack.com/subscribe)


DKP