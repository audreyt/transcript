# 2023-10-18 Conversation with Yasmin Green and Örkesh Dölet

### Yasmin Green:
It’s really cool to come to your office.

### Audrey Tang:
Yeah. It’s a startup.

### Yasmin Green:
It feels that way.

### Audrey Tang:
We’re just one year old.

### Yasmin Green:
Oh! Is it just one year?

### Audrey Tang:
Yeah, we started last August. When our website went up last August, missiles flew over our head when Pelosi visited.

### Yasmin Green:
That was the same time you started…? Oh my gosh.

### Audrey Tang:
That was the same time. Exactly.

### Yasmin Green:
Wow.

### Audrey Tang:
Born at an interesting time.

### Yasmin Green:
So, where to begin… Do you have any recollection of speaking to the Jigsaw team?

### Audrey Tang:
Yes.

### Yasmin Green:
Okay. So, okay.

### Audrey Tang:
2018-ish.

### Yasmin Green:
Which, yeah, really rocked everyone's world. So, we’ve been around for 12 years now. The person who used to run it, a guy called Jared Cohen, who I helped… He and I, we started it together. I took over when he left last year. And we're looking… you know, it's mostly software engineers on the team but it's an interdisciplinary group, and we're looking for kind of where to take the portfolio.

And one of the areas, you know, one of our most popular products is called Perspective API.

### Audrey Tang:
Yeah.

### Yasmin Green:
Yeah?

### Audrey Tang:
Toxicity… whatever…

### Yasmin Green:
Oh, wow. That’s amazing. Okay.

### Audrey Tang:
Language modeling…

### Yasmin Green:
Yes. So, like a year ago, we're like, why don't we, you know, it's fine to try to take things off, you know, to help moderators decide what to remove. But maybe we could actually think about what would be the attributes of healthy discourse and what to promote.

So, for a while, we've been working on constructiveness classifiers, trying to be like, what's the inverse to toxicity? And it's really cool that we can model this stuff. Like, you know, like personal anecdotes, because that breeds empathy if somebody's telling you that they're putting you in a position...

### Audrey Tang:
That’s right. The bridge-making narratives.

### Yasmin Green:
Totally that. Totally that. And one of them, for example, is understanding-seeking. That like when someone asks you a question, you can tell, actually, intuitively if they're trying to probe you, get information to disprove your point, or if they're really trying to understand. So, we're modeling that. And, we have this vast network of publishers who use this. And so hopefully, we can actually kind of shift the social discourse, like organizing principles to something constructive.

But it still feels like just kind of tweaking something that's not really working very well, social discourse online. And so, and then look at Twitter that they've been in. As Elon Musk's kind of degenerating Twitter, just this flood of people who just want to create a new Twitter. I mean, there are Threads, but then there's so many just...

### Audrey Tang:
Bluesky…

### Yasmin Green:
Yeah, it's just like, I don't know why people think that it's going to turn out so differently for them. But that kind of like social, you know, the micro-blogging model of the early 2000s, that's still what we have. So, I'm really inspired by this idea that why don't you actually constrain conversation at the foundation, and then, rather than just saying, we're free speech, and then putting all of these band-aids on it to, like, you can't… it can't be misinformation, and it can't be hate speech, and it can't be personally identified. But why don't you constrain it, like something like the vTaiwan model…

### Audrey Tang:
Exactly.

### Yasmin Green:
And so, I wanted to like hear where you, when you were excited about that, when you first trialed that, was quite a few years ago, and that was…

### Audrey Tang:
We're still working on that. We just published with Anthropic. People use Polis, the tool you mentioned, to create a…

### Yasmin Green:
You just published?

### Audrey Tang:
Like… today.

### Yasmin Green:
OK. Oh, are you kidding?!

### Audrey Tang:
Yeah, it's on my Twitter.

### Yasmin Green:
I’m going to write this down. Really?

### Audrey Tang:
Yeah.

### Yasmin Green:
OK, amazing.

### Audrey Tang:
Anthropic is different from OpenAI in that instead of people in Kenya manually rating the outputs for toxicity or whatever, they have this constitutional document based on the Universal Declaration of Human Rights and all that, and the Sparrow Principles, actually, from DeepMind. But it seems that it still has bias. And for example, most of the users, actually, are not American, but especially for people who are Muslim, who use either OpenAI or a cloud from Anthropic, there is a lot of implicit bias just based on the ways it's used and so and so. So, we work with them.

### Yasmin Green:
But wasn't there a bunch of crowd worker input into the…

### Audrey Tang:
Yeah, that's the Kenyan workers I mentioned for OpenAI.

### Yasmin Green:
But doesn't Anthropic have that as something for its even foundational model…

### Audrey Tang:
Anthropic is basically using a language model to supervise.

### Yasmin Green:
I thought that was later…

### Audrey Tang:
…language model. That’s how they distinguish themselves from the OpenAI way. So… but now, the constitution is co-created by around 1,000 statistically representative Americans, who've done this wiki survey using Polis technology, exactly as you mentioned, a constrained setting. And so, they invite the best bridge making statements to be the constitution for the cloud Anthropic. And they trained another AI…

### Yasmin Green:
So exciting…

### Audrey Tang:
And this AI performs equally well in capability. But in terms of care, like less bias and so on, performs much better. The people's AI is much better. So…

### Yasmin Green:
The people’s AI…

### Audrey Tang:
Yeah.

> (laughter)

### Yasmin Green:
Is that what they're using? They're so good with these marketing terms.

### Audrey Tang:
Well, it's actually our term.

> (laughter)

### Yasmin Green:
Oh, that's… but you're also so good with that too… marketing genius…

### Audrey Tang:
So, we're very interested in using language model technology to shape the conversation, not just in a moderation kind of way, but rather as an active companion kind of way.

### Yasmin Green:
So, what was the, well, I have to read the paper now. This is not the right way around to do it… but what was the starting prompt for those 1,000 representative Americans?

### Audrey Tang:
Yeah, so basically, we run two experiments. One was OpenAI, one was Anthropic. With open AI, the prompt was in terms of generative AI, what are…

### Yasmin Green:
Wait. Who did this with OpenAI and Anthropic? Was it you…

### Audrey Tang:
Yours truly.

> (laughter)

### Yasmin Green:
In all the spare time that you have? Or as part of the Ministry of Digital Affairs?

### Audrey Tang:
Yeah, this is my 20% project.

### Yasmin Green:
I love that.

### Audrey Tang:
So, yeah. I work with an ex-DeepMind researcher, Saffron Huang, and also an ex-Microsoft researcher, Divya Siddarth. But the three of us kicked this off this March. Feels like a lifetime ago.

### Yasmin Green:
Wow.

### Audrey Tang:
And it's been working really well. Now we're probably going to work with Meta on the third iteration. The Meta one is quite unique, because their Llama model has openly available weights, it means that we don't have to wait for Meta to retune, like we did for OpenAI or Anthropic.

Any community can just have this brainstorming session about what is better speech. And then, they can tune their local Llama models so as to fit people's expectations.

### Yasmin Green:
That would be the biggest gift to Meta, actually showing that their open sourcing is a gift.

### Audrey Tang:
I know, I know. It would legitimize a lot of people.

### Yasmin Green:
So totally. Yeah.

### Audrey Tang:
I think Nick is quite interested in this. We had two long discussions last time in Kyoto just a week ago.

### Yasmin Green:
Really? So… sorry, you were explaining So you did two experiments, OpenAI and…

### Audrey Tang:
So, one is using all our ideas, which is like Polis, except it's paired, ranked. Basically, for a person… I can just show it to you right now, why not?

### Yasmin Green:
Yeah.

> (laughter)

### Audrey Tang:
So, um… but the idea is really quite simple. Each person gets these choices between two equally important… Like this is a wiki survey.

### Yasmin Green:
Who made all our ideas.

### Audrey Tang:
Right.

### Yasmin Green:
Who’s that by?

### Audrey Tang:
This is from some researchers in Iceland. So, when it comes to making an essay for the public, I want to make sure. And then there's two choices written by your fellow citizens. And what's important to you, like they're designed to stay in your box. Or I'm not saying the tools are more useful or competent than they actually are, right? So, once you vote, and so on. And then after a while, the voting results are analyzed by a language model. And then, that's used to tune an AI.

### Yasmin Green:
But it's analyzed by a language model? But are you putting free text in there as well?

### Audrey Tang:
Yeah, it's free text.

### Yasmin Green:
So, you both vote and submit.

### Audrey Tang:
Right, exactly. So, once you start voting, you can at any time add your own idea.

### Yasmin Green:
So, the language model can cluster by bit.

### Audrey Tang:
Exactly.

### Yasmin Green:
Is that part of Polis?

### Audrey Tang:
Yeah, yes. So, this and Polis are two different front ends, and they both are admitted to this conversation. So, we actually run our own as well with our Ideathon, which is part of the Ministry of Digital Affairs. So, this is what people felt, and you can easily summarize this. But…

### Yasmin Green:
Is that public?

### Audrey Tang:
Yeah, all this is public. And more interestingly, instead of just summarizing, you can actually challenge a cluster. So that you can go into a cluster, and you can say, “can you elaborate?”, “I disagree.”, “Why do you believe in this?”, “What about, I don't know, mass unemployment?”, and so on. And then, it uses the original voting rank as clusters to synthesize a conversation. So, instead of an executive summary, this is a compressed nuance without losing nuance.

### Yasmin Green:
Wait, how did you get to this? Sorry, I was getting compressed. How did you get to this? What about mass unemployment? And then the AI…?

### Audrey Tang:
And so, the AI basically synthesized every argument it can find from the cluster in the latent space. And then, they synthesize a persona to answer this question based on the collective blended volition. So, this is very useful for me as a decision maker.

### Yasmin Green:
Does it sometimes do some really bizarre things?

### Audrey Tang:
I think it's very tuned now, so it's really useful.

### Yasmin Green:
So, then you could share this with me?

### Audrey Tang:
Yeah, of course.

### Yasmin Green:
Can you show it right now?

### Audrey Tang:
Yeah, of course. This is called Talk to the City. You can just take a picture.

### Yasmin Green:
Yeah, picture. Yes, ok.

### Audrey Tang:
And I have an interactive demo of this in my blog.

### Yasmin Green:
Can you go to your blog page?

### Audrey Tang:
Yeah, sure, sure.

### Örkesh Dölet:
Speaking of picture, can we take a picture?

### Audrey Tang:
Yeah, of course.

> (laughter)

### Yasmin Green:
So funny. I didn't even have to take a picture with you. I just took a picture of your screen.

### Audrey Tang:
Yeah, so this is my blog. You can just search for Digital Democracy and the Age of AI.

### Yasmin Green:
Because… yes. Yeah, I think this idea of putting, So, we do a lot of work at Jigsaw on actually aut-…

### Örkesh Dölet:
Oh, it's OK. I'm terrible with this, but you both look wonderful.

### Yasmin Green:
With autocracies like Iran, China, and Russia, mostly it's about trying to just get people access to the internet. But in an autocracy, firstly, they are the only ones that have an internet that aligns well with their governing ideology. When we started in the early 2000s, we were like, well, the internet's going to democratize everywhere. And in the end, actually, the only governments that it's really worked out for are the CCP, who has exactly the internet they want. And Iran’s got this halal internet that it's accelerating towards. And they have an easier job because of getting an internet that supports their society, because they disallow dissent.

And in democracies, we actually have a harder job, because we need ideas to come into conflict with each other, for the good ones to thrive. And we do have an internet with a lot of conflict. But I think it's got people at the center of the conflict instead of ideas. And what I think you're doing is you're centering the ideas instead of the people, which is really brilliant. I think that's where Jigsaw should go.

So, I suppose the question is, based on what you know about us, what do you think… Because I don't know if we should be trying to inform policy… policymaking. I don't know if that's like, can we plug into governments? Can we, you know? I don't know if that's like… I was thinking, you have the minimum viable product. I was thinking, what would be the minimum viable conversation? What is a conversation that couldn't happen today with the talk, I mean, before I saw that? But I was trying to just inspire myself and the team. What are we trying to make happen, other than transforming conflict into something productive, which sounds a bit abstract?

### Audrey Tang:
Yeah, I think… so, I thought about this a lot. This is kind of why we have a Department of Democracy network instead of Department of International Cooperation, like every other ministry. Because, first of all, we only work with democracies, but also, we also work with democratic elements in autocracies. And this is important because people, exactly as you described, who live in autocratic environments, nevertheless, they seek this kind of democratic solidarity. So, we invest in technologies. First, of course, very basic one, like IPFS and so on, tamper-proof conversation, and so on. And this, I knew, aligns with Jigsaw really well.

But lately, we've also worked on Edge AI, which is a language model that compress this kind of collective volition in it, so that it fits in a USB stick. It's just 10 gigabytes, 13 gigabytes. And then, if you can send that in, it's like the, I would say, campaign called Flash Drives of Freedom, right? That sends USB drives to North Korea. To North Korea, the sneakernet, right? But it only contained selected pictures and video, right? But for exactly the same amount, which is like 20 gigabytes, you can actually send a highly trained language model in. And then, from that point on, you don't need internet connection anymore. You can just ask the strategist within the USB stick.

### Örkesh Dölet:
20 gigabytes will do the job.

### Audrey Tang:
20 gigabytes will do the job.

### Örkesh Dölet:
Alright. That's a good idea that Reporters Without Borders get into.

### Audrey Tang:
Yeah.

### Örkesh Dölet:
Yeah, yeah. Yeah, okay. Wonderful.

### Audrey Tang:
Yeah, and part of those edge models can run this kind of crowd deliberation by itself. You don't even need an outside connection. They can run it in a community, in a workplace.

### Yasmin Green:
What do you think about, you know, we've done stuff on, like, often when I feel like the bad actor that we're trying to defend against gets upset, it's usually a sign that, you know, you're doing well. You know, like when I remember we were doing stuff against ISIS, and then they would, you know, write stuff specifically about us. I was like, well, that's a sign of impact. We don't make money, so I'm always looking for weird signs of impact.

And so, if we were to be kind of like hosting some kind of transformational conversation, it should attract people to try to mess with data. Not just spam, but maybe even more sophisticated. Inauthentic coordinate… So, how might you think about, I don't know, that threat, defending against it. Because for me, Taiwan, I understood that it was open, right?

### Audrey Tang:
No, it's grassroots, right? So, vTaiwan is just a bunch of people applying this methodology, like Polis and so on. And it's not a government project.

### Yasmin Green:
They're actual users, though, I mean. When you have like an Airbnb or Uber, anyone could….

### Audrey Tang:
Exactly. Start such a conversation.

### Yasmin Green:
Do you need to be in Taiwan, for example?

### Audrey Tang:
Not really.

### Yasmin Green:
So, if a bunch of people in Airbnb's headquarters wanted to participate, they could.

### Audrey Tang:
Exactly. And the original vTaiwan community, which is not sponsored by the government in any way, recently just partnered with the Turing Institute at Chatham House. And they together formed this interesting democratic alliance that also worked with OpenAI, which is distinct from the Alignment Assemblies that I just mentioned.

### Yasmin Green:
Oh, this is an alignment assembly? Maybe you mentioned. That is the alignment assembly?

### Audrey Tang:
Yes, that's from [CIP.org](https://cip.org/alignmentassemblies). And then the vTaiwan community actually started their own democratic conversations, focusing on, I think, LGBTQ+.

### Yasmin Green:
Oh, right, I think we went to a… my colleague couldn't be here, but he and I went to a… we went to the hackathon.

### Audrey Tang:
Oh, you did?

### Yasmin Green:
Yeah, on Sunday. And we got the, someone very kind person, Chihhao, translated for us. So, we had all the presentations at the end, and one of them was OpenAI.

### Audrey Tang:
That's right, that's right. So, that's grassroots, that's not my ministry.

### Yasmin Green:
Yeah, yeah, right, right. And they made it. But I'm talking about, which is… that's a whole other phenomenal story. But I'm asking about, once you have it deployed, if it's consequential, the conversation, then people will have an incentive to mess with it.

### Audrey Tang:
Exactly.

### Yasmin Green:
But there's no prevention at the moment for people who should not be in the conversation. For example, really, I would imagine that if you're having a conversation about public policy in Taiwan, only Taiwanese people should participate. That's just my own bias.

### Audrey Tang:
In the Ideathon which I just showed you, you have to either have a local SMS number, or you can use FidO if you're abroad, and you're enrolling, for example. In a week or so, we will send the government SMS, starting from our ministry and six other ministries, from this single number, 111. And this number, which is like a blue tick for official communication, is safeguarded by local telecoms to disallow foreign impersonation. So this is how we do rudimentary authentication.

### Yasmin Green:
That's good. The other case, you had 1,000 people, so you already had them, so you didn't have to worry about…

### Audrey Tang:
Right, exactly. Yeah, it's a sortition, right? A random selection. So, in both self-selections, but guarded by SMS and FidO, or sortition, which is based on a known customer list for statistical representativeness, these two are quite robust. In the Airbnb conversation, what happened was that Airbnb sent an email to all its members in Taiwan, saying, please go on Polis and support…

### Yasmin Green:
That was them, oh, they did, oh, okay.

### Audrey Tang:
It's a marketing email. So, it's open to everybody, but yeah. It's open to everybody, it's self-selection. So, it's actually local Taiwanese. It's not a foreign interference, but it's an interference by a stakeholder saying to everyone.

But because Polis measures what we call group-informed consensus, which means if you have two groups, and one… let me just show you the Polis conversation. It’s easier that way. We’re actually having a Polis conversation right now around public money, public code.

So, as you can see, this group, this just started, so not a lot of people. 10 people actually occupy a higher area than 37 people. This is dimensional reduction, right? And so, if these people mobilize and vote exactly the same, the number may increase, but the area does not. And the bridge-making statements will only work if it convinces both sides, so it doesn't pay, actually, to astroturf.

### Yasmin Green:
How does the identification of the bridge-making statement work?

### Audrey Tang:
Yeah, so it's exactly the same as community notes, because community notes took the Polis paper and implemented it.

### Yasmin Green:
So that part's not AI, though?

### Audrey Tang:
It is AI, it's just not deep learning. It's just normal k-means clustering and stuff.

### Yasmin Green:
Okay, yeah. It’s not language…

### Audrey Tang:
Yeah, it's not language modeling. And what we call Polis 2.0, which is language modeling and evaluation works on top of this simple base and does two things: Synthesize a summary, including a synthetic avatar; and second, to steer conversation toward bridge-making statements the way your API does.

### Yasmin Green:
It steers into a bridge-making statement because they understand…

### Audrey Tang:
Because they understand how the voting works.

### Yasmin Green:
Yes, yeah. Yeah, that's a brilliant part of it, I think, of the community notes, too. It's like this idea that you're only showing the stuff that's gonna resonate, that's got the votes, but also the incentive to write it in a way that's gonna resonate with different people.

### Audrey Tang:
Exactly. Exactly, and that's actually the only way to scale now that, before language models, only local Taiwanese people speaking a whole lot, like Taigi, can make scam phone calls to scam people speaking Taigi. But now, with language models, anyone around the world can do the same now because including the voice cloning and so on is getting really, really good. And the same goes on Facebook, right? Short videos and so on can be very easily synthesized nowadays.

And so, without crowdsourced contextualization, it's just a handful of people in the International Fact-Checking Network, the Poynter network, doing this this, and they are about to be overwhelmed. So, I expect platforms like Meta to adopt some sort of community notes in the future.

### Yasmin Green:
You should be doing that, too.

### Audrey Tang:
Yeah, so maybe community notes as an idea, not as the X.com codebase. This is something we should work on together.

### Yasmin Green:
I'm sure they're gonna be really like that with their teeth doing something that Elon Musk has like, championed. But yeah, they're all gonna…

### Audrey Tang:
Well, it was before Elon Musk...

### Yasmin Green:
He did have a good judgment about that one thing. Do you have any thoughts about what we do to try to prepare for a synthetic media-flooded internet?

### Audrey Tang:
Sure. So, in addition to...

### Yasmin Green:
Of course, you do.

> (laughter)

### Audrey Tang:
No, I've been thinking about this non-stop.

### Yasmin Green:
Yeah, I've been thinking about it, too, but I don't have any ideas on that.

### Audrey Tang:
Yeah, so I think, first of all, in terms of Actor Behavior Content Distribution, ABCD, "disinformation" is at the content layer, with harms caused by distribution. But we've entirely shifted left. We now just talk about foreign interference. Foreign is actor, interference is behavior — content and distribution are outside of my ministry's mandate.

For example, if everybody can see only the SMS coming from 111 is official, any content or distribution that says that it's exactly the same as an official website, official communication, even carry on an extended conversation, like an official doesn't work anymore because there is one well-known number that all officials will use to communicate with you.

And the same goes for provenance of online, like blue ticks. So, if I have a single manifest of all my blue ticks or not social media accounts, everything else that purports to be Audrey Tang from Taiwan's digital ministry is fake. So, instead of playing whack-a-mole and saying that this is false, this is fake, this is whatever, we just say these are the trusted communications.

And the main obstacle for this is how do we recognize digital signatures across jurisdictions? So, this is something like the European wallet, European blockchain is doing, the trust systems are doing, and we're now adjusting our Digital Signature Act and the Cybersecurity Measurement Act to do cross-border signature verification. So, the idea very simply is that only digitally signed people are people, everything else is a bot.

### Yasmin Green:
Hm, that's interesting. And it requires the social media platforms to…

### Audrey Tang:
Yeah, to adopt provenance frameworks.

### Yasmin Green:
Oh, the C2PA?

### Audrey Tang:
That's content layer. At actor layer, more like the [XPOC](https://github.com/microsoft/xpoc-framework) or something similar.

### Yasmin Green:
Okay. XPOC?

### Audrey Tang:
Yeah, XPOC.

### Yasmin Green:
Okay. And then the people that are encountering content all the time online that comes from others that they don't, you know, I mean… the Twitter experiences that you see people create content and you don't know who that is, so you don't…

### Audrey Tang:
Yes. Basically when all the trusted, not just officials, but also private sector players and so on in Taiwan switched to those short numbers, like 111 or three code, four code, and so on, the legacy 10 code, the full mobile number, if it's not in your contact list, maybe people will just shift the default to say this is "likely scam."

We currently already do that. If there's a broad number pretending to be a Taiwan number calling to you, we don't block that from the NCC level because sometimes it's actually people roaming... but it's most likely scam. So now there's a mandatory voice that says “it's probably scam,” do you know this person?” before that person even gets to speak now when you pick up a roaming number.

### Yasmin Green:
Wow, that's a pretty heavy-handed intervention.

### Audrey Tang:
Exactly.

### Yasmin Green:
But okay, because it's usually right. Is there something preventing somebody creating two digital signatures?

### Audrey Tang:
No, because it's always anchored to a sovereign backed identity. So, the main thing is to not degenerate into the real name internet that PRC imposes. This is why we are working with the latest zero-knowledge protocols, like translating the Yivi app from Netherlands that lets you prove you're 18 years old or older without revealing your name or your actual age or anything else.

### Yasmin Green:
How do you do that?

### Audrey Tang:
Through zero-knowledge proofs. If you search for Yivi.app, you can see how exactly.

### Yasmin Green:
Can you just give me the one sentence summary? You can, zero knowledge proofs. But are you providing a government ID?

### Audrey Tang:
Yes.

### Yasmin Green:
Okay.

### Audrey Tang:
And for free. Everybody can now download…

### Yasmin Green:
But I need a government ID to get my…

### Audrey Tang:
Yes. If you are a resident, we also hand out the alien citizen digital certificates, the foreign CDC, which also work with our FidO app.

### Yasmin Green:
So, you're saying that you need a government ID to create a digital signature, but your information about your identity is not stored in that digital signature?

### Audrey Tang:
No, it’s not. Well, I'm also an e-Lithuanian. And a Palau digital resident. We're now working on interoperability layers…

> (laughter)

### Yasmin Green:
So, you're just prioritizing your nationalities…

### Audrey Tang:
To your question, it may be possible for me to pretend I'm three people at the moment, because I do have the Palau ID, Lithuania ID, and Taiwan ID, and currently there's no deduplication, like India's Aadhaar that does this cross-verification.

### Yasmin Green:
But does the digital signature prevent you from having multiple pseudonyms as long as they're linked to you?

### Audrey Tang:
You can do multiple pseudonyms. It's just like the Apple private email relay. So, you verify you're a citizen of Taiwan, but because you don't reveal anything else, that doesn't prevent you from creating pseudonyms. And in cases where a Sybil attack and so on need to be prevented, we will ask a different kind of verifiable credential that ensures uniqueness. But again, it doesn't reveal anything else about you.

### Yasmin Green:
Right, right. They have this cool thing that they're trying at YouTube. So, they've had for a while, like government ID could be your proof, and that some people are totally comfortable with that. They have a reputation, obviously, that you're human and you're really good for a long time, which that one's, I think, gonna become a bit iffy now with autonomous chatbots.

And they have this third thing, which is… You know, Facebook for a long time had… if you needed to be verified, they could call you and video, you could do a video conversation with you? But now that could be a deepfake. So, they call you and they give you some instructions, like things, but they flash random colors of light out of the screen, and they look for the reflection on your face to check that you're 3D instead of a 2D deepfake.

### Audrey Tang:
Okay.

### Yasmin Green:
That’s really smart.

### Audrey Tang:
It’s really smart. Maybe it will work for another couple years.

### Yasmin Green:
Yeah. Oh, ouch. Okay, can we switch topic? Five minutes.

### Audrey Tang:
Sure. I don’t have anything after this.

### Yasmin Green:
Well, be careful.

> (laughter)

### Yasmin Green:
No, I want to respect your time. Um… We're working on, you know, misinformation. This is such a tough one. You know, in 2018 we went to… we did a lot of work on the Internet Research Agency early. Actually, because we… do you remember the days of Gamergate?

### Audrey Tang:
Sure.

### Yasmin Green:
We had a Gamergate attack on us at Jigsaw, because basically we got a bunch of feminists, and then we took a picture with them, feminists, like online people who were targeted by Gamergate, and then we just said, you know, preventing harassment with these women, and then they just attacked us. And it was like really just like, no one paid me any attention on Twitter. And all of a sudden, people were like, you know, feminazi die, and like social justice warrior, which I hadn't heard that term at the time. I thought that would kind of sounded flattering.

### Audrey Tang:
It does sound flattering.

### Yasmin Green:
And then, and then I was like, but there was just so much attention, so much hate, and then someone on Twitter said, oh, time to bring in the big gun, @Nero. I was like, who's Nero? And there was a guy called Milo Yiannopoulos. Remember this guy? He was like some edgelord troll person, but he wrote an article on Breitbart, and then, and then like if you search for Google Ideas, this article was ranking really highly, so they had like gamed search, found like a news publisher to put their hate on. They were all over social media. And we were just like, I think we're… And it was so, we found like a Reddit page where they were planning the attack on us, because they thought we were gonna help these feminists censor the internet, and so they wrote letters to the CEO of the company. They found out where we worked. It was very, very elaborate.

But anyway, the point was, maybe this is not 10,000 people, maybe it's 10 people. We should like, and maybe there are some technical markers, like, you know, temporal similarity, semantic similarity. Maybe, you know, ended up that like when, at least at that time, all the accounts followed each other, like perfectly. People with similar views follow each other, but not perfectly, you know, it should be more like… Anyway, so we started looking for like, we were thinking about online hate mobs, but we ended up finding the Internet Research Agency. So, it did a lot of work.

Then we went to the Philippines in 2018, because they have like, they were actually super advanced with their own crazy stuff on Facebook and Duterte, and they were starting to… they were ads on Facebook Marketplace to rent people's Facebook accounts, because Facebook was getting so good at like stopping fake accounts, they were just like, let's just use humans' accounts.

### Audrey Tang:
That's how the international scammers do now. They kidnapped Taiwanese people.

### Yasmin Green:
Okay, yeah. So, then we're like, I don't think we should be doing the detection, you know, trying to stop it happening, but you know, maybe we could work on the resilience side. So, we worked with these behavioral scientists at these universities to take a theory of change that had been around for a long time, which is the pre-bunking, and we're like, how might it work online?

And we did a lot of testing. And it's been pretty… and one of the things that's good about the way that we do it, it's like 90 second videos. They have these three parts to them, to alert someone they're gonna be, you know, manipulated, microdose them with disinformation, and then emphatically repeat it. We do like this survey afterwards for the people who do and don't see the video, of like, can they spot the manipulation technique?

So, it's actually measured, and it's like, when it's really good, it's like 10 or 12% impact of people who, you know, the control group, which is actually, no one measures anything in the misinformation world, and it's so… and we're like reaching like half of the population.

Okay. So, the question is, first thing, we're moving to a different model where we're trying to enable others to do it, not go in and necessarily, because this should be really local. These campaigns should be very local to work, so you have to kind of be in the country. So, the question is, do you think that such a thing would work in Taiwan?

### Audrey Tang:
Of course, and I understand that the Puma’s Academy, and you know, IORG, Doublethink, g0v, these people, they're already trying something like that. Yeah, but probably not coming from exactly the same school, but the idea…

### Yasmin Green:
Yeah, you're right, actually that's right. Yes, the idea of telling people what the… that's actually when I spoke to Puma, he was talking about the 10 myths of China's military might or whatever, that's exactly that.

Okay, so my question is, what do you think would be… because you're trying to pre-bunk. It doesn't work if the bunk is already, people have already accepted it, you're trying to precede it. So, what narratives do you anticipate for the coming year that you think people haven't already been, you know, polarized and politicized and kind of believed by people or firmly disbelieved? What would be worth the investment of doing a pre-bunking campaign?

### Audrey Tang:
Well, in the Taiwan case, obviously every time they try to strike the existing tensions within the Taiwanese society, and I think they're opportunistic in that it's not one ideology or another ideology, it's not one party versus another party. If people care about food safety, then it's food safety. If people care about international trade or whatever, it's international trade, and so on.

But I think because their goal is to decimate trust in democratic institutions, the underlying subtext is always that democracy only leads to chaos, that democracy only leads to people hating each other. So, it's a kind of meta-answer to your question, because if we can pre-bunk the idea that democracy only leads to polarization, then we actually tackle everything else.

### Yasmin Green:
Nobody's answered that to that question. Democracy only leads to polarization. Oh, I know, they're just looking around, and then they… what's a credible disproof for that?

### Audrey Tang:
Well, Taiwan itself is.

### Örkesh Dölet:
Yes.

> (laughter)

That's what I've always been saying to the world…

### Audrey Tang:
Yeah, but tell that to someone in DC…

> (laughter)

### Örkesh Dölet:
I did.

### Yasmin Green:
Yeah, you did, yeah. You did well on that.

### Örkesh Dölet:
The last three years, those are the people I've been talking to. I mean, in DC, it’s just…

### Audrey Tang:
Yeah, I was visiting CSIS in DC, February 2020. And I did a presentation about how Taiwan rationed out surgical masks, how mask wearing and hand washing and so on, like works wonders and so on, to absolutely lukewarm reception.

> (laughter)

I think that was one month before the US realized that it's a thing. So, it sometimes feels like that.

### Örkesh Dölet:
I wish that, yes.

### Yasmin Green:
So, that's actually, that's really magical if you did it… Because I've been thinking about how would we do the war and peace, you know, this idea that closer to China means peace, but again, I was like, how would we really also… because it came to you, you know, how is that, you know, I was like… but that is actually really beautiful, is if you could, yeah… if you could kind of somehow reinforce this.

### Audrey Tang:
If you practice democracy more, it actually reduced polarization.

### Örkesh Dölet:
It actually reduced polarization?

### Audrey Tang:
Of course, yeah.

### Yasmin Green:
In Taiwan.

### Audrey Tang:
In Taiwan, yeah.

### Örkesh Dölet:
Yeah, okay.

### Yasmin Green:
What… just because you're so good at just riffing, what are the elements of Taiwanese, the way the Taiwanese model…

### Audrey Tang:
I'm writing a book on this. It’s at plurality.net.

> (laughter)

### Yasmin Green:
Is it? Can I… Wait, wait, one second. You have some of your book online before it’s finished?

### Audrey Tang:
Yes, of course. And it's public domain. We abandoned all the copyright. So, people can, you know, translate or just say it's a copyright, it doesn't matter.

### Yasmin Green:
Wow, okay.

### Audrey Tang:
Because copyright is, you know, go the way of the dodo, with AI rephrasers. So, we're like, yeah, let's just relinquish copyright.

### Yasmin Green:
Okay.

### Örkesh Dölet:
I call myself a democracy activist. [laughter]

### Yasmin Green:
That's amazing. Okay, well, thank you so much for your time. I was sitting with, I don't know if you know him, Chihhao from IORG, and I was like, I'm going to meet Audrey. What do you think, you know, what do you think I should raise or whatever?

Because we had dinner last night and he said, oh, just enjoy the ride. And that was exactly what it was. Thank you so much for your time. I have a lot of reading to do, so I have to go…

### Audrey Tang:
I read all my emails, so just…

### Yasmin Green:
Really? Okay.

### Örkesh Dölet:
Before we go, I have been telling that the one thing that Taiwan has been doing for advancing our democracy is to turn technology, giving headache to most other democracies into our weapon to further our democratization. So, we got g0v and vTaiwan and we have all these. So, for a tech imbecile like me, what would be the word that… what should I tell, for instance, let's say Hudson Institute, if I go there and say, let's make tech work for advancement of democracy… Please give me like two lines or five, so I can…

### Audrey Tang:
You would like to answer the question, why should people care about Taiwanese democracy, about investment into technology to advance democracy?...

### Örkesh Dölet:
That I have already said. I said, we are doing our job to turn the table around, making the technologies, becoming the problem for other democracies, like United States, a weapon, an instrument for us to…

### Audrey Tang:
To advance democracy, yeah.

### Örkesh Dölet:
Yeah. So, they were like, whenever I say this, it was like they're waiting for my next two to five lines and then I got stuck there. But I know we're doing this. I know you're doing this.

### Audrey Tang:
You can introduce them to exactly the same projects we talk about: Alignment assemblies with the collective intelligence project, [plurality.net](https://plurality.net/) and so on.

These are really toolkits. It can be used to talk about other things than generative AI. It has been used to talk about Uber, Airbnb and so on.

### Örkesh Dölet:
Okay, that's wonderful. The other thing I want to ask, wonderful opportunity. Reporter Without Borders is initiating this project, co-trusted journalist initiative. Basically, a white list for media corporations to be given scores, so to speak. And then we will also be working with Google and things like that. So, when on the search engine, then the algorithm will favor those who are being given high score.

We figured, you know, RSF figured that it's easier to deal with media outlet. Although… I mean they're there, so it's much easier to deal with individuals who are also generating content. How do we get the people actually care about this? So there, that algorithm… I mean Google can help us in introducing that algorithm, or Facebook or Twitter. But what should be the method we take, for the people to get involved? Otherwise, it's just something there and the people don't use it.

### Audrey Tang:
Yeah, definitely. Now this was the question we tackled when we worked on the basic education curriculum. And that was before I joined the cabinet. And the answer to that is that we need to change how scoring system work in schools and examinations and so on. Instead of testing literacy, which is about how you consume information, we need to test competence, which is how you produce information that is serving the common good.

So, we have now classes where the teachers take the students to fact check the three presidential candidates. Or four, we don't know, right? So, you have four presidential candidates as they're having their debate or forum and so on. Or measure their air quality and contributing to the distributed ledger through air box and so on. So, the more students contribute to the information integrity online, the more they care about the skill of doing so, which is just journalism, by the way. This is basic journalism.

And so, now, we have a generation of young people who take pride in contributing to Cofacts and so on. Because that's what their teachers teach them. We even have a cabinet-level youth advisory council. We even have the open government steering committee advisor that was just 17 years old when she proposed a popular e-petition, banning plastic straws from boba takeouts. And so, by listening to these young people and saying that they are our role models, they go back and teach their parents and grandparents of the importance of competence over literacy education.

And I think really lifelong learning is what shields people against this kind of polarizing ideologies. And only by working with the education system can we really change the nature of the conversation online and also face to face.

### Örkesh Dölet:
Wonderful. That’s very, very good. Thank you. Thank you.

