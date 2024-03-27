# 2024-01-01 Interview with Microsoft Research

### Madeleine Daepp:
Thank you so much for agreeing to participate in our research. Is it alright if I record this conversation?

### Audrey Tang:
Of course.

### Madeleine Daepp:
So I am planning to use the content of these conversations in our, you know, affiliated with the research organization at microsoft. So we are hoping to contribute to the public conversation. The most common way that people like to be represented in the research is either by sort of name, organization and title, or just by description. For example, a digital minister. It's probably too specific. Something more like a journalist. How would you like to be identified in the study?

### Audrey Tang:
Since we're going to publish the co-edited transcript, just call me Audrey, and I'll be identified as Audrey Tang.

### Madeleine Daepp:
Terrific. Thank you so much. And we would like to come back to you with any quotes to ensure that you're represented fairly, sort of a member checking process. Is that okay with you?

### Audrey Tang:
Yeah, of course.

### Madeleine Daepp:
Terrific. And finally, what's the best way to communicate with you going forward?

### Audrey Tang:
Email, or you have my Signal.

### Madeleine Daepp:
Terrific. Thank you so much. I appreciate it. Great. So I think we can go ahead and get started if that sounds good to everyone.

### Audrey Tang:
Of course.

### Madeleine Daepp:
So I think we wanted to start with kind of just a general opening question, which is that I think we've all read quite a bit about how you are using generative AI in your own work and on your own computer.

I'm just really curious. It sounds like you have llama operating on the edge in your device, is that right?

### Audrey Tang:
LM Studio.

### Madeleine Daepp:
Yes. Can you tell us just a little bit about how you set that up, your workflow?

### Audrey Tang:
Trying out phi-2, by the way, which is promising.

### Madeleine Daepp:
Oh, you're trying phi-2? Yes. From Seb's team?

### Audrey Tang:
Yes.

### Madeleine Daepp:
And my good friend Marah on the engineering of that project. Can you tell us just how that's going for you and how you're liking it?

### Audrey Tang:
Sure. So I got this macbook with 96gb of RAM/VRAM. Doesn't make a difference for M2 Max. And so I've been fine tuning models for replying to emails since late march this year.

### Madeleine Daepp:
You're using it to reply to emails?

### Audrey Tang:
Yes.

### Madeleine Daepp:
And so you're fine tuning on your own speeches. Do you find that it captures your voice?

### Audrey Tang:
Yes, I think most pre-training materials already have my creative commons zero materials. I think it helps a lot that I have been publishing for the past seven years, transcripts like this with journalists, with lobbyists and so on, with a very clear CC0, free of copyright delineation. and so because of that, it's almost guaranteed to show up in any pre-training corpus, like even the most copyright sensitive ones will have my speech in it.

So when you ask any of those pre trained models to facilitate a conversation the style of Audrey Tang, they actually know what we're talking about. and so I think this gives me a very easy entry into fine tuning based on the private correspondences, like in my emails, because all the cues are already there in the pre-train material.

### Madeleine Daepp:
So one thing that's coming up for me is I'm realizing we could have prepared for this interview way better by having a bunch of practice interviews with AI. [laughter]

### Audrey Tang:
Yes! and they would represent me at my best. Not me just waking up.

### Madeleine Daepp:
But they might capture your older perspectives and not capture some of the sort of change over time in your perception.

### Audrey Tang:
That's somewhat true, yeah. I would also say though, that because I said very publicly that I'm taking all the sides when I enter politics, like I'm all partisan, I don't have a party affiliation. When I hear a constituency saying something I don't quite understand or agree with, I always think it's my problem, not theirs. I would spend time with them, speak their voice and so on.

And so, because I take this “turning conflict into co-creation” stand, I think mostly the pretrained models learn that instead of a fixed position that I may flip-flop over time.

### Robert Ness:
Have you been able to test or verify that?

### Audrey Tang:
Yes. Well, it depends on the quality of the email replies. So even before I fine tune based on my email replies, already the open source or openweights models, they can imitate my style of, like, if it's a confrontational email, if the email is asking something that's pushing the boundaries, and so on.

If I ask it to facilitate or reply in the style of Audrey Tang as digital minister, I've never seen a confrontational response. so it imitates my communication style fairly well. I wouldn't call it figurative modeling. It's just a communication style.

### Madeleine Daepp:
I think what I'm curious about here is you've made so many transcripts public, right. And when I think about a lot of the conversation around privacy and copyright, all these things, we so often talk about not giving the models access to our data.

### Audrey Tang:
And also it's. Sorry, just clarification. This is all in the context of conversation. So it's not just my speech. In the context of my conversation with 7000 people.

### Madeleine Daepp:
Wow. So you have different types of conversations and different types.

### Audrey Tang:
Exactly. Because I don't think the style doesn't exist in isolation. If I just pluck everything I say, that would not form a style. A style only forms when situated in its conversational context.

### Madeleine Daepp:
Yeah.

### Audrey Tang:
So I insist on publishing the whole context because it explains the how and why. If you only get my words, that's just the “what”, the product.

### Robert Ness:
What are your thoughts on? So when the larger models ingest this data, it does not distinguish between what the external context is and what you're saying. If it's annotated.

### Audrey Tang:
It's annotated. This is entirely annotated with Akoma Ntoso, an XML format.

### Robert Ness:
An XML format.

### Audrey Tang:
Yes. Right. So there are tags for nonverbal expression. There are tags for when someone enters, somebody leaves the room. There's context for the time and space, there's the context of who is responding to whom. It allows for very strong annotations.

Of course, we don't do all our transcript with that detailed annotation, but at least the time, the occasion, and who is present, who is talking to whom, which part is verbal, which part is nonverbal. Laughter, like everybody laughs, is different from somebody laughing. And so these are annotated.

### Robert Ness:
And have you evaluated whether or not it can actually generate XML well?

### Audrey Tang:
Well, I usually just ask it to generate a markdown, which is easier, and we have a markdown.

### Madeleine Daepp:
I'm curious. So some of my past research has focused on equity in these systems. And so it's fascinating to me that the system serves you so well because you have so much data in it. Right. And when you think about how different populations are represented differently in online data and internet data in different languages in the data, what do you think about, you almost have what I, as an American, would call a privilege in being so well presented in the data center.

### Audrey Tang:
Definitely, yes.

### Madeleine Daepp:
Yeah. So what do you think about, and how do you advise other people in terms of what they should and shouldn't put on the internet so that these tools can serve them?

### Audrey Tang:
Yeah. And I think the privilege only emerges because currently pre training is costly and cannot be done incrementally and doesn't distribute very well in terms of computation. So it is the particular characteristics of the pretraining process that is this kind of privilege. This is not an insight, this is what everybody already agrees on. [laughter]

### Madeleine Daepp:
It's an insight in this context.

### Audrey Tang:
But the insight is this, though, that if people can as a community, easily do something that is functionally equal to pretraining, namely, for example, people speaking a certain language, like the Mozilla Common Voice, unifies the way streamlines, the ways to input that particular language, and for them to essentially co-create a LoRA of sorts, tag it on a pre trained model.

### Madeleine Daepp:
LoRA?

### Robert Ness:
A low-rank adaptation.

### Madeleine Daepp:
Ah, thank you.

### Audrey Tang:
Right, so an extension to an existing pre-trained model. Yeah, it turns out one of the breakthroughs earlier this year was that training the pretrained models may be expensive, but tuning, that is to say, to tune the LoRA, to tune extensions to it.

It turns out you can do it on my MacBook and increasingly on my phone as well. And so there really is nothing preventing people of less privilege as long as they have a way to organize together, to collaboratively teach a model that fits their cultural context.

And we will also see later in this interview, it is also possible to steer the norms, the human feedback part, without relying on paying people in kenya and so on, but rather just co-creating what's called a constitutional document, a code of conduct.

### Madeleine Daepp:
Like Anthropic.

### Audrey Tang:
Right, like Anthropic. And again, Anthropic merges that as part of their pre-training fine tuning process. So it is currently very centralized. But we have seen now that it is also possible to see constitutional-like alignments purely on fine-tuning LoRAs.

### Madeleine Daepp:
Purely on the fine tuning layer?

### Audrey Tang:
Yes. A kind of cultural LoRA.

### Robert Ness:
There was a lot out there. Can you parse some of the things?

### Audrey Tang:
Yeah, we very quickly went into the details.

### Madeleine Daepp:
Yeah, it got real deep real fast.

### Robert Ness:
Zoom out and let me see if I can repeat some of that in the back. So firstly, LoRA being a method for kind of low compute fine tuning of a pre-trained model. So I know that there's a lot to know when llama was released and then LoRA came out, then we saw this kind of explosion in open-source activity, right? And I'm hoping you can comment a little bit on that, how you're feeling from somebody who's a champion of open source, how you're feeling about these types of fine tuning methods and how they make these models more accessible. And then I want to kind of gradually move into how you think that helps support participation.

### Audrey Tang:
So, first of all, I think that's only the second time there's been a Cambrian explosion of LoRA. The first time was stable diffusion. So when stable diffusion went out, there was a huge community specializing in training visual image text to image LoRA that enhances part of the picture in a particular style.

So there are LoRA that take whatever that's generated and make it look like doves or make it like manga and things like that. So instead of prompt engineering the style, one can just imagine the style. And because getting the source materials for this kind of style transfer is actually quite easy because everybody got a phone with a pretty good camera, you just go and take pictures of before and after transformations, and you can easily curate your LoRA for that kind of style curation and so the community around stable diffusion very quickly discovered that those LoRA stack. So you can append like three, four different LoRA, which are trained by different communities, but taken together, they will make the eyes actually be in the right place, the limbs, the right counts. [laughter]

And so, as we have seen from the progression of DALL-E and Midjourney and, and whatever, a lot of those contributions eventually found its way back to the successful generation of those retrained models, because people now understand that you can stack those community contributions together. And so I think these are the beginning of what we would call an open-source community, because it's two things. First, the barrier for initial contribution is low enough so somebody can scratch one's own itch. And Second, it's composable so that merging a fork doesn't cost days and days of work.

So open source dynamics only emerge when these two conditions are met. And in terms of stable diffusion, I think these are met earlier. And then when we participate in hugging face, quantizing models, fine tuning LoRA, I would say around june, july, the same dynamic emerged in hugging face around the language model space on llama weights. And later on, of course, many others, like Mixtral, became essentially the new mainline. But the dynamic is already there.

### Robert Ness:
It's very interesting, particularly in some of the forking off into unstable fusion, some of these various open-source communities. You're saying that it is composable, so number one is having a fine-tuning method like LoRA.

### Audrey Tang:
Like that runs on a personal computer, not a H100.

### Robert Ness:
Yes. And the second being that they stack.

### Audrey Tang:
Exactly. These are easily composable.

### Madeleine Daepp:
Is that a known set of preconditions? Like, is there a theory or research on those two conditions being key to open source, or is that an insight that you've had?

### Audrey Tang:
I cannot give you a doi citation, like right now, but I can find it after.

### Madeleine Daepp:
No pressure. I'm just curious. It's really interesting to think about these two features also as a metaphor, right, in policy, right, of low barrier to entry and composability, and sort of what that opens up in terms of who can participate and how.

### Audrey Tang:
Yes.

### Madeleine Daepp:
Interesting.

### Robert Ness:
And then again, with large language models, you're seeing that fine tuning methods, low-rank fine tuning and other many fast fine-tuning methods that work on your personal device, where you're seeing, is there a similar kind of composability there that's kind of fueling this open-source community on.

### Audrey Tang:
Yeah, if you go to a hugging face and search for “gguf”, you will see like every day there's dozens or so of such findings.

### Robert Ness:
So the next point that you brought up was that, for example, with the, in terms of public participation, maybe coming together using polis or taiwan, some kind of a constitution, and fine tuning on this constitution. That's what we think is the ideal mechanism for.

### Audrey Tang:
Yeah, this is what OpenAI calls collective alignment. It’s variously called community alignment or decentralized alignment or whatever.

### Robert Ness:
Can you talk more about your feelings about this? I personally have a little bit of skepticism about it. I'm curious what your thoughts are.

### Audrey Tang:
Skepticism about this rationale or compatibility?

### Robert Ness:
About... Trying to be political here. [laughter]

### Audrey Tang:
A general reminder that you can edit afterwards. [laughter]

### Robert Ness:
I suppose. I guess my concern is a paradigm where we work with an organization, community groups, to come up with something along the lines of an ai constitution and then do fine tuning on this constitution and then call it a day. With respect to alignment.

### Audrey Tang:
Yes.

### Robert Ness:
It seems...

### Audrey Tang:
We can do it tomorrow also, like every day. It's continuous.

### Robert Ness:
Can we talk more about what is the ideal process? What does the loop look like? What is the iterative process?

### Audrey Tang:
Sure. Right. So one example that I like to use is this Heal-Michigan demo from talk to the city, and this is public information about public urls. Since you're in societal resilience I figure this is a better example. Are returning citizens like formerly people in prisons, and with extended interviews facilitated by professional community leaders, ingested as vimeo, videos, transcripts and all that into larger language models. So this is something that is always sourced. Like it doesn't hallucinate these points. All these points are actual points. And so it does three things.

First, it identifies a common voice. So these interviews, I'm sure all of you have done plenty of ethnographic surveys, may not have a narrative of their own, but multiple, mutually supporting statements across many interviews form a coherent narrative. So a language model, first, they can actually automatically, entirely automatically surface these narratives and tell you that there are like ten narratives in this population.

The second thing is that it can synthesize a language model fine-tuned so that you can actually talk to this cluster. So it's like an executive summary that talks back to you. You can say that we have a new situation here, we're asking for input and so on. As a synthesized personality from this cluster. How would you respond to that if there was an interview question that you asked during the interview? So this is the second thing. It turns summaries into something interactive.

And third is that it can find a bridging narrative, that is to say, because the narratives actually, this is principal component analysis. So you can actually see there are some narratives that are not quite connected to the other narratives. And so by moving the latent space, you can actually synthesize narratives, like fuse this void. Nobody actually said that. But if you're going to construct a bridging narrative that brings people to something they can live with, even though not perfectly understand, like this is necessary, at least say that this may probably be relevant, right? Then the language model can synthesize that sort of bridge making statements.

And then here we are dealing with a classic case of epistemic injustice. Because if they do not say the things that have a way to make to the language models, like if this is already RLHF’d, already aligned and the alignment was opposing this kind of narratives, then these voices are kind of censored or muted. That's just how alignment works, right? And so part of the community alignment or constitutional alignment is for the community to go back and see how, like I said these words, but I didn't mean it this way. In your summary, I said these words, but not in that context. There was a forced context by the language model and so on.

And so to iteratively get those feedbacks and then based on those feedbacks, to fine tune that model to be more attuned to their population. And so ideally, I would say you can do this every day, maybe in a chatgpt-like interface, if somebody feels that chatgpt has wronged them in terms of biases and other stuff. Currently, if you tell chatgpt, you will apologize profusely and then make the same mistake immediately again in the next session.

### Vickie Wang:
The best apology is changed behavior.

### Madeleine Daepp:
Yeah, that's not what we're getting.

### Vickie Wang:
Not yet, no.

### Audrey Tang:
And like one concrete example, when I speak tâI-gí (台語) with chatgpt, it almost always tell me something in cantonese, which is not tâI-gí. And then I will point out, this is Cantonese, and chatgpt would be a sycophant. Apologize profusely and whatever. And then it still gets it wrong.

### Madeleine Daepp:
Right.

### Audrey Tang:
But currently, there's no systematic way for that to trigger a local fine tune or a community fine tune that then infuses this pretrained model with something that I would say you know, like putting my eyeglass on. Like, I'm going to speak with you in tâI-gí and so please use this LoRA to talk with me in tâI-gí. So that's what I have in mind.

### Robert Ness:
So in the initial step, we're making some kind of classification. Then we surface perhaps some kind of dashboard, like that. Some representation of what's happening in the latent space with some really smart ux, I hope [laughter], to see whether or not their voices are represented.

### Audrey Tang:
Yes.

### Robert Ness:
And can we talk a little bit about, first off, how would we surface that that dashboard is interesting, but is it sufficient? And then secondly, that kind of very specific signal going back to say, all right, you haven't aligned with our voices on this particular issue. How do you feed that back in? It's got to be different from the initial constitutional ai alignment process.

### Audrey Tang:
It's not that different, right. If you have a Polis or AllOurIdeas or Remesh or whatever input layer, the product or input layer is not by itself a constitutional document that came later, that's already a processed artifact. The raw data is just a matrix of statements and valence, like thumb up, thumb down, or relative priority and so on.

So it's this shape that is native to Polis or Remesh or AllOurIdeas. And so what we do is that we ask the language models to ingest this shape. And the constitutional document is used first to check the people have something, a social object that they can agree on. This huge matrix is not native to our minds. So we reduce that into something like the summary you just saw, so that people can coedit and so on. And it also has the benefit of blending volition.

Like when people situated in this kind of collaborative conversation agree to find common ground, they would agree on a constitutional document that they individually would not produce. So aggregating individual coalitions doesn't guarantee this blending. This blending only happens when there's a social object to blend into.

So then we use that to further tune the behavior, the ethics code of whatever you call it, to the resulting language model. But the preference is what always goes first, and then the exchange style, communication style goes later with the constitutional alignment.

### Robert Ness:
Priority would matter, because it's an attention based mechanism.

### Audrey Tang:
Oh, yes.

### Robert Ness:
So the attention based mechanism is going to prioritize the thing that came later in that order.

### Audrey Tang:
But if you run it like every day continuously, it doesn't matter. So this is what the talk to the city people with the taiwan people are now calling this recursive public agenda setting. So it's recursive public because we expect the agenda to shift and the community to evolve, and so to freeze something in time and call it the constitution.

But we can also open up the constitution so that it can be done at any level. Incremental fine tuning, I think that is the check and balance here, because I totally agree with you. Only the largest labs can afford to do this fine tuning and constitutional alignment, and only every half a year, like from clock two to clock three or whatever, but if anyone who assembles four people in a living room can start fine tuning it for these four people. Then it becomes a check and balance to the privilege on the upper.

### Madeleine Daepp:
Go ahead, Robert.

### Robert Ness:
Yeah, there's a few little threads here to pick.

### Madeleine Daepp:
Go for it.

### Robert Ness:
Why not use the RLHF interface instead? I mean, if OpenAI can hire anthropologists and doctors and lawyers and stuff to do fine tuning to provide feedback, why not a grassroots approach to that?

### Audrey Tang:
Yeah, that's obviously part of it. It is the aggregation part. Right? So, like the collective intelligence project, as part of alignment, assemblies work with open air to do precisely that. They sent 1000 invitations to statistically somewhat representative Americans that are already customers of OpenAI and so on. And so this is essentially a wiki survey. It is not unlike randomly polling ChatGPT users to improve their product by filling out the survey. The only difference is that the surveys are free form.

Like you would like ChatGPT to behave this way, then you write it down, and then you get to vote on other people's preferences as well. And so what this actually does is that it creates a prioritized result, a rank order list, which, as I mentioned, is the native data format. And this is how it looks like this is isomorphic to polis. Like, when it comes to making AI safer for the public, I want to make sure that the data works and people are compensated fairly or that it doesn't use up a huge amount of resources, like water or energy, which is more important.

But you can add your own idea, like something is even more important. And so after a while, you will have this rank order list, which can then be analyzed by GPT-4 into something like a constitutional document. Right? So obviously the top score is on disinformation.

### Madeleine Daepp:
I know, and I want to pull on that thread next because it's fascinating that it's the top score, but can I ask just maybe two questions? I'm really interested in the social technology or social infrastructure that goes with these technologies, because when I think about vTaiwan, you know, I've chatted with Colin and some of the other folks involved in Polis and ShuYang, and I think we often talk about Polis or AllOurIdeas or Remesh as these digital tools that make it make engagement magical and possible. And everybody has a voice.

But as an urban planner, I know that if you want to reach hard to reach populations, if you want to reach returning citizens, you can't just put a policy on a website. And so, as I understand v taiwan, right, you have humans who go to taxi drivers or go to young people who might use uber and try to, try to bring in the set of people that you need in the conversation, or the folks most affected by the problem. And so I'm curious how you think about the complementary social infrastructure, right, when we have all of these technological possibilities, how we make sure that our social infrastructure also makes sure that the right set of people is at the table.

### Audrey Tang:
Yeah, I would first say that we were just dealing with that, right, because the whole point of having open-source tools is that you do not wait for facilitators or urban planners or digital ministries to run such conversations. The whole point of v taiwan is that anyone who cares about certain communities can run the process. And because the process result is composable, one can then compare notes between two very different groups surveying very different communities on similar topics. That's why it's called recursive public.

So I think the social infrastructure here is based on making sure that it's like, help the helpers, right, the existing community organizers, grassroots organizations, civil society groups, and so on, see this as augmenting, not as an authoritarian force. So whatever polis or AllOurIdeas or whatever, must not get in the way of their original work. It is purely one of two things. It is purely to make sure that their work transmits cogently to more people that they cannot immediately reach because of composability.

And also that it helps to save their time to identify the crux, the nuance, to compress the nuance without sacrificing the nuance, as facilitators do at the end of an assembly. Usually they co-write an executive summary, but that is where the bias enters the most. Based on the facilitator style, one almost always conducts epidemic injustice. And here, the tools we just talked about can help surf that lone voice cluster and say, that was also mentioned, but it's not in your executive summary. So it can keep the facilitator honest, but it's not there to replace the need for facilitators or human energy. It is just to make sure that the degree of coexistence is higher. This Glen Weyl person has a [beautiful diagram](https://raw.githubusercontent.com/pluralitybook/plurality/main/figs/PPF.png).

### Madeleine Daepp:
We know Glen quite well.

### Audrey Tang:
Usually it's phrased as a trade off, like, as you scale, you have to lose some nuance.

### Madeleine Daepp:
Yeah.

### Audrey Tang:
Or as you go more intimate and co-present, you can only do this with 150 people, and that's only in the most pressure environments, usually just ten or 100 people at most. But the point of these technologies, plural technologies, is to go here without sacrificing this. So this is the up and right direction. So some zigzag improvements. But at no point do we say people need to fit the technology which would go right downward. Right.

### Madeleine Daepp:
I want to push back, of course, in a lot of this work, this idea that people's needs from these models that they're composable. Right. Or that you can bridge between two communities and there will be some sort of shared reality, how do you meaningfully engage with power in that conversation?

If you have returning citizens, there is a subset of the population that has an interest in not having those folks have a voice in these models. And there are many people who have a real strong interest in not having these systems work for everyone.

And so, if you're relying on helping the helpers, you're relying on underfunded nonprofits to bring in this sort of general conversation, what are you doing to mitigate the sort of structural inequalities that we know perpetuate in every system?

Because once they're in the foundations, there are structural factors that keep them multiplying throughout our technologies.

### Audrey Tang:
That's a seminar topic, so there's essentially two questions. So let me just check my understanding.

### Madeleine Daepp:
Yeah.

### Audrey Tang:
One is that you're asking, when we say help the helpers, do we focus on actually helping them to gain what castells would call communication power or power of networking? Or are we just reinforcing their already disadvantaged power position?

### Madeleine Daepp:
Exactly.

### Audrey Tang:
By essentially giving them a token voice that doesn't actually meaningfully increase the mind share, the legitimacy? That's to say, are we only operating on the tactical layer instead of the power calibration layer? 

So this is your first question. Your second kind of implicit question is that the existing privileged actors, they will not just sit there and say, well, of course, we're another polis conversation constituent, and let's find the bridges so that we can work with people of disadvantage and build true intersectionality. You're basically saying that that's not their incentive. They're incentivized to not do that, and in fact, to obstruct that.

### Madeleine Daepp:
That's correct.

### Audrey Tang:
And so whether this system of societal solidarity, resilience or whatever, how does it maneuver in an existing power structure so that it does not fall victim to this obstruction? So this is about empowerment, and this is about, I don't know, anti-fragility or something. Right.

### Madeleine Daepp:
Thank you for that very beautiful rephrasing of my question. I really appreciate that.

### Audrey Tang:
Okay. Thank you. Those are hard questions first, but I will first tackle this existing power one, just because it's upstream. So first of all, I think it is true that when an existing power structure perceives people's voice as something that is a resource, competing for zero sum or things like that, it automatically falls back to the turf protection mode and indeed will sabotage this kind of subversive elements of activity.

On the other hand, there are nexus of what we intel and call the social sector that gain their legitimacy through being incredibly neutral and credible neutrality is an alternate source of legitimacy compared to coercive, top-down power turf structures. A classic example we would use in Taiwan is that of the environmental civil society organizations. By allying with consumer protection against pollution and things like that, and charities like Tzu Chi and so on, they managed to.

### Vickie Wang:
Tzu Chi is a buddhist nonprofit organization.

### Robert Ness:
Very strong in the national presence.

### Vickie Wang:
Yeah, they're usually one of the first at any natural disaster or international natural disaster. Very well organized, very well respected.

### Robert Ness:
Very early during the tsunami.

### Audrey Tang:
Yes. So if Taiwan has an earthquake, if Tzu Chi published a number and the chief statistician of the administration published the number, people are going to believe the Tzu Chi number of these two differ. This is a fact we have seen many times. So. And it's quite obvious that Tzu Chi thrives not by monopolizing charity.

You can, I mean, not believe in Buddhism, but still appreciate Tzu Chi's contribution to many things. And then they also have a very strong social entrepreneurship track so that the parts of their recycle, reduce, reuse, upcycle work, and so on become quite profitable. The DA.AI technology company that upcycles these materials into something that is fit for wearing and so at a premium and so on. But it's 100% owned by the foundation.

### Madeleine Daepp:
Social entrepreneurship, right.

### Audrey Tang:
It's 100% going back to the foundation. It's like Mozilla, not like OpenAI.

And so this kind of structure has emerged in Taiwan even before the martial law was lifted. So even when the administration had a monopoly on not just violence, but also journalism or whatever, speech and so on, association based on shared understanding of environmental matters and charity and buddhism or other religions, there are other religion counterparts has already gained a shred of legitimacy that make them another nexus of power.

So this is essential to understand because g0v, vTaiwan, whatever are built upon this foundation of social sector legitimacy. So I would briefly pause here and ask local feedback, like, do you have anything to add or clarifying questions?

### Vickie Wang:
Yeah, if anything, I've never really thought about Tzu Chi, the foundation, in a non-taiwanese context. To me, growing up in Taiwan is such a natural part of who we are. Like, oh, there's a natural disaster crisis. Of course, Tzu Chi is on site and they always wear these, their navy tops and white slacks, hair in the bun, all standardized. Always a very calming presence. Very calming and reassuring presence. And it's not about---there's that word that's really hard to wrap my tongue around---proselytizing.

### Madeleine Daepp:
Yeah.

### Vickie Wang:
For them it's never about recruiting you to their religion, it's just about practicing the religion.

### Madeleine Daepp:
Interesting.

### Vickie Wang:
Of caring for others.

### Robert Ness:
You're saying that this kind of credibility with the public made them a source of power even in the early days.

### Audrey Tang:
Exactly.

### Robert Ness:
When the government was one of those.

### Vickie Wang:
I didn't know they started before martial law was lifted.

### Madeleine Daepp:
It sounds like it's legitimacy from the way that they present, credibility from the work and the track record, and then also funding from having a successful social entrepreneurship stream.

### Audrey Tang:
Yes, Tzu Chi is very resourceful.

### Madeleine Daepp:
Yeah. So it's also an important source of power.

### Audrey Tang:
Yes.

### Madeleine Daepp:
Interesting.

### Audrey Tang:
Yes. Credible neutrality stems from the factors you just mentioned. And neutrality stems from the fact that we've never seen Tzu Chi ally with any political faction or political party or anything like that. So the political ideologies come and go, but the social sector is always here. So its academic counterpart would be the national academy.

### Vickie Wang:
Academia sinica.

### Audrey Tang:
And the national academy, again, is above all ministers. It doesn't even report to the premier. So this is a kind of special academy set up by the president, fully invested in research, budget and so on, with no expectation for it to work with the current administration system. And again, that is neutrality, in credible neutrality.

### Madeleine Daepp:
I think this gives us actually a nice transition into the mis- and disinformation questions. But before we get there, I just want to give you a little bit of my own research experience that I think is relevant here.

So I worked in Minnesota, in the United States, during the summer when the state government shut down. They decided to not fund the state government. And at the time I was working with the university of minnesota and going out to work with people who were from the ojibwe tribe, as well as local fishermen, bait shops, things like this. And what we found was that people hated the state government. No trust, no legitimacy, no credibility, because nobody could get fishing licenses that summer, right. It undermined their economic success. But for many people, the fishermen, the only institution that still had legitimacy was the University of minnesota. Right.

And there we were showing up. And that made a huge difference for our research. But with the ojibwe, no legitimacy, the history and prior work of the university with that community had so eroded the trust that my principal investigator of the project had to go for 4 hours and just be yelled at in order to build back trust, people needed the catharsis and then over time they were able to get to a place of collaboration, actually. But I just want to sort of give you that as sort of my own background in thinking about how different institutions, different civil society institutions, different government institutions, have different forms of credibility, again with different constituents and how easy it is to lose it.

### Audrey Tang:
I totally agree. Well, because my previous job was the ministry at large for social entrepreneurship, social innovation to be precise. And so what we have witnessed again and again is that, for example, Tzu Chi (慈濟) would work with Impact Hub Taipei and working on “FUN 大視野 想向未來”, which is their social entrepreneurship accelerator incubator program.

And if you just look at the website, you will not think it's a typical Tzu Chi project. It is like totally hip, sustainable young impact hub stuff, but it's totally funded by Tzu Chi and actually connects with their existing connections. And this only happens when the social sector thinks itself as a sector. If they think of themselves as charities, co-ops and consumer co-ops, unions, advocacy organizations, universities, research institutes, then they have their own silos.

And there's no easy way to make exchange of network power between the different formulations of the same purpose, but by saying that anyone sharing the same purpose is part of the social sector, without any regard to the organizational form or the sector they are in, like, we're all part of the social sector, they can leverage each other to regain trust even when, for example, the younger people on the urban setting, they may be a little bit distant from Tzu Chi now, it's like my grandparents’ game, but they are associated with impact hub and so on.

And so I think by specifically calling out to a social sector, by empowering the co ops and so on, which was very hip in my parents era, but are now more and more kind of losing mind share, as opposed to closely held corporations or new organizational forms, by saying that, no, actually you can't have both are the same sector. And when the state gives subsidies to social innovation organizations, we don't care which organizational type you're in. And we recognize through new voting and funding mechanisms, the more cross-sector you are, the more votes and funding you garner.

And you can get both matching donations and also part of your business selling upcycled eyeglasses or something. So this tends to have a synergistic effect that is not found when you silo them in like donation-based merchandise-based or evidence-based silos.

### Madeleine Daepp:
May I give you a framework that we've been thinking about? And again, this will come up again in the dis- and misinformation. But we've been talking to all of these different civil society organizations and very much coming to this same, I think, place. And I've been thinking about the economic complexity literature, like Hausman and Hidalgo and these folks who sort of look at developing economies and say, oh, it's really when they have lots of different types of companies and lots of different types of products, that you start to see these places really thrive.

And I've been thinking about that in civil society, about how there might be a civil complexity that is important to democracy. And so when you think about the social sector here, does that resonate for you? And b, what are the set of actors that you think are really capable and who's still missing? Or who do you think needs to be seeded and fostered and nurtured?

### Audrey Tang:
So that goes right back to the like, is this token empowerment tactical? Or what is the strategic missing map? So I think what it is really missing is for the people working on scaling out impact and people who work on deepening community understanding to realize that they are in the same direction. So it's sometimes phrased as something that is opposing each other, like a dilemma.

So scaling out the impact, meaning that you simplify your narrative, you have something that people can easily attach to to spread a message and things like starting a movement, like reaching more people, advocacy, and then this other direction being to more deeply find common ground, to build and foster real human to human connections, to have a very strong solidarity and common identity in the community and so on.

So, like, deeper connections between the actors in a space. These two, since we're in space for a long time, we know they're mutually reinforcing.

### Madeleine Daepp:
Right?

### Audrey Tang:
It's not always branded as that.

### Madeleine Daepp:
Interesting.

### Audrey Tang:
So one would say, for example, that, for example, during the marriage equality movements here in taiwan. If you take a non-taiwanese really, but kind of what happens anywhere in the world, you would say that people who fight for the equal rights and duties, recognitions and so on, as conforming to the heteronormative, whatever.

### Madeleine Daepp:
Perceptions of marriage.

### Audrey Tang:
Or whatever. Right.

### Madeleine Daepp:
This has come up for us before.

> (laughter)

### Audrey Tang:
Reinforcing a simple narrative that is actually overlooking the deep societal connections that is formed by this kind of family, extended bonds. Whereas people who work on, like, lgbtiqa+ community solidarity, they originally proposed a very complex law that recognizes all sorts of forms of bonding and so on. The 多元成家, the plural family act. That was the original act.

But then it is sometimes criticized as too in group facing and too challenging, like too challenging to explain to an existing patriarchal family hierarchy culture, and so kind of not easy to explain and even harder to culturally transmit. But then it is important to the queer community and other communities to have this full recognition, to be seen as we are, instead of being simplified as we just want, I don't know, inheritance to work or whatever.

And this is something that you see in a lot of those conversations. So I think what's missing and what Taiwan has been doing quite well, I would say, is this idea of rough consensus, of this continuous alignment, not related to ai at this time, that we settle on a kind of non compromise but rather co-creation and celebrate those very quick wins. And so, for example, one co creation was the realization that when and in which to marry, to wed, and to form kinship are different legal concepts and indeed different cultural concepts.

And so earlier in the referendum movement, we saw a very conscious, blended movie that says marriage equality in this stage only pertains to the rising duties of two individuals, but we are okay for them not to form kinship with the patriarchal family system, like slicing and dicing a common ground that both sides can float toward without arguing, like whether we call this the 婚姻 or so after this, you see taiwan activists talking about 同婚, but the not 婚姻 anymore.

### Vickie Wang:
So in Chinese, a lot of times you have two words come together to mean something, and then when you connect, you switch out one of the words and it means something else. 婚姻, the two characters that make up the phrase. One is marriage, one is referring more to kinship. So isolating and sort of focusing on, if I'm understanding correctly, the nuclear family.

### Audrey Tang:
Exactly.

### Vickie Wang:
Rather than going like, oh, no, now you're incorporated into the entire family tree. Just focusing on the two people connecting makes the argument easier.

### Madeleine Daepp:
And so when you isolate that piece, you find the area of common ground and you say in the other piece, people are going to have to keep talking.

### Audrey Tang:
Exactly.

### Madeleine Daepp:
Yeah.

### Audrey Tang:
This is the idea of rough consensus. We produce some running code in this particular instance, the code for the constitutional interpretation. Right. So the act itself doesn't have a name. The marriage equality act in Taiwan is just the enforcement act of a certain constitutional initiative. So this is the most crucial way one can name an act. It's not even talking about marriage or equality. It's just talking about how to realize a certain constitutional interpretation.

And within it, the scope is narrowed. So that it only talks about the things that even, like a catholic taiwanese, would actually not push back on because it's not challenging any of their existing notions. And so a way to first systematically find it, and a way to foster a new generation of facilitators and community organizers that can reliably bridge wider and wider chasms. This is what's missing.

We have existing training materials, classes for bridgemakers of a certain width of director, like, we were taught about confidence building measures, about commercial facilitation and so on, but always with a very kind of fixed conflict still in mind. But this kind of scale-free conflict co-creation, I think that's missing.

### Madeleine Daepp:
Interesting.

### Robert Ness:
Still, it seems to me that even if you were to address some law that, for example, the content that not even a catholic pushback, going back to Madeleine’s earlier point, it would seem to me that if, despite the wording of the law, if it's portrayed by various political groups, that the wording of the law will be used to expand, say, the rights of groups into doing things that catholics don't agree with.

### Audrey Tang:
Slippery slope arguments.

### Robert Ness:
How do you combat that?

### Audrey Tang:
Yeah. So part of the work that I alluded to is to establish a shared context of what it is not. I know this first hand because my grandparents on my father's side are catholics. During the 2018 referendum, we had a lot of those conversations and the importance of a stable nucleus family. This is something actually both sides agree on.

Like, they both care about marriage, otherwise they would not spend calories debating it. Right. The main thing in Taiwan was just about kinship. One of the most slippery slope arguments we heard around that time was that we would need new words for aunts and uncles.

### Vickie Wang:
So a little context on that. So in english, it's just aunt, uncle. In chinese, if I say 阿姨, I know it is a sister on my. Sorry. So, for example, 姑姑. I would know it's a sister on my father's side.

### Robert Ness:
Aunt and uncles depend on who the parent is.

### Vickie Wang:
So it's a paternal sibling, or is it a maternal sibling? Yeah, exactly. With one phrase, how I address you. Yeah. It's really a great analogy that we want to, in our language, we want to immediately be able to identify, are you a relation by blood on my father's side or not? Very patriarchal.

### Madeleine Daepp:
Yeah.

### Audrey Tang:
And it extends like three degrees. So it literally has 16 different words, for example. And also the ordering of the ordering page is.

### Vickie Wang:
Yeah. If you're older or younger than my father or mother, there are different words for it. That page in the chinese textbook is usually when my friends are like, I'm giving up on chinese. [laughter] Why are you so complicated?

### Audrey Tang:
Yeah. And some words itself carries a patriarchal assumption like 兒媳 which is the son of wife uses a different word 媳 that is only used for son's wife.

### Madeleine Daepp:
Yeah.

### Audrey Tang:
Right. So a lot of the cultural debate back then was that do we have to invent like new 「女媳」or whatever? 媳 with a 男 radical. How does that work? Right. And so it is…

### Vickie Wang:
男 radical.

### Robert Ness:
Yeah, I can imagine that was very, there was much head shaking going on.

### Vickie Wang:
We just have to composite new Chinese characters and make it work.

### Audrey Tang:
Yeah. So by saying that we're definitely not doing that. By saying that this is not a kinship affecting move, this is what's called a confidence building measure, cbn. And the way that we kind of produce, synthesize those. It is of course partially assisted by digital participation platforms because we can see in the national participation platform, the Join platform, what are the pro arguments, the counterarguments, what are the most upvoted ones?

So just like those clusters that I showed, you can see that these are the main tension points and the confidence measure has to appear here. Of course, we didn't use LLMs to synthesize that line, but something analogous is happening. But to do this systematically and say that anybody can learn this art, this is, I think, what's missing.

### Robert Ness:
What does that mean? Confidence building measure? I'm not sure I understand.

### Audrey Tang:
So a confidence building measure I think starts from the cold war is that two parties that have no reason to trust another can nevertheless commit some energy so that the people on the other side would incrementally trust that the actions and so on are interpreted in good faith.

### Robert Ness:
Because silo cuts context.

### Audrey Tang:
Right, exactly. So basically, one would not easily misinterpret the intention of an action because one would then say if it's trying to do something that is untoward, they have already pre committed a lot of energy that they would lose if they actually mean it the wrong way. So pre committing that energy is important because then it's basically saying I'm convincing not to do bad because if my actions look bad-ish, I tend to lose a lot of things.

### Robert Ness:
And that makes a lot of sense because a lot of the bad blood in these types of arguments comes from the assumption that the other side has bad faith.

### Audrey Tang:
Right? Exactly. So by making oneself vulnerable, if one would act in a bad faith position in the next iteration, one would strengthen the ability for both sides to find some common ground, even a glimmer of common ground because it's in both parties best interest. And the good thing about CBMs is that it can be done unilaterally, which makes it composable. Like this is not a transaction.

### Madeleine Daepp:
Should we talk about mis and disinformation? Vicki? Robert, I feel like, again, this is something that I could talk about for 6 hours for sure, but I think we should get into the key parts of our conversation and then potentially loop back. So you showed us the talk to the city page and this sort of insight that dis- and misinformation was agreed upon by all parties as really important and really high priority for folks. And you've even said in your work as digital minister that the internet is one of your biggest concerns. Can you talk a little bit about what it is that makes that problem so difficult, so high priority?

### Audrey Tang:
Well, just a word. Disinformation itself is a problem. I mean, it's better than fake news. Of course, nobody uses that word anymore. Yeah, except some. But anyway. But even the term disinformation suggests that the content is wrong or untrue, or at least missing in context.

### Madeleine Daepp:
Yeah.

### Audrey Tang:
On the other hand, which may be true if these are artisan like written by people, but the LLMs, because they know exactly how to persuade the effect. And valence. Affect includes valence, the effect of people they do not actually need to fabricate anything that is not already true. So it is more about selective highlighting of material that would circulate to increase its basic reproduction number.

But I mean, like earlier on during SARS, even though it's very toxic, very lethal, it is also self-limiting in a way, because once you get sars, you only get to infect a few people before you become immobile. And covid was so successful because especially omicron in later iterations doesn't really intentionally render you immobile. You are still mobile when you have Omicron, and so it can reach more people.

### Madeleine Daepp:
So the infectiousness is.

### Audrey Tang:
Right, exactly. So people do not intentionally transmit false narratives to their friends and families. And fact checking, if it's done at scale and participatory, does work because people would go out of their way to say to their friends and family that actually I was wrong, that that was not the case. They don't usually go out to scam their friends and family. That was wrong with the intention to con your friends and family. Right? 

So socially, as long as there's general societal trust, fact checking does work against information that is blatantly false or can be shown to miss important context, but to meddle in the election or to get people to buy something or whatever, to do persuasion. One does not need this kind of factually untrue messages. One can just trade on factually true messages, but just with the highlighted importance of things that increase the effect and the mobility, like going viral.

### Robert Ness:
For example, with anti-vaccination. So there are cases of people getting vaccinated and then dying, for example.

### Audrey Tang:
That is right. And also during 2018, because we were at peak infodemic back then. I think that's because the referendum and the mayor election were on the same day.

### Madeleine Daepp:
I see.

### Audrey Tang:
Right. So we've learned better. We've switched them to alternative years. But back then, it was quite perfect because you can campaign as a mayor or candidate on a platform of, for example, reducing pollution, air pollution to restore the sky of 台中 (taichung), and clean air.

On the other hand, you can also start a referendum that bans coal burning plants or whatever, and be on both the referendum ticket, which can be promoted close to the election, while being also on the mayor of the ticket, which cannot be promoted close to the election. And on this part, you will then see a lot of amplified voices from the local environmental conscious groups about the air quality. And all of them are true. Like, there are scientific, there are even citizen science. It's measured by people, primary schools, balconies, and so on.

### Madeleine Daepp:
With the airbox?

### Audrey Tang:
Yeah, with the airbox. It's indisputably true. If you think it's wrong, you can buy an airbox for eighty bucks and measure it yourself. Although what's actually happening is that for many conversations online, and because facebook civic integrity team wasn't there in 2018, you would just see air pollution suddenly dominating all conversations.

Like whatever referendum topic you talk about, whatever you want to have a conversation about marriage equality, and suddenly everybody's talking about air pollution. And so this kind of persuasion is neither misinformation or disinformation. It's not even malinformation. It's just saying that air quality really matters. But the upshot is that it reduced the cognitive bandwidth for other political conversations.

So it's crowded out. It's a DDoS. It's a denial of service in the democratic language, which is always so limited before the election anyway. So then it has the effect of reducing the contextual integrity of all other issues.

### Madeleine Daepp:
It's a DDoS attack on the information environment.

### Audrey Tang:
Yes.

### Madeleine Daepp:
Fascinating.

### Audrey Tang:
This is why I find a problem with the disinformation misinformation narrative, because all llm-wielding people don't. It's no longer their weapon of choice. They don't rely on dis- and misinformation anymore.

### Madeleine Daepp:
Okay, so one of the reasons that we're doing this study, right, is because in 2023, the big thing, among others that happened in 2023, is that generative AI started to pass theory of mind tests, right, among many other tests. And you see between gpt 3.5 and gpt four, a complete difference in ability to persuade. And now 2024 is, according to economists, the biggest election year in history, right?

So I think what you've just done is put those two facts together. And so can you just give us a little bit more of your mental landscape or framework for thinking about how to think about generative AI in this problem space, or how you're thinking about generative AI in this problem space?

### Audrey Tang:
So for communication, I usually use the abcd actor behavior content distribution strata. It's part of the EU disarm framework on fimi, foreign information manipulation and interference. And so just the word fimi, as you can see, no longer talks about the content layer anymore. Foreign is on the actor layer. Information manipulation is on the behavior layer. Foreign interference is associating an actor with a behavior. But none of them talk about content anymore, and neither do they talk about viralness, like the distribution layer stuff.

And the reason why is LLMs, or generative AI in general, do the most damage when they destroy the mutual trust that is existing in the society, on the actor level, when you pick up the phone and you hear your friends and family's voice, but it's actually a voice clone bot that want you to buy some cryptocurrency that is destroying the trust on the actor layer, not the content layer, by shape shifting attacks that can carry out intimate conversations, addictive ones, even with many people, in whichever voice they do, we already see around the world that this kind of robocall scams and so on, if you hear each individual conversation, those scam bots, their quality is not higher than the artisan human made ones, but it scales across cultures.

Previously, you have to speak pretty good mandarin to con someone speaking mandarin and understand a local Taiwanese context. But now you can mount it from anywhere in the world, speaking no mandarin at all, just simply by copying a voice and communication style of someone you trust.

### Madeleine Daepp:
Sure.

### Audrey Tang:
Right. And if that someone has published into public domain [laughter]

### Madeleine Daepp:
Uh oh!

### Audrey Tang:
It means that anyone can call me very easily.

### Madeleine Daepp:
Right.

### Audrey Tang:
Our main defense is on the actor's side. So starting this week, actually, the governmental agencies will share this 111 number in the sms messages that we send out. Previously, many agencies, especially local municipalities, used their own numbers, but as they proliferate, it's impossible to know if this comes from your city government or not.

### Madeleine Daepp:
Right.

### Audrey Tang:
And we're already at a point where the local tax agency earlier last year sent a sms encouraging people to file tax online to reduce carbon footprint and whatever, and just give like a scam so the trust on the provenance of those messages are no longer there, when everybody now think that anyone who want me to file tax online must be a scammer.

And so, by reducing this problem to an authenticated actor problem, we first say, okay, from this point onward, the government will only use three or four digits code as a sms number to communicate with you, and we will never use ten-digit code. This is basically saying only the blue marked actors are actors, everyone else are bots, basically.

### Robert Ness:
When banks are in America, we will never ask you for any information over the phone. Or the IRS does that. I think it's us. The irs says that they will only contact you by mail, never by phone.

### Madeleine Daepp:
For example, which creates its own set of problems, but yeah. So you're using context cues to say, okay, well, you can't verify the content, but you can trust the actor, the content.

### Audrey Tang:
The metadata.

### Madeleine Daepp:
So this is really interesting to me because it feels like many of the strategies that I'm seeing talked about publicly are really around the content. They're around using ai to track ai, watermarking, these sorts of things.

But it feels like there's really a lot of opportunity in making the rest of the ecosystem more robust. Rather than focusing on what's going on with ai, focusing on everything else.

### Audrey Tang:
Yes. The day I saw the Llama weights leak on torrent sites, I knew watermarking was doomed. There's no hope for any watermarking in LLMs.

### Madeleine Daepp:
Can you say more?

### Audrey Tang:
Yes. So watermarking relies on language model talking in a specific way with an accent that is not quite human in terms.

### Madeleine Daepp:
Of the statistical distribution of the words.

### Audrey Tang:
With Llama and local fine tuning, one can easily rephrase whatever gpt four says in the style of communication that I use on my emails; there really is no way to discover the watermark anymore. I think up to, I don't know, a few hundred tokens or whatever. It's been conclusively proved that it's hopeless if you only have that short tokens. But if all you want to carry is a scamming conversation over sms, well, the token count is so low that there's no way to watermark that.

And so with open weights models, and local fine tuning, watermarking only works when it's like a book length, but the information manipulators don't write books to do their manipulation. They rely on interactive, deep faking. The trust is gained by, in real time, they can synthesize a response that looks like an authentic source. But these are almost always very short, which is why watermarking is good.

### Madeleine Daepp:
Yeah, that's a really crisp explanation. Do you have a question? I have many, many questions, but I wanted to give both of you space.

### Robert Ness:
I'm curious, from a standpoint of disinformation, you immediately connected it to essentially scamming. Right? And I like that analogy myself. In other words, if you're trying to understand, say, a foreign state actor interfering with an election, perhaps the best place to look is understanding how those crypto scams, crypto scams, are going to work. Can you talk more about that? What's a good framework for making that analogy?

Is it just as simple as thinking like, well, the killer app for the same way that people often say that the early adopter, internet supporters here, like the early adopter for the killer app for disinformation would be scammers, the government will follow suit. Is that how?

### Audrey Tang:
Yeah, I would use the EU term, information manipulation.

So manipulators, they stand to gain this or that. On the other hand, cross border scamming is the lower risk of all those different persuasion attacks. Everything else, if it's attributed, if it is discovered and so on, it stands a chance of backfiring. But because scamming works on an individual to individual fashion, it's not viral in the sense that the scammed persons, pyramid schemes notwithstanding, don't turn around and scam other people.

So even if they're discovered, even if they're attributed and so on, they don't significantly hinder their ability to scam the next person. Whereas propaganda, once publicly debunked and traced to the source and so on, make it harder to mount the same propaganda attack on the same attack on the same constituency. So the inoculation builds quicker in public transmission persuasions, and the inoculation builds slower in individual to individual attacks, like spear phishing attacks and so on.

On confidence. So I would say that first, it makes the scam easier to target. Like, it's easier to pass widely agreed measures against scamming than it is against political propaganda. Because the existing power structures all stand to lose something if people stop trusting anyone talking over the phone and are reduced to only trusting people in the civilian world, none of the existing power structures will survive in that setting. And so just to kind of carry the thread from our previous conversation, to get the existing powers to not obstruct confidence building measures, context building measures, and so on.

It's much easier politically if you first focus on financial scamming, especially across border alliances, whereas especially leading up the election, telling foreign interference versus domestic campaigning becomes harder by the day until you reach the day of the vote. But every day, regardless of how close we're to the voting, financial scans look exactly the same, which makes it harder for the legislators to confuse these two, because the more close you are to the election, the more different the financial scam and political propaganda looks, because this is very intense close to the election day, but this remains the same level. So to pass a law that addresses both looks more and more untenable the closer you are to the election.

So we managed to pass very specific laws that I think are very helpful, even close to election time against scams, specifically deep fake investing advice posted on facebook. So there was a flurry of celebrities, but I was never featured — which is very weird — on facebook. That purpose is to teach you to invest in something, always by a celebrity, sometimes holding a book on investment and things like that. And it's quite interactive. If you ask that celebrity a question, it will actually give you investment advice and so on. 

And that is mostly gone because we passed a new law that says if facebook, after people flag that, do not take it down, people get conned. Facebook doesn't get a fine from the government, but facebook becomes liable to that damage. So you get conned, 1 million nt dollars through a defect investment con, facebook must pay you $1 million, and then their civic integrity team kicks into action. And we don't see much of that anymore.

So imagine that law also applies to political campaign propaganda that is impossible to pass, especially close to election, because who to tell which one is foreign interference, manipulation, attack, which is just normal campaigning, but because cross border investment scams look constant, right? So it's easy to then laser focus on that attack vector.

### Robert Ness:
Once you have this law passed. If, for example, a political entity, a foreign one, they're trying to use a similar tactic to influence an election, could the law then be applied to curtailing that?

### Audrey Tang:
The thing is, the civic integrity defenses that the platforms built in response to that law can also be repurposed to defend against foreign interference, but not mandated by our law. It's just that.

### Robert Ness:
Civil liability.

### Audrey Tang:
Right, it's a liability for them. Like if they did not have the investment, the prior commitment to have this kind of detection and quick takedown and mandatory clarification, or hopefully soon community notes, we'll see if they don't already have that infrastructure, doing the structure for political propaganda is politically risky.

They would risk being labeled as siding with a political party, usually the ruling party. This is how the US disinformation oversight board went nowhere for that precise problem.

### Madeleine Daepp:
Right.

### Audrey Tang:
But by not saying anything about this information oversight, by focusing, laser focused on actually just two things, the investment scams and non consensual intimate images like deep fake porn, like these two, nobody can, no political party will come out and argue for these two things. And we did pass laws that assign liabilities to platforms on these two things.

So they have to build the defense substrate. But now that they have the defense substrate, it's very easy for them to repurpose that defense substrate to also defend against inauthentic coordinated behavior by foreign actors.

### Robert Ness:
I mean. But at the same time, if somebody, so if you force facebook to build an infrastructure for stopping grandmothers from getting bitcoin scammed because they would be financially liable for scams.

### Audrey Tang:
With no upper limit.

### Robert Ness:
No upper limit.

### Audrey Tang:
Yeah.

### Robert Ness:
The liability is no longer there. If somebody is now just trying to give you information that's going to sway your vote, there's no financial liability.

### Audrey Tang:
No, there's no financial liability.

### Robert Ness:
Right. But

### Audrey Tang:
I'm just saying that it is quite economic for Facebook to just repurpose that infrastructure. But it's not mandated by Taiwanese law.

### Madeleine Daepp:
Right.

### Audrey Tang:
It's just that if you're facebook, it takes you extra effort to not apply this to political speech.

### Madeleine Daepp:
May I riff on that a little bit? Okay, so you have this clear problem space that all sides can agree on that's not contested in the way that others are. And so you work in that space and then you use the power of economic incentives, right, to encourage a structural change in facebook.

So it's not just that they now have a strong incentive to mitigate these scams, but they've now built in a cleaner reporting system or really strong incentive to improve their reporting system.

### Audrey Tang:
Or whatever, yes.

### Madeleine Daepp:
And then they've hired this set of people focused on this work and so now they have those two bits of infrastructure that other efforts can draw on.

### Audrey Tang:
Yes.

### Madeleine Daepp:
But. In the misinformation space it's not contested. So they can work in that space, put all their resources towards it, no problem. But in political polarization, they don't have the legitimacy, right, or they're maybe not the right organization.

### Audrey Tang:
Why are they not the right organization?

### Madeleine Daepp:
I mean, in the US context. Right. There are currently active subpoenas on technology companies for making decisions about political information that is seen as polarized. Right?

### Audrey Tang:
Correct.

### Madeleine Daepp:
Okay. And so one thing that's come from our interviews with fact-checking organizations and civil society organizations working in these spaces here is that they sometimes seem to have the legitimacy to do things that platforms can't.

### Audrey Tang:
That's right.

### Madeleine Daepp:
So I'll give you an example. Right. Like MyGoPen, taiwan fact check center, these are enrolled in the ICFN third-party verified fact-checking network. And then because of that, facebook can then leverage them. Facebook can say, well, we will downrank this if a third-party verified fact checker has fact checked it.

### Audrey Tang:
Yeah, this is again the same social sector maneuver, right? You work with particular entities in an organizational form, like a true nonprofit instead of a company owned by a single person, effectively. But then it's just shifting the functional module here. It doesn't change the fact that TFCC, if without the active collaboration by those platforms, not just facebook, they by themselves do not have the reach.

### Madeleine Daepp:
Exactly. So the platform brings the reach. And then what we talked about before is they bring legitimacy. Is there anything else that they're bringing or that the platform can't do that these organizations can?

### Audrey Tang:
The other thing is that it brings civic participation, which is distinct from legitimacy. Legitimacy stems from their transparent, accountable governance structures. But I think what's interesting about the Taiwanese social sector is that if you go to TFCC, they have a section that is equally prominent as their professional fact checkers, as the citizens report. So you can actually start your own citizen report on the TFCC website, it's equally prominent, which is quite unusual among IFCN members.

And there's Cofacts, of course, which doesn't even need to directly work with Facebook because they're upstream, like MyGoPen or TrendMicro or Gogolook. Or everybody is downstream to Cofacts. But yes, Cofacts, like wikipedia, anybody can join. Now people can join not just by clarifying Cofacts, but rather by training the LLM that Cofacts uses to fact check.

And so they're now upping their game by using an LLM that auto-magically does the first-line response, which is, again, important because the rumors, just to be clarified, are already generated by llms, many of them, anyway. So if you do not also use LLM in your first line response, you're ddosed, you lose automatically.

### Madeleine Daepp:
Yeah, you can't keep up.

### Audrey Tang:
So of course, human investigation is needed only on the few that are threatened to actually do the cognitive bandwidth. But the first line defense can already be offered by LLM. And again, that lm is a very strategic place to be community tuned.

And so, I think this kind of community input, democratic input opportunity over time will be more important than just the transparency, legitimacy part. But of course, if it's not transparent, not legitimate people will not participate. So it's a necessary condition.

### Madeleine Daepp:
When you talk about. Sorry, do you want to go ahead, robert?

### Robert Ness:
Well, I have a question. You can tell me if you want to order it differently, but I'm wondering if I'd like to hear more about this. So you just asserted that LLMs are being used to generate paperwork.

### Audrey Tang:
Yes, quite clearly.

### Robert Ness:
I wonder why that's clear what the evidence is.

### Audrey Tang:
Well, so first of all, you can sometimes just use simplified characters or simplified character usage, that is to say, it's written in traditional characters, but used in peculiar ways.

That is to say, you see the traditional characters, but the phrase they form early occurs in a simplified mandarin context. So these are kind of the canned messages.

### Robert Ness:
Can you give an example?

### Audrey Tang:
So what are some examples that come through your mind?

### Vickie Wang:
Not a direct example. So for example, I lived in shanghai for ten years and read simplify the word 头发, the 髮. The word for hair. The 髮 that's used.

### Robert Ness:
Big old complicated traditional characters.

### Vickie Wang:
Yeah. In taiwan we use a super complicated one that is distinct from the character we use for 發.

### Robert Ness:
Yes.

### Vickie Wang:
But in simplified Chinese it's the same character.

### Robert Ness:
Yes.

### Vickie Wang:
So when they do a simple conversion on your computer from simplified to traditional, the converter doesn't understand that you need to pick a different character in Traditional Chinese. That's accurate. So that's something like I sometimes see in converted text that's converted from simplified to traditional where the character choice is wrong.

### Robert Ness:
There's an example when there's a many-to-one relationship between a traditional character and a simplified character, such that when you're, when you're just google translating from simplified to traditional, I would hope google translate would capture that nuance, but um [laughter]

### Audrey Tang:
It tries.

### Vickie Wang:
It tries, but I still have a job, so that tells you.

### Robert Ness:
Okay.

### Vickie Wang:
Does that make sense?

### Audrey Tang:
Yeah.

### Robert Ness:
So the contextual disambiguation, that's failing.

### Audrey Tang:
Yes. That's how we usually tell something that is automated and generated by maybe a narrow ai, maybe not a generative model, but certainly something that is automated, that is trained in a simplified manner in corpus.

### Robert Ness:
Can I try to think of another example? Just make sure I understand. So like maybe the use of maybe the 臺 in taiwan.

### Audrey Tang:
No, the 臺 in taiwan, we use sometimes this simplified form as well. This is more about words that sometimes mean opposite things. Right. So like 窩心 is meant as something warm in taiwan, but as something cold and distant in simplified mandarin, in prc context.

### Robert Ness:
There's like, there's enough cultural divergence between different groups of people using.

### Audrey Tang:
Right. Sometimes, right, like in this purported leak of the investment bureau or whatever. Of course, no one in our investment bureau will use the simplified characters 云林. So this is very clear. Everybody can see it, but you can't also see it on the phrase level or on the sentence level.

### Vickie Wang:
They're also like, I can't think of any, for example, 地道 and 道地. In taiwan we say 道地. Something is very authentic. But in mainland china is 地道.

### Madeleine Daepp:
That could just be somebody who speaks or who is used to writing in simplified chinese, trying to write in, it could just be a person in a troll factory?

### Vickie Wang:
Or it could be a Taiwanese person who spent ten years in china.

### Madeleine Daepp:
Yeah.

### Vickie Wang:
But also, oftentimes people are very understandably suspicious of me if I say something that's a little bit out of character.

### Madeleine Daepp:
So what makes you think that it's machine generated? Machine generated and specifically generative AI.

### Audrey Tang:
The volume. And it doesn't need to be generated in an interactive fashion, it truly requires generative AI. It can be canned. generative AI can just write the templates and a narrow ai, simple, a good old fashioned ai. Right? Just choose those canned responses and so on.

And it really doesn't matter because for us, we only care whether it's foreign or domestic, whether this is interference or whether this is communication.

### Madeleine Daepp:
Right?

### Audrey Tang:
So if it is foreign and it's interfering, I would say that it looks like a machine generated. Some of them show the possibility of generative AI models pretrained on simplified memory. But I don't need to prove that part of it as long as it's machine-generated and foreign.

### Robert Ness:
Machine learning and foreign. You've mentioned volume. One of the concerns we had about the volume argument was that there's a bit of a pipeline issue. You really basically have facebook and you can only generate, you can generate as much content as you want, but it all has to go through these channels.

### Audrey Tang:
Of course.

### Robert Ness:
Even there. Do you see just an increased amount of volume there, even despite the fact that you're only limited to the…

### Audrey Tang:
Yeah, that's another thing that motivates me to talk about actors and behavior instead of content and distribution. You are now pointing out that the existing defense on the distribution or delivery substrate is itself a kind of anti-flooding measure, which is obviously true.

On the other hand, if you want to mount a political manipulation attack, you do not need to flood many, many facebook groups or line groups or whatever. They only do that to do kind of a/b testing, testing out different narratives so to see which are more agreed in the private line groups or facebook groups or whatever. But once the manipulator settles on something that they think is kind of truly DDoS’ing, truly potent, they don't care to use those social media channels. They can go to public media.

It is quite unique in Taiwan that unlike in Japan, the information manipulators can easily find mass media journalistic outlets that will just publish whatever a/b tested potent memes they just discovered. They don't even need to spearfish or coerce journalists. Journalists will just say that, oh, a source says this, and this is obviously machine generated, simplified mandarin nonsense, and national newspapers will still print it.

### Madeleine Daepp:
Can I ask you, going back to this idea of a civil society and the importance of a complex civil society with many effective, different forms of institutions where journalism fits into that?

### Audrey Tang:
Yes. So I think in Taiwan we do have truly journalistic organizations that see themselves as the social sector. Tw reporter 報導者 is the prime example. There are many 報導者 is like Tzu Chi, right.

### Vickie Wang:
They're community-funded, right?

### Audrey Tang:
Yes. So 報導者 is nonprofit, relies on donations, including recurring donations, and is very friendly with the open-source community, adopts creative commons, the ideal organization. The thing though, is that the existing mainstream media, instead of working with this kind of journalistic outlets and sharing space with them and giving them space and so on, I would say many of them are ideology affiliated, so that they often work with these credibly neutral journalistic outlets only if it fits a certain ideological narrative.

And more than that, many mainstream journalistic organizations also engage in actively pushing the agenda of certain ideologies. The people already learned that if you see certain media institutions, you automatically know that it's going to be affiliated with certain ideologies, it goes without saying. And sometimes, less than substantially proven narratives — not even corroborated by an independent source — if it fits the ideology of that institution, gets printed as news. And this is true for more than one ideology.

So I'm not saying that this one's bad or that one's bad, is that there was a recent report that says that the Taiwanese students of around 15 years old are like one of the top of the world, like top three, top five in terms of PISA, the OECD Program for International Student Assessment. But at the same time, we also had ICCS, the International Civic and Citizenship Education Study, and Taiwanese students placed on the top of the world.

### Madeleine Daepp:
Civics education.

### Audrey Tang:
Civics education. Like they are the most active in terms of willing to participate in journalism, in fact checking, in making sure the environmental disadvantaged group, vulnerable groups, and so on. They care the most about these things. This is recent news. International civic and citizenship education study, the ICCS. We, of course, reviewed that result in our calendar meeting.

But at 15 years old in Taiwan and knowing that they are already the top in the world for civic participation, the only institution across the OECD baseline that they have less trust in is mainstream media. So all the others, like, we talk about academics, we talk about the institutions for knowledge, for culture. They participate, and there's huge mutual trust. It's just institutional, public media that they trust less than the average oecd 15-year old. So it says a lot about our institutional media scene.

### Madeleine Daepp:
This resonates for you.

### Vickie Wang:
So I've been joking with Madeleine since we started this research that I am really afraid that they're going to walk away from this research and their conclusion is that Taiwan has a thriving democracy, but its kryptonite is its journalism.

### Madeleine Daepp:
Vickie's, you are a journalist.

### Vickie Wang:
I mean, I'm a journalist. I am part of the Taiwan foreign Correspondents club. I was part of the Shanghai foreign Correspondents Club for many years. I have a lot of journalist friends who work in that space, who work very hard. But I have grown up being very disappointed in Taiwanese media and have never thought about participating, even though I am myself a writer and an interpreter and could be very helpful in that context.

I have kept myself with the international media all these years. The Reporter has been one organization that's given me some hope in recent years. But other than that, there is TFCC. Taiwan FactCheck Center and The Reporter are my two Chinese news sources. I don't even stay in the room if my mom's watching Taiwanese news on TV because I just want to throw something at the TV.

### Audrey Tang:
But it's fine because you can read Deutsche Welle in Mandarin now.

### Vickie Wang:
Yes. A lot of journalists have come to taiwan.

### Audrey Tang:
The great thing, well, a silver lining, really, is that the international correspondent, previously based in Hong Kong, has mostly moved to Taiwan and Beijing, too, right? Mostly.

### Vickie Wang:
Beijing, shanghai.

### Audrey Tang:
So we now have very high caliber journalists, some trained in taiwan, working for international, actual journalistic outlets.

### Madeleine Daepp:
And how can you give me the timeline of when that's happened?

### Audrey Tang:
This starts with the Hong Kong crackdown, right? 2019.

### Vickie Wang:
Yeah.

### Madeleine Daepp:
So you've got this recent real potential change to the information you get.

### Vickie Wang:
I would say that the migration started around the pandemic. China started making it very difficult to renew and apply for j visas. So a lot of journalists who are supposed to go to Shanghai or Beijing to replace an existing correspondent, end up coming to Taipei instead.

### Madeleine Daepp:
Can I ask you the thing that keeps coming up for me? Right. We talked before about legitimacy. We talked about it. Okay, go for it, Robert, I'll come back to this question. Yeah.

### Robert Ness:
Just on one thing you just said, and I apologize. This is going to be a naive question.

### Audrey Tang:
That's fine.

### Robert Ness:
But I'm trying to.

### Audrey Tang:
I'll give a naive answer (laughter).

### Robert Ness:
With respect to kind of in terms of the existing mainstream media and kind of ideology affiliated. Just so there's me, as somebody who's new to kind of understanding journalism in Taiwan, I'm wondering if, so I was watching this last night and I just wanted to make sure I'm understanding this. I want to contextualize this with what you just said. And again, if this is just some kind of just shenanigans, then just dismiss it.

### Vickie Wang:
Shenanigans is a good word to describe our media, frankly.

### Robert Ness:
So this is a broadcast I was watching in the evening. You know, it looked to me just like classical punditry, like we would have in the United states. I guess my question is, am I to interpret this in the same way I would interpret watching, say, msnbc or fox news?

### Audrey Tang:
That's not the problem. The problem is passing punditry as news. Okay.

### Vickie Wang:
[plays clip] It sounds very soothing at midnight.

### Robert Ness:
So, yes, it was a very long conversation about the crime rate amongst minors, I guess, teenagers. Teenagers and a lot of polemics. A lot of screaming, a lot of yelling, a lot of back and a lot of agreement between the people, but they were all very angry.

### Audrey Tang:
Weird outrage, very unified.

### Robert Ness:
And then there were a lot of advertisements for health supplements for the elderly, a lot of advertisements for, I think I was pretty sure it was 國民黨 (Kuomintang) because the demographics of people watching me as the american looking at this, this is like Fox News and appealing to kind of baby boomer political attitudes followed by commercials for supplements, pharmaceuticals. Is that the same? Is that exactly a good template for you or is there something else?

### Audrey Tang:
I would not say it's exactly the same, but it is demographics driven.

### Robert Ness:
So there's no nuance here that I'm missing. Should I be understanding the Taiwanese context?

### Audrey Tang:
Well, the nuance is more during the news segments than the opinion segments. The opinion segments, as you observed, are the same. Yeah.

The issue we were talking about was that if somebody wants to mount an information manipulation attack, do they open 7000 facebook channels and groups or whatever, or do they pass it off as news, as fact, by an ideology affiliated media? And more often than not, the later it's actually easier, but it's not the case in japan.

### Robert Ness:
Okay, so to make sure I have that part clear, so that you're saying that there's likely use of generative AI crafting these narratives. And typically it starts off some of the evidence here again, is like some of the cultural contextual differences that you see kind of raw red flags and machine generated text.

You see a lot of volume in terms of hitting forums, private groups online and facebook, basically as A/B testing to figure out what resonates. And then it's quite easy to take that, continue to propagate it, perhaps on social media, trying to hit virality.

### Audrey Tang:
No, just take that and go to the media, that's special in the Taiwanese context.

### Madeleine Daepp:
Yeah.

### Audrey Tang:
In other contexts, you will actually have to go to Twitter. But no, you have to skip to the media. So you don't even care about virality. That's right.

### Robert Ness:
You just care about getting the narratives into the public.

### Audrey Tang:
Exactly. Which is why it's even closer to direct messaging.

### Robert Ness:
And why is it so easy to get them to pick it up? Let's suppose that I want them to pick it up.

### Vickie Wang:
Do journalists lack journalistic integrity?

### Robert Ness:
Help me understand the mechanism. So if I have this great talking point that I think is really going to resonate, do I just email it to a journalist?

### Vickie Wang:
You have to understand, we have, what, five or six 24-hours news channels that have to create content all the time. They very rarely report on international news. Domestically, we're an island of 24 million people. Realistically...

### Robert Ness:
I guess I'm wondering, what is the actual vector for delivering the information?

### Madeleine Daepp:
I can point you to some readings on this.

### Audrey Tang:
You can just say that this is a leak as a source to a friendly journalist on mainstream media, and they will write it up as news.

### Madeleine Daepp:
Okay.

### Audrey Tang:
This is the easiest way.

### Vickie Wang:
Yeah. There's also been some research that a lot of these pundits are also receiving messages.

### Madeleine Daepp:
Yeah.

### Vickie Wang:
Messaging cues and donations from china.

### Madeleine Daepp:
Yeah. Doesn't Japan have this?

### Vickie Wang:
Yeah. How?

### Audrey Tang:
To my first approximate understanding, they don't need to fill in real time news that is below their journalistic standard. Like, there is simply no expectation for the journalistic sector to generate real time scoops on these sorts of things.

### Madeleine Daepp:
Is that a difference of funding, a difference of institutional structure?

### Audrey Tang:
It's just a different expectation about journalism. In Taiwan, if you read or watch a heavily ideological institutional media, you expect it to contain propaganda elements and people live with it. And so to us, 新聞 or news is already very diluted anyway. Especially real time news.

On the other hand, in Japan, news means that it's corroborated with independent sources, with balance, with some investigation, the usual journalistic standards and things below that they're gossip, but they're not news.

But in Taiwan, because many news websites or news institutional channels have dedicated places for what in other countries would be just called tabloid or gossip. But then they also use the same words, 新聞. They would say, it's 社會新聞 right. Social news.

### Robert Ness:
Why is Japan the natural baseline as opposed to Korea or Poland?

### Audrey Tang:
I think it's mostly just that we're more familiar with the Japanese media landscape. And also, I would also say that this is quite automatic for especially senior people in taiwan. Like whenever we want to compare a societal civilized baseline, we just automatically say, oh, Japan does this. And Taiwan isn't up to par.

So it's cognitively a little bit dissonant, when we read that in terms of purchase and power parity or whatever, we're like selling japan because for the longest time, taiwanese people, when they say something that is civilized and part of liberal democracy, societal structure, designing a friendly environment for aging or whatever, people automatically say, oh, that's how the japanese people do it. So we at least need to do that. So it's a kind of steering effect.

### Robert Ness:
But one could argue that Taiwanese democracy is...

### Audrey Tang:
More vibrant. An existential opportunity.

> (laughter)

### Madeleine Daepp:
Can you help me understand, in the united states, one of the main ways that this works is similar but different in that, you know, sort of pieces of foreign sponsored disinformation go viral on twitter and then, or they start from some unverified account and then, you know, a journalist or a prominent person retweets and then that goes viral.

### Audrey Tang:
We don't have the equivalent for Twitter here.

### Madeleine Daepp:
Interesting. But the reason when it goes viral, we know that's a problem because it's reached so many people, right? And that means that thousands or even millions in some cases of people have at least been exposed to that piece of information, if not actively absorbed it.

But here, if you're going through these media outlets, does that then mean that spread is limited just to people who are in that subsector? Or does it from there, how does it spread?

### Audrey Tang:
Because the institutional media has quite successfully digitally transformed themselves. One of the tv channels became youtube, only the cti. And so they're quite good actually in producing short clips and everything that would go viral.

### Madeleine Daepp:
Okay, so the bottleneck, once it gets to the media platform, then you start to see people sharing it online.

### Audrey Tang:
That's how their model works. Right. They work not just to broadcast 24/7, they work to specifically cater the messages so that these media people and the people who work downstream of them would just take like 5 seconds, 10 seconds, 20 seconds of that news segment and then make it truly viral.

### Madeleine Daepp:
Right.

### Audrey Tang:
Always with that byline. We're a very attribution-friendly society. So they would actually say that this comes from this anchor, this comes from this well respected among your population and so on. And then the politician would cite this in their debates, in their arguments and so on.

So already, it would, you know, because if it's news, it's true. It's then assumed to be true. So the framing effect downstream doesn't need opinion leaders or influencers as much, as it automatically gets repeated by people ideologically.

### Madeleine Daepp:
This undermines a lot of the interventions that I was thinking about.

### Audrey Tang:
Exactly. Which is why we need to innovate. This is an existential opportunity. [laughter]

### Vickie Wang:
Why are you so excited about such a crisis?

### Audrey Tang:
This is research.

### Madeleine Daepp:
As researchers, this is beautiful.

### Audrey Tang:
Fascinating.




