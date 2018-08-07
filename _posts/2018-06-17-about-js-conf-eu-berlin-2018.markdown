---
layout: post
title:  "JSconf EU 2018"
date:   2018-07-07 16:00 +0100
categories: jekyll update
---
![js conf eu 2018 berlin logo](/assets/img/about-js-conf-eu-berlin-2018/jsconf-logo-full.svg "js conf eu 2018 logo")
<br>
<br>
## For starters
As promised in the post on [CSSconf EU 2018](https://goodguydaniel.com/jekyll/update/2018/06/17/about-css-conf-eu-berlin-2018.html) I will now talk a bit about the JSConf EU 2018 that preceded the CSSConf in the Berlin Arena (June 2nd and 3rd).

## The talks (highlights)
As you're probably expecting the talks weren't exclusively technical (of course we got to see a few *hands on* kind of presentation) topics ranged from ethics, productivity, history all the way to the more technical realm with performance, user experience, machine learning, IoT and of course the Javascript language itself (<a href="https://2018.jsconf.eu/schedule/" target="_blank" title="jsconf eu 2018 berlin schedule">check out the conference full schedule</a>). Also worth mentioning, there were a few electronic music live performances by <a href="https://twitter.com/nested_loops?lang=en" target="_blank" title="nested_loops twitter">nested_loops</a> and <a href="http://livejs.network/" target="_blank" title="live:js official website">live:js</a>, the sound and the visual effects played nicely producing <a href="https://www.youtube.com/watch?v=dPWRaN2PXZw" target="_blank" title="live:js opening performance youtube">a great show</a>.

Now I'll just highlight a few interesting talks that I had the change to see on each day, I'll focus on the talks and content that were more meaningful in my opinion.

### Day 1
<!--Kablooie: A History of Errors & a Future of Solutions - Sarah Groff Hennigh Palermo - JSConf EU 2018-->
The opening talk was about errors [<span id="d1t1">(1)</span>](#mentioned-talks-for-day-1), yes errors. I've highlighted this topic because error handling is often forgotten or skipped but shouldn't this be part of the modeling process and architecture of our applications? Well that's another story.
Questioning type systems and discussing errors from a human prespective a pretty valid statement was pointed out
on Javascript error handling mechanism, **it is practically the same since it came out in <a href="https://codeburst.io/javascript-wtf-is-es6-es8-es-2017-ecmascript-dca859e4821c" target="_blank" title="javascript wtf is es6 es8 es 2017 ecmascript">ES3</a>**. Of course the language evolved in ways that try
to mitigate predictable runtime errors with static analysis, the ES5 brought along the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" target="_blank" title="mdn strict mode">strict mode</a>, strict mode is basically (talk quote) *"disallow bad code that otherwise would be allowed according to the language grammar"*. Next a list of how tipically errors are handled and here handled in the past was shown, from the classic *just crash* classic to exceptions, signals, options/maybes... .
Some conclusions here were:
 - We need more robust way to deal with nullity (<a href="https://github.com/tc39/proposal-optional-chaining" target="_blank" title="tc39 optional chaining proposal">optional chaining tc39 proposal</a>)
- Expand ways to work with errors (e.g. *onError* event listeners).
- Focusing on default arguments.
- Maintain good state in the face of user interaction while warning for events that caused transition to a bad one.

Other ideas that the speaker brought to discussion envolved <a href="https://users.ece.cmu.edu/~koopman/des_s99/sw_fault_tolerance/" target="_blank" title="cmu recovery blocks">recovery blocks</a> and <a href="https://www.microsoft.com/en-us/research/wp-content/uploads/2016/08/algeff-tr-2016-v2.pdf" target="_blank" title="microsoft technical report algebraic effects for functional programming">algebraic effects</a>.

<!--Native BigInts in JavaScript: A Case Study in TC39 - Daniel Ehrenberg - JSConf EU 2018-->
Next <a href="https://twitter.com/littledan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" title="daniel ehrenberg twitter">Daniel Ehrenberg</a> talks to us about numbers [<span id="d1t2">(2)</span>](#mentioned-talks-for-day-1). So the problem is that number representation in Javascript are limited to 2^35, as in:

```javascript
const x = 2 ** 53;

// x is 9007199254740992

const y = x + 1

// y is again 9007199254740992
```

According to this presentation *long/ulong* types where proposed back there (1999) in some of the first ECMA specifications, still they didn't make till the very end. But why this limitation in numerical representation in Javascript. Numbers in Javascript are 64-bit floating point binary numbers (<a href="https://en.wikipedia.org/wiki/Double-precision_floating-point_format" target="_blank" title="wikipedia double-precision floating-point format">IEEE 754 64-bit floats</a>), and they're structure is:

![binary floating point number representation](/assets/img/about-js-conf-eu-berlin-2018/binary-number-representation.png "binary floating point number representation")

So the 2^53 maximum number (900719925474099**2**) looks like this when in the binary floating point representation:
> 0 10000110100 000000000000000000000000000000000000000000000000000

Adding **1** we get:

> 0 10000110100 00000000000000000000000000000000000000000000000000**1**

that is 900719925474099**4**. So... Ok we get it, with a 64 bit representation it's impossible to represent all the numbers since you have the limitation of a 64 bit combination pattern to form numbers, at some point we need to round it, go up to infinity or throw an error.

But wait, is this a real use case? Yes, <a href="https://developer.twitter.com/en/docs/basics/twitter-ids.html" target="_blank" title="twitter developers twitter ids (snowflake)">checkout Twitter IDs (snowflake) issue</a> that made them add an *id string* field so that when Javascript parses the id it keeps this unchanged id in the string format.
The proposed solution are *BigInts*. Not some library such as <a href="https://github.com/indutny/bn.js/" target="_blank" title="BigNum in pure javascript">bn.js</a>, instead a native Javascript supported BigInt type.

```javascript
x = 2n ** 53n

// x is 9007199254740992n

y = x + 1n

// y is now 9007199254740993n

// note that if you try and add a number you will get a TypeError
y = x + 1

// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
```

You can check the progress of the proposal at the github repository
<a href="https://github.com/tc39/proposal-bigint" target="_blank" title="arbitrary precision integers in javascript">tc39/proposal-bigint</a>, it is at the time of this writing in stage 3.

In my opinion may solve huge corner cases as the one exposed previously, still I think it will make arithmetic operations less error prune since we can eventually now run into *TypeErrors* for mixing numbers with big ints. If big int is not explicit enough to developers we can start to fall into messy errors, but maybe I'm over reacting here.

<!--Further Adventures of the Event Loop - Erin Zimmer - JSConf EU 2018-->
You most certainly have seen the Philip Roberts' talk on the event loop <a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=4s" target="_blank" title="Philip Roberts: What the heck is the event loop anyway? | JSConf EU">*What the heck is the event loop anyway? | JSConf EU*</a>.  If not, please stop reading this and watch that, it's way more important and cool as well. In this next talk we dive into the event loop to learn that the event loop is a bit more complex that what you saw in Philip Roberts' talk. To start we can think of the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop" target="_blank" title="javascript mdn event loop">event loop</a> as the main function of the browser, something like:

```javascript
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

A quick look into how task queues work on web browsers [<span id="d1t3">(3)</span>](#mentioned-talks-for-day-1). So first *tasks* are small unities of work to be executed from start to finish. Rendering pipeline in browsers is responsible for painting things in the browser. This pipeline can run when a task finishes, but the rendering pipeline has a separate time cycle and sometimes waiting is inevitable between the time a tasks finished and the time render pipeline runs again. Also if you have a task that takes really a long time to run the rendering pipeline has to wait, potentially your page will start to slowdown at this point.
<br/>
There are this things called micro tasks (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises" target="_blank" title="guide using promises mdn">promises' callbacks are handled as micro tasks</a>). Micro tasks are handled differently than regular tasks, micro tasks are queued in a micro task queue, this queue runs after each tasks and while the queue is emptying other micro tasks might be added and executed in the same event loop tick.

![buzz and woody](/assets/img/about-js-conf-eu-berlin-2018/task-queue-meme.jpg "buzz and woody meme")

There's more. Animations have a dedicated queue as well the **animation frame callback queue**. When some animation tasks ends the event loop proceeds to the repaint, meaning that we don't wait up for new animation tasks that might appear, and it makes sense because if that happens it's because some animation was requested to be displayed in the next frame (thus in the next repaint).

At the end of these series of explanations we got the following pseudo code:

```javascript
while(true) {
  queue = getNextQueue();
  task = queue.pop();

  execute(task);

  while(microtaskQueue.hasTasks()) {
    doMicroTask();
  }

  if (isRepaintTime()) {
    animationTasks = animationQueue.copyTasks();

    for (task in animationTasks) {
      doAnimationTask(task);
    }

    repaint();
  }
}
```

And that should be it. **Now a quick peak into Node.js**. Node should be more simpler since:
- There are no scripting parsing events.
- There are no user interactions.
- There are no animation frame callbacks.
- There is no rendering pipeline.

A few interesting things:
- `setImmediate(callback)` is the same as `setTimeout(callback, 0)` but it runs first!
- `process.nextTick(callback)` all this callbacks will run before the promises callbacks.
- `setImmediate(callback)` does something on the next tick.
- `process.nextTick(callback)` does something immediately.

Below the pseudo-code for the Node event loop:

```javascript
while(tasksAreWaiting()) {
  queue = getNextQueue();

  while(queue.hasTasks()) {
    task = queue.pop();

    execute(task);

    while(nextTickQueue.hasTasks()) {
      doNextTickTask();
    }

    while(promiseQueue.hasTasks()) {
      doPromiseTask();
    }
  }
}
```

<small>(<a href="https://medium.freecodecamp.org/walking-inside-nodejs-event-loop-85caeca391a9https://medium.freecodecamp.org/walking-inside-nodejs-event-loop-85caeca391a9" target="_blank" title="medium walking inside the node.js event loop">this nice</a> article explains with more detail the event loop inside Node.js)</small>

Regarding <a href="https://developer.mozilla.org/en-US/docs/Web/API/Worker" target="_blank" title="mdn web api worker">web workers</a> the only relevant fact pointed out is that they are simple to understand since each web worker runs it's own event loop on a separate thread and they are not allowed to manipulate DOM so no need to worry about user interactions here.

If you are interested in more of this you can check this very complete post <a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" target="_blank" title="tasks, microtasks, queues and schedules">*Tasks, micro tasks, queues and schedules*</a>, it contains interesting animated demonstrations.

<!--Hand-crafting WebAssembly - Emil Bay - JSConf EU 2018-->
[<span id="d1t4">(4)</span>](#mentioned-talks-for-day-1) More than a year has passed since the release of <a href="https://developer.mozilla.org/en-US/docs/WebAssembly/Concepts" target="_blank" title="">WebAssembly (WASM)</a>, it is still in its first steps towards what could be a game changer in web development (some say). In the next talk that I will mention WASM itself was introduced. So first of all WASM:
- It's not very web, it's only pure computation.
- It's not very assembly, it's not the code that actually runs on the machine, it's an abstraction.
- In WASM we cannot perform system calls (unless with explicit access).
- WASM cannot access additional hardware, you can check a simple example below.
- <a href="https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format" target="_blank" title="mdn wasm understanding the text format">Web assembly text-format (WAT)</a> is the assembly language for WASM.

```javascript
// square.wasm
(module
  (func $square
    (export "square")
    (param $x i32)
    (result i32)

    (return
      (i32.mul (get_local $x) (get_local $x))
    )
  )
)
```

That's enough WAT for now, you're probably wondering how can we use WASM modules within javascript. It's actually simple, you just have a small amount of boilerplate to load the WASM module. Let's import and use `square.wasm` module.

```javascript
fetch('square.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, importObject)
).then(results => {
  const square = results.instance.exports.square;

  const x = square(2);

  console.log(x); // 4
});
```

Of course you probably won't be using many native WAT modules, you will compile your C, C++, Rust or whatever into WASM, using it the same way we did above.

I think a very strong point was a little to much implicit during this talk, performance was mentioned still, with WASM we will be able to obtain a **more robust and coherent performance cross platform/browser** and **portability across operating systems and different CPU architectures**.

<figure>
  <img src="/assets/img/about-js-conf-eu-berlin-2018/wasm-diagram.png" alt="wasm diagram comparing to cpu architectures"/>
  <figcaption>As you can see WASM sits between our source code and creates an abstraction layer on top of the various CPU architectures. This diagram is from the talk <i>Dan Callahan: Practical WebAssembly | JSConf Budapest 2017</i>.</figcaption>
</figure>

If you want to look more into the benefits or what actually could be achieved with WASM I highly recommend the two following talks <a href="https://www.youtube.com/watch?v=PpuAqLCraAQ" target="_blank" title="real world webassembly chrome dev summit 2017">Real World WebAssembly (Chrome Dev Summit 2017)</a> and <a href="https://www.youtube.com/watch?v=bac0dGQbUto" target="_blank" title="dan callahan: practical webassembly jsconf budapest 2017">Dan Callahan: Practical WebAssembly | JSConf Budapest 2017</a>.


- 10 things regret Node.js
 - Not sticking with Promises
 - Security
 - The build system (GYP)
 - package.json
 - node_modules
 - require("module") without the extension .js
 - index.js
 - missing more 3?

#### Mentioned talks for day 1
- [(1)](#d1t1) <a href="https://www.youtube.com/watch?v=tteIQBPPxqc" target="_blank" title="kablooie: a history of errors & a future of solutions - sarah groff hennigh palermo - jsconf eu 2018">Kablooie: A History of Errors & a Future of Solutions - Sarah Groff Hennigh Palermo - JSConf EU 2018</a> [[go back](#d1t1)].
- [(2)](#d1t2) <a href="https://www.youtube.com/watch?v=RiU5OzMZ7z8" target="_blank" title="native bigints in javascript: a case study in tc39 - daniel ehrenberg - jsconf eu 2018">Native BigInts in JavaScript: A Case Study in TC39 - Daniel Ehrenberg - JSConf EU 2018</a> [[go back](#d1t2)].
- [(3)](#d1t3) <a href="https://www.youtube.com/watch?v=u1kqx6AenYw" target="_blank" title="further adventures of the event loop - erin zimmer - jsconf eu 2018">Further Adventures of the Event Loop - Erin Zimmer - JSConf EU 2018</a> [[go back](#d1t3)].
- [(4)](#d1t4) <a href="https://www.youtube.com/watch?v=CfdmzVos1Fs" target="_blank" title="hand-crafting webassembly - emil bay - jsconf eu 2018">Hand-crafting WebAssembly - Emil Bay - JSConf EU 2018</a> [[go back](#d1t4)].
- [(5)](#d1t5) <a href="https://www.youtube.com/watch?v=M3BM9TB-8yA" target="_blank" title="10 things i regret about node.js - ryan dahl - jsconf eu 2018">10 Things I Regret About Node.js - Ryan Dahl - JSConf EU 2018</a> [[go back](#d1t5)].

### Day 2

<hr>

## Berlin
You know Berlin right? The capital and largest city in Germany, also one of the largest and multicultural cities in europe. Despite the conference busy schedule I took sometime (mainly my last day) to visit a few of the high rated places in Berlin such as the museum island, the Berlin Cathedral, the Brandenburg Gate, Checkpoint Charlie and a few other spots. It is really worth visiting, besides the obvious places that you would wanna check as the ones mentioned previously Berlin has a great urban structure with organized and large street blocks composed by beautiful buildings, huge and various green spaces and of course an endless nightlife cater for all tastes.

## The venue
So, the event toke place at the Berlin Arena, an old building/factory kind of *hipster* place, very cool and very hot by that time of the year! Good thing water was free of charge and could be reached by a few steps from almost any place inside the arena. So yeah despite the cool space and stage set up, there where always free soft drinks (and frozen yogurt!) around to make sure one's never dehydrate. Talking about stage, aside the unbearable heat, the space was pretty cozy with round tables so that people could have laptops and other stuff on the table while assisting to the talks.

![stage](/assets/img/about-js-conf-eu-berlin-2018/stage.jpeg "js conf eu 2018 berlin stage")

Throughout the venue there were exhibition stands of the sponsor companies, aside the *goodies* you could see products demonstration, talk to people about the company or even get a job interview.

Breakfast, lunch and dinner where included in the ticket, so me and my colleagues agreed that it would be worth and try and so we venture into the vegan world (for me practically unknown at the time). The food was nice I mean, I had the opportunity to try a few dishes such as vegan hamburger, vegan gnocchi, vegan pasta, you get it...

| []() | []() |
![vegan food sample](/assets/img/about-js-conf-eu-berlin-2018/food-sample.jpeg "js conf eu 2018 berlin vegan food sample")  |  ![another vegan food sample](/assets/img/about-js-conf-eu-berlin-2018/another-food-sample.jpeg "js conf eu 2018 berlin another vegan food sample")

(*Above, clear proof of laziness, using tables to display images side by side so that I don't need to leave the markdown file. Shame on me.*)

At the end of the talks, we just grabbed a bear near the river and enjoy the remaining sunshine (no, we could not use the pool).

<br/>

![js conf eu 2018 berlin venue outside view](/assets/img/about-js-conf-eu-berlin-2018/venue-view-outside.jpeg "js conf eu 2018 berlin venue outside view")

## Next awesome features for JS (chat with TC39 panel)
- ?? optional chaining and coalescing operator
- pipe |>
- ... and more ...

Mention this talk HERE!!!!!!!!!!!!! - Back to the future JS: next amazing proposals*
  - :: bind operator
  - |> pipe operator
  - await (not understood this one..)
  - partial application (spread operator is referenced here)
(tc39 is referenced here)


<h2>New things I learned (about JS but not only)<br/>⚠️ randomly presented</h2>
- There is this new thing out there called <a href="https://github.com/denoland/denodeno" target="_blank" title="A secure TypeScript runtime on V8">deno</a>.
- If you throw an error inside a nested throw clause the outside catch will not be executed. In a similar way
if you reject a promise passing in a throw statement the catch will not evaluate as in:

```javascript
function justThrowAnErr() {
  throw new Error('some error message');
}

function fetchSomeRainbows(nRainbows) {
  if (!nRainbows) {
    return Promise.reject(justThrowAnErr());
  }

  return Promise.resolve('here u go');
}

fetchSomeRainbows().catch((rainbowError) => console.log('cannot rainbows'));

// this will output: "Error: some error message"
// instead of "unable to fetch rainbows"
```

- Facebook has built an ultra fast javascript bundler for React Native, if you are into this stuff you have
probably heard about <a href="https://facebook.github.io/metro" target="_blank" title="metro The JavaScript bundler for React Native">metro</a>

- When using <a href="" target="_blank" title=""><main></a> you will want to set a `role="main"` attribute
if you want to support IE11.

- One should add `role="banner"` on your main header not to be confused with other headers that you might
have.

- Do you develop your features for accessibility? I mean can a disable person you only uses the keyboard use your web site/app? This question made me think.

- An off-by-one error (OBOE), also commonly known as an OBOB (off-by-one bug), or OB1 error is a logic error involving the discrete equivalent of a boundary condition. It often occurs in computer programming when an iterative loop iterates one time too many or too few.

## Things that I kind of knew and got to confirm
- You can practically do everything with Javascript today and people are serious about this.
- I didn't know much about the browsers internals (e.g. event loop), but after this conference and this post
at least I'm aware of that now :D.

## Our team (group photo)