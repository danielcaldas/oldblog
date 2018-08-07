---
layout: post
title:  "JSconf EU 2018"
date:   2018-07-07 16:00 +0100
categories: jekyll update
---
![js conf eu 2018 berlin logo](/assets/img/about-js-conf-eu-berlin-2018/jsconf-logo-full.svg "JS Conf.EU 2018 logo")
<br>
<br>
## For starters
As promised in the post on [CSSconf EU 2018](https://goodguydaniel.com/jekyll/update/2018/06/17/about-css-conf-eu-berlin-2018.html) I will now talk a bit about the JSConf EU 2018 that preceded the CSSConf in the Berlin Arena (June 2nd and 3rd).

## The talks (highlights)
As you're probably expecting the talks weren't exclusively technical (of course we got to see a few *hands on* kind of presentation) topics ranged from ethics, productivity, history all the way to the more technical realm with performance, user experience, machine learning, IoT and of course the Javascript language itself (<a href="https://2018.jsconf.eu/schedule/" target="_blank" title="jsconf eu 2018 berlin schedule">check out the conference full schedule</a>). Also worth mentioning, there were a few electronic music live performances by <a href="https://twitter.com/nested_loops?lang=en" target="_blank" title="nested_loops twitter">nested_loops</a> and <a href="http://livejs.network/" target="_blank" title="live:js official website">live:js</a>, the sound and the visual effects played nicely producing <a href="https://www.youtube.com/watch?v=dPWRaN2PXZw" target="_blank" title="live:js opening performance youtube">a great show</a>.

Now I'll just highlight a few interesting talks that I had the change to see on each day and at end I'll just drop the list of the must see talks.

### Day 1
The opening talk was about errors [<span id="d1t1">(1)</span>](#mentioned-talks), yes errors. I've highlighted this topic because error handling is often forgotten or skipped but shouldn't this be part of the modeling process and architecture of our applications? Well that's another story.
Questioning type systems and discussing errors from a human prespective a pretty valid statement was pointed out
on Javascript error handling mechanism, **it is practically the same since it came out in <a href="https://codeburst.io/javascript-wtf-is-es6-es8-es-2017-ecmascript-dca859e4821c" target="_blank" title="javascript wtf is es6 es8 es 2017 ecmascript">ES3</a>**. Of course the language evolved in ways that try
to mitigate predictable runtime errors with static analysis, the ES5 brought along the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" target="_blank" title="mdn strict mode">strict mode</a>, strict mode is basically (talk quote) *"disallow bad code that otherwise would be allowed according to the language grammar"*. Next a list of how tipically errors are handled and here handled in the past was shown, from the classic *just crash* classic to exceptions, signals, options/maybes... .
Some conclusions here were:
 - We need more robust way to deal with nullity (<a href="https://github.com/tc39/proposal-optional-chaining" target="_blank" title="tc39 optional chaining proposal">optional chaining tc39 proposal</a>)
- Expand ways to work with errors (e.g. *onError* event listeners).
- Focusing on default arguments.
- Maintain good state in the face of user interaction while warning for events that caused transition to a bad one.

Other ideas that the speaker brought to discussion envolved <a href="https://users.ece.cmu.edu/~koopman/des_s99/sw_fault_tolerance/" target="_blank" title="cmu recovery blocks">recovery blocks</a> and <a href="https://www.microsoft.com/en-us/research/wp-content/uploads/2016/08/algeff-tr-2016-v2.pdf" target="_blank" title="microsoft technical report algebraic effects for functional programming">algebraic effects</a>.

Next <a href="https://twitter.com/littledan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" title="daniel ehrenberg twitter">Daniel Ehrenberg</a> talks to us about numbers [<span id="d1t2">(2)</span>](#mentioned-talks). So the problem is that number representation in Javascript are limited to 2^35, as in:

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

<!------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------->
- Empathy driven * (Accessebility strikes again)
<!------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------->


- Back to the future JS: next amazing proposals*
  - :: bind operator
  - |> pipe operator
  - await (not understood this one..)
  - partial application (spread operator is referenced here)
(tc39 is referenced here)
- Adventures event loop *
Potential cross reference https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/ REALLY good EXPLANATION

- Web assembly talk *

- Webdev in china *, it's worth it for being different

- 10 things regret Node.js
 - Not sticking with Promises
 - Security
 - The build system (GYP)
 - package.json
 - node_modules
 - require("module") without the extension .js
 - index.js
 - missing more 3?

#### Mentioned talks
- [(1)](#d1t1) <a href="https://www.youtube.com/watch?v=tteIQBPPxqc" target="_blank" title="kablooie: a history of errors & a future of solutions - sarah groff hennigh palermo - jsconf eu 2018">Kablooie: A History of Errors & a Future of Solutions - Sarah Groff Hennigh Palermo - JSConf EU 2018</a> [[go back](#d1t1)].
- [(2)](#d1t2) <a href="https://www.youtube.com/watch?v=RiU5OzMZ7z8" target="_blank" title="native bigints in javascript: a case study in tc39 - daniel ehrenberg - jsconf eu 2018">Native BigInts in JavaScript: A Case Study in TC39 - Daniel Ehrenberg - JSConf EU 2018</a> [[go back](#d1t2)].

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

## Things that I kind of knew and got to confirm
- You can practically do everything with Javascript today and people are serious about this.
-

## Our team (group photo)