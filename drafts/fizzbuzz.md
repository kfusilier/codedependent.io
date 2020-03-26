# JS - FizzBuzz
FizzBuzz is one of those interview questions that all engineering candidates should be able to answer. It is an excellent question for junior candidates as it involves loops, basic math, and arrays. Love it or hate it, FizzBuzz can be an incredibly insightful interview question. This question, and questions like it, serve as a litmus test for the rest of the interview.

The prompt is as follows: *Output an array of numbers in sequential order, starting from 0. Continue until the argument (number) provided. For every multiple of 3, substitute that number for “Fizz”. For multiples of 5, add “Buzz”. For multiples of both 3 and 5, add “FizzBuzz”*.

Right away, we know that our script should accept a number as an argument, and return an array. We need to be able to create a function that can stop as easily at 10 as it can 5000. This makes it a good opportunity to provide it as an argument to our function.

1. Input - Number
2. Output - Array

```javascript
	function fizzBuzz (num) {
		const result = []
		…
		return result
	}
```

Next, we can see that we’ll be implementing repeated behavior for a specified number of iterations - until we reach our provided number argument. This seems like a good opportunity for a `for` loop.

We’ll begin our loop at 0, as that is the first number we need to add to our array, and increase by 1 with every iteration. Our ending condition is the input provided. 

1. Input - Number
2. Output - Array
3. For loop for iteration

```javascript
	function fizzBuzz (num) {
		const result = []
		
		for (let i = 0; i < num; i++) {
		…
		}

		return result
	}
```

Along the way, we’ll want to implement a series of `if` checks to see if our current number is a multiple of 3, 5, or both. To accomplish this, we can make use of the modulo operator - `%`. The modulo operator will divide a number and then return the *remainder*. This is a great way to check if a number is a multiple of another. If a number is a multiple of another, it will return a remainder of 0 when divided.

```javascript 
5 % 2 === 1 // true - 5 / 2 = 2, with 1 left over
6 % 2 === 0 // true - 6 / 2 = 3, with 0 left over
5 % 5 === 0 // true - 5 / 5 = 1, with 0 left over
```

1. Input - Number
2. Output - Array
3. `for` loop for iteration
4. Series of `if` checks using modulo

Let’s begin stubbing out our solution a little. Thus far, our solution is looking like this.

```javascript

function fizzBuzz (num) {
	const result = []
	for (let i = 0; i < num; i++) {
		let answer = ''
		if (i % 3 === 0) ...
		else if (i % 5 === 0) ...
		else ... // push i
	}
}

```



#code-dependent #interview-questions