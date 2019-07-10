---
title: 'CSS - Cascading Logic'
date: '2019-06-25'
---

Since CSS stands for “Cascading Styling Sheets”, it seems only appropriate that anyone who claims to have an understanding of this language, grasp one of its core constructs. Today, we’ll be covering Cascading and how the placement of styling rules in our files is critical. This is an incredibly quick exercise I present to candidates to test their knowledge of basic CSS rules.

I present you with a div. The div has two classes attached to it. These two classes contain clashing styling rules - they’re each trying to write `background-color` for this div. One is purple, the other pink. Why is the div pink instead of purple? What decides that pink should take precedence? Take a look at the code below and see if you can decipher why.

The answer is because the “pink” class comes after the class of “purple”.~As we might infer from “Cascading” - CSS is read from top to bottom. If two styling rules are of equal precedence (for more on styling rule precedence, check out this question), whichever rule is read last, will be the style that is applied to the page. *Note: it does not matter which class is listed first on the HTML element. The order of the rules on the CSS file is the driving factor here.*

CSS can be a tricky and frustrating technology, especially when you’re first starting out, but good habits will serve you immensely well. I admit, I used to despise the language. Once you start learning the rules and best practices of it though, it becomes much more enjoyable. Dare I even say, fun. 

Now go crush that interview.
