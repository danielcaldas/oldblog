---
layout: post
title:  "CSS Conf 2018 ... TODO"
date:   2018-06-10 21:13:42 +0100
categories: jekyll update
---
![css conf eu 2018 berlin logo](/img/2018-06-10-about-css-conf-eu-berlin-2018/1.jpg "CSS Conf.EU 2018 logo")
<br>
<br>
<br>
If you there as I was, you were probably wandering whether you were at the right conference, since I was thinking the same thing myself (IMPROVE THIS).

![john travolta lost gif](/img/2018-06-10-about-css-conf-eu-berlin-2018/2.gif "john travolta lost gif")

But don't give up already! It started poorly on the CSS field, but still it evolved throughout the day with some top notch talks, some of them include [Chen Hui Jing on *The Web Is Not Just Left-to-Right*], [Razvan Caliman on *We have DevTools. What about DesignTools?*]

## The city
[SAME AS JS CONF]

## The venue
[SAME AS JS CONF]

## The talks
As I mentioned earlier the 1st talk wasn't so much into CSS, what Trent gave to us was more of a carrier advice on how we should behave as individuals so that we are seen as part of a team, for Trent going solo in some project should never be even considered, we should always ask for feedback if we want to achieve accurate and quality results. Trent shared some personal techniques that help him grow as a developer in a controlled way avoiding things such as *burnout*. The term *mindfulness* came along somewhere in the talk, Trent uses **APP NAME** so that he keeps a balanced mental health. Next we had Jackie Balzer who told us a bit of the history behind <a title="Behance is a network of sites and services specializing in self-promotion" href="https://www.behance.net/" target="_blank">Behance’s</a> codebase, how major redesigns left *jurassic* footprints in the codebase, some of then in the form of very descriptive "*TODOs*", that today would probably require a herculean effort to remove. At the end Jackie just commend on how she was able to achieve peace with the reality of a fragmented codebase.

The next talk was truly eye-opening. Chen Hui Jing made a very cool historical overview on typography and writing systems, how some asian language (such as chinese, japanese and korean) are written vertically, and how that was transported into the web. Designing various labeled pencils in CSS, Chen explained how we could take advantage of [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) and [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) to manipulate the way we display elements in our web pages. In the end Chen showed some cool examples of how some small tweaks to our webpages could be more interesting displaying some text vertically. Following we had Ollie Williams who shared the experience of using [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) in production. For the first time I had the opportunity to see some real life examples on [graceful degradation](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation) and  [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement), if you're wondering what's the difference between this two terms as I was, think of it the following way, [graceful degradation](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation) it's where you worry about providing the best experience possible, you use the latest bleeding edge web technologies to achieve that, for older browsers you will *degrade* user experience but always assuring some base line level of functionality. On the other hand [progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement) philosophy aims to provide the best possible experience in all browsers keeping the same levels of user experience, one will where possible use newest features to *progressively* improve user experience.

![progressive enhancement vs graceful degradation](/img/2018-06-10-about-css-conf-eu-berlin-2018/3.jpg "visualization of progressive enhancement vs graceful degradation")

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






Shwetank Dixit - Simulating Low-Vision Conditions with CSS, SVG and WebRTC

When we here “Low-vision” what do we think about? Well Shwetank explained that these days low-vision it's just a umbrella term that aggregates a bunch of eyesight conditions that affect people in many different ways. Shwetank made very clear that not conditioned people don't know the real extent of these problems unless we
talk with someone who experienced them. Following, Shwetank just drop this one "What if we could make tools to make people see what people with low-vision actually see?" And that was exactly what he did, with CSS, SVG and WebRTC  he was able to emulate different low-vision conditions that were perceptible trough a camera,
this is a really noble thing to do, it certainly will make non conditional people more aware and comprehensive of this problems, at the same time I guess it makes
conditioned people less frustrated because I imagine it can be pretty hard to explain ones condition to another, so why not showing it instead?

Mike Riethmuller - Strategy Guide for CSS Custom Properties !!!!! Awesome!

Here we will finally look into some CSS!
- Talk description
- Interactive sample (include some codepen iframe or something)
- Can I use this? (meme of internet explorer blocking the way)
looking into the numbers, well yeah, it is supported in the major browsers with exception for IE but well who knows what the well are those people
doing in the internet anyways.

Dag-Inge Aas - Accessible by Law! Generating Colors with JS and CSS Custom Properties

Is you website compliant with the accessability standards? Well you better check that out since for instance in Norway, all websites are required by law to be accessible. Company X did work on this... There are benchmarks for accessibility here... There is an algorithm for this...

Lara Schenck - The Algorithms of CSS (this is just wrong, this speaker mixed CSS usage and purpose with the CSS implementation)

Philip Walton - Container Queries: The Past, Future, and How You Can Actually Even Use Them Today

Claudina Sarahe - Design Systems as Facilitators
In this talk I just remember hearing the term "Facilitator" a lot... Really, a lot! I didn't remember this talk at all (you know how it is, 8 hours straight of hearing talks, you just wanna go and grab that fresh bear)...

## tl;dr
Seems like the new hottest css things are css variables. If you are not used to the accessebility variable whne building websites you should... Norway...
Grid VS Flex VS other alternatives... Progressive enhancement VS Graceful degradation (does your website really needs to work properly (MELHORAR ISTO.. MAS A IDEIA É ESTA) everywhere?)...

## Hot topics
- CSS custom properties (variable)
- Accessability (Web Content Accessibility Guidelines)
- Media queries
- Feature queries (@supports)

## List of talks, speakers and other resources
Here the list of the talks with links to videos, author twitter and or github as well if available. Note that I starred the talks that I consider
to be a must see, people always ask for that.

- __Trent Willis__ <sub><sup>twitter:[@trentmwillis](https://twitter.com/trentmwillis) github:[trentmwillis](https://github.com/trentmwillis)</sup></sub> - *It's Dangerous To Go Alone! Take This Team*
- __Jackie Balzer__ <sub><sup>twitter:[@jackiebackwards](https://twitter.com/jackiebackwards) github:[jackie](https://github.com/jackie)</sup></sub> - *Preprocessors, Components, and CSS in JS or: How I Learned to Stop Worrying and Love the Website*
- __Chen Hui Jing__ <sub><sup>twitter:[@hj_chen](https://twitter.com/hj_chen) github:[huijing](https://github.com/huijing)</sup></sub> - *The Web Is Not Just Left-to-Right* [[slides]](https://www.chenhuijing.com/slides/32-cssconf-2018/#/)
- __Oliver Williams__ <sub><sup>github:[Ollie-w](https://github.com/Ollie-w)</sup></sub> - *Refactoring with CSS Grid*
- __Razvan Caliman__ <sub><sup>twitter:[@razvancaliman](https://twitter.com/razvancaliman) github:[oslego](https://github.com/oslego)</sup></sub> - *We have DevTools. What about DesignTools?* [[slides]](http://razvan.is/speaking/cssconfeu-2018/#/)
- __Shwetank Dixit__ <sub><sup>twitter:[@shwetank](https://twitter.com/shwetank) github:[shwetank](https://github.com/shwetank)</sup></sub> - *Augmenting Empathy: Simulating Low-Vision Conditions with CSS, SVG and WebRTC*
- __Mike Riethmuller__ <sub><sup>twitter:[@MikeRiethmuller](https://twitter.com/MikeRiethmuller)</sup></sub> - *Strategy Guide for CSS Custom Properties*
- __Dag-Inge Aas__ <sub><sup>twitter:[@daginge](https://twitter.com/daginge) medium:[@daginge](https://medium.com/@daginge)</sup></sub> - *Accessible by Law! Generating Colors with JS and CSS Custom Properties*
- __Lara Schenck__ <sub><sup>twitter:[@laras126](https://twitter.com/laras126) github:[laras126](https://github.com/laras126) [[about]](https://notlaura.com/)</sup></sub> - *The Algorithms of CSS*
- __Philip Walton__ <sub><sup>twitter:[@philwalton](https://twitter.com/philwalton) github:[philipwalton](https://github.com/philipwalton)</sup></sub> - *Container Queries: The Past, Future, and How You Can Actually Even Use Them Today*
- __Claudina Sarahe__ <sub><sup>twitter:[@itsmisscs](https://twitter.com/itsmisscs)</sup></sub> - *Design Systems as Facilitators.*

-----------------------------------------------------------------------------------------------------

## TODOs
- Improve SEO, see how to do it in jekyl or something;
- Make all links with <a> anchor and add attribute **title**;
- How to add analytics to the blog
- Grammarlly check;

![so hot right now css custom properties](/img/2018-06-10-about-css-conf-eu-berlin-2018/44.jpeg "css custom properties hot topic")


## JS CONF
There was also a smaller and shy (envergonhada..) CSS conf on the day before, wanna see what went on? Check [this blogpost CSS Conf 2018 Berlin Highlights..](lala)
Was my first time on a JSConf so my expectations were hitting the roof (como dizer a bater no teto???)