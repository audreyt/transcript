# 2023-04-06 Conversation with Signal

### Audrey Tang:
So how should we proceed? Should we do a round of introduction?

### Meredith Whittaker:
That sounds good to me. We saw your questions in the email and we’re happy to discuss those and anything else that’s interesting about Signal or the broader concerns of privacy and security that we share.

### Audrey Tang:
Ok, great! Would you like to start?

### Meredith Whittaker:
I'll introduce myself. My name is Meredith Whittaker and I’m the President of Signal.

### Josh Lund:
My name is Josh Lund. I’m the Senior Director of Policy and Communications at Signal.

### Jun Harada:
Jun Harada. Chief of Staff at Signal.

### Howard Jyan:
Howard Jyan. From Taiwan. 

> (laughter)

### Chuan-Te Ho:
CT Ho. I’m the President of the new baby in Taiwan called NICS, a national cybersecurity institute. It’s a public non-departmental public body.

### Eric Juang:
I’m Eric Juang. I’m the Director General of the Democracy Network and our job is to create a collaborative relationship with other countries and nations.

### Wei-Jan Ko:
I’m Wei-Jan. I’m the moda architect of the digital service design.

### Yu-Hsun Lee:
I’m Yu-Hsun and I’m from NICS too. I’m a researcher of NICS.

### Audrey Tang:
Audrey Tang. [laughter] Chair of NICS, the National Institute of Cyber Security and also the Minister of moda, for democracy network and also in charge of transformative technologies like AI evaluation policy and so on. So, it’s safety, participation and progress. It’s a trilemma.

### Meredith Whittaker:
Wonderful.

Before I joined Signal, I spent a number of years at NYU as a professor researching artificial intelligence, so I see the issues of artificial intelligence and privacy as very closely connected.

### Audrey Tang:
Very much so.

### Meredith Whittaker:
Yeah.

### Audrey Tang:
And it’s now even more so, now that we’ve got billions of people using AI every day.

### Meredith Whittaker:
Right. And contributing data back to the training of AI that then further entrenches surveillance as a core engine of the tech industry.

### Audrey Tang:
There is zero democratic governance. 

### Meredith Whittaker:
Zero. Yes!

### Audrey Tang:
And I wonder why.

> (laughter)

### Meredith Whittaker:
Yeah. As a former Google employee, I have some guesses but…

### Audrey Tang:
I see. I see. Market forces.

### Meredith Whittaker:
Market forces are powerful and um… don’t always adhere to democratic principles.

### Audrey Tang:
Exactly.

### Meredith Whittaker:
Yeah, but we are very happy to know that your ministry is using Signal and a big reason for our trip is to understand better how we can support people who are using Signal on the ground.

What features are important, what concerns do you have, and are there ways we can be more responsive to requests, even if it’s technical support, so we can have a better understanding of how we’re supporting people beyond the U.S. and Europe which are currently the contexts we’re most familiar with.

### Audrey Tang:
Yeah. There is really only one core request, which is for Signal to keep working if our submarine cables are cut by earthquakes.

You know, we have a lot of natural and unnatural earthquakes.

> (laughter)

### Meredith Whittaker:
I can give a quick overview.

We use AWS because as you probably know more than most people, effectively no one is able to run their own servers anymore because of the way that the cloud ecosystem has metastasized. So, we use AWS for most of our hosting, although we also have Cloudflare and Google Cloud.

Josh worked with our server team to make sure we have the most recent information regarding Taiwan. AWS has introduced on-premise content delivery networks, and we use those globally for our calling infrastructure so you can make voice or video calls, and for media uploads and downloads, but not for our message queuing.

And the rationale for that is that calling, media uploads and downloads are very bandwidth-intensive, so if you have to route around the world for those then that takes… you know… that’s going to be broken.

And message queueing is, from a bandwidth perspective, negligible. Right now we use DynamoDB on AWS in North America and all message queuing happens there.

I think it’s good for us to understand that that is an urgent and pressing request. 

### Audrey Tang:
It really is.

### Meredith Whittaker:
So, that is something we’ve taken back to our server team and we’re going to be discussing with them.

### Audrey Tang:
Yeah. We have our own AWS outpost servers, so if needed, we can run DynamoDB or whatever on our outposts. So, before you arrived, we were just doing our own element matrix deployments based on such principles so that when our signal, you know, gets cut by earthquakes, we can at least fall back to a matrix element, so we’ve translated elements to traditional Mandarin for this very purpose. 

On the other hand, we do have Amazon outposts lying around, so if you’re willing to have a technical proof of concept in which that the queuing system is either as a fallback or as a after-effective federation on our outpost, then we do not have to wait for Amazon to have DynamoDB in Taiwan.

### Meredith Whittaker:
Understood. My understanding is that Amazon outposts in Taiwan are just the content delivery network?

### Audrey Tang:
No, it’s the full stack.

### Meredith Whittaker:
Okay, wonderful. Yeah, I think um…

### Josh Lund:
Is that provided by AWS?

### Audrey Tang:
Yes, so basically in Taiwan, the local zone includes compute, EC2 and so on already, right? 

### Josh Lund:
Oh, the local zone. Ok.

### Audrey Tang:
Right, so there is an existing local zone and for the servers that are not offered in a local zone but rather in a region in Japan, we can actually put those servers into an AWS outpost server. It’s only a little bit more expensive but we’ve already spent that money anyway so…

> (laughter)

### Meredith Whittaker:
That’s great to know and that updated our knowledge. What we understood was that it would not be possible, so we will take that back to our server team and we’ll be in communication with you.

### Audrey Tang:
Yeah. At the moment, Signal is used in moda and our administrations in a kind of volunteer basis, right? It’s not a part of the public procurement and partly it was because that we said publicly, that we will only make like the procurement video and instant messaging platform if they satisfy the requirement of keep functioning when earthquake happens.

And so, we officially have purchased the Google Meet platform because they do satisfy this requirement. Although Google Meet incorporate part of Google Duo and make it end up encrypted-ish, we would much like open-source alternatives.

### Meredith Whittaker:
Yeah. Absolutely. And our mission is to make sure that people who need privacy most have it, and everyone else has it too. So, this is very aligned. It is what we believe in and the only reason we exist.

### Audrey Tang:
Great!

### Meredith Whittaker:
We’re a small team. We’re a little over 40 people. By comparison, WhatsApp has over a thousand engineers, so we’re happy our team is very, very good. But we’re also small, so we’ll see what we can do with the team. It’s great to have this updated knowledge.

### Audrey Tang:
Well, we do have dedicated developers that are contributing now to element matrix because of that requirement, so if you do wish to participate in the proof of concept, the same engineers can be… I wouldn’t say redirected… but to also look at contributing to Signal.

### Meredith Whittaker:
Yeah. That’s great to know. And I think Josh will probably be our point of contact on that. He’s been on the phone with our server team to make sure we have up-to-date information.

### Audrey Tang:
OK. Excellent. So, we’ll have our NICS colleagues to please exchange name cards and so on.

### Meredith Whittaker:
Fabulous. Yeah. 

### Audrey Tang:
Anything else you would like to explain?

### Meredith Whittaker:
Well, one of the things that we’re doing in Taiwan is user research. We have a team who is not here at this meeting who are on the ground conducting research, working on understanding how people are using Signal and other messaging apps.

One of the constraints we have as a privacy-preserving technology that takes that very seriously is that we don’t collect analytics, so we have very limited information on how people use Signal. We know when they registered, their country code, the last time they accessed Signal. And that's it. But even saying we know that "about people" is actually incorrect. We know that about phone numbers that register a Signal account. So, there are a lot of gaps between the type of knowledge we would want to have to be able to improve Signal and make sure it’s working, make sure the localization makes sense, make sure that it’s functioning in a way that meets the norms and the knowledge we do actually have in the form of use data.

So, if there are feedback or feature requests, we would love to hear them here or to be in contact when people in your ministry or people you’re talking to hit a bug or an issue, to ensure that we’re able to fix it. Because that is really the only way we are able to have the knowledge we need to serve the people that we’re responsible to.

### Audrey Tang:
So, did you run surveys in Signal?

### Meredith Whittaker:
We did a few surveys but not many. This is the first time we’ve been serious about on-the-ground user research. We have a team who were in Tokyo and Seoul, then Taipei. It is a start. I’m just working to understand the landscape better, to understand how much of life relies on LINE in Taiwan and Japan, and to get to know how all of that works. If there are interesting stats or requests or things that you know and have access to relative to those broader questions that would be very helpful to us.

### Audrey Tang:
Colleagues, please add your feedbacks after I share mine.

> (laughter)

We use Signal for cross-team communications a lot, however there are also certain broadcasting uses. For example, in our workflow automation, when my colleague went to attend a meeting, they would write up the meeting summary and so on and currently, it is managed in our internal no-code database. So, it’s a workflow tool.

However, as I understand Signal does not that have this idea of a bot account that can easily shuffle those messages into group messages. Instead, probably someone would just have to use their own user accounts, but we’re not sure whether it’s OK by your term of services. So what we currently do is to shuffle through this no-code adapter.

> (laughter)

### Meredith Whittaker:
OK. Right now, we have not had requests for that often. And Jun, you and I were talking about a few organizations that you’re familiar with who do have that pieced together.

### Audrey Tang:
We’re happy to consider purchasing an organization plan, actually.

### Meredith Whittaker:
Yeah. I don’t know if you can speak to some of the bot uses. We would need to look into it a bit more. It can work if people hack it together, get an account, set it up on a server and make it work but it’s not something we’ve officially supported.

### Jun Harada:
Yeah. I would say bots are totally within bounds in terms of services at Signal. People have made bots open source in the past but to Meredith’s point, Signal has not officially supported bot activity. So, I think most times whenever I come in contact with other organizations that have implemented bot activity, the biggest issue they face is that sometimes they get flagged as spam.

### Audrey Tang:
Exactly.

### Meredith Whittaker:
And we do have a server team we can talk to around that. Our spam detection is done without the kind of surveillance that most messengers do. It's primarily reliant on detecting rough patterns and API use, so it’s something we could talk to you about but we want to coordinate with them and talk to some other folks who built bots. It hasn’t been officially supported so at this point we’re talking about hacker creativity at work.

### Audrey Tang:
Do you have a concept of an organizational account within which data bot messages are not counted toward spam? Because it’s an internal communication, so there will be 1 bot and we have like 600 staff, right? So, this bot will maybe keep sending messages to these 600 staff but not anyone else, and so it’s not unsolicited. 

On the other hand, we do not have a way to communicate to Signal that is not unsolicited.

### Meredith Whittaker:
We don’t. We’ve had many requests for organizational accounts and it’s something that is not on our roadmap but it’s on our mental map as something that is important to people. So, we don’t but it’s good to hear that that would be useful to you as well.

### Audrey Tang:
One way to kind of hack around it is just for the 600 people to kind of manually scan a QR code and add a bot like as a frame into the contact. And if that signal can be used as an indicator to basically whitelist that from your spam detection, then we do not need an abstraction of organization. 

But from what we gathered from the Internet communities, that is not the case today. So, if you just keep sending the notifications, it will still be construed as spamming.

### Meredith Whittaker:
Yeah. The behavior itself is fine, it’s the spam detection that’s the issue, so I think we’ll take a note to talk to the server team and see what options might exist. Again, we’re working with rough heuristics but I think this is something we could explore.

### Audrey Tang:
Okay. Once that’s done, we’ll get up to our internal language models.

> (laughter)

### Meredith Whittaker:
Yeah. ChatGPT dot Taiwan.

> (laughter)

### Audrey Tang:
Our National Science and Technology Council said that before end of the year, we’ll have a Taiwan dialogue engine, a uniquely Taiwanese dialogue… [laughter] Because at the moment, there is a lot of linguistic injustice in the largest language models. It doesn’t speak not even traditional Mandarin very well, let alone Taigi or Hakka or any of the other 19 national languages. 

So, when you’re ask it to answer in Taigi, it just hallucinates in a bad way, actually. And that is not easily corrected because it has everything to do with the source material and not the fine-tuning part, so we probably do have to train our own open-source model.

### Meredith Whittaker:
Yeah. I mean… which is very, very expensive.

### Audrey Tang:
Yes.

### Meredith Whittaker:
I’m happy to hear that you’re working on correcting that because language injustice has been a part of tech history for a very long time.

### Audrey Tang:
Yeah, and it’s about to get worse, actually… if ChatGPT is going to be like the unified interface of the Internet as it is looking up to be now, then basically it would just marginalize already-marginalized community so they have to either translate all their local knowledge to English in a lossy way, or accept the kind of skewing of their culture, which is really bad.

### Meredith Whittaker:
Yeah, I’m very concerned.

### Audrey Tang:
Yes. Thank you.

### Meredith Whittaker:
And the poles are the U.S. and China, and so it will also… that’s the lens through which everything else will be warped.

### Audrey Tang:
Exactly, and if a local community just tries very hard to adapt to that, it opens up itself to even more interactive defects, cons, scams, and so on, because there is no local knowledge to counter that. If I’m operating a language that I don’t actually know, I don’t have those trust signals and that will exacerbate polarization and precision persuasion thing.

### Meredith Whittaker:
Yeah. And the fact that as a rule, the only entities with the resources to build and maintain these systems are large corporations based in China and the U.S., so it’s very likely that the interests that will be served will look more like their interests than others. I’m very concerned.

### Audrey Tang:
Me too.

### Meredith Whittaker:
I think it’s irresponsible to launch them at this point in time.

### Audrey Tang:
Yeah. Our National Science and Technology Council is now working with NICS to have this emergency funding before end of the year to…

### Chuan-Te Ho:
Another issue that people are concerned about is the trustworthiness of AI. That’s something that my department is co-working with ITRI…

### Audrey Tang:
Institute for technology and research.

### Meredith Whittaker:
OK.

### Chuan-Te Ho:
… Not just only the security and privacy, but also the correctness, accuracy, and explainable… and who gets the say, the accountability.

### Meredith Whittaker:
Yeah. My scholarly work has primarily been on some of these questions around the technologies we call artificial intelligence and particularly connecting the surveillance business model that underwrites the tech industry today with the emergence of AI and the reliance on the surveillance business model to create and centralize the data that is a requirement for the large AI systems that we're all having to grapple with.

### Chuan-Te Ho:
It is a big issue. Trustworthiness, security, privacy, accountability, and privacy protection.

### Meredith Whittaker:
I think Signal is a tiny little way that we can interrupt the data pipelines into these systems, so we’re not contributing data to Google that is then used to train models that are then used to affect our lives and understandings and opportunities. Signal is a demonstration, like so much in the open-source community has been, that tech can look different than the corporate model that we all assume.

### Audrey Tang:
Yeah. Um, so… yes.

### Chuan-Te Ho:
Minister Tang just mentioned that although certain other messaging systems are popular in Taiwan, Signal is more popular at the top level. You know, people will select Signal as their primary, priority-one to deliver secure messages. So, people trust Signal because they trust that Signal can provide security, privacy, etc. My question is, what is the point of view of Signal about quantum computing? The age is coming.

### Meredith Whittaker:
There are many different estimates for when we'll achieve quantum capabilities and I am not expert enough to predict with any accuracy whether we’re looking at five years, ten years or is it now and the NSA just hasn't told us. However, I think it would be irresponsible of us not to be paranoid and so we are currently working on a post-quantum model for our key exchange and we are dedicating research and development resources to post-quantum hardening across our cryptographic stack because that's how we take care of the millions of people who rely on Signal and that's why we exist. 

### Chuan-Te Ho:
Smart people will select the smart communication channel.

### Meredith Whittaker:
Well, that's what we count on.

> (laughter)

### Audrey Tang:
That’s fair.

### Chuan-Te Ho:
The keyword is trustworthy.

### Meredith Whittaker:
Yeah, trust. And we also don't want people to have to trust us because of who we are. We want them to be able to look at all the code and not take our word for it. Which is why the open-source component of how Signal operates is so important. It lets people scrutinize what we do. Even if they don't trust me as a person, they can look at it and see for themselves. 

And we have hundreds of people who, every time we push a new build to our GitHub repo, are scrutinizing every line and posting on Reddit, speculating on its use and critiquing, and generally just engaging. It's actually a real gift to have such a vigilant community who anytime they find a small issue they immediately tell us. This lets us quickly prioritize fixing it and ultimately helps keep the quality high. It's not just us. It's hundreds of people beyond us who are in the spirit of open source helping us. 

### Chuan-Te Ho:
So, you are promoting the so-called concept of zero trust?

### Meredith Whittaker:
Well, I don’t think trust is bad but trust is earned. I'm promoting the concept of trust but verifying. This is too important to be left up to personalities or to trust based on charisma. It should not be the norm that we trust marketing materials from corporations who don't show us what they actually do. It should be normal that we're able to verify that socially significant decisions are made with integrity.

### Audrey Tang:
That’s great.

### Meredith Whittaker:
So, we agree?

> (laughter)

### Audrey Tang:
Of course we agree.

NICS is set up with the principle of public code, so our new code… in addition to the CVEs of course, our new code are by default Creative Commons Zero which is in the public domain, free of copyrights. Firstly, because I told my staff that with language models, copyright doesn't mean anything anyway, right?

If you say this is licensed restrictively. Well, the language models just look at it and write something that has the equivalent function but with no overlapping expressions and it's gone, right? 

### Meredith Whittaker:
Co-pilot.

> (laughter)

### Audrey Tang:
Yeah, exactly. That’s what co-pilot does. So, it doesn’t really matter which license we choose, so we might as well choose public domain. And the second thing, exactly as you said, we want our citizens and our democratic network partners to trust Taiwanese code not because it's from Taiwan but rather because they can independently verify.

### Meredith Whittaker:
Yeah. It concerns me that we live in a world where so much of our critical infrastructure, to which we’re entrusting our social and political institutions, is run by 10 or so corporations who aren’t transparent about what they're doing.

### Audrey Tang:
And almost none of it is public code.

### Meredith Whittaker:
Yeah, and we know the history of NIST and RSA… Even when it is public, you can hide issues. Public is the floor and then we need practices of scrutiny, from the kind of people who watch and guard the Signal code.

### Audrey Tang:
We are very aligned.

### Meredith Whittaker:
Yeah, very aligned. It’s nice.

### Audrey Tang:
Anything from?

### Chuan-Te Ho:
Yes, the next question that the whole world is concerned about well experienced talent. How does Signal deal with this problem to get more experienced people to join your team?

### Meredith Whittaker:
Well, we try to pay well.

### Chuan-Te Ho:
Pay well?

### Audrey Tang:
Good answer.

### Chuan-Te Ho:
Good answer!

> (laughter)

### Meredith Whittaker:
Happily, in the tech world, there are a lot of people who’ve seen the surveillance model up close and aren’t comfortable with it and want to do something with their lives that has more meaning. So, we actually get very high-qualified applicants.

One of the ways we’re able to remain so small but do so much is that we generally hire senior people who have a lot of experience and they’re able to leverage that experience for Signal. But it’s also important that people aren’t asked to just sacrifice all the time, they can pay their mortgage, rent, and support their families as well. So, we try to do both.

### Chuan-Te Ho:
Besides the economic reason, I think there is another reason. For example, your branding at Signal or you can work with a group of smart people.

### Meredith Whittaker:
Exactly.

### Chuan-Te Ho:
You can learn a lot from your work experience. Not just economic but other social reasons.

### Meredith Whittaker:
That’s absolutely right. We pay people and provide a very healthy work environment that everyone who works at Signal believes in. They wake up in the morning and they feel good about what they do and what they build, which is not always the case in a job. And they learn from each other. It's very nice. I feel lucky to work with the people on my team and who work at Signal, and also to benefit from the legacy of everyone who’s been at Signal and who contributed part of their life to the project.

### Chuan-Te Ho:
So after this meeting, I can have a reason to ask my boss to pay well.

> (laughter)

### Audrey Tang:
Yeah. In NICS, we already pegged our average salary to the median of cyber security researchers and engineers in financial institutions. It is the median, right? So, it’s not particularly good or bad. It just ensures a talent circulation but it really is true that the really senior people add to the team’s spirits and also a sense of mission. And so these people would have a separate paygrade that is just you know, a few hundred bucks shorter of a minister’s salary.

> (laughter)

So, I think we'll continue to work this way and have your illustrative example as motivation when the MPs ask me tomorrow. Actually, I think the mission orientedness of Signal is what attracts people. In Taiwan, prior to doing this cyber security thing, I was in charge of social innovation and social entrepreneurship and we have this recommitted structure where a non-profit holds this veto right or special stock to a for-profit in which case this for-profit is not for-profit but rather just with-profit that for-purpose with-profit. 

I think, at that time a few years ago, this structure was very new in Taiwan and we had to change the company act for that, but more and more people are seeing that this with-profit scenario really actually does a better job at recruiting people because people can see that whatever they do is aligned on the mission level on a non-profit. And I understand you have a very similar structure.

### Meredith Whittaker:
Yes, exactly. So, the Signal Foundation is a non-profit 501c3 and Signal Messenger is an LLC but with the Signal Foundation dedicated to supporting Signal Messenger. So, in practice, it's the same people and the same organization. I'm president of both but that structure allows us more flexibility. 

And you know, we are not with-profit. We don't do profit but we do have an LLC and a 501c3 as a combined entity which is the structure that works for us. 

### Audrey Tang:
Right. Exactly.

### Meredith Whittaker:
I do agree that the mission is what attracts people. Once they're attracted, we need to make sure it's possible. So, how do we create the environment where they can thrive?

Another element of Signal is that we are a remote workplace organization so people can live where their families are within the North American time zones, to ensure that we're able to collaborate in real time.

### Audrey Tang:
I see. OK.

### Chuan-Te Ho:
Another issue that I got is a summon from our president Tsai where she urged the NICS to increase the general public's security awareness. What is your suggestion? And maybe we can cooperate with each other to educate the general public?

### Meredith Whittaker:
Well, I think it is imperative. And I also think that's the floor. We need to let people know that a lot of the daily habits that rely on surveillance technologies do have a cost, even if that cost isn't monetary and even if you don't feel that cost immediately. But data breaches, hacks, and the potential delivery of surveillance information to hostile actors are all very real costs.

I think there needs to be an understanding of that and then there needs to be alternatives. Which is why we create Signal Messenger as an alternative. And it's also why we invest in core technologies like the Signal Protocol and some of the zero-knowledge techniques that we use to protect our metadata, alongside the techniques we use to protect group information. We make those available beyond Signal. The protocol is at the heart of WhatsApp's messaging encryption, and many others.

But I think education is imperative. And after education, making sure once you know, you have the ability to actually do something about it. Whether it's an organization like your ministry saying we use Signal, we use Matrix. and that's how we're going to do business. You make that the social norm, the workplace norm. 

I think education is difficult however, because we are up against narratives that are expertly created by the marketing departments of very interested corporations. And in many cases it’s not a matter of individual choice. Being surveilled by cameras, or by employers, or the reality that we need to use certain digital technologies to participate in civic and economic life means that the issues are bigger than education. We need leaders like you, as you have been doing, to make structural changes that invite privacy in.

### Chuan-Te Ho:
What is your point of view about cross-border data protection? For example, the popular private sectors are moving to the Cloud environment where people are concerned about liability etc.

### Meredith Whittaker:
I think…

### Chuan-Te Ho:
As a Cloud user, do you think that Cloud is trustworthy? 

### Audrey Tang:
Like Amazon.

### Chuan-Te Ho:
Like Amazon, Google, or Azure.

### Meredith Whittaker:
We both use Cloud and don’t trust Cloud.

### Chuan-Te Ho:
OK.

### Meredith Whittaker:
Almost no one has the resources now to run our own servers. It’s hundreds of millions of dollars a year to run the infrastructure we would need to be highly available across the globe. So like everyone else we use cloud servers. And this is only one of the reasons we focus on our cryptographic approaches to privacy. The end-to-end encryption happens on the clients and what touches the Cloud is big blobs of encrypted data no one can read.

We would like to live in a world where those infrastructures were more trustworthy because they touch a lot of data that isn't encrypted, but our methodology is that we don't trust them and we use encryption to allow us to use them anyway.

Close-border data protection is very difficult in a globally connected world where only a handful of companies have infrastructure, so I think it’s a very difficult problem given the last 10 years we moved from a world where most organizations ran their own infrastructure to a world where a handful of companies run all the infrastructure. And the norms around how people expect technology to work have been established by those organizations. Either we meet those norms and it works, or we don't, and then five cryptographers in Berlin might use us but no one else can.

### Chuan-Te Ho:
One of the ways where NICS can collaborate with Signal is maybe we can share the threat intelligence.

### Meredith Whittaker:
I’m not sure from our perspective what that would be. Part of our immune system is the open-source and infosec community that has hammered the protocols, published papers, and that reviews all of our code, so we’re confident that Signal itself is private and secure.

We do recognize that tools like Pegasus are dangerous and that people who are targeted by tools like Pegasus could be hurt… if someone is able to get access to your device on the same terms that you have, then they will be able to access Signal and any messages that haven't disappeared. This is not a Signal problem. This is a device-level problem that people nonetheless need to be careful about.

We don’t extend our promises beyond Signal itself and that if you are using Signal in a region that considers the use of Signal to be suspicious and you're being targeted, that could be an issue.

### Chuan-Te Ho:
Thank you.

### Meredith Whittaker:
Yeah. You’re welcome.

### Audrey Tang:
yeah, Anything from?

### Eric Juang:
Yeah, Just one question about the European DMA, the Digital Markets Act. It requires several tool just like Signal or Matrix that might be harder to interoperate. So, how do we do this?

### Meredith Whittaker:
Well, we don't meet the threshold as a gatekeeper under the Digital Markets Act so we would not be compelled to interoperate. I've been in tech for almost 20 years and I actually started doing work in standards, so I have some sense of how difficult it is to agree on a standard even when every party involved wants to.

Now, with the DMA, you have large players who don't want to and then you have the issue of encryption. I have seen a proposal from Matrix, and I have seen a proposal from Meta. There was a workshop a month or so ago where these were presented and I think the Matrix proposal is unworkable because you don't want a man in the middle on your client, acting as a switchboard. I think the Meta proposal is shallow at this point in that it proposes using the Signal protocol but I have not seen a specification.

So, what I expect is for this to continue moving forward, and that we'll get a few specs with not enough implementation detail to really operationalize them, and it will likely take longer than 2024 because these standards processes are always more complex than politicians believe.

Now on the Signal side, what is our position on this?

We won't do any interoperating if it doesn't uphold our rigorous privacy bar and that means message contents are encrypted with the protocol and metadata is encrypted using the techniques that we use to keep it private. Now, how do you interoperate without sharing metadata? This is a very difficult question. And then how do we trust that once we're interoperating that our privacy promises are being adhered to on the backend of the other side? These are not questions with clear answers at the moment. 

So, I don't see a near future where we are participating in interoperability and to be frank, based on my experience, I think this is going to take a lot longer than the deadline that has been set by the politicians. 

### Audrey Tang:
Well… unless all the gatekeepers just switch to Signal with custom skin?

> (laughter)

### Meredith Whittaker:
Yeah.

### Audrey Tang:
I mean, that’s the easy way out.

### Meredith Whittaker:
Yeah, and then I can just go on vacation.

> (laughter)

### Audrey Tang:
Well, that makes you the only gatekeeper...

### Meredith Whittaker:
Oh, okay.

### Audrey Tang:
...but there’s only one gatekeeper!

### Meredith Whittaker:
And now I’m the interoperator.

> (laughter)

### Audrey Tang:
OK. Anything from Wei-Jan?

### Wei-Jan Ko:
I think Signal uses very fast, high quality code and I wanted to know if we can look at Signal E2E protocol to other applications for other uses. For example, the Matrix.

### Meredith Whittaker:
To use an implementation of the protocol?

### Wei-Jan Ko:
Signal has an E2E protocol, right? A message protocol and it’s a list of passport to interbreach...with for example, Matrix’s protocol.

### Meredith Whittaker:
Matrix did a rewrite of our protocol that’s a little bit different, so it is not actually our protocol. So, they did something that is based on the double ratchet algorithm that Trevor and Moxie wrote.

### Wei-Jan Ko:
I mean replace Matrix which is low-end. Because some people say that Matrix is low-end E2E, and not fully trusted or verified. They have their own algorithm for E2E, but everyone knows that the messages in Signal have E2E algorithms that everyone trust. What I want to know is that if I can replace this message layer?

### Meredith Whittaker:
We license the protocol, so if you just email us, we’ll talk about how to do that.

### Wei-Jan Ko:
I think it’s an interesting topic that we can make Matrix a high-end api that is friendly for development. If it’s low-end, we cannot combine Signals into the algorithm. It is not a very good integration. OK. Let’s go.

### Meredith Whittaker:
Yeah. Let’s have a conversation about details but um hypothetically that could be possible.

### Audrey Tang:
Yeah. They’re on the assignment of earthquake resilience.

### Meredith Whittaker:
Yeah, understood.

> (laughter)

### Audrey Tang:
If you do not install on our outpost, that’s their plan B.

### Meredith Whittaker:
Understood. Our mission is privacy and not user acquisition for its own sake. Right? So, we don't make money on showing people ads or getting them to add their friends to our network. We just do one thing, and that’s focus on ensuring digital communications are private. So, however we can achieve that, whether it's the protocol or the messenger or some educational material for journalists, that's what we'll do.

### Audrey Tang:
Okay. Great! Any questions from your side?

### Josh Lund:
So, I guess I’m curious to know… on the AWS website for example, they talk about Taiwan as a region that has like edge services….

### Audrey Tang:
Local zone.

### Josh Lund:
Yeah. So for like, CloudFront for example, they have endpoints for the CDN network, but at least on the AWS website, they’re not positioning Taiwan as providing the full suite of AWS services. So, do you have preview access?

### Audrey Tang:
It’s Taiwan local zone. It’s not preview. You just add a Japan region, but within the Japan region you can add a Taipei local zone. And within the local zone, you can spin up EC2 instances. 

### Josh Lund:
Right. Right. OK.

### Meredith Whittaker:
That’s really good to know.

### Jun Harada:
I’d love to know about the other nuances of how moda and other ministries within Taiwan use Signal or don’t use Signal. Where are the scenarios where you find that there might be a limitation in your ability to use Signal, or features missing that you want…like you mentioned the bot that’s currently trying to implement these updates. I’d love to just hear more about your feature requests and desires for Signal.

### Audrey Tang:
Yeah. Early on, when we rolled out ministry-wide of Signal, there were some concerns that unlike in the U.S., if all you have is a landline then Signal doesn't work here. Right? Because in the U.S., I believe Signal calls you and resell a code to you or something like a voice activation.

### Meredith Whittaker:
Yes, SMS verification.

### Audrey Tang:
Right. Because landline doesn't do SMS, so it's a phone call. But I understand that maybe it's because international call rate or whatever, Signal doesn't do the same voice verification for landlines here. And there are… especially the administration from cyber security, they are very wary of giving out their mobile phone number. They would much rather just have their office phone with an extension to register their Signal accounts.

It's soft-ish, right? By simply just get a new sim card just for Signal but it is an investment, so that's actually the only kind of hurdle we run into in the roll-out, otherwise it's all good.

### Meredith Whittaker:
Yeah. And this will not solve that issue but may be interesting for other reasons. This year, we are planning to launch usernames, so you will still need a mobile phone number to register, but if you want to connect with people once you're registered, you'll be able to share your username and not your phone number.

### Audrey Tang:
Oh. So, it’s not exposed to my new contact.

### Meredith Whittaker:
Exactly. And that's something we've heard from journalists and others as a request, and it will add one more layer of privacy.

### Audrey Tang:
Yeah. So, and for example I have an office-use phone number that only does SMS and never does phone calls. And then I use that so what you're saying is that I don't even have to expose that for SMS because SMS is very vulnerable now, as all of you know, right? So, I think this is pretty good I think once you have usernames… Is that a global thing? Like the names are shared globally?

### Meredith Whittaker:
Yes. It will be a username that you can choose any string and then we'll append I think it's three characters or three numbers on the end, so it will be less… The thinking there is that it will be less prone to falsifying identity, so you can't pretend to be, say “Google” as easily, because it would be “Google123” and the numbers at the end would, we believe, lead people to question whether you’re really Google or not.

### Audrey Tang:
Right. Like a one-in-a-thousand chance.

### Meredith Whittaker:
Exactly. Yeah.

### Jun Harada:
Yeah, that's really helpful to know. I guess in one other point too that is… have you looked at maybe spinning virtual numbers? I know in the States on our side we use a variety of services to kind of create virtual phone numbers but we can quickly register on Signal and get an SMS code but not have to buy a SIM card and not have to have a phone. I don't know if services like Twilio etc.…

### Audrey Tang:
Yeah, it is it is possible but we're talking about public sector rollout though, so unless that virtual service is… 

### Jun Harada:
Massive…

### Audrey Tang:
Right. Exactly. It has to be part of the common procurement in order to tell other public service to use it because they would not use it unless it's an assignment from their CISO. And their CISO would naturally ask you know, does it pass the audits

that Howard defined back in the day? And will they survive earthquakes and so, and then we're back to square one.

### Jun Harada:
I see. I see. That's good to know. How was the uh… You mentioned that Google Meet was one messenger that came from the office to the public sector…

### Audrey Tang:
That is correct. Because they agreed on two things. One is that the entire compute including Metadata is hosted in Chang Hua, a local zone, and the infrastructure level or the maintenance is done by people with our nationality.

### Jun Harada:
And was that pretty… Did you see a wide adoption of security as to how the general population adapted?

### Audrey Tang:
In public sector, certainly. And especially in education sectors because certain other popular video conferencing solutions had a really bad track record back in the day of early pandemic days of having PRC people monitoring its calls and disabling Hong Kong demonstrations and so on. So, director of cyber security, Howard back then, issued an directive asking all the schools and public servants to not join such calls. And if they must do, then they must do so under protest.

So, because of that, an alternative at the time was Google Meet.

### Jun Harada:
Yeah. Just curious in terms of how vast…

### Audrey Tang:
Pretty much all basic education use Google Meet nowadays.

### Jun Harada:
Yeah, for education.

### Meredith Whittaker:
It's also our failover if we have to join anything that isn’t Signal. We use Google Meet and not others.

### Audrey Tang:
Yeah, it's good that they integrated the Google Duo code for end-to-end encryption.

### Meredith Whittaker:
Yeah, and that uses Signal.

### Audrey Tang:
Oh. Okay. Signal everywhere!

> (laughter)

### Jun Harada:
That’s it for me. Thank you. 

### Audrey Tang:
Anything from Howard?

### Howard Jyan:
I am just a bridge to bring you and them together.

### Chuan-Te Ho:
Just a bridge.

### Audrey Tang:
Well, thank you for your visit.

### Meredith Whittaker:
Thank you. This is great. It’s really nice to meet you all and I hope we stay in touch. And we’d love to…

### Audrey Tang:
Definitely. I can add you on Signal.

> (laughter)

### Meredith Whittaker:
Absolutely. Please do… Feel free at any time if you have questions, tech support, ideas… that’s why we’re here.

### Chuan-Te Ho:
Keep in touch.

### Meredith Whittaker:
Yeah, keep it touch. Wonderful, thank you. And I love your graphic designs, they look very nice.

