# 2023-12-12 Conversation with Bloomberg

### Samson Ellis：
Thank you. It was great to meet you last time, really appreciative.

### Audrey Tang:
I don't have anything afterwards, so we can talk for an hour.

### Samson Ellis：
Happy to hear that.

### Stephanie Flanders:
Hello, minister, I mean, you have an interesting job at an interesting time. So, maybe I should just ask you, what is your biggest focus now? Are you thinking about Taiwan's digital security and resilience?

It would be good for me as an outsider to understand what you think of as the biggest challenges. And there's lots of things, stories and things that people are interested in following up.

### Audrey Tang:
Yeah. So, to continue on the portfolio. Thread, my portfolio is really quite unique. The ministry proper is for universal access, democratic participation, open source, open innovation, all that, right? So, participation. But underneath the ministry, there are two administrations. The Administration for Digital Industries, which is all about progress, platform economy, AI, you name it.

But the other administration, the Administration for Cyber Security is all about safety. And safety is not just protecting cyber systems, but also protecting our minds against polarization, against the force of authoritarians using AI to attack on cyber trust and so on. Information integrity - now people are calling it that.

So, participation, progress, and safety in other countries are usually through ministries. Or in the more recent ministries, like two ministers. In some frontline states, you would have security and participation in what's called societal resilience. But the ministry of economy would be another minister. Or in some, like a ministry of the future, you have progress and participation being in a ministry. But then the cyber defense would be another minister.

But I'm all three, and I'm also chair of the National Institute of Cyber Security. So, for us, there is no luxury of assuming tradeoffs is our mandate.

### Stephanie Flanders:
But you do still have a tradeoff that’s inside your head.

### Audrey Tang:
Inside my head, I need to turn conflicts into creation. I need to overcome the threat against information integrity including deepfakes and so on, without decimating freedom of speech and freedom of journalism and so on. And so, there is no easy solutions for all of those issues that are facing us.

But I think one of my priorities throughout is to co-create, to work with, not for, the people, so that the people who have actually delivered on a smaller scale, solutions that overcome those trade-offs can be scaled to national scale.

For example, during the pandemic, we settled on a way to do contact tracing without sacrificing privacy. That was a trade-off, privacy and public health. And then, once this overcame, well, we went on many long months without a single infection, and in fact, kept the freedom movement throughout the few years.

### Stephanie Flanders:
Yeah, I know. So, when you look, you know… For the outsiders, as you would think, Taiwan has an incredibly sophisticated community in terms of technique. And in that sense, you might be a society that's better able to address, to think about, some of these challenges that we're all struggling with.

So, what advantages do you think you have? And that's an example where you've been able to use your unique skills. But what else can we learn from you?

### Audrey Tang:
There are many. 

> (laughter)

There are many. One example that I often share is how quickly we have reconfigured our cyber defense following last August Pelosi visit. That was a couple of weeks before our ministry actually started and the hour that our website went online, missiles flew over our head. That was the same hour. And then, we faced the largest to date coordinated attack to not just deny our website of services, but also hate messages against Pelosi, outside of Taiwan’s high-speed rail stations, sign boards, and so on. So, the attack was unprecedentedly coordinated.

And so, our defense could not be playing attrition with such attacks. We need to switch to a different mindset. We call it, of course, zero-trust network configuration. That makes a different assumption. We would assume that the equipment, the systems, and so on, are probably already breached. And then, we need to live with that assumption and then just to contain its lateral movement. 

So, we switched very quickly, for example, to a publishing method that doesn't need a server to publish our websites. Rather, anyone around the world can donate their hard disks, their bandwidth, and so on, on the so-called InterPlanetary File System, the same system that hosts the BAYC NFT profile pictures. So, anyone in the web3 community can donate a little bit of their storage to help keep us afloat. And with like 200,000 nodes around the world, it's impossible for the attacker to go after all the NFT profile pictures. And if they succeed in taking data out, well, the collateral damage is very large, right?

So, by working with, not for, the people, we ensure that we build our resilient architecture in a way such everybody that can contribute.

### Stephanie Flanders:
It feels like… Sorry, I had so many questions coming up but… There was one that thing that you said that I made a bit… Oh, yeah. I was interested the other day; I was looking at an analysis of the attacks that Ukraine had on Russia way before the cyber-attacks. And the observation was made that the kind of coordinated massive attacks that they've faced over the years actually had less impact in Ukraine because it wasn't a very digitalized economy.

Whereas an equivalent, you know, when you have that kind of attack in somewhere like Taiwan or the U.S. or Europe, being a much more digital society, you don't have that luxury. So, I guess I'm just sort of asking… so do you feel with that experience that you have now got sort of state-of-the-art response?

### Audrey Tang:
Yes.

### Stephanie Flanders:
What about for the next… for China’s next challenge?

### Audrey Tang:
So, I think one of the newer attack vectors that we see now is… of course, generative AI is on everyone's mind. But even leaving aside the societal scale, extinction risk, whatever -- let's just focus on the short term for now.

Prior to generative AI, it was costly to spearfish, to scam someone in an individual-to-individual fashion. You have to note that target person's culture, language, habits, and so on, in order to mount social engineering attacks. But now, even if you don't speak Mandarin at all, you can mount very convincing spearfishing attacks thanks to language models, right?

So, one thing they do very well is they model persuasive language. And the drawbacks that prevents its industrial deployment, namely hallucinations, is a feature when you're spearfishing someone, right? So, it is asymmetric in the attacker's favor when it's used for fraud and spearfishing and so on. And once the spearfishing is succeeded, they can synthesize a malware that lives off the land, meaning that it doesn't carry any malicious payload; It just carries an AI that can write malicious attacks on the fly in the target computer, which is almost impossible to detect because previously, it had to be remote controlled. 

But now it's an automated attacker living off the land in the defender's network. And again, that was a new capability. Nothing like that existed a couple of years before, right? So, the combined two malicious uses of generated AI is the new kind of path that we're facing now, in addition to deepfakes and things like that.

### Stephanie Flanders:
So, what are we going to do?

> (laughter)

### Audrey Tang:
So, for example, starting in a few weeks from now, all the SMS and increasingly also interactive SMS services from the Taiwanese government will switch to a shared number, 111. So, if you receive something that appears to be from a ministry or a municipality and so on, it will all come from a short number. So, 111 or 165 is anti-fraud or whatever, where it always begins with 1 and it's always a short number.

And then, we flip the default. Previously, we would say if it looks like a human, assume it's a human until it exhibits botlike behavior. But now, bots are more human-like than humans. So, we need to flip the default and say, unless the actor, the sender, is one of the previously already recognized members or sender, unlike the blue tick, then it's assumed to be a bot unless it can prove otherwise using digital signatures and so on.

So, that's the main flipping of the people that we have to inoculate with the society early on. Because very soon, there will be no CAPTCHAs that AI cannot solve better than humans.

### Stephanie Flanders:
And I want to get on to some of the security aspects that you were talking about, but just quickly on AI. So, you mentioned on AI. What do you think is the best approach for education and for the broader society for using AI and understanding of this?

### Audrey Tang:
I use AI to draft all my email requests. So, just put it in the flow of work.

### Stephanie Flanders:
But schools? What do you think they should be doing?

### Audrey Tang:
They can do the same thing. So, I think most of the myths evaporates if the makers share their how-to with people as young as six or seven, right? So, we've long had a tradition in open source like Arduino and Android and so on, Raspberry Pi in our education system. And once people start measuring air quality, reporting it to a district ledger and so on, buzzwords disappear, right? There is no blockchain, AIoT, whatever. It’s just something that they use in school.

So, I don't think data competence can be taught. It can only be learned. And the learning begins as early as possible. So, we're very big on so-called edge AI or open-source AI. In fact, for public sector use, we advised against the processing of personal data with cloud-hosted AI services. If you want to process personal data like in an email, I fine-tune the model on my own laptop. And the inference, everything is done in airplane mode. And so that security-wise, it doesn't go anywhere, of course. But also, competence-wise, it means that people don't see fine-tuning and alignment as random jargons. That's something that they just do every day. And I think this is important. People are going to have AI competence in next-generation workplace.

### Stephanie Flanders:
Do you think when you look at how… I mean, are you able to see how those policies are progressing in Europe, like how the EU has thought about digital safety? 

The perception is although there was a feeling that it was too heavy-handed, there's now a sort of respect for where the EU ended up on some of the sort of data privacy and other issues. Do you think that the… What if they got wrong?

### Audrey Tang:
Yeah, the Brussels Effect. So, I think take the recent AI Act as an example. I think the carve-out they made for open-source foundation models are exactly the sort of signals we want to see through the industry. Basically, if it's closed, if it's proprietary, if you're profiting from it, then, well, you have to assume the negative externalities. It's a liability/risk strategy.

On the other hand, if you're very transparent, if you allow downstream makers to inspect and to align and to fine-tune it to such a way that you don't actually have control, then you're exempt from those liabilities. 

So basically, the signal to the market is that alignment is collective. It is an entire society. And if you don't involve the society in aligning your technology, then you should be liable to all the downstream effects. I think it's a really good blockchain.

And I think whatever the banner, right, privacy, resilience, whatever, that is used in particular laws, I think it is this underlying idea of re-internalizing externalities into liabilities and a carve-out to open innovation that I think is so powerful in the environment.

### Stephanie Flanders:
Mm-hmm. Interesting. What do you make of… I'm going to do this specifically because you're such a good observer - What do you make of the OpenAI? My old boss is now on the board, Larry Summers. But do you think that it was sort of negligible given the funny structure of that model? Do you think that was always going to be an unstable model for OpenAI?

### Audrey Tang:
Well, cap profit is, you know, that uncommon even in Taiwan. I used to be a Minister without Portfolio in charge of social innovation, and we coached many social enterprises to be owned by a nonprofit. Oh, it's a cap profit, exactly like OpenAI. And it is useful to basically do a mission log to what the public benefits they're set up to do.

I think the challenge, though, is that generated AI is unlike other technologies. It is unique in that people discover that it's easy to change how it works simply by talking to it. It is unlike other technologies that we're used to, right? And because of that, everybody has an opinion on how it should be made safer or things like that.

And so, I would say the pressure for leading labs to deliver on democratic governance is very large. It is much higher than compared to, for example, biological virus and its defense to nuclear proliferation and so on. Because not everyone has an opinion on how those things should work, except, of course, they should not impact people or explode. But for language models, literally everyone has a different idea. And after some interactions, their ideas change, right? So, unless the alignment, the democratic governance can keep up the speed with the expectation change, no board is fit to respond to it in a here and now manner. So, yeah…

### Stephanie Flanders:
Even if you've got an enormous brain like Larry Summers.

### Audrey Tang:
Exactly. So, I think augmenting your boss with some… on OpenAI, they're calling it collective alignment. So basically, ways to facilitate conversations in the population. We work with OpenAI on that - sending surveys to 1,000 statistically representative Americans and asking them not to answer predefined questions, but type your own statements on how AI should behave, and then rank those preferences from each participant to each statement. So, you have this giant matrix of social preferences.

We also run a very similar one with Anthropic. And Anthropic actually used that consensus to write a constitutional document and use it to train another version of their Claude AI. And they found out that people's AI, let's call it that, is equally capable, but far less biased than their default version of Claude.

### Stephanie Flanders:
I mean what context were you working with AI and working with Anthropic?

### Audrey Tang:
I visited OpenAI when I was a Minister without portfolio and had very good conversations with the team that ended up becoming Anthropic. So, I think they're all very keen on the democratic innovations that we've been doing in Taiwan and applying it. So, for example, Polis, which we worked with since 2015, an open-source computational democracy project, now works very closely with both OpenAI and Anthropic. So, I would say it's in the context of just an open-source community leader.

### Stephanie Flanders:
And so, what's it called when you said the exercise you did with OpenAI?

### Audrey Tang:
It's called an alignment assembly. Yeah, you can find it on cip.org, Collective Intelligence Project. It's called Alignment Assemblies. We also run our own alignment assemblies in Tainan and Taipei. And the consensus is very different from the US population, actually.

### Stephanie Flanders:
You can tell. I've been most of my time as an economist, so I find this fascinating. And all of these things are now interacting with the, obviously, the world of economic support. So, I need to learn from you. I'm just trying to get…

But what is the plan for thinking more about the resilient communications resilience for Taiwan, given its position of vulnerabilities? Elon Musk’s going to stand behind you?

### Audrey Tang:
You mean with the X platform?

### Stephanie Flanders:
Yeah.

### Audrey Tang:
We're happy that the community notes feature has been translated in Taiwan.

### Stephanie Flanders:
No, no, no. Starlink.

### Audrey Tang:
Oh, with Starlink. He has so many companies.

> (laughter)

### Stephanie Flanders:
I wouldn't trust X. I'm not sure X is even going to be here.

> (laughter)

### Audrey Tang:
So, we already signed a deal with OneWeb. That's the UK company. And actually, in a few days, we're going to start the first public demo of the SES - that's another European satellite company from mid-Earth orbit communication, which we deployed when our subsea cables were cut.

And I think Starlink is nice to have, an addendum to this plurality of configurations we already have. It is not a must-have. And we want to work with as many vendors as possible because it increases the difficulty for the adversary to take them all down. But we're not relying on any single one of them.
 
### Samson Ellis:
And how are Taiwan's efforts… I don’t know… at a domestic solution?

### Audrey Tang:
That's a TASA question. From the moda perspective, TASA is another vendor. So, once it's available, we're happy to add it to the mix.

And I think really the message we're sending is really the more the better. We already have the Google Cloud, the Microsoft Cloud Azure, and hopefully by next year the full suite of Amazon Cloud here in Taiwan. And that's another part of the puzzle, because when the subsea cables are cut, but the public cloud all have centers in Taiwan, I can video conference you if we're both in Taiwan without using any of the outgoing bandwidth. It's going to keep working.

And so, we can then reserve the satellite backhaul bandwidth, which is frankly speaking, even with Starlink, quite limited to international journalists and correspondents.

### Samson Ellis:
Well, maybe the US government as well.

> (laughter)

### Audrey Tang:
We think the journalists and correspondents, are very high on the priority.

### Samson Ellis:
Okay, good to know.

### Audrey Tang:
My parents are both journalists. Video pilots from there.

> (laughter)

### Cindy Wang:
Are we talking to other companies other than OneWeb and SES?

### Audrey Tang:
Yeah, we’re talking to all of them.

### Cindy Wang:
Yeah, I get it. Any coming deals after OneWeb?

### Audrey Tang:
So, SES and OneWeb are already signed to participate in our approval concept. I believe OneWeb also agreed to operate commercially in conjunction with the CHT. And I understand that now that we're down to three mobile operators, CHT and the other two are all quite happy to work with foreign satellite companies in the same way that CHT has worked with OneWeb. There's a template now to use.

But I will not make decisions for those commercial operations because my duty is on the POC disaster roaming communication resilience design.

### Cindy Wang:
How was OneWeb compare with Starlink?

### Audrey Tang:
So, the three telecoms can start their own conversations now that there's a template of the CHT-OneWeb collaboration. But that is no longer our purview. It is up to the telecoms.

### Jasmine Ng:
My next question is related to the Taiwan elections. In what ways are you seeing… what kind of signs are you seeing in terms of Chinese interference in Taiwan elections in a digital space?

### Audrey Tang:
So, I think the cyber-attacks, they're very spiked. So, I mentioned the last August spike. And this March when Dr. Tsai Ing-wen, our president, visited the U.S., it was a very similar spike, also very coordinated. You don't see it on the news because we defended it quite successfully now that moda is here. But there are bits and pieces that are still reported about that attack.

The March attack is quite interesting in that it targeted specifically journalist communication. The idea is just to deny people access to what's going on. And then, to create an informational void on top of which disinformation, information manipulation can spread.

Because now that the Taiwanese people are quite inoculated, really, against information manipulation. People don't just — out of outrage or polarization — retweet everything now. So, in normal times, it's almost impossible now to simply press a button and rely on unsuspecting people to retweet into a viral phenomenon. That attack no longer works.

Whereas, spear phishing and so on, point-to-point persuasion generative AI and so on, remains in research. So, there's no very successful campaigns at this scale that would cause a difference in the societal scale risk at the moment. So, whether they want to deploy, the attackers want to deploy this kind of attack, it's not certain.

So, in the middle, what can work in March, what we have seen they wanted to, in fact, is to first deny us the antibody, the immune system, namely the journalists. And if the journalist outlets, especially the ones that other... I can’t name names, right? Take the Central News Agency – the previous head of CNA went on the record on TW Reporter to talk about the attacks they have suffered. So, just read the [TWreporter.org report](https://www.twreporter.org/a/chinese-hackers-breached-taiwanese-media-organizations) and you have an idea of what kind of attacks — basically, denying journalism through DDoS. And then, take advantage of the information void.

And that, we defended quite quickly back in March, but we're very careful to observe what other ways they may compromise or deny service of journalists and analysts. Because now that I think we all see in Taiwan, credible journalism is really the antidote to information manipulation and foreign interference. So, with a strong journalistic sector, it's impossible for them to mount this kind of asymmetrical things.

So, I think they will go after this kind of journalistic candidates. If they're going to deny the access to such vaccines or whatever you call them.

### Stephanie Flanders:
You don't think that… I mean clearly the very obvious misinformation and the sort of efforts to polarize potentially don't work anymore, so it wouldn't work with the Taiwanese. But there's lots of more subtle things… I mean you can be involved… involve yourself… I mean I thought that was what a lot of the attacks were was sort of second-level, third-level, just reducing the credibility of other sources and nudging people towards more polarized views, rather than the very obvious misinformation. Do you think that even that is not possible now?

### Audrey Tang:
We were at peak polarization back in 2018 and it just went all the way down, which is a very…

### Stephanie Flanders:
When you say we, you mean we globally or we here?

### Audrey Tang:
No, no. Taiwan. When the referendum/mayoral election took place, that was peak polarization. And ever after that, we've been very conscious to work on really collaborative diversity. Instead of the administrative forcing journalists to change titles or reports or whatever other countries are doing, we decisively actually left more room for incredibly neutral social sector academic and journalistic outlets to cross-check, for example, on fact-checking and so on, and develop advanced algorithms for collective input into fact-checking and making it a digital competence, media competence class in basic education and lifelong education. 

And all this is about increasing the inoculation level in the population instead of taking down anything. So, one can actually compare it to like countering an epidemic. Some jurisdictions in 2020 said that really only a lockdown works, right? And you have to shut down, lockdown, lockdown, an infodemic and the pandemic in order to do anything.

And I think the real misinformation back then was that, democracy only leads to chaos and never deliver in terms of public health. And of course, Taiwan and New Zealand and so on, proved that is not the case. Actually, we can do better.

But I think that conversation continues to this day. We need for each and every threat of information integrity to find a way to counter it with more democracy, not less. With more participation, not less. With more prominence on journalism, not less, in order to be sustainable on that.

### Stephanie Flanders:
And where do you think the rest of… Where do you think the US is on that path to full inoculation? If you've inoculated the Taiwanese, how far along, how far behind the US or Europe?

### Audrey Tang:
That’s an interesting question. Well, I think really it's just switching away from where it's like fake news or even disinformation hat talks about the content layer things would be good. That's one lesson we learned. So, we don't have a single disinformation oversight board. And that was because to use these words overly focused on the individual pieces of content. Whereas in the actor/behavior/content layers, nowadays, we're all shifting toward the actor layer.

So, when we say foreign manipulation, foreign is the actor and manipulation is the behavior, and it does't even talk about the content anymore. So, I think the focus should be just consistent use of provenance, attribution, source tracking, really just journalism. And when people have the basic competence of a journalist, that's where the antibody level is highest.

So, I think X.com, for all its drama, I think community notes really shines as an open-source solution. Because I sign up on community notes jury duty for Mandarin, Traditional Mandarin X.com. And already I have seen that this fosters a pro-social, a more collaborative communication because lopsided or polarized messages simply don't go on community notes. That algorithm selects the ones that are written, that are bipartisan, that speaks to across diversity. And so, I think more, we call it plural, more plural algorithm and design like that can fundamentally change the nature of online discourse. 

The other way to inoculate is simply not to touch your touchscreens. And therefore, no addiction, and therefore, no repercussions of addiction. But I think that that ship has sailed. So, I am for this kind of open innovation on pluralistic mechanisms to promote bridge making narratives other than those polarizing ones. I think community notes should be on every platform basically.

### Cindy Wang:
Excuse me, one lesson that Taiwan can offer to the world in terms of China's interference in elections given that US will have elections next year.

### Audrey Tang:
Yeah, I think… So, any democratic process need to confront the narrative that I just talked about, which is "Democracy only leads to chaos; Democracy never delivers." That's the premise. So, whatever information manipulation package it chose, it's fundamentally the same mRNA. It is the same message throughout.

So, one way to counter them is multiply by more or anything. But simply show how democracy can deliver, how more democracy can deliver. When people participated over Taiwan, the juror system is very new. So, we just had… started having a juror system. But already we're seeing that people who have participated in the juror system are far less likely to be polarized when it comes to major crimes and sentences and things like that.

And so, similarly, I believe that when people have ways to participate in, for example, alignment assemblies for AI, or other ways for collective intelligence to have a measurable outcome on their lives, even just on a community scale, it makes them consider other people's ideas, taking all the sides and so on. Because if there's only one bit of information that you can input every four years, which is voting for a president out of two candidates, right? So, such as 1 bit. If the bit rate is so low, it reduces everyone's evaluation of each other into literally just 1 bit. And even if you add to a referenda and so on, that's what, like four bits, five bits and so on.

But if the bit rate can be increased instead of just a ballot, you can have whole sentences, you can… I actually have a really cool demo, from a civic tech initiative we are working with. Here is their project, called Heal Michigan. They asked people who are returning citizens, people who have been to prison, to just talk about their experience and so on, without facilitating it toward a policy recommendation. So, it's just people sharing their lives and so on. And it's all videotaped and so on, and put on Vimeo, or YouTube, whatever.

And then, they use a multi-modal AI to turn that into a kind of synthetic mind. Many clusters that talk about actual policy suggestions and so on. And for each of its suggestions, you can trace back to specific time code in the video, where this person said that and so on. And these people can then watch the synthesis and also calibrate, like “I said that, but I didn't mean like this” and so on.

And after a while, this is an executive summary that can talk back to you, that you can invite to be a member of the board, to participate in real conversations. So, instead of doing a survey or Delphi method or whatever for this group, it is those 1,000 people continuously shaping a virtual editor that can participate in board meetings. 

And so, this is higher than this. So, when people have such experiences, interacting with AI as a solo conversation, but as part of the democratic process, we have found that they become much more empowered and believe in the democratic process as well. And therefore, less likely to be captured by the polarizing democracy.

### Stephanie Flanders:
There's a lot of um… There had been a sort of great panic probably about six months ago, which has not gone away but around deepfakes and elections. I mean the US election, but of course we have many other elections that have happened. And I sense a little bit of a kind of easing of that recently, in part, maybe wrongly on the basis of the fact that there has not been, you know, I think people were sort of waiting for terrible examples of deepfakes and it's been less evident, maybe supports your idea that these things are much harder than you think.

Should we be as worried about deepfake? Or should we actually have some trust in some of the learning that you talked about, people actually understanding?

### Audrey Tang:
The panic really helped because it let everybody understand that there are deepfakes. So, once you are aware, it's less likely for you to be scammed into believing them. So, we need that panic. Without that panic, we will be in a much worse place.

And, I mean, voice cloning, scam calls, robocalls is a thing, right? And so, basically, it's a kind of self-fueling machine. I'm not sure even if there's any human behind it anymore. Maybe it just keeps feeding itself with cryptocurrency and buying more GPU. It could be, right? So, this kind of not elections-threatening but financially motivated robocall scams are a kind of deepfakes, actually. They would call a random person and record for a few seconds and get an acoustic model and use that acoustic model to call friends and families, all entirely automated.

And so, this kind of things, I think, while, of course, a great threat to all the liberal democracies that are international phone calls, and is now actually, interestingly, playing an inoculating role in this society. Because now, people know that there are deepfakes that can, you know, are shape-shifter that can take your friends' and family's voices.

People who know that — or know people who have been subjected to that — are far less likely to be captured by deepfakes leading up to an election.

### Stephanie Flanders:
So, do you think that probably you shouldn't… around the US election, for example, think that, there's lots of things that one might think that are not important. There's lots of things that one might be worried about in the US election, maybe even the result we might worry about, but that deepfakes are not necessarily going to determine the result in the way that we might have thought?

### Audrey Tang:
Well, it's a bit early to say, but I would rate over-reliance and addiction to persuasive AI higher than deepfakes. Deepfakes are easy to defend against in your mind if you know that there's deepfakes going on. But if there is just a very charming virtual personality of a candidate that can, you know, talk to you all day long, and so on, that is actually hard to distinguish from normal campaign. So, I would say that over-reliance and addiction and super-preservation, super-stimulant, are slightly higher in priority in my mind compared to deepfakes. That's not to say deepfakes are going away. They are going to be there.

### Stephanie Flanders:
What are the examples of the change of AI? What you were just talking about? Where have you seen it?

### Audrey Tang:
Well, in a sense, we’ve already seen it on Facebook in the series. And on, you know, those short videos. And especially around short videos.

I think that the point I'm making is that, so I consciously don't touch the touchscreen for more than a second, like just a few seconds. I always use a stylus. And that is because once I touch the touchscreen for, say, an hour or so, my brain changes, right? It thinks that the screen is part of my body. and it's become difficult to put it down. And it's almost like a screen scrolling making my brain scrolling the screen at that point. And we discovered that quite long ago, so I've always used Palm Pilot, Sharp Zaurus, Galaxy Note, now Galaxy Fold, not as product endorsement, just a matter of fact, because they were the stylus-attaching devices of each generation.

But I think once people become addicted to a precision surveillance/profiling AI that can now synthesize content, not just push content to you, it is a real vehicle. If I am someone who wants to push a certain political agenda and things like that, you also alluded to it when you say that it's about nudging. It's no longer about a viral disinformation. It's about nudging people to think slightly a certain way in an individualized, persuasive manner.

So, in a sense, a prototype of that is already present in the nowadays short video social media. And I think with generative AI, this kind of slightly nudged super stimuli are going to be even less likely to be detected if it's a black box.

Of course, we've seen the EU, the Digital Service Act and so on, trying to open up the black box, which is quite commendable. But I think this is the risk factor that are less prominent in journalistic coverages.

### Jasmine Ng:
Can I get your assessment of the cyber tactics employed by China? I mean, the level of sophistication versus other countries. Where is China at?

### Audrey Tang:
Yeah, so what we've seen is that the foreign manipulation and interference, they're, as I mentioned, becoming more coordinated. I usually only attribute to foreign versus domestic because our subsea cables are the main conduit and it's very easy for us to tell an attack whether it's domestic or whether it's foreign. But beyond the foreign, it's difficult to attribute it to any particular jurisdiction. It may actually be mounted from anywhere in the pay of another jurisdiction, relative through botnets of another jurisdiction, right? So, I think it's easier if we just say foreign.

So, as I mentioned before last August, the foreign propaganda, foreign information manipulation, foreign interference in terms of cyber-attacks and cyberattacks in terms of denying availability versus denying confidentiality, they were all different arms and they have different patterns, different signatures, different ambitions, different goals, right? But last August was the first time that we saw all those different arms just coordinated together into something that's a very clear goal, which is to make the stock market of Taiwan crash that day when Pelosi visits, which didn't succeed, I don't think, to prove.

Anyway, so, I think now with that as a template and with this March as another failed attempt, on the foreign part, now I think we know much more about how they think now in a coordinated fashion. Again, the main idea is for them to decimate trust in democratic institutions, but it is no longer about a very quick win, so to speak, but rather something more like nudging, more like a long-term atrophy of democratic agency.

And in a sense, I think, in Taiwan, we face the most advanced form of those manipulation attempts because any less advanced forms simply wouldn't have any effect on these people now. We're all very inoculated against the more crude forms, which may still work in other jurisdictions. So, in a sense, we're part of this generative adversarial network that produces even more advanced attacks and defenses on the opposition.

### Cindy Wang:
Do you have a potential scenario of what may happen next year after the election? Like if the vice president wins the election, what kind of attack that we expect to see?

### Audrey Tang:
I thought you were about to say, if we have produced artificial superintelligence, they would want to run, right?

> (laughter)

Yeah, wants to run for president. So, I think one of the key metrics that we're measuring is whether the society feel that the democratic institutions is strengthened after each election. Because as you know, Taiwan didn't have a sudden transition of the state's composition, let's call it that, but rather it's reinforced in each and every presidential election ever since 96, right? 

So, there were some presidential elections that just tear apart the society, that people just deny the results flatly and many of the wounds are not even scarred, even it's many, many years after those elections. But there were also elections that I would say that made the society more trusting of each other across party divisions and so on. The previous presidential election is a good example.

And so, my main concern is now that there's three viable presidential candidates, whether it results in a more pluralistic composition after the election, so that each side feels that they have not lost all, but have win some, versus a zero-sum result, where it, again, could tear apart the society, if those almost two-thirds, would have felt that they have lost.

And so, this is the main thing that I'm focused about. And so, which is why, of course, the work on information integrity and so on are so important. Because when people agree that there was a fair election down to their MPs, whether at large or from local constituencies, they can still say that there's some voice for their ideas in the new parliament — then we get a better shape of democracy going forward.

### Jasmine Ng:
Is your agency involved in collecting any kind of intelligence on China?

### Audrey Tang:
So, mostly that belongs to the national security apparatus, the intelligence community. Our Administration for Cyber Security is part of the conversation, but we focus, as I mentioned, on defending information systems and information against attacks on integrity, confidentiality, and availability. Anything beyond that, we are, I think, the cyber security administration understands what's going on, but we're not the competent authorities by law to make decisions.

### Samson Ellis:
So, how are you measuring, you say, you know, increased trust in elections, and also you mentioned polarization. So, how are you measuring those two?

### Audrey Tang:
Yeah, there are many ongoing investigations, like ongoing surveys. There's one from our national academy, there's one from NCCU, so on and so forth. I think the Taiwan Foundation for Democracy maintains a tally of those measurements.

And you can also see partial reflection on this, on how much our students, which belongs to families of different political parties and affiliations, participate in civic matters. And so, recently, I think the OECD just published the competence of not just mathematics or reading or whatever, which I think Taiwanese students are in the top three or top five, but also on civics, on how much they participate in their local level politics, in community, in even doing e-petitions and so on. 

And on that, our students rank the top of the world. Like they want to actively participate in politics. And this is, I think, to me, a direct measurement, because if they or their family feel a certain apathy against the democratic institution, we would not be top of the world in terms of this.

Now, with that said, there are parts reviewed by the survey that we still need to improve on. For example, the students and so on trusted the democratic process and all this, but not mainstream media. So, the mainstream media trust level from our students is lower than the OECD average. I like that part. So, there's something to be said about journalism as a credibly neutral sector.

### Samson Ellis:
This is the OECD PISA?

### Audrey Tang:
It was ICCS (International Civic and Citizenship Education Study), published along with PISA. PISA is education. This is the civic measurement or something, but it's published on the same day as PISA. It was announced in the cabinet meeting a week or two ago. Last week, exactly. So, we have beautiful PowerPoints and so on.

And really, we're quite proud of the work of the teachers because this is really, to me, it feels very assuring because before entering the cabinet, I worked on the basic education curriculum, the so-called 2019 basic education curriculum. And that reform is a comprehensive switch from rote memorization, so-called literacy curriculum, to a maker-doer competence - no standardized answers. You work with your fellow students and help them compete against them. So, almost Nordic way of reimagining education.

And there were a lot of fear I certainly had. And after, what, four years now of rolling out the new curriculum, not only, of course, it increased civic participation to the degree we anticipated, but it actually also resulted in better PISA scores. So, again, no trade-offs needed. 

### Cindy Wang:
I understand that we hold this biannual code simulation to see the resilience of Taiwan's key infrastructure against cyber-attack. And this year, the target is the Taiwan Water Company. So, after the simulation for the past few years, how is Taiwan's key infrastructure resilient? Are we able to defend ourselves?

### Audrey Tang:
Yes. And even more importantly, we're in a situation where we are now sharing much more threat indicators with our allies. And so, the allies that participate in the code exercise is not just about sharpen your skills and so on, but rather about settling on common principles, common ways to notify each other.

Because unlike in the kinetic world, where something impacts Taiwan and earthquakes, it takes quite a while to propagate to the US or to Europe. On the internet, everything travels on the speed of light. So, something that impacts Taiwan next minute will impact the US and Europe, be it ransomware or other state-sponsored attacks and so on.

So, to set up ultimate threat indicator sharing such that within a minute or so that once we figure out what's going on and we have set along an emergency way to resolve this or to mitigate a threat, how quickly can all the allies deploy it? And at the same time? That is the main metric we're measuring. And I think having the code exercise taking place physically where people can meet face-to-face, that is very important to increase the trust.

### Jasmine Ng:
When you talk about allies, I assume like US has a commitment. So, what kind of mechanism did Taiwan and US build up in terms of... 

### Audrey Tang:
As I mentioned, ultimate threat indicator sharing. There's now a common format, a common understanding, a common ontology, the sticks format and mutual attack respectively. And we're now also working to extend the mutual attack, like internationally agreed on metrics, to also include coordinated information manipulation attacks, which is also... I think it's integral, right? Because the attackers are now coordinated in terms of attacking on information integrity and information system integrity. So, our threat indicator sharing and so on need to be similar to coordinated.

### Jasmine Ng:
So, once we let them know that we're under attack, what...

### Audrey Tang:
And also, our mitigation measures. Yeah. And in forms of like code snippets or configuration measures or whatever. And so that's after quickly verifying it, then it's just like how immune system works, right? So, like white blood cells and so on, in other allies’ computer networks can harden itself against the intrusion of the same kind.

### Jasmine Ng:
What kind of help they can offer to Taiwan?

### Audrey Tang:
So, if they suffer the same kind of... Some kind of mobile forms of attack. As I mentioned, the generative AI-based living of the land attacks are almost impossible to detect, because it uses existing tools in your own network. So, when they start to mount an attack, all we can do really is mitigation, so that we assume it's already breached but we make sure that it cannot spread to other places, either because it's air gapped or it requires that biometric verification, which fortunately generative AI doesn't yet have. We can talk about embodiment later.

So, now, when we stop those in their tracks, similarly configuring allies on your networks, they can get an algorithmic warning and reconfigure their network in such a way that would make it impossible for them to be contaminated by lateral movement.

### Jasmine Ng:
Question. How has Taiwan's level of engagement and cooperation with the US changed within the Trump administration and the Biden administration? Do you have an example of how those things have changed?

### Audrey Tang:
How things changed? During the pandemic, it's mostly online. And after the pandemic... So, I was able, as a minister, to participate in many ministry-level conversations during the pandemic, which is a new thing at the time.

Because previously, to meet fellow ministry-level, cabinet-level people, they preferred face-to-face. But during the pandemic, there was really no choice, so everybody learned through media conference. Previously, if I can only video conference, I meet more junior-ranked people. So, I don't think this is an executive order or anything like that. This is just the culture, right? And so, the culture changed during the pandemic.

But now, I can then visit the US on the, for example, around the UNGA time, we're an observer in the freedom online pollution. So, I met fellow foreign and cyber ministers by ball on the big table. And we recognize each other because we've been meeting each other as 16 by 9 boxes for many years now.

> (laughter)

But I think it feels much better to meet in high definition. Because I think it was a paper in Nature that says when you're a 16 by 9, you can only converge, that is to say, to do something that both sides understand is to be done. But it's hard to diverge, meaning that it's hard to brainstorm, to engage in creative processes, to come up with new ideas. And that requires the full, nonverbal repertoire of human communication. We can talk about networks later. So, I think this is important now that after the pandemic. The rapport that we built over the video conference during the pandemic era are now progressing to a place where we can participate face to face in many communities.

### Stephanie Flanders:
Sorry, so the point about 16 by 9 is you can diverge or converge, but you don't create something…

### Audrey Tang:
You can. You can converge easily. That is to say, we set up a video conference, we have an agenda, we have things done and so on. But it's difficult to brainstorm. Because to brainstorm means to express something creative and novel that requires a mental model of the other side. It requires a theory of mind. But if we've not been face to face for a long time, I don't have a good mental model of you. And so, I can misread your nonverbal cues and so on, which makes brainstorming quite difficult, actually. There's simply no sufficient amount of bit rates.

Of course, all that may change is codec avatars. But this year, we're still working with the constraint of the physics.

### Samson Ellis:
That's why I insist on everybody attending the weekly meeting in person.

> (laughter)

### Audrey Tang:
Yes. Or you can buy everybody a Vision Pro and get codec avatars.

### Stephanie Flanders:
Just as someone who is so… understands the industry so well, this is more of a hardware question. I'm interested in what you think of the Biden administration's sort of approach to technological development. I guess in two ways. The less interesting is how they've approached developing their own semiconductor capacity in the US, which is in a way, it's not necessarily easy to solve, but it's kind of easily stated as a problem.

But I think more interesting is the way they think about slowing China's technological development and the kind of measures they've announced, you know, the export controls and advanced technologies, the growth of the semiconductor.

When you see, just knowing what you know, do you think that makes sense? That just way of thinking about China's development and how you would go about slowing it, independent of whether it's the right thing to try and do? 

### Audrey Tang:
Well in terms of AI, which is just data, and code, and compete, code is almost impossible to set up export control, right? I mean, there are jurisdictions that try to restrict export of cryptography and look at how well it went, right? So, it's when you restrict export of cryptography only the bad people have access to this cryptography. This really is true.

So nowadays, the national security concerns mostly focus on the hardware part because it's tangible and also the most advanced form of cryptography and AI and whatever code relies on specific hardware capabilities. And so, even if the code is all published on GitHub, it does someone no good if they have no access to the corresponding chips to run such code. It may still run, but it may take like 1,000 years, which doesn't matter at that point, right? So, of course, in terms of chips versus code, of course, restriction exists. Hardware is the only feasible option if you're going to restrict that. 

I am also quite optimistic about now the new executive order that says that the agency need to invest in privacy-enhancing technologies in a way to collect data, but use it in a way that doesn't compromise privacy or confidentiality because that really is the only way that we are going to contribute high quality data to train AI model together.

Like in Taiwan, we've been doing this for a year now. There was a pilot project called the Sports Data Altruism Project. You can see online. It's at data-sports.tw. The main idea is that you can go to the gym or local schools, sports center, or whatever, and do some exercises and voluntarily donate the non-personal data portion of that particular data. So, that's the main idea. And so, it is informed content. We run privacy enhancing technology. We ensure that downstream, there's no access to any raw data. It cannot re-identify you, but it is very high-quality data. It's important not just for people designing insurance or universal healthcare policies, but also for fellow citizens that want to know whether this kind of exercise is doing any good with my age and conditions and things like that. So, it's great for fostering a habit of participating in exercise in a way that feels empowering and empowers people.

And I think this kind of data altruism setups are only possible when the government clearly signals that the privacy violating surveillance capitalistic way of doing the same thing, so that people doesn't even know about their data being collected is to be sunset quickly. So, I think the new EO, AI, says both very clearly. And that's what I really like about it.

And so, that would create an advantage over authoritarian jurisdictions when it comes to data collection, because for authoritarian jurisdictions, they don't even know people's true preferences. People are not going to say their true preferences to authoritarian regime. And the people who really know about this, currently doesn't enjoy press freedom because they can't even publish, right?

So, in such arrangements, it's difficult to imagine how they could then get accurate preference data that respond to people's needs in the here and now. So, that's going to be another advantage in addition to the chip advantage.

I'm really pro-journalism.

### Stephanie Flanders:
Yeah, your parents have taught you well.

### Audrey Tang:
Very much so. Very much so, yeah. My dad raised me using the Socratic method. So, he never gave me any answer to my problems. But he kept asking.

### Stephanie Flanders:
That must have been so frustrating.

> (laughter)

### Audrey Tang:
Yeah, he keeps saying, you say it applies to all the cases. What about this? You just said that, but it's a correlation of the position. And so on and so forth. But he taught me to really not just think, but also communicate in such a way that makes thinking a kind of social process that I can think with people.

### Stephanie Flanders:
Well, Samson said that we were quite fascinating. But it's been a pleasure. And unfortunately, we have to go. You have a clear schedule. But unfortunately, we have other things to go. But no, it was fascinating.

And I hope, yeah, we were talking about whether we'd be able to get you involved in other things that Bloomberg does. 

### Samson Ellis:
I would be a big advocate.

### Stephanie Flanders:
And this is an area that I think, yeah, Bloomberg's very interested in.

### Audrey Tang:
Awesome.

### Samson Ellis:
Thank you so much for your time.

