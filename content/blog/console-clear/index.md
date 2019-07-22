---
title: 'Console Filling Up? console.clear() to the rescue'
date: '2019-07-15'
---

I wanted to share some new functionality I discovered today that will serve me immensely in the future. The ability to clear the console with a command.

I love CodePen. I use it for all of my code snippets here and use it extensively when teaching live workshops. It’s live reload feature is great for previewing your work as you go, especially for HTML / CSS. Unfortunately for JavaScript, this can often lead to an incredibly cluttered console. This has left me scrolling to see if my expected results were ever printed far too many times.

Thankfully, I can now simply insert a `console.clear()` statement at the top of all of my pens and be ensured a clean console with every run. What a time.

![CodePen Console.Clear() Gif](https://blog.codepen.io/wp-content/uploads/2016/02/clearing-console.gif)

To see this in action, check out this pen here. 

https://codepen.io/chrisbridges/pen/QXXEgp?editors=0010

*Note: you’ll want to open your Dev Tools to see the console effects. If you’re in Chrome, right-click anywhere on the page and click “Inspect”. Or if you’re on Mac - Command + Option + I.*