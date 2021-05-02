# 2019-11-27 Hernâni Marques and David Lanzendörfer visit

### Hernâni Marques：
Yeah.

### David Lanzendörfer：
Yeah, sure.

### Audrey Tang：
All right, so, let us get started.

### Hernâni Marques：
So, hello! Thanks a lot that you have time for us. I thank Renat that he built the contact. I’m Hernâni Marques. I am active in different projects. For example, in the Chaos Computer Club Switzerland, which is a hacker organization. It was first founded in Germany in the 1980s. Then in Switzerland, we also built such an organization.

### Hernâni Marques：
We are fighting a lot for privacy, freedom of information, and also trying to avoid the government to like introduce e-voting – at least at this stage. Because we do not see how it can be done in a way that you can also trust the results in the end, especially…

### Audrey Tang：
What about collecting signatures?

### Hernâni Marques：
That is something I wanted to ask you. That is called e-collecting and the government decided they have…

### Audrey Tang：
That might be easier.

### Hernâni Marques：
Yes, I think, because privacy is less of an issue, because – in Switzerland, at least – you write your name, your address, and your signature on paper.

### Audrey Tang：
It is not private to begin with.

### Hernâni Marques：
Yes. I mean, att least, if you do it in a way that you sign against your commune, so at the very low level, and then they like…

### Audrey Tang：
Do a cryptographic verification of it.

### Hernâni Marques：
Yes. Basically, they need a public key that they verify… if you have it. Then you can discuss how to do it exactly.

### Audrey Tang：
We are going to do it next year… for the e-collecting.

### Hernâni Marques：
That is interesting. That is also your opinion – that we should start with such things?

### Audrey Tang：
Collecting? Of course, because it is less secret to begin with.

### Hernâni Marques：
OK, great, yeah. The other thing, with this e-voting thing – at least if you do it with the secret ballot – anonymous in the end… imagine that Hong Kong would now make free elections with an e-voting, which is wrong… which contains components, let us say, of Mainland China or so. How trustworthy would the results be? \[laughs\]

### Audrey Tang：
It would require two things. One, you would always have the in-the-place vote to override the e-vote. That is how Estonia does it, so that, if you’re coerced in some way, you can go and reverse your vote.

### Audrey Tang：
Second, it requires a cryptographically secure and cross-partisan trusted registry of people who can vote to guard against vote stuffing. Both, I think, is not primarily a technological problem. It is a social trust problem.

### Hernâni Marques：
That is also a question we have, because, I mean, it is quite obvious and clear that Taiwan is threatened by Mainland China, let us say. What is your take on the discussions which are taking place in Europe, including also a little bit of Switzerland – but there they are, let us say, less ideologic, in a way. So, there is the discussion with…

### Audrey Tang：
You mean the cybersecurity discussion?

### Hernâni Marques：
… I mean, there is discussion with Huawei, like about components from Huawei in 5G and stuff like that.

### Audrey Tang：
We do not talk about specific companies, but five years ago, we decided – as occupiers, but also as the cabinet collectively – that we do not allow PRC components in our 4G network, core or periphery.

### Hernâni Marques：
That I read in your transcripts. How do you achieve that? That is about supply chain security and stuff?

### Audrey Tang：
Of course. It is also about making sure that no part of the supply chain can get in undetected. It is also a lot of, in our agency of what we call BSMI, B-S-M-I, which is like NIST, it must also make not only a blacklist of, “These are PRC components,” but also a white list, like, “These are the lab-tested components that are good for use in the telecommunication infrastructure.”

### David Lanzendörfer：
Maybe I can explain a little bit. Taiwan has a lot of manufacturing capabilities, a lot of manufacturing plants. Most notably, TSMC, which is one of…

### Audrey Tang：
The main semiconductor…

### David Lanzendörfer：
Yes, it is the market leader.

### Audrey Tang：
By far, yeah.

### David Lanzendörfer：
Taiwan is perfectly capable of manufacturing their own telecommunication components, also, at semiconductor level.

### Audrey Tang：
The full stack.

### David Lanzendörfer：
That is actually why I am here, but we can come to that later. I will, Hernâni…

### Hernâni Marques：
No, you can do it now. That is the point. We think that – and we are also saying that in public all the time – we need public money, public code. That is like from the Free Software Foundation in Europe, that is like I think what they said. I think you are already working in that direction in Taiwan.

### Audrey Tang：
Yeah, we are more about public money, public data, and API, because when we realized that when people publish code and we will rely on a proprietary database, or rely on an existing monolithic code base that – even though technically open – nobody can quite penetrate. It is like the early Mozilla code base. Being open source really does not mean much.

### Audrey Tang：
We say, from the very beginning, that open source is good, and we use Linux Foundation standards, like Spedix to make sure that people can waive their warranties if they use Open Source. The more they use, the less responsibility of warranty you would have to take, so they are incentivized to use Open Source.

### Audrey Tang：
What we are really requiring in procurement is that we say discriminating against robots is like discriminating against people with blindness. Open API is a machine-readable and writable part of a website. That is our way of doing it.

### Hernâni Marques：
You also have this idea to make the government machine-readable?

### Audrey Tang：
Of course… and writable too.

### Hernâni Marques：
That is nice, because that is something which the CCC is saying since the 1980s: the government must be transparent, and the people need to have privacy…

### Audrey Tang：
Yeah.

### Hernâni Marques：
…nowadays, that is also a discussion point we might enter into – it is turned around. The people are fully transparent. Even here, we have everywhere… like cameras everywhere. We have to give our fingerprints when we enter the country.

### Hernâni Marques：
So, also here you see such things everywhere. Switzerland, of course, does it everywhere. Not to start about Mainland China…

### Audrey Tang：
In Taiwan, though, when the Ministry of Interior collects your personal data identifiers for entry purposes, they must not share with any other ministry.

### Hernâni Marques：
And technically, I mean, the components are also ensured that they are not from the US or from PRC?

### Audrey Tang：
There is two things. First is the communication component, which is the most important part. So, data is either like stored only locally, not transmitted anywhere, in which case, the manufacturer does not quite matter as much. And the second thing is that if there is communication component, these are lab-tested so that it only goes to the destination that it is intended to.

### Audrey Tang：
It must not cross ministerial boundaries. Unlike in many government where there is a single data processor shared by all the different parts of the government, here, each ministry gets its own DPA, and they must not share raw data. That reduce the tech service quite a bit.

### Hernâni Marques：
OK, because Switzerland failed there. There was a WikiLeaks revelation where it was written that certain biometric readers, they have for biometric passports, were like subverted by the CIA. Then the government even confirmed it in parliament, and there was a left-wing politician, Balthasar Glättli, asking that… if that is true. They basically confirmed it, but could not provide any means how to counter it now.

### Audrey Tang：
I see.

### Hernâni Marques：
OK.

### Audrey Tang：
That is why our next generation of PKI card, which was made by the Ministry of Interior with contractors, is now actually made by the National Mint, the same agency that makes the bills, the paper money. They have their own, very isolated place. It actually takes longer, costs are higher, but we think it is worth it.

### Hernâni Marques：
Do you want to talk a little bit about Libre…Silicon?

### David Lanzendörfer：
Yes. What, I do not know, have you seen my congress talk?

### Audrey Tang：
Mm-hmm.

### David Lanzendörfer：
You have watched the congress talk?

### Hernâni Marques：
Really? OK, cool.

### Audrey Tang：
Briefly.

### David Lanzendörfer：
I have seen a TED talk from you. Nice talk, too, thanks – especially the strategy on how to organize funding. \[laughs\] So, it is really laisser-faire. “So OK, it went wrong. Thanks for the investment.” \[laughs\]

### David Lanzendörfer：
“Maybe next time.”

### Audrey Tang：
Yes, “thank you for your contribution to the public good.” It is like a lottery in reverse.

### David Lanzendörfer：
Yes, it is a lottery in reverse, exactly. I like that thought. The situation we have – what is LibreSilicon first? First, what is it? In general, to make it precisely, it is meant to be something like a meta foundry, meta factory – so that we can standardize manufacturing, the flow, which is not really fixed to certain machines, but it is really portable. This way, you can actually collaborate.

### David Lanzendörfer：
Developers from many countries can collaborate in designing IP cores – components in the chip, like telecommunication parts.

### Audrey Tang：
Yeah, exactly.

### David Lanzendörfer：
The entire design flow is open, so you can basically follow the design and can verify that these components are not compromised. For companies supporting LibreSilicon, the advantages, right now, they have to have money on the side, not only investment for the factory equipment, for building the factory.

### David Lanzendörfer：
They also need to invest money in R&#x26;D to develop their library to have components to develop the chips. LibreSilicon would turn this around by 180 degrees. You suddenly would have a continuously organically growing IP catalog, and foundries actually get paid to silicon-verify part of these components going into the catalog.

### David Lanzendörfer：
It would be already… for companies from a business perspective… it would be like an absolute improvement. Then the other thing is, of course, the security increase. That is from that thing, so we have improvement of security… of reliability of the chips. It is scalable – OK, that is my achievement, I made the process scalable. We use ULSI, but that is details.

### Audrey Tang：
I want those details, because people will read the transcript.

### David Lanzendörfer：
Oh, so I should bring details?

### Audrey Tang：
Yeah, just whatever details that you think that set yourself apart.

### David Lanzendörfer：
Oh, yeah. Our process is actually antinode. There has been something called scalable CMOS in the open circuit design from Tim Edwards. There has been something like LibreSilicon, but only on digital level. It is called MOSIS design rules. We actually went one step further, and we said, “OK, now, we design, actually, we specify how a process flow has to look like.” That is the layers of the die.

### David Lanzendörfer：
That is the process step layers. That is the mask set we specify. You are free in how you manufacture the masks, because exposures, separate exposures are different in any fab. But you have parameters: for that is PearlRiver. The PearlRiver test wafer basically allows you to basically check whether your manufacturing line still is calibrated correctly to fit all the LibreSilicon parameters.

### David Lanzendörfer：
What you do when you manufacture for LibreSilicon, the first thing, first, you send through some wafers with the PearlRiver and measure out all the test devices over the wafer.

### Audrey Tang：
Right, it is a specification test that tested the end product, not the nitty-gritty detail of…

### David Lanzendörfer：
Yeah, so, actually, you can characterize every single manufacturing step of the process. Then something… you can actually automatize that with needle beds.

### Audrey Tang：
I see.

### David Lanzendörfer：
It is really, you let it verify automatically – you have a needle bed for your PearlRiver wafer. You put it on there, you measure out all the analog parameters, and when everything is fine, then you start producing.

### Audrey Tang：
So, when somebody joins as a producing partner – say, the Hong Kong UST – they just download these processes as a spec?

### David Lanzendörfer：
They download the process spec. They adapt it to their machines. They make these mask sets from the online GDS2 files on git (Revision Control System), and then they can calibrate all the recipes until they match all the analog parameters.

### Audrey Tang：
Got it.

### David Lanzendörfer：
Problem is right now, that is why I came – I flew here from Hong Kong. I went to Hong Kong for the R&#x26;D, because in Hong Kong, there was in HKUST – the only available lab you could rent in Greater China, excluding Taiwan, which would allow external users to actually rent a lab and…

### Audrey Tang：
And build things.

### David Lanzendörfer：
…build things like that. Now, there is… kind of… well, things happened. Things happened. Things, well, initiated, accelerated oxidation…

> (laughter)

### Hernâni Marques：
You mean the protests?

> (laughter)

### David Lanzendörfer：
Yes.

> (laughter)

### Hernâni Marques：
You can say it. You are not in Mainland China.

> (laughter)

### David Lanzendörfer：
OK, things went up in flames.

### Audrey Tang：
We are doing much better here, according to Freedom House. You can say whatever here.

### David Lanzendörfer：
And now, the lab is closed. I am right now mostly running between Hong Kong… because I am too lazy to move back to Shenzhen… between Hong Kong and Shenzhen. In Hong Kong, I do…

### Hernâni Marques：
Personally, I think Shenzhen is just… I mean, if you say, “We are producing libre hardware,” in the first place… I would have a trust issue already. So, the question is, how can Taiwan help? Can Taiwan help? \[laughs\]

### Audrey Tang：
Well, of course, Taiwan can help.

> (laughter)

### David Lanzendörfer：
Can I ask for help? Our situation right now is: this lab is not available. I now am in a situation where I have the difficult choice to make. The lab is broken. I have three choices. Because we applied for funds, the donation fund from NLnet that should come end of the year – with that, we could rent a lab. The problem is, right now there are no labs available in Macau, Hong Kong, or Mainland China.

### David Lanzendörfer：
The semiconductor manufacturing in Mainland China is super paranoid. The manufacturers… they will not even let you close to the fab. That is a problem. I found an alternative lab in Portugal. So now, I am kind of torn between an unlimited flow of “pastéis de nata”…

### Hernâni Marques：
What?

### David Lanzendörfer：
Or have you noticed this little…?

### Hernâni Marques：
Oh, “pastéis de nata”?

### Hernâni Marques：
In the transcript… I will make sure that we can write it correctly.

> (laughter)

### David Lanzendörfer：
Hey, Duolingo sucks a little bit with recognizing my pronunciation.

### Hernâni Marques：
Or Taiwan.

### David Lanzendörfer：
Or Taiwan, exactly.

### Hernâni Marques：
Taiwan used to produce…

### Audrey Tang：
Have you talked with these people, with Andes? They are doing very similar things.

### David Lanzendörfer：
Yes, there are multiple folks rising.

### Hernâni Marques：
They are producing here?

### Audrey Tang：
Yeah, they are producing here.

### Hernâni Marques：
RISC-V?

### Audrey Tang：
Yeah.

### David Lanzendörfer：
Do they have a lab? What I would be interested is… from Taiwan… I have multiple options, which I would like to check what of those are possible. One option would be that we could use one of the labs here. Or maybe that some department in Taiwan basically picks up LibreSilicon as a project of their own, which would be a total jackpot for me, because I smoke…

### David Lanzendörfer：
…walking around in a clean room an entire day…

### Audrey Tang：
Aha.

### Hernâni Marques：
Too much information. \[laughs\]

### David Lanzendörfer：
Yeah. For me, it would actually be a super jackpot if someone else would run around in the clean room in a bunny suit.

### Audrey Tang：
OK.

### David Lanzendörfer：
That would make me even more mobile. I could take some holidays, go to Brazil, hang around there a little bit. It would be cool.

### David Lanzendörfer：
A), just a lab, or B) a lab plus funding, or C) you take it over. That is like those three things, which I would be interested if any of those three things would be possible.

### Hernâni Marques：
It would be collaborative, anyway.

### David Lanzendörfer：
Yes, it would be collaborative, anyway. My company actually… so, I have a company registered. You somehow have to write invoices and get taxed, so I have a company there in Shenzhen.

### Audrey Tang：
Lanceville.

### David Lanzendörfer：
Lanceville Technologies. The logo is by the way… my family name, my German family name, literally translated into Chinese. I am, that is also a problem why I cannot just run away…

### Audrey Tang：
Lanzendörfer, yeah.

### David Lanzendörfer：
Lanzendörfer, yeah, Lanceville.

### Audrey Tang：
That is right, yeah, “Lancen,” of course.

### David Lanzendörfer：
Yeah. \[laughs\] That is the basic situation right now. I do not have a lab available. The entire R&#x26;D at the moment for LibreSilicon is on hold, because the universities are closed, including the university where the lab is we need, because of the protests.

### Audrey Tang：
That means you are in quite a situation. \[laughs\]

### David Lanzendörfer：
Yeah. Do you know “Firefly,” the first episode where [Malcolm Reynolds looks up, and the Alliance comes](https://youtu.be/PLIabkrsDps?t=260) ? That is how I basically felt…

### David Lanzendörfer：
…that was my mood when I saw that HKUST was closed.

### Audrey Tang：
Right. “You can’t take the sky from me.” \[laughs\]

### David Lanzendörfer：
Yeah, “Take my love, take my land.”

> (laughter)

### David Lanzendörfer：
OK, we are all [browncoats](https://firefly.fandom.com/wiki/Browncoat) here.

### Audrey Tang：
Yup, we are all friends here.

### Audrey Tang：
In any case, Andes is not by their own. I think they have this Open Source RISC-V alliance. They are working with MicroMedia Tech and so on. They are taking, of course, like 5G chip, because they can add their own instruction set.

### Audrey Tang：
That is what the customers are super careful about, of not yielding into the wrong fab or the wrong control, because they can also add their own instruction set into the middle. \[laughs\]

### Audrey Tang：
I would suggest, actually, you look at the existing open chip players in Taiwan, because they have now also to navigate this post-trade escalation landscape.

### Audrey Tang：
Where they want to keep taking orders from both sides, but both sides also do not want any of the process to be monitored or interfered by the other side. I think they are solving a structurally similar problem as you do. Whether the technological details can agree or differ, I really do not know, because I heard you describing that, but I do not really quite know their existing process.

### David Lanzendörfer：
Do you have like contacts with them? Maybe you could introduce us?

### Audrey Tang：
Feel free just to CC me in your email. That is the easiest way to do that. I do not know the person, like in-person. I know more the Minister of Science and Technology people, when we built this National Center of High-Speed Computing extension that runs Kubernetes, Docker containers.

### Audrey Tang：
It is basically the same technology as the public clouds, but we want to run it on premise, cheaper, better, energy efficiency, and so on. There were some talks with NVIDIA and things like that. I am more interested, and also more close to the ministry people that are interfacing with these people, but I am not directly connected to the private sector players.

### Hernâni Marques：
What is the name of that professor who supported you? He is from Taiwan.

### David Lanzendörfer：
Ah, Professor Lee. Here, I have his name, wait a second. That is…

### Hernâni Marques：
In the meantime, coming back to the that voting thing, how do people of Taiwan, if they live abroad, vote? That is always one of the main…

### Audrey Tang：
I do not know this person…

### David Lanzendörfer：
He is a professor. He is the guy who runs the HKUST Lab. He is from Taiwan. He is very proud of Taiwan, let us just say…

### Audrey Tang：
OK, well, there is a huge community of semiconductor-making, because Open Source silicon is, frankly speaking, a newer idea, as compared to Open Source Software. The players are there, but they do not derive most of their revenue from this line of work.

### Audrey Tang：
You find many people who are curious, interested, or even dipping their toes in the water, so to speak, but there is no names ringing in my head that says, “Oh, this company is totally devoted to LibreSilicon ideas.”

### David Lanzendörfer：
The problem with LibreSilicon, as such, is the mindset in the industry.

### Audrey Tang：
I know.

### David Lanzendörfer：
I noticed, really, really… except RCL Semiconductors, and they are a semiconductor factory in Hong Kong. Just recently, they built a new factory in Shenzhen. They now moved their equipment over there and go online. I think they are actually online already, or they go online soon with the new line, which has a higher throughput.

### David Lanzendörfer：
Their CEO is a really open guy, and their engineers are really, really, really good. I talked with those guys, and I love it when I have a conversation with someone… I walk out, and I feel really stupid, because he is so smart.

### Hernâni Marques：
I think the problem here is incentives. You know that GDPR thing of Europe, where they are now incentivizing to create privacy-preserving technologies? Probably, we need a similar thing.

### Audrey Tang：
Virtual diodes?

### Hernâni Marques：
Yes, probably we need a similar thing also for the very basis of our ICT infrastructure. We just say that we require that critical infrastructures are built upon, let us say… open components as most \[much\] as possible. Then the industry perhaps starts to provide such things.

### Audrey Tang：
There is a difference between open components and cybersecurity lab-tested components. Mostly, currently, the international standard is toward this side of things, rather than this side of things, like battle-hardened…

### Hernâni Marques：
Perhaps we can change that, if federal governments…

### Audrey Tang：
I totally support this view. I am just saying that this is in a very early era, like back when Free Software were just forking into Open Source. We are at that stage… We do not have the equivalent of Mozilla joining yet.

### Hernâni Marques：
Yet… yeah.

### David Lanzendörfer：
I think the main problem is how to adjust costs. If you discovered a software bug, you just fix it, recompile it. With hardware design, if you have a problem, then you have to make a new PCB, manufacture a new PCB…

### Audrey Tang：
Yeah, I see that.

### David Lanzendörfer：
…also parts, and pay for the entire assembly. Now, we come to silicon. Silicon, if you have a problem, if you layout and then you have to pay another 2,000, 4,000 US dollars to make a new mask set… it is even more expensive. Then you have the entire operational cost. For instance, Professor Lee, he gave me an overview about the costs they have in the university lab.

### David Lanzendörfer：
Let us say the rent we pay is actually already a discount, I estimate. I really guess it is government-funded. The only way that actually can happen… LibreSilicon… in the long run would be if a government would say, “OK. You know what? It has enough of incentive. We have enough of incentive to actually take this project over and do it,” because private companies never will do that.

### Audrey Tang：
Back before Mozilla spawned, before modern version control, before modern continuous integration, the cost for software forks is not lower. It is arguably higher, if you count in hourly rate. Many proprietary companies then did not join the Free Software movement, not for ideological reasons, but just the economy did not justify.

### Audrey Tang：
I think it is only when modern version control system and continuous integration took over… do people actually switch.

### David Lanzendörfer：
I think that is…

### Audrey Tang：
Including Microsoft nowadays, which runs GitHub.

### Hernâni Marques：
Yeah, and SCO Linux who started to to sue other people, because they wanted to introduce communism, or whatever. \[laughs\]

### David Lanzendörfer：
Yeah, I think the problem is however, with semiconductor manufacturing… really, is that these fixed costs you have with operating a factory. They cannot be fixed with some version control. It is just really that programming just costs so much for a little. The same goes for phosphorous, chlorine, and equipment.

### David Lanzendörfer：
Actually, me, as Lanceville Technologies, we actually already talk about making a maskless lithography system, which uses an LCD, based on some draft – the prototype from Samsung, which brought us to this idea. I read some papers on how to do it, and we discussed in Mumble last Sunday… that could actually be a product we could produce as company and sell.

### David Lanzendörfer：
That would actually eliminate the need for mask-making.

### Audrey Tang：
I see that.

### David Lanzendörfer：
Then you still have the fixed costs of running a lab. That means having the air pumps. The air does not pump itself through the HEPA filters. You actually have to have actual air-con, airflow planning. The operational costs of a lab just can go so low.

### David Lanzendörfer：
You can tune something there… you can tune something there… but there is not this magic solution – this git hammer, right? – which makes the silicon suddenly super cheap. It has a certain cost. I think the only way, and I tried now…

### David Lanzendörfer：
…I tried to convince governments. Now, I talked with German governments and the Shenzhen administration, everywhere and everyone…”Everything Free and Open Source, no intellectual properties? Where is the business case? Get lost. There is the door.” Right?

### Audrey Tang：
I read Holok’s very glittering Medium post of your ideas. He is certainly not arguing based on the economic return, capitalism point of view. He is arguing from this community empowerment point of view, and the funding will come essentially from crowdfunding and things like that?

### David Lanzendörfer：
We tried that, too.

### Hernâni Marques：
Yeah, but you did it not that good, to be honest. You need someone who is really able to run a campaign in the right way, and then you might find people from there.

### Audrey Tang：
Yeah, yeah.

### Hernâni Marques：
Perhaps you can also help…

### David Lanzendörfer：
Yes, that is what happened here. Either it is governmental help, investors, or crowdfunding. At the end of the day, we just need a lab cooperating with us, right? For now, I have been running around. When I do not find someone to run around instead of me in the clean room, in the bunny suit, then I have to be there where the clean room is. That is why basically… how I ended up in Hong Kong. Right?

### Audrey Tang：
Well, I mean, you are already working with a professor, although I do not know him personally. There are, of course, semiconductor device labs in the NTU and many other universities around Taiwan, of course. The academic connection may just be enough, if you are just finding an HKUST alternative, rather than a full partner that will drive this idea forward. So, that is two different stages of things.

### Hernâni Marques：
What about cyber defense institutions in Taiwan? Because in Switzerland, there is, for example, MELANI. That is… in German… for “Meldestelle für Analyse” and whatever “Sicherung”… so “Informationssicherung”. That just means they are observing what is going on with malware. And also, if there is an advanced attack – an APT kind of thing – then they analyze what is going on. That happened already several times.

### Hernâni Marques：
And especially in the last two years, with all these Intel issues coming up with names like Meltdown and whatever… \[laughs\]

### Audrey Tang：
Yeah, yeah.

### Hernâni Marques：
…They even wrote in a half-year report – I think, last year – that the hardware is basically broken which we use. We should like create everything ourselves, or we just need to recreate. So, this is the question here.

### Hernâni Marques：
So if governments, at least some parts of it, start to realize that we are lie doomed, in a way… at least, in the long run… or already now, in certain cases…

### Audrey Tang：
You are not talking about Climate Change now?

> (laughter)

### Hernâni Marques：
I think we also need a digitalization Greta Thunberg, like seriously. It cannot be that \[these\] things happen. Entire projects of the Swiss Confederation for example… just break down… e-voting was running for 20 years, and now, it is dead. They are trying to revive it.

### Audrey Tang：
We are not even trying, because we like our paper tallying process when election person knows. We like the fact that you can live-stream the tallying process. That is a very good way to generate social trust.

### Hernâni Marques：
You even do that on a…

### Audrey Tang：
Presidential election and so on.

### Hernâni Marques：
You live-stream all the people like counting that by hand?

### Audrey Tang：
We allow people who independently audit whichever part that they are in to live-stream and/or record the tallying process. And that generates a huge amount of social trust.

### Hernâni Marques：
Yeah, of course. What also exists in Switzerland in several cities, like Bern or St. Gallen, is that they use e-counting. That means they just count paper with OCR scanning or so.

### Audrey Tang：
Yeah, yeah and they cannot connect to the Internet. They can be randomly sampled and audited.

### Hernâni Marques：
Yeah, well, there was lots of criticism that this stuff is all proprietary and that it is not well-done, but what the government is now enforcing, at least, is that you make a statistical control. If you have enough people who voted, you can, of course, like count… let us say, 1,300 paper ballots by hand and then see if there is a big difference to what the screen is showing for the whole thing.

### Hernâni Marques：
If that is the case, if the difference is too big – of course, you need to define which difference is allowed – then you need to recount everything by hand. I think like that, it is more or less acceptable, but you can only do that in big cities, not in small ones, because that is statistical non-sense.

### Audrey Tang：
I agree with that analysis.

### Hernâni Marques：
That is the thing we have there, and otherwise, it is just a mess. Switzerland is a mess. It has a reputation as a stable and great democracy, and people vote four times a year on a federal level and stuff like that, but there are no real standards, not even for the paper voting area – in a way that you can always have trust. But of course, if you want to rig the whole thing, you need a big conspiracy.

### Hernâni Marques：
We think it is not very realistic to compare that with something like e-voting, where you have centralized attack vectors…

### David Lanzendörfer：
Especially Switzerland, also with this image of, “Yeah, we stand independent here.” Then the US comes, “Hey, can we make a spying post?”, “Yeah, easy.” \[laughs\]

### Audrey Tang：
You mean like a monetary price?

### Hernâni Marques：
Or, a little bit like in Switzerland, where they… have military or some surveillance posts… or something in Taiwan around…

### Audrey Tang：
I am not aware of anything like it. We have a bilateral training framework (GCTF), that Japan also joined. It is more of a mini-lateral thing. We also do like drills for cybersecurity, where we invite like-minded countries to attack our financial system \[laughs\] and do penetration testing and so on. I do not think it is at a price. It is something of a common good.

### Audrey Tang：
We want to establish the common cyber norms. We understand no jurisdiction can establish norms by themselves, and so, we host those kind of norm-setting activities together.

### Hernâni Marques：
And what about the undersea cables? Did you analyze if they are perhaps…?

### Audrey Tang：
I think our cybersecurity department does that. There is a dedicated National Security Council unit that cybersecurity department interfaces with.

### Hernâni Marques：
They are searching around Taiwan if there are people trying to…

### David Lanzendörfer：
Cut the cables. I mean like actual mechanical other people snorkeling down the undersea cables.

### Hernâni Marques：
\[laughs\] I mean, “cut the cables” would be to destroy availability.

### Audrey Tang：
I do not know too much about marine biology. I know there is 10 percent of the world’s marine biodiversity now in our sea areas…

> (laughter)

### David Lanzendörfer：
Are there water rats… I mean, recently, the rats came, for Estonia’s e-government.

> (laughter)

### Hernâni Marques：
You mean the animals are coming around Taiwan now?

> (laughter)

### Audrey Tang：
Just a few months ago, electricity here was cut by a squirrel at one time. There are non-human forces, is what I am saying. \[laughs\] In any case, of course, there are monitoring activities, but these are our national defense and security. That is directly reporting to the president. I do not know about these things… beyond what is already reported by journalists.

### Hernâni Marques：
But concerning the law, in Switzerland, there was a reform of the Secret Service Law. They introduced instruments of mass surveillance concretely. Concretely, they introduced selector searches…

### Audrey Tang：
Backdoors?

### Hernâni Marques：
Yeah, no, that’s not it. They also introduced that you can use Trojan horses, GovWare, state malware, let us say, to bug computer and stuff… so they can do also that.

### Audrey Tang：
Wow.

### Hernâni Marques：
That is already…

### David Lanzendörfer：
Way beyond.

### Hernâni Marques：
If you consider that, if they want to enter into a system which is well-secured, they need to buy zero-day exploits. Then they have knowledge about how to attack systems.

### Audrey Tang：
Yeah, I see what you are saying.

### Hernâni Marques：
Also, these MELANI guys, for example… what will they do? Because they are not really independent of the Swiss Secret Service, which is called NBD, “Nachrichtendienst des Bundes”. They are not really independent of that thing. If they know that the NBD has like zero-days on stock, and they can use them to enter into some Linux boxes or Windows systems, how do they go about it?

### Hernâni Marques：
I mean, they would have the job to tell to several government agencies, “Sorry, we know that you can be attacked. There are lie zero-days with remote exploit capabilities and stuff like that.” So, that is like a contradiction there.

### Hernâni Marques：
The other thing I mean – with mass surveillance in that sense – is that they can search like the data flows which go through fiber-optic cables, which pass through the borders outside Switzerland: they do that by forcing the ISPs to give them… well, yeah… the bulk data, basically… so that they can run selector searches over it.

### Hernâni Marques：
That means, like words or other kind of patterns. The question is, is Taiwan also engaged in such…

### Audrey Tang：
You mean, at the metadata level?

### Hernâni Marques：
No, in Switzerland, it is both. It can be hard selectors, if you know like “These email addresses are communicating, let us search for that kind of stuff.” Then, of course, you pass through everything, anyway… so it is a “needle in a haystack” search, what you are doing in the end.

### Hernâni Marques：
They can also be , like the content search, so-called. That is what the Five Eyes call it, soft selectors. They can do both, hard selector search and soft selector searches. We know that the false positive rates are catastrophic, of course, but they are doing it. And the question is, is Taiwan also engaged in such practices by law, or at least…

### Audrey Tang：
What you are describing would be classified as intelligence work. It will be just regulated by the National Intelligence Work Act.

### Audrey Tang：
At this time, as far as I know, the so-called cybersecurity forces is not part of the intelligence work, which means that they cannot, by law, just order them to do anything like that.

### Hernâni Marques：
OK.

### Audrey Tang：
There are some talks in the parliament to organize these two units together, which, if not by law, at least will by organization to make this easier to do, for national defense reasons, of course. Because this is in the parliament, and their parliament is still running now, as a minister, I am not really constitutionally encouraged to argue for or against a parliamentary proposal.

### David Lanzendörfer：
Another question! I noticed… we noticed, Hernâni and I, since we arrived… there is an awful lot of cameras everywhere.

### Audrey Tang：
Oh, yeah, a huge amount.

### David Lanzendörfer：
So, how, ehm… camera-wise, it is kind a density like I am used in Shenzhen, Macau, and Hong Kong.

### Audrey Tang：
There is a huge amount in public roads, yes.

### David Lanzendörfer：
I guess or better, I hope… at least… that at least the handling of the imagery data…

### Audrey Tang：
Yeah, the data controller certainly is not a central unit. Each ministry is its own data controller. There is, by law, no way for ministries to look at each other’s raw data, if that is what you are concerned.

### David Lanzendörfer：
Exactly.

### Audrey Tang：
And of course, we have a GDPR-compatible privacy act that talks about same inalienable GDPR rights, except we are not quite getting an adequacy now, because the GDPR says that there have to be a national accountability unit, but we actually have a dozen or more – although that might sometimes be a better design, that you may or may not agree. We are still working on that, but maybe at the end, we will have a national DPA.

### Audrey Tang：
That would not necessarily mean a national data processing unit, because I think that is a single point of failure, actually.

### David Lanzendörfer：
What is the motivation for that much surveillance, anyway?

### Hernâni Marques：
Well, it is happening everywhere, anyways.

### David Lanzendörfer：
Yeah. What is the motivation for having so much recording devices everywhere? In general…

### Audrey Tang：
I think it is just people trust their precincts and district offices a lot.

### David Lanzendörfer：
Well, that is actually what I hear in Shenzhen, by the way.

### Hernâni Marques：
That is, by the way, also the point in Switzerland, because this Secret Service Law – “Nachrichtendienstgesetz”, NDG – was passed with like 60-something percent, so quite a lot, even if it really has extreme instruments in there which are not very compatible with Human Rights.

### Audrey Tang：
Yeah.

### Hernâni Marques：
We are also challenging this law – at this area with selector searches – because it is just overkill, let us say. I mean, we are not against… if you know that someone is doing something…

### Audrey Tang：
The culture is changing here. Whenever, for example, the Taiwan railroads want to install new detectors that are full cameras, but only to detect whether somebody steps too close to the track, people correctly point out that you can use a motion sensor or something that is specific for a purpose and does not even have the capability of being abused into a general purpose surveillance tool.

### David Lanzendörfer：
Yeah.

### Audrey Tang：
The wind is changing.

### Audrey Tang：
What I am saying is that the legacy cameras you see on the street was from an age where people trust their precinct and township offices – a bit too much, according to me; but just right enough, according to most people.

### Hernâni Marques：
Yeah, of course.

### David Lanzendörfer：
Good answer.

### Hernâni Marques：
What about satellite-based communications? Are there antennas in Taiwan or a site where they are surveilling what is going on over satellite-based communications? That is something which I think you meant.

### David Lanzendörfer：
Yes, exactly. What in case…

### Hernâni Marques：
The Swiss government in the year 2000 around, just built up a site. It is called “Onyx” surveillance system, you can also [find it on Wikipedia](https://en.wikipedia.org/wiki/Onyx_(interception_system)) and stuff, where they are surveilling what Italians, French, and Germans are doing and stuff.

### Hernâni Marques：
Also, the property of this site changed three or four times in the past. Currently, it is owned by a company [“Signalhorn”](https://vo.chregister.ch/cr-portal/auszug/auszug.xhtml?faces-redirect=true&#x26;uid=CHE-101.237.462&#x26;amt=VO) , where there are Germans and Americans in the directors’ board – so a very strange thing.

### Audrey Tang：
Interception stations.

### Hernâni Marques：
Yeah, interception stations.

### Audrey Tang：
I know conceptually what you are talking about, but since the…

### Hernâni Marques：
ECHELON is like the Five Eyes concept of that.

### Audrey Tang：
Yeah, I know.

### Audrey Tang：
Since when I become Digital Minister for the past three years, I have never heard of any discussion like that.

### Hernâni Marques：
OK, interesting, yeah. Because just to show that Switzerland… I mean, Switzerland is always known as an independent country, blah, blah.

### Audrey Tang：
It runs its own ECHELON. \[laughs\]

### Hernâni Marques：
Yeah, but they still claim it is not connected to the thing (ECHELON) and stuff, but there was a documentary where we also were in. It is called [“La Suisse sous couverture”](https://www.rts.ch/info/suisse/10791637--la-suisse-sous-couverture-la-web-serie-qui-decrypte-les-activites-d-espionnage-sur-sol-helvetique.html) . I think there will be also an English version…

### Hernâni Marques：
…I think that could be interesting for people interested in that topic, where it shows that after the Second World War, Switzerland and the US had like very interesting relations. There was also a company called “Crypto AG”.

### Audrey Tang：
Yeah, I am aware of that.

### Hernâni Marques：
It provided communication devices to, I think, over 130 countries.

### Audrey Tang：
Yeah, we were aware of them.

### Hernâni Marques：
I am not sure if Taiwan was involved there, ordering that. It was bugged in a way that the Germans and Americans could read all these diplomatic communications. And well, that is fucked up. That is why closed source crypto is no solution.

### David Lanzendörfer：
Yes.

### Audrey Tang：
Yeah, I do not think they are used in the Taiwan government.

### Hernâni Marques：
Yeah, I think the company changed…

### David Lanzendörfer：
Yeah. “Did you realize security by obscurity is not real security?”

### Audrey Tang：
No, it is not.

### Hernâni Marques：
I think we are talking to the right person here. That is more a problem with the normal politicians that do not get it at all. They also think they can put backdoors and that they are the only ones who have access.

### David Lanzendörfer：
“But if the crypto algorithm is Open Source, isn’t it unsecure?”, “Dude, it is even more secure, because everyone can look at the code and agree that it is safe.” Then, as long as the crypto key is private, as long as you keep the private key…

### Audrey Tang：
Personally, I trust more the quantum communication physics than digital constructions.

### David Lanzendörfer：
Oh, pray that no one ever reaches quantum supremacy. \[laughs\]

### David Lanzendörfer：
Google claims they did, right? \[laughs\]

### Audrey Tang：
Exactly, I know, I know. We are investing in a bunch of research, quite a bit, if only for its communication properties. These are really good properties to have, but that is another conversation altogether.

### Hernâni Marques：
Yeah. I have a question! You said at some point – you also wrote it in some other transcript – that you are running tests to secure your financial system. What does that mean? Is it about the transactions?

### Audrey Tang：
It means that we invite foreign white-hat hackers…

### David Lanzendörfer：
Hello! \[winks\]

### Audrey Tang：
…to attack our system.

### Hernâni Marques：
Which kind of transactions are they? Are these like bank transfers, or is it about hacking the banks at the endpoints?

### Audrey Tang：
All sort of scenarios. Basically, the blue team is the banks themselves, and the red team is international. And I mean, it is on the Internet… you can read it in the news.

### Hernâni Marques：
OK, so I need to…

### Audrey Tang：
We are not secret about it, is what I am saying.

### Hernâni Marques：
Yeah, yeah.

### Audrey Tang：
We are trying to build a norm, which, before setting any large scale, like the Taiwan Car Lab which does autonomous testing with pre-5G and so on, we are getting into the habit of inviting white hat hackers for a few months to just do penetration testing and nothing else.

### Audrey Tang：
We allocate five percent to seven percent of government budget for all new initiatives – just for that.

### Hernâni Marques：
There is something interesting… I am also involved in a project called pretty Easy privacy, pEp.

### Audrey Tang：
Oh, yeah.

### Hernâni Marques：
We started that project with the idea to automatize – in the first place – email encryption, because you know, if people do not have the public key … you somehow need to make them to get it, and key servers are broken… I mean, SKS key server system is just like a mess… you cannot delete the keys anymore and stuff like that…

### Audrey Tang：
Well, I think email has a very weak default, and socially, it is almost impossible to secure.

### Hernâni Marques：
What we are just now doing on all kind of platforms – iOS, Android, Outlook… there is also for Enigmail, there is also pEp mode, which gets activated by default…

### Audrey Tang：
OK.

### Hernâni Marques：
…and also for GNOME, for the Geary Mail User Agent… we are also financing someone there to just put it in – is that, when you have email addresses, that you get the key pairs automatically generated.

### Hernâni Marques：
The public key gets attached. On the other side, if you have pEp, it gets automatically imported, so that you can just engage as soon as possible in encrypted communications, except, of course…

### Audrey Tang：
It is like HSTS.

### Hernâni Marques：
Yeah, if you want, yeah. Yes, exactly.

### Audrey Tang：
For email.

### Hernâni Marques：
It is very easy. Of course, you have all these interoperability issues. You need to be compatible with some…

### Audrey Tang：
You need to build the equivalent of Let’s Encrypt for email?

### Hernâni Marques：
In a sense, yes, but we do it…

> (laughter)

### Hernâni Marques：
We do it without centralized, let us say, component architecture or something, because we just want to have it as peer-to-peer as possible. And email is not our goal – to say it directly here. It is just… for us… a good starting point, because it is the biggest federated identity system. I also contacted you by email. Email is the thing everyone has. Some people even have like 10 email addresses or so.

### Hernâni Marques：
It is a good starting point. Then we want to get rid of SMTP and IMAP, let us say… and send the messages through a peer-to-peer framework. For that, we are collaborating with a project which is called GNUnet – that is an official GNU package.

### Audrey Tang：
I am aware of that.

### Hernâni Marques：
That is a really great project. There are lots of really great academic papers on that. It is not just about messaging, here is a subsystem called CADET, which is for end-to-end encrypted messages.

### Audrey Tang：
Yeah, I am aware of that.

### Hernâni Marques：
There are other things like GNS, GNU Name System – a decentralized name system, even with query privacy. So, the discussions we have now with DNSSEC and stuff… you still have the issue that one side can still know who was asking for something, so that can be solved there.

### Audrey Tang：
Or you can trust Cloudflare for everything…

> (laughter)

### Audrey Tang：
That is the alternative. \[laughs\]

> (laughter)

### Hernâni Marques：
Yeah, that is also a discussion going on. \[laughs\]

> (laughter)

### Hernâni Marques：
Also, I was at the IETF… I came over Singapore – I was at the IETF, by the way. There are really big discussions also in the plenary sessions about the privacy issues which are being introduced by these approaches.

### Audrey Tang：
Do not get me wrong, I have good friends working at Cloudflare. It is just that Cloudflare and Google – it is good that they are implementing these DNS alternatives – but if they themselves does not scale out, it is not really peer-to-peer yet.

### Hernâni Marques：
Yes, and it is also good for security, but bad for privacy, so it is not the same.

### David Lanzendörfer：
Yeah.

### Hernâni Marques：
The point now, which I wanted to come to and connect it with that banking thing, is that pEp is a very general approach. It is agnostic to message formats and agnostic to the concrete crypto.

### Hernâni Marques：
So, we can, by situation, use, let us say, PGP for email, because that is the default there, but if we add the XMPP transport, you can use OTR, or OMEMO. Or you can also use Signal Protocol for like messaging. That is completely open from the very beginning, and so the whole architecture is done in a way that it is flexible. It is that flexible that we are also using it now in banks.

### Hernâni Marques：
There are now projects with banks. We were even in talks now with the Swiss National Bank a few days ago, which went well. They want to secure like their SWIFT network, because the messages are floating around, ehm, without integrity and authentication at the moment.

### David Lanzendörfer：
Checks.

### Hernâni Marques：
And there were very big hacks based on that that – people just altered messages and stuff like that, or just injected their own.

### Hernâni Marques：
And then the damage was like 100 million in one case and stuff like that.

### Audrey Tang：
Wow. Free money, free code! \[laughs\]

### Hernâni Marques：
Yeah. That is why the SWIFT consortium started to search for solutions how to have an easy, pluggable… if there is an easy pluggable way to just encrypt this stuff. Then they found pEp and started to now do proof of concepts with us. We are now working already with Swiss banks, and even with the Swiss National Bank.

### Hernâni Marques：
So, that is also a question now here… if Taiwan is… if encryption also plays a role here, or also in these, ehm, these white hat hack things you do, if that is also a topic. If you can just fake messages, or if it is more about the end… the bank security itself.

### David Lanzendörfer：
Yeah.

### Audrey Tang：
We care a lot about the end-to-end encryption as well. Anyone that holds a gov.tw domain name or edu.tw is required to have SSL Labs-approved end-to-end encryption over HTTP. The instant messages here, many people in the social sector and private sector use a product called Line, which is an end-to-end encrypted messenger, according to them, but it is not Open Source, so not independently verified.

### Audrey Tang：
It looks like end-to-end, it seems, except for the stickers, because they sell the stickers. In any case, but for our work, for example, in my office, and so on, we use Sandstorm, which is a sandboxed communication/encryption product.

### Hernâni Marques：
OK.

### Audrey Tang：
Sandstorm has been penetration-tested by the white hat hackers you mentioned, and it is open source – for half a year.

### Audrey Tang：
They filed three CVEs and said it is good enough, and so we start rolling it out, enabling citizen developers and public servant developers. It basically take all the open source packages that we were already using and sandboxify them into Sandstorm and start using it. For example, Rocket.Chat is introduced this way. And Rocket.Chat, of course, has its own…

### Hernâni Marques：
Oh, yeah, that I know.

### Audrey Tang：
…its own OTR implementation – its own E2E layer, which requires people memorize and type in on each device. So it is kind of crude, but it is serviceable. It is also E2E. I mean, you cannot argue with that.

### Hernâni Marques：
Yeah.

### Audrey Tang：
Right? If you piggyback on Sandstorm, on Rocket.Chat, or any of those communication devices, then you find your way into our internal working end.

### Audrey Tang：
We power our gov tech on top of the civic tech, and it is all Open Source, anyway. We can contribute also back upstream, as well as co-maintaining projects.

### Hernâni Marques：
OK, yeah.

### Hernâni Marques：
That is also nice now, because of these bank things, we now need also to port like pEp for to mainframes. We also need to give changes upstream back to the GNU project, because you need to make sure that things like GNU make run at all on mainframes, because nobody is using this kind of ecosystem.

### Audrey Tang：
You just set up a GNU system, right? \[laughs\]

### Hernâni Marques：
\[Laughs\] Yeah, of course, but you need to adapt it. It is about z/OS, basically, because if now want to have pEp there… because we are relying on… all things GNU…

### Audrey Tang：
Oh, z/OS?

### David Lanzendörfer：
Yeah, z/OS.

### Audrey Tang：
That is a fun thing.

### David Lanzendörfer：
I already had to work with z/OS in my bank time back in Switzerland… in case I cannot get any five-day visas afterwards… this meeting, and cannot withdraw money…

### Audrey Tang：
Does Java run on z/OS?

### David Lanzendörfer：
Huh?

### Hernâni Marques：
That is a good question. I think it is on…

### Audrey Tang：
Back then, we used Perl always as a portable Unix, so write everything in Perl, because it would run there.

### David Lanzendörfer：
Yes, it would.

### Hernâni Marques：
Most of the bank projects we are in now with this pEp thing are using…

### Hernâni Marques：
I mean, we have an adapter concept… I mean, pEp engine is written in C99 for portability reasons. We would like have Rust, but for that, we must make sure that it also runs… really on all platforms.

### Hernâni Marques：
We are exploring that, but to use the engine, you shouldn’t use directly the C API. We have bindings around it or adapters…

### Audrey Tang：
Of course.

### Hernâni Marques：
…and the adapter which is being used most now in these banking projects is the pEp JNI adapter, Java Native Interface, because as you say it, Java is…

### Audrey Tang：
Of course, Java runs everywhere.

### Hernâni Marques：
As far as I know, I might be wrong, there is also like software running directly on these z/OS machines. That is why we now need to port pEp…

### Audrey Tang：
Including Makefiles?

### Hernâni Marques：
Yes.

### David Lanzendörfer：
It will be fine.

### Audrey Tang：
It will be fine. Makefiles!

### Hernâni Marques：
…and to build pEp, we need to make…

### Audrey Tang：
Shell scripts for the Makefiles. Write once, run away! \[laughs\]

### Hernâni Marques：
There, by the way, I also heard that on some systems, only C89 is supported, so we even need to change some things, such that it works – it compiles at all.

### Audrey Tang：
Interesting times!

### David Lanzendörfer：
It would not be more painful than dealing with those sales agent at this last PCBA company, but of course… well, I worked nights in Switzerland with this stuff. I can do that again. It is a good… \[laughs\]

### Hernâni Marques：
What is the time?

### Audrey Tang：
I have five minutes more.

### David Lanzendörfer：
You have five minutes?

### Hernâni Marques：
That is why I want… so I need to stop. I also wanted to talk about other things.

### Hernâni Marques：
Yeah, what is Taiwan’s take on Assange and Snowden, as the country is not recognized by almost… any other country? I mean, even Switzerland…

### Audrey Tang：
Whaaat? \[laughs\]

### Hernâni Marques：
I mean, in the sense of – diplomatically.

### Audrey Tang：
OK.

### Hernâni Marques：
Switzerland, by the way – that is a bad thing of Switzerland – recognized the PRC as the very first country. That is why China, I mean, PRC China and Switzerland are very big friends. Of course, when there is a visit in Switzerland, they need to hide a little bit that there are also people of Tibet protesting all the time.

### Hernâni Marques：
The first time was catastrophic, because there were like Tibet people around. Second time, they like needed the protection of, they made a view protection…

### Audrey Tang：
Yeah, the pirate mayor of Prague decide not to do that. We’ll be sending the Prague Zoo pangolins instead of pandas, because the PRC refused them pandas. And the mayor said, “I prefer pangolins, anyway.”

### Audrey Tang：
The wind is changing, actually.

### Hernâni Marques：
OK. Yeah. The problem is it is a political thing there. Could, in theory, Assange and Snowden get asyl…

### David Lanzendörfer：
Asylum.

### Audrey Tang：
I thought Snowden chose Hong Kong because at that time Hong Kong seemed safer?

### David Lanzendörfer：
No. Snowden said clearly, he did not choose Hong Kong. He happened to end up there…

### Audrey Tang：
Really.

### David Lanzendörfer：
…first. Then he went on. Then he was in Russia. Then his passport was canceled.

### Hernâni Marques：
While he was flying over there it was canceled. He wanted to go to South America in the end.

### Audrey Tang：
So that was a transit station.

### Hernâni Marques：
Yeah. Hong Kong was a transit station, yeah.

### David Lanzendörfer：
It was not really a conscious choice. He did not want to end up in Russia.

### Hernâni Marques：
Yeah, of course.

### David Lanzendörfer：
He was in transit when they canceled his passport.

### Audrey Tang：
I am aware of that. I was not aware of the Hong Kong part being unintentional…

### David Lanzendörfer：
It was never his intention to go to Russia or China.

### Audrey Tang：
OK.

### Hernâni Marques：
Is there an official position of the Taiwanese government saying that they should…

### Audrey Tang：
Political asylums?

### Hernâni Marques：
Yeah.

### Audrey Tang：
Well, it is decided on a case-by-case basis. We do not have a refugee act yet.

### Audrey Tang：
It is, like, hard to accidentally arrive to Taiwan.

> (laughter)

### Audrey Tang：
It is physically very difficult, I mean.

### Hernâni Marques：
Diplomatically, it is also difficult because you do not have embassies and…

### Audrey Tang：
Indeed. We have TECROs, which are de facto embassies. The TECRO head representatives are ambassadors. They carry diplomatic passports. They get diplomatic privileges.

### Hernâni Marques：
If someone enters there and wants like…

### Audrey Tang：
You can treat them as an embassy. They will be happy because they are being treated as an embassy. That depends on, of course, how good the bilateral relationship is. Some countries, for example, the US with the Taiwan Relation Act, it basically enacts by law that the TECRO should be treated as an embassy. Their counterpart, the AIT in Taiwan, has the State Department seal. It is all but the name.

### Audrey Tang：
It is actually a full diplomatic, government-to-government relationship. In some countries, there are petitions going on – for example, in Germany right now, that want the German government to do something like the TRA. Of course, we are not thinking that this will happen just because of the petition. Nevertheless it is good to have a public discussion about it.

### Audrey Tang：
Because, indeed, with something like TRA, you can recognize Beijing as representing China while actually offering de facto full ambassarial relationship with Taiwan. That is not mutually exclusive. I do not know about the Swiss’ own politics but there also are countries like Bhutan, which specifically did not recognize either but do de facto with both. That is possible, too.

### Hernâni Marques：
About the democracy project there, I also read a lot. I will ask things here about, what we would be very interested in, by the way, is if you, like say, next year, if you are in Europe around or if you can come specifically, we would like to have a civic tech conference where we have not just the activists and hackers around, as usual, but also officials from the government for…

### Audrey Tang：
Where? In Geneva?

### Hernâni Marques：
We can do that in Zurich, Bern, or wherever.

### Audrey Tang：
Zurich? OK.

### Hernâni Marques：
The federal government is basically based in Bern. Also, I know Renat Künzi said that in September there will be a similar event anyways. Let us look at that later, perhaps.

### Audrey Tang：
Maybe when there is a more firm timeline. Yeah?

### Hernâni Marques：
We would very much love to have you as a keynote speaker which like says what you are doing here and this approach that you are running. That you are taking like things from the bottom up and then trying to bring it to the government. You say you are not working for but with the government. That is really great framing.

### Audrey Tang：
I am not working for but with the people, too.

### Hernâni Marques：
That is a nice approach. Some of that is a problem we have here. To take this e-voting thing, but also other projects which are very big – they started like as projects from the administration. They never talked with anyone from the basis from the civil society. Then, at some point, they want to introduce it for all!

### Audrey Tang：
It is very waterfall, isn’t it?

### Hernâni Marques：
Next year they want to introduce an electronic patient system…

### David Lanzendörfer：
(laughs)

### Hernâni Marques：
…which is centralized and run by, in the end, two companies, which is Swiss Post and Swisscom, in a centralized fashion – even in a way where it is written in their own risk report that a single inside attacker can like… leak everything. That is not acceptable.

### Audrey Tang：
OK.

### Hernâni Marques：
That is is really fun. And this stuff always happens a little bit like this. So they just create a project and also the electronic ID – also Renat Künzi mentioned it, I read it.. That is also done, in our opinion, in a wrong way which will lead to identity theft, trust issues, and stuff like that. So this… this is systematic there.

### Hernâni Marques：
And we need like an approach where the government reaches out to people or where we even have a like position like yours – where like a connection is being made to like civil society.

### Audrey Tang：
OK.

### Hernâni Marques：
We would like to have someone like you or, better, you to speak there in Switzerland opening up civic tech conference or so. And then we can do panels, and offer talks, and have a discussion if you can also… if Taiwan can also help here?

### Audrey Tang：
Sure. I just returned from Berlin. Before that, The Hague, before that, Ethiopia, Addis Ababa, and before that it was Osaka for Devcon and before that, Buenos Aires. I travel quite a bit. I already know that I will be in back to Berlin by end of March, early April. That is one point.

### Audrey Tang：
I have also been invited to give a debate or panel discussion somewhere in Switzerland – they are still preparing the brief – around late May.

### Hernâni Marques：
OK! So perhaps we can do it around there – so you need to travel less.

### Audrey Tang：
Maybe. These two are already kind of set-ish. The other things, we do not usually plan after May 20th because that is when the new Cabinet gets formed. For the next half-year or so, that is the two European trips that mostly likely will happen. Anything beyond May, of course, we will have to wait until the election.

### Hernâni Marques：
OK, but I think we could also do it just then. OK, yeah. I will talk with…

### Audrey Tang：
Send me a few options. Because I do not manage my own schedule. I would send it to the Foreign Service people.

### Hernâni Marques：
That would be really great. I think you could really help to show to the Swiss government…

### Audrey Tang：
I can show up as a robot. We do that as well. I was in Rome as a robot.

### Hernâni Marques：
That could also be a way.

### Audrey Tang：
That is, actually, the Snowden way. \[laughs\]

### Hernâni Marques：
Yeah, but we think it is by force. \[laughs\] In your case, we can be more flexible.

### Audrey Tang：
We can say it helps climate change mitigation.

### Hernâni Marques：
Yeah, that is true, that is true – especially if you travel around like just for fun.

### David Lanzendörfer：
A month of continuous flight would have impact. \[laughs\]

### Hernâni Marques：
In your case, it has also like impacts. That can be distinguished a little bit.

### David Lanzendörfer：
OK.

### Hernâni Marques：
A good argument for you to be physically there is that you could also talk with government officials like, say, from the Federal Chancellery and show them ways. Because they are still in a…

### Audrey Tang：
We could try to merge the two trips together.

### Hernâni Marques：
That would be absolutely great.

### Audrey Tang：
Then maybe you can draft out some outlines. We are also waiting for outline for the other Swiss… I think they are more academic. Anyway, we can send both to the Foreign Service and see what they think. Because I do not pay for that oversea travel budget; I am in a semi-diplomatic position when I travel abroad. And so the Foreign Service will decide. I will let you know as soon as possible.

### Hernâni Marques：
Absolutely great! I think that is great! Can we have a picture together…?

### Audrey Tang：
Of course we can.

