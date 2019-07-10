---
title: 'JS - Palindrome'
date: '2019-06-10'
---

I’d like to introduce a series I’m starting on interview questions. These will be questions that we have often used on my team to determine a candidate’s thought process and coding skills. These questions are meant to push the candidates to slightly unfamiliar territory and determine how they break down problems, as well as the methods and techniques used in solving said conundrums. 

My go-to JavaScript question is the Palindrome. This is a relatively basic exercise that tests a number of important JavaScript concepts: value comparison, array & string methods, loops, as well as a candidate’s ability to write code that’s adaptable - should we throw a few wrinkles at you near the end. 

This problem is essentially my “FizzBuzz” (link to FizzBuzz post) for candidates. When web technologies really started taking off back in the day, companies were getting bombarded with unqualified candidates for their engineering openings. To help funnel out those who weren’t up to snuff, that was a common first question to be asked. Palindrome, for me, serves the same purpose.

This is an excellent interview question because there are a number of ways this could be solved, and the path that a candidate chooses can be illuminating, as well as if they’re aware of varying approaches we can ask about once they’re through.

The question is as such, “*Write a function that takes a string as an argument, and returns a boolean expressing whether the argument is a valid palindrome*.”

A palindrome is any word that is the same when read both forwards and backwards.

Right away, we need to note that our function is inputting one data type (String), and outputting another (Boolean).

1. Input - String

2. Output - Boolean


Next, we need to be aware that a palindrome is a word that is exactly the same when read either forwards (left-to-right) or backwards (right-to-left). This tells us we’re going to have to perform some string manipulation, as well as compare that manipulated data to our original argument.
	
1. Input - String

2. Output - Boolean

3. String Manipulation - reverse string

4. Compare to original argument - check for equality


Let’s now focus on exactly how we can go about reversing the string argument. In JavaScript, there is no way to reverse a string, but with some type coercion, and those data types corresponding methods, it becomes rather simple.

While *strings*do not possess a native reverse method, *arrays*do. We can pass this method on any array, and receive the flipped version we would expect. That’s great, but how do we go about converting our string into an array? Enter String.split().

Split allows us to break any string down into an array. We provide an argument to let .split() know where exactly we want our string broken down into array elements. Since we want every character of our argument string to be reversed, we’ll break it down by each individual letter, which we can achieve with String.split(‘’). This will take “cat” and convert it to `[‘c’, ‘a’, ‘t’]`. Note that each of our elements within the array are still strings, just individually now.

Now that we’ve got our argument converted into a data type that contains a native reverse method in its prototype, we can call that method upon it. `[‘c’, ‘a’, ‘t’].reverse()` becomes `[‘t’, ‘a’, ‘c’]`. Great! We now have a an array of our original argument, and a reversed array of the same word. 

You might be inclined to think that if our argument were a palindrome, like “racecar”, we would be able to simply check the equality of these two values and we’re done, right?  
```javascript  
[‘r’, ‘a’, ‘c’, ‘e’, ‘c’, ‘a’, ‘r’] === [‘r’, 'a’, 'c’, 'e’, 'c’, 'a’, ‘r’]
```
Not so fast. This is a mistake I’ve seen enough of, so it’s worth mentioning.
	
	We can not check for array equality the same way we do with data primitives in JavaScript. 
```javascript
“cat” === “cat” => true. 

5 === 5 => true. 

[1] === [1] => false. 
```
For an explanation of why, check out this explanation here (provide link to explanation, or write one yourself). 

We’ve reached a crossroads. We can either a) find a way to check that these arrays contain the same values in the exact same order, or b) take we know about comparing primitive data types and convert our arrays into types that allow for such simple equality checking. Let’s go with the simpler solution for now.

To convert our arrays back into strings, we can make use of the Array.join() method. Array.join() allows for an argument to determine what you would like placed between every element of the array you’re joining. For our case, we would like all the letters to be attached, like we had before, which is to say, have nothing between them. By implementing `Array.join(‘’)`, we have converted our arrays back into strings, which will allow us to simply check for equality, ultimately yielding our end desired result of a boolean. 

*Insert optimized solution snippet*

This solution is great if you’re familiar with JavaScript’s data methods that take care of a lot of the hard work for us, but what if you weren’t as familiar with those? Is it still possible to solve this problem in a clean and timely manner? Of course :).

If we weren’t aware of these helpful methods, we could extract out a little of what they’re doing under the hood into our solution. This is where loops can come in. 

## Loops Solution

A little knowledge of loops goes a long way in this path. We can use them in a variety of ways for this exercise, but I’ll focus on just one for demonstrative purposes.

String characters are indexed just like array elements, and accessed the same way - first character of an array (Array[0]), first character of a string (String[0]). While it may be more common to loop over arrays, there’s nothing stopping us from doing the same with our string argument here. If we loop *backwards*over our string argument, saving the characters in a variable as we go, we could then compare that to our original string and *voila.* This solution might be received even better in an interview context because it clearly displays your logic and demonstrates an ability to work with for loops - the workhorses of all loops (link to for loops post). 

## Recursive Solution

If the previous two solutions didn’t quite cut it for you and you’re looking to score some bonus points for difficulty (read: writing code that’s *less*readable - which is never our goal), there’s a recursive way to go about this. Remember, recursion is when a function repeatedly calls itself until a certain condition is met.

In this case, we can continually check if the first character of our string matches the last character of our string. If this condition is met, we remove those two characters, and pass the resulting string back into our function. We continue this until our string either contains one (should the word contain an odd number of letters) or zero characters.

1. End condition: string contains 1 or 0 characters

2. Check if first character of string is equal to last character

	1. If so, remove those two characters and run again

	2. If not, function ends and returns false


While recursion can be cool, I believe it’s best to always err on the side of readability. The first two solutions are ones I would much rather see, as it’s easier for me to clearly grasp what is going on in a more timely manner. Code is meant for humans as much as it is machines.

### Additional Wrinkles to Throw In

* What if the string contained capital and lowercase letters?

* What if the palindrome was more than one word long? (i.e. Mr. Owl Ate My Metal Worm)

* What if you couldn’t store anything in memory (were unable to use variables)?


There you have it. You’re now ready to crush this interview question. Practice, repetition, and some deep breaths will be your foundation for success. Good luck.

If you’d like additional coding question interview tips, I summarized some of them here. (coding interview tips post)