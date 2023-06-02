# 2023-05-22 Meeting with Paul Wilson, George Kuo, Kenny Huang

### Paul Wilson:
So, this bag came from one of the APNIC conferences, from APRICOT, and we have two of those conferences every year. We've got the next one coming up in Kyoto in September. 

I don't know if you can join us, but it's actually our 30th birthday for APNIC, celebrating in Japan, which is quite appropriate because APNIC started in Japan. Of course, Professor Jun Murai is one of the founders, you know him well, I think. So, as one of the founders, he'll be there and we'll have all sorts of ceremonial celebrations for 30 years.

### Audrey Tang:
Yeah, I'd love to come, although September, I'm already committed elsewhere, so maybe Ning Yeh would come to Kyoto instead.

### Ning Yeh:
I just came back from Kyoto for my family trip vacation.

### Audrey Tang:
You were there scouting the vicinity.

> (laughter)

### Paul Wilson:
Some of us have another meeting in Kyoto, too, of course, which you probably know about, the IGF.

### Audrey Tang:
Oh, yeah.

### Kenny Huang:
One month later, right?

### Paul Wilson:
Yeah.

### Kenny Huang:
Yeah, one month later.

### Audrey Tang:
The UN IGF.

### Paul Wilson:
Yes, yeah, exactly.

### Audrey Tang:
Okay.

### Paul Wilson:
And in fact, just before our meeting in Kyoto, there's the Asia Pacific Regional IGF, and I think you'll be participating in that already?

### Audrey Tang:
Yeah, video, yes.

### Paul Wilson:
Okay, you can't come in person?

### Audrey Tang:
To Australia?

### Paul Wilson:
To Brisbane, yeah.

### Audrey Tang:
To Brisbane... Video conference is more likely, but if I do visit later in the year I'll make sure to keep you posted.

### Kenny Huang:
Probably with the evening office, we can have you.

### Audrey Tang:
Yeah. So, while I can join maybe the event only through the video link, if I do come to Australia, maybe we arrange a face-to-face.

### Paul Wilson:
I understand that the host would like to invite you for an opening address at the event, as well as I think you're on a panel.

### Audrey Tang:
Yes.

### Paul Wilson:
I'm actually not exactly in a position to invite you because the event is being hosted by AUDA, the Australian Domain Authority, but we know them well, and I do think that they'd be interested if you're able to join for the opening.

### Audrey Tang:
Yes, I'm actually invited to a panel in this year's UN IGF.

### Paul Wilson:
Oh, okay.

### Audrey Tang:
We'll see what happens... I'm a Lithuanian e-resident now.

### Paul Wilson:
Interesting.

### Audrey Tang:
So we'll see what happens.

### Paul Wilson:
I see. Good luck.

### Audrey Tang:
Yeah.

### Paul Wilson:
So, the Asia Pacific Regional IGF for the first time is in Brisbane, and APNIC is in Brisbane, of course. Would you like a bit of a briefing on APNIC?

### Audrey Tang:
I think our colleagues have briefed me well, so if there's some new developments as of this year after the pandemic, that would be great.

### Paul Wilson:
There are some, yeah. So, it all goes back to APNIC's original reason for being, which was not just to be the RIR for the region, but to do that for the sake of internet development in Asia Pacific.

So, we've always had that internet development mission as part of what we do, and you may be aware that it was about five years ago now that we established something called the APNIC Foundation, which is actually for fundraising, essentially, because all of the work that we did in training and conferences and technical assistance was previously all funded by members. 

So, APNIC is fully member-funded, and the members generously provided support for those activities. But then, you know, the demand didn't get less, so we decided that in order to keep expanding, we'd form this foundation.

Then it was a couple of years after that, a couple of years ago, that another opportunity came along, and that's called the Asia Pacific Internet Development Trust. This is a joint project, with WIDE project, with Jun Murai in Japan, and it's got a large endowment which is invested for a continual return, which is also providing some millions of dollars per year for more of the internet development work that either APNIC does or it's done by the foundation or by a wide project.

Also, there is an infrastructure company that has several hundred gig fiber circuits centred on Guam, Guam to Singapore to Tokyo to Indonesia, Philippines, and that's an academic network backbone to provide additional redundancy and capacity for the networking for academic and research networking around the region.

So that, plus more work on small grants: the foundation runs a small grant program with about 2 million dollars a year, and training activities and other development activities. There's a very interesting one called Switch, which is a program for diversity in engineering, particularly women, young people, different gender identities and so on.

Across that whole spectrum, Switch has provided support for dozens of individuals who are receiving professional development, both in relation to the internet and in general as well. So yeah, we're pretty busy.

### Audrey Tang:
Oh, wow. This is much wider in scope than I previously remembered.

### Paul Wilson:
Yeah, so we're often seen as and we are the regional internet registry. And if you look at the other four regional internet registries, are mostly more focused on a technical mandate, but both because of the way APNIC was founded and I think the different needs in our region, we've always been kind of blessed, had the blessing of the membership to do this extra work.

We're actually, thanks to the foundation, we're building a new headquarters as well in Brisbane. So, there'll be a substantial building that we'll be occupying in about another two, two and a half years' time.

### Audrey Tang:
Okay.

### Paul Wilson:
So, we've got a long-term vision.

### Audrey Tang:
Oh, wow. Okay.

### Paul Wilson:
I think the need for internet development and particularly internet — the proper support for internet governance and so forth, it's not going away, right? We don't think so.

### Audrey Tang:
So, in Taiwan in the past couple of years, we've also been blessed by the continued earthquakes, let's just call that.

Recently, as you well know, around the island Matsu, there was a fishing vessel and a week later, a cargo vessel both flying PRC flag, that accidentally dropped anchor and kept moving and cut both of the submarine cables. And so, a lot of our work and with Kenny's help has been to design a strategy so that the internet keeps functioning in two different—to serve two different needs.

One is when all our submarine cables are cut, our domestic video communications still need to work.

### Paul Wilson:
OK.

### Audrey Tang:
If the end-to-end both ends are in Taiwan, they're supposed to continue to work. But today, it's not the case. The most popular video conferencing tools don't have metadata residency.

### Paul Wilson:
OK.

### Audrey Tang:
So, they all route through Japan or Singapore or something. So, when the submarine cables are cut, we're dead.

### Paul Wilson:
So, your ability to—I mean, I'm sure DNS is okay, but—

### Audrey Tang:
And the other thing is— Yeah, the external facing submarine cables, currently, we suffer a lot of DNS, DNS service attacks. And we can easily imagine that any place that has a known location, a known physical location, will probably be jammed or disrupted by earthquakes when tensions escalate, either through cyber or physical means.

So, we've been partnering with Cloudflare to make sure that the route of our DNS in the government services, GOV.TW, has redundancy in any case, both within and outside the jurisdiction. But we're still wondering if there's some new advances in research and development, specifically for this kind of situation where the only outgoing link is a few low-Earth and mid-Earth orbit satellites. 

### Paul Wilson:
Much less than what you have…

### Audrey Tang:
Exactly.

### Paul Wilson:
The APNIC development work might sound—what I've mentioned might sound a little bit soft, probably in terms of its scope and its focus, but one of the biggest developments also over the last five or so years has been more and more work on security, on Internet security, which we speak of as the stability, the resilience, the physical and operational layer, rather than the higher-level aspects.

### Audrey Tang:
Exactly. The same terms we use.

### Paul Wilson:
Right. So, we've… also through foundation funding and funding that's come from other sources, we've provided a lot of support for CERTs in the Pacific.

So, we helped to establish the first CERTs in Tonga, in Vanuatu, in PNG, so quite a number of Pacific nations. And we're also working with other CERTs.

So, in fact, one of our—we've got three pretty high-level security specialists on staff at APNIC. One of them is in Taipei this week, and he's providing a training… a third training for Taiwan law enforcement, judicial and…

### Kenny Huang:
High prosecutor office.

### Paul Wilson:
Prosecutors and so on.

### Kenny Huang:
High prosecutor training for Pacific law enforcement agent in Taiwan.

### Audrey Tang:
I see.

### Paul Wilson:
So, you know, it's another case where the sort of nexus between the highly technical and the non-technical needs to be bridged. So, we try and bring people's understanding up of the—I mean, I think the roles and the processes and the services and functions that they can use.

So, Jamie Gillespie, who's here, is one of our specialists in training law enforcement in particular. He's working in Nepal and a bunch of other countries.

### Audrey Tang:
Okay.

### Paul Wilson:
So yeah, that's not the sort of soft end of the development spectrum. It's really very critical technical support for security.

### Audrey Tang:
Yeah, and I think this is essential. The chief prosecutor in Taiwan this week is investigating a case where there were repeated email bomb threats, from someone in the PRC jurisdiction. Last year I did receive his threat too. 

Doubtless with language models, it will become more AI-powered in the future — That is to say the content, in terms of Actor-Behavior-Content, the content is going to be more convincing. 

We've seen many jurisdictions facing this kind of DDoS of the mind, to resort to clamp down their internet, right? Geofencing, for example.

But that, as I understand, goes against the grain of the One Internet idea where we would much prefer to have multi-stakeholder solutions to these kinds of things like with spam blocking, it's not blocking entire continents, right? It's against specific actors and behaviors, through digital signatures like DNSSEC, in multiple layers to make sure that people cannot falsely sign as somebody else.

So, without such technical training, many jurisdictions might resort to a more balkanizing reaction.

### Paul Wilson:
Exactly, because it's not, you know, those internet principles, the end-to-end, globally open networking, those are ideals, right? No one, unless they're really purely idealistic, really seriously believes that the internet can be purely open, purely end-to-end, purely perfect in all of those things.

So, there are compromises, but the compromises need to bear in mind the ideals that are still there. And if the ideals are forgotten completely or not understood, then they provide no guidance at all, right? So, you could end up with something that's very, very different if you take the current Internet for granted.

### Audrey Tang:
There would be no "inter" in internet if you go that route. It's like going back to the pre-internet times.

### Paul Wilson:
So, I'm very interested to learn more about MODA, actually. What's your scope and your role, particularly with respect to the internet and internet governance? Because I think it's an interesting model, and I'd like to understand if it is, to what extent it's similar to Japan and Singapore, and whether there are other governments in the region that are taking this kind of integrated, converged approach.

### Audrey Tang:
Yeah, I think neither Japan nor Singapore have exactly the same mandate as MODA, because I was involved in mostly a discussion with Professor Jun Murai leading up to the digital agency. 

I think we're quite unique in that, so in the Ministry of Digital Affairs, there's of course the resource management, the spectrum allocation, the e-services, you know, the traditional digital stuff. But under the MODA, there are two administrations. One for digital industries, that's platform economy, like digitalization of the entire business sector and so on.

So that in Japan, would be in METI, right? It would be in the economy affairs. But nowadays, anything related to digital transformation has been moved from our economy ministry to the administration for digital industries. 

And we have another administration, the Administration for Cyber Security, that looks after the critical infrastructures and so on. And so, this is like a triangle with participation, progress and safety as the three different values. And these are fundamentally in tension, which is why in most other jurisdictions, there's no single minister that looks after all three values.

We usually see three ministers, actually. And even in some of the newer designs, sometimes you have participation and safety, or participation and progress, but very rarely progress and safety in the same ministry. So, we're playing this very interesting role in making sure that all the industrial developments also double as cyber security awareness. We call it digital resilience for all. 

And we are also doing our safety work through public-private partnerships so that the state doesn't overstep its bounds. Because as you just mentioned, it's kind of easy to regress against the original internet ideals. So, the safety folks also need to understand that in the private sector, there are already pretty good multi-stakeholder solutions to most of the safety challenges. So, most of our work has been just to strike this balance.

### Paul Wilson:
Right. So, that is interesting that it's really unique in that respect. Is there anyone else who's going in this direction? I'm just quite interested to understand, from your point of view, what's happening across our region.

### Audrey Tang:
We're closer, I guess, to, for example, Estonia or Ukraine in that regard. I mean, the Digital Transformation Agency in Ukraine didn't start with a safety mandate, but then the war came, so they do all the safety work. So, I think that is unique in their particular situation, but there are some similarities.

When I visited, say, Lithuania and so on, they also pride themselves in not sacrificing the freedom of speech and assembly on the internet. So, they would not pass a top-down, take-down censorship, because that's their thing, just like it's the Taiwanese thing. On the other hand, they do face unprecedented cyberthreats for information manipulation and interference, phishing attacks. So, we're kind of equally blessed to have to find solutions without sacrificing the things that we basically think are our core values.

### Paul Wilson:
OK I'm interested to read more, actually, about this. Are there some good reference points in English?

### Audrey Tang:
Sure, sure, sure. We have a pretty functioning English website. And if you're interested in particular design choices they were making and so on, including this interview, right, we have many on our website. It's all published as a transcript. 

The most recent one being the co-founder of OpenAI talking with me about how to use a democratically designed deliberation online and offline to create robust rules to steer the AI. Because unlike pandemic or nuclear proliferation, language models are unique in that it actually obeys the collective intelligence if you can just present to it the right way. 

And it also has the potential to help democracy instead of just creating bomb scares or disinformation at scale. So, there's such pro-social uses OpenAI is very interested in, so we're partnering with them on that.

### Paul Wilson:
Are there language models in Chinese? Chinese language? Are they being developed at the same scale?

### Audrey Tang:
Yes, our National Science and Technology Commission, within this year, will be rolling out the TAIDE, the Trustworthy AI Dialogue Engine. And it's basically building off the BigScience work across jurisdictions. I think France started with Bloom, and nowadays there's also the Facebook LLaMA models that has open-source replications like RedPajama and so on. So yeah, we're building off those open-source models.

### Paul Wilson:
Are they multilingual?

### Audrey Tang:
They are multilingual. Bloom is designed to be specifically multilingual.

Yeah, so and this is a matter of epistemic justice in Taiwan because we have 20 national languages. Currently, GPT-4 doesn't speak any of them very well. It does traditional Mandarin okay, but the other 19 totally not up to par.

### Paul Wilson:
19 languages is…

### Audrey Tang:
Yeah, exactly.

### Paul Wilson:
Wow.

### Audrey Tang:
So, that's a fun thing. So, anything from Kenny or George that I should talk about?

### Kenny Huang:
Anyway, thank you for your time and your time to share discussion with APNIC. And actually, I'm a part of APNIC. We are happy to invite both of you and the rest of your staff to join APNIC's meeting that will be in September. And also, you’re more than welcome to the participant of APrIGF in Brisbane. What time is it? In August?

### Paul Wilson:
End of August. 30th and 31st.

### Kenny Huang:
Right. If you have time, just go to visit Brisbane. Any of you, please take time.

### Paul Wilson:
The current APNIC office.

### Kenny Huang:
Yeah.

> (laughter) 

### Audrey Tang:
Exactly. 

### Kenny Huang:
And we can also arrange to the new site to have a site visit.

### Audrey Tang:
It's not like… under construction?

### Paul Wilson:
The new site is just… nothing's happened yet.

### Audrey Tang:
Oh. Nothing's happened yet.

> (laughter) 

### Paul Wilson:
Probably we don't need to take you there. We can show you on the map where…

### Audrey Tang:
Ah, okay. I see. Anything from our vice minister? Any of our colleagues?

### Paul Wilson:
I heard there's possibly a bid for APrIGF in Taiwan next year. 

### Audrey Tang:
Yes. We've allocated sufficient budget for that.

### Paul Wilson:
Okay. Yeah. We'd like to, very much like to have an APNIC conference back in Taipei or in Taiwan somewhere in future. We've had four, I think, over the years. The first one was at the old hotel. The Grand Hotel in…

### Kenny Huang:
2001 or 2002 or something.

### Paul Wilson:
A long time ago we had a conference there which was much smaller, but these days we might have 800 people or so that come along to a conference like APRICOT. So, that's a big training and professional development and policy development activity. 

It's really where internet governance happens in the APNIC community in a multi-stakeholder mode, so I'd very much like to come back in future.

### Audrey Tang:
Great. Yeah. I think we actually increased the budget, right? This is one of the very rare budget items.

> (laughter)

### Ning Yeh:
We'll have a budget in Congress in Taiwan next year.

### Paul Wilson:
OK. I heard that you're also supporting participation in the IETF, Taiwanese participation?

### Wen-Fang Tseng:
I think we have sponsored TWNIC to have some professors and students to attend IETF and have some training programs.

### Paul Wilson:
Right. I was in the last IETF and I took part in the policy makers forum that the Internet society supports. So, they brought policy makers from quite a few different countries around the region and had a number of us providing updates about what happens in our respective parts of the internet governance system. So, they do that there.

There's a couple of interesting initiatives in India and Japan, which are linking their local communities of R&D and technical protocol design with the IETF as well. So, it's really, really great to see this kind of activity happening in our region, because we see the lack of it and the need for it. So, congratulations for that.

### Audrey Tang:
Yeah.

### Paul Wilson:
If you'd ever like to support any fellows to come along to APNIC meetings, we also have a fellowship program where we might have 400 or 500 applications for people to receive some travel support for APNIC conferences. 

So, if you ever have any spare capacity that you'd like to allocate, it could be for Taiwanese fellows or it could be for fellows from other parts that you'd like to support, we could also accommodate that.

### Audrey Tang:
Or any non-Taiwanese fellows can become also-Taiwanese fellows if we just hand them a gold card of three years residency...

### Kenny Huang:
And we can also partially match that kind of fellowship. If anyone is sponsored by, endorsed by TWNIC, by Taiwan, I think that could be arranged.

### George Kuo:
We haven't seen a lot of fellows from Taiwan, but in last year, you know, Singapore meeting, we actually had a fellow from Taiwan.

### Paul Wilson:
Oh, okay.

### Kenny Huang:
Very selective.

> (laughter)

### Paul Wilson:
We normally, we do target the developing nations of the region, but that's of course not the only, the only people who can benefit from support. So we're happy to coordinate with you on that if you are interested.

### Wen-Fang Tseng:
Yeah.

### Audrey Tang:
Yeah. So, I'd like to elaborate a little bit on the digital gold card thing, which we just launched this week, last week. And it's sometimes called an open-source digital nomad visa because we hand out three years of residency, including healthcare and family visits and tax benefits and so on, like the Singaporean one.

But unlike Singaporean one, we do not require approved salary or anything like that. You just need to present eight years of contributions to the digital commons. And of course, most people just use GitHub as a proof of participation.

### Paul Wilson:
Interesting.

### Audrey Tang:
But anything that can be found on internet that cannot be, you know, tampered with after the fact, we accept as proof of participation. So, and I think the old gold card criteria, it really only works if you are a kind of US-based person with that salary level. 

But in more developing nations, even though you're maybe equally capable and have the same years of professional experience, it's very difficult to match the salary threshold, which is why we dropped the hard requirements for the digital part of the gold card.

So, yeah. So, I was not being facetious when I said we can just hand out those gold cards, which does take two months to process. But by the time that person receives a Taiwanese grant or travels to Taiwan or things like that, they will be on the residence lane and do not need extra visa processing.

### Paul Wilson:
Very nice.

### Audrey Tang:
So, they become almost like also Taiwanese.

### Paul Wilson:
Congratulations. That's very progressive.

### Audrey Tang:
Yeah. So, yeah, it's one of the very few open-source residence visas.

So, feel free to jointly promote.

> (laughter) 

### Paul Wilson:
I'd be happy to. Sure. Sure thing. Is there anything else? 

### Kenny Huang:
Anything going to update in terms of completion or in terms of…

### Paul Wilson:
Well, I think we've been over that. But I suppose on the infrastructure side, I suppose that the Taiwan's participation in the academic networks is pretty clear. And I'm not sure if there might be an opportunity to have a connection into that network. 

### Kenny Huang:
As a participant on submarine cables?

### Paul Wilson:
Oh, of course.

### Audrey Tang:
I think they're all very happy to hear the news.

### Paul Wilson:
Well, I'll be traveling to DC for the ICANN meetings.

### Wen-Fang Tseng:
We have arranged tomorrow’s meeting and we can discuss more in discuss more in details in DC or tomorrow.

### George Kuo:
Tomorrow lunchtime.

### Wen-Fang Tseng:
Tomorrow lunchtime. Yeah. To discuss more in the details on how we can collaborate on Internet governance issues or participation.

### Audrey Tang:
That’s awesome. Yeah. I, before joining the cabinet, was in one of the APrIGFs in Taiwan and where Kenny presented the work around communication resilience around the Legislative Yuan around March to April 2014. 

And I must say that just like my early involvement in the IETF process and the W3C process really shaped my politics. We can continue to point to this vibrant policy development process and tell our legislators and our other ministers to basically not resort to violent means when it comes to Internet related issues. 

Right after this I'm going to the parliament and they're again going to ask me about those questions. Because the MODA, if there's one thing that MODA doesn't do, it's this top down, shut down thing. 

This kind of power, when we designed the MODA, still relies on the independent body, the NCC, which is why it's not our purview. We must do all our efforts to make sure that the society, the Overton window, still squarely is in the Internet's original value side, the end-to-end principle side. Because of the very real threats of earthquakes, it's easy for people to slide into the more draconian side.

But so far, I think NCC's been working well with us; we at MODA are working on ways to solve this on upstream, so to speak, instead of the downstream.

### Paul Wilson:
Yeah. I'm really glad to hear it. I often say that this term Internet governance, the term, was a discovery back in the early WSIS days. But of course, the discovery was that Internet governance has existed and has been in place and in evolution since the beginning, and it's the reason for the success of the Internet. But after 20 years, maybe people are starting to think, well, Internet governance is an old topic and we can move on to AI and blockchain and God knows what. 

### Audrey Tang:
NFTs.

### Paul Wilson:
It sounds to me like you're fully aware of and fully supportive of an ongoing Internet governance model and process in Taiwan that is needed to keep the Internet running.

### Audrey Tang:
Yeah. Our slogan for our ministry is hashtag free the future. And I think that is what I take from the Internet's core principles is not to foreclose future innovations in the name of serving the current multistakeholder interests. 

And I think this is really the foundation of the Internet ethos as I understand it, because the end-to-end principle is after all means that if both ends have innovations, people in the middle probably shouldn't curb it until it matures and so on. So, I think that is where we're very aligned in this particular matter.

### Paul Wilson:
OK. Just one thing. You mentioned W3C. Are you aware of changes in W3C and its structure and administration?

### Audrey Tang:
Yeah, I think we're the first to join in the new structure.

### Paul Wilson:
Okay. So, one of the things that the trust is supporting is the W3C Asia Pacific. So. that legal entity that will be the Asia Pacific hub is being supported by this structure as well.

### Audrey Tang:
This is a very favorable arrangement to us because before the new configuration, we would have to work through their host, Beihang, which of course presents political difficulties.

### Paul Wilson:
Okay. Well, that's great news. I didn't realize that you were first in. I'm not surprised really.

### Audrey Tang:
Yeah, this is again one of those window of opportunities. And within this window, I think pretty much all of the relevant working groups within W3C like decentralized identifier, verifiable credentials, and accessibility, of course, and e-payment and so on, we have corresponding departments joining. 

In particular, I think decentralized identifiers and verifiable credentials is going to be fast-tracked because the AI-powered interactive deepfakes can convincingly clone someone's voice or someone's video and so on. 

So, the behavior and content layer are going to be basically indistinguishable. and we have to go back to the actor layer, which is digital signature. But implemented incorrectly, it will become like real name whenever you post an email, which is useless. It basically decimates the agency of the journalism sector and civil society.

So, some sort of what I call ZKML, zero knowledge with machine learning, meaning that they can prove they're a legal entity of some jurisdiction without revealing exactly who they are. And so that's going to be very important. 

In fact, maybe that is the only legible formal speech afterwards and everything else will be a bot. Everything else will be relegated to a bot. It's a kind of different expectation, a zero-trust expectation. But I think leading up to our presidential election next January, we have to make such preparations. And next year, like many jurisdictions, have their elections.

### Paul Wilson:
And so, you see that as a concrete contribution which Taiwan will make through the W3C and through the new structure?

### Audrey Tang:
Yeah, basically piloting the way of zero-knowledge trust, without sacrificing pseudonymity or anonymity or civil liberties, yet guard against the effortless cloning — anyone with this laptop can just voice clone 5,000 people.

### Paul Wilson:
Yeah.

### Audrey Tang:
We live in interesting times.

### Paul Wilson:
Yeah, very. Good to hear.

### Audrey Tang:
So… All right.

### Paul Wilson:
You've got somewhere to go?

### Audrey Tang:
Yes, exactly. Enjoy your weekend.

### Paul Wilson:
Thank you.

### Audrey Tang:
Thank you.

