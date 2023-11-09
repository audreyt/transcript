# 2023-10-25 Conversation with AI Objectives Institute

### Vehbi Deger Turan:
But yeah, I think having the, I mean, one thing we say a lot at the AI Objectives Institute is chat interface is just what we know so far, but we will come up with better interfaces to talk with language models. We just, that needs more innovation too.

I think there's a way to build a pipeline that is really agnostic of how that part happens. Yeah, I'd love to hear your thoughts on basically what would come next. I think the, I bet the North Star we align on, you know, summarization is one of the core pillars towards being able to have better democratic inputs going past like a tweet size length is very necessary.

From there on, a lot of our immediate work will be around testing, rigor and accuracy. So we will be doing a lot of, like we will publish a bunch of our research on if we work with text data versus if we work with voice data. I'd love to show you a couple of different data sets. Like for example, we have a data set that instead of, you know, short form inputs from many people, we had hour long recordings from 13 people focusing specifically on Detroit, the African American population. That ended up yielding a very different engagement because it's a super dense data set and it feels like, you know, you're zooming in on a small number of people's lives.

So I mean, it's important that the pipeline can take in many different forms of data and also overlay these different forms of data. I'd be curious to hear your thoughts on, you know, which feature sets would be most valuable.

### Audrey Tang:
Yeah. So I also talked about this yesterday and I said, this is very broad brushes because this is my 20% pet project, whereas Mashbean works on this full time.

But in my project stance, I think the most important thing is just to democratize the bootstrapping process so that every community that wants to run their own polis conversation and so on or whatever input forms doesn't need a huge amount of technical expertise in order to bootstrap it.

Because the importing pipeline at the moment is very opaque. And the sooner we can get this pipeline, somebody else's problem, the better we can focus on the core functionality of the platform. And so to me, this is like a de-blocker at the moment. Can we make it self-service so that everybody in the public sector can use it like Google Forms?

### Vehbi Deger Turan:
The compass I use for that is, so I wrote my thesis with a group called Democracy, Development and Rule of Law in college. And I was the only technical, like computer science person in my cohort. What would it have taken for everyone else to be able to use this without necessarily knowing how to work with a Docker container or whatever?

So I think that is very doable. I think it is good to take an assumption on, you know, this is the structure of a CSV that you can import in.

If this isn't the case, then you can move forward immediately. I'm interested in pushing even a little more than that. Like, is there value to be able to do video data or audio data? I think that is, the way people react to the Heal Michigan project is so much more powerful than any, like the recursive public Gen AI, because those are texts.

And sure, text is also coming from a real person, but when you actually hear someone's voice, that changes your orientation. So that I also...

### Audrey Tang:
We had video data from Gen AI. It was just, there's no way to import that. We had two face-to-face deliberative workshops. One in Taipei and one in Tainan. They're all documented.

### Vehbi Deger Turan:
Where does it live?

### Audrey Tang:
Video is in a hard drive somewhere.

### Wendy Hsueh:
I'll give you later.

### Audrey Tang:
Wendy can give you the whole video, because we're now using the transcript of those videos to constitutionally align TAIDE.

### Vehbi Deger Turan:
When you say constitutionally, you mean like... Anthropic-style? Great. Nice. I figured that's the...

### Audrey Tang:
The people's AI, right? Yeah. But in order to generate a transcript, we actually rely on a lot of human at the moment, kind of careful reading and summarization and things like that. But there's much more nuance in the original video. So if there is some way actually to take the non-verbal signal as well, we have the raw video for you.

### Vehbi Deger Turan:
Yeah. That's great. Let's do this. If we can host that video on Vimeo or some URL, that should be trivial. Have you all seen this? Should we do a quick demo? Yeah.

### Audrey Tang:
Only I have seen this.

### Vehbi Deger Turan:
Only you have seen this. Okay. Then I'm going to... How about we... Let's do like a family session. You all can come around if you want.

This is the recursive dataset. I can send a short video that I compiled of a lot of other feature experiments we've already run. This would be nice because you can just say, let's prioritize these and you can help us port them over if there's a specific way you'd be interested in.

### Audrey Tang:
You can also just airplay it.

### Wendy:
Oh, yeah.

### Vehbi Deger Turan:
I just don't know if I can have it. I think this is... Is there a slide file? Oh, there is. Okay.

### Vehbi Deger Turan:
I read simplified characters. I mean, read is a strong word. But, okay. Okay. We are actually trying a bunch of things.

### Vehbi Deger Turan:
So one of the things I'm interested in is to be able to calibrate depending on the data section. But, I want to have there be a, if you don't know what clustering is, you should be able to use it.

### Ke Wei-Jan:
It's fine. They have a lot of cluster everything. You can try it.

### Audrey Tang:
It's really cool.

### Vehbi Deger Turan:
This one is the one that I think you all have. Here are the clusters. You can go to a specific cluster. There's a brief analysis and representative comment, but you can also dive in here and any kind of metric that you're interested in. You can actually like we have some filtering here to be able to see the comments have higher consensus. So you can filter. This is all things that we can receive from polis.

### Vehbi Deger Turan:
I'm interested in coming up with proxies for these, like what would be the highest consensus, but these being AI driven actually does compromise human input. But then again, if there's no human input, otherwise maybe it is okay to try some of these experiments.

So that is why I think there being a research repo along with a full open source ready to go repo that doesn't necessarily have all the experimental features is a good one.

And then AI, this is the one that has the translation feature. Heal Michigan is the one that I wanted to show you. So this is a data set that is basically a zoomed in snapshot of 13 people, hour long recordings. And the recordings are actually quite intense.

The focus was actually people who are coming out of or have observed the criminal justice system. Everyone is African American living in Detroit, which is one of the hard places to live in the United States.

### Vehbi Deger Turan:
So here are the clusters, a lot of them returning citizens that come through the incarceration pipeline. What are some of the main priorities for them? Any of these with one click, you can actually see the specific moments where they are actually discussing and making the points that they are making.

And we hosted all of these on vimeo for this, but we can actually work with YouTube. “I'm a community champion. They call me community Holly. A lot of people are like, oh, that's Holly. Community Holly.” They don't know what happened. Just translate that for me.

### Audrey Tang:
OK, so there's no nonverbal input yet. I am very interested.

### Vehbi Deger Turan:
That is a whole research.

### Audrey Tang:
Because like sarcasm and everything, that's only conveyed through nonverbal cues.

### Vehbi Deger Turan:
Can I take a detour here?

### Audrey Tang:
Yes, of course.

### Vehbi Deger Turan:
So we have three research avenues and AI objectives. The one that I work on the most is scalable cooperation, which is the stuff we are all talking about. Human attention and epistemic security is a different research avenue. Here it is how can we detect patterns that are not yet explicit for an individual. Right. Yes. And there's actually a lot of interesting stuff coming out of this. So happy to explore these side paths.

We are going to do a hackathon shortly, actually, that is looking at how can we integrate different streams of information. I think of this almost like just an e-mail case. If you're able to identify specific instances. One methodology you might find is interesting that I would like to explore more is actually to think about this from a perspective of prompt. We call this prompt inference. Are you familiar with the term prompt inference?

### Ke Wei-Jan:
Prompt inference?

### Vehbi Deger Turan:
Yeah. Basically, the way we use chat systems right now or chat GPT is can you predict the next token and use that as information? There's a different way to use all language models that is actually very much not common. Why? I think because this doesn't yield immediate product in a purely, you know, Silicon Valley capitalism landscape.

But I think there's a different interface. A language model that is fine tuned or prompted in a certain way has more likelihood to generate certain sentences than other sentences. So you can have a like give a sentence and say what's the likelihood that you would have generated this sentence versus another one.

### Vehbi Deger Turan:
These models are very good to be able to see what sentence am I most likely to create. Using this, you can actually come up with ways in which this sentence would be unusual or surprising to come from this person or to come from this model. We can only do this with open source models. Anthropic or OpenAI will not give access to their logits because we actually need the model weights to be able to do this.

### Ke Wei-Jan:
They don't return the likelihood.

### Vehbi Deger Turan:
You can't just ask what is the likelihood. You can get the likelihood of what they think but you can't ask. So there's a lot of really interesting work there.

But I'm just going to reel back. So the video is a backstory.

### Ke Wei-Jan:
Actually, they can return the likelihood? because they are generating model inside. They have a probability. They are sub-max distribution.

### Vehbi Deger Turan:
They don't give it to the public.

### Ke Wei-Jan:
They just not return the likelihood.

### Audrey Tang:
They have it but they are not returning. I think you're doing some of that. In mid-journey, you can give them a picture and say give me the prompt that will generate it. And if the prompt is very, very long, then it means that the model is not tuned to that picture. But it's not likely for us to just keep paying the API fees just to reverse engineer the logits. It's much easier to work just with lava or any of this open source.

### Vehbi Deger Turan:
I'm just taking notes.

### Ke Wei-Jan:
I think if we can change the llama output layer, maybe we can get logs.

### Vehbi Deger Turan:
So if you say there is video data that we can use, this pipeline is actually not very hard to build. To be able to work with videos. And then this creates a very, like this is a real human. It changes how I react to this. And it also is a much better interpretability tool to be able to go to specific moments in the transcript where the point has been made. So this exists. And this is part of the likelihood. So we have a whole different URL called, this is our internal work staging bank.

### Audrey Tang:
Much more like polis.

### Vehbi Deger Turan:
Yeah.

### Audrey Tang:
But traditional polis.

### Vehbi Deger Turan:
A little bit of drama. Where are the inspirations come from? So here you can create a new data set very easily. We have a bunch of user management tools.

So you can merge the model. If you want to create a new data set, do you want it to come from video sources or raw text is one of the first questions that we ask.

Let's go to Heal Michigan again. So here's a series of topics. For example, in this you can do multi-tier clustering. So within the incarcerated person integration and support cluster, there are these sub clusters. And that is something that was quite interesting.

We removed this from the V1 of the open source mainly because if you especially have a very small data set, two tier is not necessary. But we could actually have this be a toggle on how many recursive clusters you would like.

In this case, you actually can talk to a cluster. This is basically a fairly simple pipeline. Giving the context of everything that was in this into the context of a language model and continue from there. There's a lot more interesting things we can do here.

This is a different interface again. Will the AI be accurate in representing the community? Not necessarily. Probably not. That's why I wouldn't launch this and say AI fix democracy. But these tools are actually very useful. For example, for research, if I want to identify crux in between these two clusters, what are things they don't agree on? Being able to directly bring these to a language model can help me weed these through. So it's a different research tool that I think has some usability down the line.

So this is one set of features, especially being able to plug these with Llama. We also have the same data sets here as well. This is the earliest one that we looked at. So it should have some of the original data set. This one will all be in English because we hard coded it all. Here there's basically a series of... If you're creating a new... I made this video actually that shows a bunch of the features so that I can send this to you all. You can upload an open AI key or give a Llama API URL so you can work with a public model instead of using open AI that you host however you would like. There's some stuff on admin accounts. There can be a single hosted instance and a small group of people can make new data sets based off of that.

You can see the users that have access to it. Who can create public data sets is a good one. You can have a data set just for trial originally and iterate on that. We built a one-click ingestion pipeline. You can just give a URL basically and it will process the whole thing directly into it. These are the clusters that exist in this YouTube video. You can do multiple YouTube videos. We just like YouTube as a test case because there's just so much content out there. But the data source can be anything. This exists. You can search the argument embeddings. For example, this was about a specific... Sorry, still running forward.

Basically, every single dot can be represented as an embedding on which you can do a search and other features. This was helpful for me to do things like what are cruxes that exist in the clusters? Can AI help bring visibility into that? We can make sure, for example, human deliberation that will happen in a real town hall can just grab those and move forward. Replicate. We use replicate.

You can select the data set. If your data set matches with the structure, then it will be able to process. Then you go to extract arguments. You select the specific prompt that is used to extract the arguments. We always come up with a couple of suggestions that seems to work well with the model.

You get a number of arguments. For example, this extracted 191 arguments. Turn these into embeddings so we can do... Turn these into clusters. Do one tier or two tier clusters. Tier 1 sub-clusters, etc. Label the topics. This is also important so that you can see the names for this. We actually iterated on the UI even since then to put the names of the clusters on top of the topics. So yeah.

### Ke Wei-Jan:
So label this cluster. Also use some kind of prompt to do a summary, right? Something like that.

### Vehbi Deger Turan:
There's two parts to it. One is what is the theme of this cluster? And the other is what is distinct of this cluster compared to the other? Because it is likely that every cluster will be about the Internet and AI.

### Ke Wei-Jan:
If you only want to summarize, then that will give a very brief summary.

### Vehbi Deger Turan:
So that's why the distinction is important.

### Ke Wei-Jan:
Oh, cool. You need to compare both.

### Vehbi Deger Turan:
Yeah, so we have a bunch more features. We didn't want to just open source with all of this mainly because we are still working on this. And I would rather have this come out to the world in order of usability. What should we do next? Should we prioritize going with open source models? I think reducing access to use this tool by uploading your own data is the right thing. Because then we will get much more input about what we should be doing next. I will share the URL with you of this video just so that you can look at all of the features.

### Audrey Tang:
So because Odi here also deployed our local model in the form of chatbots in Google Chat. And Wendy manages the Discord instance of our ministry. So we actually can have a constant stream of inputs. It's like an ongoing conversation within our ministry. This is the form of the social object reflection that I really wanted to work within an organization before the organization pushes itself as a civic participation tool. Because then people understand the risks, limitations, and also the idea of what I call bridging statements and what you call cruxes in the system.

Because without the crux finding or even crux synthesizing ability, this is just a glorified focus group basically. So it's very important that the people starting these conversations with the public first understand this through their daily usage. So I'm wondering whether you'll be open for us to, in addition to working with open source parts, to also try this internally.

### Vehbi Deger Turan:
Absolutely.

### Audrey Tang:
So that Odie and Mashbean... Actually, we're going to announce in the ministry meeting tomorrow that there is a chatbot to experiment with. So you can exchange this, I assume it's in the repository, with Odi here. And then Isaac and Odi can work on both the internal and open source part.

### Vehbi Deger Turan:
Totally. My hope would be here... Some of these features are really good. I want to bring these to the public facing repo as well, but I want to do this not in like a, here are all the things we've already been throwing to the world. I don't think that would be nice.

I think we need to make them be goal-oriented. So especially what I would hope for is from that trial, some learnings would come up that then we would together translate into, we brought this to the open repo because this worked well or we should...

### Audrey Tang:
I mean, we assume that we're all here, FRO, GPL people.

### Vehbi Deger Turan:
Right.

### Audrey Tang:
Any learning or modification, we will contribute that.

### Vehbi Deger Turan:
I'm also needed as my... Yeah, for sure. I think that goes without saying, but the thing I would like to highlight is more like, I want a lot of my attention to go towards bringing things to the new repo. That is the public facing one rather than this. So if you find something interesting, I would, instead of working in the old repo, I would say let's try...

### Audrey Tang:
Just port it over.

### Vehbi Deger Turan:
Yeah. Because it is, like we could have just opened the old repo too. I don't think that would have been the right way to go. I will share this with you all so you can look through it. But basically I wanted to ask like what features are most interesting.

### Audrey Tang:
Oh, you did try it, amethyst.

### Vehbi Deger Turan:
Yes.

### Audrey Tang:
Great. Did it work?

### Vehbi Deger Turan:
You will see. It worked well. It's not the same level.

### Audrey Tang:
No, I mean, how much RAM do you have on your computer? On the Mac that you're running?

### Vehbi Deger Turan:
It's just a Mac that I built.

### Audrey Tang:
Okay. It's about this Mac. Yeah, that was...  It's 32, right? So because mine is 96. So I get to run Shiny Valiant. I see.

### Vehbi Deger Turan:
Honestly, like part of me is perverse to trying to make a conclusion from a small model. Because I don't know. In a month there will be like there always will be the model. So that's when I realized I shouldn't get lost in this part. But yeah. I think the priority for getting this to be open and usable for a non-technical person is great. Let's just start from that thread.

My first question is, should we just make this a CSV upload? If you give us this structured data, then we can immediately turn this into a report. I think it's the right way to start. What else? It would be interesting. I'd love to just make a little bit of roadmapping. Yeah.

### Audrey Tang:
And the next one, if you said that there's already YouTube integration and Vimeo integration, then it's not too difficult in addition to the CSV input.

### Vehbi Deger Turan:
It is substantial. And then the transcript doesn't work as well. It's in the language we have.

### Audrey Tang:
But in YouTube there is existing automatic stuff.

### Vehbi Deger Turan:
I think we used Vizcura when we did it. Actually, no, that's not true.

### Audrey Tang:
You just rely on YouTube.

### Vehbi Deger Turan:
We only use YouTube transcripts. I use Vizcura.

### Audrey Tang:
Exactly.

### Vehbi Deger Turan:
It would be nontrivial just because there's another layer there.

### Audrey Tang:
Do you need speaker identification?

### Vehbi Deger Turan:
No.

### Audrey Tang:
You don't need speaker identification.

### Vehbi Deger Turan:
We don't do it yet.

### Audrey Tang:
You don't do it yet.

### Vehbi Deger Turan:
I will show you, for example, a data set.

### Ke Wei-Jan:
One video would have all the data. It just says Nokia?

### Vehbi Deger Turan:
That is because that's the name of the video. It's a specific person. Only one person is speaking in this video. Yes. We've been trying different data sets. For example, these are all interview data sets between two people. But we don't know if it's Zizek or Peterson saying this. I was like, I need to find something that I will be engaging with a lot of people with this data set.

### Audrey Tang:
That's fine. If you don't yet require speaker identification, I'm sure that just importing from YouTube would work. People want to have a higher quality transcript. They can run through Whisper and upload the SRT to YouTube. That's something on the burden of the data preparation. Not on your system, basically. You don't have to fork out to run Whisper.

### Vehbi Deger Turan:
I think that makes sense.

### Audrey Tang:
Just existing SRT, right? API that you can do a YT-GLP download to obtain.

### Vehbi Deger Turan:
My partner actually has a startup that works on speaker identification. I have talked about this with him a lot. What next comes to your mind?

### Audrey Tang:
I think once we have these two, there are far more people in g0v that would be able to contribute meaningfully. And they will have their own priorities.

So I think for open source, if you solve these two, we can practically guarantee hundreds of city hackers looking at your project.

### Yen-Lin Huang:
There are a lot of groups that want to try and talk to the city. And I will introduce you tomorrow.

### Audrey Tang:
And internally, the Odie version, I think you just shared with Odie, that's all.

### Vehbi Deger Turan:
I'm happy to. More than happy. I would love your help in bringing the good parts.

### Ke Wei-Jan:
So we need to build a self-hosted one, how to talk to the city?

### Audrey Tang:
Yeah, just version one internally. We have Google Cloud, which is probably compatible with Amazon.

### Ke Wei-Jan:
And we also have a local host LLM model. Yeah, LLM and Python.

### Audrey Tang:
So there's nothing Amazon specific.

### Vehbi Deger Turan:
No, we...

### Audrey Tang:
It's just Python.

### Vehbi Deger Turan:
So very straightforward for it to be able to work. Compatibility to LLM model is important for the open source version as well. Right now, it's all just open AI.

### Ke Wei-Jan:
It's okay, because my LLM model has an open stack.

### Vehbi Deger Turan:
Oh, separate. So it's open AI stack.

### Audrey Tang:
Odie already solved a lot of infrastructure issues.

### Vehbi Deger Turan:
I also think I care a lot about the future of humanity and AI safety and AI ethics. And I'm like, and there's just one interface. We just coordinate on this.

### Ke Wei-Jan:
I choose the open AI interface stack right now.

### Vehbi Deger Turan:
This is the first thing.

### Audrey Tang:
Don't get me started on some templates. Right, right. You can try the system message. Oh, yeah, yeah. System template, right.

### Ke Wei-Jan:
All different.

### Vehbi Deger Turan:
I'm like, maybe we should just have a non-profit book, this is our cost. Cool. Compatibility to LLM model. Because a lot of people will just use open AI.

They won't have their own models. So I think that's fine. I guess that comes before or after the CSP.

One of the things I would love is for this to cause a lot of output that will come up with different hubs, like GovZero to all around the world to say, how do we try this? To me, one of the important things, and this is where I start standing farther from just like typical AI safety boxes. I want to have this to be used by people who are not just thinking about AI. I want this to be actually much wider.

That's why I think Heal Michigan was good, because this is probably one of the most disempowered communities in the United States. They don't even have a right to vote if they've committed a felony, but these people are still here. What are they thinking and talking about? So I really like that this report was actually shared with the Congress people. And to me, that is a win because now there is a shared artifact they can all point to. I want more of this.

Anything else that comes to your mind on some of the things like embedding search or talking to clusters? I feel like those are more research tooling at this point than necessarily public-facing, but I'm curious if you have any thoughts on ways in which this would add value to bring out right away.

### Audrey Tang:
I think you had compatibility of Llama models, but I thought that ODI already had an OpenAI shim running, the API server. So it's not really a priority. The priority is mostly just a reproducible v1 deployment shared with ODI so that we can start porting the good old parts to light. And that was just a clarification. And then the talk to clusters stuff, I think as long as there's good OpenAPI, people can just rediscover that using SillyTavern or whatever.

As long as we can systemically extract the clusters, the embeddings of the clusters out of this system, people who want to synthesize another context or even fine-tune a LoRa, based on those statements. And so we can just go ahead and do it. So talk to us, it can come almost like midway.

### Vehbi Deger Turan:
The ideal flow, in my opinion, would be we can have a separate repo that is responsible for talking to the cluster. If you want, you can have a flag on the open dataset generation. There could be a button here that says talk to the cluster if you want to expand.

And in that repo, there will be a lot of AI driven bridging, etc. Because there is a lot of work to be done there. I think that is still very much in research mode. Maybe a couple more years of open source model will make that trivial. We're not there just yet. So my suggestion is we can have a repo that explores that as a research experience.

### Audrey Tang:
Yeah, Cilia Tamarin core is Cilia Tamarin Extras. So in the Cilia Tamarin repo, there's any number of plugins that as you chat to those AI chatbots, it draws illustrations, do real-time summarization, and none of which work very well. Which is why it's called Extras. So the devs can focus on core functionality.

### Vehbi Deger Turan:
I actually like that model. So separate repo for talk plus features. Because I am very interested in playing with those features, but they are not necessary. In fact, it's likely a turnoff if it is very priority. Because if you say I don't trust the AI to talk to it to get a conclusion, that shouldn't be an issue. Anything else that comes to your mind that you would say this would be good to have?

### Yen-Lin Huang:
Can we record the conversation randomly when the people discuss with the step-fasters?

### Vehbi Deger Turan:
The conversation they have? You mean in the chat interface?

### Yen-Lin Huang:
I think it would be really important when we collect the data or collect the opinion online in different time zones or different locations.

### Audrey Tang:
Adding to the cluster through chatting.

### Vehbi Deger Turan:
This is where I first want to start. I love this. This is what I wanted to do. I'll tell you all the things people have told me why this is not a great idea. On Silico.Literally, I negotiated with my team. We were about to publish our post.

And they were like, let's not say in Silico deliberation in the post. Because it is also quite a fear-inducing term, I think. A lot of much more traditionalist folks around. We don't want human deliberation to be replaced by AI. I think this all makes sense to you all, but I realize the rest of the world is not necessarily as comfortable with it just yet.

### Yen-Lin Huang:
Because in Taiwan's government, we have joined the TWA. And everyone can vote and express their opinion.

### Audrey Tang:
We're all very separate, I think.

### Yen-Lin Huang:
If there is any possibility for the people to discuss, not just on the forum, but real people. If there are so many opinions, we cannot find out which one is helpful.

### Audrey Tang:
If people are happy with machine facilitation.

### Vehbi Deger Turan:
Yeah, that is the core question. Because if we launch this, then that also means we endorse machine facilitation. I would be open for, for example, this is the kind of thing that should live in the extra. I would enjoy hacking on this together. I think this is great. This is how I first thought the clusters would grow through interaction.

And I thought this should be on a voice substrate for it to be more natural. Because that is how I think mostly. Like when I read and type, but typing is more formal. Typing feels like I have to already know what I need to say.

### Audrey Tang:
Yeah.

### Vehbi Deger Turan:
That was the thing that was really shocking about the Heal Michigan data. It's how strong the viewpoints were here. Because people are just given free reign to talk. So I would be very interested in this. I will add that to our enhancing by talking to clusters discourse.

### Yen-Lin Huang:
Because the big part of colin is when a six statement is more than one thousand.

### Audrey Tang:
Exactly. He doesn't scale.

### Yen-Lin Huang:
Yeah.

### Audrey Tang:
Actually, colin has an issue that lists how he thinks. I don't know whether you've seen it. I'll just paste it somewhere. And a lot of this, like 80% of this, is actually capturing the Michigan facilitation conversation. We really want to help fund developments to work that very specific vision.Because as a professionally trained facility, we want to work on the Michigan facilitation.

### Vehbi Deger Turan:
Yeah.

### Audrey Tang:
How do you guys do have a signal?

### Vehbi Deger Turan:
I will make a signal. I live on signal. I tell people that I will respond on signal faster than email. New group. Do I have your contact?

### Audrey Tang:
Yeah. Or I can just type it in. Send me a speaker. We also have our own speaker set.

### Vehbi Deger Turan:
This also helps with one of my main qualms about the way so much data collection that Polis uses, which is it's incredibly path dependent.Basically, my uptake is like after 20, there's very little data. Like the conclusions are already there.It's just about what you highlight.

### Yen-Lin Huang:
I just want to vote with the more controversial. Right. Yeah.

### Vehbi Deger Turan:
The more radical. Yes. This is...

### Audrey Tang:
No, we have our own speaker set. That's not the issue.

### Vehbi Deger Turan:
I love it. Would you make a group thread with everybody? Not mentioning...

### Audrey Tang:
With ISAC and everyone.

### Yen-Lin Huang:
I need your phone number.

### Vehbi Deger Turan:
Do you all use Slack?

### Audrey Tang:
Yes, we do on DevZero.

### Vehbi Deger Turan:
Because there could also be an integrated Slack channel.

Because then everyone...

### Audrey Tang:
No, tomorrow when we meet DevZero people, I'm sure they will designate a Slack channel for you. Anything that's there. So, machine facilitation. I do think that because Taiwanese people are already very cybernetic. We... I'm serious. The DM, machines department, is already funding a very specific use case. Where the river sensing data, right? Like pollution, satellite imagery or whatever. Synthesizes into a river avatar.

### Vehbi Deger Turan:
Yeah, I know.

### Audrey Tang:
That talks to you, right? And it's called talk to a city, not ride to a city.

It's called ride to a river.

### Vehbi Deger Turan:
It's called saying hi to a river, right?

### Audrey Tang:
And nobody talks to you right through a river. So, the voice mode is very important to this as well.

### Vehbi Deger Turan:
Yeah, this is its own... I would love like 10 PhD students all around the world exploring different aspects of this. Because this is the more cutting edge part here. And I would love to experiment on this. I think all of these are fairly... Like, we can finish this before the end of the year. And this, I don't know, will we be done with this in a couple of years? But no, I guess...

### Audrey Tang:
The first few things are engineering. We're all engineers. But this explains usage.

### Vehbi Deger Turan:
Because the part of talk to the city that I... I don't know. It's my challenge in some ways. I almost get to go off its engagement with users. And I think that is mainly because... Like, when I observe people try to talk to clusters, there's a... What should I do?

Like, I don't know what to ask. Why would I ask anything? But if these were actual people next to each other, they would talk.

A thing that I tried, for example, with Heal Michigan was... There were a few interesting cruxes in this dataset. And we put in touch the specific people that had these cruxes to say... Oh, can you talk about this? And that was amazing. Because that obviously worked. So then my question is, how do we get an avatar to be able to be engaging? I think voice is a good step. At least that's what my money goes to.

### Audrey Tang:
Yeah. My talk in AI Academy Summit was that I think that the most immediate use of this point is deep canvassing. Deep canvassing, which is a term in political engagement, is how people change other people's deep-rooted ideological stereotypes. And they do that not by showing any facts. But rather, just by relating deeply to that person and showing the cruxes or bridging perspectives.

That led them to see that we're, after all, sharing the same pain or toward the same nonviolent goal. Things like that. So they want to change their stereotypes, but not their values. So deep canvassing is how I personally use the original Twitter dataset that used to have this over-encroaching. So we fixed that. So then when I talk to open AI, when I talk to Anthropic and so on, I just literally simulate the depth deep canvassing in the conversation interface. So I'm not convincing you to accept any new ideas.

But rather, based on your original idea, how can you make peace with the people that seems very different from you? Like if you put Kostya on one side and Yelich on the other. So for that, it already works. And so it's assisting or augmenting a deep canvassing. It's not machine canvassing yet. But we just aim for that. It's a more tangible research.

### Vehbi Deger Turan:
I like this. This also touches the human autonomy and individual sovereignty work very closely. And one thing I always want is different research avenues to intersect with each other. This requires a methodical approach would be how I would think about the first. Like what are things in the AI system can offer you so that you can notice these are the parts that I need to witness first.

Do you have any pointers to the office that would give a guide that we can then say. Yes, it's easy to say maybe I that's like an export the content of the question.

What passed that on to that? This is a project.

### Audrey Tang:
No, no, definitely. No, we have had a lot of like handbooks for dynamic facilitation and things like that. This is after all my main work before becoming the minister of this ministry. So we've got a lot of connections that we thought and specifically people carrying this research forward now has their own thing. So maybe we would like to connect you to that.

### Vehbi Deger Turan:
What are they?

### Audrey Tang:
It's a the abbreviation is called the sets. Right. So the democracy is society and emerging technology. I can never actually fully explain that acronym. This is very new, by the way. Yeah, I think I thought about democracy. It's like a knowledge.

### Vehbi Deger Turan:
I think you can see what they have written and stuff just as a starter.

### Audrey Tang:
Yeah, right. So maybe Wendy, who is working with these...

### Vehbi Deger Turan:
Oh, great.

### Audrey Tang:
I'm just the head of the facilitation.

### Vehbi Deger Turan:
OK, that's good. I'm curious, like what comes to your mind is, you know. Which features would be most interesting or valuable to look at next.

### Audrey Tang:
Yeah, you can say mentoring as well.

### Wendy:
Which part would you like to know？

### Vehbi Deger Turan:
I would be interested in your thoughts on how AI advanced.

But people be canvassing would work in your projection. Like, what is what is something that we can do that actually would bring value today is a very like I like to use that compass to be able to go to instead of talking about.

Is there something specific that actually would be helpful or we will have more data than a human would be able to read in these systems. So what would be helpful?

### Wendy:
So, we are a digital industry.

### Audrey Tang:
That's right.

### Wendy:
Yeah, so, also AI is an important issue in the future. So, choose a base topic. But, actually, I think a lot of public issues like rules or regulations that we usually want to use.

### Audrey Tang:
Yeah, I think the next workshops using this method by the end is still partly AI, but AI intersecting with certain applications.

### Vehbi Deger Turan:
Yeah.

### Audrey Tang:
Right, so, here's one upcoming about medical use of AI, especially privacy preserving ways of using personal data. And this is mostly actually industry players, but our ministry, because we're in charge of data governance, still have a stake in it. And this feels immediate, because our independent data protection authority is forming next year.

### Vehbi Deger Turan:
Yeah.

### Audrey Tang:
So, if we don't come up with good privacy preserving ways to do research, it's likely that they would just say, don't do this research.

### Vehbi Deger Turan:
So, this is where Europe is going right now.

### Audrey Tang:
Right, exactly.

### Vehbi Deger Turan:
Have you listened to a lot of the ZK work on this front?

### Audrey Tang:
Yeah.

### Vehbi Deger Turan:
Anything promising that you have seen?

### Audrey Tang:
Well, we've translated actually a ZK app from the Netherlands, so that people can use their wallets to prove their legal age without disclosing their age or using range groups to express preferences. The problem of ZK in Taiwan is that prior to the independent DPA, the requirement for anonymized data is so low that you don't require ZK. You can get by with just key anonymity errors and things like that. So, there's not a lot of investment on ZK.

### Vehbi Deger Turan:
It's not necessary.

### Audrey Tang:
Which is why we're publishing guidelines by the end of the year that establish the higher standard of ZK, realized through homomorphic encryption, multi-party computation, you know, the drill. And then say, only these are privacy preserving. So, thus far.

And then when the independent DPA is set up next year, we can then say, oh, we have existing toolkits that can help you.

And this requires justifying the data infrastructure as public infrastructure for the government to invest in. So, that's our… In the next couple of months, nobody wants to invest. This is something that's the first mover to have to pay a lot.

### Vehbi Deger Turan:
Right. You have to show it. Like, there's already something here.

Great. This is good.

### Audrey Tang:
Exactly. Which is why it must be public infrastructure. So, we're getting some money to do that. So, I think the point I'm making is that whenever there's this incoming, like the EU, GDPR, this regulatory seismic shift, then you have an immediate point of tension that requires quick action by policymakers. Whereas the policymakers actually don't have that much power. Because mostly state voters in the capital and civil sector. So, I think everything of that shape is useful.

### Vehbi Deger Turan:
That makes sense. That makes sense. I was exploring this for Talkative City and then it hit me. We don't need this. We can just work with CSVs for now. I don't see Talkative City to be used in the immediate future about an issue that requires contribution with anonymity. And if we need anonymity, we can have someone else figure that out. But just give us IDs and text. So, I pulled back from this. But this is quite interesting for some of the more open agency architecture oriented work. Yes, for example. Like I talk about that day of research. This is an internal doc. It's not done yet.

### Audrey Tang:
We're all friends here.

### Vehbi Deger Turan:
Like this part I am particularly interested in. Like I don't know my preferences. Like asking me to have a preference over a possibility distribution that I'm not familiar with is almost a disservice. So, to me, the important part is given people don't come with strict preferences over outcomes and the deliberation will enable people to realize their preferences.

How do we not just throw people referendums but actually a flow through which they can suggest actions, suggest, you know, I think this is what's likely to happen with an action and suggest outcomes. And my goal isn't that like all of this needs to happen in Silico. I think it is actually very time for this to be a human process. But we don't necessarily have good division between these three. This is the place where I think anonymous contribution is actually really valuable.

### Audrey Tang:
No, definitely. And this goes straight into the 2012 like blended volition extrapolate volition debate. Because the blended volition school, which I'm a part of, basically says individuals are never a good unit to elicit value. People exist in intersectional groups in plural publics and these plural publics that are the fundamental units of analysis when it comes to outcome preferences. And so like an individual in different group contexts would have vastly different outcome preferences and each person belongs to multiple such communities anyway.

So it's almost meaningless without prior community context to say what's this individual's preference. An individual doesn't have preferences actually in isolation. So to your question, I think what we're now looking at is some way for civic infrastructure to mimic public infrastructure. That is to say for each decision making mechanism that appears in the public sector, whether at a municipal or federal level, the how-to of doing this is open sourced sufficiently such that there is multiple civic groups doing the same kind, same dimensions, the same shape of deliberations that are like the possible futures to the central institution.

So this is neither decentralized in which there's no institution, but neither authoritarian in which the institutions just delegates responsibilities, but rather a dynamic interplay between the two. And so the action space is constantly being broadened by a shortened latency of the civic infrastructure.

I think one of the main problems was that to bootstrap a polis conversation or whatever other large deliberation method currently requires too much cost. And so only large organizations get to bootstrap it. And then the civil society groups only gets to enjoy limited freedom of possibility of distribution selection within the pre-carved space. But if we flip this around, if we make sure that the bootstrapping costs almost less than the institutionalized vision, like starting a new random coin is easier than the central bank doing a new currency. And in which case this part will have more agency. And we in the government only have to focus on accountability. Whereas currently we have to focus on both, which is not fair.

### Vehbi Deger Turan:
So you're saying civic tech should have the head start with better tech? And at that point the government is just responsible...

### Audrey Tang:
Right, exactly. So our responsibility is our ability to respond to it.

### Vehbi Deger Turan:
Right. So I see Talk to the City as just one of the many experiments towards this. To me this is the North Star. Talk to the City is fun because you can use it for three outcome preferences really well.

Ask people what's future? What are your thoughts? One step away from that kind of question. Or what should be top of the agenda? About what actions are possible? I'm interested in using the Asian inference for thinking about helping people think about what could happen. But you can also just ask people what do you think is likely to happen and then they can give an answer.

### Audrey Tang:
That's the whole point of running IdeaThon. It is just to have those would-be sci-fi authors or film directors or whatever to respond to a shared prompt and share their vision. And make sure those visions reflect meaningfully to the outcome.

### Vehbi Deger Turan:
If we were just doing a hackathon to make a prototype that's just one, two, three, how would you approach it?

### Audrey Tang:
What would the hackathon involve?

### Vehbi Deger Turan:
I'm thinking about it from a build perspective. If we were thinking about how can we have... Because tools like Talk to the City or Models are not trying to solve the how to scale coordination. It's a tool that does one thing. I'm interested in how can we have a moment where the bootstrapping cost for this flow is accessible. As opposed to just being able to do an individual. A solution could be just run three surveys back to back, each informed from the other.

### Audrey Tang:
That's what we do. The double diamond stuff. So you run one at an exploration, you run one at a definition and you run another one when it comes to decision.

### Vehbi Deger Turan:
I'm curious what else could we do that makes this contained in one process, in one product. I don't know what I'm looking for here. That's why I'm at a loss of words. I think this is the thing we're trying to make headway.

### Audrey Tang:
There's a certain virtue in having well-defined artifacts at those handover points. Rather than thinking them as a single process. Because those artifacts are the cruxes that allow the civil society to have alternate visions. After the poll, we now know the breaching statements, we now know the cruxes.

### Vehbi Deger Turan:
I like that a lot.

### Audrey Tang:
Those how might we questions. But actually if we just publish there, instead of saying it has to go through the next step. It actually opens up the civil society to have alternate imaginations. Maybe it's almost like a manual. Here is a path, here is different legs of this path. I would like this double diamond to be more public. Right, a toolkit. That is what I hope. This goes towards actual scaling. Any other things that you want to talk about?

### Yen-Lin Huang:
I think the action, the product of the action is not the tool that rules. It's the power that rules. People should have the time to do something they want. The problem that didn't solve by other people. And like how you said, every culture has different situations. I don't think one tool can solve all the problems. Maybe the tool can be tried in different cultures and different space. And we can see what kind of community can. It's a pro tool. They want to try the new tools and it works.

### Vehbi Deger Turan:
And I think it's also that, I don't know, if you ask me for biosecurity and AI, what's your action space? I have no idea. I'm not an expert. But I can think about this. If you ask me my outcome preferences, I would probably have pretty robust answers. It's about a policymaker, a domain expert and the population are three different faculties. Not everyone has to be active on all of these fronts.

And I think in fact, being able to say I don't actually have a lot to contribute on this question is a big part of civic responsibility. So if anything, I think the way democracy has evolved in the last two centuries created this illusion of everyone has equal parts on all of these in every issue, even though that is not what happens in reality. So those are some of the things that I think would be emergent. But yeah.

### Audrey Tang:
Yeah, I totally agree. And one way out of this illusion is just to make the tools that are super useful for people in groups of three or five. So if they start thinking of their plural public as a unit, then it actually makes everything that follows much easier. A lot of the tragedy of Facebook was about the decontextualization.

So it's just five people talking about things, but then because of public conversation, a friend of a friend's family decontextualized the conversation by taking a snapshot or something, or by thunking at it, by retweeting. So we all now understand that contextual integrity is everything. And that's actually where also I see most of the ZK and Providence work as important.It's just that this community can then feel that we are meaningfully an agent.

### Vehbi Deger Turan:
Yeah, I think that meaningfulness is very important. And that can only happen with smaller scale contextualization. I'd love to share this with Colleen. You're still recording, right?

### Audrey Tang:
Yeah. I want to. No, no, no. I want to. This point, especially, I'd love to talk more with Colleen too from our team. But yeah, I think there is some. I mean, this is thought work. I want to explore this so that I can get a sense of the context in which these tools. I do believe the tools are useful, but which spaces does it fit specifically?

The thing that Bruno is quite interested in, and that we've been talking about, is around incentives and incentive gradients. But also because people do not be able to engage with these. Being able to make that explicit is also, I think, powerful.

### Yen-Lin Huang:
I'm curious if you have any other ideas or any strategies. I think the tools should apply to the youth advisory board.

### Audrey Tang:
Yeah.

### Yen-Lin Huang:
There are a lot of deliberative workshops that are initiated by the Ministry of Education. And they want more youth, young people to discuss, learn how to discuss, and to maybe produce some opinions to the policy.

### Audrey Tang:
We have cabinet level youths, reverse mentors to cabinet ministers.

### Yen-Lin Huang:
I see.

### Audrey Tang:
So for each ministry, they appoint one or two people to be their reverse mentors. We are under 35. I'm too old for this.

### Yen-Lin Huang:
Yeah.

### Audrey Tang:
I used to lead the advisory board. We created the structure. Yeah, we created the structure. And the point being that's where it's difficult for people entrenched in the existing institutional decision mechanisms are lacking. They can actually learn from the young people who have now explored better ways of decision making in higher bandwidth, lower latency kind of way.

### Vehbi Deger Turan:
How do we make more Taiwan's around the world?

### Audrey Tang:
I don't know. But everybody getting a good card.

### Vehbi Deger Turan:
I mean, I'm actually quite interested in becoming also Taiwanese.

### Audrey Tang:
So that if we double our population simply by 33 more people becoming Taiwanese, then we can spread Taiwanese.

### Vehbi Deger Turan:
I need to learn traditional. I have studied Mandarin a little bit, but I don't recognize traditional characters.

### Audrey Tang:
That's fine. Our naturalization is actually a speaking. Yeah. So we can naturalize.

### Vehbi Deger Turan:
Any other thoughts that come to your mind?

### Yen-Lin Huang:
Yeah. I have discussed with the Stanford model because they have the online deliberation. The data community. I think it's digital democracy. And they use Zoom to make maybe thousands of people can have the deliberated process.

### Vehbi Deger Turan:
This is like where I was. I think that's interesting. No, no, no.

I just I didn't know if you knew or not.

### Yen-Lin Huang:
Because when you use the YouTube video to integrate into the city, I think that is a little bit similar to the deliberated pool product from Stanford University. They can make 1000 people to chat, to have the conversation at the same time. And no human to be the facilitator to facilitate the conversation. Only the automatic tools. And they can make the analysis after the recording of the video. mAnd they can have so many videos to import into the city at the same time.

### Vehbi Deger Turan:
I'm curious. I haven't talked to this group much, actually.

### Yen-Lin Huang:
I think it's another AI digital society.

### Vehbi Deger Turan:
I haven't seen the URL at Stanford. These are my people.  All of their websites are the same. But yeah. Jim Tishkin's group is this. Deliberated democracy. Yeah, this is Tishkin.

### Yen-Lin Huang:
Oh, yeah.

### Audrey Tang:
You're doing deliberative polling.

### Vehbi Deger Turan:
Yeah, I have a lot of thoughts. Oh, a lot of thoughts.

### Yen-Lin Huang:
I like all of them. That was one good.

### Vehbi Deger Turan:
No, no. I think there's a. Yeah. They were very much the first movers in the landscape. Jim Tishkin himself was charted out a lot of deliberative approaches. And I think there has been some negative side effect of that to prevent other approaches to pop up. By creating a certain territory. I mean, it happens. I don't think this makes something bad. But that wall was actually quite apparent when I first came.

So I have this. When I was writing my thesis, I talked a lot with Jim. One of the things I was saying is I'm really interested in AI tooling. And this was back in 2015, 2014. And he was not very open. I'm not looking for your blessings anymore. So I am curious to hear your thoughts. But I think they have shifted.

What are your thoughts about. During COVID, they shifted to a lot more digital stuff. And like everything has to be in person. Up until then, they have been quite against collecting smaller snippets from people. If you can't actually get all of them to talk to each other.

### Yen-Lin Huang:
What I think is cool is that they have a lot of videos. And we can use that. We can just make our own.

### Vehbi Deger Turan:
I'm not at all against working. I don't know who's still around in that group. I will reach out to a couple of my friends. I talk about them in my thesis. I'm not against working with them. I just know that they are not very friendly themselves. But if they have data, I'm sure they'd be open to using it. I'm friendly towards AI-assisted deliberation. That kind of stands against a lot of the core principles.

### Audrey Tang:
You probably already know that Meta is doing community forums on generative AI. And they're asking the two questions that to us looks like they're using the answers to Tumama. So maybe Llama 3 or Llama friendly to ACD. Talk to ACD so that Llama talks to ACD. Local Llamas. Like community Llamas. They're not currently doing any of the tuning by themselves as we understand. They're just absorbing the community expectations now in various cities around the world. And they do work with the Stanford D.D. lab for the Taiwan conversation around Yang Ming Zhou's own universe.

But I don't think they're doing tuning with Yang Ming Zhou's own universe. So this is actually a point of intervention. If we can say that we're picking up those diamonds instead of just the first one. Where it's about exploratory survey.

If we say we want to offer something like Talk to the City or Talk to the City itself as a way to increasingly tune a language model. So it serves as a better eventually machine facilitated system to summarization. Let's just stick with something that actually works. So that this model increasingly because it gets attuned to the local culture. It summarizes the same conversation better. And the way we train this model is by asking the people how do you expect to be summarized. So it's like an ouroboros.

### Vehbi Deger Turan:
Interesting. How would you anticipate and I guess I start from Taiwan. I'm thinking much or even smaller than Taiwan I think.

### Audrey Tang:
Yeah, and then city.

### Vehbi Deger Turan:
Yeah, much smaller pockets would be good. How would you engage the population? Would this be a paid engagement? Is there an incentive?

### Audrey Tang:
This would be a self-service thing. So if you're a local facilitator, you can gather 50 people or even just 10 people in the room. And if you just focus on talking about these two questions and upload everything to YouTube. And boom, you get a LoRa. To your community preferences, which you can then use to summarize your future community conversations.

### Vehbi Deger Turan:
I would like to hear your advice on which models do you think, because this is the kind of experiment I would love to run. Honestly, I would love for there to be a couple months of my time next year where I also try this in different communities. I actually think Turkey is a great place to have these kinds of pockets for it. All societies are fragmented in certain ways. I think the ways Turkey is fragmented, I think, yields really well towards facilitate again.

Facilitated discussion because you will find similar opinions in their different pockets.

So I'm curious, what would be the ideal stack here? Or what would be the ideal approach? Because you were saying you're trying the constitutional approach. Our relationship is a way to do this. It's not bad. There is thinking about, you know, directly having graphs and graph representation speed model, much more state-based rather than state-free approaches. If I try to do this both as a fringe research and also add value to community, I feel like I would do 50-50 and neither would be the time out. I'm curious what experiments would be good here.

### Audrey Tang:
I know. I think there's a couple points. One is, instead of doing the experiments ourselves, just do whatever they identify as the best. Which is giving grants to people who do experiments. And we only insist on a shared reporting structure, basically.

Our own ideas from the local workshops are also being written on in the same reporting structure. So just basically say, you know, get our grants, write a report like this, we aggregate in the future with machines. And this gives the most liberty to various communities and community organizers because they get to study the agenda.

### Vehbi Deger Turan:
Sure. I'm thinking about what the suggested pipeline should be. For example, it's one thing to tell people, can you rate your summary on the accuracy and feedback loop?

### Audrey Tang:
That is interesting.

### Vehbi Deger Turan:
Another one is to create this in a way where this directly feeds constitutional AI.

### Audrey Tang:
The way CIP does it is still with a huge amount of unstructured text. And then increasingly automated, but not entirely automated. And frankly speaking, GPT-4 assisted, even though it's entropic, pipeline. So that it eventually arrives to the constitutional compatible recommendations, as well as recommendations that are more about deployment and therefore not part of the constitution.

So just being able to tell these two apart is valuable. What things can be controlled at language model level and what can only be controlled at API endpoints. And so I think if we share just the toolkits around these and say, if you're an eligible community organizer, you can run this yourself.

### Vehbi Deger Turan:
I mean, Shagana, for example, who runs the Heal Machine group, she gathered like 200 people. She put us in touch with just 15 because we want to start somewhere. It would be very easy for her to be able to do something like this. Easy as in socially.

Technically, no, she's not a technical person. So it has to be like just "go to this website." So I'm thinking of her just as an example. She could really rally a lot of Detroit. I'm particularly interested in cities like Detroit that are, in America, it's like purple cities. It's not really red or blue at this point. It's just like this city has its own right.

And it has to stand for itself because no one else will look at it. So knowing that that is the kind of person I'd like to empower. So what would we give her? I'm trying to steal in a conversation with her. She would say, OK, I have all the people here. What do we do next?

### Audrey Tang:
So just make sure that you have good microphones and your normal conversations with dynamic facilitations. Make sure that you have like this. If you have automated speaker identification, then you don't even need to have that. Otherwise, I was going to say you have to put in name cards before each person. And just create a playlist. Analyze the playlist. And then you automatically get a machine summary.

Not just what we discussed, but also your community's perspective to the world. And then you get essentially a cultural translator. A cultural translator that can take standardized GPT-4 responses, anthropic responses, whatever response, but explain it in a way that will engage your constituents. This is the canvassing part.

### Vehbi Deger Turan:
So we will collect recordings of conversations of a few predetermined questions. How can we use resources to make your community better, etc. The summaries will be generated, say, the next day where they will gather. They will see the summary and every person can give feedback on whether it's accurate.

### Audrey Tang:
So the summarizer would say, we think, well, I think, this machine thinks, that this is what you're trying to say. These are the main divisions, their main differences. Here is the proxies that bridges those differences. So that is something that we think that you can all live with. But I may be wrong. So correct me if I'm wrong. And then you would correct like a facilitator.

You can talk to a facilitator and say, no, this is not what I meant. Because you didn't read my number of expressions. And so on. And so it increasingly coheses the group around shared actions. So this is not machine facilitation, this is machine-made facilitation. It makes facilitators' jobs easier.

### Vehbi Deger Turan:
Right. As a result, we will have a model that conceives feedback. We can turn it into some early jet lag structure. That would be easy. We end up with a model that is better tuned to this community. And we need to do these with other models.

### Audrey Tang:
Oh, right. Which is why Mistral Shining Valiant is so important.

### Vehbi Deger Turan:
Right. So that is one output that comes from here. I don't think Shaban or the people will necessarily care about that. They're like, great, we have another line.

So what would be a reaction? They'd be more interested in the artifact here. And that artifact would be the topics they discussed, the summary. And how the summary became better.

In that summary, I think some of the parts that we were talking about earlier on, like bridging or cracks finding or identifying, these are things we think we should double down on in our discussion next. It could also be interesting to introduce. I can envision a future for my work or our work. Next year, we will just try this back to back and collect a lot of different models. Give a model to every community.

### Audrey Tang:
One thing we discovered with our alignment assemblies is that the Taipei delivery workshop in Tainan and the Deliver workshop are very different by art. So a natural follow up is, what are the bridge making model results? If we have two models on each, are there a way for us to create a bridge maker model based on just these two models that will translate the core concerns of one city to the other so they stay on the same page and can take collective action. And if we solve that, we can have a very different model. We can imagine recursively applying it. And this is again part of the canvasing.

It's great if you have your local facilitators and so on, but actually the same facilitator cannot facilitate an adversarial group. A community that's hostile to this community. But they have their own trusted facilitators too. So if they independently do this, we can actually give those bridge making narratives to both. Or even to your congress people. Saying that here are the things that you promised us, people can live with.

### Vehbi Deger Turan:
This would be very exciting to be able to bring this to the groups that will not be paid attention to. Because there is a part that is interesting working here, which is, it would be interesting for large labs. I don't project the large AI labs that are actively for profit, but they're not profit, to try to give different models to every group. I know Stability AI is trying to do this.

### Audrey Tang:
And Meta too.

### Vehbi Deger Turan:
And Stability and Meta's main position is that they are open source in their model. And I think this could be very powerful.

### Audrey Tang:
And I think Meta and Facebook is shifting toward next door space anyway. They also don't want to be the blind contacts of the world. So something next door-ish actually works very well in this situation.

### Vehbi Deger Turan:
How do you think this synergizes with other work in the lab space? Like CIP and other forms? It's not really duplicates, it's different. I'm trying to understand what are ideal ways to have collaboration synergies, both with Meta and Stability. They will create more models. And other folks that are interested in this.

### Audrey Tang:
I think CIP, with the triangle, already sees safety and progress, is already kind of marrying that, with the glitchy remarks and everything. So CIP's main strategy has always been to take this side as granted. But then saying that there are ways for participation to make evals, redshaming, everything even better. So for training participation, not as a proliferation, as a safety hazard or a progress hazard, but rather as something that adds to it.

### Vehbi Deger Turan:
I think that has been my main difficult thing.

### Audrey Tang:
Exactly. This is a hard problem. But I think AOI, writ large, is something else. Because you don't actually start with a safety concern. You're more like progress and participation are our natural allies. And in order to make a lot of progress, we have to figure out where the society wants. Democracy, of course, is growing up, but let's not grow up to be a monster. So to me, it's working on a very complementary side.

### Vehbi Deger Turan:
The practicalities of let's collect more data, or let's zoom in on specific communities, and also how would we work with meta or stability. These books don't necessarily have the best safety reputation in the landscape, even though a lot of their approaches are aligned. So I'm just trying to think about... One way to do this would be to say, we stick with non-profit initiatives.

Another way would be, we can actually work closely for stability is trying to have an LLM for a country, basically, an LLM for education system. And that does sound noble, but in a way that I am more excited about. These you put in villages, and everything else is collateral, which is more open AI's approach, I guess.

### Audrey Tang:
Yeah, so I think, because you just said yourself, right? Progress and diversification and family safety. There is a clear order of reference here. And I think it's actually a position that is quite unique, because then you're basically saying, here's a path in which the hugging face and stability and meta in the world are actually contributing more.

### Vehbi Deger Turan:
I agree. I feel called out. I wrote this sentence. I remember the day where these people were asking me, our website was not good. I don't think our website was still good. I haven't touched it since March. I think I swear, over and over. But yeah, I was like, what are we? Why are we here? This sentence took a long time to mince in there. And we talked a lot about the ordering of human flourishing, societal alignment and safe AI. I think safe AI is trivial if the first two are… It emerges from the rest. That's why I am interested in exploring AI as a tool to look at the person.

### Audrey Tang:
Yeah. So, I mean, we should just, with obviously, focus on how AI affects democracy. And not how democracy affects AI, which is more alignment centered stuff. And because exactly as you said, if AI fixes democracy, then how to fix AI should be trivial.

### Vehbi Deger Turan:
I would never dare say in public AI fixes democracy. But I have to say it's a no more watered down version. Intermediate AI tooling will be able to help better.

### Audrey Tang:
Democracy processes and human flourishing, of course. We know. Very cool. Anything else? I'm curious.

### Yen-Lin Huang:
I think there will be more perspective when you discuss this. I'm really excited for that.

### Vehbi Deger Turan:
Can I invite a couple more folks from Vienna?

### Audrey Tang:
Sure. Sure.

### Yen-Lin Huang:
Welcome. Because we met two weeks ago at Hackzone.

### Vehbi Deger Turan:
We were just at the night market yesterday. And we covered promises. Is there a recap to help me? I can share it with the group. I imagine like three or four people. Some of them would be from OpenAI. And they are here as friends. That would be great. I'm very excited. I'm buzzing now. I think the priority list looks very sensible. It expands wider and wider. It's like an exponential curve. But yes. Anything else?

### Audrey Tang:
I think I'm good.

### Yen-Lin Huang:
I think I would still like to chat with the opinion leader. Whether it's virtual or not. Talk to the city front end. But I think front end would not be the top priority to discuss. Because when we talk with the large language model, it's just a tempo. But if it is a virtual people or opinion leader, I would have a conversation with them.

### Vehbi Deger Turan:
You have speakers as well.

### Yen-Lin Huang:
I would have more momentum to discuss. In this UI.

### Audrey Tang:
That's the avatar work.

### Vehbi Deger Turan:
I'd love to talk to Shilin again. She was just starting when I met her in the UK a while ago. But yes. What I would like is a really good case on why this is necessary.

### Yen-Lin Huang:
Because people want to chat online with real people. And they are familiar with real people. Not real people, but face.

### Audrey Tang:
I think it's more about reducing the cost of this psychological barrier overcoming. To open up essentially. OpenAI now has this psychoanalysis mode. Where you just switch to voice. You lie on the couch and start speaking. With a good custom prompt, it does some pretty good therapeutic stuff. If we are talking about voice mode, we are talking about two different things. One is in a group conversation mode. Where the machine is a co-facilitator. One is a one-on-one mode. I think Kutum is more like Eliza than Mr. Rogers. Tell me more about your family.

### Vehbi Deger Turan:
I'm more interested in Mr. Rogers. I was building on that. We would have a separate repo. This report with one click can turn into like, talk to this crush stick. I would be much more interested in lying on your couch and actually chat. I actually think this interface almost does a disservice to it. It feels like I am using something. I need to think about it.

### Audrey Tang:
It's related.

### Vehbi Deger Turan:
I would love to think about prototyping. How can we make it not as high. These are hard sentences to read. I think conversation would make this easy. It would be cool to see what it would take for me to talk. I have many things I would want to talk about. I think I will start there for that discussion. We can definitely dive in much more. Does she hang around?

### Audrey Tang:
She is in the UK.

### Vehbi Deger Turan:
Are you going to the UK for the lecture?

### Audrey Tang:
That's a great question. I am at a budget defense session. I cannot travel. We have friends at the summit that will represent us.

### Vehbi Deger Turan:
If they are around in the UK, I would love to meet them. I would love to meet them.

### Audrey Tang:
Definitely. They are both based in London. They are all very up to date. I would suggest talking to Shuyang.

### Vehbi Deger Turan:
I am pretty excited. What do I need to do for the gold card?

### Yen-Lin Huang:
I will tell you how to do it.

### Vehbi Deger Turan:
I am genuinely curious. I was thinking about it. I am not sure if I can do it. I was thinking maybe I should get a green card while I am in the US. I am eligible for it. If I don't see myself in the US in the long run, is this the country I want to find myself in? I don't have good projections on how Turkey will evolve in the next decade. Maybe not.

### Audrey Tang:
It is very useful. Visa-free in many countries. You can just Google Taiwan gold card and click step-by-step navigation. It is very easy. Gold card in Taiwan. Gold card. G-O-L-D. It should be the best. And then step-by-step navigation.

### Vehbi Deger Turan:
I will take this out. I will have more reasons to practice. I thought I was budgeting travel by not coming to Taiwan. I will go there maybe. I will be around for two weeks. I will be in Taiwan. Thank you so much.

### Audrey Tang:
Thank you.
