---
layout: post
title:  "My 2 cents on (tech) job interviews"
date:   2018-10-28 00:00:00 +0100
categories: jekyll update
---
<script src="{{ base.url | prepend: site.url }}/assets/js/back-to-top.js"></script>

Well... A few months have passed since I published my first blog posts and since then I stacked up quite a few topics that I wanted talk about, and job interviews is on of them. In this post I'll tell what I think it's wrong with the current approach that companies are using to recruit in the software industry, but I'll start to give you some context by telling my first (first worth sharing) personal experience on searching a job as a software engineer, a search that led me to my current job.

![one does not simply](/assets/img/my-2-cents-on-tech-job-interviews/one-does-not-simply.jpg "one does not simply find a job from meme generator")

Roughly 3 months have passed since I left my first job at
<a href="https://blip.pt/jobs/" target="_blank" title="blip find a job">blip</a> to join <a href="https://company.trivago.com/careers/open-positions/" target="_blank" title="trivago opened positions">trivago</a>, but I don't want to talk about my new job here, instead I want to go all the way back to November 2017 and share my experience where I faced several job interviews for different companies (will not share the companies' names for obvious reasons).

For a few years I had this aspiration of living in a different country in order to get to know new cultures, travel and also because I deeply believed (not past tense, I'll still do believe) that it would do great good for my personal and professional development.

I started out really slow throwing around some CVs just to see what would happened.. Well not much happened. You see I was in my first job (roughly 1 year of experience) as software engineer and had just finished my master's and I was already aiming for international jobs at companies such as Google, Facebook and Spotify, of course I did not even get an opportunity to interview at those companies my CV would be filtered out automatically I guess...

![woah easy there cowboy](/assets/img/my-2-cents-on-tech-job-interviews/woah-easy-there-cowboy.jpg "woah easy there cowboy from meme generator")

1. 10 years exp applying for normal position
...
2. ...
3. ...
4. 5 years exp and becomes CTO
5. TRANSCENDENT ME! - 1 year of experience applying to senior -->

Entering 2018 I thought to myself: *"Woah, easy there, let's put both feet on the ground and really aim to more realistic opportunities and not just not apply jobs randomly and expect it to work!"*.
And it was in deed a good decision I started to spend more time on analyzing the companies and the opportunities where I could indeed be a good candidate.
Soon positive emails start to fill in my inbox with requests to schedule interviews for the upcoming weeks/months.

### The pattern

<!-- TODO: remove this ugly image, replace or put nothing. -->

![pattern](/assets/img/my-2-cents-on-tech-job-interviews/pattern.jpg "pattern colorful")

A few interviews passed and it seemed that all companies would fall into this same pattern/journey to hire new personnel:

1. **HR call** just to do some background check, knowing candidate expectations, also a good point to get to know the company before deciding on moving forward, duration ranging from 20 to 40 minutes.
2. **Technical challenge** task more focused on the field where the candidate applies, duration ranging from tasks that can be finished in hours to 1 week (insane right! 1 week!).
3. **Video call interview** with some senior engineer probably someone with a role close to what the candidate applies to. Here normally two things can happen (not mutually exclusive):
  * You will do a **walk through on the technical task of step 2.** and explain you're decisions while answering technical questions that might be or not related with the task at all but it always has the task has the baseline to conduct the interview
  * The task is not mentioned at all which means that it was more of a filter to exclude candidates that do not match the expertise/skill required for the position. Here various things happened to me, since answering **more generic computer science questions** to **discussing the trends on a certain technological field** (in my case Javascript).
4. **Final on sight interview (or another video call)**. Here questions and challenges might not belong only on the technical realm, you will face behavioral questions, process questions, good practices and so on...

### Typical questions

Below a list of the most frequent questions:

#### Introduction/Background check/Soft skills questions
* To start, tell me a little bit about yourself, your experience, your background and current job.
* Why are you applying for this job?
* Describe your previous role.
* Tell me something about your current job that you don't like (and one that you like).
* Tell me about yourself and your career so far.
* Do you have experience with the technologies A or B?
* How does your ideal work environment look like?
* What do you value in you current job that you would also like to have in a some new job?
* What are your salary expectations?
* Is salary your main criteria for the new position you're looking for?
* What are you looking for in your new job?
* Are you currently employed? If yes, what is your notice period?
* What are your plans for the rest of the day?
* Tell about about one project/task where you were involved and that it went wrong. Who fault it
was that it went wrong? <b style="color: red">REPHRASE</b>
* What was the last thing that you red/learned about front end? <small>(in my case front end, but I imagine this could go along with any other expertise as well)</small>
* In this paper there is code from a pull request. Please describe how you would go about
doing the code review. Write comments on the paper but explain yourself along the way.
* There are three boxes, one contains only apples, one  contains only oranges, and one contains both apples and oranges. The boxes have been incorrectly labeled such that no label identifies the actual contents of the box it labels. Opening just one box, and without looking in the box, you take out one piece of fruit. How many pieces of fruit do you need to take from the boxes in order to be able to correctly label the boxes?

<br/>
![job interview meme](/assets/img/my-2-cents-on-tech-job-interviews/tell-me-aboit-yourself-job-interview-meme.jpg "job interview meme")
<br/>
<br/>

#### Technical questions
* What's the difference between an array and a linked list in terms of complexity?
* What's the difference between a set and a hashmap? Can you give concrete examples where you would use
one over the other?
* Write a function that given a string it returns a boolean that indicates whether that string is a <a href="https://en.wikipedia.org/wiki/Palindrome" target="_blank" title="wikipedia palindrome">palindrome</a>.
* You have 1 hour. Pick your framework of choice and let's build a currency exchange calculator in a pair
programming session.
* Have you used async/await? If yes please explain a little how this improve the way we do IO comparing
to an approach using promises.
* Build a function that given a list of elements which can be of any type, returns the sum of the elements in the list that are numbers (please consider that numbers can appear as strings or in the middle of strings as well e.g. "include the number 11 on the count").
* What's the difference between a inner join and a outer join?
* Write the function *atoi* (alpha to integer) (without casting the string to a number).
* Write the function *itoa* (integer to alpha) (without casting the number into a string).
* Write the function reverse that given a string returns the reversed version of it (**important**: you cannot use an auxiliary array to implement the algorithm).
* Implement <a href="https://gist.github.com/jaysonrowe/1592432" target="_blank" title="gist for fizz buzz">fizz buzz</a>.
* What's a balanced tree?
* How could you represent a tree using data structures?
* Implement <a href="https://en.wikipedia.org/wiki/Breadth-first_search" target="_blank" title="wikipedia breadth-first search">Breadth-first search (BFS)</a> algorithm.
* Implement <a href="https://en.wikipedia.org/wiki/Depth-first_search" target="_blank" title="wikipedia Depth-first search">Depth-first search (DFS)</a> algorithm.
* What data structure better suites a autocomplete search field? (<a href="https://en.wikipedia.org/wiki/Trie" target="_blank" title="wikipedia trie">checkout trie</a>)

### That question that I always ask
<center>
<big><i><b>What's the worst part of working at company X?</b></i></big>
</center>
<br/>
Cool thing is, you get to ask question as well! I particularly found ver helpful to ask this question to my
interviewers: *"What's the worst part of working at your company?"*. You can get a few things out of this question.
If they replied right away with something specific enough I can immediately tell the following about the company:
* They have a reasonably good transparency with employees, since main issues can straight away be identified and explained.
* It simply may happen that this bad thing is something that you don't tolerate at all thus it will make you consider moving onto the next interviews.
If during the answer you get the fell that the people interviewing you try to go around the question (which it's not a very smart thing to do let's be honest) maybe you'll get the felling that they are trying to hide something from you and there's a good change that you're feelings are right.

### "Homework" assignments

![butterfly man meme](/assets/img/my-2-cents-on-tech-job-interviews/is-this-weekend.jpg "butterfly man meme is this weekend")

Yes, if you have a full time job what would you expect? Of course you need to give up a few of those lovely weekends, but please just make it worth, even if you're not confident that you're test case will succeed at least try and learn something from it, otherwise it's just a waste of nice weekends (been there, done that).

I've no really solid position on this topic, I agree that companies need somehow to access your skill, but I think this should not be some automated score that excludes you. Test cases should be taken seriously from both sides and they should be an indication that the candidate taking the test has already some real changes to actually get the job.

I'm just impressed how simply people start to accept the fact that you need to work for free during a not that small amount of time to be considered for some job position.

Below are a list of a few assignments that companies request me to do, just so that you have an idea of the kind challenges you could face out there:
* You have two APIs that provide you positions and information of taxi vehicles, please build an app that fetches and displays this information in an uniform and useful way.
* Build an interface that performs currency exchange conversion using some currency conversion rates API (something similar to what you see when you convert currencies on google except for the line chart part)
* Build a shopping cart with a list of items that you can dynamically add/edit/remove from the shopping cart (discounts and that kind of shit an be applied...)
* You have an API that retrieves products from a supermarket, for each product you have the detail, price and image. Use this information to display the information in a convenient way to consult it also needs to be responsive. Special requirement is that on mobile  instead of show the detail of the product you just show the name and when the product is clicked it opens a different page with the product information.
* Build a a number to word list converter as a Node backend and React/Redux fronted. For this challenge the whole commit history can be checked in this public repository <a href="https://github.com/danielcaldas/el-conversor" target="_blank" title="el-conversor github repository">danielcaldas/el-conversor</a> and you can also play around with a live version of the converter in <a href="https://el-conversor.herokuapp.com/" target="_blank" title="el-conversor heroku live version">https://el-conversor.herokuapp.com/</a>.
* Build a classic *todo list* using javascript only. After that try and use a JS framework instead to implement the exact same app, then some smaller and more detailed tasks followed as optional work, stuff like:
  * Try and change the layout of the todo list via a query parameter;
  * Try to improve tolling, add hot reload for css files (using webpack).






### What's wrong with the pattern

talk about whats bad in steps 1 to 4. in previous section...

### Takeaways <small>(a.k.a the things I wish I knew before)</small>

* __Ask questions, the soon the better__ - it's your new job that we are talking about here, just don't hold back any questions that you may have, sometimes the answer to a simple question may reveal something that changes or greatly reinforces your opinion on the company and your will to move forward with the process.
* __"Salary is not relevant" is bullshit__ - at the end everything is about money
* __Be aware of the benefits and counterbalance them with salary__ - quite obvious right...
* __Syao__ - Yes, study your ass off.. drop some links here to algorithms and stuff.. practice, practice, practice
* __Lean about the company (and not only the "culture")__ - learn as much as you can... office location, employess reviews, are people leaving or coming, how is the company performing financially, what technologies do they use, what projects are they working on stuff like that check out glassdoor
* __It's ok to be nervous__
* __Fail__ - *“Don't bury your failures. Let them inspire you.”* - it's not an original quote, but it fits just great here and kind of sums up what I wanted to say.
* __Be honest__ - I remember one of this technical interviews, this guy telling me: *"Ok, now let's do some SQL questions to see how you doing..."*. My first thought was *"That's it, I'm fucked!"*, but then I didn't lose my time or theirs, I was straightforward and told him that I have very limited knowledge of SQL, never done it in a real job only had this university class that gave me some basics on database design and little bit of SQL and that's it, the guy said that it was ok and he appreciated my honesty, still I passed to the next interviews round.
* __Don't ever drop performance on your current job__ - You're still employed? Then make sure that this *parallel life* of yours does not interferes with your current job, they are the ones paying you're salary not the companies you are interviewing.
* __Leaving your current job? Don't forget to keep connections with your old colleagues keeping the doors open__ - specially if you enjoyed your previous company (as I did) make sure...
* __Make sure to not waist to much time on the technical tasks__ - ....
* __Take the technical tasks seriously and face them as an opportunity to lear__ - ...
* __Take notes, learn from your mistakes__ - ...
* __Be patient__ - ...
* __Be persistent__ - ...

### Dear companies and recruiters please do not...

* Please do not approach someone with an offer if the person in question had just started a new job in that same week.
* Please do not let candidates hanging, even if the response not positive please communicate, even if it is an auto generated email saying that the candidate was excluded from the selection process.
* Please do not ask to the candidate if it's possible to deliver a task that supposedly takes 1 week to complete two or three days after you send the task to the candidate? Wait, is the candidate working for your company already?
* Schedule calls and interviews with care, don't forget details such as the fact that the candidate might live in some country with a different timezone.
* Please do not ask candidates to do long homework assignments to exclude them due to something minor like the "style" of the code or too much over engineering (this things can be detected with a 10min coding interview by solving a simple problem that demonstrates how the candidate approaches problems).

* Please do not ...

### Final note

Again this is just my opinion...
I hope you find useful some sections of this post even tough you don't work on the tech industry...