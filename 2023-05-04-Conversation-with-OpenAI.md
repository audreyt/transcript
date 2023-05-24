# 2023-05-04 Conversation with OpenAI


### Audrey Tang:
All right. I have actually an hour and a half, so we may or may not use all that amount of time, but I'm happy to elaborate on any of the questions that you may ask about deliberative input for AI and also AI for deliberation. 

And this is my speechwriter, international strategist, John, who also works in the National Institute of Cybersecurity, NICS. I'm also the chair of NICS and we are working on evals for AI systems. We're currently working on the translation task, but there are many other tasks that we may consider doing evals too. Okay. 

### John Scott Marchant:
Good local time. Hello, everyone. 

### Wojciech Zaremba:
Hello, John. Great. So, the main thing where I would like to focus the discussion is learning from your experience with Polis or similar systems like that. 

We are considering to what extent decisions regarding AI policy could be resolved by actually involving a broader group of people in the deliberative process.

And I just would like to understand to what extent the systems work, where they fail and what would be your recommendations. 

### Audrey Tang:
Excellent. To your question, I'll just say that the dream scenario I read from Sam Altman about global deliberation need to be done in a fashion with multiple zooming levels. 

There are broadly speaking three methodologies that needs to be concurrently at play. One is online and offline deliberative assemblies, bringing together randomly selected samples of larger population. So this is statistical representativeness. The strengths of this are that you get a high-quality consensus that is provably scale-free. Like if you invite 1000 people, 10,000 people, they tend to agree on the same thing or 100,000 people. So it's a kind of time-saving measure to do a sortition. This is one. And the second, but actually if you only select 10,000 people from the whole global population, most people wasn't invited. 

And so, for these people, for most of the people, there need to be additional offline venues for participation at all levels to gather and disseminate knowledge that would benefit deliberations of those randomly selected assembly. So this is the second one. And the third one is, well, more direct democracy. 

It's just online platforms like Polis for direct input from millions to identify and measure the consensus and dissent on various issues. And this is where AI can enter play in a most constructive fashion because you already have a very good language model that can identify the bridging narratives that translates across cultures and so on.

And so you don't need to reinvent the wheel on any of these three levels because there exist existing institutions to run these things already. On the first one, the sortition one, there were almost 600 cases documented by OECD. 

And the second component, more regional. For example, I'm more familiar with participatory budgeting, which came from Brazil, but there's also the Swiss Landsgemeinde, the New England town meetings, the Indian Gram Sabhas, there are many possible formats. And so for these, we will probably just use whatever those local formats are instead of forcing the local people to learn another format. 

And finally, the purely online component. I understand that Polis has been working with GPT-2 since GPT-2 and GPT-3 and many other language models. And so, they can aggregate public opinions on hundreds of polarizing issues, using language models to kind of find a bridge in narratives. In Taiwan, we use Polis very regularly. The vTaiwan process alone passed half a dozen laws, and regulations including Uber and so on. And we have a plan to use Polis for what we call alignment assemblies later this year, June and July. June for the online component and July for the face-to-face component. 

So, I'll just stop here and say that combining the regional to global assembly and online agenda setting to regional, these two bridges can be done in parallel and in tandem. And what this does is that it can build a quick consensus on the boundaries of AI and the localized assemblies will be able to fit into the specific policies for a particular political and regulatory context. I hope I'm making some sense because I literally just woke up. And feel free to ask any questions. 

### Wojciech Zaremba:
Yeah, that totally makes sense. Thank you for this description. I'm familiar with some of these pieces. The first piece is essentially sortition and the last piece is policy and then in the middle, the regional governance system. I also wonder to what extent the current process could be supercharged with AI.

So, you know, the extreme image that I had in my mind, which might be entirely unrealistic, involves a chart connecting a million people. It's not that you can see all the conversations, but rather the conversations are being relayed from one person to another. 

The AI models can summarize various pieces, enabling people to start from their current perspectives. For instance, if someone says they are against the war, the model may ask for clarification: "Do you mean taxes should be decreased, or that war budget spending should be reduced?  

### Audrey Tang:
Yeah, and it's not a dream scenario. This is where we work every day, right? So, let me do a very quick screen share. You may or may not have already seen this because it's already shared on Twitter. It's TalkToCity. 

### Wojciech Zaremba:
I've seen TalkToCity, but in some sense, it's like a cloud where every statement is represented as a point, and this is essentially an aggregator of Twitter opinions.

### Audrey Tang:
Yeah, but you can chat with any of those points, right?  

### Wojciech Zaremba:
Right. That's very cool. 

### Audrey Tang:
Yeah. So, yes. So, what this is doing is that it's using the cluster to inform, to be the context of prompts, to answer the questions in a way that is most likely for any point in this particular argument cloud to answer to you. So, it's almost like this cluster is a virtual persona of sorts and it works. 

This is Polis information, so you can run it live with any Polis conversations. So, people can have this kind of conversation and then go back to Polis to post other statements and so on. And I believe they've also extended to Twitter. 

And so, you see like random Twitter people posting random things about AI and then maybe they would not all respond to your direct messages, but you can pretend that they would and then they would just answer you through this similar graph of the language models. I hope this makes sense to you. Is this something close to what you have in mind?   

### Wojciech Zaremba:
I think that's excellent. I mean, I have seen TalkToCity, but I just thought about it as a, you know, clustering mechanism. I haven't seen the major functionality that you just described that actually you can speak with clusters. I was also wondering to some extent, it would be really desirable if in that process AI would attempt to pull us all together. 

### Audrey Tang:
Right. So, the AI as facilitator, which is what I believe what you're talking about here. 

### Wojciech Zaremba:
Facilitator who truly tries for humans to find a common ground. 

### Audrey Tang:
Yes. So, in my, let me just pull another screen share because it's impossible to describe this. It's almost impossible. I'm sure that language models can do that. Okay. Right. So, from our experience, for a facilitator human or a facilitating space machine to build a bridge, it's almost always easier if you can just identify the most divisive statements in a most representative way, like the one divide that divides the group of parts. 

This is the Polis that I posted around the Summit for Democracy this year. And the number one divisive point, and I read, is people worry about AI safety and talking about how AI is going to, for example, kill everyone, are just contributing to the hype. It's damaging to the quality of the discourse. Like group A, everybody hated that. Group B, everybody agreed that is the main sentiment that needs to be conveyed across. So, this is a little bit like a catharsis. 

By finding the most divisive point and put it in a way that is succinct enough, you release the energy of the disagreements. People would not need to spend hours and hours just diving on this point. We would just agree to disagree on this particular thing. And then, almost magically, people started to agree on most of the things with most of their neighbors most of the time. So, my point is that instead of trying to convince people, one possible way is just to list the points where we just disagree for the time being, and then we work on the lower hanging fruits, the rough consensus. 

### Arka Dhar:
Wow. This is brilliant. I just wanted to say, do you find this surfacing that if you have a very divisive statement, and it also shows you that you might have an isolated perspective, and it doesn't exist, and is that kind of like the point as well that we are trying to do?  

### Audrey Tang:
Oh, yeah. 

### Arka Dhar:
With this kind of representation? — 

### Audrey Tang:
Yeah, definitely. So, the Polis algorithm, which is precursor to community notes in Twitter, so it's very rigorous. It's been studied to be essentially clone proof, meaning that we don't count the headcount. So, it doesn't matter whether it's 152 or 1520 or 15200. The area, the principal component analysis in Cayman's cluster measures the plurality of the sentiments here instead of any vote-ish things. 

So, if you have 10,000 people joining each voting exactly the same to each other's statements, they would just be consolidated to one single point here, and they would not make this group disappear. 

So, this is ideal when you're trying to surface the minority groups' points in a way that the majority groups can actually consider. 

So, you see as time goes by, literally people on the corners move to the middle, even though they may be just three people at this area, but their arguments have some merit to the people, to the larger group, and because we say that we hold ourselves to accounts to answer to the, for example, top 10 group informed consensus, and only these top 10. This is just an example. If you have more time, you can answer to top 20 or top 100. 

And so, the group informed consensus is a metric that you can use to sort the statements. And so, for example, you would, for example, pre-commit to answer to a top three. So, then you will do a live stream or a town hall answering how you're tackling believable misinformation at scale, or you will be answering how many civil society-led initiatives are you prepared to support, or what's your thought on the future of WACC, and just that.

And so, the point I'm making is that no matter whether they believe to the AI Foom thing, everyone wants to hear a point-by-point answer to these few questions, or you can pre-commit to only do, like, this overall are all above 85%, and you can commit yourself to only answer to the ones that are over 85% consensus. I hope I'm making sense. 

### Arka Dhar:
Makes sense. I have further questions. So, we played a little bit with Polis. I noticed that maybe one of the problems is sometimes the statements that people are committing, they can be true or false depending on the interpretation that they ask necessary details. 

And it's almost like there's this property that when someone creates the very generic statement, like, oh, sky is blue, then everyone is likely to agree. But when there are a larger number of details, then it's actually, this tend to be more divisible. So, how do you think about this property?   

### Audrey Tang:
Yeah. First of all, I think it makes sense for people to post those general statements at the first stages of Polis conversation just to show that consensus is possible to reach. So, for example, in the UberX conversation we had in 2015, the main point of division was, of course, whether it's sharing economy, that's the future of platforms, or whether it is just gig economy that exploits workers. 

And if we just stay there, no consensus will be reached. And the first, like, kind of icebreaking statements posted back at then was just half getting people halfway there, was, I believe, progress is important, but so is protection of workers' rights and consumer rights, like insurance or something like that. But that statement is, of course, like, nobody would disagree with that. 

Actually, some people still did, because they're in a competitive mood. But that's exactly to me, the sort of statements you said that actually sounds nice, but you will press details from this statement, because otherwise it's not very actionable, right?  But what it does is that it showed people that we're having a conversation in good faith. 

And so, if the Polis is run long enough, like three weeks, four weeks, and so on, on the first week, we usually see those statements. And on the second week, once people start gathering to the middle, the initial angry posters, once they receive this email notification that there are actually some bridging statements being made, they go back and propose their variations on these details. 

This is exactly how community note work as well. So, to your question, I believe two things. One is that to run the process longer than one week. And the second is that we need also to have some seeded statements that are just nuanced enough to accelerate this eclectic phase, the middle phase. If you start with a blank state, people will spend more time on the first phase. 

### Arka Dhar:
That makes sense. So, I have also one more. Okay, I have many questions. 

### Audrey Tang:
Sure. 

### Arka Dhar:
So, I have just a very small experience with this Polis I'm just playing around with. And I deployed one of Polis internally just to see how it will play out. I also included some of the external people to whom we pay. And I noticed that definitely the quality of statements from internal group of people was higher quality. So, how do you think about this quality trade-off at the moment when many more people are being involved?  

### Audrey Tang:
This is a great question. That depends on what you're trying to do. If you're trying to convince the tax union people to not go on the street and block traffic, then you would want all of them on the Polis platform, regardless of quality of their statement, because this is an alternate vent to their feeling of injustice.

This is where it could be accounted. On the other hand, if you want to get some useful policy out of it, like in this year's event that we run, called an Ideathon. So, it's like a hackathon, but with ideas. Then we basically, it's a self-selection mechanism. We only invite to the Polis survey the people who actually contributed a reasonable future vision, like in the form of a news report from 2040. 

They can just write that news report together with image and three-minute video and so on to describe what it feels like to coexist with AI in 2040. And only after they complete this submission for idea, do they get an invite to the Polis survey. But of course, I fully expect most people would just use generative AI to generate those entry points, but at least it takes some effort. And once they're in that kind of mood, they will probably post something that is of higher quality. 

So, it's not necessary that you just jump into Polis. You can also have an informed stage before it, or even an interactive one before it. You can just run some conversations to determine their sanity before entering it. One thought I had was that only after chatting with chatGPT, free tier for a while, and that they actually have some first-hand experience with technology, do they actually see, in addition to "Click here to upgrade to Plus", they see "click here and participate in the crowd survey and win a chance of a free upgrade to Plus." That's one thought as well. 

### Arka Dhar:
Everything that you are saying is extremely insightful. 

### Audrey Tang:
Oh, thank you. 

### Arka Dhar:
Yeah, makes a ton of sense. So, basically, some level of qualifier that shows you that the people who are actually participating in the Polis are making thoughtful statements. They're thinking through it, and it's not just a visual reaction to a comment. So, yeah. 

### Audrey Tang:
Yeah, and that's just interface design. You can design so that you're engaging them, not only like click share, right? Click retweets, frame of mind. 

### Arka Dhar:
Yeah, no, that makes a lot of sense. I have two questions for you. One is, so, you know, if you go back in the days when you were first thinking about doing something like this, what was defining the kind of, let's call it a prompt for our conversation, what was defining some of those first seated, let's say, Polis polls that you wanted to run, or legislation that you wanted to get inside some? Yeah. 

### Audrey Tang:
Yes. So, I want to maximize the chance that the stakeholder groups that feel they're in the minority, a majority of them feel they're in the minority, but the people who feel they're in the minority feel at least possibly represented by the seed statements. So, we work hard on the initial nine seed statements, and we use the same formula for Uber, for Airbnb, for many other things. 

So, three of them would be profile questions, like, I have taken an Uber, I drive for a living, or things like that. So, this is the profile questions. And already that makes people feel represented. And then the internal stakeholders in the government, at a time the ministries of transportation, of finance, and of economy have very different views on Uber. 

They cannot even internally agree. And so, I asked three of the ministers to choose one statement that most succinctly distilled their position on this matter. So, the internal stakeholders, so they don't feel left out. Now, the external stakeholders, also the taxi union, Uber itself, as well as the co-ops, that is in a sense same as Uber, because they were running illegally to serve the rural needs. But in the sense, they're also on the same side as taxi unions, because they are co-ops, right?

They are unions that take care of their own employment. So, there are three different economic players. Also, we look at their public posts, their op-eds, and so on, and try to distill the statement that most succinctly captured their idea. So, the three internal stakeholders, the three external stakeholders, and three profiling questions are our initial seed statements. 

### Arka Dhar:
Okay. No, that is really smart. Going back to one of the early points that you made around regional and global levels of abstraction of kind of like the course that you built. 

You can imagine like for our purpose of trying to build a very aligned AGI that benefits humanity, the folks we want to see participate in some of this deliberation process, we want that cohorts to look maximally diverse, and truly representative of humanity, and not just early adopters of a cool technology, or where we have the greatest concentration of our current user bases, because the technology can and might end up impacting people who will never end up using it. 

So, how do you think about the word maximally diverse, and how do you make attempts to build cohorts which are representative?   

### Audrey Tang:
Yeah. 

### Arka Dhar:
Without, you know, polarizing it. 

### Audrey Tang:
Yeah. Yes. You probably always polarize a few things that are statistically representative. This is just part of the trade, right? So, I think the tried-and-true method really is just lottery, right? Civic lottery, random number. And civic lotteries work even on a global scale. 

As I mentioned, the Global Assembly on Climate did exactly that. And if you get statistically representative sortition-based population, even if some of them do not want to participate, like jury duties, we don't have a jury duty for deliberation yet globally, you can always afford to, you know, draw like a hundred times more than you actually need, and you just go into the pool of candidates to choose someone who are statistically in a similar situation as the one that refused to join. 

So, you still end up with something that is more statistically representative. It can be run very reliably. 

In Taiwan, we use this sortition process only for the most controversial of topics that needs the sort of legitimacy similar to a referendum, because it's, frankly speaking, expensive to run this sort of process. But it did help us to resolve some of the most controversial things. For example, our universal healthcare, which also covers dentistry, our Chiang Kai Shek Memorial Hall, whether he is a great person or a dictator, and what do we do with this big temple, right? 

And so, these are useful if you plan to do that. The best way would be to announce you're doing this at X months from now, work with process partners, and for everyone who is not drawn into this conversation by lottery, anyone who didn't win the lottery, which is pretty much everyone, they can help setting the agenda through a regional online protocol. So, you crowdsource the agenda setting, but you leave the consensus building to this sortition-based group. That's the format we found to work very reliably. 

### Arka Dhar:
Yeah, yeah. No, that's very, very helpful. Thank you. 

### Wojciech Zaremba:
It seems that the sortition is on the final stage. In some sense, there is one stage which is an information gathering that you can run through Polis. And that might involve either experts, or some people who have context. They just try to truly understand the space and have this brainstorming of many people. 

And the process takes, as you said, something like two weeks. It requires also moderation. Let's say, bringing the most polarizing statements, paraphrasing them, and releasing energy. And then at the very end you have a report that tries to describe the situation, and then you have a sortition process through which you try to gain the essential use of sortition for voting. 

### Audrey Tang:
Yes. One nuance to that is that they, first of all, we usually run three weeks, not two weeks because of the dynamic involved. But more importantly, there needs to be a point of meeting between, let me just show you this this screen because again, this is impossible to explain in words. Do you see the collaborative policy meetings like?   

### Wojciech Zaremba:
Screen doesn't yet show up on my side. 

### Audrey Tang:
No? Okay. Well, let me just... I can't screen share now. But okay, let me just quickly rejoin.

### John Scott Marchant:
So, I would show up every time anyone tried to catch me in Taipei, I would be there.

Where are you based in London, Arka?  

### Arka Dhar:
I live right by Regent's Park. 

### John Scott Marchant:
Oh, nice location.  

### Arka Dhar:
Yeah. Yeah. Quite central. 

### John Scott Marchant:
Yeah. I lived in London for a long time, actually. 10 years maybe. 

### Arka Dhar:
Oh, nice. All right. Yeah. We are headquartered in San Francisco. So, I literally flew in today. 

### John Scott Marchant:
Oh, really? Okay. 

### Arka Dhar:
Yeah. Yeah. And that's... Sorry, it's 12 30 AM now, but you know, it feels like... 

### John Scott Marchant:
You seem very awake. It's okay. 

### Arka Dhar:
I'm very awake, almost. Problematically awake. 

### John Scott Marchant:
Wojciech, how do I pronounce your name correctly?  

### Wojciech Zaremba:
That's the way, Wojciech. Wojciech. 

### John Scott Marchant:
Okay. Not bad. Where are you? You're in Warsaw?  

### Wojciech Zaremba:
No, I live in San Francisco. 

### John Scott Marchant:
Okay. So, great. And what are you doing? 

### Wojciech Zaremba:
I co-founded OpenAI. And at the moment, I'm quite interested in the topics that we are discussing with you guys. We want to figure out, essentially, how to leverage deliberative democracy processes. I have been reading a bunch about it. We'll try to prototype. 

### John Scott Marchant:
Yeah. This is very exciting stuff. It's very big stuff, actually. Deep. 

### Arka Dhar:
I was just going to say, governments embracing this model of policymaking, I think it's a game changer for democracies going forward. No doubt. So, this is very, very exciting. 

### John Scott Marchant:
It's a revolution of sorts. 

### Arka Dhar:
Yeah. 

### John Scott Marchant:
So, Wojciech, what first got you interested in this concept?   

### Wojciech Zaremba:
To be honest, I have been reading about it for a few years. And I thought that it's extremely important that we build technology that is beneficial to entire humanity. 

And in the past, it was unclear how could we even leverage public opinion to influence AI. You know, a while back... Individuals didn't understand what AI can do. At the moment, we are moving to the place where a large number of people understands what AI means, what these language models could do, what are potentials and what are the risks. 

And it sounds like right time to get the broader input on how AI is supposed to behave and how we can truly ensure that it benefits us all. 

### John Scott Marchant:
Wojciech, do you feel there's a... 

### Wojciech Zaremba:
Yes?  

### John Scott Marchant:
Do you feel there's still a general lack of understanding in the community about AI, dangers, risks, benefits? I think there are... Do you feel it's being communicated clearly at the moment?  

### Wojciech Zaremba:
So, I mean, this is definitely a new technology. I wouldn't say that everyone fully understands what it can do. When I called my elementary school teacher, she told me that, oh, Wojciech, you released this AI that is really great in writing poems. And there is truth in it, but I don't think that it fully reflects the picture. 

### Audrey Tang:
So... Am I fully back?  

### John Scott Marchant:
You're back. 

### Audrey Tang:
Okay, I'm fully back. 

### John Scott Marchant:
Welcome back. 

### Audrey Tang:
Sorry that it took quite a while. And so, just to pick up where we left off. So, in Taiwan, we have run more than 100 collaborative meetings. And each of these 100 or so meetings follow the same pattern of sorts that has this what people in IDEO call the double diamond approach.

So, the point I was just trying to make is that there needs to be a clear delineation between the first diamond and the second diamond. We were talking about using sortition-based methods on the second diamond, which is to develop a consensus and deliver a referendum-like voting. 

But equally important is to discover what does language models or AI mean together and define the kind of values, but not necessarily the responses that we have in terms of responding to AI. And so, the points you see in the middle, which is the consensus statements and so on, need to be individually reached by each community just so that they can prepare themselves to accept and participate to the sortition-based next rounds, the second diamond. That was just... Sorry that it took a while to say this. Yeah. 

### Wojciech Zaremba:
So, at first you want to have a process through which beliefs are being surfaced and the entire map is being defined. And then there is a second stage through which people, once they understand the complete map, they understand the places of agreement and disagreement, then they can actually commit to various parts. 

### Audrey Tang:
That is exactly correct. So, for actual collaborative meetings, we use Polis for the discovery part, which is very messy. And Polis help us to inch a little bit toward the defined point. And then we held live stream meetings that doesn't try to prescribe solutions, but rather just to answer point by point the points of division and points of consensus, so that we agree on the definition of how might we actually overcome one problem or another together. 

### Wojciech Zaremba:
To what extent do you think that both parts can be supercharged with AI?   

### Audrey Tang:
Yeah. So, one part that can definitely be supercharged is just value elicitation, just to let people understand that there are some common values after all, despite the fights and so on. And Polis has been working with language models to do exactly that. 

As you're posting a statement, if you're posting from a point of anger and so on, instead of allowing to just present, Polis will just use a language model and try to rephrase a little bit. And this is what actually a helpful assistant like GPT does best with the human feedback, right? It's just trying to steer you maybe to the part of the statement, maybe you posted like 20, 30 words. 

There are words that are more constructive to the conversation. So, it would just capture that and elaborate on that a little bit and say, maybe you can talk a little bit more on those three words that makes more sense to the rest of the group and so on. So, it's almost like a personal coach as a person is posting comments. 

Now, using language models in such a way, of course, creates its own bias, which is why Polis is just experimenting with it instead of making it a default. But we do find, retroactively, running the largest Polis conversations in this augmented way, it of course, leads to less work on the part of moderators. 

They would not have to delete so much toxic comments as well. So, this is the part that really works well. And the second part is just the talk to CD part. If instead of just randomly posting, you can have an incidental conversation with the Zeitgeist. It tends to lead to higher quality and more insightful conversations as well, because it just captures the insight that you derive from that conversation back into your statements into Polis. So, that also works. 

### Wojciech Zaremba:
I understand everything. Everything makes sense. 

### Audrey Tang:
That's the kind of response we want, you know, participants after a collaborative meeting. It's just this holistic understanding. 

### Wojciech Zaremba:
One more thing that would be useful. Would you be able to kind of enumerate the cases when this process worked and cases where it didn't?  

### Audrey Tang:
Well, this process always works. It's just to what degree does the consensus built by this process is seen as legitimate by the stakeholders? This is another problem altogether. If you bring people into a Polis conversation, provided that they don't, I don't know, hack, compromise, they're like, it always produced some sort of consensus. 

But the people who boycott this conversation may try to delegitimize the whole effort of going through a Polis conversation or a sortition or a referendum and so on. And how to bring these people into the conversation with a good enough promise, pre-commitment, accountability, like no matter how radical your ideas are, if they make it to the top 10 or top 20, we hold ourselves accountable to answer to them one by one. But if you then proceed to actually not answer them, then it creates a legitimacy crisis. It will feel like you're just running a survey for show and so on. 

And that would delegitimize the whole result. So the quality of pre-commitment, even just time, right? When I was a minister at large for social innovation, I would just say, I pre-commit four hours of my time or seven hours of my time to come to the vicinity of the people's main concerns are. So, if we have a municipal conversation, a controversial issue that is mostly on Southern Taiwan, or even on one of our remote islands, I commit to fly there to spend a day or two days with the local people to understand what those statements actually mean. 

And I held myself accountable for four hours, seven hours to answer point by point, whatever the top consensus may be. And that's my commitment without understanding, of course, what actually people feel or what their rough consensus is going to be, because there's still a month in the future. So if I don't make that pre-commitment, or if I do, but I don't actually follow through, that will delegitimize this entire conversation. And so this will probably not work. 

### John Scott Marchant:
Audrey, just a quick question. How is the process delegitimized?  

### Audrey Tang:
Yeah. So if you're trying to delegitimize a process like this, you will probably do one of two things. One is what people in the debate call the critique, right? Like we shouldn't be talking about this. This is unconstitutional. The constitutional court should have a say, not the people, and so on. So exactly the same sort of argument you will make when the Congress is trying to deliberate something you find deeply opposed. You will go to the judicial branch instead of the deliberative branch or the legislative branch. 

So this is tactic number one. Technique, for example, for capital punishment or death penalty, that is the kind of strategy that advocates to abolish death penalty would say. They're like, okay, if you deliberate, if Taiwanese people just feel so deeply that for certain cases of crime, death penalty is justified, it's still unconstitutional. So, you shouldn't have this conversation in the first place. 

So, this is the first thing. The second thing is more nuanced. It's about trying to delegitimize the body hosting this conversation. So this is just the DPP putting on a show and we, the KMT, must not join and so on. And in a polarized political environment, which describes Taiwan circa 2014, that is actually the major threat to the legitimization of this process. 

So back then we had to find credibly neutral parties instead of the state hosting this. The vTaiwan process was incubated with a g0v hackathon in our national academy, which is provably neutral, or the National Taiwan University, which is quite neutral. And the people like independent media or public media in the US, that would be the National Public Radio or consumer organizations that are not seen as partisan, like Consumer Report and so on. 

But we only did that because we know that this polarization based on partisan disagreement will try to delegitimize by painting us as a KMT thing, because at the time KMT was still a really important thing. 

### Wojciech Zaremba:
So you're essentially saying that when it comes to difficult cases, it's actually even important that it should be run by external organizations to open AI. So you could imagine that we build a system, but then it's actually run even by moderators outside of the organization. 

### Audrey Tang:
Yes. So the branding needs to be, for example, if you run it with Consumer Report, then Consumer Report is free to engage everyone else, DeepMind, Anthropic, and so on, and run the same format. And that will make it much more legitimized, even though open AI is the first to pre-commit to answer. 

### Wojciech Zaremba:
I understand everything. 

### Audrey Tang:
Arka, do you have further questions?  

### Arka Dhar:
I was going to say, this is incredibly interesting, and I'm sure we will have a ton of questions as we start experimenting. I have one final, very broad question for you. I'm sure you went through a lot of experimentation as you're figuring out the different blocks of information gathering, sharing, surfacing inside, running sortition.

Which one was the toughest one for you to crack, and which one do you think is still in your mind can be significantly improved, if you were to pick one part of this process?  

### Audrey Tang:
Yeah. So there's one that we've overcome, and there's one that we have yet to overcome. So I will talk about both. Partisanship, really, was the one that was the most difficult to overcome, to build basically our brand, right? 

The g0v, vTaiwan, the participation officers, the public digital innovation space, and Audrey Tang, as pan-partisan. So not non-partisan, but all partisan. All the four major parties in our parliament now have signed on the Open Parliament Action Plan and fully support deliberative democracy and so on. 

That was not the case 10 years ago. And so most of the work was political, was trying to... Because initially, the largest parties, the DPP and KMT, they have this dynamic, like if one party choose a method, the other party would choose a different method, just to show that we're not captured by these parties. 

So, the initial credibly neutral people is not enough to overcome this psychology. We actually need to institutionalize it. So we worked very hard to pass as national regulation the participatory officer in each and every ministry. We built alliance with the career public servants.

So in your case, that would be people in NIST and equivalent organizations worldwide. So that the technocrats, which are not partisan, they're there regardless of who's the president, see this kind of legitimacy process as de-risking their own involvement in this so that they will not be flip-flopped once different stakeholders take charge of the government. So that took us the better half of the decade. 

Now I would say that in Taiwan, it's largely overcome. People genuinely, all the opposition and ruling party members of the MP believe that I'm pan-partisan. I don't belong to any particular political party. So this is something we have overcome. But we have yet to overcome what scholars say epistemic injustice. The linguistic injustice is just one subset, but I'll use it as an illustration to make it clearer. In Taiwan, we have 20 national languages. 

So Mandarin is just one. There's also Taiwanese, Hakka, and 16 indigenous languages as well. And they're all equally national in our National Languages Act. But it doesn't mean that we can reliably run a deliberation with 20 national languages that translates across their cultures and lived experiences.

So, what happens is that everybody's forced to think in Mandarin. And that has real problems if you're talking about, for example, the First Nation rights, or even just some general human rights issues. Because when we talk about marriage equality, for example, some of the indigenous nations are matriarchies. So they talk about this in a completely different manner and so on. So this is something that I'm very passionate about in using language models. Currently, GPT-4 speaks only one out of 20 national languages. 

Well, it has hallucinated widely because of the lack of representation in the Common Crawl, I'm sure, from the other 19. So, if we try to use GPT-4 for Polis conversations, it will actually make the injustice worse. Because it will just reinforce the Mandarin bias. And not to mention the simplified Chinese Mandarin bias inherent in Common Crawl. 

And so that's the main blocker for us to use GPT-4 in a scalable fashion, because we currently cannot find humans. So that's the 20 national languages, each one have their own linguistic models, so to speak. I understand you've done something like that with Iceland. So something like that will have to happen for all our 20 national languages in order for us to truly say that it is statistically representative of our population.  

### Arka Dhar:
I was absolutely about to say that. So we did a fair bit of post-training with Iceland to preserve their language. Their goal was slightly different, but we can definitely explore something like that. 

### Audrey Tang:
Yeah, we have good material, right? So we can start training with Taiwanese, the main non-Mandarin languages and so on. So if you're interested in that, I can put you in contact with the Taiwanese preservation people. 

### Arka Dhar:
Okay, all right. Yeah, we can absolutely help you get that out. You have given us more time than we could have asked for. I think this was genuinely a fantastic kickoff for us. Wojciech, I have no more questions. 

### Wojciech Zaremba:
No more questions on my side. Audrey, thank you very much for your time and have a wonderful morning. Yeah, it was extremely informative to me. Thank you very much. 

### Audrey Tang:
Thank you. Thank you, John. 

### John Scott Marchant:
Thank you, all. Thank you. Good luck. Take care. 


