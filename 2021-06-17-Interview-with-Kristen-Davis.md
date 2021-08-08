# 2021-06-17 Interview with Kristen Davis

### Kristen Davis:
Afternoon. My name is Kristen Davis.

### Audrey Tang:
Hello, very nice meeting you virtually.

### Kristen Davis:
Welcome. It's lovely to meet you as well virtually. Shall I start by just telling you about what we're doing here? Oh, I've lost your image again. Doesn't matter.

### Audrey Tang:
You did?

### Kristen Davis:
Yeah, the camera is gone now.

### Audrey Tang:
Interesting.

### Kristen Davis:
Well, maybe whilst you're playing with that, tell you about...Oh, you're back.

### Audrey Tang:
I'm back?

### Kristen Davis:
[laughs] You're back.

### Audrey Tang:
I didn't do anything, honest.

### Kristen Davis:
[laughs] Thank you so much for being available for this interview. This was originally going to be a live interview on stage at Latitude59, which is a tech event focused on startups and SME in Estonia. COVID [laughs] has changed our plans, and as such rather than not getting information out to the startup community, I've decided to do audio interviews with our speakers, that I'm then going to collate into a text based report and share with everyone.

### Audrey Tang:
I see. I will keep an audio also here. I'll send you the local recording for maximum quality, so you can remix however you want.

### Kristen Davis:
Thank you so much. Do you have any questions before we kick off?

### Audrey Tang:
No, I'm fine. We've scheduled 30 minutes and I'm a bit late, so we can still get 34 minutes.

### Kristen Davis:
We will see how we do. I will kick off.

Audrey Tang, welcome. It's an absolute pleasure to have you with us. You are the digital minister in charge of social innovation in Taiwan, originally a software programmer. You joined g0v in 2016. You're a core member of Taiwan's Open Source Government. Welcome and thank you for joining this Future Signals report on cybersecurity.

### Audrey Tang:
Thank you, really happy to be here virtually and also good local time, everyone listening.

### Kristen Davis:
Our audience today is startups and SMEs. Those that don't have a lot of budget, experience, or expertise in cybersecurity. Our objective is to share with them news and views they can use based on next 18 to 24 months perspective. Lets dive in with our first question to you. Do you think the future cybersecurity is a technological government business or societal issue?

### Audrey Tang:
In my mind, cybersecurity is a cross-sectoral issue that is centered around the norms. That is to say, what is permissible, what is a good habit, much like how counter pandemic shapes different norms in different societies. In some corners in the world, lockdown, or take down, or top down, shut down, regimes are considered the norm.

But in Taiwan, we counter the pandemic so far with no lockdown, and we shape a very different norm, those based on cross sectoral collaboration on what I call People-Public-Private Partnerships, and so on. Like the virus of the body, cybersecurity is like virus of the computers, I guess. They also instill different habits in different sectors.

In some jurisdictions, they take a view where the state concentrates all the power, demonstrated power in the name of cybersecurity or counter pandemic, but there are also democratic policies that would much prefer, that's the social sector, the people who work on the core of the Internet itself, to settle on the norms. That the business and the government are part of the multi stakeholder regime.

### Kristen Davis:
Definitely. This is in fact, as you said, it's about going across the people private, public, the government, bringing everyone into it. I love what you said about creating different habits, as well. As you said, we're being attacked by this virus, be it COVID. Digital, we need to find new habits, new ways to do that. Thank you. Thinking about the next 18 to 24 months, what do you think will change or have an impact on how we treat our identity, trust and security.

### Audrey Tang:
Speaking about the post pandemic lifestyle, one of the most prominent trend is that of teleworking, tele education and things like that. For example, I'm having this conversation with you in my residence, but I have a virtual machine within the M1 Mac Mini, and that runs within that Mac, a simulated computer environment.

So much so that if there's any computer security issues, if there's any, like penetration testing, revealed issues, and so on, it only affects that particular virtual machine and not my computer. I can have several of these virtual machines running concurrently.

Compare that with the more traditional going into the office, going into an onsite premise and guarding that using traditional ways of centralized messaging controls or VPNS and such. This way of securing the edge is like building a habit of wearing mask, and washing hands, and vaccinate oneself, and that is to say the protection resides in the very practitioners of public service, or practitioners in office, and without requiring them to use specific devices or network connections.

The cybersecurity edge also translates into the policy space, where we need to figure out all those different ways to identify someone who's subject to public service, using ways that doesn't require face to face contact. I understand Estonia, just as in Taiwan, we have electronic ID cards in Taiwan, the National Health Insurance Card.

Because of the pandemic, we have now switched, that when people are quarantined at home, and they can use an app that display a QR code, and their doctor or psychologist can swipe the virtual NHI card using a webcam and scanning the QR code in real time.

All these were already in place before the pandemic, but not that much adopted, but because of the pandemic situations it serves as a great accelerator of these trust points at the edge, as well as building the network to be resilient and adopting, as I mentioned, zero trust related network configurations.

### Kristen Davis:
Interesting, you mentioned zero trust, I might come back to that in a second. For you, it's very much about this, how do we move from physical security boundaries to virtual security boundaries, be in the case of the networks or simulated virtual machines, as you spoke about, but also for our individual, it's not about having a plastic card or a key of some kind?

Now, it's actually how do we have a QR code that we can scan and therefore have a secure relationship over a digital interface such as this one we're doing now. Very interesting to hear about the QR codes, Might be interesting for some of our startups and SMEs, that also may be looking at ways to authenticate. Thank you for that. On zero civic trust, at the moment, what does that mean for you?

### Audrey Tang:
In my mind, when I became the Digital Minister in 2016, literally the first action I took was to recompile the Linux kernel [laughs] in the cloud service that powers my office. I adopted this system called "Sandstorm " @Sandstorm.io, which I was part of the crowdsourcing crowdfunding contributors.

Sandstorm comes to my mind when I think about zero trust, basically, Sandstorm allows any public servants in Taiwan to self service and install any open source software within the public service, but treating that particular software, it could be WordPress, it could be a markdown editor like HackMD, and so on.

Most of them are open source, I maintain the spreadsheet called EasyCalc or running in it. Sandstorm treats each and every of those application as hostile and malicious. It very strongly sandboxes each particular application running in it, changing the domain every time a new instance is made to prevent cross site script attacking.

It doesn't have a traditional allowlist or blocklist, rather it's based on capability sharing so that we always maintain an audit trail of who shared which instance of which document to what person, and so on. Instead of a more traditional whitelist, or nowadays, we call it allowlist.

Allowlist, the "trust but verify." This is based on zero trust, [laughs] we don't trust the applications, we don't trust the user at the edges, unless there's explicit privacy, capacity sharing, which may be audit and revoke at any given time. No capability is given to any particular application running in Sandstorm. That's what comes to my mind when I think about zero trust configurations.

### Kristen Davis:
Excellent, is Sandstorm available outside of Taiwan?

### Audrey Tang:
Yes, we worked with top notch service security researchers to provide penetration testing and file quite a few CVEs. Nowadays you can consider Sandstorm hardened. Recently, there's a thing they write up by Stripe to who covered this Sandstorm deployment story in Taiwan. It's Free Software, capital F, you can set up your own Sandstorm instance with the same self service infrastructure.

### Kristen Davis:
Thank you so much for that. That's going to be very useful information for our community to check out. Thinking about these startups, the small SMEs, organizations that need to build in some kind of cybersecurity in order to create a robust business.

Which do you think is the most critical to protecting this community startups and SMEs? Is it policies? Is it awareness and education? Is it policing? What's the most critical to protect their business?

### Audrey Tang:
Good norms, clear norms, and good habits is the most important. Like when people ask me what did I think about digital technologies to foster counter pandemic efforts, I always say digital only plays assistive role and a true technology is soap, hand sanitizers, masks and so on.

These technologies doesn't work unless people build a good habit to use them regularly, and so on. Especially in the configuration stats, put the power at the self serviced edges, and so on.

If someone doesn't have a good cybersecurity norm or habits, if someone, for example, a management is getting into the habit of assigning the route, or the super user, the full administrator privilege to the top management, to the leadership team who doesn't quite understand how this works and doesn't require that permissions after all.

If you have a bad habit of assigning all the permissions, just because, to the top management or top leadership, none of the best defense design mechanism can help you [laughs] because that is a self defeating habit to begin with. The same as counter pandemic adopt reasonable, clear to follow norms and habits. That's the most important.

### Kristen Davis:
Excellent advice. With regarding clear norms, I know that in Taiwan you've been doing numerous hackathons, in fact something that spearheaded our search. You've done this to promote civic engagement and foster Taiwan's cybersecurity also. From that, have you been able to build out a framework of norms or templates of norms that these small organizations can use? Is there some resource available?

### Audrey Tang:
Yeah, definitely. In Taiwan, including the Presidential Hackathon, we have many cross sector collaborations that result in what we call data collaboratives. One of the key takeaways is that we need to have the bedrock of a clear infrastructure of hardened cybersecurity, and so on, configured.

Exposing very clear open APIs so that startups, micro, and SMEs can build their own service layers on top of those well verified open API. This is the best of both worlds. Instead of saying that the system integrators and large vendors need to take care of all the access opportunities, such as virtual and augmented reality, chatbots and things like that, they get to concentrate on the ones that really stands the test of time and should do the cybersecurity parameters really well.

When we're procuring such services, in our procurement template there's a line that says if you buy a website and it says it only serves to people with sight, but ignore the people with seeing difficulties, then they could be disqualified for not working with the universal accessibility for discriminating against people with disabilities.

We have a same clause extended to site. If such large system integrators build a system that only interacts with human beings, but doesn't speak the open API, so Linux Foundation standard, then they could also be disqualified from future procurement for discriminating against robots. Well, we don't quite say that, but that's the fact.

> (laughter)

### Audrey Tang:
Basically it's like Lego blocks, the text violent experience that we built after changing a few parameters, become the mask pre ordering system. After changing a few parameters became the stimulus voucher dispensing system.

In just a few weeks from now, it will also become the vaccine reservation system, and so on. All this allows startups and SMEs to build their own innovations, but on top of a bedrock of procurements verified open APIs. I believe that is a template that could be adopted worldwide.

### Kristen Davis:
Definitely very interesting. I love that you're building inclusion, human and non human, into this as well, because that...and it can sometimes create exceptions and open up weaknesses in systems. Coming at it from a very inclusive angle means that we should be able to avoid the exception seen before.

### Audrey Tang:
That's right.

### Kristen Davis:
Thank you. We've already talked quite a bit about COVID, the impact of the pandemic on us as individuals and how we've talked about remote working and hybrid working. Let's think about cybersecurity management.

In fact, technically the old way that we approached it, physical perimeters, that's been blown out of the water. That doesn't exist anymore. We're working at home. We're working digitally. How do you think that cyber security management must evolve to handle this as we go forward now into this new hybrid remote?

### Audrey Tang:
Yeah. Again, drawing a parallel to the counter pandemic work in Taiwan, we're now dealing rather successfully, now it seems, the Alpha variant. We're now hardening our protection against the Delta variant, because each variant will create a very different challenge to the public health system. The keyword here is resilience. It's not defense. [laughs] If you bet everything on defense, as long as the new variants comes from abroad or even mutates locally, then you cannot anticipate how that variant behaves.

On the other hand, if we prepare to capacity without prescribing any particular playbook, we basically say, as soon as a new variant develops, we can actually sequence it in a couple of days and adjust our playbook to work in a resilient way to counter against whatever the impact that particular variant has."

It has a very much similarity with cyber security in the new century, in the coming decades, because each new attack vector is not going to announce how it mutates with you. [laughs] Only proactive work and active detection, as well as building around resilience and continuity, instead of building around a specific playbook or defense can protect oneself against these unknown dangers.

### Kristen Davis:
Certainly, this is it. As you said, no one announces when they're going to be attacking or what shape and form that that's going to take. Especially for large businesses, but also small businesses, being able to continue on with your business. That's one way in which you can ensure that your future is robust. You mentioned it's about resilience, not defense.

I think, definitely capacity building around that would be a good investment backed up for people. Last question for you, which is, we've talked about a number of different things. What is the one thing that we've not talked about? You've not told me that you believe startups and semi small businesses need to know and be considering in order to protect themselves to create future for best businesses.

### Audrey Tang:
I believe that Free Software with a capital F [laughs] is still very important. The reason why we adopted Sandstorm or Police or other free software technologies in Taiwan's digital public infrastructure is not a ideological choice.

It is out of thought that says if we empower the people closest to the edge with the full view of the system instead of security through obscurity, we actually invite everyone in the public service to serve as white hats, [laughs] to report as soon as possible, which lies of cost potential resilience challenges and so on. To give no trust is to get no trust. We trust our public service this way and they trust back by alerting us to the White Hat related reports and so on.

I believe a good relationship with the White Hat community is essential. Even as small and medium enterprises, you can still participate in bug bounties and other activities, not with an astronomical price, of course, but just to create good will with the White Hat community, and partly so that the White Hats understand, as in Taiwan, they are national heroes. [laughs]

They meet with president or the minister all the time that the team that found their three CVEs in sense storm called Def core team. Actually I announced their name in all my interviews, including this one so that they don't fall to the dark side, which always has more cookies. [laughs] To cherish your White Hat community, to build a relationship with the White Hat community, that's the one thing I would like to remind you.

### Kristen Davis:
Excellent advice. In fact, that chimes very much with one of the other people that I interviewed about this topic. How can people find out, for example, a disclosure policy? Do you have templates that are out there that the people could take a look at? If a White Hat finds a bunk in a piece of code, how do they communicate them? How do you build this trust and bridge between small businesses and the White Hat community?

### Audrey Tang:
Yeah, this norm is established in conjunction with the Hacks in Taiwan community, the Hit Com community, as well as TW search CC. If you search for a hit com zero day, then you can see the templates and kind of scoreboard. They're real time reports of the responsible disclosures of zero days, that gets the response not just from the public sector.

Nowadays they are working in very close partnership with the semiconductors industries and so on, does very critical infrastructure and critical economic industries in Taiwan. I think the White Hats do not just serve the public sector they serve the public in general.

### Kristen Davis:
That's a fantastic piece of information for our community here. Anything else that you'd like to share or any questions for me?

### Audrey Tang:
Yeah, that's pretty much it. Really, really good questions.

### Kristen Davis:
Thank you so much Audrey Tang, it's been an absolute pleasure having you with us here. Thank you so much for your time for sharing this information. I hope that when we have our next latitude conference we can welcome you back?

### Audrey Tang:
Thank you. So, just a point, you said that you're going to publish not the video just the audio?

### Kristen Davis:
Just the audio. In fact, what I'm doing is, I've interviewed yourself, I've interviewed Mike Rogers, he's the former head of US Cyber Command. I've interviewed Dan Shefet, he's an expert on privacy and IT law here in Europe. I'm including Chloe Messdaghi, who's actually a White Hat. I take your four interviews and I consider your signals, and I collate signal clusters.

For example, both you and Chloe talked about the White Hat community meeting whilst both you and Mike Rogers talked about zero trust. I also take where we're getting outlier signals, so maybe the faintest signals on the radar that we should be changing.

### Audrey Tang:
I see, that's really good curation strategy.

### Kristen Davis:
This is pulled together into a text report, but then people can listen to the full interviews if they wish to. I publish this on my website this weekend and Latitude 59, Startup Estonia and another of other communities, and indeed yourself and in your community they are very free to access it and share it, it's always free and it's open.

### Audrey Tang:
We usually publish my interviews as a transcript. If you're OK we'll get a transcript done.

### Kristen Davis:
That would be absolutely wonderful. It's an absolute pleasure. What I want to say is, I will see you again tomorrow.

### Audrey Tang:
Yes, it seems so.

### Kristen Davis:
The background will be different, the topic will be different. We'll be talking about digital democracy, but I'm looking forward to chatting with you again tomorrow. Thank you so much for your time today.

### Audrey Tang:
See you tomorrow. Cheers!

### Kristen Davis:
Take care, bye bye.
