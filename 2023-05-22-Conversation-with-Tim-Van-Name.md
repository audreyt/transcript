# 2023-05-22 Conversation with Tim Van Name

### Tim Van Name:
I listened to a few colleagues describe the changes and impacts, it was reminiscent of some of the incredible people I was able to work with at the White House. But one in particular that stood out to me was the transformation on g0v.tw and accessibility. It was something I wanted to pursue in the US and had never been successful.

So, I'm curious, maybe to start with, how were you able to accomplish that? What's the secret?

### Audrey Tang:
Yeah, I think framing accessibility not just for accessibility's sake, but also for the resilience when it comes to what we call "earthquakes" that disrupts our submarine cables. And then, we will be only able to connect with the rest of the world through very limited bandwidth, that's to say non-geostationary satellites and so on.

So, two strategic goals form immediately. One is to keep the local video conferencing and so on working even when all the submarine cables are cut. And second is an efficient bandwidth effective way to communicate to the rest of the world. And that means actually text-based conversations.

So, basically, we see accessibility as part of a larger, what we call, resilience inspection, in which accessibility is but one, but it includes many others as well. It's through this that we push our design system and so on. For example, our National Security Bureau just today adopted our website design, which happens to be accessible. But it also makes them much more resilient when the earthquake comes.

### Tim Van Name:
Okay, yeah, that's great. Yeah, so talking about submarine cables being cut or even just some of the places where connectivity is fragile, how do you think about providing access and connectivity to the population, both for thriving an economy but also all the other security aspects?

### Audrey Tang:
Yeah, and it's not hypothetical. Just a few months ago in our island of Matsu, which has two submarine cables connecting Matsu and mainland Taiwan, there was first a fishing vessel that flies the PRC flag accidentally cut one of the submarine cables. And just a week or so later, another cargo ship flying PRC flag accidentally cut the other. And they insist it was an accident that it dropped anchor and kept moving. But anyway, it was entirely an accident.

And so, I think this incident in particular, similar to the one of the DDoS attacks right after Nancy Pelosi's visit last August, really puts on the table a very concrete case. What would we do the next time that a submarine cable's connecting Matsu to Taiwan was cut? So, two things, right? We, of course, allocated sufficient bandwidth for microwave communication. And then, before the submarine cable was repaired, we also tested through the TTC, the Telecom Tech Center, the mid-orbit satellite connection, and it was successful.

So before end of next year, we're going to deploy more than 700 such satellite receivers that is multi-band, meaning that it connects with, ideally, LEO, MEO, and geostationary at the same time so that we can have plenty of bandwidth for people to correspond to people abroad, which is, I think, going to be the main defining thing in an escalation of tensions. Just compare Crimea and Kiev, and you'll see the difference.

### Tim Van Name:
Right.

### Audrey Tang:
Yeah.

### Tim Van Name:
So, the multi-constellation model is really interesting to me for resiliency because it gives you a lot of failover. Did you find the bandwidth was sufficient to support the population?

### Audrey Tang:
Not at all. It's not at all sufficient. And the main reason was that for most of our communication, especially video conferencing, we do not have metadata residency, meaning that when you initiate a call, even if we're both domestic in Taiwan, some of the metadata routes through Japan or Singapore or the US and so on.

So, in an earthquake scenario, none of the calls will be able to initiate just because the metadata handshake can't. So, we're pushing what we call local resilience, meaning that currently, for example, Google Meet is entirely local. So, we know that even when all the submarine cables are cut, Google Meet will still work. And then, we're pushing all the other video conferencing software to either implement local resilience or to be essentially out of the joint tender procurement process by the end of next year.

### Tim Van Name:
Wow, that's great. In addition, given limited bandwidth, how do you think about the prioritization of traffic?

### Audrey Tang:
Yeah. So, if all the domestic video conferencing and coordination are locally resilient, then it doesn't use the satellite bandwidth. And then we can talk about prioritization. Currently, there is no sufficient bandwidth because of the metadata handshaking. This is one.

And the second is that whether we can successfully virtualize sufficient of our services to run essentially a hybrid cloud model, that is to say they're locally resilient, but if need to be, they can also be replicated very quickly to abroad. And for the essential systems over this year and next, what we're trying to do is exactly what Ukraine did between Crimea and Kiev, which is making sure that the offsite backups can be enabled when needed.

And this extends also to pretty much every critical infrastructure that the adversary already knows the position of, including the telecom core networks. We can probably expect that they will all be destroyed by those things in the first few minutes. And then, which is why we also need to virtualize that and implement like roaming, disaster roaming and so on.

### Tim Van Name:
Yeah. So that… I mean, that sounds like an incredible amount of work. How much does MODA take on and how much do you rely on industry working in partnership or maybe aligned with your strategic direction to accomplish those goals?

### Audrey Tang:
Yeah. I think the three major public cloud vendors are all very helpful. And I will also add to it Cloudflare, who is not selling us Office or Google Workspace, make them credibly neutral among all the three clouds. And so, I think they're all very helpful because the Taiwanese situation is really quite unique. It's very interesting from a research perspective. And for them, I think it poses a very concrete set of challenge that must be overcome over the next couple of years. And so, I think they're all like all in on this.

And so, we receive not just like threat indicators and things that you probably are familiar with, but actually research support as well from them to try to suss out the weakness in our connectivity, the topology and things like that. And just preemptively tell us where are the points that we still need to strengthen on.

### Tim Van Name:
That's incredible. I mean, what support? So, having moved out of a decade of government into sort of a small company, we're really passionate about supporting research like that. Is there an opportunity for others to participate in that space? Like do you publish your strategies somewhere we can get?

### Audrey Tang:
Certainly. The National Institute of Cyber Security, the NICS, was set up specifically for this purpose. I'm also the chair. So, the NICS is a non-departmental public body. So, its counterpart would be like centers of excellence in the academic or private world along other jurisdictions. And because it is not a governmental body, it means that we welcome, for example, international fellows, fellows from both our civic tech community, but because we now aggressively hand out gold cards for anyone with eight or more years of open-source contribution. So, they become like also Taiwanese for three years. And if they want to renew, sometimes they naturalize without giving up their own passport.

### Tim Van Name:
Sometimes.

### Audrey Tang:
Sometimes. Yeah, that's John. So, he's going to be our flagship model for our "also Taiwanese" idea.

### Tim Van Name:
Okay. Yeah, that's really interesting. So, that was another topic I was interested in. The emphasis behind open-source software has been mesmerizing. I spent almost two and a half years at our Department of Defense getting an open-source policy that allowed us to give software paid for by the American people back to the American people and to the rest of the world. 

And you've seemed to make that change happen overnight. Do you feel like it's been adopted sort of across the government? And are there any places where it's been more challenging?

### Audrey Tang:
Yeah, the foundational parts, including, of course, SELinux, Tor.

### Tim Van Name:
Yeah, right. Good point.

### Audrey Tang:
Thank you for the contribution.

> (laughter)

These met with no resistance because there are simply no private sector alternatives to these foundational layers stuff, right? And for cutting edge stuff like IPFS, there's nothing quite in IPFS's category from the commercial vendors. So, in those places where there is no alternative, the main worry was just like who or what is it? Has it been penetration tested? Where is the red teaming? Right? But that is a resource problem. So, if we allocate sufficient resource and make the software bill of material, then they can be introduced just fine.

The issues occur more when there's already a commercial competitor and the user experience is similar. And I'm speaking specifically about the LINE messenging system. And that's like WhatsApp or whatever, right? I don't use LINE for my office work, for my day job.

If the public sector overly rely on LINE groups, that's bad on two counts.

First that it doesn't have an enterprise edition. So, your family contacts and your work contacts are overlapped in the LINE thing. And second, it's not locally resilient, so when submarine cables are cut, none of the LINE video calls will work.

However, nobody asked the public servants to use LINE. LINE certainly didn't ask them. So, it's all due to a voluntary network effect.

Now we of course have open-source alternatives, Matrix/Element as some German and French public servants also use. As I mentioned, there's Google Workspace, which has its own chat and spaces. We also use Signal, and they are also interested in local resilience. So, all these are viable alternatives, but none of them with the same network effect of LINE. So, that is particularly challenging.

### Tim Van Name:
Yeah. So, it's funny you just reminded me of when I was at the White House and we were rolling out modern technology to the president and about 7,000 staff. At the time, Slack was really popular and particularly popular amongst the tech crowd that had come in to modernize the White House. And similarly, at the time, they didn't have an enterprise edition. We have an obligation to the American people to capture all presidential records, which go to our national archive and help tell the story over time.

And so, we had to provide alternatives at the time. Eventually working with Slack, they released an enterprise edition to help solve that problem. But it reminded me, it was sort of twofold. One was, I was amazed how many companies who weren't the market leader were willing to be cooperative. And just how long it sometimes takes the technology sector to get into those spaces and understand them.

### Audrey Tang:
And the customers always take a viable alternative like RocketChat or Mattermost to convince Slack. Right. So, the same, right? We need to have, I think by the end of next month, we're going to switch to Google Spaces. That is our first real alternative to LINE and I think that will pressure LINE to implement local resilience or enterprise edition. But we will see because that entirely depends on whether our migration internally is successful.

### Tim Van Name:
Yeah. I think that makes sense. The other interesting conversation around open-source is security You talked about being confident that open-source software is secure, and I agree. One of the programs I got to be involved with when I was at the Pentagon, we called Hack the Pentagon, but it was crowdsourced. Yeah, crowdsource bug bounties. 

And initially we put a small amount of the Department of Defense's IPs in range. Eventually we expanded that over time. And in some instances, we actually asked small groups of international hackers to come in and apply their skills to very sensitive assets. But what I found to be particularly interesting through all of that was one, how many times they found vulnerabilities that, and then helped us to fix them. It's an incredible group of people. And we were paying them very small amounts of money, right? $500 here, $1,000 here, $2,000.

### Audrey Tang:
It's for the prestige.

### Tim Van Name:
Yeah. And that's, for many of them, it wasn't even about the money. They just wanted to help give back to their country.

### Audrey Tang:
If you pay them in NFTs, they will also give back. I'm sure.

### Tim Van Name:
I'm sure.

> (laughter)

But the other thing that I found to be really interesting through that whole process was how most of the time when we were using open-source software, because that was getting patched by this broader community on a regular basis, it was rarer for them to find vulnerabilities. And when they did, we were helping a much broader community, which is pretty interesting. So, that probably more than any other event in my career changed my perspective and made me a real believer that it's maybe more secure, if not certainly as secure.

### Audrey Tang:
Yeah, definitely. I think what we're now doing is to mobilize everyone in our public service, so they may not be cybersecurity experts, but they know something about coding, and we pay them handsomely if they discover a CVE and so on. But what you're describing is extending it to the general population, which will be very interesting.

We did try some of those ideas a couple of years back, but we do not have a systemic thing. So, we post, for example, the grand challenge on the self-driving car testing grounds, the proving grounds, and there was a bounty to find the issues. And there's another bounty for discovering the AI models for speech analysis and so on, which is going to be very pertinent this year because of the fact that this MacBook can run a model that performs better than ChatGPT 3.5, right?

So, prompt injection and so on, that is also quite fit for a bounty-like structure. But we do not have yet the bounty for the whole of the government. So, I'm also quite curious, have you had any success to make it cross-departmental, like inter-agency, something that people can share, like people nowadays in the private sector that has contracted one of those bug bounty vendors?

### Tim Van Name:
Yeah, so at the time, we used the first iteration called Hack the Pentagon 1.0. We used a single bug bounty vendor, and then we eventually made it a larger contract and had multiple bug bounty vendors involved, which is pretty interesting.

So, three, and I think it's now four. But we also worked with a number of other partners across the government. So, I don't think there's one program that's a bug bounty across the departments, but the Department of Defense team worked with the Department of Homeland Security team, and now our Cybersecurity and Infrastructure Security Agency runs a really successful bug bounty.

I believe the State Department and Treasury also had a version, so maybe the program didn't directly scale across the Government, but the idea did, which I think can be just as powerful. And with many of those agencies, they took a slightly different take on their approach, because it was more tailored to the particular types of information they were interested in. So, I thought that was pretty good.

### Audrey Tang:
Okay, maybe we should start by asking people to hack MODA. That would be something we can do. We did ask a few quite famous open-source contributors from the civil society to join the National Institute of Cybersecurity, and their work is now to hack all the national ministries and department that has the national level personal data. So that's their job, like red teaming and so on.

But opening up to the general public, some of the team, the PDIS team, did suggest exactly the same program. So, maybe we should prioritize that and have a small pilot, again, starting with our own ministry.

### Tim Van Name:
Yeah, so two other things I'd mention there that I think are interesting. One was, we had a number of very young participants who came to participate. I think the law at the time was they had to be 18, because it was considered work. But we had an amazing number of 18-year-olds, or very nearly 18-year-olds who would hang on to their vulnerabilities until they turned 18, who, in fact, one of them made almost half a million dollars identifying vulnerabilities in Department of Defense systems.

And I used that as an opportunity to go and recruit some incredible talent, people that might not have thought about the civil service as a career otherwise. And so, we made a point to identify those people and provide pathways and opportunities, which I think was one really great thing.

The other was that we found it to just be this incredible community of people. I think there was this fear in the Department of Defense at the time that hackers were sort of this nefarious group. And we found it to be an incredibly honorable, thoughtful, very, very meticulous group of people that were patriots at their core, wanted to serve their country or serve the broader population in an interesting way. And I think that surprised people. It certainly surprised me.

So, I came away from it as maybe it was a great way to find talent, but it was also a great way to build a community. And I'm really passionate about attracting people who hadn't otherwise thought about contributing to the public sector. And so that's one that definitely got me excited.

### Audrey Tang:
Yeah, our work age, according to the Labor Act, I think is 16 years old, which is why I think our girls in cybersecurity camp is around 16 years old. And many of them, I think 3,000 of them now every year, participate in such competition. And it does help to mainstream this idea of ethical hacking, especially when it's high school young women. It sets the right role model for their younger practitioners, because previously it was all associated with very shady stuff. And the parents would then let their daughters to pursue a cybersecurity white hat career.

But we've been… since three years ago, really changing that. But I think it can go even younger, even though they're not like work, work. Because I did drop out when I was 15, and it was considered child labor... But we really need to go even younger, because many of the people who make significant contributions did so when they were like 13 or 14. That's what we see.

### Tim Van Name:
Yeah, that's neat. I will be watching from afar and cheering on those efforts. I think it's incredible. And it sounds like you've had 100 or so people go through them so far, and many of them chosen cybersecurity as a career path.

### Audrey Tang:
Exactly.

### Tim Van Name:
They have. Wow, that's wonderful. Yeah. I guess a couple of other questions, and certainly happy to take the conversation wherever. But I was pretty excited to hear, yeah, even that this is going to be publicly posted. I love the idea of transparency and good government.

How are you thinking about driving that? Is that something you think your colleagues are going to adopt over time as well?

### Audrey Tang:
Yeah, definitely. What we're doing now is to prove that most of the why of policymaking, like why we're thinking this, and the how of policymaking, like the specific ways to do this, is much more important in context than the what, the products of policies. And so, we found that the stakeholders really pay quite close attention to the transcript that we have.

The recent conversation I had with OpenAI, in which they asked how to do a democratic deliberation of the AI ethics and so on, got a lot of attention from the local practitioners. And so, I think this is a very inexpensive way to basically go viral and to pre-see the context of policymaking in stakeholders' minds, so that when we do push out a policy, it will not catch the stakeholders unaware, and the communication tend to be much more to the point, because they already know where we're coming from, right?

So, I think the infrastructure to enable this, of course, is all public code, open source. And we do see that in many important multistakeholder meetings, because this system started even before I entered the cabinet, when I was in the basic education curriculum committee, when we were working on the 12-year basic curriculum. There was a lot of controversies, because people didn't know what's actually going on in the curriculum and deliberation. And when we introduced the system, eventually all the national academy of education research-related processes started adopting the same system.

And so, the whole process became much more legitimate, because people know the why and how of the policymaking. So, we've seen it adopted in many multistakeholder forums. And now with machine learning and speech recognition and so on, it's becoming even more economic to do so at scale.

### Tim Van Name:
Yeah, that's great. That's a great… I love the "why". That's a fantastic reason! 

One of the things that I understood to be under your remit, but please correct me if this is wrong, is sort of creating an incredible digital economy here in Taiwan. And in particular, I think about the small businesses or individuals who are just getting started, where cybersecurity may be an incredible challenge or burden.

How do you think about helping them along their journey of creating a successful business and maybe providing some of those capabilities or services, where it doesn't, to use an Americanism, to break the bank, where it doesn't cost too much money to get started?

### Audrey Tang:
Yeah, I think it's both us, the administration for digital industries under MODA, and also for the larger enterprises, the Ministry of Economic Affairs. The MOEA basically takes care of what they call small and medium-sized enterprises and above. And what we take care of is micro and small enterprises that may not be companies. So, MOEA takes care of the companies that are registered as such.

But in many, as you mentioned, the mom-and-pop shop and the local economy, some of them are registered as a local co-op or an association, or even without any registration. They just do the business at home. So, for these very, very small operators, they cannot dedicate one cybersecurity staff, a CISO, however. It's not possible. So, we have this program called the T-Cloud that specifically take care of such social innovators, especially lower-sized ones. And we match as a subsidy so that up to a thousand or so US dollars, they can try to subscribe to different solutions, usually some solutions. And we match the fund because it's us, so it's metered. So, they can subscribe for this for a couple of days, find it's not to their liking, but they only spend a dozen US dollars anyway, and then they switch to another, switch to another, but up to 1000 US dollars, we just simply match. And so that immediately lower the cost by 50%.

And then, we also invest a lot of money to help entire night markets to digitally transform. And so that's another what we call the T-ambassadors, people in their third or fourth year of undergrad or freshly graduated, we get those T-ambassadors, in teams of 5 or 10, to those local places to digitally transform an entire, as I mentioned, night market or street and things like that.

So, I think in Taiwan, there is a very strong sense of local community grassroots organization. It was just that they were not in the radar of the minister of economic affairs. And because when the MODA founded, the MOEA was still there, right? So, we're not here to say that those large enterprises or TSMC or whatever is suddenly going to be our purview.

Our purview is more like the things that the MOEA, including the SMEA, the Small and Medium Enterprises Administration, kind of either overlook or did not have a lot of subsidy program for. And we specifically tailor make for that.

### Tim Van Name:
That's really neat. Okay. And those T-ambassadors, is that a voluntary program?

### Audrey Tang:
Yeah, it is a voluntary program, but we pay for the entire stipend for their learning, for their salary and so on. So, this originally started during the pandemic as increasing the rate of the young people getting a job after freshly graduated, because everybody predicted that because of the pandemic, there will be job loss for that generation. But we managed the pandemic pretty well, so that didn't happen.

So, what did happen is that it did attract… I think 87% of T-ambassadors were from majors not associated with cybersecurity or information management or any digital fields. So, they may come from major in philosophy or communication or whatever, but they did find that this six-month program successfully brought their digital native perspective to the local night market. So, they're not feeling as interns, but rather as ambassadors that help the elderly to digitally transform their work.

### Tim Van Name:
Wow, that's great. 

### Audrey Tang:
It's quite meaningful. Yeah.

### Tim Van Name:
Do you find that after the T-ambassador program that many of those other majors end up going into technical fields?

### Audrey Tang:
Exactly. So, they still retain, of course, their domain knowledge, especially philosophy and communication are going to be very important for chat-based AI, but they are not afraid of applying what they have learned in the six months and to work on digital transformation in their main career.

### Tim Van Name:
Wow, that's an incredible program. I'll have to take a deeper look at that and see if that's something we could do in the US. That's great.

The other topic… It's sort of a broad topic, but sort of thinking about disinformation and malign influence having an impact on a population. I tend to look at the sort of young population, but sort of across the spectrum. Is that something that falls under MODA’S remit? And if so, how are you addressing it?

### Audrey Tang:
Yeah, so FIMI, foreign information manipulation and interference, which is a term we prefer to use, is an EU term. So, FIMI has two parts. One is the more like broadcasting part, the ones that you see the disinformation going viral and things like that. And so, for such broadcasting-related regulation and supervision, we do have an independent body, the National Communications Commission, the NCC, in charge of that.

But for things that are more point-to-point, that is not broadcasting, and that may actually coordinate with cyber-attacks, phishing, scams, and things like that, we have a lot of purviews on this particular part. And this is not about takedowns or shutdowns or things like that, but rather about preventative measures, making sure, for example, that we're working on a shared SMS sending number so that all the government SMS communications come from a single three-digit SMS number. 

And then, of course, each ministry may bring their own four-digit, like one nine something or one eight something, to the mix. But what's important is that just looking at a sender alone, you can't tell a governmental communication, which is always three or four digits, versus a registered commercial vendor, which is five digits, versus all the scammers, which is like ten digits. So, what we're doing, essentially, is to make sure that in the actor-behavior-content model, instead of looking at the content, which is going to be impossible with generative AI anyway, we go back to the accurate model and make sure that trustworthy actors are easily identified as such.

### Tim Van Name:
Yeah, that's interesting. So, my company, Orbis Operations, we've spent a lot of time looking at that, particularly trying to understand malicious efforts to influence a population. So, one of the things that a really bright analyst who works for me talked about, it sounds very similar, is our need to attribute these accounts. We need to understand the behaviors and actually, to use your phrase, to understand the "why" behind it.

And as we looked at it, he came up with what I thought was pretty clever. He calls it the 1-9-90 model, where you have about 1 percent of people on social media who create content, about 9 percent of people who amplify it, influence it, direct it around, and 90 percent that consume. And we were spending a lot of time looking at the 90 percent. And it's actually the other 10 percent that matter.

### Audrey Tang:
Exactly. And what we're now working on is, again, with the EU, what they have is this idea of verifiable credentials, meaning that when you digitally sign something to prove you're an EU resident or a Lithuanian EU resident, which I am, you can prove you're of a legal age, but you do not have to disclose your actual age. You can prove you're eligible for this and that without disclosing from which nationality you're actually in and so on.

And only by retaining the pseudonymity of the Internet would people, especially journalists and so on, civil society people, voluntarily switch. If this is all real name basis, I don't think it will carry much weight in such digital transformation. But if we get the decentralized identifier and verifiable credentials right, it means that it changes the attrition costs. So suddenly, instead of costing almost nothing to make 10,000 fake accounts, it will cost a lot by physically getting 10,000 people and trapping them into a room or something like that, which is not unheard of, actually.

> (laughter)

### Tim Van Name:
Really? Oh, wow.

### Audrey Tang:
Yeah. So, we just passed a few months ago a new set of laws because of the increased biometric authentication and so on. There are scammers that are just trapping people into large places, sometimes overseas. So, it is actually a real crime, but at least there is a physical trail for that. It's easier to look for. So of course, we increased the penalty for that, but we will continue to double down on verifiable credentials and adopting the ID.

### Tim Van Name:
Yeah, I mean, that's a space I'm really interested in because I like the idea of being able to have a verifiable identity that is also protecting an anonymized persona.

### Audrey Tang:
Yeah, also pseudonymous. Yes.

### Tim Van Name:
I mean, particularly the trend in autocratic countries seems to be the opposite direction, right? Incredibly invasive, which is hurting the disenfranchised and underserved populations even more than they already were. And so, I like this swing in the opposite direction.

Do you think we'll get worldwide adoption or broader adoption?

### Audrey Tang:
Yeah, definitely. I think the EU, especially with their Digital Markets Act and the relevant acts, they are really pushing toward that direction. And mostly I think because otherwise there's no GDPR compliant way to do scam fighting, right? So, they're kind of forced by the GDPR philosophy to innovate this way. And later this year, this August, we will also have a GDPR compliant data protection authority in its preparatory office. And once that forms, the hope is that next year the actual DPA will form and we will seek GDPR adequacy.

And at that point, maybe also interoperability with the eIDAS and other European blockchain and becoming a spiritual European in Taiwan. And there are precedents because Ukraine is not part of the EU yet, but they are working on fast tracks in such integrations. And so whatever Ukraine is going through, probably Taiwan will start something like that next year.

### Tim Van Name:
Oh, that's great. 

### Audrey Tang:
To be more closely integrated.

### Tim Van Name:
Okay. Yeah, so I guess my really my last question, and I really appreciate all your patience with my hundreds of questions. But for a small company like ours that works with the US government, works with international governments and is really passionate about many of the topics we've talked about today, what are your top three priorities and how can we be helpful?

### Audrey Tang:
Yeah, I think you can be helpful in all three. Yeah, I mentioned at the very beginning, the communication resilience. And that is, basically, we've got the same deadline for all the communication resilience endeavors, that's end of next year.

So, not just 700 satellite receivers, not just the local resilience for the public cloud, not just the backups, virtualization of core networks, and so on. They're all converging on the same time point. So, anything that you can contribute to accelerate out any of these arms, that will be very, very helpful. So, this is first.

And the second is this societal resilience to counter FIMI. And I mentioned a little bit about verifiable credentials, DIDs, and so on. But many of this is actually just proper cyber hygiene and awareness in the population to use multi-factor authentication, to keep backups, some very simple ones. And for this, I think, of course, professional journalists are doing a lot of work, but civic journalists, people who are fact-checking the rumors, are long-tapping the rumors they see on the LINE platform and flagging a scam or a swarm. These people are the real antibodies in our society. And we need to improve not just the basic education, which is already doing pretty well, but also lifelong education for senior people as well.

So, there are many legislators that are very interested in any model that works overseas that empower the senior people, because they also want to contribute to be proper cyber hygiene practitioners and advocates. So, if you do have anything toward that general direction, whether it's basic education, textbook curriculum, I think the American CISA also have comic books. They're great. So, anything in that more software domain, that is also something that NICS, the National Institute of Cyber Security, is specifically looking for. So, this is the societal resilience part.

And finally, the industrial resilience part. We didn't cover the semiconductor supply chain, but they do have their own zero-trust architecture standard, the SEMI E187. That is a direct result of the WannaCry incident at TSMC. And so, they learned from that and produced a really top-notch cybersecurity awareness, toolkits, certification, and everything. And because that is broadly compatible with CMMC and the latest NIST recommendations for zero-trust, so some cross-certification would be really nice. Like if the Taiwanese people can, in a Taiwanese lab, pass something that is cross-certified with CMMC or with NIST and so on, and that is more with your DOD experience, something you can probably help us to lay out a feasible plan. 

The end goal is that, whereas we see anything CMMC compatible or NIST-approved as fit for integrating to the Taiwanese zero-trust posture, we want the reverse as well. And we do have our own certification capability. And I think that will massively increase the investment from the private sector, especially the semiconductor tool chain, to cybersecurity. And it will also make the de facto standard established by US and US DOD something that's more international as well.

### Tim Van Name:
Yeah, yeah. No, that makes good sense. And you've given me a lot to follow up on, so I will do my research and revert.

### Audrey Tang:
Excellent.

### Tim Van Name:
Yeah.

### Audrey Tang:
Anything from our international strategist?

### John Scott Marchant:
Tim, are you coming back to Taiwan? What are your plans for the future?

### Tim Van Name:
Yeah, I plan to come back again later this summer and have a number of teammates who've been spending time here trying to understand places of need and areas where we can help.

### Audrey Tang:
Okay, excellent.

### Zach Huang:
Yeah, I think in terms of communication receivers, we should look for something else cheaper to do it as a synergy, because in terms of adding up one more subsea cable or satellite… It's very expensive.

### Audrey Tang:
It's very expensive.

### Tim Van Name:
Yeah.

### Zach Huang:
If you have more information, it's better.

### Audrey Tang:
Right. So basically, we want to work with a plurality of vendors, so we prefer a plurality of cheap and cheerful solutions over one full stack vendor that charges as much, but with one zero day maybe just goes away, right? So, we very intentionally make it such that multiple constellations have to fail until this entire thing breaks down, and all three public vendors of public cloud has to fail before our backups go down and so on.

So, if there are similar small, mobile, and interoperable solutions, we're always willing to add to our existing configurations of either satellite providers, public cloud providers, backup providers, and such.

### Tim Van Name:
Yeah, no, I think that's a space when I was working in our Department of Defense, I was incredibly passionate about. So, we have a program that's called Commercial Solutions for Classified, right? But the idea was taking a number of commercial technologies and layer them together, and that provides you sufficient security to protect classified or otherwise sensitive information. 

But what we used it for as well was a bit of a bureaucracy mechanism to get various vendors to play together and their technology to work seamlessly. So, the idea of the program was intentional redundancy of every point of security. So, if you have one layer of encryption, let's say it's AES-256, you need to have a second layer of encryption that uses a different implementation or a different standard. Encryption is one that's relatively easy. They all seem to layer quite nicely, but when you start talking about identity federation or firewall rules, getting multiple firewall vendors to work together seamlessly was a bit of an effort.

And what we found is, one, the DoD represents a quite significant market for many of those companies, and so they were willing to be participants. But the second is, for many of them, they actually were just looking for someone to be the convening function, because outside of the DoD, we're a small relative to the grand scope of the market, there was lots of places where they saw an opportunity to support a bank that otherwise had a bunch of firewalls, and there was just no convening factor to get folks to play. So, I thought that was pretty interesting.

The second space that I think is really useful, and you talked about sort of cheap and cheerful… Oftentimes, I made an effort when we were awarding contracts to have a number of vendors that were working well together. And we often advocated for what's called in the US was unlimited purpose rights. So, there's something called government purpose rights, where the government doesn't have to pay license fees to use that software in perpetuity. But with unlimited rights, the government actually owned the rights to that software.

And so, one, it allowed us to work a little bit with one vendor and then move over to a different vendor. Maybe this one had specialization in building the identity piece of a solution, and this one was really good at authentication. So, that was one scenario we used it. But the other, on things like the tactical assault kit, which initially was a really military-use case, and now we've released as a civilian-use case. As a matter of fact, ...

### Audrey Tang:
There's a hobbyist group here in Taiwan.

### Tim Van Name:
Oh, is there really? Okay yeah, so the Snowmobilers in Canada is one of the most active groups on our open-source page when we pushed it out there. But what I really love about the TAK product family is that that software has about eight vendors who regularly contribute to it, paid for by the US government. And it’s incredibly robust, it sounds like even here in Taiwan, there is a open-source community. And that to me represents sort of the pinnacle of how software development should happen into the future.

### Audrey Tang:
Yeah, definitely. And I totally agree that this almost forced interoperability between firewall vendors or whatever vendors, that creates the space for open-source community. Because if it's so tightly integrated that it has to be reverse engineered, no community members will even take a look at it. So, I think this convening factor also is an interoperating factor. And I think we can learn a lot from your previous experiences in actually enabling this, not just for the core communication needs, but also just as part of our procurement process. That would be ideal.

### Tim Van Name:
Yeah. And I certainly worked with a number of people much smarter than me in that space and learned a ton from them. But yeah, if I can be helpful, even in just connecting you to the folks who, the TAC product center, the acquisition experience program manager that runs it, it was incredible. Taught me more about the system than I had ever learned. And so those types of people, if they can be helpful. I know this is an area of emphasis for us.

### Audrey Tang:
Yeah, definitely. Thank you for that.

### Tim Van Name:
Thank you.

### Audrey Tang:
All right. Thank you for visiting.

### Tim Van Name:
Thank you very much. Thank you for having me.

### Audrey Tang:
Yeah. And looking forward to more collaboration in the future.

### Tim Van Name:
Yeah, I am as well. Thank you.

### Audrey Tang:
Thank you.

### Tim Van Name:
Great to meet you.

### Audrey Tang:
Great to meet you.

