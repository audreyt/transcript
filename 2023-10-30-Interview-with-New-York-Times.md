# 2023-10-30 Interview with New York Times

### Audrey Tang:
Hi Tiffany.

### Tiffany Hsu:
Hello, how are you?

### Audrey Tang:
Pretty good.

### Tiffany Hsu:
Thank you so much for taking the time to meet with us.

### Audrey Tang:
Yeah, and thank you for accommodating the time differences.

### Tiffany Hsu:
Oh, of course. Yeah, it's all good. I was just in Taiwan and I remember the time difference. So, should we just jump right in?

### Audrey Tang:
Sure.

### Tiffany Hsu:
OK, great. So just as a quick overview, the story that we're looking at examines some of the changes in how Taiwan has dealt with disinformation over the past few years, and we're kind of curious how your office has come into contact with some of those efforts and also how your office, broadly speaking, has worked on the issue of cybersecurity because, as we all know, those are very linked in today's world.

So, I was hoping maybe to start off, you could just talk to us a little bit about, you know, your thoughts heading into this upcoming election, you know, because this is this is a good framing for some of the improvements that have been made in the challenges that people have come across.

So, talk to us, if you can, a little bit about what your office has been doing in the lead up to January and how that represents the changes over the past few years.

### Audrey Tang:
Certainly. So, for us, who have started just a little bit over a year ago, last August, the same day, the same hour that our website went online was also the hour that missiles flew over our head following Speaker Pelosi's visit. And at that day, we suffered more than 23 times compared to the previous daily peak, the denial-of-service attacks, trying to shut down the ministerial websites.

Of course, that didn't work out for the attackers. The stock exchange actually raised that day instead of plummet, as they hoped. But really, cyber resilience against foreign interference has been our main work since the beginning of the ministry. Our slogan is ‘digital resilience for all.’

Now, as for concrete measures, for example, we switched off passwords in my ministry and the two administrations for industry and cybersecurity, respectively, because we understand nowadays with generative AI, spear phishing, phishing attacks, scam, voice cloning, video cloning attacks, and so on, are so rampant and can be mounted at so little cost now that anything that could be copied, actually, would be copied and very convincing, very persuasive scamming, and phishing is just going to be even more rampant now with GenAI.

On the other hand, for example, when I sign my official documents, the FidO app on my phone checks for my fingerprint and an edge detection software, CrowdStrike, checks my phone and CloudFlare analyzes what the phone is doing behavior-wise and so on.

So, by going to three different vendors in biometric, in device, and in behavior, we can actually detect the attack attempts that may have breached one or even two of the three factors, but still mitigate so that it does not laterally move, meaning that it doesn't spread to other systems. And then we can share the threat indicators with friendly peoples.

So, that is one very concrete thing, is to adopt this zero-trust network architecture. There are many more, but I would just highlight this one.

### Tiffany Hsu:
That’s right. So, you talked a little bit about AI and everyone is talking about AI. I feel like that's quite forefront, especially in the discussions of the upcoming elections in the US.

So, I'm curious how your office and the folks that you work with are dealing with the tracing of disinformation that uses that technology, for example. How do you prevent that from spreading? How do you track some of the other forms of disinformation that have become a problem in Taiwan?

You know, we talk a lot about Chinese cognitive warfare in recent years, and there have been some struggles with identifying where exactly that originates. So, talk a little bit about the tracking issue, especially with the advent of new technologies.

### Audrey Tang:
Yeah, so in terms of the actor behavior content distribution framework, ABCD framework, tracking is really at a downstream level, the distribution level. And we are moving upward to the actor and behavior level now. Our main work is not on the content and distribution level now.

The reason why is that GenAI has massively lowered the cost to, for example, imitate members of specific social or cultural groups to falsely represent grassroots support astroturfing. But not only that, but also instead of spreading, they can also do direct message or very small groups and disseminate content in a very precise, but still scalable and targeted, automated way to misrepresent the content.

So, the idea here is not to get caught up in the tracing, like contact tracing, when the virality is this much, but rather to make sure. For example, just a couple of weeks ago, we launched a 111 platform so that all the governmental agencies can very easily send SMS and, in the future, maybe other messages, richer messages with a shared, short number that we work with all the telecoms to ensure that nobody, either domestic or foreign, can imitate that short number 111.

Very quickly, we will go to a norm where if it is a respected agency or institution in the government, in the public sector, they will just communicate with such easy to identify way to authenticate themselves. And no matter how many other messages you receive, that purports to be a municipal government or a central ministry or whatever, that's a scam, that's false, that's imitation. And so, instead of tracing where does those fake SMS come from and so on, we just established a very easy to tell provenance system when it comes to content, which may also be interactive in the future.

So, my point being, as long as we can easily say that, OK, these are the authenticated, FIDO compliant protocols of sending information, everything else can be safely assumed to be probably a bot. And that flips a default because previously default is that people who send you a message, you assume they're human, right? Unless they start exhibiting bot-like behavior. But now there really is no difference between bot-like and human-like behavior now with GenAI. So, we need to flip the default.

So, the ones that you have met face to face and or have common contacts and added to your address book, these are humans. But everyone else that doesn't have a blue tick, that is to say, an authenticated number and so on, can actually be assumed to be a bot until they prove themselves through some authentication or digital signature.

### Steven Lee Myers:
Could I just jump in and ask you to just step back a little bit, because you're talking about AI almost as if it's a given now. And how much are you seeing in, I mean, I guess in the information space broadly, whether it's news or social media, is it becoming pervasive?

I know we've been talking a lot and written stories about it coming, but we haven't really heard of a mass use so far of AI in some sort of disingenuous way. Are you seeing that already?

### Audrey Tang:
There's no robocalls or fraud calls in the US?

### Steven Lee Myers:
I suppose there are, but I don't know how much of it we can directly trace to AI, or the advances in AI recently, have you noticed that? Are you beginning to see its impact?

### Audrey Tang:
Well, I mean, if you mean AI just as in ChatGPT or Claude or Bard, of course, maybe none of them are explicitly a reseller of these frontier AI models, because these have safety measures that prevents them to be used for such purposes.

On the other hand, the technologies I talked about, the voice cloning and so on, many of which are just, you know, in the wild. That is to say, anyone can download and use them for free. And there are also open models with like on Hugging Face and so on that I can just download and tune using my MacBook, which I do since earlier this year. It drafts my emails; it learns my style. I, of course, still read it before hitting send, but it's really getting very good at imitating. So, it's not just the likeness or the voice, but also particular styles of writing and so on.

And so, yeah, I wouldn't use the future tense. Of course, all the frontier like GPT and so on have safety measures, but it is actually, if you look at the latest model like Mistral or Zephyr and so on, it is already exceeding the free ChatGPT in terms of quality.

### Steven Lee Myers:
I guess following up on that, does it seem to have made a marked difference in the threat you're dealing with from China?

### Audrey Tang:
As I mentioned, this is mostly about lowering the cost. Previously, if you want to do precision persuasion or scamming and so on, you need someone who is versed in the local culture to do that. So, you can't always do spear phishing or to do very elaborate scamming calls and so on. It was just expensive.

But now what this generation of AI tool does is not to markedly increase the quality of such scams, but rather to massively lower the cost. That is to say, as long as you have one domain expert and have the expert training the model, then you get maybe 80% of the quality, but essentially for free. So that you can mount like 10,000 simultaneous conversations, each imitating that particular style.

This is the kind of supernumerous threats that I'm describing here.

### Steven Lee Myers:
And are you seeing that ahead of the election now in the election context?

### Audrey Tang:
Yeah. So, in terms of scamming, this has already happened, including voice cloning and messages and so on. Whether it is used in the election context or not depends on the countermeasures that we're taking. Because after all, while the cost has lowered, it is not zero, it is not free. And it may actually backfire if it was identified or attributed that someone is operating such sock puppets and so on.

And so, yeah, recently, I think there is a societal recognition, there's some news about essentially using VPN to fake basically a threat to a certain opinion leader. But it turns out that someone threated themselves via simulated persona online and so on. And that is actually quite a big news here in Taiwan, which is widely reported. I will not go into details. So, I think there is now societal resilience against this kind of operations.

And so, I'm cautiously optimistic that even though the cost has massively lowered for someone who is not versed in a local culture to imitate someone else persuasively under the target culture, we can still have the awareness and societal resilience to counter those operations.

### Tiffany Hsu:
I think to add on to Steve's point about or his question about China, right, one of the themes that we're looking at is whether or not China continues to be as serious of a disinformation and cybersecurity threat as it has been in previous years.

And so, I'm curious if, given the advances in AI, given the kind of voice cloning efforts that you're talking about, given the kind of the mass capabilities that we're seeing now, I'm curious whether or not China continues to be behind a lot of this, or if China is no longer as much of a concern in your efforts and if maybe more of your attention is now focused internally within Taiwan.

### Audrey Tang:
Well, as I mentioned, the 23 times more than the previous daily peak last August was not the only time that this happened. Actually, earlier this year, when Dr. Tsai Ing-wen, our president, visited the US, there was also a very comparable foreign cyber-attack slash interference that happened. The reason why it's not on the news as much was because we defended against it well, but it's not that they didn't try.

So, I think the point I'm making is that the NSC, our National Security Council Secretary-General Wellington Koo, said quite publicly that every day there's millions, I think he said around 5 million, cyber-attack attempts every day. So, when we're talking about a normal day, we're talking about like 5 million or so, a few million cyber-attack attempts. But of course, sometimes it's 23 times or even higher.

So, I would say at the background, of course, the ongoing threat of foreign cyber-attack interference is always there. It's just that depending on the specific events and so on, it may spike.

### Tiffany Hsu:
Got it. So, speaking of President Tsai's visit to the US, you yourself made a visit to the US, if I'm not mistaken, in late September, and you visited AIT headquarters, you talked with US officials on information security. Can you give us an overview of some of the key takeaways of those discussions?

### Audrey Tang:
Yeah, definitely. So, it was right before this October's cyber offensive and defensive exercise or a code, which we organized. And there's 18 friendly countries, experts who join us physically in Taiwan. And we're happy that the US team also worked with us as a red team, meaning that in the simulated, but very real actually, attack on our critical infrastructure, in particular, the water supply system. The US team helped us to send their best attackers and to discover vulnerabilities in a very real simulation.

And so, in addition to finding vulnerabilities and sharing joint defense strategies, I was also in the US to basically push for this idea of race to safety, meaning that the frontier AI labs, in particular, META, but also, of course, Google, OpenAI, Anthropic and so on, need to adopt a cybersecurity mindset and open themselves to open red teaming, meaning that instead of their internal testing before release, there needs to be joint testing, just like the code cyber-attacks, between the labs and even preparedness mechanisms that invites the general public, like a bug bounty, to think of novel ways to abuse those AIs for harm, so that the societal risk can be evaluated by the society. And this idea of race to safety was also quite well received by the people that I talked to in the US.

### Tiffany Hsu:
Yeah, we wrote a story not too long ago about how the White House was collaborating with the DEF CON organizers on their red teaming effort.

So broadly speaking, how has your office in Taiwan, the Taiwanese government generally, helped or mutually helped the US in strengthening Taiwan's cybersecurity in recent years? What kind of cooperative efforts have there been going both ways on this front?

### Audrey Tang:
As you correctly mentioned, it's an ongoing effort that has been going on for quite a while. We have the Digital Economy Forum, we have the ongoing US-Taiwan Initiative on 21st Century Trade, and many other venues where we share the best or at least better practices.

I think one of the contributions we make is that because we're more agile and we have co-leads, the teams that we work together very closely during the pandemic, into a new ministry. That's the Ministry of Digital Affairs, which combines not just cybersecurity, but also platform economy, especially around AI, and also spectrum and e-services, all sorts of different units are now acting as one.

So, when it comes to implementing what we call digital public infrastructures or DPIs, we are more nimble. We can switch to passwordlessness quicker. We can implement zero trust quicker. We can do a comprehensive FidO rollout nationally. We can do a lot of AI evaluation and certification. And in fact, my ministry now also has deployed internally generative AI models for testing and just daily use, chat among the public service and so on. And so, because we move faster, we also discover more dangers or risk or issues and so on.

And so, I think in general, this threat sensing part, we are a contributor to the international conversation about those emerging technologies. And we can also help doing the testing and certification and evaluation, which is going to be an international effort as well.

### Tiffany Hsu:
Got it. Great. Amy, I'm going to pass over to you.

### Amy Chang Chien:
Yeah, so I'm curious to know, like, what have you seen of the evolution of Chinese efforts in launching their disinformation campaigns throughout these years? What makes this year a bit different from last year?

Because we've seen a lot more election campaigns this year, have you noticed anything different this time, like, compared to previous elections?

### Audrey Tang:
Well, I mean, last August was, to me, the first time to see a highly coordinated both information manipulation and also cyber-attack interference. Previously, these two are not as tightly coordinated as last August.

So, for example, when the foreign cyber-attacks have changed the signboards outside of the Taiwan Rail Station to a hate message against Speaker Pelosi, naturally, the journalists would want to check the ministry websites to see what's going on and to maybe clarify the rumor about the ministry has been taken over and things like that. Because, you know, changing a signboard, which is a commercial vendor, is not the same as infiltrating the government service network. But there were just this kind of rumor that says this. But when the journalists checked the ministry websites, it's very slow, or maybe they would have to wait a couple of hours for it to be back up because it was suffering from a cyber-attack, a denial of service. So, there's this compounding effect between cyber-attack and the information manipulation and then denial of service and then cyber-attack. That is like a combo of sorts.

So, of course, we very quickly upgraded our system and mitigated that. In fact, the first official document I signed was a public consultation for how should we just bring in the signboards in the public areas run by, say, the rail station and so on. And so now they're all considered part of the government service network when it comes to cybersecurity management and avoiding harmful products and services.

But back then, I think it was a wake-up call to many. So, I would say since last August to this year, we're also coordinating much more closely within, of course, my ministry, but also the new Cybersecurity Institute, the NICS, or National Institute of Cybersecurity. The NICS works closely with all competent authorities, with all ministries to help them to investigate, for example, major data breaches and so on. And we also, of course, work much more closely with the international counterparts as well, because now we have a competent authority for cybersecurity.

So, yeah, I would say that is just more coordination and more joint drills and defense and so on on our end and in anticipation of even more coordination on the attacker's end.

### Amy Chang Chien:
And another question is, have you seen the Taiwanese civil society changed throughout these years?

Because people notice the importance of fact-checking and having more media literacy after the government started to put more focus on these issues. What's the importance of civil society in these kinds of efforts that you and your team are working on?

### Audrey Tang:
Certainly. I think the idea here is very simple. It's that competence when it comes to media is more important than just literacy. Literacy is when you consume information. Competence is when you help recontextualize to instill contextual confidence to the information, ensuring its integrity.

So, everyone can participate in information integrity work, chief among them, of course, is the professional journalists. So, we work with professional journalists in ensuring that they can access to the digital transformation resources. There is a fund specifically for that set up at Google, where in the talks with META and so on.

So, although, of course, journalism is not civil society, of course, but actually it points to the right direction where both the government and civil society should look at, which is journalism to the infodemic, is like epidemiologists to the pandemic, right? It is information integrity work that's actively not just counters, but actually prebunks to ensure that the information environment is such that people naturally gravitate towards information with integrity instead of information without integrity.

So, this is a general idea. And of course, in my ministry, we also actively work with civil society to ensure that they have the same access to the policymaking context. So, like all my monthly ministerial meeting transcript is open. We open the transcript of not just this interview, but other interviews as well. And important conversations between me and other representatives of the industry and so on. And all in all, to ensure that there is a how and why of policymaking. The context is widely shared instead of just what of the policies made.

And again, this recontextualization helps the civil society to both point out our mistakes and suggest better improvements, but also more fully understand the policy landscape. So, as not to be captured by an oversimplifying message or rage or things like that.

### Tiffany Hsu:
Have you found that the social platform's commitment to information security and to fighting disinformation… Has that changed at all in recent years?

### Audrey Tang:
Yes, so we have amended three acts, not the ministry, the Taiwanese government have amended three acts, respectively around election interference, about non-consensual intimate images, especially synthetic ones, and around investment scams and fraud.

So, just use the last one as example. Currently, say Facebook or any other major platform, if they have this advertisement that is deepfake or shallowly fake to be an investment scam, and people tell them that, you know, this is not me, this is a scam and people flag it, but they still keep it up. They, of course, will be fined after 24 hours if they ignore that and kept it up. Then, you know, there really is no other penalty other than the share liability. So, if somebody gets conned for a million NT dollars, then Facebook would be liable for those 1 million dollars. By re-internalizing the negative externality that is to design a liability law amendment, we have seen that major platforms have paid a lot of attention into the information integrity on those coverages.

And of course, this is not all encompassing, it's just three very specific things. But I hope this financial investment scam is a good example for other countries to follow.

### Tiffany Hsu:
But in terms specifically of your office and maybe your counterparts in the Taiwanese government working with Meta or Twitter or TikTok or any of the other social platforms, has that relationship changed at all in the past few months or the past few years?

Because here in the US, we're seeing some signs that their commitment might be waning somewhat. I'm curious if that's the same in Taiwan.

### Audrey Tang:
I wouldn't say so. I think their commitment was renewed in 2018-19, right after our mayoral election slash referenda. At that time, there's a lot of civil society pressure on them because it was well known at the time that a foreign actor, although they cannot pay campaign sponsorship, can actually buy heavily targeted spamming sponsored advertisement to achieve the same effect, for example.

And so, that was during my service as administrator of a portfolio, so not MODA, just to say it up front. So, at the time, I think those major platforms faced real pressure, as in social sanctions and so on, if they do not comply to the campaign finance norms, which is domestic funding sources only and needs to be clearly published as open data on the ads library and so on.

So, I think Taiwan is one of the first places, if not the first, where Facebook implemented this full civic integrity measure. I think partly because of a very clear consensus between civil society, journalists and the government, and also because of the real threat of social sanction at the time. So, I would say our relationship has been pretty okay during that time up until now.

### Tiffany Hsu:
Okay, got it. So, in the four years since the 2018-2019 period, would you say that societal pressure in Taiwan on these platforms to maintain that sort of information integrity has stayed the same or grown?

### Audrey Tang:
I would say it has grown on specific areas, especially around investment fraud and scamming, which was a real issue in Taiwan and in other countries. And every time there is such a strong societal pressure, they have reacted quite positively, I would say, to the new amendments, to the new laws and so on.

### Steven Lee Myers:
What about Twitter specifically and X? They've been in the news a lot.

### Audrey Tang:
Yeah, I would say X.com is not having a very big presence in Taiwanese politics. Mostly, I think in Taiwanese politics, some politicians do have an X account, but if you count the posts and the reactions they get versus, say, Facebook, or YouTube and so on, it's minuscule. This is just generally speaking, not any specific account.

Of course, I use Twitter all the time, but maybe it's just me.

### Tiffany Hsu:
So, heading into the January election, what would you say in your role as minister are some of the issues, you're most concerned about as relates to disinformation? So, cybersecurity as a potential portal for disinformation, what kind of threats are foremost in your mind?

### Audrey Tang:
Yeah, so I want to give x.com some credit because I sounded a little bit... So, X.com does have a very good idea, that is community notes, partly inspired by the Polis algorithm that I worked on throughout the past few years. Community notes highlight the bipartisan bridge-making, contextualizing narratives, so that every time somebody posts a tweet, only the clarifications that speak to both sides that has a depolarizing effect are highlighted by the community notes algorithm, which is open source and can be independently verified.

So, although, as I mentioned, the campaign politics doesn't use X.com that much, I think community notes in general, not necessarily the specific implementation, but this idea of collective intelligence contribution into clarification is widely shared with the Taiwanese civil society, specifically Cofacts project, which is now also collaboratively training a language model to do this kind of bridge-making and bridge-making narratives and so on. So, I think there's a lot of potential for a more widespread use of community note-like mechanisms when it comes to major platforms.

Now, with that said, our main focus now is just to ensure that the official accounts of our ministries, our government officials are of course not taken over, but also have a shared presence when it comes to say the 111 SMS platform, a shared short URL at gov.tw so that no matter what the original long URL is, it's all shortened into https://gov.tw/something, so a shared presence. And so, because then it's so easy to identify that this SMS comes from the official sources or this short URL comes from the official sources, it naturally made it much harder for imitators to take over the narratives and to falsely lead people to spare phishing and things like that.

### Tiffany Hsu:
So, are there any specific concerns though? It sounds like the issue of making sure that all the government is on the same page and presents as it's on the same page is something that you guys have already thought about and have a plan for, but what are the things that you think could use more work going into this period next year?

### Audrey Tang:
Yeah, I think it's just about agility. During the pandemic, we take pride in getting the newest information from each and every one who want to call the hotline, 1922 at the time, and respond to it in the everyday 2 p.m. press conference. And the new suggestions to the information system to respond to newer variations of the virus are rolled out every week, like next Thursday, next Thursday, and like this.

So, I think the main idea here is just to stay agile and to make a good threat indicator sharing, joint defense, and so on with other friendly democracies. And so, because we're just the first among many elections next year, so I think what we have learned is of value, both I guess the success and not-so-success stories to other jurisdictions who will run elections later in the same year.

### Tiffany Hsu:
Indeed.

### Steven Lee Myers:
If I could just jump in to be a little bit more specific about what's happening now, I mean, are you seeing any kind of interference or what two months away from the election? Are you seeing any kind of activity that raises your alarms, that keeps you awake at night?

### Audrey Tang:
The key performance indicator that I gave to now head of the administration of cybersecurity, previously director general of information system management, Dr. Hsieh, was that she sleeps sufficiently every night and she needs to, at a time, report every day to me how many hours she slept.

And because that is the main battlefield, so to speak, the fear, uncertainty, doubt is designed to keep us up at night so that we don't respond to novel threats with novel defenses. Because if someone doesn't sleep well, then they don't learn, the short-term memory doesn't write to long-term memory, and there's just a repeating of what didn't work or did work previously to the new threats.

So, no, I think we're very much about resilience. It doesn't quite matter if the adversary mounted a successful attack or a successful breach and so on, as long as we have three or more layers of defense, so as to stop them from laterally moving and they would then expose themselves and wasted a new zero-day attack at that. So, we're designing with resilience in mind, not particularly about not landing any cyber-attack or not landing any breaches and so on, but rather that these are contained and also there's lesson to be learned whenever there's a successful attack. So long story short, I still sleep for eight hours every night.

### Tiffany Hsu:
Very glad to hear that. I'm done with all my questions. Amy, Steven, anything from you?

### Amy Chang Chien:
I'm good.

### Steven Lee Myers:
Yeah, no, that was my question that I just asked, so…

### Tiffany Hsu:
Okay, Audrey, is there anything else you'd like to add that we maybe haven't touched on?

### Audrey Tang:
Yeah, I understand you asked all about the information layer, but we have also been preparing for earthquakes and very large earthquakes and so on, the kinetic layer. And earlier this year, the subsea cables between Matsu and Taiwan, both of them were cut within the same week by vehicles who "accidentally" dropped anchors and they're all flying the PRC flag.

So, I think communication resilience, although we didn't talk about this, is equally important because if, let's say, somebody received a foreign information manipulation or interference and right afterward, the internet is down, then that actually is another of those hybrid or coordinated attack scenarios that we didn't get to cover.

So, there's a lot of work in my ministry on this communication resilience, working with not just microwave stations, but also low-Earth orbit, like OneWeb; mid-Earth, like SES, ensuring that our three major telecoms, if only one is left in a region, then there's a seamless mobile disaster roaming. So, as to ensure that information still flows and context can still be transmitted. And that speaks also partly to why the 111 was designed as an SMS, which is a very low bandwidth way to keep people informed, even if the telecoms are physically damaged or taken down and so on. So, there's this whole branch of communication resilience that we're also focusing on.

### Tiffany Hsu:
That's really fascinating. There was actually a small earthquake right as I was leaving and I was staying right next to 101, so I got to see how strong 101 was.

Well, great. I think this about covers it. Thank you so much for taking so much time to chat with us, Minister. I really appreciate it.

### Audrey Tang:
Thank you. Really good questions. Thank you. Live long and prosper.

### Tiffany Hsu:
Thank you so much. Take care.

### Steven Lee Myers:
Thank you.

### Amy Chang Chien:
Thank you.

