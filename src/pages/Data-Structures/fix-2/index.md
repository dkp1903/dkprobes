---
title: Prefix to postfix
date: "2020-09-08T22:40:32.169Z"
description: Thank stack for this
tags: ["dsa"]

---
Yo folks

In the [last probe](https://dkprobes.tech/Data-Structures/fix-2), we’d talked at length about

- What are infix, prefix, postfix expressions

- Why can a normal infix expression make a computer go crazy

- How do we convert an infix expression to postfix

If you haven’t checked it out, I’d strongly recommend you do so, because stuff here is built upon what we discussed there.

Today, we talk about

> How to convert a prefix expression to postfix, without going to infix as a middleman

Now, I had one very simple reason for choosing this conversion, out of the many possible(in to pre, pre to in, post to in…). This is a VERY intuitive solution, and allows you to grab the similarity between the expressions.

Let’s see what I am talking about.

This is an infix expression : (A + B)*(C - D)

This is its prefix version : *+AB-CD

This is its postfix version : AB+CD-*

First, note the position of the ‘*’ operator. It is the ‘main’ operator in the expression, that is, that is the operation that will be performed LAST, between the two final operands. The ‘*’ comes first in prefix, and last in postfix. 

And this is not coincidence. It’s a fact, that the main operator will come first in prefix and last in postfix. This gives us the intuition, that we’d best traverse the prefix expression backwards, that is, from right to left.

That’s step one done.

When we go from right to left in the prefix expression, we’d get two operands, and an operator, which is the way postfix expressions are made.

BUTTTTTTTTTTTTTT

Note that the order of the operands will be reversed. We read DC-, whereas it ideally should be CD-, and so, we’ll have to reverse the order of operands.

ORRRR

We could be clever about it.

We could use a stack.

![](./m.jpg)

Remember how stack works on Last in First out? If we push elements from right to left, we’re pushing the D, then the C. Then when we run into the ‘-’, we know that the last two operands pushed in are supposed to be operated upon. We pop them, one by one. And lo and behold! C gets popped out before D, EXACTLY THE ORDER WE WANT!

I hope you can see a pattern being formed here. 

If we run into an operand, we push. If we run into an operator, we pop twice, and the sub-expression becomes popped_first + popped_later + operator

And guess what?

WE ARE DONE!

![](./khatam.webp)

That’s all there is. Thanks to pre and post, no hassle about brackets, no worries about precedence, nothing!

Let’s see how it looks like in code
```
bool isOperator(char x) { 
  switch (x) { 
  case '+': 
  case '-': 
  case '/': 
  case '*': 
  case '^':
    return true; 
  } 
  return false; 
} 
  
// Convert prefix to Postfix expression 
string preToPost(string pre_exp) { 
  
  stack<string> s; 
  
  // length of expression 
  int length = pre_exp.size(); 
  
  // reading from right to left 
  for (int i = length - 1; i >= 0; i--) { 
  
    // check if symbol is operator 
    if (isOperator(pre_exp[i])) { 
  
      // pop two operands from stack 
      string op1 = s.top(); 
      s.pop(); 
      string op2 = s.top(); 
      s.pop(); 
  
      // concat the operands and operator 
      string temp = op1 + op2 + pre_exp[i]; 
  
      // Push string temp back to stack 
      s.push(temp); 
    } 
  
    // if symbol is an operand 
    else { 
  
      // push the operand to the stack 
      s.push(string(1, pre_exp[i])); 
    } 
  } 
  
  // stack contains only the Postfix expression 
  return s.top(); 
} 
```

There might be one major doubt : In the previous probe, we’d used a stack of chars. Why use a stack of strings here? 

Because, unlike the previous probe, once we evaluate an expression, we are pushing it back onto the stack, because the whole expression will now be an operand for another operator. For instance, the CD- above would be used as an operand now for the AB+CD-* expression, and that means that we’d need CD- on the stack.

After we’re done, we’ll have just one element in the stack, which will be the final postfix expression.

Code available on GitHub [here](https://dkprobes.tech/Data-Structures/fix-2)

To get these posts via mail, subscribe [here](https://dkprobescode.substack.com/subscribe)