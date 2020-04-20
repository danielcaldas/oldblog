---
layout: post
title: "You Can't Call Hooks Inside Conditions? Yes you can"
subtitle: "Because rules are made to be broken"
date: 2020-04-20 19:00:00 +0800
readTime: 4
categories: jekyll update
---

### tl;dr
* Calling hooks conditionally breaks the rules, yes.
* Wrap the hook with a component and render that component optionally to toggle the usage of the hook.
* The rules of hooks are somewhat reflections of the constraints of this React API.
* Example final full code [here](#example-full-code).

<br>

<div style="text-align:center;">
    <img width="70%" height="60%" alt="seagull on a transit signal" src="/assets/img/call-react-hooks-inside-condition/forbidden-seagull.png"/>
</div>

<br>

## [<small class="h-js-scroll">\#</small>](#bending-the-rules) Bending the Rules {#bending-the-rules}


There's a <a href="https://reactjs.org/docs/hooks-rules.html" target="_blank" title="Rules of Hooks - React">bunch of reasons why you can't use a React hook conditionally</a>. In this short article, I want to share with you a subtle pattern that I accidentally came across when in need of conditionally calling on a <a href="https://reactjs.org/docs/hooks-custom.html" target="_blank" title="Building Your Own Hooks – React">custom React hook</a> under a particular condition.

Before I start, I would like you to take a moment to reflect on the following questions?

<b>Why did you end up needing this? And, is it your fault, or is it the library's fault?</b>

<p style="margin-left:8px;">
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<i>seriously, ask yourself, why?</i><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
<b>.</b><br>
</p>

When I first tried to answer the question myself, I settled that it would be my fault If I had written the code since the very beginning.

If you pick React hooks API, you should structure the code accordingly not to end up falling into such scenarios where your better option might be breaking the rules. On the other end, if you have hundreds of components combined in a large shared codebase, you might hit a dead end where the most optimal option for the time being it's not beautiful. Still, it gets the job done and buys you and your team time to get things out faster, ideally you would come back and remove the hack later. Still, most of the time in the real world, we know that's not going to happen, so you better documenting it properly to alleviate the unavoidable spike on <i>WTFs/minute</i>.

<div style="text-align:center;">
    <img width="70%" height="60%" alt="code review cartoon" src="/assets/img/call-react-hooks-inside-condition/wtfs-per-minute-code-review.png"/>
</div>

As always, I think there's nothing better than an example to explain a concept, let's look into one.

In this example, we have a custom hook `useRandomNumberEverySecond` that produces a random number every one second. In a real scenario, you could potentially have a super sophisticated hook that performs asynchronous stuff like data fetching and puts everything together. For the sake of simplicity, we're just returning a number.

We want only to call on `useRandomNumberEverySecond` and use its result, if and only if, a flag `isHookActive` has value `true`. But, how can we achieve this if we declare hooks at the top level of a component, and we can't wrap them inside `if` statements?

My suggested approach is to wrap our hook `useRandomNumberEverySecond` in a second component, `RandomNumberWrapper`, that mediates the relationship between our target component and the hook `useRandomNumberEverySecond`. Let's see how that looks.

<br>
<!-- ADD A SLIGHTLY BIGGER GIF -->
<div style="text-align:center;">
    <img width="70%" height="60%" alt="GIF final result example code" src="/assets/img/call-react-hooks-inside-condition/example-final-result.gif"/>
</div>
<br>

As proof of concept, the goal is to have the button in the interface toggle the usage of our custom React hook.

### [<small class="h-js-scroll">\#</small>](#custom-react-hook) Custom React Hook {#custom-react-hook}

Our custom hook `useRandomNumberEverySecond` generates a random number every second.

```javascript
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function useRandomNumberEverySecond(max = 1000) {
  const [number, setNumber] = useState(getRandomInt(max));

  useEffect(() => {
    const interval = setInterval(() => setNumber(getRandomInt(max)), 1000);
    return () => clearInterval(interval);
  }, [max]);

  return number;
}
```

### [<small class="h-js-scroll">\#</small>](#the-main-component) The Main Component {#the-main-component}
Our main component looks like this, where `number` is provided by our custom hook (when active).

```jsx
export default function App() {
  const [isHookActive, setIsHookActive] = useState(false);
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <h1>Bending the Rules of Hooks</h1>
      <button onClick={() => setIsHookActive(!isHookActive)}>
        Click to toggle custom hook usage
      </button>
      <h4>
        {isHookActive ? `hook output is: ${number}` : "hook is not active"}
      </h4>
      {isHookActive && <RandomNumberWrapper setState={setNumber} />}
    </div>
  );
}
```

Notice that the component `RandomNumberWrapper` only renders when `isHookActive` is true. Now let's take a look at `RandomNumberWrapper`.

Now let's see how our main component consumes the custom hook `useRandomNumberEverySecond`.

### [<small class="h-js-scroll">\#</small>](#the-wrapper-component) The Wrapper Component {#the-wrapper-component}

```javascript
function RandomNumberWrapper({ setState }) {
  const number = useRandomNumberEverySecond();

  useEffect(() => {
    setState(number);
  }, [setState, number]);

  return null;
}
```

And that's it! `RandomNumberWrapper` blindly proxies whatever data comes from `useRandomNumberEverySecond` via the callback `setState`, which then updates the `number` state property in our main component. You can go ahead and apply this pattern to any hook in your codebase, wrapping up, you need to:
1. Create a new component to **wrap the usage of the hook** you intent to use conditionally.
2. Pass into this new component, a `setter` that **allows you to forward the data** back to the parent component.
3. **Conditionally mount the new component** in your target component and pass in the `setter` as a prop to the new component, that's how you're going to receive the state updates coming from your custom React hook.

<br>

## [<small class="h-js-scroll">\#</small>](#closing-notes) Closing Notes {#closing-notes}

I hope you found this pattern helpful! If you're curious to read more on the subject, I advise checking this excellent blog post entitled "<a href="https://inventingwithmonster.io/20190207-break-the-rules-of-react-hooks/" target="_blank" title="How to break the rules of React Hooks | Inventing With Monster">How to Break the Rules of React Hooks</a>".

After working some time with <a href="https://en.wikipedia.org/wiki/Observer_pattern" target="_blank" title="Observer pattern - Wikipedia">Observables</a> and <a href="https://rxjs-dev.firebaseapp.com/" target="_blank" title="RxJS">RxJS</a> and retrospectively thinking about React hooks and workarounds such as the one explored in this article, I feel that React hooks are a cumbersome and desperate attempt to ship an API that brings real reactivity to the React community. Additionally, after playing around with <a href="https://svelte.dev/" target="_blank" title="Svelte Cybernetically enhanced web apps">Svelte</a> for some time, I'm comparing the feeling that I had when transitioning from building UIs with Vanilla JavaScript and jQuery to use a framework that offers <a href="https://en.wikipedia.org/wiki/UI_data_binding" target="_blank" title="UI data binding - Wikipedia">UI data bindings</a>, to the feeling I had when moved from React hooks to <a href="https://svelte.dev/tutorial/reactive-statements" target="_blank" title="Reactivity/Statements - Svelte Tutorial">reactivity blocks in Svelte</a>. It feels like the conceptual and productivity jump in terms of evolution.

## [<small class="h-js-scroll">\#</small>](#example-full-code) Example Full Code {#example-full-code}

<details>
<summary style="cursor: pointer;">
click to see example full code
</summary>
<div markdown="1">
```jsx
import React, { useState, useEffect } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function useRandomNumberEverySecond(max = 1000) {
  const [number, setNumber] = useState(getRandomInt(max));

  useEffect(() => {
    const interval = setInterval(() => setNumber(getRandomInt(max)), 1000);
    return () => clearInterval(interval);
  }, [max]);

  return number;
}

function RandomNumberWrapper({ setState }) {
  const number = useRandomNumberEverySecond();

  useEffect(() => {
    setState(number);
  }, [setState, number]);

  return null;
}

export default function App() {
  const [isHookActive, setIsHookActive] = useState(false);
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <h1>Bending the Rules of Hooks</h1>
      <button onClick={() => setIsHookActive(!isHookActive)}>
        Click to toggle custom hook usage
      </button>
      <h4>
        {isHookActive ? `hook output is: ${number}` : "hook is not active"}
      </h4>
      {isHookActive && <RandomNumberWrapper setState={setNumber} />}
    </div>
  );
}
```
</div>
</details>
<br>
<br>