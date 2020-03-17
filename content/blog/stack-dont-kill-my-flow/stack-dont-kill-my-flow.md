---
title: 'How I Built a Better Stack Overflow'
date: '2020-03-17'
---

When I was a fresh bootcamp grad, I understandably spent the majority of my time on the job hunt: interviewing, tweaking my resume, writing cover letters, etc. But I didn’t want to stop coding all together until I got hired. I wanted to continue to grow my skill set and build something useful, even if it was only I who would enjoy it.

During my bootcamp days, I found myself getting constantly distracted by what I would deem *unnecessary content* on Stack Overflow. You know the drill. You’re working on a problem. You get stuck. So you naturally punch it into Google and a Stack Overflow post of your exact question populates right at the top. You skim the top few answers for whichever most easily solves your problem and you immediately jump back to your IDE to implement said solution, right? Not if you’re me.

I would find myself constantly pulled away from meaningful work by, admittedly, intriguing but unrelated content on the sides of every post. Be it meta discussions, job postings, questions about mathematics, economics, video games, etc. These questions were pulling me away from the original reason I found myself on Stack Overflow in the first place. What’s good for Stack Overflow’s sticky metrics didn’t necessarily align with my productivity interests.

Wanting to implement a solution to solve my own problem, as well as putting my newfound coding superpowers to the test, I decided to create a better Stack Overflow. This led to the creation of my Chrome extension.

When I initially set about this, I had no idea the lengths required to building a Chrome extension. In my mind, it was a daunting task. A few Google searches soon revealed it wasn’t going to be much difficulty at all. If you’re familiar with building basic web apps using HTML, CSS, and JavaScript; you already know all you need. The majority of my efforts lied in the initial setup and publishing process, while the necessary code was incredibly minimal.

My goal in creating this extension was to only show the content I cared about: the original question, its answers, and related questions. Everything else should disappear. 

After poking around the DOM a bit, I noticed that Stack Overflow didn’t obfuscate their class / ID names for their HTML elements. They were spelled out right there in plain English. After messing with the dev tools a bit, I realized all I had to do was trigger these elements to a `display:none` and I’d be on my way to an improved Stack Overflow experience. 14 lines of code later and I was done. Stack Don’t Kill My Flow was born.

If you would like to check out my extension on the Chrome store, you can do so here - [Stack Don’t Kill My Flow]([Stack Don’t Kill My Flow - Chrome Web Store](https://chrome.google.com/webstore/detail/stack-dont-kill-my-flow/fcoeidpmmhgikeamljiglfeaoicdfadj?hl=en))

This experience taught me that if you have a problem, don’t simply accept it for what it is. Do a little digging and see what can be done to solve it. This solution required no APIs, complex frameworks, algorithm knowledge, or anything remotely complex. 

Stack Overflow is an incredible tool. How anyone wrote software before its invention is beyond me. It is a titan in our industry. Don’t be afraid to stand on the shoulders of giants to make something great even better.