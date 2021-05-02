# 2018-12-26 Conversation with Unitychain

### Audrey Tang:
So we’re on the record according to the radical transparency protocol.

### Joshua D. Tobkin:
Yeah, very cool. We’re live.

### Audrey Tang:
Not really live... You get to edit it.

### Joshua D. Tobkin:
We’re recorded.

### Joshua D. Tobkin:
First of all, thanks for having us. You’re an inspiration. The first time I heard you speak was at Meet Taipei. We’re Unitychain, by the way. I’m Joshua.

### Jon Jones:
Jon.

### Juin Chiu:
I am Juin. Nice to meet you.

### Joshua D. Tobkin:
We’re all Js.

### Juin Chiu:
All Js. \[laughs\]

### Joshua D. Tobkin:
We’re working on solving blockchain scalability. We think our approach may have figured out a way to stay decentralized, secure, and have great speed, which is formally known as the Trilemma, coined by Vitalik. We do this through use of what we call the Unity Protocol and DHTs.

### Joshua D. Tobkin:
We’re in Taipei. We love Taiwan. Jon’s been, for a while, doing Taiwanese. I’ve been here now three months, and I’m otherwise living in San Francisco. I think we’re going to have an R&amp;D department in Taipei for a very long time.

### Audrey Tang:
Awesome. Where are you based at the moment? Do you have a office here? Oh, do?

### Juin Chiu:
A small one.

### Jon Jones:
We’re based out of Impact Hub, near \[Chinese\].

### Audrey Tang:
You’re a neighbor with a lot, actually, social innovators, and the Gogoro Charging Station. \[laughter\]

### Joshua D. Tobkin:
Yes.

### Jon Jones:
Exactly, yes. We’re on first floor, so we often hear the, &quot;whoop, whoop, whoop, whoop.&quot;

### Audrey Tang:
That’s exactly what I mean.

### Jon Jones:
It’s like singing.

> (laughter)

### Audrey Tang:
Cool.

### Joshua D. Tobkin:
It’s great to hear what you’re doing, just in the broad scope of Taiwan, and how radical your approach is. Even with the IoT stuff and blockchain, I know that you guys are quite familiar with Iota.

### Audrey Tang:
That’s right.

### Jon Jones:
Which we recently studied. Juin just did a deep dive on it. He’s our lead researcher. We like to study all different types of protocols to learn from different projects. We think it’s important to keep an open mind, because it’s such an interesting field, a lot of things to consider.

### Jon Jones:
Certainly, we think that we’re working on important technology for society. We’ve recently created a proof of concept, maybe it’s relevant to show you, actually. We have a video.

### Audrey Tang:
Sure.

### Joshua D. Tobkin:
OK, I’ll pull that out.

### Audrey Tang:
Is it public? Is there a...

### Joshua D. Tobkin:
This is actually, unfortunately not. This is just for us. This is like, Christmas Eve, we had it. We just recorded it.

### Joshua D. Tobkin:
The core concept here, there’s not too much to show right now, but basically, we have a blockchain running from a DHT. In case anyone’s wondering, DHTs are distributed hash tables. They are incredibly scalable. It should be able to handle up to, frankly, millions, of nodes.

### Jon Jones:
It’s technically infinitely scalable, with more nodes in the network.

### Joshua D. Tobkin:
What you’re about to see is a very rudimentary, hard-coded proof of concept, but we have a DHT implementation called Kademlia. We were running very basic, rudimentary Unity Protocol consensus on it. This is our CTO speaking here.

> (video begins)

### Larron Armstead:
Now, what it’s doing is it’s actually seeding. It’s seeding a bunch of, we hard-coded these public and private keys. It just did some seeding, contacted the nodes, and said, &quot;OK, let’s make these addresses, and set these balances,&quot; basically. That’s what just happened there on that side.

### Larron Armstead:
Now, we have the UI. I’m going to refresh this. That’s riggy right now, but that’s where we’re at. The first thing you have to do is get wallets, and that’s just a hack right now to make it load the seed file, basically.

### Larron Armstead:
There, we just loaded it into a DHT. These are logs of what’s basically happening. Now, these are all the public and private keys, basically, just all the addresses that we have loaded. Right now, we can start transactions. It’s just going to do 10 random transactions. Boom, it’s just randomly doing it now. This one’s a bad, so we add and do bad ones, too.

### Joshua D. Tobkin:
Nice. Just to show that it’s not always a consensus?

### Larron Armstead:
Exactly. We don’t have the full consensus in yet. We need to mess with DKG, and mess with having more masters. It is storing in a DHT right now.

> (video stops)

### Joshua D. Tobkin:
That’s basically the concept. These errors are showing that there isn’t consensus being reached. This is the early stages. This is the precursor to our test net. We’ve only started developing on the actual coding of this about five weeks ago, but we’ve been focused on just research in the meantime.

### Joshua D. Tobkin:
There’s a lot of things we could learn from other projects, first of all. Like Laren just mentioned DKG, distributed key generation. There’s a project called Dfinity that we’ve learning from. It turns out some of the mathematics they use is similar to us. There’s some properties that are similar in our approach, which is good to see.

### Joshua D. Tobkin:
That we’re not in a complete black box, that there are other people smarter than us looking into this and qualifying and validating these ideas.

### Jon Jones:
Some of the innovations are the architecture, using a consensus on a DHT. Also, Unitychain consensus itself. We have a layer of Unitychain, called RNG Protocol. It’s basically a very unique way that we come up with an authentic random number.

### Audrey Tang:
On-chain randomness.

### Joshua D. Tobkin:
Yeah, on-chain numbers, not random generation.

### Jon Jones:
Finally, we utilize DID, or decentralized ID, in our system, because actually, we feel like in order...Of course, it’s a civil prevention mechanism, to have one person, one node, one vote. That’s kind of our mantra.

### Jon Jones:
We believe that a public blockchain should be of individuals and real people. It’s almost very democratic. We believe those are the things that set us apart.

### Joshua D. Tobkin:
We’re happy to meet you, and to start to build a relationship with you. As we make developments, product upgrades and updates, it would be great to periodically, maybe once every quarter, just, &quot;Hey, this is what we’re doing,&quot; just so you’re aware of it.

### Joshua D. Tobkin:
We wanted to ask you a couple questions. Juin, you had a couple questions about just the ecosystem?

### Juin Chiu:
Just some general questions, since Audrey is now the Digital Minister. We would like to hear some of your advice on the...They’re not Taiwanese, so how can they...What’s your opinion on the open source community in Taiwan? What’s your general advice on that?

### Jon Jones:
I think how we can integrate more. My wife is actually Taiwanese. She’s also considered a co-founder. Just ways that we can, as a company, be more integrated with Taiwan. Maybe have some help from the government?

### Audrey Tang:
Open source is a national priority. We directly fund, for example, the Taiwan Open Source Software Collaborative thing, twoss.io which mostly showcases two existing ecosystem, why it’s a good idea to have open source contributors, what kind of open source solutions have worked.

### Audrey Tang:
Whereas before, only proprietary software has occupied those positions, and how those shiny new technologies, because of accountability requirements, watching governments and so on, almost have to be open source.

### Audrey Tang:
That concept has to be explained over and again to existing players, and so on. It is mostly an industry awareness project. You can find the relevant details at twoss.io. The other thing that we focus on is in education.

### Audrey Tang:
We make sure that in the basic education -- that’s to say K to 12 -- when the students are exposed to digital technologies for the first time, they own it in a kind of personal computing kind of way. That means that the schools are highly encouraged to use open source solutions.

### Audrey Tang:
If the students, after graduation, choose to use proprietary software, that’s their choice, but we’re not going to create vendor lock-in as part of basic education. That covers with the broadband as human right and the national computation platform making.

### Audrey Tang:
It’s very easy for the students to experiment on GPU and related technologies. It means that we think it will be a democratizing force, instead of leaving parts of the population behind. That’s the basic education. The new curriculum, embedding these values will be rolling out next August. It’s called \[non-English speech\], or the 108 curriculum.

### Audrey Tang:
You can find all those details, including how we’re moving from a skill set-based education to a character-based education. Because these are being ultimately the way, but these are core to cure humanity.

### Audrey Tang:
If we focus on sustainability and things like that, are all part of the new curriculum. You can find that in the K to 12 new curriculum website, at, I think it’s NAER, the website. That’s open source, also plays a large part.

### Audrey Tang:
Finally, and more personally, interested in getting the procurement process to be open by default. It is not just open source, but actually the publication of the procurement data, and making sure that the open API, which is a Linux Foundation standard, is embedded to the same degree as the accessibility standards.

### Audrey Tang:
So that, for example, now when their government procures a website, it needs to be available, not just to sighted people, but also for people with blindness. Then we say, in the same vein, machines are kind of blind people, too.

### Audrey Tang:
If you don’t make it accessible to machines through APIs and make it human only, then the vendor could be disqualified for being unprofessional, or for charging extra to do an API. Basically, API-first procurement through government digital service guidelines.

### Audrey Tang:
That’s something I think, longer term, will have an equally if not more impact than open source procurement. If you buy open source, but then it depends on a huge proprietary database, that open source is not very useful.

### Audrey Tang:
On the other hand, if you build a large proprietary interface, but then mandate that it has to talk through open APIs, then it makes it very easy for MSMEs, for medium and small businesses, to build around the public API, even though the core may be proprietary. That’s the overview.

### Juin Chiu:
Do you think that the government, like for example, now we’ve seen some countries, Europe, they’ve started to utilize blockchain, integrate the system into their...Do you think that’s the future?

### Audrey Tang:
We’re using distributed ledgers already on these, but mostly for accountability, for cheap. It’s an easy way to build an append-only audit log, for example the AirBox project.

### Audrey Tang:
Which, of course, when integrated with the government data in CI.taiwan.gov.tw, people here worry about the government mutating their data. People in the government worry about people confusing these data sources with more official data sources. It’s a large debate in Taiwan.

### Audrey Tang:
Using DLT, people can make sure that nobody goes back to time to modify those data. That makes it easy for people to trust each other. That’s especially true because the computation center is in the National Center for High-Speed Computation, the NCHC.

### Audrey Tang:
We have a collective intelligence, ci.taiwan, which will be the TW website that basically shows how we aggregate all the meteorological data, all the air quality, water quality, the disaster recovery. There’s an English version, too. Recently, we just held a competition on how to best make use of these aggregated data.

### Audrey Tang:
DLT plays a crucial role, because people have to trust that even with the huge number of GPUs that the NCHC has, it cannot disrupt the validity of the public chain. I think that is crucial. One of the winning teams actually, in this competition, I think makes a very good use of AirBox data.

### Audrey Tang:
It’s basically looking at PTT, which is like Reddit. It is a local bulletin board. Whenever people start talking about air quality, it may be old data. It may be a rumor, it may be great news, or whatever. People gather around and talk about it.

### Audrey Tang:
They wrote essentially a chat bot, a bot user that just automatically puts in the latest measurement, with beautiful visualization, and phrased in a way that’s not government speak, but actually Chinese speak or netizen speak, and engage.

### Audrey Tang:
Of course, everybody knows that it’s a bot, but they can participate in the discussion to steer the discussion into a more evidence-based direction. It’s a really good use, and if people question about the bot’s authenticity, accountability, methodology, then the creators can say it’s all open source.

### Audrey Tang:
You can check the evidence trail, and the data you use is also on the DLT, if you really want to check that, and so on. It’s a cheap way to get people to trust each other more. We have many uses for along that lane, but not as cryptocurrency.

### Joshua D. Tobkin:
DLT, for sure. DLT is what we’re also framing ourselves to be DLT launching, not cryptocurrency. We will have likewise some unit of measure for computation services. Speaking of education, you mentioned one of them as part of our community-building efforts, we actually will be focusing a lot on education.

### Joshua D. Tobkin:
We know that if you create great quality content once, it’s very, what do you call it? The costs of letting an additional person have access to it is basically minimal. We will produce a lot of quality content and educational material, and that will be broadly, of course. It’ll be just about DLT, at least to say, &quot;This is what we’re doing at Unity Chain,&quot; just a little of that.

### Joshua D. Tobkin:
That’s certainly, we think it’s important education, sharing the information, and getting people involved. Especially from the young age, so high school to college. Create some programs to help them out and initiatives.

### Joshua D. Tobkin:
There’s a lot of brilliant people that are in school, and even not even in a school. I’m a college drop-out.

> (laughter)

### Audrey Tang:
I’m a junior high school dropout.

> (laughter)

### Joshua D. Tobkin:
I’m not even going to send my kids to school.

> (laughter and crosstalk)

### Joshua D. Tobkin:
No, but seriously, also, in Mandarin, too. We’ll do it in English and Mandarin. We’ll do translations. We see that Taiwan is a great location geographically. Also, with Southeast Asia, it’s easy to get to Hong Kong, Korea, Japan, China.

### Jon Jones:
Also, politically.

### Joshua D. Tobkin:
Politically, yeah. A lot of people speak English. Great resources, high IQ, on average, so that’s great. Actually, when I met Jon, he was in Taiwan. If it wasn’t for Vitalik, I’ve heard him talk about Taipei or Taiwan a few times.

### Joshua D. Tobkin:
If it wasn’t for that, I probably would have been a little more skeptical, like wait a second.

> (laughter)

### Audrey Tang:
That’s right.

### Joshua D. Tobkin:
I think we made the right decision. My first time here was in June, July. We’re still a startup, very much. We’ve been self-funded until now. Things are moving fast, and we’re very optimistic that we’re on the right path.

### Joshua D. Tobkin:
This is important technology that we want to bring to the world. I think more than anything, we would love to, as we make these milestones and hit these milestones I’ll show you...We’re actually, we’re not forking the existing chain, and just doing a proof of state, concept. We’re doing a whole new model.

### Joshua D. Tobkin:
As a result, of course, you don’t know exactly how it’s going to unfold. If we’re able to pull off what we think we can pull off, or create something that is more fair, more democratic, more open, and potentially more impactful for the world.

### Joshua D. Tobkin:
We’d love to keep you updated on this as we move forward. You’re an inspiration to us. It’s super cool that someone in government would have someone like you put in such an important role.

### Jon Jones:
At Meet Taipei, Juin was like, &quot;Oh, you guys have to see Audrey speak.&quot;

> (laughter)

### Joshua D. Tobkin:
I was like, &quot;Whoa, yeah. ML, machine learning, AI, blockchain.&quot;

### Jon Jones:
Anarchy. \[laughs\]

### Juin Chiu:
I personally saw some of Audrey’s videos on YouTube already, and really inspiring. I just told them that, &quot;Hey, you’re going to see it.&quot;

### Joshua D. Tobkin:
I did.

### Audrey Tang:
I am that kind of minister, too.

> (laughter)

### Joshua D. Tobkin:
Yeah.

### Audrey Tang:
Two years ago, I became the Digital Minister. My first visitor outside of the administration subject to this radical transparency rule is Vitalik.

### Juin Chiu:
Oh, wow.

> (laughter)

### Audrey Tang:
I really enjoyed the talk. It’s all on YouTube, anyway. We talked, especially around openness. At that point, everybody understand that the broad spectrum of Ethereum is one, \[laughs\] and how to make governance work.

### Audrey Tang:
We talked about liquid democracy. We talked about all sort of different governance possibilities. Of course, with some imminent milestones, it’s easier. People start getting their act together once climate change become very serious.

> (laughter)

### Joshua D. Tobkin:
It’s getting serious already.

### Audrey Tang:
Right. That’s like imminent existential topic triggers a governance change. That’s essentially what Vitalik and I agreed on two years ago. I saw that you’re also working on governance through your Gnome Validator node system.

### Jon Jones:
We believe governance can only be really achieved if it’s truly a democratic public chain. One person has one node only. I think it’s much easier to have on-chain governance built in.

### Joshua D. Tobkin:
Blockchain is perfect for governance, at least for voting. That’s clear. As long as you can prove one individual, one node, or one individual, one entity. Then, of course, liquid governance, the ability to delegate your vote and change it with a few clicks.

### Joshua D. Tobkin:
It’s a direct democracy. That’s the way it should be. I’m sure the Founding Fathers of the United States, had they known about this technology, they would have designed it that way. Why wouldn’t you? We are thinking about on-chain governance from the beginning, and we’re designing it.

### Audrey Tang:
That’s good.

### Joshua D. Tobkin:
Actually, that’s one of the beautiful things about going last in this game. We got to see all these other projects, like Tezos that just focuses on governance. OK, that’s interesting, a study that we said...

### Joshua D. Tobkin:
We got to study these protocols, to pick and choose the parts that we liked, the parts that we didn’t think worked out very well. We’re trying to build a unified plan, of very long-term thinking. I personally believe that this type of technology is game-changing.

### Joshua D. Tobkin:
It’s simple, in a sense, but I don’t think, originally I didn’t realize how much non-trust there was, how many middlemen, non-trust, and how important transparency was. Of course, you say that, it sounds like, &quot;Yeah, it’s obvious.&quot;

### Joshua D. Tobkin:
When it’s technologically and mechanically proven to provide that kind of capabilities, it does change society on a big, big scale.

### Audrey Tang:
It does.

### Joshua D. Tobkin:
It changes things, really, We are thinking about on-chain governance. I think the future of government is going to be direct democracy. If not on planet Earth, at least on Mars.

### Audrey Tang:
Sure. We’re doing our part by handing out PKIs to foreigners as well. There’s \[Chinese\]. There’s this combo card with IC and NFC interfaces that we can currently use to file taxes and whatever.

### Audrey Tang:
Just last year, we started handing it out for foreign people as well. People told us that the digits don’t look the same, because the national ID here has the digital as the second letters, the letters as the second letter for foreigners. That’s going to change, too.

### Jon Jones:
It’s all going to be unified.

### Audrey Tang:
It’s all going to be unified with numbers. Foreign people becomes like A7, or 8, or 9, where we are like A1 or 2, or 0. I’ll be using the zero.

> (laughter)

### Audrey Tang:
I think it all speaks to a much more, as you said, a more digitally aware way of the building blocks of democracy.

### Joshua D. Tobkin:
That’s wonderful, that’s wonderful. Actually, I’m curious, I would love to hear in a snapshot, what do you think the world’s going to look like in 20 years?

### Audrey Tang:
Wow. \[laughs\]

### Joshua D. Tobkin:
I would love to see you think the world is going to look like in 20 years, as far as let’s just talk about governance.

### Audrey Tang:
First of all, I am not a crystal ball. \[laughs\]

### Joshua D. Tobkin:
I know, of course.

### Audrey Tang:
I tend to think that the future is already here, just not evenly distributed. We see a lot of potential futures. In Taiwan, what I can say for sure is that 20 years from now, the Jade Mountain will be exactly one meter higher, because it’s growing five centimeters every year. \[laughs\]

### Juin Chiu:
We know that. We know that’s true.

### Audrey Tang:
It’s a metaphor, too. If you’ve been to Taroko Gorge, you can see how the plate tectonics clash, the Pacific on one side, and the continent on the other side. That’s actually what shapes Taiwan. In 20 years, we’ll have as many earthquakes and typhoons as, maybe more, because of climate change.

### Audrey Tang:
That describes not just the meteorological, as measured by the civil IoT system, but also the social changes as well. The authoritarian past, and the democratic future is going to clash event more violently than we saw in the referendums the past month.

### Audrey Tang:
If we do our earthquake prevention right, if we do smart governance through accountable and transparent institutions, then everybody raises higher. As you said, in a more benefiting from the plurality — we get to curate from the best of the direct, participatory, and representative democratic thoughts.

### Audrey Tang:
That’s if we make the society itself resilient enough to survive these ideological clashes. That’s for Taiwan. Whatever happens to humans, the Jade Mountain will raise.

> (laughter)

### Joshua D. Tobkin:
That’s for sure. That’s one thing I’ve noticed. I have lived in different parts of Asia before, in Hong Kong, some time in China, in South Korea. Taiwan is very progressively, politically, and the society.

### Joshua D. Tobkin:
Small things like not having trash cans all over the place keeps it clean. Sure, Taipei, especially is an older city, but it’s a clean city. That goes to show a lot about just the people. It’s interesting.

### Audrey Tang:
Just this space, there’s a lot of thoughts put into universal design, accessibility, and things like that.

### Joshua D. Tobkin:
That was wonderful. You guys have any other questions while we have Audrey’s time?

### Jon Jones:
Yeah. That was our proof of concept that we showed. We’re also working on RNG protocol. It’s interesting, because we’re trying to create a non-deterministic random number generation using live data, having consensus on the nodes that get the live data, and it goes through a morphing algorithm.

### Jon Jones:
Essentially, we were solving a problem that we want to, for our chain, we want a higher level of random number generation for security, and for also equitability, so everyone has an equal chance.

### Audrey Tang:
Scalable consensus.

### Joshua D. Tobkin:
Exactly.

### Audrey Tang:
I have read the light paper; I know the math.

> (laughter)

### Audrey Tang:
Not all of it, but an overview of the problem space.

### Joshua D. Tobkin:
That’s great. Actually, you mentioned the IoT all around Taiwan, trusting government sources. These are, maybe at some point, actually, it would be pretty cool if we could integrate with that data.

### Audrey Tang:
That’s right.

### Joshua D. Tobkin:
Pull in high entropy sources from barometer data.

### Audrey Tang:
From sensors.

### Joshua D. Tobkin:
From sensors, exactly.

### Audrey Tang:
As long as you go to the DSP, you can see through the sensor things platform all the existing...

### Juin Chiu:
Audrey passed the UI over to our channel, so check it out later.

### Audrey Tang:
We’ll have a larger grant/competition next year, anyway. Feel free to make creative use out of it.

### Joshua D. Tobkin:
Wonderful. That sounds great. We do have a lot of cool things under the hood that we’re planning. Anything we have on our website is just our, we didn’t publish everything. We’re actually working with a couple of PhDs in January that are experts in DHT, distributed hash tables.

### Joshua D. Tobkin:
We’re doing the right thing by sourcing out and connecting with people that are smarter than us, or more expert in different fields, bringing them together, and sourcing the right people.

### Jon Jones:
I have one more thing. We’re thinking on the lines of when we should open source. We have this idea of seeding our network with ultimately good actors, hopefully. Our idea is to see the network with at least 30,000 nodes before we open source. That was the idea, to just protect us in the short run.

### Audrey Tang:
Closed beta and stuff.

### Joshua D. Tobkin:
Yeah, it’s like a closed beta.

### Jon Jones:
Is that aligned with...

### Audrey Tang:
That sounds good.

### Jon Jones:
Cool, like a milestone where we feel like the network is...

### Audrey Tang:
For early participants, you probably have to do at least read-only source access to the people running those nodes, because otherwise there could be a bottleneck for...

> (laughter)

### Jon Jones:
Take over the government.

### Joshua D. Tobkin:
No, totally. We’ll make it clear that it is our 100 percent intention to open source it, once we feel like we’ve sufficiently seeded it with a majority of good actors. These systems can be delicate. I appreciate your time so much.

### Audrey Tang:
The open source community, I think, appreciates a project that is not just put out as a package, but actually has some discussion and some internal conversations around. That’s actually, when I was working with Apple, I think they handled the Swift open source really well.

### Audrey Tang:
It’s not just a shiny new language putting out there, but actually a real community, and also seeded with good actors, so to speak, and with the full intention of getting it portable to non-macOS systems, and fully interoperable by intention on day one.

### Audrey Tang:
Of course, that delayed the open source a lot. They had to put everything together for the project to be in a useful position on day one, when it’s open source. There’s an internal user group thing. I think developing in the open, in the front of those early adopters, makes a lot of sense.

### Audrey Tang:
Just make them, not just early adopters, but essentially collaborators. They don’t actually have to understand the code, the math, and whatever, but they can join with the confidence that they are running something that they are part of.

### Audrey Tang:
That creates also loyalty to the community. Especially if you’re running it as a liquid democracy thing, I think it’s very important that people understand that, just like the electoral law, and all the interpretations, they are all free of copyright. You can’t get sued if you copy the laws itself.

### Audrey Tang:
I think at least the core rules pertaining to the liquid democracy, that really needs to be completely open.

### Joshua D. Tobkin:
Absolutely. Basically, I just want to make sure we’re on record that we’re committed to open source, and to participate that route. It’s just a better way to develop, anyways. Thank you so much for your time.

### Audrey Tang:
Sure.

### Joshua D. Tobkin:
We will definitely stay in touch.

### Jon Jones:
Maybe we could set up another meeting in three month or so.

### Joshua D. Tobkin:
Yeah, just to show you guys what we’re doing.

### Audrey Tang:
Checkpointing.

### Joshua D. Tobkin:
Yeah, checkpointing, exactly.

> (laughter)

### Jon Jones:
Can we have a photo?

### Audrey Tang:
Oh, yeah, sure.

