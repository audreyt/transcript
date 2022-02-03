# 2022-01-13 Interview with Rob Wiblin

### Rob Wiblin:

Today I’m speaking with Audrey Tang. Audrey is a programmer and currently a minister in the Taiwanese government focused on using digital tools to improve democratic deliberation, as well as solve other societal problems.

### Rob Wiblin:

Audrey was a child prodigy of sorts, who started on classical literature at five, advanced math at six, and programming at eight. She dropped out of formal education early in high school in order to pursue self education and work at various software companies. She first became involved in Taiwanese politics in 2014, when she helped the [Sunflower Student Movement](https://en.wikipedia.org/wiki/Sunflower_Student_Movement) occupy the Taiwanese parliament building. That movement successfully [prevented a trade deal between Taiwan and the People’s Republic of China](https://en.wikipedia.org/wiki/Cross-Strait_Service_Trade_Agreement), which they argued would harm the Taiwanese economy and leave it vulnerable to strong-arming by the Chinese Communist Party.

### Rob Wiblin:

The same government she had been protesting subsequently invited her on as a consultant to, among other things, improve their ability to talk with and learn from the general public. In 2016, the government in Taiwan changed hands from the Kuomintang to the Democratic Progressive Party, and Audrey was invited to become a minister without portfolio focused on digital affairs. That then made her Taiwan’s second-youngest minister, as well as its first transgender minister.

### Rob Wiblin:

She has since pursued a diverse range of programs to help Taiwan, including using [quadratic voting](https://en.wikipedia.org/wiki/Quadratic_voting) to aid policy deliberations in civil society, using live maps and national ID cards to ensure that everyone in Taiwan had a face mask in February 2020, creating a crowdsourced effort to combat disinformation, and shifting Taiwan’s school curriculum towards building competence and away from rote memorization.

### Rob Wiblin:

Thanks so much for coming on the podcast, Audrey.

### Audrey Tang:

Really happy to be here.

### Rob Wiblin:

I hope to talk about technologies that you’re excited by and get a sense of your overall political philosophy. But first, what are you working on at the moment, and why do you think it’s important?

### Audrey Tang:

I’m working on recording a podcast with 80,000 Hours. I believe this is important because most of these social innovations require not just legitimacy from the theoretical sense, but also understandability from the pedagogical sense. Unless people can articulate why it’s important to wash your hands and wear a mask and so on, there’s no chance for any social innovations to work en masse. Which is why I believe podcasts like this are very important.

### Rob Wiblin:

I think podcasts like this are very important as well. [laughs] But what about over the last month or year? What kinds of active things have you had on the boil?

### Audrey Tang:

We’re trying to launch our own podcast in the style of 80,000 Hours, and we’re just working on the interview plan. I’ve never done this before. I’ve never been a host, only a guest of the podcast formats. But we do believe that the kind of work that we’re doing — combating the pandemic with no lockdown, combating the infodemic with no takedown, and so on — has the ability to resonate with the wider reach of a global audience.

### Audrey Tang:

And so while I’ve participated in more Mandarin-speaking podcasts in the communities of Mandarin-speaking podcasters and so on, I believe there’s also an equal, or even larger, audience if we have an English-only podcast — where we answer questions from the Twitterverse and things like that, as you do on your podcast. So when I say podcasts are important, I don’t just mean to flatter you — although there’s a bit of that — but I’m actually working on that. That was my previous meeting.

### Rob Wiblin:

It seems like a lot of people have asked you to do interviews over the last few years. I guess because Taiwan seems to have been a real pioneer in a whole lot of these areas that you’ve been working on — it’s been well recognized for doing a really good job controlling COVID-19 at a relatively low social cost.

### Rob Wiblin:

But also, if I’ve been reading the history right in preparing for this interview, it seems like the 2014 protests led to a real sea change in how the Taiwanese government interacts with the general public, how it collaborates with volunteers and citizens, and gets information from people. It’s stuff that I’m not really aware of any other government doing. Is that right?

### Audrey Tang:

Yeah. I think there’s many city governments and municipal governments doing that sort of thing. But of course, Taiwan is more than 23 million people, so on this scale, I would say that Taiwan is really quite unique. And it’s partly because the 2014 occupy was not really just a protest. It’s not just a demonstration _against_ something, but rather it is a demonstration _with_ something. It’s a demo, in the sense of [demoscene](https://en.wikipedia.org/wiki/Demoscene).

### Audrey Tang:

Half a million people on the street, many more online, can actually manage to reach a roughly agreeable consensus around the Cross-Strait Service Trade Agreement — so that it actually formed the consensus on, for example, whether we allow PRC so-called market forces into our 4G infrastructure back in 2014. Of course, nowadays people are talking about the same things — I mean 5G — but the kind of conversations at that scale was not previously thought possible.

### Rob Wiblin:

Yeah. Do you know what format the podcast is going to take?

### Audrey Tang:

There’s three segments. The first is me doing a short recap of what’s going on from a Taiwanese perspective on the global issues. Then we’ll invite guests that broadly align with our philosophy, or broadly disalign for a debate. And then we will pose questions from the Twitterverse, from social media, to both me and the guest. So basically it will be like the two of us, but with the roles reversed.


### Rob Wiblin:

We’ll come back and talk about the nuts-and-bolts implementation of a bunch of these different projects that you’ve been working on later in the interview. But first off, it seems like in general there’s something of a crisis of confidence or trust in government. These issues have always been with us, but they seem to be somewhat worse this decade than 30 years ago — how much trust and confidence people have in the government in the UK and the US, and to some extent even in Australia and Canada.

### Rob Wiblin:

I think the main theory I have for why that is, is that the internet has made it a lot easier to see when government is messing up. In the past, it was easier to cover up or just not be aware and not be salient when people are being misleading. Or when services are poor, people can’t coordinate their grievances to come together and complain.

### Audrey Tang:

That’s right, that’s right. Yes.

### Rob Wiblin:

And it seems like, to some extent, you’re providing an outlet for people to —

### Audrey Tang:

For outrage.

### Rob Wiblin:

But not merely outrage — also for people to come together and explain how things could be better and help to improve them, and thereby preserve, to some degree, people’s confidence and trust in government. This potentially has implications beyond just the government providing good services. It has implications for how much people trust the government to be able to do anything, and how much they like their fellow citizens, and things like that. Like how much do they regard themselves as part of a society that they like to be a part of, rather than find it a burden?

### Audrey Tang:

Mm hmm.

### Rob Wiblin:

OK. Sounds like you agree.

### Audrey Tang:

Definitely. Yeah. I think it’s partly about how much government workers — public servants — trust the citizens. Because trust is reciprocal. If we don’t publish things as open data, then it means, kind of implicitly, that we don’t trust the citizens with these data. If you have to file an FI request and wait for 90 days and a heavily redacted copy gets sent to you, this of course says something about the trust from the government to the citizens.

### Audrey Tang:

So by saying, “No, it’s the other way around,” we publish non-privacy-related data upon collection. It means that even before I have a chance to censor or redact anything, I actually receive the data the same second as any citizen or any person on the planet received the data. It’s in the commons, so to speak. So that’s maximal trust. It says, “I’m OK for people to point out the data bias.”

### Audrey Tang:

Paradoxically, it means that this public servant actually takes less blame, because they can now ask, “So how would you like to fork the government? How would you like to change the mask distribution so it doesn’t prioritize places with better metros?” — because previously we were distributing based on the physical distance on the map, and not everyone owns a helicopter. So it’s a horrible bias for people to have to take a long bus, because it doesn’t mean that the same kilometer on the map translates to the same hours of investment to travel to a nearby pharmacy.

### Audrey Tang:

And when the [OpenStreetMap](https://www.openstreetmap.org/) community points this out, instead of defending, the ministry can simply say, “OK, teach us. How else would you do it?” Because everyone had the same data, then the better distribution method was created. And I think over the course of 24 hours, we implemented a better pre-registration way of distributing masks.

### Audrey Tang:

So my point is that the shared data maximizes the trust from the public service to the citizens, and ensures the citizens are co-creators. There’s no excuse to just demonstrate against and not demonstrate with, because you have all the materials. So if you think something is bad, it must mean that you can articulate what’s better. So please do, and then we’ll implement it.

### Rob Wiblin:

Yeah, it’s interesting. I suppose it’s cooperative, but it also does pose a challenge to the general public, to not merely complain about things being bad.

### Audrey Tang:

That’s right. Yeah.

### Rob Wiblin:

If it can be better, then you have the tools.

### Audrey Tang:

“How else would you do it?” Exactly.


### Rob Wiblin:

Yeah. Interesting. So there’s this issue of the public trust in the government, but also the government needing to trust individual citizens to be responsible with all of this information and to make good use of it. To what extent do you think the Taiwanese public is unusually trustworthy in that sense, in a way that might not transfer to other countries that perhaps have more trolls, or where there’s just less social harmony in general?

### Audrey Tang:

Well, first of all, I don’t think there are actual trolls among us. It’s not like there’s some other kind of being. So there are trolling behaviors, I’m sure, but I think —

### Rob Wiblin:

It’s a mode, but not a person. Yeah.

### Audrey Tang:

It’s a mode, and the mode is largely a function of the space, not the function of the person. I usually use the metaphor of being in a digital equivalent of a nightclub, a smoke-filled room: you have to shout to get heard, there are private bouncers, addictive drinks, and so on. Then of course over time, people kind of scream at the top of their lungs and without the capacity to listen at scale. And it may feel kind of troll-like when doing public deliberation in that sort of place. But exactly the same people, if you take them to the digital equivalent of a public park, a campus, a public library — suddenly they behave like in a town hall conversation, in a very pro-social way.

### Audrey Tang:

So I think mostly it is what you are optimizing for. If you’re optimizing for click-through advertisement for impulse buys, well then, good luck finding the common ground or rough consensus. But I wouldn’t attribute that to Taiwanese people are less trollish — I would say we have better digital civic and public infrastructures.

### Rob Wiblin:

Yeah. Just to elaborate on that for listeners: one of your ideas is in the UK and the US, there’s been a lot of concern about the quality of public discussion between citizens on tools like Facebook. And the solutions that people have proposed, [including on this show](https://80000hours.org/podcast/episodes/tristan-harris-changing-incentives-social-media/), have been around changing the design of Facebook. The problem is, of course, that Facebook is a private company that has its own motivations and its own incentives. And in your metaphor, Facebook is like a nightclub where people are shouting at one another, it’s rowdy —

### Audrey Tang:

People are screaming at each other. That’s right.

### Rob Wiblin:

And that’s the design of the place. And then you’re suggesting that instead of trying to improve discussion of politics on Facebook, you can design new spaces — create new places that are conducive to people getting along, people having constructive conversations, people reaching consensus. Potentially just designing your own tool that’s focused with that goal in mind is more promising than trying to change Twitter or Facebook or Instagram or whatever.

### Audrey Tang:

Literally town halls, right? I don’t have anything against night clubs. But when a complaint was like, “When we try to hold town hall conversations with our mayor in a nightclub, people get rowdy,” then maybe the solution is not to reform the nightlife district.


### Rob Wiblin:

Let’s focus for a while on [deliberative democracy](https://en.wikipedia.org/wiki/Deliberative_democracy), and ways of trying to aggregate knowledge and preferences of people in policy formation. One way you’ve tried to do that is this service, I think it’s called [Polis](https://pol.is/home), is deploying this decision-making system called [quadratic voting](https://en.wikipedia.org/wiki/Quadratic_voting), which allows people who care really strongly about an issue to have more influence over an outcome, but not completely dominate it — it’s trying to strike a balance there. That method came up on [my interview with Vitalik Buterin](https://80000hours.org/podcast/episodes/vitalik-buterin-new-ways-to-fund-public-goods/) back in 2019. Can you walk us through an example where quadratic voting has actually been used in practice in Taiwan?

### Audrey Tang:

Well, Polis is Polis, and quadratic voting is quadratic voting — two very different things. Polis is more like a pro-social social media. And an example experience would be back in 2015, we would send this message to the taxi companies and unions and also the Uber drivers and so on, saying that we’re going to hold a three-week deliberation online — where you can actually vote or downvote on all the different feelings that you have on the UberX situation. People who don’t have a professional license at the time can pick up strangers based on the app recommendation, on surge pricing, and they do it 10 times a day — how do you feel about that?

### Audrey Tang:

It’s a consultation, but the survey questions were not pre-mediated. It’s actually crowdsourced, so people can say, “I feel passenger liability insurance is the most important,” or they can say, “Not undercutting existing meters I feel is important,” or “We should empower the local churches and temples to run their own co-ops using Uber-like algorithms,” and so on.

### Audrey Tang:

Basically, whatever they say is for everyone else to upvote and downvote, but we do not measure the upvotes or downvotes by headcount — we measure it by plurality. Using [k-means clustering](https://en.wikipedia.org/wiki/K-means_clustering), you can see on a two-dimensional map there are people who feel close to you. And when people disagree with your sentiments, it doesn’t mean you’re buried — it means they’re more distant, socially distant across the different clusters. You actually see the visualization as you press “Agree” or “Disagree” — you move toward people who resonate with your feelings.

### Audrey Tang:

The twist is that we only hold ourselves accountable to the agenda that’s crowdsourced by people who can manage to convince the supermajority of all the different clusters. The most dividing points are always visualized using [principal component analysis](https://en.wikipedia.org/wiki/Principal_component_analysis) along the X- and Y-axis, so it is a gamification to bring more consensus to the table. People have to consistently find more new and eclectic statements to convince the people across the aisle. If you mobilize 2,000 people to vote exactly the same, it actually doesn’t change their position — their group doesn’t grow. Actually, the significant minorities still need to be convinced in order for their ideas to be put on the table for the consultation meeting of multistakeholder deliberation with Uber and taxi companies, three weeks afterward.

### Audrey Tang:

Always, we see this map at the end of the consultation, where there’s five or six ideological points that people agree to disagree, very divisive. But then people spend their calories on the things where they mostly agree with each other — on most of the things most of time, actually. Then we say it seems normal, because it’s a crowdsourced norm. So people feel that, “Yeah, UberX can enter Taiwan if you do this, this, and this” — and then people commit their support to that and another coordination problem is solved.

### Audrey Tang:

The point here is that Uber became the Q Taxi company in Taiwan, not because we forced them to, but because social norms say that they should do this. But their innovations, such as with surge pricing and so on, should also benefit the local churches and temples and so on. So at the end of the day, it’s a positive-sum situation. And that is very different if you take the same town hall–style conversation to Facebook: the chart will be kind of a flip of that. You will see many more calories spent on disagreements.

### Rob Wiblin:

Right, OK. So there’s a lot there. Let’s unpack that a little bit gradually. I want to come back to the quadratic voting, but let’s talk about this method first. I guess you’re saying you’ve got some difficult policy issue where there isn’t an existing consensus, say, “Should Uber be allowed to operate in Taiwan? And if so, under what conditions?” And there you crowdsource sub-questions that are related to this — like the issue of passenger safety, of pricing, of salaries, all of these different components. People can post questions that then people can vote on —

### Audrey Tang:

They post statements. Like feelings.

### Rob Wiblin:

Ah, they post feelings, OK. They post statements that then people can express agreement or disagreement with. And you use that to basically see that there’ll be different clusters of opinion, where there’ll be a whole lot of people who basically say yes, no, yes, yes, yes — they all agree on this set of feelings. And then there’ll be other clusters elsewhere?

### Audrey Tang:

Yes.

### Rob Wiblin:

OK, that makes sense for systematizing the disagreements and understanding them. And then what do you do? Because you talk a lot about building consensus. What do you do in order to try to get —

### Audrey Tang:

There’s a scoreboard of global agreements: among all those very diverse groups, what are some of the rough consensus that nevertheless everyone can agree on? And then, only the winners on the leaderboard —

### Rob Wiblin:

So across the different clusters, you’ll be like, “What are the things that people do agree on, even if they disagree on other stuff?” And then you try to build from there to find a policy that would match with the things that have broad support?

### Audrey Tang:

We then ask the stakeholders — the taxi and Uber companies. We list the, say, 10 broad agreements across all the different clusters to them, saying, “This is the crowdsourced norm. This is the agenda that we need you to talk to today. And this seems perfectly normal to me, so why don’t you just commit on that? And if you do, what concrete items do you need from the government or from other stakeholders in order to make it happen?”

### Audrey Tang:

At that point, of course, because it’s already the norm, anything that disassociates itself from the norm — like saying, “No, I don’t think insurance is important” — there will be tremendous cost to the social trust and capital if any stakeholder actually goes against this crowdsourced broad, rough consensus. Mostly, they offer technical compensation and things that’s required for them to implement this, but nobody actually goes against the crowdsourced agenda, saying, “No, this is not important” — because obviously this is important to people of all different stripes.

### Rob Wiblin:

I see. OK, I’m just trying to picture this in my head. So you’ve got the different clusters and you’ve got a bunch of goals or feelings that most people share. But presumably there still isn’t a consensus on what the policy should be, because that’s why there’s a disagreement in the first place. In order to get a majority of people — or, ideally, a supermajority — to support some particular policy proposal, do you do some kind of bargaining thing? Where like one cluster will compensate another group in exchange or something? No, it’s not about that? Go on.

### Audrey Tang:

No, it’s about defining the solution space together. As the three weeks goes by, you literally see the clusters inching closer to one another, because they found some broad principles — like not undercutting existing meter insurance and so on — that actually convinced them, themselves, that “If you implement those values, then I can actually live with it.” It’s not perfect, but they can live with it.

### Audrey Tang:

Once the crowd sees a reflection of its own blended preferences, then that’s the political moment to talk to the stakeholders, saying that our citizens already broadly agreed on those 10 design criteria. Now it’s our job as policymakers to craft a policy that can actually satisfy all the 10 criteria that’s already broadly agreed upon by people who initially felt very differently.

### Rob Wiblin:

OK, so you’ve got the clusters, people understand different views, and there’s some things that people agree on. Then you’re saying you generally see a process whereby people converge — they begin to agree more and more, because you’ve started to highlight the goals and the feelings that they share. And then they can make persuasive arguments on the basis of shared values that will appeal to the other clusters, and ultimately it obviously won’t eliminate the disagreements, but you’ll reduce the disagreements. Then there’ll be enough of a shared set of opinions that there actually is a policy that the group can go away and write that will satisfy most people.

### Audrey Tang:

Yeah, it’s called [overlapping consensus](https://en.wikipedia.org/wiki/Overlapping_consensus). And that’s how internet protocols are made, by the way.

### Rob Wiblin:

Interesting.

### Audrey Tang:

It’s through humming. We don’t do humming, it’s more of a visual hum, but it is the same principle.

### Rob Wiblin:

Has this worked consistently when it’s been applied, or are there some times when people just disagree too much and you don’t reach a reasonable consensus?

### Audrey Tang:

Over the more than 100 collaboration meetings, exactly zero of them ended in disaster. We’ve had a really good record, and the reason why is that you can always make the thing more specific. For example, in the Uber case, we started saying, “What are we going to do to the sharing economy?” Then it may not converge — it may just diverge because it’s too broad and people don’t actually mean the same feeling when they say things about the “sharing economy.” People may prefer, actually, to call it the “gig economy” or the “platform economy” or things like that.

### Audrey Tang:

But when we say “licensed (but not professionally licensed) driver commuting to work, picking up strangers, charging them for it,” then it’s so specific that people of very different ideologies nevertheless share the same feelings more often than not when it comes to insurance, for example. If you look at the conversations and feel that it may be diverging, then it can always be improved by restating the question in an even more specific way.

### Rob Wiblin:

I see. It sounds like, to some extent, this is a tool for having extremely productive and clear conversations across groups of people who don’t agree. It’s through that very good communication, and being very clear about what you are saying and aren’t saying, and not amplifying the views of people who are going to derail the conversation — in general, that then leads to, if not universal agreement, at least a reasonable majority opinion that you can then go with.

### Audrey Tang:

Because there’s no reply button, there’s literally no way to derail the conversation.


### Rob Wiblin:

Right, yeah. I was going to say, one part of your vibe is that people should be able to share their opinions, they should be able to make the tools that they want, society should be very open, we want people to contribute their ideas. But then I’ve heard on your other interviews, you say that a key design aspect of Polis is that there is no reply button, so people can’t —

### Audrey Tang:

That’s right.

### Rob Wiblin:

Why do you think that sort of closure to response is really valuable in that case, even though in general, we want people to be able to provide their opinions? That’s the key goal.

### Audrey Tang:

Because we’re talking about a public issue, which is by definition interpersonal. And taking an interpersonal statement and making it personal — as in a personal attack — is almost always unconstructive.

### Rob Wiblin:

So if someone’s saying something that I disagree with, how can I contribute my rebuttal, or my alternative opinion?

### Audrey Tang:

You just press “disagree” on the statement. Then you frame your own feelings, your counterargument, in an independent statement that other people then agree or disagree on.

### Rob Wiblin:

I see. Do you think that in general, this is a useful way that people could have better conversations? Not just on this platform, but in general: rather than responding, instead you just state more clearly your view and then try to get people to agree with that?

### Audrey Tang:

Yeah, basically [forking](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) — rather than fighting to get your commits committed, you fork and then your commits are automatically committed.

### Rob Wiblin:

The key difference there is that because you are not attacking or directly responding to a specific individual, it doesn’t become personal. You don’t get as strong negative feelings coming up.

### Audrey Tang:

Exactly.

### Rob Wiblin:

OK, yeah. That’s super interesting.


### Rob Wiblin:

What’s the most difficult case that you’ve dealt with on the platform?

### Audrey Tang:

There’s multiple cases that were very difficult to solve in an abstract sense. For example, generally the same rights and duties for marriage equality — that’s a petition topic that was constantly reoccurring before we actually legalized marriage equality. Of course, it is a difficult conversation with 20 different national languages — so many more cultures in Taiwan — the meaning of marriage is different. There’s people who believe that marriage is between two families, and the individuals are just their representatives. Or there’s people who believe that a wedding is between individuals, and their families have no say in it, and so on. It’s a very difficult solution space. It’s highly multidimensional, so to speak.

### Audrey Tang:

The way to solve that is not to make it even more complicated; it’s rather to reduce it to very individual things. For example, at the time marriage equality was not legalized, we had a very successful collaboration meeting on the rights of the women who are not in a heterosexual marriage to be receiving the state subsidies for artificial insemination. So it became so specific, and the stakes are mostly for people in the future generation, who literally have not been born yet.

### Audrey Tang:

It became quite easy, actually, for people of different religions, of different traditions, and so on to talk about this very specific case — preparing the society to be more accepting. Actually, it covers single-mother families too and so on, so basically makes it more intersectional and inclusive. And we did get a pretty good rough consensus based on that collaboration meeting, but that’s because we didn’t try to define marriage in that meeting.

### Audrey Tang:

As those very specific rough consensus are produced more and more, people will begin to see — and they did see in Taiwan — that actually, we’re not that different. People care about the importance of a long-lasting relationship. And maybe we can solve this mother-in-law, father-in-law question by saying, “When homosexual people wed, their families don’t,” so there’s no in-law relationship — just a by-law relationship.

### Audrey Tang:

Basically, innovations start to come up if you have some initial success in getting the rough overlap in consensus on specific issues. Finally, when we actually legalized marriage equality after two referendums, then we actually took in a lot of those innovations, including marrying the by-law but not the in-laws.

### Rob Wiblin:

It seems like a really key phenomenon here is that the more specific the question, the more agreement you have. And it’s super interesting that that’s the case. The US, in this exact moment in time, seems particularly bad for people talking at a very abstract level about values — and that seems to amplify disagreements.

### Rob Wiblin:

It reminds me of this case I heard: if you ask people are they in general pro–gun rights or anti–gun rights, then they tend to split pretty 50/50. But the more specific you are, like, “Should someone be able to buy this gun under this condition and carry it in this location?” — more concrete, specific questions tend to have much more agreement than the general values questions. Why do you think that is?

### Audrey Tang:

Well, mostly because the feelings about specific cases feel relatable, but feelings around abstract ideologies aren’t that relatable. There’s much more psychological projection going on when you see a loaded term, but when it’s very concrete, there’s not that much room for psychological projections to take place. And people generally converge on a shared understanding of what’s actually going on when you become that specific.

### Audrey Tang:

Also, it makes tradeoffs seem not like tradeoffs, but opportunities for innovation. Because in specific cases, there’s always the possibility to resolve previous zero-sum tensions by introducing some new innovations to the table. If it’s time-honored, ideological debates, it’s very difficult to find genuine innovations that solve such zero-sum tradeoffs.

### Rob Wiblin:

Yeah, that makes sense. I guess it is the case that we get stuck and talk the most about the stuff that is the most intractable, because the other things have been solved and we’ve moved on.


### Rob Wiblin:

A concern that I would have with Polis, or potentially all platforms of this kind, is that the people who participate in them could well be non-representative of the population of Taiwan as a whole. In particular, you imagine people who are working full-time, people who have children, for example — they might have particular views in general, but they won’t have as much time to participate in these online platforms, proposing their views and voting on them. And so they could be underrepresented. What can you potentially do about that?

### Audrey Tang:

Which is why we don’t measure head counts.

### Rob Wiblin:

So do you do some weighted voting?

### Audrey Tang:

No, people who vote the same are counted as just one dot. So we’re measuring the general plurality. The spectrum.

### Rob Wiblin:

I see.

### Audrey Tang:

We’re not measuring majority — the term “majority” doesn’t even enter the conversation. The supermajority means if you take each unique cluster of feelings as a representative — it doesn’t matter its constituent count; it’s the configuration of preference that counts — then the supermajority is between those clusters.

### Rob Wiblin:

Wow. OK. So if me and someone else, we both basically have exactly the same opinions, the same feelings towards all of the statements that people put forward — then we’re effectively counted as one person. That then raises the alternative concern that 99% of people might all feel the same, and then they get counted as one opinion. And then there could be 1% of the population that will agree on a different thing, and they get counted equally. Is that a worry?

### Audrey Tang:

No, not at all. So of course, maybe that 99% was a [Sybil attack](https://en.wikipedia.org/wiki/Sybil_attack) — so maybe it’s all pseudonyms. Of course in practice, in the Join platform, you have to first authenticate through SMS. So we don’t know who you are, but you can’t arbitrarily create 5,000 accounts unless you can manufacture 5,000 SIM cards — where the money laundering office may want to talk to you. The point here is that it’s not limitless character generation, so to speak.

### Audrey Tang:

But even with this constraint of SMS-based authentication, if you have even just one individual who feels very different from everyone else on a high-dimensional space, then because each sentiment is one additional dimension, you can still find the closest cluster that this person drifts toward. And if they represent their own cluster, people would click on the cluster and learn about their statement. And to win on the leaderboard, you have to convince them — so you have to propose something that at least convinces the persons who are sympathetic to that person’s views.

### Audrey Tang:

So bridges are made dynamically on a high enough dimensional space, because in a high-dimensional space, actually everything is quite distant to each other. It’s hard to imagine from a three-dimensional setting, but usually in Polis, we have around 100 or 200 dimensions. Everyone is very far from each other. So we are looking at that more holistically, rather than just saying, “There’s a few outliers.” We don’t actually think in terms like that — we measure the degree of plurality.

### Rob Wiblin:

To put that in layman’s terms, if you have 100 different statements that people can agree or disagree with, then it’ll be rare for two people to agree on every single one of them. So people end up far apart in space in that sense. But then if you’re like, “In general, these people agreed on most of the answers,” then you can say, in this other sense with fewer dimensions of variation, that they’re actually quite close together.

### Rob Wiblin:

Maybe this isn’t the rabbit hole that we should go down, but I keep envisaging ways that this could be gamed in a sense. Or at least that it could be non-representative, and people might feel, “Most people agree with me, but our views aren’t getting enough weight,” and feeling frustrated by that.

### Audrey Tang:

Yeah. But the point is that you have this mental model of a jury, or perhaps of a citizens’ assembly, trying to settle a referendum decision — so a body that has decisional power. But as I mentioned, what we’re crowdsourcing is just an agenda. It’s at the very beginning; it’s at the problem definition stage. So it’s essentially just brainstorming.

### Audrey Tang:

When you’re brainstorming, statistical representation doesn’t really matter. What you want is a space where it’s very difficult to shout someone down, because it’s important for the embryo — the beginning theoretical of an idea — to be resonating with a supporting infrastructure, so that it can grow into something that actually is a general innovation out of this wicked problem configuration.

### Audrey Tang:

So it’s more like an incubator stage of ideas. When the agendas are created, they’re not binding in a decisional sense. It’s only binding in a sense of agenda setting: the stakeholder must talk about these things, but it’s not decisional. So it relieves most of the tensions that we attribute to the final allocation of decision-making power, like in a jury.

### Rob Wiblin:

Yeah. Interesting. It sounds like the thing that you are really incentivized to do is to make a statement that people in other clusters will agree with. So people who usually disagree with you, you’ve got to say something that you believe that they also believe. This incentivizes you to understand their position and find common ground, basically. And why is that my incentive? Because then those shared views basically get elevated, and those are the things that potentially go forward in the process as the design criteria.

### Audrey Tang:

Those become the design criteria for policymaking. Yes.

### Rob Wiblin:

Wow. Yeah. There’s a lot more that I’d love to have said about this. I’m guessing this is in Mandarin, right?

### Audrey Tang:

Well, there’s papers published, especially on [the Uber case](https://compdemocracy.org/Case-studies/). So a lot of it, if you go to [pol.is](https://pol.is/home), you can find the studies and mathematical analysis and things like that.

### Rob Wiblin:

Yeah. We’ll stick up a link to that. And I might get some more links from you, because I think this is a super interesting system, and I’d love someone in the audience to try to carry it forward and try to apply it outside of Taiwan.

### Rob Wiblin:

Is there any downside to these kinds of direct democratic systems? Maybe ordinary people feel like they have to be participating in this public platform or other platforms, when they would rather be taking care of their children or doing their job or playing sports or pursuing other hobbies? Is there any sense in which this is a burden to citizens?

### Audrey Tang:

It’s unlike a jury where you have to participate, right? But it is fun, like a game. As I mentioned, everyone probably has two minutes of kindness. So taking two minutes out, I mean, people do internet surveys all the time. So if it just takes you two minutes to do an internet survey, and it has a real policymaking opportunity, then people generally are happy to do that and share with their friends and families. But if it means going through a huge amount of threads — and threats — and so on, then of course it is less attractive to people.

### Audrey Tang:

So a lot of thought has been given to make sure that the time feels rewarding, and you don’t have to spend a lot of time on this kind of platform. Because we cherish people’s time. And we also want to make sure that they want to participate in a diverse range of these petitions or surveys or brainstorming spaces, without being kind of over-captured by any one particular topic, unless of course they feel really motivated.

### Rob Wiblin:

Yeah. I was thinking with the feeling of obligation to participate, people might feel that, “I really need my views to be counted. I really need the views of people and people like me to be included.” I guess, because you’re not doing the head-counting thing because it’s not a voting system, you don’t have to worry so much. Because as long as there’s a few people who share your values on the platform —

### Audrey Tang:

Exactly.

### Rob Wiblin:

— then you don’t have to get involved in order to make sure that you are dominating — or getting a big weight in the conversation, which is quite different.

### Rob Wiblin:

Another concern that many people, including me, have with these more direct democracy participatory things is that, with the Uber case, there’s presumably some academics, some real experts in this question of sharing economy — How has Uber gone well or badly in other countries? — who might have a lot more expertise to bring to the table when it comes to drafting legislation on how to deal with it. And just an ordinary person — someone who’s participating in this talking about how they feel as a rider or as an existing taxi driver — is going to know that literature much less, and there’ll be some things that they’ll miss. But it sounds like you don’t throw out that expertise of legislators or of academics.

### Audrey Tang:

Not at all, not at all.

### Rob Wiblin:

Because it comes in at the next stage.

### Audrey Tang:

Yeah. They are the people who participate in the multistakeholder forum.

### Rob Wiblin:

OK. So that’s the next stage of the process, where…?

### Audrey Tang:

The face-to-face, livestreamed, multistakeholder forum, where we agree to bind ourselves to talk about the Polis crowdsourced agenda — and only this — as the agenda. So the expertise, as you mentioned, in comparative legislation and things like that is used to find good solutions within the broadly defined solution space.

### Rob Wiblin:

I see. So then you’ll have a livestreamed discussion, where you’ll invite a whole lot of people who have been selected by someone for some reason — because they know a lot about this topic or they’re representative of a group. And they’ve committed to talking about the shared values, or the shared desiderata, that have come out of these desired policy properties. Is there anything you want to say about how those events are run that has allowed them to go better than they otherwise might?

### Audrey Tang:

Well, if you look at the Participation Officers website, [po.pdis.tw](https://po.pdis.tw/en/), or the collaborative meetings website, [cm.pdis.tw](https://cm.pdis.nat.gov.tw/), we explain our methodologies quite clearly there. And maybe we can do that as a kind of URL to link to, instead of me having to go through the whole playbook here, but there’s a methodology. And we’ve run, as I mentioned, more than 100 of those, either livestreamed or at least transcript-published recordings there. There’s many case studies also. So I would just refer you to [digitalminister.tw](https://pdis.nat.gov.tw/en/) and the two sub-sites that explain this mechanism.

### Rob Wiblin:

Fantastic. Yeah, we’ll stick up links to those. Just coming back to Polis and people making statements and agreeing and disagreeing. What are the limits on the length or the style that they can be in? Because you could, in theory, make a statement that is just a reply, that’s like, “This other person said X, and I think that’s wrong because of Y,” and then you kind of have got a reply button. Do you have to impose some constraints?

### Audrey Tang:

Yeah, usually it is around 140 characters, or 280 letters, I think. So tweet length. Basically it’s a tweet-like phenomenon. But if the statement doesn’t make any sense, people can also press “pass,” and then it doesn’t result in a move in the high-dimensional space of statements and clusters.

### Rob Wiblin:

What if I have quite a complicated argument for why I feel a particular way that doesn’t fit in that number of characters? What do I do?

### Audrey Tang:

But the thing is that the explanation — the supporting thoughts and so on — are for the multistakeholder development stage.

### Rob Wiblin:

I see. That’s the next stage.

### Audrey Tang:

Yeah. What we’re doing now is the discover stage, right? So in the discover stage, all that matters is that I feel this way. It’s more like a gut feeling than anything else. Like, X dimension must be taken care of, or you must avoid the Y dimension. Now the actual data, evidence, and so on are very important — but that’s why we have the experts on the multistakeholder forum.

### Rob Wiblin:

So this is more about aggregating values and preferences. And then the next stage is more about beliefs and empirical information and so on.

### Audrey Tang:

Exactly.


### Rob Wiblin:

Let’s leave Polis for a minute and come back to the quadratic voting. So just to explain quadratic voting briefly: basically, you get a particular number of voting credits, in effect. If you want to give a project one vote, then it costs you one credit. If you want to give them two votes, it costs you four credits — because two squared is four. Likewise, three votes costs you nine credits. So it gives you a reason to look around at a wide range of different projects, and not just put all of your credits towards your friend’s thing, or the thing that you like the most. Instead, you want to basically spread out your influence over a bunch of different projects.

### Rob Wiblin:

What’s a case in which you have been involved in an experiment or an application of quadratic voting?

### Audrey Tang:

The [Presidential Hackathon](https://presidential-hackathon.taiwan.gov.tw/en/) with the meta self-describing trophies.

### Rob Wiblin:

And what happened there? Can you talk about it?

### Audrey Tang:

Sure. Basically the idea here is that anyone can propose an idea that requires significant investment from the government in order to solve one or more of the [Sustainable Development Goals](https://www.un.org/sustainabledevelopment/sustainable-development-goals/) global challenges. Of course, there’s limited bandwidth of governments or input to ideas like this. So basically, while anyone can propose an idea, the idea that resonates with the most people eventually gets the incubation it needs to progress to the next stage. So out of, say, 200 or so projects, after a couple months, we select only 20 teams to go through the incubation. And finally, five teams receive a presidential trophy.

### Audrey Tang:

So to get from the 200 teams — each corresponding to one or more SDGs — to the 20, we ask anyone who are SMS-authenticated participants to allocate 99 points to those 200 projects. But it’s quadratic, meaning that if you really like a project, the most you can vote is nine votes, which translates to 81 credit points, because you don’t have 100. So you can’t vote 10 votes, sorry. If you don’t design things this way, most likely people just vote for their friend’s project with all their points, and they don’t even bother to look at the other ideas to find synergies and so on.

### Audrey Tang:

So the incentive here is that after voting for nine votes, spending 81, you have 18 left. People are incentivized to look at at least three other projects, because nobody wants to squander their points. So they like something else and they vote four votes — 16 — and they still have two points left. They look at two others and they discover that actually these two work better than the original ones. So they take some of the votes back — maybe they do a seven and seven, six and six and two, or whatever.

### Audrey Tang:

The point here is that on average, each person then votes for four or more, six or seven, different projects that they perceive have some sort of synergy, right? And then that’s it — then we tally the votes. The [marginal cost](https://en.wikipedia.org/wiki/Marginal_cost) of each vote is the same as [marginal return](https://en.wikipedia.org/wiki/Marginal_return), the impact of the votes, so we always get the broad set of 20 projects that makes everyone feel they have won a little bit. And then the projects that didn’t make the cut have a clear kind of synergy map, where they can reallocate their talents to the one or two of the 20 projects that actually resonates the most with them. So again, like Polis, this is a way to use mechanism design to kind of reverse gain the voting game — to make sure that people want to share the most of their expertise, and find synergies between the incubating projects.

### Rob Wiblin:

Is there a way of telling whether this has led to a better outcome in this case? Maybe you can just look at it and see intuitively that the results seem good.

### Audrey Tang:

They seem more balanced. And also, I think mostly it’s just looking at the actual voting behavior. It would fail if most of the voters just vote for nine votes, and discard the 18, right? Then it becomes the same as “one person, one vote,” just with more clicks, nine more clicks. But no, people don’t behave this way. And we publish this open data, the actual voting results of previous Presidential Hackathons, so people are free to do their own analysis. But qualitatively speaking, people really like the fact that some of their supported projects won. They also like the fact that they found some synergy between their pet projects or friends’ projects and some other projects.

### Audrey Tang:

But for more elaborate analysis, I encourage you to look at [Gitcoin](https://gitcoin.co/), which is actually putting real money on the table instead of just votes. There’s kind of an implicit funding part in it, which I think increased the payout even more. Of course, more risk of Sybil attacks too. And so [quadratic funding](https://www.radicalxchange.org/concepts/quadratic-funding), I think, exemplifies the good parts of quadratic voting that we see in the Presidential Hackathon, but we have not yet implemented quadratic funding or participatory budgeting.

### Rob Wiblin:

Yeah. A key concern that people have had with quadratic funding and with quadratic voting is that, as you were saying, people can register with an SMS. So as long as they have a SIM card, then they can potentially get a bunch more votes. And so in this case, obviously someone could sign up with a whole lot of SIM cards. And in other cases, you could potentially get an advantage by basically convincing a friend to spend some of your credit — basically coordinating in order to pretend to have more spread-out preferences than you actually do.

### Audrey Tang:

That’s right.

### Rob Wiblin:

I guess you were saying, if someone tries to order 5,000 SIM cards in order to game this system or other government systems, people will get onto them. But you could have a problem on a smaller scale — where someone has three different mobile phones, 10 mobile phones. They’re probably not going to get caught, and they could be rigging the system. Is that a meaningful worry, or is it kind of controllable?

### Audrey Tang:

It’s somewhat controllable because if someone uses three SIM cards to in very short succession vote exactly the same, then it becomes a solvable problem of bot detection. So that could be one of the ways to address this. Another way is basically instead of 200 projects as a static list, maybe the calibrating of those projects themselves are also crowdsourced, like a Polis-like situation. In Polis, if you feel very similarly, actually then you share the pool of votes. So there’s a linear part, and then there’s a quadratic part — and you only get access to a quadratic part if you’re actually diverse enough, and so on.

### Audrey Tang:

So you can combine those design principles in various different ways, but we’re not doing a theoretical search for optimality. What we’re doing is giving a better feeling to most participants compared to “one person, one vote” — and for that, we’ve already succeeded. So it doesn’t need to be approximately optimal; it only needs to be better than what the previous technology is.

### Rob Wiblin:

Yeah. You mentioned quadratic funding, which is this more elaborate extension of quadratic voting, in a sense. Do you have plans to actually try to experiment with that in an application?

### Audrey Tang:

Yes. We would like to implement what we call the “pay for success” model, which was actually reinvented, called “[retroactive public goods funding](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c),” but it’s actually the same plan. So “pay for success” or “social impact bond” — many different names — is this basic idea that the government, instead of giving out a contract or subsidy, gives out a promise. An independent board assesses whether a project has delivered some return on investment in the social sense or in the environmental sense, and by the end of that evaluation period, the government is committed to pay out in a form of awards to the work that’s already done. The idea here is that then people can securitize this, right? They can take this governmental promise, and then start early-stage funding or whatever funding to pay for the actual investment they need to do in order to achieve that common good.

### Audrey Tang:

This innovation works really well with quadratic funding because previously, the panel of judges was either a few people that the government trusts a lot — but then maybe they’re not diverse enough — or it’s just crowdfunding — but then people with a lot more money actually speak louder almost by definition in the crowdfunding scenario. So quadratic funding is between a panel of award committees and pure crowdfunding, and chooses something in the middle that has hopefully the benefit of both.

### Audrey Tang:

But of course, Gitcoin is still experimenting a lot on preventing Sybil attacks on this middle ground, and it probably needs to be a little bit more mature before we can actually implement it in our pay for success designs.

### Rob Wiblin:

Yeah. We haven’t explained quadratic funding, because it’s a bit too technical here, but we’ll stick up a link for people who want to learn more. And I think it’s been explained on [some previous episodes](https://80000hours.org/podcast/episodes/vitalik-buterin-new-ways-to-fund-public-goods/) that we’ll link to.

### Rob Wiblin:

You’ve probably heard of citizens’ juries, which are this idea of when you have a difficult policy issue, you’ll randomly choose something like 100 citizens to come for a weekend, or a weeklong conversation or deliberation process, where they’ll try to figure out what they agree on, come up with proposals, and try to reach some broad consensus. How do you feel about that more in-person, slightly more formal approach to reaching consensus?

### Audrey Tang:

We do that too.

### Rob Wiblin:

Oh yeah. Tell me about that.

### Audrey Tang:

We do that in Taiwan. The initial design — the success criteria for the national health insurance system, the universal healthcare system that covers even dentist visits in Taiwan — was crowdsourced that way, using a [sortition-based citizens’ jury assembly](https://en.wikipedia.org/wiki/Sortition). There’s quite a few other cases as well — the repurposing of the [Chiang Kai-shek Memorial Hall](https://en.wikipedia.org/wiki/Chiang_Kai-shek_Memorial_Hall) about transitional justice is another thing that has used the sortition method.

### Audrey Tang:

And so it doesn’t feel strange. But on the other hand, it’s probably only doable on very significant worthy projects. The upfront investment on the pedagogy front, also the informed conversation front. And also giving people sufficient materials to come back to their community and share that with the people that feel similar to them — that’s also important, otherwise it loses legitimacy. And so basically it is a huge investment.

### Audrey Tang:

So for things like the Chiang Kai-shek Memorial Hall or the national healthcare system design, it of course pays off to fund something like that. But if we’re going to say, “No, let’s do a citizens’ jury on any citizens’ petition” — on each petition once a week or twice a month — it becomes hard to justify, because maybe these things like changing time zones of time, GMT+9, doesn’t really warrant this sort of investment.

### Rob Wiblin:

Not enough people agree. Yeah. In the UK, we have this system where people can put petitions to parliament, and if a particular number of signatures goes on the proposal or people agree with it, then the government needs to formally respond. And that seems fine, but I’m not aware of it making any big differences to policy, or how the public feels about their relationship with the government. Given your experiences, do you have any idea of why this hasn’t made a bigger difference, or why it isn’t more useful?

### Audrey Tang:

I think the bandwidth was lower than ours. Because if you are someone who joins in the petition to provide your signature, there’s an almost-zero, negligible chance that you will actually be consulted to co-create a solution. Basically your signature only says it’s important, and that’s all. And only the initiator maybe receives a phone call or something from the parliamentarian.

### Audrey Tang:

But in the Taiwanese design, in our collaboration meetings, all the petitioners get a formal invitation to join the multistakeholder conversation. And for people who don’t have the traveling conditions, they can also join us through livestreaming. Then we use another Polis-like tool called [Slido](https://www.sli.do/). Actually many people use that nowadays; it’s not just for deliberative democracy. So it’s a kind of real-time version: whereas Polis takes three weeks or more, Slido takes maybe four hours. During those four hours, listening to the livestream, people can propose their own ideas, and also upvote (but not downvote) people’s ideas.

### Audrey Tang:

So augmented with Slido and livestreaming and so on, there’s much more bandwidth to be had to the collaboration meeting as a result of the petition, as compared to simply just a textual input to the petition, or just adding your name on it. For career public service, it makes a world of difference — because it’s not just about clarifying the demand, but about innovating, right?

### Audrey Tang:

So our petition platform learns a page from Better Reykjavik from Iceland, that people actually can propose their pro arguments and counterarguments on two different columns — again, upvoting and downvoting, and again, without the reply button. So basically when we actually hold a face-to-face collaboration meeting, we take the cream of the crop on the pro- and counterarguments, and then say, “Let’s collaborate,” and take that as the design criteria: “These are the things that we must take care of. And these are the risks and dangers that we must take care to avoid. Let’s co-create something that’s better.” Then it’s much more input that’s more likely to result in something that reduces the burden and also reduces the risk for the career public servants involved.


### Rob Wiblin:

Let’s move on and talk a little bit about your personal history. It seems you seriously got involved in politics in 2014, when you got involved in the [Sunflower Student Movement](https://en.wikipedia.org/wiki/Sunflower_Student_Movement). What were your goals when you got involved in those student protests?

### Audrey Tang:

To make sure that humor and facts spread faster than rumor. Because at the time I’d already read a sufficient amount of [Manuel Castells](https://en.wikipedia.org/wiki/Manuel_Castells) and other [Occupy movements](https://en.wikipedia.org/wiki/Occupy_movement), and seen how they could spiral out of control. So there’s a lot of hope, a lot of social solidarity and so on, but it’s also very easy to get nowhere — because of the infodemic, essentially. There’s just so much information on so many different accounts; it feels very difficult actually to get listened to. And as the Occupy movement continues, it becomes harder and harder to get into something of a coherence, because it’s all-inclusive: anyone can join the conversation.

### Audrey Tang:

So the main contribution that g0v, me included, made is to make sure that there is this consistent kind of public ledger of what conversation actually transpired within the occupied parliament, and in the street near the parliament. The 20 or so NGOs all contributed to be more specific — so one corner talked about labor conditions after the Cross-Strait Agreement, one talked about cybersecurity and 4G and things like that. So basically each became a more focused conversation, facilitated by professional facilitators. And our work was just to make sure that those rough consensuses cross-pollinated more easily — because after all, we all want this demonstration to go somewhere instead of nowhere. So that’s my motivation.

### Rob Wiblin:

So when the protests occupied the parliament, basically you conducted your own parliamentary proceedings of a sort, where you had your own deliberations about different topics. How were they different or more open than what the parliament was already doing?

### Audrey Tang:

As I mentioned, it’s essentially [Open Space Technology](https://en.wikipedia.org/wiki/Open_Space_Technology), right? So it’s not just the parliament itself, but the streets around the parliament and each non-governmental organization. Part of the Occupy movement can set up their own forum, and they need to be interesting, because people vote with their feet, right? So it’s just this giant Open Space Technology, facilitated in a nonviolent manner.

### Audrey Tang:

Our work as recorders and documenters is to make sure that the topics themselves don’t diverge. Instead, because the proceedings are captured — the rough consensus are captured — people can start a day not from a blank state, but from the kind of rough consensus that came from feelings as agreed upon the previous day. This made the overall collective intelligence converge — very, very gradually, but eventually — on a set of demands that are coherent in themselves.

### Audrey Tang:

And because of their livestreaming, violence doesn’t pay, because the perpetrators are discovered very quickly. And also because of the livestreaming, the rumors that tend to kind of pollute the Occupy movements — like one corner is under political assault by the police and so on — these things don’t spread, because people can then check with their phone on the livestreaming that they’re actually doing quite well. So basically more bandwidth, and then more truth, and less need to believe the conspiracy theories and so on.

### Rob Wiblin:

I imagine that critics at the time would’ve said you’re just a non-representative group who feel very passionately about this issue. And you are taking over the parliament, but you don’t have the same legitimacy that the elected representatives, who were elected by the majority — or at least the plurality — of people, have to be doing these proceedings in parliament. There’s a reason why people can’t just walk into parliament and take a seat. What’s your response to that?

### Audrey Tang:

Of course, that was indeed a topic in the national forum on economic and trade, right after the occupy. But the topic was, “Can we actually do this sort of collective intelligence and deliberation, without people feeling the need to occupy the parliament all the time?”

### Audrey Tang:

So basically there was a sense of urgency, because if the trade agreement passed, then it creates a precedent of constitutional importance. Because one of the theories was that it’s just a “domestic” agreement with Beijing, so it doesn’t need the same process as other international trade agreements and things like that. So it creates a quite dangerous precedent that everything else can then be done in a similar way — and then as time goes by, basically Taiwan becomes Hong Kong, right? So that was the initial urgency.

### Audrey Tang:

Now, the constructive thing is that people have seen that deliberative conversations actually lead to somewhere — it’s not mobs if you create a real town hall. So the national forum for economic and trade basically said, “Yeah, we need to have a national petition platform. We need to have not seven days, but at least 60 days of regulatory conversation announcement period, like the US.” But at the time, Taiwan did a lot of regulations in just seven days, without people even being aware of it.

### Audrey Tang:

So a lot of reforms for more democratic participation was the social norm then, which was then ratified by the administration. So it’s not that Dr. Tsai Ing-wen was the first to implement these. Actually, the Dr. Ma Ying-jeou and Mao Chi-kuo cabinets, and the Simon Chang cabinet after that in 2014–15, implemented many of the sweeping reforms and changes, as demanded by the national forum on trade and economy right after the Sunflower occupy.

### Audrey Tang:

We’re not saying that we go back to the parliament all the time. We are saying we may have to do that if there’s no transparent and participatory process for things like this.

### Rob Wiblin:

In what situations in other countries now, say, would it be appropriate or inappropriate for citizens to go and occupy a parliament building and conduct their own similar thoughtful deliberations there?

### Audrey Tang:

Well, one of the main points here is the nonviolent communication nature. So it’s one thing to have a half million people listening to one another. It’s another thing to be verbally or physically abusing each other. So the term “occupy” means different things to different people — maybe we’re talking about it much more abstractly than we should be.

### Audrey Tang:

But the point I’m making is that civil disobedience in a public demonstration only works if — like in the Polis conversation — you can afford the same freedom of assembly and speech to the people who are diametrically opposed to your ideas. Indeed, during the Sunflower occupy, I also personally helped with the connectivity and the livestreaming know-how for the people who are very much pro-unification and so on. The point here is that it needs to be founded on the same democratic principles in order to have any legitimacy. If it’s about excluding people from the sort of conversation they want to have — who may actually start very differently but may converge actually — if you exclude these people, then there’s no legitimacy in Occupy anymore.

### Rob Wiblin:

Yeah, yeah. It seems like the protests have led to systematic changes in how the Taiwanese government does its business. But I guess the proximal concern, as you were saying, was this Cross-Strait Service Trade Agreement between Taiwan and China. At the time, were advocates in favor of that agreement encouraged to come and speak in parliament and make the case?

### Audrey Tang:

Yes. Yes, definitely. I think everyone — whether they’re pro or con that agreement — didn’t really want it to be passed without any deliberation.

### Rob Wiblin:

And so that was the objection: that it was being rushed through and not even being considered properly.

### Audrey Tang:

Exactly. Exactly. Because at the time, the rationale was that it is a “non-international, domestic agreement,” so it doesn’t need to go through the same process. And that’s what worries people.

### Rob Wiblin:

I see. People will know something about the relationship between the People’s Republic of China and Taiwan, the Republic of China. I’m surprised that the Taiwanese government was taking the position that an agreement with the People’s Republic of China was a domestic agreement rather than an international treaty. Why? Were they doing that out of political convenience?

### Audrey Tang:

Part of that maybe is that. And I certainly can’t speak for the Ma Ying-jeou administration. But I think partly it is also because, at the time, there was a kind of global hope that by including more and more into the World Trade Organization, and the free trade kind of rule of law and international norms, the PRC itself will democratize. So around the turn of the century, many people actually believed that, and I’m sure some of them still believe that. And so it was under a very different political atmosphere, is what I’m trying to say.

### Rob Wiblin:

Right. Yeah. With the benefit of eight years of hindsight, are you glad that the Cross-Strait Service Trade Agreement was never actually signed and implemented? That it was prevented from going through?

### Audrey Tang:

Well, I’m glad that deliberative democracy is now seen as pretty legitimate in Taiwan. I’m glad that the demonstration means that the public servants don’t fear 5,000 people — they now treat 5,000 people signing their online petition not as mobs, but as co-creators. So the demonstration itself, in the sense of a demo, worked as a proof of concept very well.

### Audrey Tang:

Whether that trade agreement itself makes sense or not, I don’t think that’s very easy to answer, because the configuration in 2014, nobody would anticipate the kind of different geopolitical issues that we now see today. So I wouldn’t say I’m glad that it didn’t pass, but I would say that I’m glad that the fact that it’s passed in such a rushed manner invoked the civil society to give legitimacy to the social sector, and to social sector–led innovation processes.


### Rob Wiblin:

Let’s move on from the Sunflower Student Movement and talk about technologies, broadly construed, that you’re excited and not excited about. If you were 18 again and needed to work on some kind of technology-focused project, what’s one idea for something that you might choose?

### Audrey Tang:

Well, I’m still working on the same project, right? Democracy as a social technology for swift trust and things like that. That was my research topic when I was 15. So I guess I never switched to a different project. I’ve been working on the same project.

### Rob Wiblin:

If you had to work on something else, what might it be?

### Audrey Tang:

One of the ideas now in deliberative democracy, as you have mentioned, is a more analog part. We talk about digital democracy — livestreaming and things like that — but there’s an equal analog counterpart that focuses on the kind of people-to-people relationship, resonating with people, nonviolent communication on an almost physical sense, and so on. I think that part is equally important — community organization and things like that are equally important.

### Audrey Tang:

And I think it’s just a kind of coincidence that I was a pretty good programmer (if I may say so myself), and I encountered a free software movement and open source movement that gives rise to this kind of collaboration-at-scale thing. But before I was part of the internet, so to speak, when I was 12, I actually participated a lot in the local cooperative movements when I was eight or nine — consumer co-op in particular, but also many other community organizations on the face-to-face scale.

### Audrey Tang:

So if I’d not encountered the internet, I would probably be spending more time on democracy as a social technology in a face-to-face setting. Maybe I’d dedicate more of my time there if I had not encountered the internet so early.

### Rob Wiblin:

Is there any other area of emerging technology that you think of yourself as more excited about than other people are?

### Audrey Tang:

Well, I’m pretty excited about democracy as a social technology. I don’t think many people see democracy as a set of technologies yet, but I think that’s a very useful view, because when you analyze democracy in terms of social technology — of bandwidth, of latency, of things like that — then new modes of thought become more natural. If you think of democracy as mostly just juries and voting in ballots of presidents and so on, then of course you worry about non-representativeness, non-statistical balance, things like that. But if you analyze it in terms of a high-dimensional, high-bandwidth, collective sense-making apparatus that it is, then a lot more solutions and innovations would become possible to experiment with — at least before, of course, ratifying it as norms over laws.

### Rob Wiblin:

This is slightly random, but how do you feel about parliamentary democracy, like the sort of thing you see in the UK, as compared to the presidential republic style of government that you see in the US?

### Audrey Tang:

Taiwan is quite unique here, because I’m a double appointee. The people’s general election elects the president, who appoints the premier. Our premier, Su Tseng-chang, is now exactly three years in the premier position — so a very stable premier and cabinet. And then the premier appoints us as ministers. So basically, I’m kind of an at-large minister without a portfolio. We’ve got nine seats that work in an interagency fashion, and I think a supermajority of us are nonpartisan. Actually in the whole cabinet, including other ministers, there’s more independent nonpartisan people than people of any party. And that’s only possible if you have this kind of double-appointee system.

### Audrey Tang:

If you have a parliamentary system, by necessity we’re all MPs — answering to our parties and constituents and so on. But the Taiwanese system has this distinct benefit where the cabinet takes care of the initial discovery of interests and defining common values. And then the party politics enters in the parliament — which is a different branch — and that has your more usual party politics going on. So we’re in a remarkably nonpartisan setting, in which that digital democracy project like this is, as I mentioned, widely agreed by all four parties in the parliament. As a kind of lab for digital democracy, I think this setting — this nonpartisan, transpartisan setting — is more conductive. But I can’t speak on behalf of other parliamentary system designs.

### Rob Wiblin:

Is there any emerging area of technology, either science and tech or social technology, that you are maybe more worried about and nervous about the implications that it could have than other people are?

### Audrey Tang:

Not particularly. I happen to be quite optimistic in the capacity of democracy to overcome emerging issues — whether it’s overcentralization of data by way of authoritarian intelligence or AI, or whether it’s imbalance of power because of the centralization of computing resources and so on, or disinformation because of over-incentivizing shallow engagements and outrage. These are issues, of course, but we’ve seen this before — we’ve seen the initial spam issues around the turn of centuries and so on. And I tend to believe in internet governance and a liberal democratic order that can actually surface the innovations as rapidly as the threats to the liberal democratic order.

### Rob Wiblin:

To what extent do you think that advances in artificial intelligence that may well come over the next 100 years are a threat to the liberal democratic order?

### Audrey Tang:

As I mentioned, if it evolves to the direction of authoritarian intelligence — in which the data collection is not consensual, in which the application of data (including its bias) has no way to appeal or at least compares badly to the judicial way of getting appeals done and so on — then of course it’s quite worrying. But the fact that we’re talking about this means that people already worry about it sufficiently — that people are working on tackling this very problem to make what I call “assistive intelligence” or “augmented collective intelligence” the predominant norm, at least in pro-democratic countries. Like the [Global Partnership on Artificial Intelligence](https://gpai.ai/), focusing the AI research on that particular value system.

### Audrey Tang:

So just like the invention of fire: of course I may worry that fire will destroy entire cities. But if a sufficient amount of fire wielders are worried about the same thing, then we teach young people to use fire responsibly — via cooking classes and sharing open recipes as early as kindergarten — and then we design our building materials with fireproof materials.

### Rob Wiblin:

Speaking of which, two years ago, you sounded really excited about brain-computer interfaces, like the kinds of things that [Neuralink](https://neuralink.com/) is trying to develop.

### Audrey Tang:

I still am.

### Rob Wiblin:

You still feel that way? Why is that? Tell us about why it will hopefully be useful.

### Audrey Tang:

Yeah, and I don’t mean Neuralink specifically. I mean things that build empathy in a more non-psychological projecting but actually inter-subjective way. The reason why is that for people who feel very differently, mostly that’s because it’s very difficult to put oneself in another’s shoes if we don’t share a significant living experience around the topic that we discuss. So the fundamental limit of Polis-like technology is the shared experiences that people have when they look at the same concrete statement.

### Audrey Tang:

Now, immersive realities — especially interactive games in immersive realities, what I call “shared reality” — is a kind of natural solution. Basically I arrange the immersive reality — my reality — digitalize it. Invite you into my reality — maybe very briefly, just a couple minutes. Then that does more than pages and pages of words to convey the previously immeasurable things that I value to you, right? So if immersive reality can do this very quickly, then the question is how to model that immersive reality. Does everyone need to learn Blender or UNITY or things like that? Or whether some sort of just free association from the brain or from some artistic media can translate easily to the sort of reality-shaping models. And that’s why I’m excited.

### Rob Wiblin:

Interesting. I suppose I’m a little bit skeptical about the brain-computer interface. When I think about people having empathy and understanding one another, it seems like we already have a reasonably high-bandwidth technology for developing that, which is language — people talking to one another, and I guess as you’re saying, also artistic expression of visual media, like cinema, say. And I wonder what input can you stick in, using electrodes directly connecting to the brain rather than the eyes or the ears, that would allow people to understand one another better than what we already have? Or maybe I’m misunderstanding the proposal.

### Audrey Tang:

No, you’re not misunderstanding the proposal. No, I’m not saying that it replaces any artistic medium or videoconferencing medium or things like that. I’m more saying that it manages the attention more effectively — like allowing the same set of nonverbal or microexpressions to survive internet transmission. Because if you have suffered Zoom fatigue before, you know exactly what I’m talking about. It is just very difficult to sustain your attention, even in together mode, like in Skype or Teams, to more than say three persons over the two-dimensional screen over say 20 minutes. It is just that we’re not designed to do that.

### Audrey Tang:

But on the other hand, if — instead of capturing all the microexpressions, which is rather difficult — we capture the intention, and then just reapply that skin to the avatar. Or as many WaveNet-like systems are now doing, you can convey using your verbal tonality and things like that. Such nonverbal expressions — even in a relatively low-bandwidth microphone or earphone and things like that — adds a different, nuanced layer, so that we can actually stay focused and on topic, even though we’re technically in different spaces.

### Audrey Tang:

And maybe it’s not about electrodes — maybe it’s about detecting your finger and muscles on your arms and things like that. But what I’m trying to say is that a higher-uplink bandwidth of the nonverbal parts of our body — preserved and transmitted accurately to the counterpart across the screen — I think aids the bandwidth of the nonverbal product communication, lest only the kind of verbal rational edited part of our statements survive internet conversations.

### Rob Wiblin:

What application of decentralized ledger technology, more often called blockchain technology, do you think will be of greatest value over the next decade?

### Audrey Tang:

Still Git. I believe Git is very important and it is a distributed ledger, mostly publicly.

### Rob Wiblin:

You mean GitHub, which stores people’s codes…?

### Audrey Tang:

Yeah, sure. Because Git is a distributed ledger, right? It doesn’t have this built-in financial incentive to make more commits, but fundamentally Git — and decentralized version control systems in general — makes it possible to even consider having a soft fork. Without decentralized version control systems, back in the bad old days of [Concurrent Versions System](https://en.wikipedia.org/wiki/Concurrent_Versions_System) and so on, its fork is a politically aggressive movement — because all forks are hard forks; it’s almost impossible to reconcile. And this whole philosophy of coherent, eventually consistent ideas of a basically swarm-like structure — people just doing whatever they feel like, but almost magically their innovations can survive their individual projects, and go back through the conflict-free replicated data.

### Audrey Tang:

That is, I think, one of the most fundamental insights, brought first to software engineering, but now through collaborative spreadsheets and documents and so on become kind of like the social norm. The Occupy movement and the Sunflower Movement would not succeed without collaborative note-taking software, for example. So I think that ledger is often overlooked, but I think it’s the kind of fundamental ledger of our times. The [CRDT (Conflict-free replicated data type)](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) is based on decentralized version control.

### Rob Wiblin:

Sounds like I’ve got to learn more about what Git is. Is there any technology or social norm or system that could be deployed in Taiwan that would help maintain its people’s freedom, even if the island were to later be taken over by the People’s Republic of China?

### Audrey Tang:

Well, it depends on the kind of takeover, right? It’s a hypothetical question that has no good answers. I think the point I’m making is that the Taiwan model doesn’t need to run only in Taiwan, and indeed the individual pieces — Polis came from Seattle, the pro and con petition from Reykjavik, participatory budgeting from Madrid and Barcelona, and so on. Basically, we’re just one tentacle in this digital democracy tribe, so to speak, to advance pluralism in the digital era.

### Audrey Tang:

And I see myself, as reflected by my background, basically as kind of a projection from the digital native tribe to the governance system of Taiwan. But there’s many other parallel experiments going on. And I think already these experiments, thanks to podcasts such as this one, travel to all sorts of places on this planet. And it will probably survive no matter what happens to Taiwan.

### Rob Wiblin:

Is there any technology, or just anything that you wish had been different about Hong Kong that would put it in a better position now, now that the Communist Party is taking more control?

### Audrey Tang:

Well, as I mentioned, I think the insights that Hong Kong people co-created during the first [Umbrella](https://en.wikipedia.org/wiki/Umbrella_Movement) and then later on the [Anti-ELAB](https://en.wikipedia.org/wiki/2019%E2%80%932020_Hong_Kong_protests) and so on movements, already impacted not just the Taiwanese activists, but people around the world. Actually the cities that I mentioned, many of the activists there specifically said that they learned this from [LIHKG](https://en.wikipedia.org/wiki/LIHKG), or they learned that from Anti-ELAB, and things like that. So I think when viewed from the kind of very high-level view of co-creation of new norms and new innovations, the legacy is already there. We’re already talking about leaderlessness, talking about “[Be water](https://www.independent.co.uk/news/world/asia/hong-kong-protest-latest-bruce-lee-riot-police-water-a9045311.html),” talking about this in a way that people simply can’t ignore that there’s a proof of existence — that demonstration actually worked to realize these principles.

### Rob Wiblin:

Yeah. Over the last year or two, I’ve heard more active fears that China might be going to invade Taiwan, or try to take over Taiwan, relatively soon. If it does that, how do you think you might personally respond?

### Audrey Tang:

Again, it depends on how exactly.

### Rob Wiblin:

I suppose initially you might not know how it will play out.

### Audrey Tang:

Right? Because there’s many, many different ways that it may play out. And as I mentioned, the Ministry of Defense never stationed any secondment to my office. So, I know absolutely nothing about how exactly that may play out.

### Rob Wiblin:

You have no inside info.

### Audrey Tang:

But of course, what we’re now doing is essentially getting the message out that [Taiwan Can Help](https://taiwancanhelp.us/). Not just to improve agricultural products or public health — which are actually some things we did make a lot of contributions to the international community — but now also digital democracy. And many things around digital issues that we have, I wouldn’t say best, but somewhat better practices, that we’re happy to share with other people. I think this is also part of the safeguards, because then people care more when Taiwan faces a more adverse situation.


### Rob Wiblin:

You personally describe yourself as a sort of anarchist — a “conservative anarchist,” you say.

### Audrey Tang:

Conservative. Small-c.

### Rob Wiblin:

Yeah, conservative anarchist. Given that, would you probably rather emigrate than live under control of the Chinese Communist Party, or even partial control of the Chinese Communist Party? Because I think it’s fair to say that they are not anarchist — conservative or otherwise.

### Audrey Tang:

Huh. Well, again, this depends on exactly how the hypothetical situation plays out. So I can’t really answer that concretely, because it’s so hypothetical.

### Audrey Tang:

But I want to clarify — lest people think I’m bomb-throwing — I want to clarify on the anarchy thing. The basic idea of conservative anarchism, as I put it, is it doesn’t destroy any existing institutions. It’s a fundamental respect for the traditions in Taiwan, 20 national languages, many Indigenous and other traditions. So honoring those traditions — not trying to disruptively innovate to put them out of business. But then it’s ‘small c’ conservative. So, it means that I ask myself to honor the traditions, but I don’t prohibit you from challenging the traditions. In a sense, it’s like the internet’s [Postel’s Law](https://devopedia.org/postel-s-law): be conservative in what you do, but liberal in what other people do.

### Audrey Tang:

That’s the conservative part. The anarchism then, seen in this frame, means simply that I don’t coerce you to do things. I do not accept coercion as a way for me to do things — it’s always by voluntary association. So if everything is voluntary association, then basically it means that what we need to worry about mostly is insufficient information and so on, which goes back to the well-informed citizens in public, and things like that.

### Audrey Tang:

So it’s not about destroying institutions by bomb-throwing, but rather to work with — not for — existing institutions, including the state. And then work out a way to voluntarily make the coercive power of the state lessen and fundamentally obsolete. So it’s very [Buckminster Fullerian](https://en.wikipedia.org/wiki/Buckminster_Fuller). So work on new systems that make the old ones eventually obsolete, without even disrupting or changing the old institutions.

### Rob Wiblin:

How is your style of conservative anarchism different from a kind of moderate libertarianism? Because I guess libertarianism would be a more familiar term, in the US anyway.

### Audrey Tang:

Yeah. I think the difference is that when you hear “libertarianism,” usually it puts first and foremost the subject of the individual. But when I say “conservative” (with small-c), I put the first and foremost important thing as the social groups. So for example, in Polis, it’s the cluster that has votes, not the individual that has votes. But the individual, when they differ from one another sufficiently, they form their own cluster. So we’re not putting a cap on the kind of social groups that may exist. But once the social group exists, it takes foremost precedence on setting their own rules or their own norms and things like that, as peers to other institutions or other groups. So I think this group-oriented intersectionality isn’t what people usually associate with the term libertarianism. Or maybe I’m wrong, but correct me if I’m wrong.

### Rob Wiblin:

Yeah. I think libertarian political philosophers would strongly sympathize with what you’re saying. If I understand it right, something like the individualist liberal anarchist part is that you get to voluntarily associate with the groups that you want to be a part of — so you’re not forced to participate in a community that you don’t want to participate in. But then having done so, there will be social norms, there will potentially be constraints on your actions, or expectations that you may or may not agree with. And your choice, if you don’t like that, is to go and join a different community, a different group.

### Audrey Tang:

To fork.

### Rob Wiblin:

To fork, basically. Yeah. Well, I don’t know what individual libertarians think, but I think people who’ve thought about this more deeply think that this is kind of the vision that seems more viable. I mean, there might still be problems, but…

### Audrey Tang:

Yeah. To fork a corporation, for example, is just to start a startup, right?

### Rob Wiblin:

Yeah. Right.

### Audrey Tang:

So there are equivalents in the more startup-oriented libertarian thoughts. But truth be told, people don’t usually think of starting a new co-op or credit union or advocacy group and so on as starting a startup. So there are still very different tones of a more purpose-led or a more profit-led interpretation of the term of “forking” your social group.

### Audrey Tang:

And I’m specifically referring to the existing purpose-oriented, organized institutions as the kind of baseline, the main line. I don’t think that’s what corporate libertarianism is focusing upon — they’re mostly focusing on corporations as kind of initially [legal fiction](https://en.wikipedia.org/wiki/Legal_fiction), but more and more reality and things like that — which I sympathize with, and of course has a role to play within the whole plurality of things. But as you can see, mostly the taxi unions — they have at least as much of a say as Uber, the company, in the Polis design.

### Rob Wiblin:

Yeah. I guess anarchists and libertarians both have a lot of reluctance to force people to do things — especially using violence to force people to behave one way or another. What’s the limiting principle for you? Under what circumstances is it acceptable to coerce someone into doing something?

### Audrey Tang:

I don’t know.

### Rob Wiblin:

So in the case where people can move community completely, an immediate objection that some people would have would be, say, what if all of the billionaires went and formed their own community? And they set a minimal tax rate — 1%, 0% — because they didn’t need —

### Audrey Tang:

I’m sure people do that in Second Life.

### Rob Wiblin:

Right. But if they did it in the real world, then we could no longer use taxation as much to help poor people, say. That would be a very common objection that you might get from many people.

### Audrey Tang:

Yeah, definitely. And of course, given resource constraints… For example, when there was no sufficient amount of mask production, I also helped in visualizing the fair distribution of rationed masks.

### Rob Wiblin:

Yeah.

### Audrey Tang:

Rationing is a sort of coercion, because you can’t really buy your freedom, or hoard all the masks to sell to people for profit. But on the other hand, instead of insisting on rationing masks — we actually initially produced less than two million masks a day in a country of 23 million — but we quickly ramped up the medical-grade mask production to more than 20 million a day. In which case, the rationing is still there to protect the people who are less well-informed or less economically affordable, but then there’s a parallel fashion industry of people wearing pink masks and rainbow masks and things that express themselves.

### Audrey Tang:

So basically what I’m trying to say is that, of course when the resource is scarce, some sort of a coercion — applied in a fast, self-corrective, and fair fashion — is probably inevitable. But this must not blind us to the possibility of innovation that would then enable abundance.

### Rob Wiblin:

Yeah.

### Audrey Tang:

And then the sort of soft forking possible. Of course, by last year, we’d stopped mask rationing altogether in the convenience stores, because people can freely buy masks in convenience stores.

### Rob Wiblin:

In listening to some of your previous interviews, you were saying that an example of your conservative or conservationist instinct is that you would like to see Taiwan’s numerous smaller Indigenous languages preserved and ensure that people can continue to speak them, even though Mandarin is probably quite dominant. A hypothetical way that things could go that highlights the tension between the anarchism and the conservatism is that a whole lot of people in these smaller groups decide that they would rather speak Mandarin, because it’s more economically beneficial. It’s more practical to speak a language and write in a language that many more people can understand.

### Rob Wiblin:

And so just through voluntary choice, voluntary association, these languages gradually become less useful to speak, and then more people peel off and stop speaking them. Then gradually they disappear, excepting kind of books by linguists. Would you want to do anything about that, or is that just acceptable?

### Audrey Tang:

But it’s not just the outflow, right? There’s also the inbound — like people who are interested in the history, in the art, in the culture and so on, who may not be born in the Indigenous nation, but nevertheless, because of advances in machine learning and Duolingo-like technologies makes it really easy for you to then speak that language with minimal face-to-face commitment required. We’re not preventing anyone from moving anywhere or learning a new language. But on the other hand, a sufficient investment could also be made to make the inbound flow easier. So not brain drain, but talent circulation, so to speak.

### Audrey Tang:

And the more you learn new languages, the easier it is to learn even newer languages. So at the end of the day, the kind of coaches one can interface with, it’s not a zero-sum game. It’s not like we have an allocated quota of languages one can learn in a lifetime. Actually, with assistive intelligence there’s probably unbounded. And so again, this starts a scarcity-oriented question in a mask-rationing era, but with sufficient innovation, it could be quite positive-sum.

### Rob Wiblin:

Yeah. In the world in which we live at the moment, it seems like there’s far more people flowing out of these smaller Indigenous languages than are flowing into them. So on net, there’s a lot of language disappearance. And I get one reason is that those languages tend to actually just be objectively a lot more difficult to learn than Mandarin or English, which have had a lot of the details stripped away because they’ve been learned by so many people as adults over the centuries, which is less common with Indigenous languages.

### Rob Wiblin:

But I guess that’s kind of the world as it is now. You’re potentially right that if we had extremely good translation AI systems that can translate between all of these different, smaller languages as well as we can translate between Spanish and English today — which is really quite a high standard — or better, then maybe that would be enough to allow them to continue to operate if people are willing to use the translation.

### Audrey Tang:

Yeah. There’s a branch called [transfer learning](https://en.wikipedia.org/wiki/Transfer_learning) that does exactly that. I think the technical term is “low-resource languages” — as long as you can trace its nearest kin of slightly higher-resource languages, they do that even recursively.

### Rob Wiblin:

I see.

### Audrey Tang:

Then actually none of those machine learning efforts put into, say, English or Mandarin is actually at a hindrance. Because through a sufficient amount of bridges, I believe it’s now off-the-shelf technology to actually apply your vocal acoustic model and then speak off those — the very different languages, it sounds like you’re speaking them. And then you can also have parallel corpus built across different low-resource languages, quite efficiently through crowdsourced lexicography. That was my work in Oxford University Dictionary: we helped to build such crowdsourcing resources, frameworks, and so on.

### Audrey Tang:

So it all depends on the kind of research funding, and venture capital funding, and all sorts of crowdfunding whether people think that direction is fruitful. And if they do, I’m quite optimistic that eventually the low-resource languages would also benefit from the general machine learning system intelligence paradigms.


### Rob Wiblin:

You seem to have accomplished a lot over the last decade, and I get the sense that the way that you work on a day-to-day basis or month-to-month basis is a little bit different than other people. So I’m curious to learn more about it. What’s a project you’ve contributed to in government that you’re proud of, other than the COVID-19-related ones?

### Audrey Tang:

Definitely the [humor over rumor](https://www.theguardian.com/commentisfree/2021/feb/17/humour-over-rumour-taiwan-fake-news) efforts to combat the disinformation crisis without ever getting to the administrative takedown stuff. Because in many different jurisdictions, we’re seeing responses to the disinformation crisis aiming at the platforms. While of course, I’m sure they behave with the people’s interests in mind, they tend to just concentrate the platform powers from the multinational corporations to the state, essentially — especially within the administration — and that creates its own power centralization problems.

### Audrey Tang:

The Taiwan model, on the other hand, basically empowered the social sector — a diverse plurality of fact-checkers, of people teaching middle schools — to fact-check the three presidential candidates, go to the tallying booths after a presidential election to livestream the tallying from various different angles, and so on. Basically, it’s a very coherent social sector–first approach that allowed people to participate in collaborative fact-checking and sense-making and so on. Which I believe is actually a more longtermism-informed way of looking at an infodemic situation, without overcentralizing power to any of the state organs.

### Rob Wiblin:

The approach of humor over rumor, just for listeners, is rather than try to get Facebook to change its policies in order to combat disinformation, instead you have a large team of volunteers who are constantly alerted to disinformation that is circulating — ideally is newly circulating. And they come up with memes that they think have viral power as a way of combating that — often using humor, because people tend to like to share funny things. So it’s using the energy of civil society in order to combat misinformation and inform people better, in a way that I think there isn’t a coordinated effort to do in the US or the UK — it’s more formal institutions and fact-checking and so on.

### Audrey Tang:

Right. So it’s like vaccines that go viral, for lack of a better term.

### Rob Wiblin:

Talking about how you get things done in a previous interview, you said that you don’t do much of the actual programming or implementation or deployment of projects anymore. Instead, you just design the spaces for people who care about a topic to make things happen. Can you elaborate on how you do that?

### Audrey Tang:

Sure. So basically, the idea is very simple. There are multiple spaces for collaboration. For example, my own office’s decision [innovation lab](https://pdis.nat.gov.tw/en/) is open for all decision innovators. And personally, every Wednesday you can book 40 minutes of my time in the office hours to talk about whatever social innovation you’re working on. My only requirement is that it’s radically transparent, meaning that the transcript and the recording — or at least one of which — is published in the Creative Commons.

### Audrey Tang:

And so people of course lobby me, but they actually just lobby the internet — the community. Because of radical transparency, people have to make pro-social arguments. It doesn’t work for radical transparency if you argue for something that’s bad for everyone else — it would look really bad. So basically, it’s not me personally that helps you out.

### Audrey Tang:

But I amplify the social innovators’ ideas — so much so that every year, through another space called [Presidential Hackathon](https://presidential-hackathon.taiwan.gov.tw/en/) in a social innovation lab, we use [quadratic voting](https://en.wikipedia.org/wiki/Quadratic_voting), both online and also face-to-face in a panel. We make sure that five teams each year, the best social innovations on a local scale receive this trophy from our president, Dr. Tsai Ing-wen. The trophy is shaped like Taiwan, but with a microprojector underneath. If you turn the microprojector on, it projects the president giving you the trophy. It’s very meta — it describes itself.

### Audrey Tang:

And it’s a presidential promise that whatever you worked on for the past half a year or so on a local scale will become public policy on a national scale — with all the personnel, budget, and regulatory support that you need within the next fiscal year, basically. So that’s a way of amplifying things. Without actually personally working on any of those Presidential Hackathon teams, I ensure that they get the support they need to scale.

### Rob Wiblin:

It sounds like you’re providing a few things. I suppose one is that you’re meeting with people, and presumably giving them advice on the strengths and weaknesses of the things that they’re thinking of working on. As a minister in the government, talking with you maybe motivates people and provides them with a sense of legitimacy for the project that they’re considering.

### Rob Wiblin:

Then you’re curating their ideas, and getting other people to basically vote on how good they think they are, in some decentralized way. And by broadcasting their ideas, you’re also potentially attracting programmers or people who want to work on those projects specifically. By publishing your conversations, they could figure out what they want to work on.

### Rob Wiblin:

Then you also have the reward that potentially, if things go well, their idea might then get scaled up to a much larger scale. So the prize in terms of social impact is larger than it would be if that were not available. Is that the majority of what you’re doing?

### Audrey Tang:

Yeah. So there’s two parts, I guess. One is, of course, making sure that ideas worth spreading spread. But in addition to just disseminating the innovations, an equally important part is to get the rough consensus — the broadly agreed-upon norms on what to do when, say, the infodemic or pandemic comes. And so this is what I refer to as “listening at scale.”

### Audrey Tang:

So one part of my work is making sure that people can resonate with one another on online spaces, such as Join or Polis and so on. Once people broadly agree on the common values — despite their initially different positions — and then the innovations that implement those values, then I give them administrative support and amplify them. And these two are like the [Double Diamond](https://en.wikipedia.org/wiki/Double_Diamond_(design_process_model)) in design thinking — they just keep iterating one after each other.

### Rob Wiblin:

People must bring you tons of ideas, and you would have to decide to work on just a tiny minority of those.

### Audrey Tang:

No, I just put it to a vote. No, just quadratic voting.

### Rob Wiblin:

Interesting. So basically, you allow the community to decide how you’re going to allocate your time to some degree. Does that create any problems where people might vote for something that you don’t personally feel that motivated by?

### Audrey Tang:

Not at all. We have another space called [join.gov.tw](join.gov.tw), where 5,000 people may start a petition that always warrants a ministerial point-by-point response. And every month, the [Participation Officers](https://po.pdis.nat.gov.tw/en/po/) — teams in each ministry of around 100 people — in total vote on two topics each month (so biweekly) that we tackle in our interagency way, orchestrated by my office. So basically, even the curation itself is distributed across the 32 ministries.

### Audrey Tang:

So when they decide, for example, they want to tackle this petition that wants to change Taiwan’s time zone to GMT+9 — it’s a real one, 8,000 people strong — and another petition that says we should remain in GMT+8, I default to the 32 ministries and their Participation Officers in curating those topics worth exploring. My personal taste doesn’t enter the picture.

### Rob Wiblin:

Right, right. So if the community strongly upvotes some proposal, what’s the way that you are most likely to be able to help it get implemented? Is it coordinating with people in government, inasmuch as that’s necessary? Or providing technical advice?

### Audrey Tang:

It depends on the nature of the ask. Most of the time they just want it to be widely known, and that’s the most easy thing. I just start a podcast, right? But on the other hand, of course, something like changing the time zone actually carries a real risk to other people who might actually oppose this idea. So then the point becomes to actually do a cost-benefit analysis on an evidence-based level.

### Audrey Tang:

So for example, we would get all the ministries actually calculating shifting one hour in a time zone: what transaction costs does it cause for the stock exchange, or even energy use, and things like that? Each ministry and agency actually calculates the cost of that. And the benefit, arguably, is making Taiwan be seen as more unique in the world. But that is questionable. So that could also be quantified a little bit by getting people from different sides to come together to look for the social return on the investment of that proposal.

### Audrey Tang:

Then people of different sides — as I mentioned, there’s 16,000 people in two very different camps — actually come and meet face-to-face, some of them anyway, and then we look at the actual benefit it would cause. And we all agreed eventually that the same investment is much better if instead of time zone change, we just make public the fact of marriage equality and Taiwan being the first in Asia, human rights, open democracy, and things like that.

### Audrey Tang:

So the value is the same — trying to make Taiwan seen as more unique in the world — but the way to implement it can actually innovate beyond the original proposal. So that’s my purpose: just to provide a space in which there is rough consensus, and then new innovations can reach people who initially may not resonate with each other, but eventually come together.

### Rob Wiblin:

I imagine that a lot of people would have reservations about delegating so much control over what they spend their time on and how things get implemented to an open community that people can easily join. I guess all of us end up delegating a lot of decision-making power to other people inside organizations that we work in, people who’ve been hired. But are there any issues with handing over so much control over your life to a group where the barriers to entry are relatively low? Or maybe in practice, people get more influence the more that they have contributed themselves?

### Audrey Tang:

Well, yes and no. The idea is that I pre-commit certain hours of my time to such endeavors, but the bandwidth of course is limited. Which is why every month we can actually only process two (not 2,000) petitions of interagency nature, and why the president can only bless five (not 5,000) Presidential Hackathon projects each year, and so on.

### Audrey Tang:

So while the bandwidth is fixed by necessity, we try to improve the latency — that is to say, to make sure that you can actually get a response here and now in a more predictable way. Having to wait 24 hours is much better than having to wait for four years to get your ideas across. The point here is that we shortened the iteration, but it doesn’t mean that I actually over-commit my time. I still only have that many hours in a day. I only commit 7:00 AM to 7:00 PM to such crowdsourced endeavors, and only during weekdays.

### Rob Wiblin:

Just so I can understand better how this community works. It sounds like there’s one part of it, which is citizens wanting to present ideas and concerns to their government. And there’s another aspect of it, which is people who want to volunteer their time to civically minded projects — potentially these are programmers or coders or developers. Are these two separate platforms? Or how do these things relate?

### Audrey Tang:

Well, the thing is that the civic tech people don’t really need a government-sponsored platform. They actually have GitLab, GitHub, and so on. So it’s not like we have to build a domestic GitHub in order for me to send a full request — GitHub is already there. The same goes for other GitHub-like spaces.

### Audrey Tang:

Only when intersecting with the decision-making process within the administration do we need the public infrastructure sponsored by the state. But in the more civic tech open source community, there’s already what I call “civic public infrastructures” in the digital realm. That’s already there, so those civic infrastructures will just be good internet citizens as participants.

### Audrey Tang:

So I invite my colleagues in the administration and the ministries and so on to send pull requests to be good internet citizens in the civic infrastructures, while of course building the public infrastructures in the digital realm, funded by the public, if we perceive that there’s no existing civic infrastructure that fulfills such a role — e-petitions and [participatory budgeting](https://en.wikipedia.org/wiki/Participatory_budgeting) come to mind.


### Rob Wiblin:

Right. To some extent, you are the representative in the government for this community, or this platform. Do you have to do any politicking in order to maintain support for it? Because people presumably have some criticisms. They might think sometimes it’s a bad way to spend money or a bad way to allocate people’s time and focus. And you might have to persuade them that no, actually this really is worth the government investing in.

### Audrey Tang:

Well, I think the implicit outside game is that if we don’t do that, the parliament will get occupied again. It’s not me doing the convincing, right? The point here is that after a powerful public demonstration, people’s norms and their expectations of the politicians changed. At the end of 2014, all the mayoral candidates that didn’t support the occupy and [open government principles](https://en.wikipedia.org/wiki/Open_government) simply didn’t get elected. And the people who did get elected, some of them didn’t even prepare their inauguration speech.

### Audrey Tang:

Basically, the citizens in Taiwan have signaled very powerfully that anything that reduces the bandwidth of citizens’ participation is a non-starter for politicians in the representative regime. So nowadays, all the four major parties in our parliament compete on how much more democratic they can be, how much more open and participatory they can be — and accuse each other for being slow and not agile in responding to the citizens. But nobody wants to go back to the bad old days of the pre–open government movement. And that’s why I think they signed on to the [Open Parliament National Action Plan](https://www.ly.gov.tw/Pages/ashx/File.ashx?FilePath=~/File/Attach/207514/File_1656306.pdf), and that’s why it’s one of the very few things that they can broadly agree on in the parliament.

### Rob Wiblin:

Before 2014, was the Taiwanese government perhaps unusually closed, or unusually backwards? To some extent, has this been a real swing of the pendulum in the opposite direction?

### Audrey Tang:

Part of the reason why is that back in 2014, there was a real sense of powerlessness. People had a lot of good internet connection — we already had internet as broadband before we had broadband as broadband. So it was very easy for good ideas to spread in the civic infrastructures, but there was no systemic way for the public service to incorporate those.

### Audrey Tang:

So for example, back in 2012, there was a YouTube advertisement by the administration that said, “We’re going to launch this economic plan, but it’s very hard to explain, and nobody can figure it out anyway.” And a YouTube advertisement shows people of many different works and styles and so on looking at those budget numbers in puzzlement, and then finally a voiceover says, “So don’t try to understand it, just do it.” Of course, it feels really bad for the internet citizens who already actually shared many ways to understand the budgets among them all, but they’re basically being treated like children: “You don’t have to understand why; just do as the parents tell you to.”

### Audrey Tang:

Those things were part of the communication style of the administration then. And then the advertisement I think was flagged as spam detected by the YouTube algorithms and taken off stage and so on. So that actually promoted the founding of the [g0v of the gov-zero movement](https://en.wikipedia.org/wiki/G0v) that showed the national budget in an easy-to-understand way, and people can actually upload and download and offer comments — just to show the administration that it’s actually totally unlike what the advertisement was trying to say.

### Audrey Tang:

So I wouldn’t say it was particularly backwards, but I think what the civil society had been doing was unusually active in Taiwan, and it was a very strong social sector already — pretty tech savvy and things like that. So the contrast seems much larger than other jurisdictions. That is to say, while the government’s distance from the people was probably the same compared to other liberal democratic jurisdictions, the people and people’s ties were much more close in 2012 in Taiwan. So it feels like the government is more distant.


### Rob Wiblin:

So just to explain g0v to the audience. Basically, the idea here is to build kind of a shadow set of government websites and services. So you can imagine if people don’t like the Department of Motor Vehicles, dmv.gov, someone registers dmv.gov –

### Audrey Tang:

.g0v.

### Rob Wiblin:

— .g0v, and then builds kind of an alternative to the DMV — just themselves or with some friends. And the hope there would be that they’ll effectively provide a better service that then would just get wrapped into the normal government website once it’s been demonstrated that people prefer it.

### Audrey Tang:

The [soft fork](https://www.investopedia.com/terms/s/soft-fork.asp), so to speak. Yes.

### Rob Wiblin:

A sort of soft fork. This would be very hard, I would imagine, to do in the UK or the US because people wouldn’t have access. They could make, for example, an FAQ website about the DMV on that domain. But they wouldn’t have access to the APIs, they wouldn’t have access to the data, they wouldn’t have access to the databases to actually offer any services. All they could do is just kind of have a wiki, for example. But it seems like in Taiwan, it’s a lot easier to start providing actual useful services using, effectively, government IT. Am I understanding that correctly?

### Audrey Tang:

That is correct. And the reason why is this embrace of open data, and real-time open data are open API by the government services. So basically, if you don’t like how the government website portrays a certain set of data — for example, the real-time inventory of masks in pharmacies in early 2020 — you can always tap the API, which updates every 30 seconds, and show your own visualization. And if you don’t like maps, you can try a chatbot or virtual reality voice assistant or whatever.

### Audrey Tang:

By decoupling the API part of the procurement and the user interactive part of the procurement, it also makes sure that — because it iterates so quickly and people have so many different diverse needs — we don’t need to wait for a new procurement contract. We can always say, “This startup specializes in chatbots. Let’s just build a chatbot portal to vaccination locations,” and things like that.

### Rob Wiblin:

Yeah. How far can you take this? Is this true across many or most Taiwanese government services? Or is it only a minority where that’s feasible?

### Audrey Tang:

It’s a majority, definitely. If you look at the [Open Data Index](https://index.okfn.org/place/) among all the jurisdictions, I think Taiwan placed consistently on the top for quite a few years before they decided not to publish our ranking anymore, because the top few leaders already all have the main things covered, the basic things covered.

### Audrey Tang:

But anything that doesn’t have privacy implications or trade secret implications or national security implications — if the government doesn’t publish it as open data or API, it’s now assumed as the government’s shortcoming. And you can go to [data.gov.tw](https://data.gov.tw/en) and make a request saying, “Hey, this is only visible as information or this data — what gives? Let’s make a data pipeline out of this.” And very quickly we will make a data pipeline out of this. So this is now held as a norm that anything that is FOIA requestable, that doesn’t have privacy and so on impacts, must be used in a data-first, API-first way.

### Rob Wiblin:

So just imagining a hypothetical example in the US or the UK. Let’s say the people didn’t like the website and the forms available with the Department of Motor Vehicles. So you’re getting licenses, booking appointments for tests, and things like that. I imagine if you started creating an alternative website that had its own forms that was feeding in, bureaucrats would just get very nervous. They’d be like, “This website is misinforming people. I don’t like what they’ve written on it. I don’t like the data that they’re collecting. I don’t want them to have access to any of this stuff.”

### Rob Wiblin:

There’d be all of these objections that people would raise, plus just general anxiety that people would feel if they’re not used to this system. Have you had to overcome those barriers? Or do ideas for open data or open design sometimes get shut down because of these worries?

### Audrey Tang:

I think the point is that we first focus on things of a broad public interest, which is why g0v is so important — because g0v always focuses based on outrage, basically. When people feel that, for example, the national budget website and its associated advertisement is treating people’s cognitive surplus very poorly, then there is a strong motivation to build a better service.

### Audrey Tang:

And the same goes, for example, for a national dictionary that doesn’t allow for bookmarking and things like that. It was really bad. Then people [forked](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) all the different dictionaries of all 20 national languages. So maybe four out of them get forked into an integrated website with English and French and German translations also, and so on. So it is called “MOE” for the Ministry of Education — the [MOE dictionary project](https://www.moedict.tw/). I was the project leader before joining the government.

### Audrey Tang:

The point I’m making is that there is a very strong kind of urgency to make that accessible for people who are using phones and want to teach their children Mandarin or Hakka or Holo, so anything that the government offers that doesn’t meet this need in a democratic society is definitely a governmental shortcoming. So that’s why the civic tech people then show up as essentially superheroes — they’re saving the public service from public blame.

### Audrey Tang:

When that sort of situation happens, we see many of the collaborators are actually public servants themselves, because they know that they will have to solve this one way or another. And they participate sometimes pseudonymously to the civic tech community to offer a way that makes the risk lower, and also reduces their overtime at work.

### Audrey Tang:

But that, as you pointed out, relies on a kind of general comfortable feeling of working with civic tech people as peers. And I think that’s partly because many of the civic tech people actually had some stint in the government in digital services — as fellows and so on– and conversely, many people in the National Board for Science and Technology or in the upcoming digital ministries had plenty of entrepreneurship and social innovation experience in the civil society. So there’s a kind of fluidity between the talent circulated across sectors here.

### Rob Wiblin:

Can you think of any cases where you’ve had to give up on a project because it just wasn’t going to work? Or maybe it was working or it was up, but it was net harmful, and so you decided to scrap it?

### Audrey Tang:

But I don’t have projects, I have spaces. So that was kind of a given. There are of course many petitions that didn’t get 5,000 signatures, but of course they are always free to try again. There’s many presidential hackathon ideas, 200 each year, that didn’t get a quadratic voting mandate. So there’s plenty of these. But as long as they’re open source in the Creative Commons, their materials become the building blocks for the more successfully crowdsourced ideas.

### Audrey Tang:

And the people who participate in it can actually dynamically find a project that has the most synergy with them — sometimes looking at the quadratic voting records — and then join those projects. So it’s all very dynamic. It’s like a swarm. Many half-fledged projects that are abandoned get upcycled when the new emergent situation gives cause to reuse part of its infrastructures.

### Rob Wiblin:

I guess I’m trying to figure out if there’s some kind of limiting principle to how far g0v can go. Are there any cases where people tried to do a shadow government service or website, and it turned out to be harder than they thought, and it was actually better just to close down?

### Audrey Tang:

Well, as I mentioned already, national secrets, privacy concerns, trade secrets, and so on. Basically because it’s founded on open data and open source, if by law, there are certain data that just must not be made open, then of course, it’s very difficult to fork that. In my office, there’s many ministries that send secondments to my office to work in a collaborative fashion. So we have a lot of ministries: Interior, Communication, Education, Justice, Foreign Affairs, Public Diplomacy — you name it. But the Ministry of Defense never sends anyone. So I think that says something about what sort of projects may not be that easily forkable.

### Rob Wiblin:

Yeah. Yeah. That makes sense.

### Rob Wiblin:

It sounds like in Taiwan there’s a lot of citizens and volunteers and programmers who are effectively contributing to provide these quasi-government services because they’re really motivated to do so. If you took those people and instead hired them to be actual public servants and provide services like these as a full-time job, do you think that would work better or worse, or just be different?

### Audrey Tang:

Well, it depends on how long you hire them for. We have this internship program that lasts two months, or at most four months, where people freshly graduated really want the experience for a couple months to feel how public service design works. Many are in the first year of their graduate studies in service design or some other design-related field, and they would look at one public service and do essentially something g0v-like: talk to the people who complain about the service, and then redesign the service for the better. But of course get paid to do it full-time. For them, this internship is important, but then they move on to do some more private-sector jobs.

### Audrey Tang:

If you try to keep them for two more years, four more years, I don’t think many would take the offer. For many, this is one part in their portfolio to build an understanding of public service design. So like what we used to say: “Everyone has two minutes of kindness.” So this kind of participation, full-time but just for two minutes, I’m sure all of our citizens are willing to do. And if it’s two months of internship, many are willing to do. Two years, maybe a few. Twenty years, maybe not.

### Rob Wiblin:

With the g0v projects, how does the internal politics work? So say you’ve got something like the mask mapping project. Presumably not just anyone can just go on there and change the code. There’s presumably some administrator, and then other people might have to get approval in order to change the project, or in order to join the project.

### Audrey Tang:

No.

### Rob Wiblin:

No? OK. Yeah. Explain that.

### Audrey Tang:

It’s all open source, so just press “fork” and you have your own version of the mask map. There’s literally hundreds of mask maps — I built a directory of those, actually. So people who want to improve it in one part of values — for example, for people who are colorblind and have seeing difficulties and so on — they don’t have to consult anyone. So in a sense, everything is a soft fork of everything else.

### Rob Wiblin:

OK. So that’s one way of handling disagreement. I imagine that there might end up being one map that more people use than others, that’s kind of the default one. Or not really?

### Audrey Tang:

No, not really. I can easily think of four dominant ones, each serving a different need, and it doesn’t really converge.

### Rob Wiblin:

I see. So is that typical? Basically, that things just get constantly forked when people want to change them, rather than necessarily having to have some political process that decides what is in the official or the most popular version?

### Audrey Tang:

Yeah. I think the point here is rough consensus and running code. Of course there’s some broad agreement that wearing a mask is good — if people are anti-mask, I don’t think they’re going to work on a mask map. So there needs to be a general understanding in early 2020 that we want three quarters of the population getting access to masks and wearing them full-time as quickly as possible, in order to lower the R value of the original strain to be below one. And that is generally understood among everyone working on mask-related projects. But exactly the specifics, there’s no fine agreement between all the 100 or so teams working on those things.

### Audrey Tang:

The value itself is coherent enough so that one improvement — for example, not misclassifying pharmacies with just a few masks left as having plenty of masks — that norm propagates across all those different map implementations fairly quickly, because otherwise it caused the pharmacies to handle exceptions in a very difficult position, basically. So some mask map implementers offered this form for pharmacy feedback and so on. And that was also, kind of in a [coherent blended volition](https://www.lesswrong.com/tag/coherent-blended-volition) way, understood by the mask map implementer so as to not cause pharmacist burnout when we introduce new functions.

### Rob Wiblin:

All right. We’ve gone well over the 90 minutes that you originally agreed to speak with us. You’ve been super generous, but we should wrap up and let you get back to your work. One final question I have is that I heard on one of your previous podcasts that you are a vegetarian, except for eating oysters and I suppose potentially mussels as well. Tell us about that.

### Audrey Tang:

Well, I try to be. I’m not very strict about it if it’s already prepared, if it’s delicious enough — then maybe. But when I have a choice, when I order the food, more often than not I’m an oyster vegetarian. And the reasoning was that I want to contribute to minimizing the suffering.

### Rob Wiblin:

And I guess the reason to eat oysters, but not other meat, is that oysters probably aren’t conscious? Or if they are, very minimally so?

### Audrey Tang:

Yeah. The kind of minimal cell patterns that would enable consciousness have not yet been uncovered in oyster neurosystems. But if there is new evidence, let me know.

### Rob Wiblin:

Yeah. I’m largely vegan, but I also eat mussels. I haven’t really thought that much about oysters, because I don’t super like them, but yeah, I’m a kindred spirit in this, it seems like.

### Audrey Tang:

Yeah. I eat mussels too.

### Rob Wiblin:

They’re also really healthy, but it seems like the complexity of the signaling system within mussels isn’t that much more complicated than what you get in plants. So there’s a slight, somewhat equivalence argument that if you’re willing to eat plants, then maybe eating mussels isn’t so much worse than that. And I really hope I’m right about that, because I wouldn’t want to be contributing to the suffering of mussels if they are conscious.

### Audrey Tang:

Yeah. But I’m okay eating synthetic meat, cultured cells, and things like that. Again, because they’re probably not suffering.

### Rob Wiblin:

Fingers crossed we’ll have a technical solution to all of these moral quandaries soon. Well, I super appreciate all of the work that you’re doing and I’m really excited to learn more about some of these experiments, and our coordination between people and aggregating preferences and learning and beliefs and so on. I’ve got a lot to learn about, coming out of this interview.

### Audrey Tang:

Thank you, really good questions. Very well prepared.

### Rob Wiblin:

Oh, thanks so much.

### Audrey Tang:

I aspire to become as good a podcaster as you are.

### Rob Wiblin:

Yeah, I look forward to hearing the show. We’ll let listeners know when it launches. My guest today has been Audrey Tang. Thanks so much for coming on The 80,000 Hours Podcast, Audrey.

### Audrey Tang:

Thank you. Live long and prosper.


### Rob Wiblin:

If you’d like to hear more from Audrey I can recommend her interview on the podcast Conversations with Tyler, from back in October 2020. That’s actually what inspired me to invite her on the show. There’s a link to that in the blog post associated with the episode.

Just a reminder that we’re looking to hire advisors to counsel people one on one about how to have more impact with their work and a new Job Board lead to take it to the next level.

Applications close on the 20th and 27th of February respectively, so go learn more about those roles soon at [80000hours.org/latest](80000hours.org/latest).

Alright, the 80,000 Hours Podcast is produced and edited by Keiran Harris.

Audio mastering and technical editing by Ben Cordell.

Full transcripts and an extensive collection of links to learn more are available on our site and put together by Katy Moore.

Thanks for joining, talk to you again soon.
