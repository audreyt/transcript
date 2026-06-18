# 2026-04-14 How Community Notes Reduce Viral Misinformation

A TED2026 conversation with Community Notes builders Keith Coleman and Jay Baxter, hosted by guest curator Audrey Tang, followed by a closing note from guest curators Divya Siddarth and Audrey Tang.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/W23KEEcFqTk" title="How Community Notes Reduce Viral Misinformation — Keith Coleman, Jay Baxter, Audrey Tang at TED2026" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Keith Coleman:

We built Community Notes because we wanted to build a better informed world. And as it scales to more parts of the internet, that means more people have access to accurate information.

### Audrey Tang:

Great, so let’s look at a Community Note. That's a note. So what is it?

### Jay Baxter:

So this is a real example of a Community Note we're looking at. So basically here, the post on the left is about Iran, and it’s saying the USS Lincoln has been damaged and there are casualties. But actually the image is AI-generated. So this thing on the right here that says “readers added context they thought people might want to know” -- that’s a Community Note. And what it's doing there is it's actually giving a lot of specific details about what's wrong in the image. And it turns out that that level of detail it goes into is a big reason why people on both sides of the political spectrum actually trust Community Notes more than a generic misinfo warning.

The way these get here in the first place is they're actually written by a regular user, a Community Notes contributor, and before they show on the platform to everyone and attach on the post, they are rated helpful by people from different perspectives. So they’re not shown unless that happens.

Another quick thing to call out is actually a lot of the best notes are not just fact-checks. They can add context to posts that are correct but otherwise misleading.

### Audrey Tang:

OK, so it’s a context-engine for news, but is it also for official accounts or ads or any kind of post?

### Keith Coleman:

Yeah, so a really important principle of the program is that all posts are eligible. That means posts from heads of state [and] posts from our company can get noted. As Elon likes to point out, his posts get noted.

It regularly identifies AI-generated imagery. [There has] been a ton of that recently with the Iran conflict. It [has] detected deepfake audio of world leaders. It covers lighter subjects like entertainment, fashion, etc.

And as you can see up here, we’ve even had multiple notes on both recent White House administrations. And at least in one case, the White House actually took down the posts [and] issued an updated statement.

And you can imagine there was a person, a random person on the internet, [who] wrote that note. You know, this isn’t a famous person. They went out there, saw the White House said something wrong, typed in this note, put it up there, and then suddenly, leaders of the free world changed their public statement. That’s like a superpower for people. So you can see why they're motivated to contribute.

### Audrey Tang:

Yeah. So a teenager, I heard, caused that retraction, and it really is a superpower. But what is the mechanism? Can you take us back 10 years ago before this superpower gets invented and distributed? What caused the invention?

### Keith Coleman:

I mean, the origin, for me, goes back to 2016. I was just a Twitter user then. I was following the 2016 election. There were three televised debates that year, but every day, there was a debate on Twitter. So that’s where I was following. That’s where the world was following. I remember getting a lot of good information, but it was also hard to tell what was true. And I was thinking, just sitting on the outside, thinking like: How is the world going to solve this problem? How are we going to do this in a way that works, and that people feel is fair amidst polarization?

So then fast-forward three years. I was working at Twitter at that point, and the industry had tried a lot of stuff by then. Facebook had built a huge fact-checking program. Twitter was working with fact-checkers. And we also had internal teams that would try to review posts and decide whether they were or [were] not misleading.

And there were a bunch of issues with it. It was just very clear these solutions were not solving the problem. There were issues with speed. So typical fact checks, just to put it in perspective, were often coming back in two to four days, which is like, infinity in internet time. Scale was an issue. Typically, people could review, I don’t know, [an] order of 10 posts or topics a day. And even if you could solve those, trust was the fundamental issue. There were just a lot of people who did not want, or trust, tech companies to be deciding what was or was not accurate.

And so, I was managing a team at the time, handed that off and just went to go prototype crazy new ideas, one of which became Community Notes.

### Audrey Tang:

OK, so the crazy idea, just to play back, is to think from the bottom up: asking people to trust random strangers on the internet. And amid a very high PPM -- polarization per minute -- environment, as you just alluded to, why would people trust random strangers?

### Jay Baxter:

Yeah, it’s a really good question, and it’s one we got all the time getting started. But the reality is people do trust Community Notes on both sides of the political spectrum. And I think there’s a couple [of] big reasons why.

One is the process behind it. It’s totally open, transparent, verifiable. You can actually -- and this is pretty wild in the world of social media -- you can actually download the real algorithm code that runs in production. You can download the real data, the Community Notes and ratings, [and] run the code on the data to verify that there is no funny business that we're doing on our end. There’s no override button. So it’s really by the people.

I think secondly, the notes are just really good. So they speak for themselves, they tend to be really accurate. And the main reason behind that is, I think, the principle behind the algorithm that doesn't ingest any sort of external authority, it actually decides what notes to show by looking at agreement from people who have disagreed in the past. And sometimes we call that “surprising agreement” or “bridging.”

### Audrey Tang:

OK, it sounds like [it’s] time for a visualization. So we have two wings, and people post notes, and then what happens?

### Jay Baxter:

Yeah, OK, so just to orient you: what we’re looking at here is every dot is a Community Note. The y-axis there is how helpful our algorithm thinks the note is. And the x-axis is the point of view of the note.

So you can see on the left and the right the red and blue. Those are polarizing notes -- so only really found helpful by people on one side or the other. And it's super important that those don't actually show on the platform. Actually, the only notes that show to everyone are the ones in the green oval at the top. Those are the ones that are found helpful by people who typically disagree. There’s actually a bit of a community moderation element here too, where if you write too many of the notes on the bottom, you can actually lose your privilege for writing Community Notes.

And one thing that’s really cool about this algorithm. If you compare it to something like a more naive upvote-downvote system, like a majority rules type of thing, something like that would just end up showing really biased notes.

Our algorithm actually takes advantage of partisanship and polarization. So for any Community Note on a polarizing topic, there’s always going to be someone out there who's really predisposed to disagree with that note. So before they’re going to rate it helpful, they're going to go fact-check it from every angle possible. They're going to really check the sources in a lot of detail. And as a result, the notes that are actually found helpful in this way, tend to be really accurate, tend to use primary sources and tend to be pretty neutral in their language.

### Audrey Tang:

OK, so people on both sides, after turning polarization into essentially fuel, right, geothermal energy, [are] uplifting something and both sides are happy.

But the person getting noted may not be very happy. So [let’s] say, a head of state gets noted, and the head of state happens to have the phone number of your CEO and just calls Elon and says, "Take it down by tomorrow morning." What would he say?

### Keith Coleman:

Yeah, so emails like that, calls or whatever, they do come in. Fortunately, the answer is really simple: we have no override button. So if you're not happy with a note, you need to take it up with the people.

And this [was] kind of a crazy idea when we started. We went into a room full of trusted safety people and we’re like, “Hey, so the notes that show are going to be the ones that the people decide, and we can’t take it down.”

### Audrey Tang:

There's no veto.

### Keith Coleman:

There's no veto. And they’re like, “What? Are you serious? What if there's a bad note?" But I think the point was if it’s the tech company’s opinion, why is anyone going to trust it?

It needs to be the people's opinion. And so we stuck to that principle. Everyone got behind it. And we have no way of changing the status of a note. Which is wonderful.

### Audrey Tang:

OK, it is wonderful. And so what happens to the post after it gets noted?

### Jay Baxter:

So what we’re looking at on the left is a typical, representative post. This is actually a real post. And we're looking at how many people have seen it over time. So the y-axis there is views and the x-axis is the time since post creation.

And you can just see this thing’s going super viral at the start, all the way up, until it gets noted. So that's the green dot with the yellow dotted line there. Basically after that point it totally flattens out [and] gets almost no more views.

And the kind of crazy thing about this is it's actually not getting down-ranked by our For You algorithm. This is actually just because of what we call “organic user behavior,” where basically people are realizing now that the post is incorrect because the note's on it. So they're just liking it less and reposting it less. I think this is really cool.

And one thing that I also love is, because our data is totally open, a lot of researchers from around the world have looked into this and found the same thing. So people from Stanford, MIT, UW, Paris and Luxembourg have all actually found a very similar thing: reposts will drop by about 50 percent, or 2X, after a note is applied. This is really big in the scale of social media. One or five percent, one would be pretty big in the scale of typical A/B tests.

One thing that I think is really heartening about this is that we know from this and other studies ... that people are not just entrenched in their beliefs. When a note is applied to a post, they’ll actually agree with the core claims in the post less, and I think that’s really cool.

I guess there’s a little bit of a mixed blessing here though, because actually post authors will also be more likely to delete their posts after they get noted. So in that way, the best notes actually get seen very infrequently. So I'm torn about that, because just for me personally, I think not everyone agrees on this, but for me personally, I’d rather see a post and a note than neither at all, because that’s probably not the only time in the world where you’re ever going to see that particular wrong claim -- maybe you’ll see it off X somewhere in another post. And for me, seeing a lot of notes has kind of increased the skepticism that I have when reading things.

### Audrey Tang:

They serve as inoculation, essentially.

### Keith Coleman:

Yeah, I think one other thing to mention about this graph is it's kind of a big deal that this happens organically. People often assume the world is very polarized -- certainly it feels very polarized.

But [the] people here, they’re just making a choice where they see a post. They see a correction, and they’re like, “Things are wrong. I'm just not going to share it." And that's happening across the political spectrum. And we’ve seen that pattern again and again.

When we first were designing the product, we did interviews with hundreds of people, left and right. And it was really obvious that most people just want to know what's going on in the world. They know they're consuming incorrect stuff. They just want to sift through it. And this is just showing that in action. When given information, they're going to try to make a good decision.

I think people often assume, man, it must be tough to work in the space of misleading information. You must get sad all the time, whatever. Actually, I feel very optimistic working on it because we see there’s quite a lot of agreement, and people are actually quite reasonable.

### Audrey Tang:

Wow, OK. So the PPM is going lower.

### Keith Coleman:

I hope, it seems like it's lower than it might feel.

### Audrey Tang:

Amazing. So let me now push on a more cynical take. Anyone who [has] spent five minutes on the internet is probably thinking “Now there’s going to be a way to game this, maybe many ways to game this.” And just one example: I co-wrote a paper called "Malicious AI Swarm." It talks about one person forming like 5,000 agents -- the machine kind.

And some are coded left, some coded right. They behave completely normally. They even contribute to Community Notes. And just when the controversial issue or election happens, then they manufacture a surprising agreement and just “note” something that is actually true. How do you deal with that?

### Jay Baxter:

Yeah, manipulation is a real thing. People are always trying to game social media algorithms, and Community Notes is no exception. So I think one thing to call out is that surprising agreement mechanism does provide a bit of a defense against a more naive attack than the one you describe. There's a lot of people with the same view, all piling on, trying to get an incorrect note showing -- that’s not going to work.

But for a more sophisticated attack, like the one you describe, we do have a lot of defenses in place. So just to name a few, we do things like requiring a verified phone number from a trusted carrier, just to increase the probability that we're dealing with real humans. We look for raters who have rated things very similarly in the past. And actually, we might treat them as the same person just to limit the influence of really similar behavior. Another thing is we can look at random samples of raters, and if they're rating things very differently than self-selected, possibly malicious raters, then that's a very important signal. And we have other things too: there’s “rater reputation” to deal with low-quality people.

But I think another key thing to call out is even with all these defenses, Community Notes are incorrect sometimes. Now because it is really rare, we actually get this self-correcting property where the incorrect notes attract a lot of attention, and they’ll draw a lot of raters to go quickly rate them not helpful, and then they'll stop showing. And I think that self-correcting property is super important also in a breaking-news situation, right? Something that was true a few hours ago, may not be anymore. So it's great that notes are not set in stone.

### Audrey Tang:

OK. Notes being wrong is noteworthy and people recursively improve. Indeed, I've seen it happening on X for quite a while because I was a long-time contributor. It just feels like magic. It's like Wikipedia or Grokipedia. When many people swarm into some controversy, it gets really nice.

But what about the other situation: a niche topic just developing fast. There's just not enough attention to bootstrap the initial surprising agreement. I’ve also seen like five hours, 10 hours go by without any consensus at all. How are you going to tackle this speed problem? Because as you pointed out, next day, it's already gone.

### Jay Baxter:

Well first, just to level set on speed, I think Keith already mentioned the previous state-of-the-art fact-checking would often take on the order of days, and Community Notes is usually more in the order of hours, so it is already quite a bit faster. Notes can appear as often as [in] about 20 minutes on a brand-new post. But they can actually appear instantly if there's already another note out there that’s matching on a URL or image or video. I think on top of that, one thing that people really like is if someone actually sees a post and engages with it before a Community Note is appearing, we'll actually send them a push notification later so they get the correction as soon as the note comes out.

Now, even with all that, I think it’s super important for us to keep making Community Notes faster. People want instant context -- and rightfully so. So to that end, what we've done last year is we actually opened up, an open API for AI contributors. And this is a little bit of a crazy thing in the totally open spirit of Community Notes, just like a regular person can be writing notes, we let regular people write their own AI-note writers and submit notes to our system.

And what we've seen so far is it's actually working really well. The notes are really fast and they’re quite good. But you know, definitely because it's AI, they're wrong some of the time. So the way [we] treat this now that’s been working well is we still have a human layer where humans rate the notes in the same way as any other human-authored note. And what we're working towards now is a way for AI and humans to collaborate more effectively, to co-write better notes faster.

### Audrey Tang:

So humans are not just downvoting or upvoting but working with AI models.

### Keith Coleman:

Yeah. The idea is can we have humans and AI co-write these things together, co-create them together? And does that allow us to do this at a much faster speed and larger scale? What you’re seeing on the screen here is an example of what that looks like. This is new.

If there’s demand for a note, like people are requesting a note on a post, AI will take a first shot at it. Humans can write too, but AI will take a shot. And in this case, this is based on a real example, the AI thought this video was from 2017 -- and it turns out it wasn't.

So humans go in there and they’re like, “Hey, actually, this is from 2022 in Ukraine.” And a bunch of people rate it and they make these suggested improvements. They can also leave suggestions on style or tone. So they can say, “Hey, I think this source is biased” or "I think you should use a primary source. It's going to be more trustworthy." And then the AI takes that, regenerates a note and usually gets it right.

And what's cool about this is first, you get a better note on this post people care about. But two, all of those corrections, all those suggestions are training data that you can feed back into the AI. So you can make it less likely to make that mistake again. You can make it better at researching in the first place. And also you can make it more neutral, less biased. So all these human suggestions make better notes, and they make better AI.

### Audrey Tang:

OK, so just to play it back, this is not Grok helping humans to such a degree that it takes over all the judgment calls. It is basically human teaching AI -- collaborative learning -- so that the translation between communities like climate justice on one side [and] biblical creation care on the other, the AI model learns how to translate -- and then what?

They become better at this kind of translation? Is this a new way to reward AI models? How does it work?

### Jay Baxter:

There's this thing that we sometimes call reinforcement learning from community feedback, as opposed to just reinforcement learning from human feedback, which maybe would use potentially a smaller bias set of non-representative people. And in the case of Community Notes, what it would look like is directly training the model to be writing notes that would be maximally likely to be found helpful by a simulated set of raters who typically disagreed in the past.

### Audrey Tang:

OK, well, that's really nice.

### Keith Coleman:

Yeah, it's cool.

### Audrey Tang:

So still, someday I just open X, and I just see peak slop. The marginal cost for generating synthetic media, even synthetic intimacy, is now falling so fast. Sometimes I feel that whatever corrective mechanism we invent, [it] is not going to be fast enough for this kind of peak slop situation.

So why should anyone here believe that Community Notes and collaborative notes will evolve to meet the demand?

### Keith Coleman:

So definitely in the last six weeks or so, with the Iran conflict, we've seen the biggest surge in synthetic media that I've seen, at least in the kind of misleading info space. And I will say like, we're on the frontier here. So this is the highest-scale, highest-speed solution that exists. These are new problems, so we don’t know what’s going to work. We can’t guarantee the problem will be solved, but I think there’s a bunch of reasons to be optimistic.

For that problem, like [the] synthetic media surge, we can both scale up the corrections, and we can both change the fundamental incentives and dynamics of the system. So in terms of scaling corrections, we talked about AI. Just to put some numbers on that, in the last four months alone, we've doubled the number of notes that are showing on X. So that’s not trivial for a scaled service -- 2X in four months -- I think there's clearly headroom on that. Is it 10X, 100X? But there's clearly headroom to grow.

The other thing on the incentive side, one of the reasons people post these things is they can make money off of it through creative revenue-sharing programs. And so we've recently put into place some changes to the policies there where, if your post is noted, you can't make money off it. Also, if you post AI-generated footage of a war or conflict and you do not clearly call it out, you are suspended from the revenue-sharing program for three months. If you do it again, you're suspended forever. That’s kind of a big deal. Those will shape the underlying motivations people have.

### Audrey Tang:

Chris, our curator, when we talked earlier, asked this, I think, very insightful question because we've been talking about defense, right? Defending against all those manipulations and engagement through enragement and so on.

But is there a future in which social media, instead of pitting humans against one another, puts people and connects them with each other, elevating the voice, that bridge? And you’re like: we have just the demo.

### Keith Coleman:

Yes, we are building this. This is an awesome future. So we have a pilot running, what you're seeing on the screen is what this looks like. The idea in Community Notes, we find, [is] kind of like corrections or context that's helpful to people from different points of view. What if we could find the ideas or opinions that are liked by people from different points of view?

And then when it happens in the pilot program, you see what you're seeing on the screen here. The post will just get a call out saying "liked by people from different perspectives." And we see this: people were very happy to see Delta not allow Congress to skip the TSA line until TSA was funded. Yeah, you're among millions of people who also feel this way. And we see this agreement across a lot of topics, [even] things that you think of as controversial. We see it across immigration, across the economy, taxes, international conflicts, etc. There really is a lot of agreement out there, not on everything, but there's quite a bit of it.

And the concept is if we can identify that, [then] we don’t need to boost this to start -- just to show people when there's agreement on something. First of all, I think they'll find it interesting, it's a curiosity. Second, it might incentivize more of that. Like maybe people will try to speak more in a way where they can find that agreement. And get more momentum behind those ideas.

### Jay Baxter:

That's a really good point. I think in the same way that Community Notes ... cause posts to spread less -- even though there’s no downranking in the algorithm -- you’ll probably see something analogous here where there's just a positive second-order effect from making that common ground common knowledge.

### Audrey Tang:

So it's a common knowledge engine that turns polarization into what we can all live with. This is truly visionary. And the thing about it, because this thing is open-source, it is open data, means that not just X but rather Bluesky, Truth Social, everybody, can just plug in that stream. And so AI can learn from that and then connect the communities back together.

So what if we apply this engine beyond social media? Can you paint a picture of what that would look like?

### Keith Coleman:

So where my head always goes is imagine for one session of Congress, everyone just focused on delivering where there was agreement, whether it’s immigration, taxes, whatever, I think people would be stoked.

### Audrey Tang:

Yes. I would be stoked.

### Keith Coleman:

There's a lot of agreement on these topics. If all we did was pursue the areas of agreement, I think people would be pretty happy with the direction the world was going. And so my hope is, with programs like this, if we can identify common ground at internet scale, it'll make it a lot easier to create a future that humanity likes. And so hopefully we can help with that.

### Audrey Tang:

And with that, Jay, Keith, thank you for being our best builders and showing us that a pro-social media future is not in some sci-fi. It's already here. Thank you.

### Jay Baxter:

Thank you, Audrey.

### Audrey Tang:

I’m Audrey Tang, and I’m a guest curator along with the fantastic Divya Siddarth at TED 2026.

### Divya Siddarth:

As guest curators, we get to bring people who are doing incredible work onto the TED stage, help them find ways to share that work with the world and be able to create a dialogue between what we think are some of the best ideas out there and solving the problems we care about the most: AI, democracy -- these big questions -- and the TED audience and really the wider world.

### Audrey Tang:

And we chose the interview format to bring Keith and Jay in because we really feel that the 18-minute talk format, as good as it is, is not doing full justice to their job, which is training an AI to understand the differences between, say, climate justice communities and the biblical creation care communities and the various different aspects that this social translation can do to our democracy. So I tried to push them really hard in every answer they gave, and they took it like champions.

### Divya Siddarth:

I think one of the great things about this talk is [that] a lot of it is about Community Notes, which is a fundamentally defensive approach, right? We understand that the world is full of lots of bad information, we try to prevent the bad stuff from spreading.

But I love the ending, which is on what would it look like if we flipped this? And I hadn't thought about that as much before, where if we flipped this to say, “As much as we know the kinds of corrections people agree on, we could also figure out the kinds of information and positive solutions people agree on and make that actually be the thing that people are focused on online instead of all the other stuff that they tend to focus on online.”

### Audrey Tang:

The ending talks about [how] data is soil, so that the understanding between different communities tend together this garden of AI agents that grow with our communities, loyal to communities and not trying to extract anything, but just to regenerate our deep understanding.

> (This transcript is distributed under a [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.en) license.)
