---
layout: post
title:  "CSSconf EU 2018"
date:   2018-06-10 21:13:42 +0100
categories: jekyll update
---
![css conf eu 2018 berlin logo](/img/2018-06-10-about-css-conf-eu-berlin-2018/1.jpg "CSS Conf.EU 2018 logo")
<br>
<br>
Hello all! I decided to write this blog post to share with you the new things I learned attending this year edition of [CSSconf EU](https://2018.cssconf.eu/) in Berlin. In this post I will focus more on the talks, I will cover other venue details in another blog post on the [JSConf EU](https://2018.jsconf.eu/) that had a similar organization.

If you there as I was, you were probably wandering whether you were at the right conference, since at the beginning you would aks yourself **where is the CSS**?

<img style="margin-left: 20%;" src="/img/2018-06-10-about-css-conf-eu-berlin-2018/2.gif" alt="john travolta lost gif"/>

But don't give up already! It started poorly on the CSS field, but it evolved throughout the day with some top notch talks, some of them include Razvan Caliman on *We have DevTools. What about DesignTools?* and Mike Riethmuller with *Strategy Guide for CSS Custom Properties*.

## The talks
<!--Preprocessors, Components, and CSS in JS or: How I Learned to Stop Worrying and Love the Website-->
<!--It’s Dangerous To Go Alone! Take This Team-->
As I mentioned earlier the first talk wasn't so much into CSS, what Trent gave to us was more of a carrier advice on how we should behave as individuals so that we are seen as part of a team, for Trent going solo in some project should never be even considered, we should always ask for feedback if we want to achieve accurate and quality results. Trent shared some personal techniques that help him grow as a developer in a controlled way avoiding things such as *burnout*. The term *mindfulness* came along somewhere in the talk as Trent was trying to explain the audience how he's able to keep a balanced mental health. Next we had Jackie Balzer who told us a bit of the history behind <a title="Behance is a network of sites and services specializing in self-promotion" href="https://www.behance.net/" target="_blank">Behance’s</a> codebase, how major redesigns left *jurassic* footprints in the codebase, some of then in the form of very descriptive "*TODOs*", that today would probably require a herculean effort to remove. At the end Jackie just commented on how she was able to achieve peace with the reality of a fragmented codebase.

<img width="60%" height="20%" style="margin-left: 20%;" src="/img/2018-06-10-about-css-conf-eu-berlin-2018/5.png" alt="this is fine dog on fire"/>

<br>
<!--The Web Is Not Just Left-to-Right -->
The next talk was truly eye-opening. Chen Hui Jing made a very cool historical overview on typography and writing systems, how some asian language (such as chinese, japanese and korean) are written vertically, and how that was transported into the web. Designing various labeled pencils in CSS, Chen explained how we could take advantage of [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) and [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) to manipulate the way we display elements in our web pages. In the end Chen showed some cool examples of how some small tweaks to our webpages could be more interesting displaying some text vertically.
<br>
<br>
<!--Refactoring with CSS Grid-->
Following we had Ollie Williams who shared the experience of using [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) in production. For the first time I had the opportunity to see some real life examples on [graceful degradation](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation) and  [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement), if you're wondering what's the difference between this two terms as I was, think of it the following way, [graceful degradation](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation) it's where you worry about providing the best experience possible, you use the latest bleeding edge web technologies to achieve that, for older browsers you will *degrade* user experience but always assuring some base line level of functionality. On the other hand [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement) philosophy aims to provide the best possible experience in all browsers keeping the same levels of user experience, one will where possible use newest features to *progressively* improve user experience.

![progressive enhancement vs graceful degradation](/img/2018-06-10-about-css-conf-eu-berlin-2018/3.jpg "visualization of progressive enhancement vs graceful degradation")
<br>
<br>
<!--We have DevTools. What about DesignTools?-->
Razvan Caliman's was one of the top talks. The point of this talk was all about how advanced tooling we have nowadays in browsers for developers to debug and analyze applications, but on the other hand how designer tools were *left behind*? Razvan made a pretty good point by exposing the problem this way, in fact he presented a few pains of the design part of the web from a developer perspective, these include editing styles on the fly using the element inspector, modifying [css shapes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Shapes)

Here you have the list of tools that Razvan mentioned in his talk:
- [Webflow](https://webflow.com/) - build responsive sites visually.
- [Chrome local overrides](https://developers.google.com/web/updates/2018/01/devtools#overrides) - make changes in DevTools, and keep those changes across page loads.
- [Finch developer tools](https://chrome.google.com/webstore/detail/finch-developer-tools/phgdjnidddpccdkbedmfifceiljljgdo?hl=en) 🌟 - changes you make in the css code styles will be saved locally on your computer.
- [Chrome color picker](https://youtu.be/2gAW0pUOBRI) - double click on some color in DevTools to open it.
- [Chrome text shadow editor](https://youtu.be/9z7P4Xqr2dU) - place you mouse on the bottom right corner of some css block style on the DevTools.
- [Firefox CSS grid inspector](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)
- [Firefox CSS filter editor](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_filters)
- [Safari CSS gradient editor](http://razvan.is/speaking/cssconfeu-2018/#/26)
- [Firefox font editor](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/View_fonts)
- [Firefox shape path editor](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Edit_CSS_shapes)

The talk ended with a kind of "*cry for help*" request, Razvan mentioned that not so many developers were focused on building design dev tools to improve development experience, he encouraged the community to make more designer tools to make us more effective and productive on designing beautiful web apps.
<br>
<br>
<!--Augmenting Empathy: Simulating Low-Vision Conditions with CSS, SVG and WebRTC-->
From this talk onwards things start focusing a lot around the **accessibility** topic, Shwetank Dixit shows some of his projects on this matter.
When we hear “low vision” what do we think about? Well Shwetank explained that these days low-vision it's just a umbrella term that aggregates a bunch of eyesight conditions that affect people in many different ways. Shwetank made very clear that not conditioned people don't know the real extent of these problems unless we talk with someone who experiences them everyday. Following, Shwetank just drop this one "*What if we could make tools to make people see what people with low vision actually see?*" And that was exactly what he did, with CSS, SVG and [WebRTC](https://webrtc.org/faq/#what-is-webrtc) he was able to emulate different low vision conditions that were perceptible trough a camera (with AR), this is a really noble thing to do, it certainly will make non conditional people more aware and comprehensive of this problems, at the same time I guess it makes conditioned people less frustrated because I imagine it can be pretty hard to explain ones condition to another, so why not showing it instead? You can consult a list of low vision tools in [lowvisiontools.barrierbreak.com](https://lowvisiontools.barrierbreak.com/).

<figure style="margin-left: 20%;">
  <img width="60%" height="20%" src="/img/2018-06-10-about-css-conf-eu-berlin-2018/6.png" alt="lowvisiontool color blindness"/>
  <figcaption>Some guy with a black shirt and a red stripes</figcaption>
</figure>

<br>
<!--Strategy Guide for CSS Custom Properties-->
Next we jump into CSS Custom Properties (*aka* css variables)! In this talk we got a close look onto css custom properties, they are basically a very nice way to help in the journey of **decoupling logic from design**. The main difference between css custom properties and variables
that you might be using with some css preprocessor is that those variables are static, using css custom properties they can be dynamic
and updated via javascript or for instance within a media query. Another nice detail about custom properties is that they can be scoped, so you can have local (by default they are locally scoped) or global css custom properties.

Here a small example to get you started, let's use css custom properties to dynamically change the color of shapes.
<iframe style="margin-left: -18%;" width="980" height="540" src="https://codepen.io/anon/pen/vrewpa" frameborder="0" allowfullscreen></iframe>
<br>
Mike shared his experience with custom properties and gave us some **lessons to use them efficiently**, here they are:
1. __All global variables should be static__.
2. __Don't be too cleaver__.
3. __Change the value not the variable__.
4. __If it changes, it's a variable__.
5. __Separate logic from design, be aware of the *logic fold*__.
6. __Theming will become much more easier to achieve__.
7. __Capitalize global static properties__.
8. __Use custom properties now__.

Check out [Mike's talk](https://www.youtube.com/watch?v=U9UU_fgpmO8) if you want to have a close look at the above 8 lessons.

Is also relevant to mention that css variables are today implemented in all the major browsers (excluding IE of course).

![can i use this css variables](/img/2018-06-10-about-css-conf-eu-berlin-2018/4.png "can i use this css variables")
<br>
<br>
<!--Accessible by Law! Generating Colors with JS and CSS Custom Properties-->
Next we had a talk that mixed [accessability](https://www.w3.org/standards/webdesign/accessibility) and css custom properties, here we learned how to dynamically make our site accessible
through css custom properties and javascript. In Norway accessability in websites is [required by law](https://www.w3.org/WAI/policies/norway/)
and a as part of this topic your website colors need to provide an accessible experience in ways that everything is legible and by some design
miscalculation you don't get a kind of "*white text on white background*" situation. In this medium blog post [*Automatically creating an accessible color palette from any color? Sure!*](https://medium.com/confrere/automatically-creating-an-accessible-color-palette-from-any-color-sure-e735c3f2f45e) a colleague of Dag-Inge explains the process on how they generate colors in an accessible way.
<br>
<br>
<!--The Algorithms of CSS-->
Next talk won the enthusiastic award, Lara Schenck on *The Algorithms of CSS*. The story is simple, first Lara question herself why
CSS it's not considered a programming language, and then she dove into the CSS implementation to find how these more high level CSS mechanisms that designers and front end developers use everyday are under the hood, this gave her a more clear overview on how CSS works in general. It was an interesting perspective that Lara shared with us but **CSS is not a programming language!** CSS is a **DSL** (Domain Specific Language) to describe styles, if you're not familiar with the DSL concept checkout this [short description by Martin Fowler](https://www.martinfowler.com/bliki/DomainSpecificLanguage.html).
<br>
<br>
<!--Container Queries: The Past, Future, and How You Can Actually Even Use Them Today-->
Following with Philip Walton, engineer at Google gives as a look into the future of CSS introducing [container queries](https://wicg.github.io/container-queries/). Hmm... what are container queries? According to the [specification](https://wicg.github.io/container-queries/) container queries could be almost seen as a more granular kind of media queries, because they offer similar functionality but instead of allowing you to control style targeting all the viewport they allow you to control style based on the size of a containing element. If you want to have a close look at container queries I recommend you take a look at this [article](https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/) that Philip himself published on container queries.
<br>
<br>
<!--Design Systems as Facilitators-->
The last talk was about design systems and how they should make the software development process easier by serving
as a mean of communication (yes, a facilitator).  A design system is a collection of components (ideally reusable) that follow the same
standards and that by assembling them you can build applications. In this talk Claudina Sarahe just went around this topic on how
advantageous design systems are but if you really are interested in design systems I really recomment you to take a look at this [invisionapp
blog post instead](https://www.invisionapp.com/blog/guide-to-design-systems/).

## Hot topics

- [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
- [Accessability (Web Content Accessibility Guidelines (WCAG))](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Feature queries (@supports)](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)
- [Container queries](https://wicg.github.io/container-queries/)

<img width="60%" height="20%" style="margin-left: 20%;" src="/img/2018-06-10-about-css-conf-eu-berlin-2018/44.jpeg" alt="so hot right now css custom properties"/>

<br>

## List of talks, speakers and other resources
Here the list of the talks with links to videos (at this point the majority of the talks are not available, so I'll link to other talks of the same speakers on the same topic), author twitter and or github as well if available. Note that I starred the talks that I consider to be a must see, people always ask for that.

- __Trent Willis__ <sub><sup>twitter:[@trentmwillis](https://twitter.com/trentmwillis) github:[trentmwillis](https://github.com/trentmwillis)</sup></sub> - *It's Dangerous To Go Alone! Take This Team*
- __Jackie Balzer__ <sub><sup>twitter:[@jackiebackwards](https://twitter.com/jackiebackwards) github:[jackie](https://github.com/jackie)</sup></sub> - *Preprocessors, Components, and CSS in JS or: How I Learned to Stop Worrying and Love the Website*
- __Chen Hui Jing__ <sub><sup>twitter:[@hj_chen](https://twitter.com/hj_chen) github:[huijing](https://github.com/huijing)</sup></sub> - *The Web Is Not Just Left-to-Right* 🌟 [[slides]](https://www.chenhuijing.com/slides/32-cssconf-2018/#/) [[video]](https://www.youtube.com/watch?v=z28KhfTbY60)
- __Oliver Williams__ <sub><sup>github:[Ollie-w](https://github.com/Ollie-w)</sup></sub> - *Refactoring with CSS Grid*
- __Razvan Caliman__ <sub><sup>twitter:[@razvancaliman](https://twitter.com/razvancaliman) github:[oslego](https://github.com/oslego)</sup></sub> - *We have DevTools. What about DesignTools?* 🌟 [[slides]](http://razvan.is/speaking/cssconfeu-2018/#/)
- __Shwetank Dixit__ <sub><sup>twitter:[@shwetank](https://twitter.com/shwetank) github:[shwetank](https://github.com/shwetank)</sup></sub> - *Augmenting Empathy: Simulating Low-Vision Conditions with CSS, SVG and WebRTC*
- __Mike Riethmuller__ <sub><sup>twitter:[@MikeRiethmuller](https://twitter.com/MikeRiethmuller)</sup></sub> - *Strategy Guide for CSS Custom Properties* 🌟 [[video]](https://www.youtube.com/watch?v=U9UU_fgpmO8) [[article]](https://www.smashingmagazine.com/2018/05/css-custom-properties-strategy-guide/)
- __Dag-Inge Aas__ <sub><sup>twitter:[@daginge](https://twitter.com/daginge) medium:[@daginge](https://medium.com/@daginge)</sup></sub> - *Accessible by Law! Generating Colors with JS and CSS Custom Properties*
- __Lara Schenck__ <sub><sup>twitter:[@laras126](https://twitter.com/laras126) github:[laras126](https://github.com/laras126) [[about]](https://notlaura.com/)</sup></sub> - *The Algorithms of CSS* [[slides]](https://notlaura.com/algorithms-of-css-sources/)
- __Philip Walton__ <sub><sup>twitter:[@philwalton](https://twitter.com/philwalton) github:[philipwalton](https://github.com/philipwalton)</sup></sub> - *Container Queries: The Past, Future, and How You Can Actually Even Use Them Today* [[article]](https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/)
- __Claudina Sarahe__ <sub><sup>twitter:[@itsmisscs](https://twitter.com/itsmisscs)</sup></sub> - *Design Systems as Facilitators.*

## And then...
I will also write a blog post about the JSConf that took place in the next two days where I'll also talk about Berlin and the venue to give you a real insider perspective on the conference so that you can properly decide whether or not you will attend it next year.