---
layout: post
title:  "Test fixtures from scratch"
date:   2019-10-02 09:00:00 +0100
readTime: 10
categories: jekyll update
---

From project to project, I've seen applications structured in many different ways, but most of the time, no matter how different the software was, the testing techniques and structures were almost always the same. In this article, I want to share with you an experienced-based journey on how we can differently structure our tests; **I'm calling it a fixture based architecture** (or fixture based testing setup).

## About the unit tests we write

**On a very high level manipulating the execution flow through inputs and performing assertions on outputs is what happens with all the tests that we write** daily (weekly at least I hope), at different levels of granularity. Whether we want to test a small function or a large JavaScript module with multiple entry points, our ultimate goal is to perform a set of assertions that bring us the peace of mind and stability to move forward and build more stuff on top.

It happens that **in specific scenarios**, unit tests as we write them **might become pure overhead**. How come? Because we repeat the same structures, and we write the same boilerplate code again and again, without really thinking about how these particular tests could become more pleasant to maintain and scale. Why should I care about looking for alternatives? Because it can save you time, it can document your codebase through well organized and self-explanatory test fixtures.

Let's take a look at how we can move on from a routine unit test setup to a fixture based setup through a dummy case study that I specially designed and implemented step by step to demonstrate how tests can be set up in a way more declarative way.

## Test fixtures

Before diving into details, let's take a few seconds to go through this definition of test fixtures that I came across in the <a href="https://github.com/junit-team/junit4/wiki/test-fixtures" target="_blank" title="junit-team/junit4 description of test fixtures">junit-team/junit4 GitHub wiki page</a>, In my opinion is extremely accurate.

<!-- quotation -->
> A test fixture is a fixed state of a set of objects used as a baseline for running tests. The purpose of a test fixture is to ensure that there is a well known and fixed environment in which tests are run so that results are repeatable. Examples of fixtures:
- Preparation of input data and setup/creation of fake or mock objects
- Loading a database with a specific, known set of data
- Copying a specific known set of files creating a test fixture will create a set of objects initialized to certain states.
<!-- /quotation -->

<div style="margin-bottom: 60px;text-align:center;">
    <img alt="barack obama, sounds about right, meme" src="/assets/img/test-fixtures-from-scratch/sounds-about-right.jpeg"/>
</div>

## A case study: slowly moving to a fixture based test setup

I'll create a small project to illustrate the concepts throughout this article, all the code is available in the repository <a href="https://github.com/danielcaldas/test-fixtures-pattern" target="_blank" title="GitHub, Daniel Caldas, test-fixtures-pattern case study project">danielcaldas/test-fixtures-pattern</a>. The project it's not actually something that one would use, but it's a good example to depict and analyze certain scenarios.

### 📜 Small & dummy example for our case study

```
├── replacer.js
└── __tests__
    ├── replacer.test.js
    └── __snapshots__
        └── replacer.test.js.snap
```

```javascript
/**
 * Replaces background color that matches a certain color by another.
 * @param {string} target a css line
 * @param {Object} options a set of options for the new color.
 * @returns {string} the replaced expression or
 * the same as the input if nothing matches.
 */
function backgroundColorReplacer(target, options) {
    const { fromColor, toColor, opacity } = options;
    const bgc = `background-color: rgb(${fromColor.join(', ')})`;

    if (target === bgc && toColor && toColor.length) {
        const color = toColor.join(', ');

        if (opacity) {
            return `background-color: rgba(${color}, ${opacity})`;
        }

        return `background-color: rgb(${color})`;
    }

    return target;
}

module.exports = backgroundColorReplacer;
```
<small><a href="https://github.com/danielcaldas/test-fixtures-pattern/blob/master/replacer.js" target="_blank" title="GitHub, Daniel Caldas, test-fixtures-pattern case study project, replacer.js">[replacer.js]</a></small>

So basically, we have a function that performs replacement of `background-color` expressions given a set of options, this is very minimalistic, but the number of options can quickly scale to a few dozens depending on what kind of replacements one might want to perform in the future. The unit tests for this function might look like the following.

```javascript
const backgroundColorReplacer = require('../replacer');

describe('backgroundColorReplacer', () => {
    it('should replace color if they match', () => {
        const target = 'background-color: rgb(255, 0, 0)';
        const fromColor = [255, 0, 0];
        const toColor = [0, 255, 0];
        const options = { fromColor, toColor };

        expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
    });
});
```
<small><a href="https://github.com/danielcaldas/test-fixtures-pattern/blob/master/__tests__/replacer.test.js" target="_blank" title="GitHub, Daniel Caldas, test-fixtures-pattern case study project, replacer.test.js">[replacer.test.js]</a></small>

### 📆 A few weeks down the road

We have a high-level description, and then we might want to start nesting and branching different kinds of scenarios as we scale.

Let's imagine that you and your team have now been using and developing this replacer code for 2 months, it's fantastic, everybody loves it, but there's some edge case that needs attention. The developers are all over it!

Let's take a look at the test file now that within these 2 months, there are a couple of other features available.

```javascript
const backgroundColorReplacer = require('../replacer');

describe('backgroundColorReplacer', () => {
    it('should replace color if they match', () => {
        const target = 'background-color: rgb(255, 0, 0)';
        const fromColor = [255, 0, 0];
        const toColor = [0, 255, 0];
        const options = { fromColor, toColor };

        expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
    });

    it('should replace color if they match and add opacity when defined', () => {
        // ...
    });

    it('should not replace color if they do not match', () => {
        // ...
    });

    it('should not replace color there is no new color specified', () => {
        // ...
    });
});
```
<small><a href="https://github.com/danielcaldas/test-fixtures-pattern/blob/master/__tests__/replacer.test.js" target="_blank" title="GitHub, Daniel Caldas, test-fixtures-pattern case study project, replacer.test.js">[replacer.test.js]</a></small>

Now the function supports an opacity option, and there are a few more test cases, some nesting, and branching in the `describe`/`it` *madness* of an overwhelmingly large file. The developer has a tough time to go through the test cases and find the right spot for the scenario he just fixed; it's like it doesn't fit anywhere. On top of that, any addition to that file seems to break a few other unit tests that aren't in any way related to the new test case he/she is trying to introduce.

<div style="margin-bottom: 60px;text-align:center;">
    <img alt="filthy frank, pink guy it is time to stop meme" src="/assets/img/test-fixtures-from-scratch/its-time-to-stop.gif"/>
</div>

## Rethinking the tests architecture

It's time to rethink the way we structure the tests for this project. Let's give a try and use fixtures to architect our new test setup.

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

```
├── fixtures
│   ├── not-replace-color-if-no-match.js
│   ├── not-replace-color-if-no-new-color-specified.js
│   ├── replace-color-when-match-and-opacity-defined.js
│   ├── replace-color-when-match.js
│   └── tests (auto-generated content)
│       ├── fixtures.spec.js
│       └── __snapshots__
│           └── fixtures.spec.js.snap
├── replacer.js
├── run-fixtures.js
└── __tests__
    ├── replacer.test.js
    └── __snapshots__
```

So our test consists now on declaring the inputs for the replacer function. Let's take a look at `fixtures/replace-color-when-match.js`

```javascript
const target = 'background-color: rgb(255, 0, 0)';
const fromColor = [255, 0, 0];
const toColor = [0, 255, 0];
const options = { fromColor, toColor };

module.exports = { target, options };
```
<small><a href="https://github.com/danielcaldas/test-fixtures-pattern/blob/master/fixtures/replace-color-when-match.js" target="_blank" title="GitHub, Daniel Caldas, test-fixtures-pattern case study project, replace-color-when-match.js">[fixtures/replace-color-when-match.js]</a></small>

However, how do we run the tests? Also, how exactly it's going to look at the test output in our tests report?

For that, we need to take a look into `run-fixtures.js`.

```javascript
const fs = require("fs");
const FIXTURES_BASE_DIR = `${__dirname}/fixtures`;

function generateFixtureJestSnippets(files) {
  // ...
  const open = `
    // WARNING: this file is generated automatically
    const backgroundColorReplacer = require('../../replacer');

    describe('backgroundColorReplacer', () => {
  `;
  const close = `});`
  const specs = files.map(fname => {
      const input = fs.readFileSync(`${FIXTURES_BASE_DIR}/${fname}`);
      const specName = fname.split('.js')[0].replace(/[-]/gi, ' ');

      return `
        it("${specName}", () => {
          try {
            const { target, options } = require(\`../${fname}\`);
            expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
          } catch(error) {
            expect(error).toMatchSnapshot();
          }
        });
      `;
  }).join("\n");

  return `${open}${specs}${close}`;
}

function parseFileTree(err, files) {
  // ...
  const tmp = generateFixtureJestSnippets(files.filter(f => f !== 'tests'));

  fs.writeFileSync(`${FIXTURES_BASE_DIR}/tests/fixtures.spec.js`, tmp);
}

fs.readdir(FIXTURES_BASE_DIR, parseFileTree);
```
<small><a href="https://github.com/danielcaldas/test-fixtures-pattern/blob/master/run-fixtures.js" target="_blank" title="GitHub, Daniel Caldas, test-fixtures-pattern case study project, replace-color-when-match.js">[run-fixtures.js]</a></small>

## The results: generating test snippets and executing them with jest

The above code generates the test file for each one of the test fixtures that you specified within the fixtures directory. Of course, that are a lot of different approaches here. You can implement this script in many different ways, its scope, however, should ideally not change much. **The script is the *glue* between your scenarios and the underlying test runner**.

The output of running the `run-fixtures.js` script is a familiar Jest compliant file:

```javascript
// WARNING: this file is generated automatically
const backgroundColorReplacer = require('../../replacer');

describe('backgroundColorReplacer', () => {
    it("not replace color if no match", () => {
        try {
            const { target, options } = require(`../not-replace-color-if-no-match.js`);
            expect(backgroundColorReplacer(target, options)).toMatchSnapshot();
        } catch(error) {
            expect(error).toMatchSnapshot();
        }
    });

    it("not replace color if no new color specified", () => {
        // ...
    });

    it("replace color when match and opacity defined", () => {
        // ...
    });

    it("replace color when match", () => {
        // ...
    });
});
```
<small><a href="https://github.com/danielcaldas/test-fixtures-pattern/blob/master/fixtures/tests/fixtures.spec.js" target="_blank" title="GitHub, Daniel Caldas, test-fixtures-pattern case study project, fixtures.spec.js">[fixtures.spec.js]</a></small>

The output or running the above test also looks familiar, is a simple Jest report.

<div style="text-align:center;">
    <img alt="Jest, final test report" src="/assets/img/test-fixtures-from-scratch/final-test-report.png"/>
</div>

My goal here is to give you the idea that, in some projects, you might be able to drop a lot of boilerplate by wisely choosing your testing architecture;  The pattern you go for it's just a tool for you to organize your thoughts, it doesn't mean that if you don't choose the right architecture your output is a poorly tested codebase, you can still certainly achieve that, it just won't be as easy.

### 🎰 Bonus section: development watch mode for fixtures

Another thing that comes in handy when setting up our testing workflow, is to have a way to update the fixtures by tweaking existing test case inputs or adding new ones and automatically re-running the run-fixtures script and the unit tests with <a href="https://jestjs.io/en/" target="_blank" title="jest is a delightful javascript testing framework with a focus on simplicity">Jest</a>, how would that go?

If you never tried <a href="https://github.com/remy/nodemon" target="_blank" title="Monitor for any changes in your node.js application and automatically restart the server - perfect for development">nodemon</a>, now it's a good time to check it out. It's a mighty tool to restart some job given that you perform specific changes in your project. Let's use nodemon to set up a watch npm script that seamlessly re-runs our fixtures. The idea is that we achieve the same workflow that we normally have with <a href="https://jestjs.io/docs/en/cli#watchall" target="_blank" title="Jest cli, watch all option">jest \-\-watchAll</a>, on our fixtures folder. After installing nodemon, we just need to use the <a href="https://github.com/remy/nodemon#monitoring-multiple-directories" target="_blank" title="Monitor for any changes in your node.js application and automatically restart the server - perfect for development, watch mode">\-\-watch</a> option to check for changes in our fixtures.

```json
"fixtures:run": "node run-fixtures && jest ./fixtures/tests/fixtures.spec.js",
"fixtures:clean": "...",
"fixtures:watch": "nodemon --watch ./fixtures --ignore ./fixtures/tests --exec \"npm run fixtures:run\""
```
<small><a href="https://github.com/danielcaldas/test-fixtures-pattern/blob/master/package.json" target="_blank" title="GitHub, Daniel Caldas, test-fixtures-pattern case study project, package.json">[package.json]</a></small>

As you can see from the above snippet, we *glue* and chain everything together; nodemon does most of the work. Now when we want to perform interactive changes in our fixtures we just need to type `npm run fixtures:watch`. See the result below.

<div style="text-align:center;">
    <img alt="GIF running fixtures in watch mode" src="/assets/img/test-fixtures-from-scratch/fixtures-watch-mode.gif"/>
</div>

Satisfying right?

<div style="text-align:center;">
    <img width="40%" height="60%" alt="satisfying face, meme" src="/assets/img/test-fixtures-from-scratch/satisfying.jpg"/>
</div>

<br/>

## Projects using fixtures?

If you read this article, you may now have an idea of how a fixture based architecture might look like, but in real life, they appear in many other different colors and formats. Some known projects that use this pattern are:

- <a href="https://github.com/facebook/react" target="_blank" title="A declarative, efficient, and flexible JavaScript library for building user interfaces. https://reactjs.org">facebook/react</a>
- <a href="https://github.com/babel/babel" target="_blank" title="Babel is a compiler for writing next generation JavaScript. https://babeljs.io/">babel/babel</a>
- <a href="https://github.com/pugjs/pug" target="_blank" title="Pug – robust, elegant, feature rich template engine for Node.js https://pugjs.org">pugjs/pug</a>
- <a href="https://github.com/webpack/webpack" target="_blank" title="A bundler for javascript and friends. Packs many modules into a few bundled assets">webpack/webpack</a>

Not a known project, but the babel plugin where I first implemented such architecture is <a href="https://goodguydaniel.com/blog/presenting-babel-plugin-cloudinary/" target="_blank" title="goodguydaniel.com, blog post, Presenting babel-plugin-cloudinary">babel-plugin-cloudinary</a>, if you check the test setup, you might quickly identify the patterns explored in this article.

<small>**tip**: to have a big picture of how these projects run fixtures, go to their GitHub repo and perform a search for "fixtures/" and you'll see *glue* code that I demonstrated in this article; it might be a bit harder to follow due to the dimension of these projects</small>.

## Reasons not to...

<div style="text-align:center;margin-top:30px;">
    <img width="70%" height="70%" alt="so, what is the catch, meme" src="/assets/img/test-fixtures-from-scratch/whats-the-catch-meme.jpg"/>
</div>

I can think of two disadvantages that you should consider before exploring this option:

- **Unintended duplication becomes propitious** - since we have a flat structure, it might come the time where you have many scenarios, and someone introduces one or more repeated scenarios without being aware of it. To avoid duplication, you can put in place, since the very beginning, some proper naming conventions for your test cases, such as prefixing common scenarios with some common keywords that show that those scenarios are somewhat related.
- **Setup might be too complex** - depending on the project and the underlying test runner, it might be more os less complex to put in place such a setup. We saw that with Jest is a piece of cake.
Overhead of useless scenarios - if before having this test architecture, it was hard to modify or extend the existent test, now it becomes the extreme opposite. It's just too easy to go to the project and add a new test case. Keep an eye on each new test case and ask yourself if it is vital or if it's only cute (ask <small><a href="https://github.com/ry" target="_blank" title="Ryan Dahl, creator of Node.js, GitHub account">Ryan Dahl</a></small> about adding cute things to your projects).

## Conclusions

As already mentioned, all the code examples in this post are in a <a href="https://github.com/danielcaldas/test-fixtures-pattern" target="_blank" title="GitHub, Daniel Caldas, test-fixtures-pattern case study project">public GitHub repository</a>.

I hope that if you went through the article, you have now one more software pattern on your toolbox that will (for the right use cases) allow you scale the tests in your codebase effortlessly and a self-documented/self-organized fashion.

If you want to get a few extra tips more specifically on Jest, you might want to take a look at <a href="https://goodguydaniel.com/blog/tips-jest-unit-testing/" target="_blank" title="Post with tips for unit testing with Jest Unrevealed tips for unit testing with Jest">"Unrevealed tips for unit testing with Jest"</a> blog post.

What do you think about having a fixture based testing architecture? Do you have any project in mind where you see the right match?

<small>*Note: This article refers to the JavaScript language and the Jest JavaScript library, this does not mean that what you find here might not be ported into other JavaScript libraries or into other programming languages and ecosystems.*</small>
