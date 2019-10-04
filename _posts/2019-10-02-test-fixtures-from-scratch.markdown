---
layout: post
title:  "Test fixtures from scratch"
date:   2019-10-02 09:00:00 +0100
readTime: 4
categories: jekyll update
---

<!-- TODO: Try to find some other gaps where a meme or image might fit, this is a lot of code and test -->

<!-- REWRITE -->
Let me begin by telling you how I came in need of fixtures. It was around January of this year, I was working on a babel plugin, and for the sole purpose of this article what I want you to know is that despite the fact that the plugin has a rich API, what matters is that its ultimate goal is to transform some inputted JavaScript into JavaScript again replacing some code in between (a compiler basically). So, the focus is on JavaScript in JavaScript out.
<!-- REWRITE -->

On a very high level manipulating the execution flow through inputs and performing assertions on outputs is what happens with all the tests that we write daily (weekly at least I hope), at different granularity levels. Whether we want to test a small function or a large JavaScript module with multiple entry points, our ultimate goal is to perform a set of assertions that bring us the peace of mind and stability to move forward and build more stuff on top.

It happens that in specific scenarios, unit tests as we write them might become pure overhead. How come? Because we repeat the same structures, and we write the same boilerplate code again and again, without really thinking about how these particular tests could become more pleasant to maintain and scale. Why should I care about looking for alternatives? Because it can save you time, it can document your codebase through well organized and self-explanatory test fixtures.

Let's take a look at how we can move on from a routine unit test setup to a fixture based setup through a dummy case study that I specially designed and implemented step by step to demonstrate how tests can be set up in a way more declarative way.

Before diving into details, let's take a few seconds to go through this definition of test fixtures that I came across in the <a href="https://github.com/junit-team/junit4/wiki/test-fixtures" target="_blank" title="junit-team/junit4 description of test fixtures">junit-team/junit4 GitHub wiki page</a>.

> A test fixture is a fixed state of a set of objects used as a baseline for running tests. The purpose of a test fixture is to ensure that there is a well known and fixed environment in which tests are run so that results are repeatable. Examples of fixtures:
- Preparation of input data and setup/creation of fake or mock objects
- Loading a database with a specific, known set of data
- Copying a specific known set of files creating a test fixture will create a set of objects initialized to certain states.

**CODE 1 - replacer.js**

So basically, we have a function that performs replacement of `background-color` expressions gives a set of options, this is very minimalistic, but the number of options can quickly scale to a few dozens depending on what kind of replacements one might want to perform in the future. The unit tests for this function might look like the following.

**CODE  2 - replacer.test.js**

We have a high-level description, and then we might want to start nesting and branching different kinds of scenarios as we scale.

Let's imagine that you and your team have now been using and developing this replacer code for 2 months, it's fantastic, everybody loves it, but there's some edge case that needs attention. The developers are all over it!

Let's take a look at the spec file now that within these 2 months, there are a couple of other features available.

**CODE  3 - replacer-2-months-later.test.js**

Now the function supports an opacity option, and there's a few more test cases, some nesting, and branching in the `describe`/`it` madness of a 400 lines test file. The developer has a tough time to go through the test cases and find the right spot for the scenario he just fixed; it's like it doesn't fit anywhere. On top of that, any addition to that file seems to break a few other unit tests that aren't in any way related to the new test case he/she is trying to introduce.

**GIF ITS TIME TO STOP**

It's time to rethink the structure/architecture of the tests for this project. Let's give a try and use fixtures to architect our new test setup.

First of all, notice that no matter the scenario, we have a single entry point `backgroundColorReplacer` that receives two arguments, a line of some CSS file as a string, and an object with a set of options to manipulate the replacement.

Second let's think of each test case as a unique scenario with its description, no matter how specific it is.

Third, let's separate boilerplate code from the actual test code.

```javascript
it ('some description', () => {
    // setup code...
    // some operations...
    expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
});
```

Above you can see a skeleton structure of what we repeat time after time; you open the test block, and in the end, you perform an assertion on the result of calling the replacer function.

Let's separate the scenario setup and the above boilerplate code in ways that you need only to write for each test the scenario. You won't be writing the boilerplate code for the test setup or the assertion step any longer.

Our new file tree now looks like:

** CODE 5 - file tree for the first version**

So our test consists now on declaring the inputs for the replacer function. Let's take a look at replace-color-when-match/input.js

```javascript
// replace-color-when-match.js
const target = 'background-color: red';
const fromColor = 'red';
const toColor = 'yellow';
const options = { fromColor, toColor };

module.exports = { target, options };
```

However, how do we run the tests? Also, how exactly it's going to look at the test output in our tests report?

For that, we need to take a look into run-fixtures.js.

```javascript
// run-fixtures.js
```

The above code generates the test file for each one of the test fixtures that you specified within the fixtures directory. Of course, that are a lot of different approaches here. You can implement this script in many different ways, its scope, however, should ideally not change much. The script is the glue between your scenarios and the underlying test runner:
You can execute the tests directly within the run-fixtures file.
You can generate the boilerplate JavaScript test file and use it as a starting point and then perform some changes in the output file.
You have a single level fixtures directory without having an input file per fixture and name the file directly according to the scenario.

**SCREENSHOT OF TESTS OUTPUT REPORT**

My goal here is to give you the idea that, in some projects, you might be able to drop a lot of boilerplate by wisely choosing your testing architecture;  The pattern you go for it's just a means for you to organize your thoughts, it doesn't mean that if you don't choose the write architecture your output is a poorly tested codebase, you can still certainly achieve that, it just won't be as easy.

** WHAT'S THE CATCH MEME **

What's the catch?
There are a few disadvantages that you should consider before exploring this idea:
Unintended duplication - since we have a flat structure, it might come the time where you have many scenarios, and someone introduces a repeated scenario without being aware. To avoid duplication, you can put in place since the very beginning some proper naming conventions for your test cases, such as prefixing common scenarios with some common keywords that show that those scenarios are somewhat related.
Setup - depending on the project and the underlying test runner, it might be more os less complex to put in place such a setup. We saw that with Jest is a piece of cake.
Overhead of useless scenarios - if before having this test architecture, it was hard to modify or extend the existent test, now it becomes the extreme opposite. It's just too easy to go to the project and add a new test case. Keep an eye on each new test case and ask yourself if it is vital or if it's only cute (ask Ryan Dahl about adding cute things to your projects).

Projects using fixtures?
If you read this article, you may now have an idea of how a fixtures based architecture might look like, but in real life, they appear in many other different colors and formats. Some known projects that use this pattern are:
- facebook/react
- babel/babel
- pugjs/pug
- webpack/webpack
(tip: to have a big picture of how these projects run fixtures, go to their GitHub repo and perform a search for "fixtures/" and you'll see glue code that I demonstrated in this article, but a bit harder to follow due to the dimension of the code base of these projects)

All the code examples in this blogpost are in a GitHub repository. Also, the babel plugin where I fire started this idea was in the babel-plugin-cloudinary, if you check the codebase, you might pretty quickly identify the patterns explored in this article.

I hope that if you went through the article, you have now one more software pattern on your toolbox that will (for the right use cases) allow you scale the tests in your codebase effortlessly and a self-documented/self-organized fashion.

If you want to get a few extra tips more specifically on Jest, you might want to take a look at <a href="https://goodguydaniel.com/blog/tips-jest-unit-testing/" target="_blank" title="Blogpost with tips for unit testing with Jest Unrevealed tips for unit testing with Jest">Unrevealed tips for unit testing with Jest</a> blog post.

What do you think about having a fixture based testing architecture? Do you have any project in mind where you see the right match? I would love to hear it! Drop a comment below, or on twitter @_danielcaldas.

*Note: This article refers to the JavaScript language and the <a href="https://jestjs.io/en/" target="_blank" title="jest is a delightful javascript testing framework with a focus on simplicity">Jest JavaScript library</a>, this does not mean that what you find here might not be ported into other programming languages and ecosystems.*



<a href="https://github.com/trivago/babel-plugin-cloudinary" target="_blank" title="official repository for babel-plugin-cloudinary compile cloudinary urls at build time.">babel-plugin-cloudinary</a>

<a href="https://goodguydaniel.com/blog/presenting-babel-plugin-cloudinary/" target="_blank" title="goodguydaniel.com, blog post, Presenting babel-plugin-cloudinary">working on a babel plugin</a>