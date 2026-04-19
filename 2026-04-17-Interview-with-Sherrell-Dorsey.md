# 2026-04-17 TED Tech with Sherrell Dorsey

### Sherrell Dorsey:

Welcome to TED Tech. I'm Sherrell Dorsey, and we are here at TED2026.

Today's conversation is about one of those systems we rarely stop to examine — democracy itself. Specifically, what it looks like when citizens aren't just asked to vote every few years, but are genuinely invited into the decisions that shape their daily lives. And what role technology plays in making that possible, or might be getting in the way of it.

My guest today is someone I'm really excited about: Audrey Tang. Audrey served as Taiwan's first digital minister and now works as Taiwan's cyber ambassador, bringing the lessons of a decade spent rewiring government from the inside to audiences around the world. Under their watch, Taiwan built participation platforms that turned real policy questions over to ordinary citizens, navigated a pandemic without lockdowns — if you can imagine — and protected its 2024 elections from foreign interference, all while making the work open source and available to anyone who wanted to learn from it.

Audrey just came off the TED stage, and I want to dig into what they actually built, how it works, where it's fallen short, and what it takes for other countries to honestly attempt something similar.

Audrey, welcome to TED Tech.

### Audrey Tang:

Good local time. I'm really happy to be here.

### Sherrell Dorsey:

You've had a fascinating career and done some fascinating work, and I want to dive into this idea you described on the stage — that Taiwan is a kind of proof of concept. That technology and democracy don't have to be at war with each other.

### Audrey Tang:

A lab of democracy.

### Sherrell Dorsey:

Yes. So for people who are watching their own democracies feel really fragile right now, what's the most important thing you want them to take away from what Taiwan is?

### Audrey Tang:

Taiwan is the youngest tectonic island on Earth. We're only 4 million years old. It's plate against plate — three earthquakes somewhere on the island every day. And yet the tip of Taiwan, Yushan — almost 4,000 meters — grows by half a centimeter every year, because of that same plate tectonics.

So, my message is very simple. Polarization is fuel. If we don't evacuate and flare it off like volcanic eruptions, but instead invent a geothermal engine that turns polarization into momentum — a geothermal engine for democratic renewal — then democracy ceases to be a showdown between opposing sides and becomes co-creation between many, many different sides.

### Sherrell Dorsey:

I was not expecting you to answer in that way. I just learned something so fundamental about the tectonic part of this and how you weave it into how we think about collaborative work together.

To that end — you left your career as an open source software developer to go into government. I'm curious how you saw the through-line, and the opportunity to create this idea of co-creation. Because most people aren't going to leave a high-profile career in software to go into government.

### Audrey Tang:

And become a national tech support.

### Sherrell Dorsey:

National tech support\! I love that. Talk about that transition, and what inspired you.

### Audrey Tang:

In 2014, I helped live-stream a peaceful occupation of the Taiwan parliament for three weeks. It was in response to a trade deal with Beijing that was negotiated behind closed doors. At the time, President Ma Ying-jeou was enjoying a 9% approval rating. So, in a country of 23 million people, anything he said, 20 million people were against him. But those 20 million were also extremely polarized, thanks to the antisocial corner of social media — the For You algorithm had just been freshly introduced and was dividing us.

Half of Taiwan was saying, *we are Free China*. And the other half was saying, *we want to be free from China*. And they weren't just arguing online. They were arguing in the street. We were at an almost critical level of polarization.

Then people occupied parliament. But we didn't call ourselves protesters who were against something. We called ourselves demonstrators who were for something new. And that something new was a new way to talk about trade agreements — about the environment, labor, the telecommunications sector, whether we wanted Huawei and ZTE inside our publishing system, and so on.

A very simple idea: half a million people on the streets, many more online, all in groups of 10\. Each person needed to convince the other nine in their group for their idea to bubble upward. And if they just became extremely YIMBY or NIMBY, their idea would stay stuck in that group and not bubble up.

So, this very simple idea — seeking the surprising common ground — after three weeks crystallized into what we called the surprising agreement among all the factions. The speaker of the parliament simply said, *okay, the crowdsourced version is better, let's go with it.*

I wouldn't say I quit my open-source software career. We reimagined democracy as technology — as social technology. And I went into government to work *with*, but not *for*, the government — to upgrade democracy itself by designing better feedback loops.

### Sherrell Dorsey:

I'm curious about the implementation. Traditionally, for many of us, government is slow. Slow to change, slow to adopt new ideas, and certainly slow when it comes to technology. So how did you know the framework you were designing — this open-source, crowdsourced way of bringing ideas forth — was going to work? And how did you scale that beyond the occupation to other challenges?

### Audrey Tang:

I'll illustrate with a concrete example that may resonate with the audience. Two years ago, in 2024, Taiwan was suffering a rash of online scams. If you opened Facebook or YouTube, you'd see Jensen Huang — the Taiwan-American CEO of NVIDIA — his face trying to sell you cryptocurrency or offer investment advice.

### Sherrell Dorsey:

What we call a deepfake.

### Audrey Tang:

Exactly. A fraud scam. And if you clicked, “Jensen” actually talked to you in his own voice. Of course it wasn't Jensen. It was just a deepfake running on NVIDIA GPUs.

What we faced, as Asia's freest democracy, is that people are allergic to anything done by the government. If you ask a random person on the street, they say *government, hands off, don't censor the internet, net neutrality, whatever.* So, as the minister of digital affairs, I simply couldn't do censorship. We couldn't fix that problem by committing an even more serious crime — top-down censorship of speech.

So, what to do? Very concretely, we sent 200,000 SMSsto random numbers around Taiwan — a *lottocracy* — inviting people to chime in on what to do. The messages came from 111, the trusted government number, so people knew they were real. Thousands signed up. We chose 447 of them randomly, with the same demographics as the Taiwan population. A mini-public. And again, in tables of 10, online, each person looking at nine others, they started brainstorming.

One table said: *Let's label all online ads as “probably scam” until Jensen Huang — or whoever — digitally signs off on them.* KYC. Know your customer. Good idea. Another table said: *For any unsigned ad that a platform like Facebook posts unsolicited, if someone loses 5 million dollars, the platform is jointly liable for the 5 million dollars.* Very good idea. Another said: *TikTok at the time didn't have a Taiwan office. If they ignore our liability order, what do we do? For every day they ignore us, slow down their video by 1%.* Another good idea.

None of this was about content. It wasn't censorship. It was about actor and behavior. Two months after that conversation — where more than 85% of the mini-public voted for this coherent bundle of ideas, and the other 15% could live with it, they considered it legitimate — we made it into legislation. And throughout 2025, online scam ads are down by more than 94%.

### Sherrell Dorsey:

That's incredible. So it seems like that process takes real work — to listen to all these ideas, to downvote what won't work, upvote what's going to be effective, and go through legislation. But what happens when there is no consensus and no agreement? What does that process look like when you're trying to get to some resolution? And is there enough time, especially when you're dealing with something as urgent as a deepfake scam where you have to protect people?

### Audrey Tang:

The entire process of 447 people in 44 virtual tables talking to one another is literally just a long afternoon. It's faster than the emerging harm.

If we convened people physically in 44 rooms, with human facilitators, and those facilitators came together to find a good-enough consensus, and then we went back to ask people to vote — of course that would take time. But the thing about Alignment Assemblies, which is the format we developed with the Collective Intelligence Project, is that language models are used to transcribe, summarize, and translate. They're able to translate between people who use different vocabularies, but they're not replacing human judgment.

Think of them as glorified chess clocks. They encourage the less vocal to speak up. They limit disruption to five seconds. In conjunction with Stanford's Deliberative Democracy Lab, we've shown that people do trust those local community models — as long as they're not in the way of decision-making, as long as they're purely the connective tissue. Which is why we can make democracy more fast, fair and fun.

### Sherrell Dorsey:

This is interesting, because what I'm familiar with on the local, state, and even federal level is usually organizing around committees — and task forces, and then a task force for a task force. It seems like you've cut through the red tape of so many different opinions and reports and feasibility studies, and gone directly to what you call the mini-public, moving so much faster.

Are you always changing the mini-public cohort? We're not talking about the same 400 people every time — we're talking about different folks who care about different issues, or have ideas about different issues. It's shifting. You're not getting the same groups of people, unlike in a lot of places where the same people join the same task force, the same people are on city council, whatever it is.

### Audrey Tang:

That's exactly right. Think of the jury system. You wouldn't want the same jury for your state for the entire year on every case. You want a different jury for every case. The point is that people want a seat at the table. And the response isn't to say, *okay, these 400 people now own the table.* The response is to design a bigger table.

### Sherrell Dorsey:

I love that. I want to get into something important you've talked about, which is that algorithmic feeds are one of the biggest threats to democracy. There was a shift around 2015 from chronological timelines to the For You feed. I'm sure most of us listening are a bit annoyed that we can't see the people we actually follow — we get strangers and ads instead.

What does a genuine pro-social social media platform look like in your mind? And does it require replacing the existing giants, reforming them, or building something entirely new?

### Audrey Tang:

The For You feed, as you pointed out, is entirely unsolicited. I didn't ask to see those posts. They're determined for me based on so-called engagement. The problem is that engagement through enragement is a much easier hack for those algorithms. It's like cooking: it's harder to cook a Michelin-star meal than to simply hijack our reward model by feeding us junk food, or slop, as it were.

So, the algorithms figured out how to keep us enraged — increasing what I call PPM, polarization per minute. They create a thick fog of war by strip-mining our social fabric, trapping each of us inside this wildfire. Have you seen the meme where a dog says “This is fine.” while everything is burning?

### Sherrell Dorsey:

Yes. Yes.

### Audrey Tang:

So, we see the shadows of other people, but we don't see other people anymore. It feels warm — even hot — but there's no relational nutrition.

The inverse of that isn't wildfire. It's campfire.

Consider this. Campfires — or slightly larger bonfires — have a group of people, maybe 10, maybe slightly more, looking at each other more clearly because of the fire. It's not going viral anywhere, and people can tame the fire together. At this year's TED, we heard from Reddit about how it's designed like a city, with hubs and districts. It's not like a stage where everybody has five minutes of performance — the antisocial corner of social media.

In Taiwan, when we had the conversation about Uber, we didn't say *the Uber drivers get five minutes, the taxi drivers get five minutes, and then everyone else quote-tweets and dunks on their points.* That just escalates into a wildfire. Instead, we showed them a pro-social part of social media called Polis, where people react to each other's statements with an upvote or downvote, and they see their avatar moving closer to the people who feel similarly.

But crucially, there's no reply button, no repost button. The only way to go viral is to build a bridge — to propose something that's uncommon ground, that people on the other side also upvote. So, whatever you do to consolidate your in-group doesn't actually reach anyone. It doesn't bubble up. And after three weeks, we converged on a set of extremely nuanced ideas — that it's okay to have surge pricing, that it's not okay to undercut existing meters, that rural areas must be served first, and so on. For the first time, people saw that despite polarization — or even due to polarization — people put real energy into creating these surprising agreements.

Many existing programs for this kind of bridging design are now fighting their way into the antisocial corners of social media. At TED this year, we invited the Community Notes team from X — now adopted by YouTube, Facebook, TikTok, just about everybody. Every time you see a controversial viral post, there's an AI-drafted note attached to it that provides context. People can correct the AI and co-write the note as the news develops. It's not taking anything down — it's attaching to it. Uncommon ground added as context to every post. They're now working on the ranking algorithm so that the first thing you see in your feed is the most bridging post — and you also see that people on the other side agree with it.

### Sherrell Dorsey:

There's such an opportunity for a shift in behavior. As you share these case studies you've actually implemented in Taiwan, I think about how we've been conditioned to use these tools one way, and now there's this unique transition that doesn't differ so much in the tools themselves, but in how we use them. I love the term bridging, because traditional tools are not used for bridging. In my opinion, they reward the loudest — the person who can get the most attention — versus the greater level of accuracy or potential solutions.

I want to ask about some of the tensions here. Taiwan exists under constant pressure — geopolitically, informationally, and from disinformation campaigns originating abroad. That's a challenge we also see in the US. How much of what Taiwan has built is genuinely exportable to democracies that may not face the same existential pressure to get it right?

### Audrey Tang:

In 2024, I took a pure diplomacy role as I felt that even when Taiwan depolarizes and fights off polarization attacks from abroad without becoming authoritarian, no democracy is an island — not even Taiwan. If our allies, friends and like-minded partners fall into peak polarization, into the kind of conflict we experienced in 2014, that doesn't bode well for Taiwan. The authoritarian narrative has always been *democracy never delivers — it only leads to chaos.* If people around the world believe this, democracy is in big trouble. And Taiwan can't, by itself, protect against this.

So, I wouldn't say I'm exporting anything from Taiwan. I'm bringing attention to the fact that there's now a new set of tools around translation. People can translate for the first time not just across languages — I'm sure we all use language translators now — but across ideologies.

We worked with the Napolitan institute in the U.S. We convened a mini-public of more than 2,000 people, on average five people per congressional district. So a mini-public of the entire U.S. We asked very simple questions: *What does freedom mean to you? What does equality mean to you?* A language model translated between, for example, people who feel strongly that equality means climate justice for future generations, and people who feel strongly that the Biblical duty of creation care and stewardship in each family is the fundamental bedrock of moral duty.

These two groups have strong beliefs. But the language models are able to see that they're talking about the same thing. They relay the statements in the native language of each tribe, so people can productively agree. We found that more than 97% of the mini-public agreed on what the core moral teachings are in the family. And even on the most controversial issue — equality — nearly 70% agreed that equality is only possible if everybody is given the same opportunity to shine, instead of just the same result.

So, polarization, by and large, is a design flaw. If you put people into the antisocial corner of social media where they dunk on each other, you model polarization. But if you put them into this translation-summarization-transcription city network, they become quite pro-social — not nearly as polarized as we might think.

### Sherrell Dorsey:

Right. I think we've attempted this idea that consensus means everyone agrees down the line. Versus: let's find those common points of interest and move forward from there. I was recently rereading *Abundance* by Thompson and Klein, and one of the things they pointed out is that many of the challenges in US infrastructure — why it doesn't move as quickly as in other countries — come down to this idea that we always have to reach consensus on everything, all at once, in the same way. What you're describing flips that.

I want to talk about your concept of Plurality — building technology for collaborative diversity rather than control. But a lot of authoritarian governments are also building technology for their populations, and they're calling it governance. How do you keep the framing of civic tech from being co-opted or misused?

### Audrey Tang:

It's actually quite simple. Authoritarian governments also talk about digitalization, transparency and so on. But if you look closely — in authoritarian tech, the citizens become transparent to the state. In civic tech and Civic AI, the state is transparent to the citizens. The tools may literally be the same lines of code, but they're wielded in opposite directions.

As we design these tools, they must not become prediction machines that the state imposes top-down on people. That would be a wildfire again. Instead, the campfires are lit by each community — the Uber drivers, the taxi drivers, the passengers. They need to feel that this common knowledge of surprising agreement really belongs to them, not to the state.

These tools are widely available. The real story is that in Taiwan, high schools use them all the time. Even before students turn 18, they already affect policy change. Using this kind of tool, they successfully argued that sleep is more important than additional hours of study, and that everybody in high school should start one hour later to get better sleep. And they got it — by turning their common knowledge into what we now recognize as good educational policy. The civic muscle of education.

What we've seen in Taiwan: in 2019 we switched our curriculum from literacy — top-down, memorizing the right answer from textbooks — to competency, which means fostering curiosity, collaboration, and civic care together and actually making something. Fact-check the presidential candidates. Measure your air and water quality. By 2022, our 14-year-olds were top of the world in civic knowledge in the ICCS study, while still ranking in the top three to five on PISA STEM. Purpose-based learning is so much more motivating. It's like the Pygmalion effect. You tell a 14-year-old, *behave as if you're already an adult,* and they grow up and mature like an adult.

### Sherrell Dorsey:

Audrey, you won the Right Livelihood Award in part for healing divides. But a lot of people would argue that some divides — around values, around justice — shouldn't be smoothed over into consensus. Is there a risk that tools designed to find common ground end up flattening out necessary conflict?

### Audrey Tang:

Let me give you a very concrete example. In Taiwan, we struggled with marriage equality. My grandparents, who spent a lot of time caring for me when I was young, are devout Catholics. But my parents, both journalists, are extremely progressive. So, even within our own family, it was a big discussion.

We deployed a tool very similar to Polis on the Join platform to find the uncommon ground. But the midpoint wasn't a compromise — it was a new language. New vocabulary. It turns out that in Taiwan, *hun* 婚 — which means to wed between individuals — is a different concept from *yin* 姻 — kinship, marriage between families. People were actually talking past each other, because one side wanted to maintain the idea of lineage, and the other was simply saying, *we want to enjoy the same rights and duties as heterosexual married couples.*

After our constitutional court ruled that the parliament had two years to deliver, this uncommon ground got ratified. So same-sex people in Taiwan can wed, but their families don't marry. And both sides said, “Y*eah, I see myself in this.*” It's not smoothing anything over. On both sides, there are people who cross that bridge, and people who refuse to cross it. But the upshot is that after the legislation, broad population-based agreement went through the roof — from the 30s up to around 70% today.

The point isn't that we pretend the 15% — like in the scam-ads case — doesn't exist. The point is to ask: *do you still have trust under loss?* Even when the process doesn't get you where you want, do you feel you're still in it? And do you feel the process is more legitimate because you co-designed and co-produced it?

### Sherrell Dorsey:

I love that — *you still have trust in the loss.* That's pretty profound. It also makes me think about governing for everyone. As challenging as it is to serve everyone's needs, the idea that *I was still able to contribute, I was still able to put forth my ideas, I was part of the process* — and even where my ideas didn't get the upvote, didn't get implemented, they were still heard — that aspect could potentially foster that sense of trust.

I want to ask this next question, and let me know if you're okay with it.

### Audrey Tang:

I'm structurally, constitutively incapable of getting offended.

### Sherrell Dorsey:

That's a great response. Okay. So you're the world's first openly non-binary cabinet minister. How has your own experience of not fitting neatly into prescribed categories shaped the way you think about building systems that have to work for everyone?

### Audrey Tang:

I was born with a heart defect. When I was five, the doctor told me and my family that I only had a 50-50 chance of surviving until heart surgery, which I got when I was 12\. For seven years of my formative life, every night going to sleep felt like a coin toss. If it didn't land the right way, well, I just wouldn't wake up.

That existential opportunity, coupled with my actual condition — my heart cannot beat above a certain rate, so if I get too excited, too joyful or too outraged, I just faint and wake up in the hospital — meant I learned very early on to publish before I perish. I would document what I learned each day on cassette tapes — maybe you still remember those — and floppy disks, first very soft and then harder, and finally the internet.

So, to your question: I always felt it wasn't about taking one side and saying *I am this,* or taking the other and saying *I am that.* It was more like — I experienced this today, and I share it with you. Tomorrow I experience something else, and I share it with you too. And if I don't wake up, I don't claim copyright on any of it. Do whatever you want with it. So, my pronoun is *whatever.*

The point is that if we see these as shared experiences — I was naturally born with very low testosterone, about the level of an 80-year-old male, so I had a half-puberty at 14 and another half-puberty at 25 — this interplay of energy is the gift. It makes me feel that whoever you are, whatever you experience, we probably have some shared experience.

This is what drew me into very Taoist thinking. The polarization, the tectonic plate against plate, this interplay — this *is* the energy. It's not that we solve it, or smooth it into common ground, and then we get democratic energy. No. The interplay itself *is* the democratic energy.

### Sherrell Dorsey:

That's such fascinating framing. Thank you for sharing.

I want to round this out with a vision for the future — though it also feels like you're already living in the future. For the rest of us earthlings here — you've described your original job mandate as turning the internet of things into the internet of beings. Ten years on, do you feel we're closer to that? Or has the concentration of AI in the hands of a handful of companies made that vision feel further away than when you started?

### Audrey Tang:

On my flight from Taipei to Vancouver, I used an app called Timeshifter — it turns jet lag into a jet boost. So, I don't get jet lag.

### Sherrell Dorsey:

All right, I'm going to have to download this app.

### Audrey Tang:

It tells you exactly when to wear sunglasses and when to expose yourself to bright light. So mid-flight, when everyone else was asleep and the cabin was dark, it told me to expose myself to bright light. I put on my Vision Pro and watched this wonderful Pixar movie, “*Turning Red.*” When I took off the Vision Pro, the movie was over, and I saw this sign in the cabin — I'll quote it in full, it's very short: *Stow and latch your monitor during takeoff and landing.*

We are in a takeoff. As you said, many people predict that AI systems are becoming more and more capable at designing the next generation of AI systems — that's a definition of takeoff. During takeoff, if we don't stow and latch our doom-scrolling, our polarization-per-minute — and, exactly as you said, our concentration of power — those monitors, those screens, become projectiles during a fast takeoff. They literally hurt people. People who are understandably angry about not being at the steering wheel feel very angry at the people piloting. And the people piloting feel such turbulence that they fight among themselves. That's what we're seeing.

But if we *do* stow and latch our monitors — if we look past polarization-per-minute, if we turn that into energy — this could be the best world. A world in which all the existing ideological differences can tap into small language models, community-owned, that translate across ideologies, summarize, transcribe and do nothing else. Those are the connective tissues that foster relational health. I have not met any human who says, “O*h, relational health doesn't matter — I just want to be a silicon machine free from any relationships.”* I have never met a human who says that. For us, this is fundamentally a human movement that brings us back together.

### Sherrell Dorsey:

I love that vision. And — perhaps this is the skeptic in me — when I think about the incentives of many of these companies and tools, I want to believe. I want to believe that at the heart of the opportunity to center the internet of beings — to create that connective tissue between humans who may be vastly different from each other but can find a point of sameness, of agreement — we could move cities, states, governments, societies forward together faster.

But I'm not sure that's what's actually driving all the advancements. There's a select few — folks like yourself, small LLMs doing things more responsibly — but I also feel we're up against an agenda that's less concerned about the impact on democracy and more concerned with driving revenue and profit.

### Audrey Tang:

Oh yes. Synthetic intimacy now, right? It's not just engagement anymore. Synthetic intimacy.

### Sherrell Dorsey:

Exactly. These artificial controversies that emerge. There may not be an answer — it may just be that there's always going to be a counter-force. As we close, I'd love your final thoughts on staying optimistic about the demand for these tools — maybe not from governments still trying to figure out their path, but from people who can create a groundswell of demand, who are exhausted by how the world has worked over the last decade and want change.

### Audrey Tang:

As a guest curator at TED this year, the entire arc of our session is an answer to that question. I'll quote two speakers I curated.

The first is Maya Higa, who built this conservationist dream — a 30-acre sanctuary entirely dedicated to animal ambassadors, not to tourists, because everyone is participating online. To me, she represents one of the core promises of the early internet — connecting people through curiosity and collaboration. If we call her model a *sanctuary,* which it literally is, then it's the core of rewilding the internet. But according to the standard rewilding model, cores are only the beginning.

You need two more things. You need *corridors* — the free interoperability, the ability for people to travel from one network, say Facebook, to another, like Bluesky or Truth Social. The corridor is now being built. In the state of Utah, they passed the Digital Choice Act, which takes effect next July. It says that anyone who moves from one network to another gets to keep their community. The old network has to keep forwarding new likes, new follows, new reactions — exactly like telecom number portability. You keep your number when you switch providers. Sanctuaries are no longer niche. The large platforms have to compete on quality and care, because they can't squeeze people inside walled gardens.

After the cores and the corridors come the *carnivores*. To keep elks from overpopulating, wolves need to move in packs. That's where the civic power you mentioned comes in. Once we start organizing ourselves in groups of 10, finding that uncommon ground, there's a blooming of civic power that was previously distanced by wildfire, by fog of war, by polarization-per-minute. Using these new tools — Polis, broad listening, deep listening — people can band together and start putting pressure. Not necessarily at the federal level. Maybe just on mayors and governors. Actually, many mayors and governors are already on board.

We just saw a proposal in the California State Legislature to institutionalize a broad-listening platform called Engaged California, which successfully turned polarization into co-creation on wildfire mitigation in Los Angeles and on public-sector use of AI. Imagine if these wolf packs — 10,000 people each — set an agenda on Engaged California. That could really change city- and state-level politics. You have 50 states — 50 labs of democracy. Some of them, I predict, will become frontier labs.

### Sherrell Dorsey:

I really appreciate that breakdown, and the optimism. It gives a more optimistic lens on local power — the mini-public looking like cities, like states, governance happening on a smaller scale but potentially branching out.

Audrey, I just want to thank you for your work, for your time here at TED, for your contributions on stage and off this year. Thank you so much for joining us on TED Tech.

### Audrey Tang:

Thank you. I'll end by quoting another speaker, Carissa Véliz, who said: “R*ebel against tyrannical predictions.”* If anybody tells you something is inevitable — about you, or about the future — just reject it. Or even laugh it off. Because that's exactly how we overcome the FOMO of so-called superintelligence.

We the people are truly the superintelligence.

Thank you. Live long and prosper.

### Sherrell Dorsey:

Thank you so much, Audrey.

