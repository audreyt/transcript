# 2026-07-24 “State of Wikimedia & AI” Panel

### Shani Evenstein Sigalov:

Hello, everyone. Good morning, and welcome to the State of Wikimedia and AI. This session is being livestreamed, so please take that into consideration. And we are starting off with my co-host, Solenne.

### Solenne Lazare:

Hello, everyone. I’m really excited to see such a full room for our panel about the state of Wikimedia and AI in 2026. We’re going to look at this through the prism of the values of Wikimania 2026: freedom, equity, and reliability.

For this amazing panel we have great guests. We have **Netha Hussain**, a physician and a Wikimedian. **Jimmy Wales**, the founder of Wikipedia — I don’t think I should introduce him any more. We have **Lane Becker** of Wikimedia LLC / Wikimedia Enterprise. **Chris Albon**, Senior Director of Machine Learning and Data Engineering at the Wikimedia Foundation. **Ilario Valdelli**, Innovation Programme Manager for Wikimedia Switzerland. And we also have, remote, **Audrey Tang**, a digital pioneer — Taiwan’s former Digital Minister, and someone leading advocacy for open-source governance with initiatives such as Civic AI. Thank you all for being here.

### Shani Evenstein Sigalov:

And Solenne, for moderating this panel. Do you want to introduce yourself?

### Solenne Lazare:

Yes. I’m Solenne Lazare. I’m the Head of Product Strategy for Linked Open Data products — products such as Wikidata, Wikibase Suite, and Wikibase Cloud at Wikimedia Deutschland. And we have Shani Evenstein Sigalov with us, whom I will leave to introduce herself.

### Shani Evenstein Sigalov:

Hi, everyone. I think I know many of you, but for those who don’t: my name is Shani. I am the lead researcher these days of AI Bridges, and very happy to be here.

So without further ado, let’s begin. We have a really packed panel, and we really hope we also have a chance for you to ask some things toward the end.

Wikipedia is twenty-five years old this year. Yay — we’re celebrating, all of us. For most of those years, the question was: how do we build the sum of all human knowledge? This year, I think for the first time, the harder question is: **who gets to use it? How? And on whose terms?** That’s the crossroads in our title — Freedom, Equity, and Reliability.

We have six amazing people to share their thoughts, each coming from a different perspective. We’ll open with two of them: the person who actually started all of this, and the person who has taken it outside of our movement, maybe the furthest.

## Bookend I — Jimmy Wales: three challenges

### Shani Evenstein Sigalov:

Jimmy — twenty-five years in, Wikipedia has never been more used, but never been less visited. You’ve seen the whole chessboard. You’re on the board of the Wikimedia Foundation, on the board of the Wikimedia Endowment, and you know the communities better than anyone. Could you open our discussion by sharing what are the two or three real challenges AI puts in front of this movement — not necessarily the ones in the press, but the ones we need to pay attention to, and that we are least prepared for?

### Jimmy Wales:

Okay. Yes. Well, I would push back a little bit on one piece of the question. Wikipedia has been less visited — I remember, I think, three people came to Wikipedia the first day. So let’s remember: despite the fact that we should be concerned about a drop in traffic and a drop in visibility, we’re still incredibly famous, incredibly used all around the world. We need to take advantage of that — that we are still considered really, really important by the vast majority of people who love Wikipedia. Even if they visit less, it’s not because they like us less. It’s because we’re not showing up as much.

In terms of the challenges, I would say there’s three.

One challenge is precisely that **visibility** — how people are finding information online is changing, because you can get a quick answer from AI summaries, and that may lead you to do deeper research somewhere other than us. So that’s one of the big challenges: the traffic challenge.

The second is, of course, the **technical challenges of AI scraping** and people using our content — the technical challenge on our infrastructure. And I think a piece of that that we haven’t seen as much yet, but we will see increasing in the near future, is this: it’s one thing to say there are all these AI companies who are heavily scraping your content — so Enterprise is sorting that problem out and charging them money. But we’re about to see more and more people with very easy-to-use **agentic AI on their own machine**. So the person who has in the past typically ended up looking at three or four Wikipedia entries in a month may now see zero Wikipedia entries with their own eyes — but their machine might see fifty, as it researches things for them. So then we’re going to have a huge amount of traffic, but no opportunity to ask them, like, could you chip in? So that’s an interesting one.

And then third is: how do we in the community deal with a flood of **AI slop** — but also not be so angry about the AI slop that we can’t see how we might use AI in a productive and positive way for ourselves.

That’s kind of the landscape as I see it for those different impacts. There’s more, but I think those are the key ones.

### Shani Evenstein Sigalov:

Thank you, Jimmy.

## Bookend II — Audrey Tang: mission, not race

### Shani Evenstein Sigalov:

Audrey, you just heard Jimmy give us his view from the inside. You see the other direction, I think. You ran Wikipedia’s protocol inside a government, and you build AI that keeps the Commons’ rules. So from where you see it — advising states, building with these tools — what do you see us misjudging about our own moment? And what does the world actually need from this movement right now in the AI era?

### Audrey Tang:

Thank you, Shani, and thank you, Jimmy, for laying out the challenge so precisely.

I see us misjudging in thinking in terms of a **race**. From the inside, this year can feel like a scoreboard — like losing some race: readers arriving somewhere else; answers delivered by systems that never show your name.

But as I advise leaders in jurisdictions — and spiritual leadership — I think a race with AI, or an AI race, is really the wrong frame. And not just for us. I say this to everyone. Because a race implies a finishing line, and the AI race has a finishing line called the **singularity**, which is defined precisely as something literally beyond human comprehension. So, nobody can win a race whose end we cannot even reason about. The labs sprinting hardest cannot win the race either.

But, we like to talk about a **mission**, because we’re a movement. Right? And a mission is different, because the mission has milestones. And also, missions are what people align with.

Because Wikipedia never tried to win anyway. We tried to make sure that there will be many winners at any time. Anyone could read, anyone could correct, anyone could build on it. And so the refusal to win a race is precisely why we became the knowledge layer that everything else, including language models, now stands on.

So we didn’t lose a race of viewership or something. I think the Wikipedia movement is the reason that there is a mission in the first place.

What does the world need from this movement right now? I think it’s for us to think about what next milestones of these missions we’re setting, and setting them publicly **with** the people, not just for the people.

For example: what must all the agentic systems that Jimmy alluded to — that answer from our knowledge — do? What’s the code of conduct? Showing their sources. Provenance. Taking corrections. Returning something to the commons. All these are potential milestones. And if we frame those as milestones, then others will align with us. If we frame it as a race, they only fear us or ignore us.

So the Wikipedia movement has led the mission for twenty-five years — and just don’t let this be the year we’re mistaken for a race with the machines.

### Shani Evenstein Sigalov:

Thank you so much, Audrey. So you’ve heard from the founder, and from someone who’s shown us the proof that the model can actually travel beyond our movement. And now we want to hear from the rest of you.

## Lightning — biggest shift in three years

### Solenne Lazare:

Yeah. So all of you: you have **one sentence only** to answer this question. Compared with just three years ago, what is the single biggest shift that AI has already brought to our movement?

### Netha Hussain:

The single biggest shift for me as a community member would be our **reduced visibility**. People don’t see the edit button. They don’t engage with us on our talk pages. They don’t see our citations — which is the biggest problem I face as a volunteer editor as of now.

### Ilario Valdelli:

Yes. I think it’s really what we wrote in this white paper — the **third information loop**. It means that people not only are captured by AI, but AI gives the feeling that there is nothing to check: the information is complete. And this is a problem with society — not only our own problem. I suppose that this is a very big shift.

### Jimmy Wales:

For twenty years, people came to Wikipedia because they wanted to read an article, and along the way they became an editor. And that was a relationship with search engines — and now they’re changing that relationship, trying to keep the visitor on their page. That changes the model.

### Lane Becker:

I think AI presents our movement with an opportunity to reinterpret our mission and our values in light of the way the world works now. And that there is a genuine opportunity there to make it something that is bigger and stronger than it has ever been — if that is how we choose to interpret this moment.

### Solenne Lazare:

You all… Lane, I like that you talk about opportunity, and I think I want to first start by talking about the opportunity — opportunities within our work for the movement, for the volunteers.

## Theme — tools: value vs hype; affiliates; what to stop

### Solenne Lazare:

So Chris — you run machine learning and data at the Wikimedia Foundation. We hear a lot about AI, and of course it’s a transforming thing, but there are some aspects of it that are hype. Everyone wants to put AI in everything. Could you give me a piece of example of a place where you see AI is genuinely and in a valuable way transforming the way volunteers or the Wikimedia organizations are working — and maybe one place where it’s basically hype?

### Chris Albon:

Sure. One where it’s genuinely useful is around things like **auto moderation**. One of the tools we made at the Foundation was this AutoModerator tool where communities set a threshold for the probability that an edit is vandalism. They set that threshold themselves. Then when edits come into that community — I think on the Turkish Wikipedia it’s like 0.985 — if it’s very, very, very likely that this is vandalism, we’ll auto-revert it. The idea is to free up volunteers from things like someone putting a bunch of swear words in an article — to free up a volunteer from having to go spend the time and do this grunt work of, like, why is there a Nazi flag on the cottagecore fashion page? That’s been a really good use, because it’s sort of grunt work we can take away from people having to do that.

I think the hype that I see in general is the idea that when you have these AIs, you won’t need people to do stuff, or there isn’t value in humans doing stuff. Because what I see when I talk to folks in AI is: “AI can write text. Wikipedia is a bunch of text. Why doesn’t the AI just write Wikipedia?” But in fact, what I explain to them is: what the volunteers do — what you all do — the very last step is the text. You interface as text, but it’s about looking at sources, making judgments, thinking about things, discussing things, and the sentences of the article are at the very, very end of that. All that other work is not just writing text. And so if you have an LLM who’s just writing a bunch of text, you don’t actually get there.

And we see things like **Grokipedia** has actually really struggled from the fact that by replacing humans with just AI, they’ve had lots of problems. One of the articles cited the Kremlin, right? And a volunteer would have got that immediately: wait a minute, this is an article on Russia, you’re citing the Kremlin — that’s obviously a biased source. And the AI just didn’t get that part. And there is something that through discussion and through consensus-building — that is a magical model that’s worked for a really long time. And the LLMs are just not there yet.

### Solenne Lazare:

Thank you so much for this perspective.

### Shani Evenstein Sigalov:

Ilario — I actually want you to give us the perspective of affiliates. So Wikimedia Switzerland, as you mentioned, just released a white paper. You are supporting various initiatives around AI — one of them is AI Bridges — and we’re developing together a synthetic reasoning corpus with **Pleias** for the movement. And we actually just had this week a launch of the Knowledge Commons AI consortium, **MOSAIC**. And I’m curious: what do you think affiliates specifically in our movement can do in this moment — and in essence rise to the occasion, in ways maybe that we haven’t in the past, so we can lead by building?

### Ilario Valdelli:

I can give only my personal answer, because I don’t think I speak for everyone. My feeling is that when you should manage this big change like AI, you must shift from one single strategy to **coordination** — give a distribution of choice; give others space to experiment with different approaches. Because if you take the wrong approach, basically you lose time mainly in this moment. Very simple.

### Shani Evenstein Sigalov:

Thank you so much. Really interesting hearing both of you talk, as you are both leading investments that the movement is making in the future in AI, in new technologies. But I want to ask maybe a cheeky question: **which investments should we stop making?** In one sentence each. Ilario, you and Chris.

### Ilario Valdelli:

I can give only my perspective. In my role, I like experimentation. I must experiment. I think the best is to understand when finished experimentation, when the start of the product and the service. So don’t consider that everything must be transformed into product and service — and understand what a lifecycle means. Something that does not produce an impact must be stopped. Very simple. I don’t want to say that — that is not my role. But I can bring only this perspective from my side.

### Chris Albon:

Cheeky question, cheeky answer. I love it. I think what I see among AI practitioners is very little knowledge of what happens next. Even the folks sitting in the frontier labs are surprised by things that happen every single week. And given that, I think the thing we should think about stopping is planning large multi-year bets around things — and instead do lots of experiments, and just be okay with experimenting. Just try stuff. Because some things will work for us and some things will be a terrible idea and then we’ll stop doing them. But because we don’t know how this unfolds — and even the people who are making the models don’t know how it unfolds — it is dangerous for us to guess, oh, in ten years the AI will be able to do this, and that’s what we should shoot for. We don’t know. We don’t know next year. We don’t know the next six months. And so therefore we should try stuff. We should be okay. And I would encourage all of you to also try stuff. At the AI pre-conference there was an AI source verifier — it wasn’t perfect; it was great in some ways, and other people were like, wait, it’s not that good in this way. But the idea of just experimenting—

### Solenne Lazare:

One more sentence, Chris. Sorry.

### Chris Albon:

Cheeky, cheeky — I avoided the one-sentence part. I forgot about the part.

### Solenne Lazare:

No worries. It was so very good. We’re going to keep it between the two of you so we can move on to the next topic.

## Communities and participation

### Solenne Lazare:

I think we discussed technology, we discussed tools. Let’s bring it back to the people. So now Shani will introduce us to the people’s questions.

### Shani Evenstein Sigalov:

Yes. We spoke about how the tools are changing what we do, but it’s time, I think, to talk about the communities and participation.

Jimmy, this one’s for you. You’ve spent twenty-five years answering the question: who writes Wikipedia? And Wikidata and Wikimedia Commons and so on — you all know this is just a brand name for many, many other things. How does AI change what it means to be a Wikimedia contributor these days — and where should it **not** change?

### Jimmy Wales:

Yes. I mean, where I think it changes is: just as we have always had a small minority of people in the community who are using bots of various kinds because they have the technical ability to do it and they get approval from the community — and that’s incredibly helpful — I think we’ll start to see people using AI bots in the community, again subject to community approval. Thoughtfully. Some of these experiments will begin to work, and so on.

I think what shouldn’t change — well, it shouldn’t change in the sense of we shouldn’t give up on it; we should double down on it. If we’re having fewer people seeing Wikipedia in the first place, fewer people starting their journey as an editor, we have to really, really, really take to heart being nice to newbies, welcoming people into the movement. We’ve always said this, right? But we also had the luxury of being the fifth most popular website on the internet. And actually we had plenty of people who came to us all the time, many of them not actually here to write an encyclopedia. They were a pain in the neck — and obviously you can accidentally get into an attitude that outsiders aren’t good. So we have to really welcome people and begin to explain to them about our values and what we’re here for and all of that.

### Shani Evenstein Sigalov:

Netha — also representing the volunteer, the community perspective. You edit medical content, and it’s clearly an area where the stakes of hallucination or the wrong sentence are very, very high. What does AI look like from the inside of that editing experience? What has it given you? What has it cost you?

### Netha Hussain:

What gen AI gave me was lots and lots of time. I was pressed for time to write the most meaningful articles I wanted to write, and I just didn’t have the time because I had to fix infoboxes, I had to find categories, I had to do some **rote work**, which I really don’t love doing. I really love writing meaningful articles about medical content — but not this technical work where I always need somebody with technical expertise to talk with, to understand what’s going on. But with AI, now I am empowered with friends who are creating generous tools as soon as I ask them. On the other hand, I could also create my own tools for improving my workflow. So that gave me a lot of time.

The flip side with gen AI is that it’s driving people away from our own platforms, which means that I don’t have people to engage with. So when I have to add a citation, I don’t have as many people to ask, like, what do you think about this? So the social aspect, in the future, might go a little bit away, because we become fewer and fewer who are interested in writing content this way.

On the other hand, gen AI would also magnify my content. So whatever I write on Wikipedia, gen AI picks up, and then it shows it to a lot of people — and they don’t see the citations behind that. That makes me a little bit scared, because I put a citation and I don’t see that on gen AI. What does it mean for the audience? Yet I’m hoping we can change that, actually — that we will be able to build systems that show provenance of information. That’s maybe a different discussion.

## Lightning — advice to a 19-year-old editor in 2026

### Solenne Lazare:

Yeah. What would you tell a 19-year-old starting to edit in 2026? And I think that’s the perfect bridge with what you were saying. One sentence — in one sentence, of course. Shani is even harder on the clock than I am.

Lane, do you want to start?

### Lane Becker:

Oh. Oh, I get to start. Well, unexpected. Stick with it.

### Netha Hussain:

Don’t compromise your judgment and critical thinking. Don’t give it to AI. Think for yourself.

### Solenne Lazare:

I think critical thinking is an excellent point today.

### Jimmy Wales:

I mean: welcome. Thank you for coming. Let’s have some fun together. What are you working on?

That’s like four sentences, but they were quick.

### Solenne Lazare:

It’s okay.

### Ilario Valdelli:

No — I agree on this point, what Chris said: don’t see that you already have the receipt, that you can already answer to what will happen in the future, because the future changes. Have this capacity to rethink always, to reconsider always your conclusion.

### Chris Albon:

Experiment with stuff, try different things, and see what works.

### Solenne Lazare:

And Audrey, from maybe more the external perspective?

### Audrey Tang:

Yes. Optimize for fun.

## Kami spotlight — small spirit, house rules, write-back

### Shani Evenstein Sigalov:

And maybe Audrey — to pick up on what we’ve just heard. You build AI the other way around, in a sense. Tell us a bit about the small spirit that you keep on your laptop.

### Audrey Tang:

Certainly. I call it a **Kami (knowledge artefact management intelligence)**. It’s a new word, kind of a backronym, from knowledge management, KM, and artificial intelligence, AI. You put the two together and you get Kami. So, it’s a small, bounded steward. It runs on an ordinary laptop. And its memory, identity, ledger of sources all stay local — and with the people that they serve. None of the language-model providers can hold us hostage, and all the inference engines are replaceable. Most of them are running locally, but even people who cannot afford a laptop with 16 gigabytes of memory — these can be done through zero-data-retention API endpoints. And so because of this, it’s retirable by a contract: when the need it was built for goes away, then it also goes away. There’s no lock-in.

Why did I build this? Jimmy described the reader whose machines will visit 50 pages while the human sees zero. And that is actually coming to every laptop now. So, the only question is: Who does it answer to? And I want Kami to answer to the relationship that it actually serves — not to whoever is renting it out.

Honestly, I don’t trust my own epistemic discipline. I also hallucinate. Or anyone to steer something unbounded. So, the failure mode I fear is not the machine that refused to care for us. It is one that cares for us so well that we forget how to care for each other — how to imagine this relational care. It’s like sending our robots to the gym to lift weights for us, and then we lose muscle, and then we lose friends as well. So, a Kami is my hedge against that possibility. It’s small enough to inspect, local enough to own, and mortal enough to let go of. It’s just scaffolding. This is a property I trust most: this bounded relational care.

And I do have some house rules, right? Every claim must be traced to a ledger or it’s rejected — and that answers Netha’s fear of citations vanishing. Every reading session ends with a write-back, so it returns something to the commons, to the sources it reads from. So the 50 invisible visits are not 50 extractions. It’s not data oil. It is **data soil**.

So, I think the **talk-page protocol** is what we really need to work on: When two sources disagree, how to surface that conflict to a human, instead of silently resolving it — and to make the talk-page protocols also work inter-Kami. The text is the last step. The real work is just judgment, discussion, consensus and how to make that work. We have some ideas. We experiment on **Habermolt** — basically asking a Kami to enter into a Habermasian discussion. But that’s just one of the very early pilots. So, I also invite you to keep a Kami, and to engage in talk-page protocols.

### Shani Evenstein Sigalov:

Thank you so much, Audrey. And you mentioned your house rules. If you had to choose one that is maybe the most relevant to our community to keep in mind, what would you choose?

### Audrey Tang:

Yes. I think we need to treat every surfaced conflict as an invitation — an edit button reappearing, exactly where Jimmy wants new editors to enter. There should be a super edit button, instead of just me and my friends or people on Habermolt looping back to resolve the conflicts. That edit button for the entire web should reopen through agentic surfaces to everyone.

### Shani Evenstein Sigalov:

Thank you so much. And before Solenne takes it: we have a request from our translators that the panel speak a bit slower, because it’s hard to follow our conversation. So we need to be quick and slow at the same time.

## Enforce write-back? Gift vs exchange; equity and languages

### Solenne Lazare:

Okay. Thank you, Audrey. That was really, really interesting. Chris, I would like to maybe bounce back on the rules that Audrey mentioned the Kami has: that if an agent reads the Commons, it owes the Commons an edit. Technically, could Wikimedia actually enforce such a rule? And what would that look like?

### Chris Albon:

Hypothetically we could. I think the actual question is if we would want that. So Wikipedia is a gift, and Commons is a gift. Everything that you do as volunteers is a gift to society. It is not an exchange back and forth. And so I love the idea that people are making agents that give back. I love the people that are using that. But I wouldn’t want to enforce that as some kind of exchange that we would have to make. I love that the answers that I get from ChatGPT or something have the work of volunteers in it. I feel better about those answers, because they’re cited in that.

Now that doesn’t mean that we can let large companies burn down our servers — Lane owns the servers; he owns the money; and that kind of stuff. But I think the social contract that we have is that this is a gift to people, and I want as many people to have it as possible. And so I wouldn’t want it to be: sorry, your agent can’t give back, therefore you can’t get the Commons.

### Solenne Lazare:

Yes, thank you. I also feel what’s interesting to look at is: when we’re talking about infrastructure and creating rules to protect against the AI or to work with the AI, sometimes these rules can also have side effects for marginalized or underrepresented communities. And maybe as one note: we’ve seen it as Wikimedia Deutschland. We are working on governance for Wikidata, and doing proposals and talking with the community. We also realized that some of the rules we were proposing could have unwanted impact on marginalized communities. So that was something that I found important to address in this debate, in this discussion.

Netha — how do you think underrepresented and marginalized communities are actually affected in practice by AI, both within Wikimedia and beyond, if you have examples? And feel free to discuss biases, governance, whatever feels appropriate.

### Netha Hussain:

I think when generative AI models were made, they were made from English outward, so they were not really done with consideration for other languages other than those spoken by people with power and privilege. So because of the very nature of the model in this way, it is widening the gap, particularly in smaller languages. My mother tongue is Malayalam, and if you would ask any gen AI to translate to Malayalam, it would give incredibly useless sentences sometimes. So the gap between people who have power and privilege and those who are marginalized is being widened because of gen AI. And sadly, that’s the truth that we’ll have to face now and even in the future.

### Solenne Lazare:

Thank you. Audrey — you often say that while people talk about the singularity, as you also mentioned before, the plurality is already here. But what we’re seeing in the world is that AI development really concentrates on a few global foundation models. And at the same time, there are many languages and knowledge communities that don’t necessarily benefit from the same investments, also because they don’t represent the same commercial weight, the same market share. Do you see a future in which we have many locally governed AI systems, maybe each accountable to its own community? And do you think plurality would be the best way to ensure that smaller languages and knowledge communities are not left behind?

### Audrey Tang:

Yes. Definitely. And that future is already here, and it’s being unevenly distributed as we speak.

I think this year, many prefer local inference — edge AI — because it’s now for the first time faster, and also much less hallucinatory, compared to cloud models. So, the data soil outperformed the data oil.

And hundreds of language communities, each governing its own civic context, its own wiki and norms and talk pages, and interoperating — is exactly how the movement has worked for 25 years. The concentration — like mainframes, I guess, of our age, that you describe — is real. But also, frontier models cost billions to train. And smaller models, commercially speaking, are much easier to train together. We are already seeing, like, Thinking Machines Lab with the Tinker tool, Nemotron, many others, enabling local communities to decentralize the post-training, fine-tuning, steerability and so on. And they don’t cost a lot of electricity. And they don’t cost a lot of water for cooling. And that is, I think, a far more preferable way for communities to develop.

So, the cost of good enough has collapsed, as Mozilla’s report shows. Capable open-weight models are now within about 3% of frontier inference performance — and that’s without local context. So, bounded, inspectable and retirable Kamis are now, for the first time, a better thing.

And also — Chris, I think, briefly made a correction. Of course the Commons is a gift, and a gift enforced is no longer a gift. So, I’m not saying that we become the toll booth of the knowledge on the internet. I’m saying that we need to require the agents to surface write-back **to the human**. That’s the ability to be a good Wikipedian. But I don’t think that we need to require, like, mandatory write-back such that people get punished for it. So, just a point of clarification.

### Shani Evenstein Sigalov:

Thanks for that, Audrey. And I’m curious what the rest of the panel sort of thinks about this knowledge gap. Can AI actually help us close it? Or is it structurally just widening it, like Netha was saying before? Jimmy, let’s start with you.

### Jimmy Wales:

Yes. I think this concern about the capabilities of machine translation, for example, is 100% valid. But we should also recognize that machine translation and machine understanding across languages has improved dramatically — even into smaller languages, less economically significant languages, than in the past. And so there is some hope even on that front. And then obviously, for a community like ours, one of the most important things is the free licensing: that we’re not creating proprietary knowledge. We’re creating knowledge that anyone who can have the tool to do it — whether it’s a group of humans, or a group of humans using some new tools — can bring knowledge into and out of these different language worlds. So I’m optimistic, but it’s something that needs a lot of focus for sure.

### Shani Evenstein Sigalov:

Thank you, Jimmy. Lane — try to keep it short.

### Lane Becker:

I know. I’ll do my best. When somebody asks me if technologies can do things, I generally dismiss the question, because I don’t think technologies do things. I think people do things with technologies. So when I look at a community like ours, the question that I have is really more: what can we do? We understand these problems deeper and in a more tactile and a more real way than most other folks do. So how can we as a community take advantage of this moment — this liminal moment, this transitional moment that AI is creating in technology, that is reshaping the way that people interact with machines, and the way that they interact with each other around machines? How can we take what we understand in this moment to create space for people that may not have had space previously?

### Chris Albon:

Lane actually gave my answer, so I’m just going to pass to save a little time.

### Shani Evenstein Sigalov:

Thank you for that. I appreciate it. Ilario.

### Ilario Valdelli:

I agree on this point that everything we give is a gift. So Commons is gift — but there is also a limit. So when this gift starts to be extraction — so really used not in favor of society. I want to say: imagine a source of water, and people can drink to this source of water. After, someone takes this water to cool down the data center — an example. So basically I’m not using very well the commons. This is the point: the knowledge commons. I consider myself not only gift. What I do in Wikimedia projects is really an example — showing to other people: I like to donate to other people my knowledge; you should do the same. Okay? If you don’t give back, it’s not mandatory — but follow my example.

### Shani Evenstein Sigalov:

Thank you, Ilario. Netha?

### Netha Hussain:

All I understand from these discussions is that we, the humans of Wikimedia, should deliberately try to use AI to build tools and workflows — to harness the power of AI to help marginalized communities to grow.

### Shani Evenstein Sigalov:

I think you’ve sort of nailed it for many of us here in the room, and that’s also personally what I’m trying to do. At AI Bridges we harness this technology to help us close gaps that we all see widening, and problems that we know existed way before AI suddenly emerged in a much stronger way. But I think you’re right: it’s up to us to resist that and give a good fight.

## Trust — Seven Rules; Audrey’s preface line; deal table; principles

### Shani Evenstein Sigalov:

So we know equity in a sense decides who’s in the room even to do this work. But I think it also has a lot to do with trust. And trust decides whether anyone believes what the room is actually doing makes sense. So with this framing, with trust, I have to go back in a sense to Jimmy, because you’ve literally written the book now about trust — literally, *The Seven Rules of Trust*. Could you pick one rule out of these seven that you lay out, that the movement must not break in this AI era — and one rule that you see AI companies break all the time?

### Jimmy Wales:

Yeah. I mean, I would say **make it personal** is one of the rules of trust. Like, that’s something that we’ve always done. It’s personal in the community. A lot of people think of Wikipedia as ten million people writing one sentence each, but as we know, it’s about a small group of people discussing and debating and dialoguing about that. And then a lot of us, when we’re writing and working on Wikipedia, we don’t think about, oh, we’re helping the globe and society. We’re thinking: who’s going to read this? And what are they going to learn from it? So make it personal. And AI doesn’t even come close to that, of course.

### Shani Evenstein Sigalov:

Thank you so much, Jimmy. Audrey, I have to go back to you because first of all you’re in that book. You are one of the interviewees in Jimmy’s book. And you also wrote the preface to the Taiwan version of it — to the Taiwan edition. And you were able to compress it to a single line. Could you share that line with the room and tell us what it demands of people building AI?

### Audrey Tang:

Sure. That line is: **to gain trust, first give trust.** Wikipedia has spent twenty-five years proving that goodwill can compound. Every open edit button, every published draft — everything is a deposit into the trust reservoir. And the interest is the knowledge layer of the whole world.

So what it demands of the people building AI is a Taoist maxim — a Taoist saying: **to give no trust is to get no trust.** So if the frontier labs are going to redeem themselves in terms of the trust they have lost, they need to unilaterally trust the people: publish the sources before they’re forced to; take corrections before they’re demanded; give the commons back its due before any regulator asks. That’s a very simple thing. But it’s not a feature you ship at the end of the lawsuit. This should be the first move in the game.

### Shani Evenstein Sigalov:

Thank you so much. Solenne — I think Lane really is about making sure that it flows back, this whole idea of trust, back into our movement. So do you want to take it?

### Solenne Lazare:

Yes. Clearly, AI companies increasingly rely on our content, and you have a unique perspective here because we keep talking about what big tech does or how it uses us. But you are the one at the deal table having these negotiations. What does a healthy relationship with these big actors look like in 2026? And in your opinion, can some rules like the one Audrey proposed become a contract term — what could even write-back and attribution look like in this deal? And I think what I really want to know, and I guess other people in the room: how much power do we actually have in these discussions?

### Lane Becker:

That is a really excellent question. Thank you. And one, honestly, that I personally really struggle with. I think because power comes along sort of different vectors. There’s hard power. There’s soft power.

I think when it comes to — I do a lot of straight-up financial negotiation with these companies. And in those situations, we are actually at a disadvantage. Right? So when it comes to the pure financial transaction, I like to joke that I am Wikimedia’s token capitalist. And I also like to say that one of the funny things about capitalism is that people generally do not like to pay for something when you have already given it to them for free. And that is true. Right? So — and I think some people have heard me say this before — I often say that our licenses, which I love, are our greatest strength and our greatest weakness. And it’s really situationally dependent. Right? And then in the situation of wandering into late-stage hypercapitalism with large-scale multinational techno-conglomerates, those licenses put us at a disadvantage, because they have a lot of leverage and we have very little.

I think we’ve done an amazing amount as an organization and as a movement to create space for us to be able to get something out of that. But when I look at where that comes from, it actually comes from the place where we have a lot of power, and they have none — which is the moral valence, the moral capacity that this organization has in the world. It is just immensely powerful. And none of these companies have an ounce of that. And that is a place, I think, where we have real leverage. I don’t know that we have figured out what to do with it yet, as a movement or even as a foundation. I think that we should, because that is a place where we can really wield influence. If there’s a place where we’re going to change the way that AI operates — as this market settles, as AI goes from being a magical technology to a normal technology embedded in many, many things — I think that is the space in which we can structure the conversation, and make it work the way that we think the world ought to work.

### Solenne Lazare:

And I think that makes the perfect transition to my next question to Jimmy. In a changing world, we could imagine changing our principles because we might have to adopt maybe a more defensive approach. What do you think? Is there anything about generative AI that would require us to change our principles? Or are all these principles today more important than ever?

### Jimmy Wales:

I think they’re definitely more important than ever. I mean, if we reacted to generative AI by saying, oh, we no longer want to give our content for free — it’s just like when we saw changes to the internet that made the way traffic comes: you could get a lot of traffic by having a catchy viral headline. And we didn’t change the headlines of Wikipedia entries to be clickbait, even though we might have gotten more traffic had we done it. We just said no. Actually, we’re Wikipedia. And I think staying true to who we are, who our values are, to our human-based, community-based approach — we’ll survive the test of time, even if in some aspects we aren’t the number one short-form video platform in the world. But that’s okay.

## Audience Q&A

### Solenne Lazare:

Yeah. Shani, shall we take it to the room?

### Shani Evenstein Sigalov:

I think so. So we do want to take two questions — and with a stress on **question**, not long comments — because we want to hear from at least two or three people if we can, and then close. So hands up, please, very fast.

### Audience (Natalie):

Hello, thank you for this amazing panel. I’d like to pick up on Audrey’s proposition of a talk-page protocol. What type of experimentation could be carried out within Wikimedia projects to help design such a protocol, and what governance space would be needed to formalize such a protocol, and who could be its stewards? It’s two questions, so you can pick one. Thank you.

### Shani Evenstein Sigalov:

Can you raise your hands, by the way, the people who all wanted to ask, so I can see you? Okay. Audrey, please.

### Audrey Tang:

Okay. Yes. I’d like to start always small and concrete. Right? Just pick any mid-sized wiki that wants to experiment with this protocol, and choose one very bounded task. For example: agents that read articles and file structured talk-page reports. I mentioned Habermolt, because that’s explicitly written as a skill file — in Habermolt, on how to write back to the Habermolt talk page. So, look at that. And see that sources are disagreeing; citations not routing; or ledgers cannot verify the claims; and more. And ask what I call **system-weeder** agents — maintenance Kamis — to act on those.

And so I think it’s much less at stake. It’s like: finally we’re seeing X.com using Community Notes, bridging-based feed re-ranking, which may lead to more pro-social bridging timelines — we’ll see. And we’ll also see if Elon really does open-source everything. But it has been experimented for multiple years on Community Notes in lower-stakes situations, not the main timeline. I think the measurements that they did when it was still, well, before, when Twitter called it Birdwatch — and they continue to do this on Meta and Bluesky and so on — these are the early experiments that we can incorporate into Wikipedia space. They’re early, but they’re also very promising.

In the interest of time, I’ll briefly stop here — but I can talk for three hours.

### Audience (Patrick Gildersleve, University of Exeter):

Patrick Gildersleve from the University of Exeter. Thank you very much for the panel. I’ve seen lots of stuff this week about very cool applications of AI tools and thinking about practical implications of AI and Wikipedia. AI is also a political project. And a lot of these hypercapitalist companies, as Lane was mentioning, have political alliances with authoritarian governments and military surveillance and such. And some of them are very explicitly against the commons — digital — or even using up other commons resources. How can we reconcile this, or think about resisting this AI as a political project? Should the community be doing this, and how? Thank you.

### Shani Evenstein Sigalov:

Do we have any of the panelists who want to start this? Lane, you want to say something about that?

### Lane Becker:

I would be more interested to hear the rest of the panel on this one — which is a nice way of saying I don’t have a great answer. This is something I really struggle with. When I said earlier that we have moral force and moral valence in the world, but we don’t know what to do with it — I include myself in that list. I think that is actually a project that we should take on: asking the question of ourselves in our community and our communities. Like: how might we speak to this? What do we want to speak for? What do we want to speak against? How might we want to leverage it?

I think, at least at this point, the only thing that I can say is: there’s one picture of how technology operates in the world and what it says humans should be to each other that is being presented by these companies. And I think we have an alternate way of thinking about the way that technology can be in the world and how it can connect people, and what it can do for them and what we can do for each other. And I think that you all have spent the last twenty-five years figuring out what that can look like. And I think we might need to spend the next couple of years figuring out how to make that more visible.

### Solenne Lazare:

Thank you, Lane. Chris is the person who is building the tools. Do you want to complement that?

### Chris Albon:

Yeah. So one of the things that actually I’ve spent a lot of time on long walks thinking about is: why isn’t there a for-profit Wikipedia that is a super competitor? Why isn’t there one of these big AI companies that makes their own Wikipedia, and it’s successful, and everyone has to pay ten bucks a month to go to it, or some notion like that?

And the actual reason — I think the true reason — is that Wikipedia exists. Simply the fact that Wikipedia exists, and all the work that you do, carves out a space that any commercial entity has to compete with Wikipedia in order for it to be financially viable. But Wikipedia is free. So now they have to compete with free, and it’s highly reliable, and it’s super social, and all that kind of stuff. So every single time you make an edit, you are carving out the space that in this particular medium — of an encyclopedia that’s online and free and gifted to everybody, and easily accessible, and multilingual — you are creating that space that is very, very difficult for a corporate entity to come into for it to be financially viable.

And so that very in itself is the most political act that you could do: to actually keep editing and keep participating in the process, because the fact that Wikipedia exists means that other people don’t do that. And think in your head: if Wikipedia didn’t exist, that space would be filled in a moment. There would be ten startups tomorrow that would be trying to do that, and trying to make a financial model to build basically what Wikipedia is.

### Solenne Lazare:

Netha, do you want to close this round on this? Because Chris, in essence, put it on us, the volunteers. So do you want to say something?

### Netha Hussain:

I think our volunteers should harness all possible potential that AI offers us to be able to help them to do meaningful work. For different volunteers, meaningful work would mean different things. And AI should be there to support the volunteers in all possible ways we can, so that our editors, our volunteer editors, can do what they enjoy doing the most.

### Shani Evenstein Sigalov:

Thank you. Solenne, do you want to—

### Audience (Gabriel, Geneva):

So, I’m Gabriel from Geneva, Switzerland. Just to frame my question: I’m a school teacher. Back in the 1990s — like starting ’95 — I was teaching my students about the web and websites by creating websites. So they would create websites. Ten years later or so, like 2006, I was teaching them about Wikipedia and how to use an encyclopedia, how to edit or add information to the encyclopedia. Then we moved on to Vikidia. And so my question is: how could I do similar work with my students to teach them about using AI?

### Solenne Lazare:

Who wants to take this one?

### Chris Albon:

I can take it. Yeah. So I love that question. I think what I would do — I’m not a teacher — what I would do with students is have them use it, but have them push the limits. So the things that you realize when you first use AI: you’re like, this is magical. And I use it hundreds of times a day; I run thousands of queries every single night. It’s not magical. There’s hundreds of ways that it fails. You eventually realize how it fails, and it feels much more like: okay, this is the shape of the tool. But that only comes through usage. The person who thinks that AI is magical and will solve everything is always the person who’s only used it a few times. If you use it, you start to very quickly realize: it’s very bad at this kind of thing; it’s really good at this thing. But you need to see the shape of it.

And that’s where — for example with websites — we were apparently making websites at the same time. They could do really good things in some areas, but they would be bad in some areas. You only learned that through trying it. So maybe video back then was really poor, but text was really good. But it seems magical when it seems theoretical. But practically, these are just tools. Sometimes they’re good, sometimes they’re bad, but it is very obvious after you’ve used them a lot what the good and the bad sides are.

### Shani Evenstein Sigalov:

Thank you, Chris. And I’ll just maybe wrap your question by mentioning — because I’m an educator, and I actually specialize in technology and learning; that’s what I do — and interested in the epistemology of knowledge systems and how literacies happen and how we consume knowledge and produce knowledge: I think the question of literacy and how we teach AI literacy is what our generation will have to address by far. And my personal claim is that Wikimedians are best placed to teach that, because we are already doing all of the work of what critical thinking is, and understanding sources and referencing and how knowledge is constructed. I think we’re really well suited to do the type of experiments through our platforms with students as we have been for the past fifteen years — experimenting in the classroom with Wikipedia, and Wikidata, I would say, some other platforms as well. But that needs to continue, and in a more maybe elaborate phase — but that’s a different discussion.

## Closing — Audrey’s 2030 hope; Jimmy’s last word; wrap

### Shani Evenstein Sigalov:

I want to wrap us up. So first of all, acknowledge that we’re at time, but I do want to take two minutes of your time to properly wrap.

And Audrey — you’ve spent this hour listening to our movement, whose principles you’ve taken further into the world. What did you hear, and what is your hope for us for 2030?

### Audrey Tang:

Well, I hear a movement running its own talk-page protocol live on stage. We surface disagreements. We show provenance. We refuse false certainty. We turn conflict into energy.

I also hear the question still hanging in the air: AI is a political project. The only work worth funding is making AI more capable: Is that the case? Or is it to make it obey? Some call it alignment. But I don’t think so. I think there is another side of alignment. Some of us call it **reverse alignment** — you can find it at reversealignment.ai. It’s about redesigning our institutions and norms and skills so society can absorb AI safely and also share its gains.

But today, for every dollar making AI more capable, only a fraction goes to the institutions and commons that decide whether the benefits are shared or seized. That gap is not a law of nature. It’s a choice. And that’s why authoritarianism and tech-broligarchy seemed to grow, because surveillance gets cheaper faster than the right of appeal and write-back.

So, I think that we can resist by doing what the movement does best: by demonstrating the alternative norm. In Taiwan, we call it **forking the government**. We build a free version. We prove it works. We force the government to merge it back. History shows that institutions, when forked this way — in a way that can absorb a technology — can be rebuilt in the image of something that holds the technology best.

And the Wikipedia movement is already that — in the image of the commons. If we can extend that to the Age of AI, so that extractive versions are outcompeted by the demo of provenance and verification and contestability, that’s my hope for 2030: Because every answer shows its sources. That is something that’s the mission, not the race. And the singularity — the race — can only ask who wins. But Plurality, the movement, can ask who is missing. And the movement has only ever asked that question: Who is still missing in the room? Don’t ever stop.

### Shani Evenstein Sigalov:

Thank you so much for that. Jimmy — we think the last word should belong to the person who had the first. So what do you hope for us, 2030?

### Jimmy Wales:

Yeah. I mean, I hope we’re here. I mean, not necessarily here in Paris again, but at Wikimania — with a large community, lots of newcomers. I hope we’re seeing, whatever may happen with technology outside and traffic and all that, that we are a vibrant community of people having fun making an encyclopedia. Because that’s what we love to do.

### Shani Evenstein Sigalov:

Thank you so much, Jimmy. Solenne, do you want to close us off?

### Solenne Lazare:

Well, I want to thank all of you for coming, for being so attentive as well. And of course, thank all of the panelists. I think the discussion today was of a very high level, full of nuance, and I actually learned a lot from all of you. So thank you for this. Shani, if you have any last words before we close off?

### Shani Evenstein Sigalov:

Yes. I would say that Wikipedia’s first twenty-five years proved that strangers can build knowledge together. The next twenty-five will test whether machines make that more possible — or less necessary.

And this afternoon at 2:30, we will get practical about the pipeline that will be deciding this. So please join us if you want, and we hope to see you. And till then, thank you so much for joining us — and for staying with the trouble with us, like Donna Haraway says. Thank you. Thank you, Audrey, so much for joining us.
