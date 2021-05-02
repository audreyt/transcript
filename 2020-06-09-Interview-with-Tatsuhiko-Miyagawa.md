# 2020-06-09 Interview with Tatsuhiko Miyagawa

### Tatsuhiko Miyagawa:
Today we have a very special guest joining in from Taiwan. She is a Digital Minister of Taiwan and a longtime friend of mine, Audrey Tang. Audrey, welcome to the show.

### Audrey Tang:
Welcome and really nice chatting with you. I think the last time we chatted, you were still working on Docker.

### Tatsuhiko Miyagawa:
\[laughs\] Yes, that’s true. I think I went to Taiwan, Taipei around 2014 and ‘16 was the last time?

### Audrey Tang:
That’s right.

### Tatsuhiko Miyagawa:
I think I met you at the OSDC Conference.

### Audrey Tang:
That’s right.

### Tatsuhiko Miyagawa:
Yeah, but it’s been a while. How are you these days?

### Audrey Tang:
Pretty good.

### Tatsuhiko Miyagawa:
Looks like you are pretty busy.

### Audrey Tang:
Yeah, keeping busy. I have early morning calls with people in the Americas and, of course, Canada and so on. During the day, I talked to the Asian people and during the evening to Europe and Africa. Our average is now seven meetings through video conference per day.

### Tatsuhiko Miyagawa:
So many video meetings every day.

### Audrey Tang:
That’s right. It’s the new normal.

### Tatsuhiko Miyagawa:
That’s true. Honestly, I’ve talked about this pandemic and coronavirus situations a lot in the past episodes of this podcast, for the last few months. There’s not a lot that I want to talk about, but it’s important to talk about it, especially because I think Taiwan has been handling this really well.

### Audrey Tang:
We’re now officially post-pandemic, just for the record. We’re over the pandemic now. It’s been eight weeks with no locally transmitted cases, and we’ve lifted all restrictions on public gatherings.

### Tatsuhiko Miyagawa:
I saw that this morning New Zealand did the same thing. No cases for the past five weeks or something.

### Audrey Tang:
That’s right. Maybe in a couple of months or so, we’ll join in a bubble or something.

### Tatsuhiko Miyagawa:
You’re still closing the border. It’s only accepting the Taiwan nationals coming back.

### Audrey Tang:
Right. Also on case-by-case basis, business visits. That’s what I meant by a bubble. If we’re ready to join the bubble, then people in that bubble could travel safely between different jurisdictions.

### Tatsuhiko Miyagawa:
I see. That’s great to hear. It’s very different in where I live in right now.

### Audrey Tang:
I know.

> (laughter)

### Tatsuhiko Miyagawa:
I’ve been sheltered in place for the past three month. It’s not a hard lockdown. I can get out and walk and go to grocery shopping if I want to.

### Audrey Tang:
You’re still exercising outdoors?

### Tatsuhiko Miyagawa:
Honestly, I don’t.

### Audrey Tang:
\[laughs\] OK.

### Tatsuhiko Miyagawa:
I only exercise sometimes indoors using some videogames. I have a small patio. I can go out there and drink coffee, eat lunches and stuff. Most of the time, if I don’t have to, I don’t go out.

### Audrey Tang:
I just read yesterday on Hacker News this idea that investing in mental health, is very important. I’m glad to hear that you’re at least still making some investments on the mental health part.

### Tatsuhiko Miyagawa:
Let’s talk a little bit about the coronavirus stuff. It’s fascinating, that approach that you took, especially the eMask system. Can you talk a little bit about it?

### Audrey Tang:
Sure. That’s part of our Fast, Fair, and Fun strategy. The fast means that we ramp up the production of our mask from 2 million medical mask a day to 20 million medical mask a day very quickly, over a couple months. Once we produce that many, we want to ensure that everybody have access to those mask.

### Audrey Tang:
In the very beginning, we ask the pharmacies – I think there is 6,000 of them – to help distributing them on a real-name basis, meaning that people who use their national health insurance card, which is a IC card, can go to the pharmacies. Initially, people can get two per week. Quickly, became 3 per week. After a while, become 9 per two weeks, or 10 if you’re a child.

### Audrey Tang:
The trick of the pharmacies distributing mask is that we want to avoid long queues because long queues is, by itself, a transmission vector. The civil society, civic technologies, build a map that visualizes all the real-time stock level. That’s not our idea. It’s just people in the g0v community came up with those ideas.

### Audrey Tang:
Even when we are still not doing the real name rationing, they already built a mask. My contribution is just that when I see the initial prototype getting taken down because the creator, Howard Wu, owed Google because he uses the Places API, which doesn’t allow for caching.

### Tatsuhiko Miyagawa:
\[laughs\]

### Audrey Tang:
Actually, he could cache the Place ID, but he didn’t know that trick. He owed Google 20K US dollars, so he had to take that down.

### Audrey Tang:
I showed his work to our prime minister, to our premier, Su Tseng-Chang. Premier Su said, “Oh, let’s just support the civic technologists.” We nationalized not only the mask production, but also the open data production.

### Audrey Tang:
The stock level of medical mask in pharmacies we publish every 30 seconds, in which case it become open data really, like open API that enabled distributed ledger to be built. We have two mask maps, one chatbot on the very first day of launch. Now, it’s over 140 applications.

### Tatsuhiko Miyagawa:
That’s really cool. Is that particular map better than other implementations? Is that the reason that it was chosen?

### Audrey Tang:
No, it was the only one at the very beginning. Then we made a website. Actually, I personally coded that website called mask.pdis. All this does is that it lists all the available implementations. I just paste it on Discord. You can see that there is a map. There is a table for visually impaired, people with blindness.

### Audrey Tang:
There is also maps that can zoom out and shows various different regions, every supplier and their supply. There’s a heat map, many things like that.

### Tatsuhiko Miyagawa:
There’s a lot of different visualization and presentations.

### Audrey Tang:
There’s also a dashboard, which also, we review it every week to adjust our supply strategy. It not only shows the availability of adult and children mask, there are several tabs that shows the time series of the district distribution, the precinct distribution, township distribution.

### Audrey Tang:
These are all godsend for our decision-making when it comes to evidence-based policymaking. It’s all just implemented by social sector, consultation with pharmacists and so on are all done by civic technologists.

### Tatsuhiko Miyagawa:
Cool. A couple episodes ago in my show, I talked about this technology Google and Apple teamed up together to implement in their operating systems, that’s Exposure Notification API.

### Audrey Tang:
That’s right.

### Tatsuhiko Miyagawa:
Initially, it was named Contact Tracing API, but because of the fear that it might give some confusion about what it is, they renamed it to Exposure Notification API.

### Tatsuhiko Miyagawa:
They take users’ privacy seriously. It doesn’t really transmit any location data, any personal information to the server. It’s only notifying whenever you have a possibility to have a contact with someone who’s diagnosed as positive for COVID-19.

### Audrey Tang:
I’ve read the design spec. I saw the change that they made from their initial design based on their privacy-enhancing technology community’s feedback.

### Tatsuhiko Miyagawa:
What’s your thoughts on that, do you have any plan to consider using that or…?

### Audrey Tang:
We’re now post-pandemic.

### Tatsuhiko Miyagawa:
\[laughs\] Just in case, if you were still not out of the pandemic or if there’s a second wave coming, what’s your thoughts on this?

### Audrey Tang:
Taiwan has always based our strategy on a no-lockdown premise. Just as we fight the infodemic or disinformation crisis with the no-takedown philosophy. No lockdown means that we need to avoid going into community transmission stage and there must be no community spread. Otherwise, we have to do at least a small-scale lockdown.

### Audrey Tang:
We do most of our technological measures at the borders. That is to say at the airports and seaports, of course. We make a very strict quarantining process. You either go to a physical quarantine hotel for 14 days.

### Audrey Tang:
If you live with no people in the vulnerable group, then, of course, you can choose home quarantine, in which case the phone is used to build a digital fence out of the cell tower triangulation data that’s there already collecting anyway.

### Audrey Tang:
If you escape, your phone escape, that 50-meter or so radius, it’s not GPS, so we don’t know which room you’re in, but if you stray too far, then the local household managers and police got a SMS immediately. The same if your phone runs out of the battery, or if you haven’t responded to the chatbot in a while.

### Audrey Tang:
In any case, the point here is that we do the control at the borders, so that people locally do not have to use Bluetooth-level, app-level tracing. There are civic technologies like the AI Labs that have developed, Bluetooth-based technologies similar to the one that Google and Apple is doing. I think they’re working with Teams in UK for that.

### Audrey Tang:
There is a limited experiment in the smaller islands and such, but in Taiwan, we have seen no need nor the social mandate to adopt it.

### Tatsuhiko Miyagawa:
I think they just implemented in the latest version of iOS and Google Play services, and seeing an option of this API in some countries. I think I saw France just implemented the first version of this software, the app that uses the technology, and I haven’t heard about the situation in the US.

### Audrey Tang:
Yeah, but the tech is just one part. Just like mask wearing, you need a majority of people using for it to have any effect. The other part is social interaction design, with the right incentive design. Like in Taiwan, we say you wear a mask to protect yourself from your own hands. \[laughs\] You don’t touch your face, and you’re social signaling that you’re washing your hands properly.

### Audrey Tang:
When built this way a few people in a large crowd can convince other people to wear a mask. It’s harder if you say wearing a mask is a sign of respect. That doesn’t spread as easy, so you need a social incentive design for the Bluetooth-based contact tracing or exposure apps also, in order for it to work.

### Audrey Tang:
Every culture is so different. Every epicenter is so different. I don’t think there’s a universal way to convince people.

### Tatsuhiko Miyagawa:
I think you’re right. One thing I like, one change that I see during this COVID-19 pandemic, at least in the United States, is that everyone is encouraged and supposed to wear a mask when doing essential businesses.

### Tatsuhiko Miyagawa:
Before this, if you wear masks, you’re seen as someone…

### Audrey Tang:
You would be social signaling that you’re sick.

### Tatsuhiko Miyagawa:
Exactly, and people will see you and they will be afraid of getting in closer contact with you. Now, this is becoming a norm and everyone is supposed to wear masks, and if you do not a wear mask, you can’t enter grocery stores anymore. This is becoming normal.

### Tatsuhiko Miyagawa:
Although it looks a little terrifying, I think it’s a good thing. In the coming spring or summer, when I have this hay-fever problem, I have a pollen allergy so I need to wear a mask to avoid sneezing in public. I want to wear masks for that, and I’m sure it’s going to be OK because of this situation.

### Audrey Tang:
I’m also quite delighted to see that, I think three days ago, that World Health Organization is finally on board.

> (laughter)

### Audrey Tang:
They’re finally recommending for the use of masks during the pandemic in the places where virus is spreading.

### Tatsuhiko Miyagawa:
I saw that you had a page ad saying, “WHO can help? Taiwan can help.” \[laughs\]

### Audrey Tang:
Yeah, Taiwan can help convince the WHO that wearing mask actually works.

### Tatsuhiko Miyagawa:
Taiwan is known to be a very hot country. Like Japan in the summer, it’s going to be very hot outside. Are you worried about people wearing masks all day outside, it’s going to be hot, it’s going to be difficult to breathe sometimes?

### Audrey Tang:
The thing with medical mask is that they’re lighter. It’s easier than fabric mask to wear all day. Trust me, I’ve wear both. That’s why we need to ensure that medical mask rationing works.

### Audrey Tang:
In addition to the rationed mask, which you don’t get to pick the color, you can also freely buy a mask on the free market, because we nationalized only part of the production to ensure the rationed supply. The rest of it is free to sell to people.

### Audrey Tang:
Also, we’re exporting the mask-making machinery so that any place with plenty of electricity, and water, and a parcel of land can set up this 24 hours a day, almost entirely automated Taiwan model, a factory that produce two million masks, either medical or N95, your call, per day. That’s one of the main export that we get asked a lot.

### Tatsuhiko Miyagawa:
I think you are officially out of the pandemic, but you still see some difference in how people interact with each other, social distancing, public bars, restaurants. Is there any change in how they operate?

### Audrey Tang:
There’s a lot of social innovations to keep the physical distance or reduce the physical distance while de facto making it hard to transmit, because we’ve never had lockdowns. We never asked the business to accept a kind of penalty for not closing, either, so we roll out physical distancing.

### Audrey Tang:
I think the only business that got affected and closed for a while was intimate bars with escorts to who drink with you. These places, there were no conceivable way for them to do business…

> (laughter)

### Audrey Tang:
…while keeping the social distance, so they did close for a while, but then a social innovation came.

### Audrey Tang:
Now, they’re wearing this cap with plastic shielding in front of people. It’s transparent, so you can still hold hands but not kissing each other. There’s plenty of room underneath that shield, so you can still drink alcoholic drinks, and so now they’re back to open for business.

### Tatsuhiko Miyagawa:
I saw some pictures and movies, I think it’s from Tokyo. They had a drinking party, but everyone is wearing some transparent shield and also masks. They only take off their masks when drinking beer and then use the shielding, but still talk to each other just like they used to. I think it’s kind of odd.

### Tatsuhiko Miyagawa:
If you still want to drink alcohol and then want to talk, I wonder, why can’t they do that online, because you have these technologies that you can use to communicate, like Zoom, and Google Meet, and other stuff.

### Tatsuhiko Miyagawa:
I think it’s still nonetheless interesting to see these kind of “innovations” happen in this space.

### Audrey Tang:
G0v run a couple of hackathons using technologies that enable us to remodel, bringing the digital twin to the Academia Sinica, which is the place that g0v hackathons usually take online, so it comes when they’re around. We order home delivery of the same pizza so that people can, through video conference, still feel like we’re in just a larger table.

### Audrey Tang:
We’re going to run our Presidential Hackathon this way, as well. The president will join us in the Presidential Hackathon workshop. One civil society and one government people from each of the 24 teams will present to the president, while the rest of the team are in different rooms, but they show through a large screen, like a digital avatar.

### Audrey Tang:
There’s a lot of social Innovation that combine the online, offline spaces.

### Tatsuhiko Miyagawa:
When you talk to these representatives from different countries, or inside Taiwan, in different locations, are you just using the remote calls platforms? Do you use avatars? Do you use holograms?

### Audrey Tang:
Yeah. I use, for example, I have a 3D-scanned model of myself, made almost four years ago in High Fidelity, which is an open-source VR platform. I do use it for meeting, but there’s a certain kind of people who see this photo realistic avatar as something that they cannot relate to. There’s, uncanny valley going on.

> (laughter)

### Audrey Tang:
Everybody’s uncanny valley is of different depth. I think it’s pretty good. In any case, there is an animator, actually from Japan but now currently living in Taiwan, and probably not moving back for the next few months, who offered to make a comic version, animation version of that virtual avatar, so I can more easily relate to people who I a lower depth of uncanny valley.

### Tatsuhiko Miyagawa:
\[laughs\] Lower depth of uncanny valley. I can see that at sometimes, when I play some videogames these days, these characters look really close to the actual human beings, and I find it sometimes a little creepy.

### Audrey Tang:
Yeah, so this is going to be my new avatar which is not creepy at all.

> (laughter)

### Tatsuhiko Miyagawa:
You shared a picture with me now. I see it. I will link, put that in my show notes.

### Audrey Tang:
Sure.

### Tatsuhiko Miyagawa:
It still looks a lot like you.

### Audrey Tang:
Of course.

### Tatsuhiko Miyagawa:
Speaking of the civic engineering, I think a lot of listeners heard about this episode of where you made a pull request to the Tokyo Metropolitan Government’s dashboard website.

### Audrey Tang:
Yeah, I asked Hal Seki-san if I can make that pull request, and he says, “Of course, why not?” He Tweeted about it, and then a city council re-tweeted it, and then of course your mayor did.

### Tatsuhiko Miyagawa:
\[laughs\] Right. That was interesting to me for multiple different reasons. One is that it’s cool that you made a pull request. I think a lot of people were surprised to see a pull request coming in outside Japan, and she’s a digital minister of a cabinet from foreign countries making a contribution to an open source repository.

### Tatsuhiko Miyagawa:
To me personally, there is absolutely nothing surprising to hear that Audrey Tang is making a pull request for a GitHub repository.

### Audrey Tang:
I do this all the time. I’m an internationalization and multilingualization expert. \[laughs\]

### Tatsuhiko Miyagawa:
I see sometimes, in my Gmail inbox I have email notifications from GitHub saying that audreyt merged a pull request, or made a comments, created a pull request to one of my repositories. “This happens all the time. What is surprising about it?” That was my first reaction.

### Tatsuhiko Miyagawa:
I think it was nevertheless a symbolic event that had an impact on people’s perception about how you’re still doing a lot of things in the open source community and engineering, while doing your job as a digital minister.

### Audrey Tang:
Yeah, I think this shows that the open source community is not just a bunch of civic technologists. That it really transcends boundaries when it comes to diplomatic norms, when it comes to sector silos in the sense that a pull request breaks all the different silos, not just between, as I said, sectors and jurisdictions, but also between the different levels of the government.

### Tatsuhiko Miyagawa:
I was preparing some notes about this episode, and yesterday I shared this news that, “Hey, Audrey Tang is coming to my show tomorrow,” to a very small number of people, and I asked them to ask questions and suggest the topics we talk about.

### Tatsuhiko Miyagawa:
So far, we had 60 Questions. If we go through all of them and give it a minute, that’s going to be 60 minutes. Instead of doing that, I spent a minute to categorize these questions into multiple buckets, total of five, six of them, so I think we can talk a little bit about each of those categories…

### Audrey Tang:
In bulk.

### Tatsuhiko Miyagawa:
Yeah, in bulk, exactly. Closer to the earlier topics, one of the most questions that I have is this third one, on your career. Let’s dive into it. Question, most Japanese engineers don’t want to be involved in politics. What can software engineers in Japan contribute to make Japanese society better?

### Tatsuhiko Miyagawa:
Second question, what made you choose your career path to become the digital minister in the cabinet, instead of contributing from the outside as a software engineer?

### Audrey Tang:
We do those two?

### Tatsuhiko Miyagawa:
Yeah.

### Audrey Tang:
There’s no instead of, right?

### Tatsuhiko Miyagawa:
Right.

### Audrey Tang:
I’m still contributing as a software engineer. You just cited a recent experience. I don’t think these two are mutually exclusive. I often say that I’m a Lagrange point between the social movements on one side, and the public sector government on the other side.

### Audrey Tang:
Of course, you know that there’s three Lagrange points between the two celestial bodies, and two others behind each celestial body.

### Audrey Tang:
I’m mostly just making sure that each side understand the language of the other side, doing a cultural translation, and also making sure that the social innovation, when they come, when their proposer cannot afford a Google API, we make sure that we absorb the cost in the governments.

### Audrey Tang:
The same applies also to consultations. When we decided for example to open up mountaineering and hiking, instead of the government saying what to do, we just asked all the people who had hiking experience, mountaineering experience, what to do.

### Audrey Tang:
This works both ways. When it comes from the social sector, it’s called social innovation, and when it comes from the government, it’s called open government. In this midpoint, that’s precisely an architect’s work. Both of us have designed communication protocols, either in the IETF, W3C, or other multistakeholder communities.

### Audrey Tang:
We understand that the editor’s role is not to arbitrarily dictate on things. An editor’s role is to make sure that all stakeholders can understand what others stakeholders are saying, and settling on a rough consensus, sometimes by humming.

> (laughter)

### Audrey Tang:
I’m a lower-case minister in that sense, and I see myself more as a moderator or editor when it comes to politics.

### Audrey Tang:
I think many software engineers, especially people who have helped contributing to RFC’s or other living standards, they understand precisely the kind of multistakeholder politics that I’m talking about. You don’t have to go through the representative politics when you can do participatory politics, the kind that I just described.

### Tatsuhiko Miyagawa:
Is that kind of thought a new discovery to you, or did you know that when you got an offer to become a member of the cabinet?

### Audrey Tang:
That’s my working condition. Going into the cabinet, I always say that I’m not working for the government. I’m working with the government. I’m not working for the people, either. I’m working with the people.

### Audrey Tang:
The point of three working condition of radical transparency, that I publish transcript or video of every single meeting that I chair, and also a voluntary association. I don’t give orders nor take orders, and location independence, that whenever and wherever I’m working, I’m working, and wherever you are on Earth, you can work with me.

### Audrey Tang:
These three are the cornerstone of the rough consensus culture of not just the IETF, but pretty much any open community on the Internet. I’m basically projecting my native culture into everyday politics.

### Tatsuhiko Miyagawa:
That’s cool. I saw that initially you were asked to suggest the candidates for the minister.

### Audrey Tang:
Yeah, I interviewed quite a few.

### Tatsuhiko Miyagawa:
In the end, you were offered to become one, rather than suggesting one.

### Audrey Tang:
Yeah, because many people when they still have a career in the economic sector, they would say that the conflict of interest clauses in the public sector would create a problem. Basically, they have to abandon the company they started, and so on.

### Audrey Tang:
At that time, I’m already working on passive income, not really passive, but consultant jobs, independent consultants to multiple companies. It only took me a month to hand off my positions in Apple, and Socialtext, in Oxford University Press, to the team. It’s easier for me to transition because I’m already semiretired anyway.

### Audrey Tang:
For other people who still have an active career, it’s harder.

### Tatsuhiko Miyagawa:
Your position and participation to the g0v community helped shaping this kind of role.

### Audrey Tang:
Yeah, that’s definitely the case, the g0v, which has started in 2012. I wasn’t initially part of the g0v movement. I joined in 2013 when we did a crowdsourced dictionary of multiple languages in Taiwan.

### Audrey Tang:
The main idea of g0v is really simple. For each government services, like join.gov.tw, that you don’t like or you think it could be better, instead of protesting, you just register the same domain but change O to a zero. Go to join.g0v.tw, which looks better, right?

> (laughter)

### Audrey Tang:
The idea is forking the government. I need to pronounce that very precisely, forking the government. Fork the government. \[laughs\]

### Audrey Tang:
Of course nowadays with Git and conflict-free resolution algorithms, you can merge as easy as you can fork. I’m exaggerating. You can merge almost exactly as easy as you can fork.

> (laughter)

### Audrey Tang:
Because of that, there’s also the ethos in g0v that we’re relinquishing all the copyright, mostly under Creative Commons Zero or other Creative Common licenses, and so that when the government think a g0v idea, like the mask map is a good idea, the government can simply just link to it or even change the domain name and just call it a government service.

### Audrey Tang:
That is the way that the civil society work through social innovation to make sure that they have the agenda setting power for especially digital services, but that include all services.

### Tatsuhiko Miyagawa:
That’s neat. I saw the first presentation about g0v in OSDC, and I found it pretty fascinating. I think the conference, OSDC was about software all the time, but there was some tipping point that a lot of the communities overlapped with g0v movement.

### Tatsuhiko Miyagawa:
They stopped doing this open source conference, but instead put a lot of energy and community focus to the g0v, and then you all eventually did a lot more revolutionary things like Sunflower Movement, taking of parliament.

### Audrey Tang:
Yeah, and also it’s not like the open source movement have stopped or something, right?

### Tatsuhiko Miyagawa:
Yeah.

### Audrey Tang:
Microsoft publicly apologized on GitHub, and then bought GitHub.

> (laughter)

### Tatsuhiko Miyagawa:
As a form of apology.

### Audrey Tang:
As a form of apology, “Sorry, sorry I am buying you.” It’s not like the open source movement stopped. I would say that open source movement have already reached its original stated goal, which is proving that crowdsourcing is a better way of software development.

### Audrey Tang:
Now, we’re back to the original free-software movement goals, which is making sure that people can enjoy privacy, liberty, both their negative and positive freedoms without compromising their convenience in their own life.

### Audrey Tang:
That remains a struggle that currently is still being fought over the world, but I think the core fork of open source have now entirely merged back to the free-software movement, of which it originally came from.

### Tatsuhiko Miyagawa:
What’s your go-to license choice….not your, but the government’s?

### Audrey Tang:
Creative Common Zero of course, CC0. That’s written in our copyright law. For things that we must publish as public information, just like the NASA photos, these are in the public domain.

### Audrey Tang:
When things are not quite sure whether it’s public domain or not, like the transcript I’m producing, I put a notice on the very beginning that says, “If you agree to make a transcript with me, thank you for your dedication to the Commons. We’re going to use the CC0 of public domain dedication.”

### Audrey Tang:
For many other ministries, I think most of them still use Creative Commons Attribution, which is still very permissive.

### Tatsuhiko Miyagawa:
Does that apply to the open-source software code as well? Like do you use MIT, GPL?

### Audrey Tang:
Yeah, we usually use the equivalent of Creative Commons Attribution, which would be MIT, which doesn’t stand for Made in Taiwan, by the way.

> (laughter)

### Tatsuhiko Miyagawa:
Made in Taiwan license.

### Audrey Tang:
That’s right.

### Tatsuhiko Miyagawa:
Other questions in that career questions, about your career path after your involvement in this current position, do you have a plan on your career life? Do you want to continue the position in the cabinet, or do you have any idea what you want to accomplish before you quit, or after you quit?

### Audrey Tang:
Yeah. I’m a slashie. I’m a digital minister, that’s true, but I’m also a board member of like three international NGOs as we speak, and so I’m having a lot of part-time jobs.

> (laughter)

### Audrey Tang:
The minister of civil service actually had to do an interpretation for that, so it’s not just me.

### Audrey Tang:
Any public servant in Taiwan, if they satisfy three criteria, first, they have to accept no payment from their slashie position, that their slashie position must be a not-for-profit organization, and also the job that they’re doing must align with the value of the current job they’re doing in public sector, of course as approved by their boss.

### Audrey Tang:
If the three conditions are made, then of course those met conditions, basically it says that is an extension of my public sector work. I’m for example working with Vitalik Buterin, and Glen Weyl under RadicalxChange Foundation. I’m a board member, and introducing new ideas from the Ethereum community, such as quadratic voting and funding into everyday politics.

### Audrey Tang:
Our Presidential Hackathon has been using quadratic voting for two years running now, and Vitalik actually recorded a video to explain to Taiwanese people how to use this new voting method. I’m very active still in the open communities.

### Audrey Tang:
I think being a slashie also offers a cultural translation service to people in the public service, because if they don’t know, for example, what does a homomorphic encryption mean, I can explain in very simple term so that they understand. I’m happy with my current job. I intend to continue doing that for at least a few years.

### Tatsuhiko Miyagawa:
Moving on to the next category, I think it applies to your job, it is a continuation of the career-related questions. About the question, do you see or have you seen any difficulties performing your job as a minister, such as internal politics or difficult to work with bureaucracy? If so, how have you overcome these difficulties?

### Audrey Tang:
I’m happy that the translation use a lower-case minister, because then the answer is very simple. No, there is no any difficulties as a lower-case minister, because that means that I mostly just advocate and preach about an open innovation, and about sustainability, and so on. \[laughs\]

### Audrey Tang:
I’m not seeing myself as a upper-case minister, in which case I’ll have to order people around. As a lower-case minister, there is no difficulties whatsoever.

### Audrey Tang:
Here in the Social Innovation Lab, everybody can see, very transparently. Literally, it’s a park. Everybody can walk in and see my working environment, and even walk in, and every Wednesday to have 40 minutes of my time, chatting to me. Of course it has to be on the record.

### Audrey Tang:
This kind of work makes sure that only the innovative bureaucrat will volunteer to become secondments in my office, and I don’t really get to meet people who have no intrinsic motivation to innovate.

### Audrey Tang:
It continuously surprises me that if I focus only on reducing the risk, reducing the chores, and improving trust between the government and the people, how innovative the career public service are. There’s no difficulty whatsoever, but that is because I don’t boss and order people around.

### Tatsuhiko Miyagawa:
Does your experience as a software engineer affect how you perform your duty? Does your radical transparency policy have anything to do with referential transparency in Haskell? I think the person who asked this question read this Wikipedia article mentioning this radical transparency in policy and wondered if it has anything to do with Haskell.

### Audrey Tang:
I know. Radical transparency means transparency at the root, meaning that transparency is the default.

### Audrey Tang:
To have a meeting with me, you have to take extra action. For example, if you mention an anecdote about your friend and they have not clear it for publication, of course you have ten days where you can go back and anonymize that part, because it’s by law a confidential right to your friend.

### Audrey Tang:
Radical transparency doesn’t mean that I livestream all the meetings. That means it takes extra effort to make it a part of it nontransparent. It’s about flipping the norm, and just as in Haskell. In Haskell, you have unsafePerformIO, you have Debug.Trace, which is like is a refreshing desert of side effects in the oasis of referential transparency.

> (laughter)

### Audrey Tang:
That is the main point. I would say that of course I think still in terms of functional composition. I think in terms of category theory of natural transformations, which is really helpful to find isomorphisms between the various different fields.

### Audrey Tang:
Also, our pandemic resilience with no lockdown is a viable alternative to imperative measures, and we don’t have a state of emergency. We have parallelizable social scripts that reduce our R₀ value that you can apply in any order, and so the side effects on constitutional democracy is minimized… I can go on.

> (laughter)

### Tatsuhiko Miyagawa:
It’s very good. You have all these opportunities to make a good pun or make a parallel analogy to all the programming backgrounds that you have.

### Audrey Tang:
That’s right. That’s my job. I’m really a poetician.

> (laughter)

### Tatsuhiko Miyagawa:
Another question, you describe your job as a linker or a pipe between multiple organizations. What do you think is the most important or essential, when to act as such a pipe or linker?

### Audrey Tang:
You need to take all the sides, and that’s it. When there’s controversy or when there’s tension between different multistakeholders, you have to have the capacity of arguing from the viewpoint of each and every side.

### Audrey Tang:
If you don’t, then maybe you can do a ethnographic hanging out with these people until that you can argue from their point of view. That’s it.

### Tatsuhiko Miyagawa:
I think it’s related to the next question. Some people think that domain knowledge is not necessarily required to be a minister. What do you think about it? I think the person asks question wants to know, when you want to be a pipe or linker between these organization, it’s implied that the fact that you have this domain knowledge and expert, professional experience in these IT fields are playing a huge role. Is that true?

### Audrey Tang:
I know something about domains…

### Tatsuhiko Miyagawa:
\[laughs\]

### Audrey Tang:
…whether they’re DNS or Ethereum Domains. I just set up for audreyt.org a DKIM yesterday. In any case, I know something about domains, and I think that helps.

> (laughter)

### Audrey Tang:
Yes, and I know how DNS is structured. \[laughs\] It’s not necessary to be a cabinet minister. You don’t have to be able to set up your own DNS server.

> (laughter)

### Audrey Tang:
When your DNS server go down, you need to at least have a cursory generalist knowledge of what the domain name service actually provide. What service does DNS provide? You have to, at least say, “Oh, this turns emojis into weird ASCII characters and turns that into IP numbers. Sometimes, version four. Sometimes, version six.” you have to have at least this level of generalist knowledge.

### Tatsuhiko Miyagawa:
Your domain knowledge \[laughs\] doesn’t have to be Internet domains, but specialized knowledge…It’s not necessary, but it’s helpful?

### Audrey Tang:
Yeah, right. You don’t need to have a hands-on setting up your own BIND server or Postfix.

### Tatsuhiko Miyagawa:
\[laughs\]

### Audrey Tang:
That level of knowledge. You don’t have to be a hands-on operator, but you do have to take architects for you and have a generalist knowledge when it comes to the properties, the important properties of various domains that you’re working with, without which is impossible to be a cabinet minister.

### Tatsuhiko Miyagawa:
Yeah, and if you don’t have this knowledge, you have to know who to delegate that decision to or know someone to talk about.

### Audrey Tang:
No, I think you have to learn. It’s not hard to learn. Nowadays, even with the most obscure topics, there’s sufficient tutorials and videos online that you just take a few hours, maybe three or four hours, and you have a generalist overview on the knowledge.

### Audrey Tang:
There’s a lot of…like Explain Like I’m Five resources online. There’s even a lot of interaction games, like from Nicky Case where you can play to learn about COVID-19. I don’t know whether you’ve introduced that to the podcast, but it’s a great resource if you want to learn about epidemiology.

### Audrey Tang:
Of course, even our previous vice president who authors the epidemiology textbook recorded a MOOC, so that people can learn it in a matter of hour or so. What I’m trying to say is that there is no excuse for not learning the interaction of…to the Internet resources, to learn the generalist knowledge when it comes about novel techniques or novel technologies.

### Audrey Tang:
Of course, there are something that are by nature very difficult to explain within an hour, such as monads.

### Tatsuhiko Miyagawa:
\[laughs\]

### Audrey Tang:
I don’t think monads \[laughs\] are required for most of the public sector work. \[laughs\]

### Tatsuhiko Miyagawa:
It’s fascinating that the previous vice president wrote a book about epidemiology. It says something about – I don’t know – a Taiwanese practical approach.

### Audrey Tang:
Yeah, so that our top epidemiologist doesn’t have to convince our top official…

### Tatsuhiko Miyagawa:
\[laughs\]

### Audrey Tang:
…because he would be just facing a mirror and talking to himself, and he finished the convincing.

### Tatsuhiko Miyagawa:
That’s very convenient. There’s similar questions in this next section, I will jump to that. Question, I read that you told yourself to write a Perl 6 compiler in Haskell when you were 18 years old, which I don’t think you were 18 years old when you did that.

### Audrey Tang:
Yeah, I was 24.

### Tatsuhiko Miyagawa:
What approach did you take to educate yourself? Is it possible to fully understand the technical knowledge from the books and searches online? Do you sometimes need to discuss it with others? That was the question.

### Audrey Tang:
Of course, I need to discuss with others. I think back when we did Pugs, we just occupied the #haskell channel on freenode for three weeks, so that the all the discussion about Haskell is being hijacked to talk about…

### Tatsuhiko Miyagawa:
\[laughs\]

### Audrey Tang:
…Perl instead until they get fed up with it, until we have to find our own channel.

> (laughter)

### Audrey Tang:
Back in the day that the IRC communities are relied a lot on this social customs of people just storming into the channel, talking about random things, and then there’s I think even a Perl 6 bot that hug the people who look like trolls afterwards. It’s the hug bot.

> (laughter)

### Audrey Tang:
Of course, we need a community, and a community is not just human beings, but also bots. I think both machine learning and human learning are all very useful.

### Audrey Tang:
We are just stumbling in a new field and just trying to find your way, because then you get to focus on the issues that people think are most pertinent at a day instead of things that you read from the outdated textbooks, so just learn from the state of the art. If you cannot comprehend the state of the art, there’s always a lot of articles, blog posts, and things like that that you can chase.

### Audrey Tang:
As long as you maintain an open mind and not too proud to be corrected all the time – like I did when I was at the Haskell channel during Perl 6 – then you it’ll be fine. It just took me, I think, a month or so to learn sufficient category theory so that I can implement Perl 6 in Haskell.

### Tatsuhiko Miyagawa:
\[laughs\] Do you usually take that approach when you learn new things? I think writing a Perl 6 compiler was a very interesting approach to learn Haskell. When you learn some new language, do you read books first, or do you start writing the code and try to understand the language?

### Audrey Tang:
I always try to find it interesting problems to solve. It may just be interesting to me, but the fact is that even if just interesting to 1 in 10,000 people. In Taiwan, that’s 2,000 people. It means that even though that your interest may be very niche in your community, if you can find the right hashtag or the IRC channel, which use the same symbol.

### Audrey Tang:
If you can find the right pound sign, then you will find the people who are as niche as you are, and then you will feel normal. Once you feel normal, then you can tackle the common problems together, and so that’s always my go-to way of learning things.

### Audrey Tang:
I was since dropping out of junior high school when I was 14 years old, it was the full blessing from all my teachers. I was just reading from archive arXiv, which is the preprint server. I think it proliferated, there’s many archives arXiv variants in pretty much all the places, there was only one archive from Cornell University \[laughs\] in the open-access community.

### Audrey Tang:
At that time, the Wide Web was very new, so people were surprised and happy when the random person just email me something about your research. They’re all very friendly, and we very quickly started doing work together. That was 1995. If I can do that in ‘95, certainly you can do it in 2020.

### Tatsuhiko Miyagawa:
Next question. I think it’s about teaching in education. Question, what do you think is the best way to get kids involved in programming?

### Audrey Tang:
I think that the most powerful way of getting people to be involved in programming is just to play videogames in the Scratch community. That’s the norm. You play a videogame made by your fellow Scratch maker, and you click view source, and then you start editing. Maybe, you’re changing the character to your favorite character. Maybe, you change your background color a little bit.

### Audrey Tang:
It’s just like stacking the Legos. You can very easily stack one more Lego to make it more beautiful. As I understand, Scratch is being sponsored by Lego, maybe there’s some similarity.

> (laughter)

### Audrey Tang:
In any case, the idea is that you don’t start with something like a blank canvas. When we’re professional programmers, we don’t do from canvas programming either. We just take whatever thing from GitHub, Gitlab, or whatever. That solves 80 percent of the problem, and we just add a few Lego blocks in.

### Audrey Tang:
That’s how professional programmers do their work nowadays. It makes sense for children to learn that as a norm when they’re first just playing some fun videogame and do a little bit of tweaking.

### Tatsuhiko Miyagawa:
Yeah, I see that. In Japan, programming is becoming required in elementary schools. There’s a lot of classes and workshops that teach kids programming. They use all sorts of materials, but one of them is like writing Minecraft mod using Java.

### Tatsuhiko Miyagawa:
I don’t know if that’s a good material, but that’s absolutely something that kids are interested in. I think there’s a way to make a mod. You don’t need to write everything from scratch.

### Audrey Tang:
Yes, I heard that question. I think it’s not about IT. I keep stressing, especially to Japanese people that I’m not the IT minister, that the IT which is part of technology, we have a minister for science and technology.

### Audrey Tang:
I’m the digital minster, and the digital is the new space made possible for human habitation, made possible by ICT, but it’s not by itself ICT. It is a culture, the plurality. Instead of teaching IT to young people, it’s easier if you teach instead digital competence. That’s not media literacy, which is about consuming media.

### Audrey Tang:
This is more media competence, which is about producing media, like how to make a podcast. That means that everybody participates in contributing to the plurality of the digital culture, rather than some people produce and a lot of people just view.

### Audrey Tang:
If people learn that there’s a view source in pretty much anything that’s software-defined nowadays, which is pretty much everything, and then they can think about computational thinking, which is about issues that you can think in a way that’s effective to compute.

### Audrey Tang:
Effective doesn’t remain linear, Turing machine, compatible, Von Neumann, imperative programming. It also could mean functional. It could also mean quantum, it could mean biological like crowdsourcing. I had a talk, I think, a couple of years ago with Jeanette Wing, the inventor of the term computational thinking.

### Audrey Tang:
She agrees on that. Computers today, according to Professor Wing, are combinations of the society humans and machines. We’re all cyborgs in a sense. We make sure that we think about how we collaborate between humans and machines, between human and human, and machine and machine in various different ways.

### Audrey Tang:
We actually do not know the extent of computation of capability of humans. That’s an active area of research, the science of the mind. Because of that, I think it’s easier if you think of it as a design of cyber-social systems.

### Audrey Tang:
It’s fortunate that in Taiwan, we translated the word programmer as \[Mandarin\] , literally the designers of programs instead of engineers of software. I think it gives a very different view.

### Tatsuhiko Miyagawa:
That’s interesting. Is programming taught in Taiwanese schools?

### Audrey Tang:
Of course. As I said, it’s not taught as a foreign language in primary school level. It’s rather as part of the media and digital competence, and that’s across all the different classes. If you’re learning math, if you’re learning the nature of sciences and so on, you learn to produce digital media and communicate with international digital open communities as part of your ordinary class.

### Audrey Tang:
If you can write some programs to help, for example, measuring your air quality in your school, then you go and get a AirBox, which runs Raspberry Pi or Arduino or both. Then you learn a little bit of programming. That’s part of your nature science class though. It’s not a programming class. The programming class would start in junior high.

### Tatsuhiko Miyagawa:
There’s a lot of questions about – it leads to what you just said – technology and society, stuff like that. There’s a lot of deep questions in this section. \[laughs\] I don’t know how far we can get. Does IT bring happiness to humanity? This is a really \[laughs\] deep question.

### Audrey Tang:
No. It’s not like that. Happiness brings IT to humanity. It’s called optimized for fun. I wrote extensively on that.

### Tatsuhiko Miyagawa:
Can you elaborate on that?

### Audrey Tang:
Yeah. I have this meme called -Ofun…

### Tatsuhiko Miyagawa:
Optimized for fun.

### Audrey Tang:
…that says people make information and communication technology because they enjoy knowing more and also communicating more to other people.

### Audrey Tang:
If you build your community so that these inherent social needs are fulfilled, then you get better IT technology for free. \[laughs\] because people just want better ways to connect to each other. By now, both of us really want to contribute to this course…

> (laughter)

### Audrey Tang:
That’s the pursuit of happiness that brings IT to humanity, not the other way around.

### Tatsuhiko Miyagawa:
I saw some interviews on BBC and stuff. You keep iterating that IT technology is a tool. Like coronavirus app doesn’t solve the virus. Soap will. \[laughs\] That’s your consistent stance on these kind of questions?

### Audrey Tang:
Yeah, also on AI, which I keep referring to as assistive intelligence because it’s really a philosophical thing. If you believe technology can bring happiness, that is actually fleeting. It’s not eudaimonia. It would be hedonism. That’s a very different path. It may lead to a lot of dopamine triggers, but at the end of it, the life is not more fulfilled.

### Audrey Tang:
We’re not creating a more social value to other people, and so that the fun decreases over time. The marginal return decreases because you get disincentivized to the dopamine cycles, but if you optimize for the fun in the community, then of course, that becomes joy and you build good eudaimonia, which is to bring even more joy to people who come after you.

### Tatsuhiko Miyagawa:
Speaking of AI, there’s a question. Do you think singularity is possible? Do you think we need any regulations to prevent AI and machine learnings from making damages to humanity?

### Audrey Tang:
Yeah. “Whenever we hear ‘Singularity is Near,’ we need to remember the plurality is here.”

> (laughter)

### Audrey Tang:
That’s a Larry Wall quote.

> (laughter)

### Audrey Tang:
I just popularized the Larry Wall quote.

> (laughter)

### Audrey Tang:
Larry being a linguist, of course, singular means linguistic singularity to him.

> (laughter)

### Audrey Tang:
I think singularity is possible, but it’s more fun when it’s plural.

### Tatsuhiko Miyagawa:
\[laughs\]

### Audrey Tang:
Singularities is also possible, \[laughs\] and also much more to be desired, because we’re talking about singularity in the singular form, then you basically exclude other possibilities of transhumanism, right?

### Audrey Tang:
If you build transhumanism as something that excludes other people, then you’re essentially demoting other people into a kind of numb people.

### Audrey Tang:
If you are building a towards the sense where people democratizes the technology that’s needed for making us more aware of the collective will of the people, either through a coherent blended volition, which is a thing in the transhumanist circles, or through some other ways, then you make sure that the decision-making remains open to in each and every individual in the society.

### Audrey Tang:
Any singularity forecloses, possible alternate futures is bad, because it’s not just singularity. It’s essentially just cutting off possibilities, but if you talk about singularities in a sense of that is sustainable, it’s open for more variations, then you might as well just talk about the plurality.

### Tatsuhiko Miyagawa:
Speaking of the technology, science fiction, and other stuff, there’s a question. Do you like science fiction? There’s a lot of good science fiction these days coming from Chinese writers. Do you have any idea why that is? Do you have favorite sci-fi authors?

### Audrey Tang:
Yeah, so I think the great thing about sci-fi is that it doesn’t need a regulation for the humanity to be resilient. A good sci-fi builds a norm so that people become aware of possible dangers, and then they can settle on the norms. They use the technology responsibly.

### Audrey Tang:
That’s like the invention of fire. Instead of teaching your children to stay away from fire because it can burn down the cities – it did burn down cities – you teach them to use fire at a very young age responsibly. That’s called cooking, by the way. I think sci-fi is like the cooking recipes in a sense…

### Tatsuhiko Miyagawa:
\[laughs\]

### Audrey Tang:
…that you can misuse fire in various different ways, but there’s also places where fire is used responsibly, and there’s a recipe for that. For example, the “Culture” series from Iain Banks – I always forget whether it’s with N or without N – for science fiction. In any case, that shows a plural of Culture, literally with uppercase in the future.

### Audrey Tang:
That’s the collaborative intelligence works quite well. I like “The Three-Body Problem.” It’s really nice, very well-written. I read both Mandarin version, and also the English translation comes after that. The English translation is monumental. I wouldn’t imagine myself into the translator’s role, but the translator did a pretty good job \[laughs\] on translating it.

### Audrey Tang:
I think that’s because there’s various different angles, perspectives such as “The Dark Forest” which directly came from the cultural revolution where people simply cannot trust even their own families and in other places with no such memory. It’s impossible to provide that angle.

### Tatsuhiko Miyagawa:
I read the three-body problem last year in Japanese translation. The Japanese translation of the Deep Forest will be out next week. I’m really looking forward to reading it. I haven’t read it in English or Mandarin, \[laughs\] so I’m really looking forward to it.

### Tatsuhiko Miyagawa:
Also, the three-body problem, there’s another one that I saw in an early interview that “Stories of Your Life.” That’s a collection from Ted Chiang.

### Audrey Tang:
That’s right.

### Tatsuhiko Miyagawa:
That’s your favorite movie, but it’s also based on the sci-fi from Ted Chiang. I don’t know. I think this sci-fi gives me a new kind of perspective into science fiction. It’s based on the modern science. It’s math, machine-learning, and AI. All these things take it into consideration and explore some interesting thoughts with it.

### Tatsuhiko Miyagawa:
As you said, it works like a recipe and foresee what’s going to happen if you misuse it or things like that.

### Audrey Tang:
What to do and what not to do.

### Tatsuhiko Miyagawa:
Did you read the new Ted Chiang’s collection, “Exhalation”?

### Audrey Tang:
I read a part of it actually already online. “The Merchant and the Alchemist’s Gate.” I read “The Lifecycle of Software Objects.” I said “projects” because I do software projects all the time.

> (laughter)

### Audrey Tang:
The Lifecycle of Software Objects, but I have not read the other part of it, Exhalation, the “Omphalos”, “Anxiety Is the Dizziness of Freedom”. I’ve not get around to read it, but I have a vacation coming up. I’ll probably finish reading those during the vacation a couple weeks from now.

### Tatsuhiko Miyagawa:
That’s cool. I just got this book last week. I read Exhalation. That’s a very short one. I haven’t started the Lifecycle of Software Objects. I think that’s very long for him.

### Audrey Tang:
Basically, it’s really well-managed. It’s Tamagotchi writ large. I think you’ll like it.

### Tatsuhiko Miyagawa:
\[laughs\] Also, what about the Stories of Your Life? That theatrical movie version has very different names, depending on where you see it. It’s “Arrival” in…

### Audrey Tang:
It’s Survival here.

### Tatsuhiko Miyagawa:
…the US. OK, it’s Arrival in Taiwan as well. I think in Japan it’s “Message”. It’s a real weird translation anyway.

### Audrey Tang:
At least it didn’t translate as “Weapon”. \[laughs\]

### Tatsuhiko Miyagawa:
Right. It’s a message, not a weapon.

> (laughter)

### Tatsuhiko Miyagawa:
I read this one of the short story from Ted Chiang’s new one. It’s very similar to Story of Your Life, actually. He is writing a lot of stories about whether human’s behaviors and action are based on free will or not. That’s just one of those as well.

### Audrey Tang:
That’s awesome. I like the story that the folks who did the drawing of the emojis in the Arrival movie. That’s just absolutely brilliant. I think it’s the son of Stephen Wolfram who wrote the mathematical code that made those circular emojis. The code is even on GitHub. That’s a really nice Easter egg with his other story as well.

### Tatsuhiko Miyagawa:
It’s neat. Moving onto, a little easier question. \[laughs\] I’m not sure it’ll be easy. I love Taiwanese food. What is your favorite food in Taiwan?

### Audrey Tang:
My favorite food, as I share in the “Elle” interview are three, carbohydrates, protein, and also fat.

### Tatsuhiko Miyagawa:
\[laughs\] OK.

### Audrey Tang:
Taiwan has plenty of these.

### Tatsuhiko Miyagawa:
That’s a good answer. That’s very abstract though. \[laughs\]

### Audrey Tang:
It’s very universal, also. I think it’s your favorite food as well, unless you really like sugar.

> (laughter)

### Tatsuhiko Miyagawa:
Absolutely. In previous podcasts we talked and joked about a few things and Taiwanese food. I loved everything about Taiwan except the smell of stinky tofu, and…

### Audrey Tang:
I know. It’s an acquired taste.

### Tatsuhiko Miyagawa:
\[laughs\] It is. Do you eat it?

### Audrey Tang:
I enjoy that, yes.

### Tatsuhiko Miyagawa:
I actually ate them a couple times. It tasted actually pretty well.

### Audrey Tang:
The trick is that you have to perform exhalation.

### Tatsuhiko Miyagawa:
\[laughs\] You don’t smell it.

> (laughter)

### Audrey Tang:
You can say, “I ate a stinky tofu, and I didn’t inhale.”

> (laughter)

### Tatsuhiko Miyagawa:
Right. Eat it but not inhale. \[laughs\] Do you have any suggestions for places to visit in Taiwan?

### Audrey Tang:
Definitely you have the Social Innovation Lab. It’s where I am in right now. \[laughs\] It’s very new. I mean we just tore down the walls last month. It’s now becoming such a happening place, so come visit me here.

### Tatsuhiko Miyagawa:
Do you have any visitor policy for this?

### Audrey Tang:
No, not at all. I mean we don’t have the walls. Even if we had a policy, it wouldn’t work.

> (laughter)

### Tatsuhiko Miyagawa:
Is that near Taipei Main Station?

### Audrey Tang:
Yeah. It’s just next to the Daan Central Park near the Jian Guo Flower Market. By car from the Taipei Main Station, it’s maybe 10 minutes.

### Tatsuhiko Miyagawa:
That’s cool.

### Audrey Tang:
15.

### Tatsuhiko Miyagawa:
I will definitely visit when I get to you next time. I don’t know where I can do that because of the situation. I really hope I can do \[laughs\] that very soon. Question about your day-to-day stuff, how long do you sleep every day?

### Audrey Tang:
Seven and a half. If I have to think through some difficult multistakeholder situation, I sleep overtime. I would then sleep for 8-and-a-half hour or up to nine hours.

### Tatsuhiko Miyagawa:
That’s a very healthy amount of sleep that you get. What is your daily routine? What do you do first thing in the morning?

### Audrey Tang:
I walk for 15 minutes from where I live to the Social Innovation Lab because I keep all my devices here.

### Tatsuhiko Miyagawa:
\[laughs\]

### Audrey Tang:
At home I only have a Nokia 8110. Yes, that one from Matrix.

> (laughter)

### Audrey Tang:
You can still play Snakes on it, but there’s no touch screen. I can’t type really quickly on it. In order to use a smartphone, I really have to walk to my office. That’s how I get my exercise.

### Tatsuhiko Miyagawa:
I see that you didn’t do any lockdown. Was there any time that you needed to work from home during this pandemic?

### Audrey Tang:
Not at all. The Social Innovation Lab is unique because there’s a lot of seats. I’m just looking at those seats in those open spaces. Because there’s open space, the social distance is just one meter, not one and a half meter.

### Audrey Tang:
People can still gather very easily, even without wearing a mask, even during the more strict physical distancing days, and so it’s a very happening place.

### Tatsuhiko Miyagawa:
A related question, what are some of the things you do to take care of your health? Exercise? Do you use any kind of ergonomic desk, chair, keyboard, mouse, etc.?

### Audrey Tang:
Yeah. Did you see the clkao’s photo, where he was lying on bed and typing to a keyboard that’s fixated on top of him? It is a favorite photo of him.

> (laughter)

### Tatsuhiko Miyagawa:
He got injured in some sort of accident, right?

### Audrey Tang:
Yeah, that was paragliding. I think he has recovered mostly now, but I got really inspired by that, and I do that all the time now. I am not suffering from a spinal injury.

> (laughter)

### Audrey Tang:
It’s just when I’m lying down on bed and just balancing the MacBook in my chest, then I can still type and do everything, but the muscle is very relaxed. There’s no stress whatsoever. I took inspiration from his, I’m sure, medical innovation, and just turned it into my daily habit.

### Audrey Tang:
I don’t absorb any stress or tension on my shoulders or anything when I type like that.

### Tatsuhiko Miyagawa:
That’s cool, but I don’t know if lying in flat and then placing a laptop computer on your chest, is that actually relaxing?

### Audrey Tang:
Yeah, it’s very relaxing because there’s no need to keep any of your muscles strained in that particular position, and I can type for hours in that position.

### Tatsuhiko Miyagawa:
What about your neck, though?

### Audrey Tang:
No, the neck, of course I use pillows.

### Tatsuhiko Miyagawa:
If you place your pillow on the right angle.

### Audrey Tang:
Yeah. Basically, you just sleep, and then you put your MacBook in a way that is orthogonal to your body, and so that the screen being also orthogonal is now parallel to your eyes, keeping a safe distance from your eyes, and then you can work very easily without any fatigue.

### Tatsuhiko Miyagawa:
What’s your editor, in terms of software?

### Audrey Tang:
I was about to say it’s our press speaker, our spokesperson, Evian Ting.

### Tatsuhiko Miyagawa:
The person is editor of your speech and stuff.

> (laughter)

### Audrey Tang:
I know. We’re talking about integrated development editors. My IDE is still Vim. I’m still using Vim for most of the things, and that’s because I really don’t need a lot of personal writing coding nowadays, so there’s less requirement for me to absorb large amount of libraries.

### Audrey Tang:
If I cannot fix something in Vim, I usually just go to email, and that’s my other IDE where I just email other people to, “Look at this.”

> (laughter)

### Tatsuhiko Miyagawa:
Do you write text in Vim as well?

### Audrey Tang:
A little bit, but actually I use iA Writer for a markdown editing, and mostly because I think iA Writer allows me to focus more. It’s not easy to customize, but iA Writer I think have a lot of mobile…I do most of my writing on iPad so, iA Writer is easier on iPad compared to Vim, which also runs on iPad, I must say, but it’s less convenient.

### Tatsuhiko Miyagawa:
I don’t use IA Writer but I use some other markdown specific editor on macOS and iOS. I think these tools are more sophisticated and let me focus a little bit as compared to my editor, which is Emacs and not Vim.

### Audrey Tang:
Of course.

### Tatsuhiko Miyagawa:
I think you already answered this question. What smartphones and computers do you use?

### Audrey Tang:
At home, Nokia 8110. When working, I’m using mostly now a Samsung Note, because I’m addicted to stylus, and iPad Pro, with the second-generation of the Apple Pencil because I’m addicted to stylus, I say that.

> (laughter)

### Audrey Tang:
That’s it.

### Tatsuhiko Miyagawa:
Do you use pencil to write in Mandarin Chinese, or is it English?

### Audrey Tang:
Yeah, actually the handwriting recognition is pretty good now. It can do vectorization. It can do OCR.

### Tatsuhiko Miyagawa:
That’s cool.

### Audrey Tang:
I use GoodNotes for that.

### Tatsuhiko Miyagawa:
Similar to the other subculture kind of question, do you watch movies? Is there any movie you watched recently that you find interesting? How about Netflix shows?

### Audrey Tang:
To be honest, I don’t have much time for movies. I write movie reviews and book reviews without finishing reading a movie or the book.

> (laughter)

### Audrey Tang:
I read the transcript of the movie maybe, and I just skim through the book. I focus on the part I want to discuss, and I just explore on those parts instead of on the whole movie.

### Audrey Tang:
I think the last movie that watched in full was “Moana”, Moana the Disney movie, not because it’s particularly enlightening or something.

### Audrey Tang:
I was trying to build a new kind of transcultural identity of the republic of citizens, which is my translation of the name of the country here, transcultural republic of citizens, which would include the Austronesian roots, the swirling ocean, and so on.

### Audrey Tang:
I found that Moana touches upon some part of that, so I just watch it for the Austronesian symbolisms and the myth that they included, which as I understand, of course is a radically simplified and sometimes not entirely anthropologically correct version of that.

### Audrey Tang:
I think it’s job. It’s not relaxing.

> (laughter)

### Audrey Tang:
It’s now more like a study in anthropology.

### Tatsuhiko Miyagawa:
Research.

### Audrey Tang:
Yeah, it’s research.

### Tatsuhiko Miyagawa:
Your spare time, if you have, you do not spend time watching movies. Is that your answer?

### Audrey Tang:
I listen to music a lot, and that’s transcultural republic of the citizens. I said that words in an interview, and there’s a band called Dos Monos, from Japan, they just reused that samples in their hip hop, and that’s really experimental.

### Audrey Tang:
I rather like the music, and because of creative commons, I can’t really stop them from using it, but they were kind enough to notify me. In any case, I did listen to some Dos Monos music afterwards.

### Tatsuhiko Miyagawa:
I did a search on your name on Twitter, just in case anyone is talking about interesting things about you, and I found this article about this Japanese hip hop group, Dos Monos, using your talk, sampled it to create a song called “Civil Rap Song”. It was interesting. It was really cool.

### Audrey Tang:
It’s really cool, and when I did contribute to Creative Commons, it never occurred to me that it could be made into a hip-hop song.

> (laughter)

### Audrey Tang:
I learn also something from the creativity from the various disciplines, different fields.

### Tatsuhiko Miyagawa:
Like you said, I think the core of, the point of Creative Commons is to allow something like this without even an explicit permission from you.

### Audrey Tang:
Exactly.

### Tatsuhiko Miyagawa:
They did that just in case, to make sure it’s OK.

### Audrey Tang:
Sure.

### Tatsuhiko Miyagawa:
Some people had wondered about your name, Audrey Tang. Was it a word play, because of the character, the phoenix (é³³) is pronounced as ããã¨ã in Japanese…

### Audrey Tang:
ããã¨ã, yeah.

### Tatsuhiko Miyagawa:
Tan is a postfix for some person.

### Audrey Tang:
Yeah, a cute person.

### Tatsuhiko Miyagawa:
Is that true?

### Audrey Tang:
That’s true, but it’s entirely because certain Japanese friends, including…

> (laughter)

### Tatsuhiko Miyagawa:
Including myself, actually.

### Audrey Tang:
…including you, including my truly, that informed me of that. I think it all happened on the same day, and so I’m like, “Yeah, it’s a really good interpretation. Let’s just keep this interpretation.”

> (laughter)

### Tatsuhiko Miyagawa:
It’s coincidental, but it all happened at the same time, so let’s play with it.

### Audrey Tang:
Yeah, I think we were visiting Dan Kogai’s place, the place that’s also featured in the movie, although it’s not Arrival. It’s “Lost in Translation”.

> (laughter)

### Tatsuhiko Miyagawa:
No, I think it’s “Babel”.

### Audrey Tang:
It’s Babel?

### Tatsuhiko Miyagawa:
Yeah.

### Audrey Tang:
I think it’s also Lost in Translation, but in any case, yeah.

### Tatsuhiko Miyagawa:
You picked the phoenix character for different reasons, though.

### Audrey Tang:
Yeah, because that is a gender-bending word. It’s a non-binary word. It used to mean male phoenix, but phoenix next to a dragon also means femininity, so it’s a non-binary word by itself.

### Tatsuhiko Miyagawa:
That’s very interesting.

### Tatsuhiko Miyagawa:
It’s one of the last questions, I think. What would you like to do if you teamed up with Miyagawa-san? That’s me. That’s a very interesting question. What do you want to work on? What do you want us to work on if we pair together?

### Audrey Tang:
Maybe write a Perl 6 compiler. We did that.

### Tatsuhiko Miyagawa:
We did that. \[laughs\]

### Audrey Tang:
Maybe write a YAML Parser. We did that too.

> (laughter)

### Tatsuhiko Miyagawa:
Exactly.

### Audrey Tang:
Maybe work on this container technology. We also did that, right?

### Tatsuhiko Miyagawa:
Yeah.

### Audrey Tang:
Maybe we’re going internationalization. We can do some really simple syndication work. We did that too.

> (laughter)

### Audrey Tang:
We’ve worked on a lot of projects, and now if I team up with you today, I will work on podcast.

### Tatsuhiko Miyagawa:
That’s exactly what we are doing right now. I think it’s a great answer, and I was about to answer, reply in a similar way. Even if we’re not working together in the same company of same organization, we’re kind of connected, and have been working and we’ll be working together in this open-source community.

### Audrey Tang:
Definitely. I just got reconnected to Peter Scott, also of the Perl community, and he’s now working on also thinking how assistive intelligence can integrate with humanity and so on. We did a similar video chat, and the transcript is already up. I think it’s really nice because, as Perl people, we don’t believe in standard solutions. That’s one of the thing about Perl people.

> (laughter)

### Audrey Tang:
There’s always one more way to do it, and so we keep exploring different fields and it’s good that we still keep the same ethos, and we do consider ourselves a big family. I think that’s what Clay Shirky means, that Perl is not a technology. It’s like a Shinto temple.

> (laughter)

### Tatsuhiko Miyagawa:
Yeah. I think that’s about it. There was a lot of questions. Maybe I have overlooked, but I think that covers it.

### Audrey Tang:
That’s pretty much it. I think this one is pretty good, aside from the technical difficulties, which I’m sure that with plenty of editing, you can pretend that this didn’t happen. \[laughs\]

### Tatsuhiko Miyagawa:
Yeah. Just in case you’re listening to this on the archive, I must have done a lot of edits as if there was zero technical difficulties, but we were using Discord. \[laughs\] There was a lot of glitches. We were switching servers from US West to Japan to Hong Kong. Apparently, Hong Kong has been the most stable.

### Audrey Tang:
Yeah, I know. This is super symbolic.

> (laughter)

### Tatsuhiko Miyagawa:
It is, isn’t it?

> (laughter)

### Audrey Tang:
That’s right.

### Tatsuhiko Miyagawa:
\[laughs\] Yeah, we are in Hong Kong right now in this together.

### Audrey Tang:
Yes, we’re all with Hong Kong together.

### Tatsuhiko Miyagawa:
Yes. Anyway, Audrey, there’d be anything, any message to the listeners who are software engineers who want to contribute something to society, any closing message to them?

### Audrey Tang:
Yeah, sure. I think what I will say is a very old idea. It’s actually in “The Tao of the IETF”. \[laughs\] It’s worth repeating and it’s from the words of David Clark.

### Audrey Tang:
David said — I think you’ve probably knew this now — “We reject kings. We reject presidents, and we reject voting. We believe in rough consensus, and we believe in running code.”

### Audrey Tang:
“Be conservative in what you send, and be liberal in what you accept.” That’s from Jon Postel. Thank you.

### Tatsuhiko Miyagawa:
Thank you, Audrey. Hope to see you soon.

### Audrey Tang:
See you soon. Stay safe. Have a good localtime.

