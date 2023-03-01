# 2023-02-09 Meeting with FIDO CEO

### Karen Chang:
This shirt is...

### Andrew Shikiar:
Yes.

### Karen Chang:
FIDO Alliance always have a shirt for every plenary meeting in different city. Eventually we have the plenary in Taipei, so I would like to keep some t-shirts and stickers.

### Audrey Tang:
Awesome.

### Andrew Shikiar:
Yes, we've been working to have the Plenary Taipei for three to four years now. We had a very nice stay here, we had a very productive set of meetings. We appreciated the video that you did for the seminar on Monday.

### Audrey Tang:
Thank you. I think it was very well received. A lot of press coverage.

### Andrew Shikiar:
Yeah.

### Audrey Tang:
How shall we proceed?

### Andrew Shikiar:
Karen?

### Karen Chang:
I know Audrey is so good at what is FIDO or FIDO introduction, but we would like to have a very fast and simple FIDO introduction to everyone here. Andrew, maybe can we just go through?

### Andrew Shikiar:
You want me to go through the slides? OK.

### Audrey Tang:
I use TW FidO dozens of time a day.

> (laughter)

### Karen Chang:
Then Jeremy could have a conversation with you all to talk about the international cooperation like either you or Homeland Security, CISA, or W3C, etc. Then, we could have an exchange, everything like what FIDO could help or what FIDO could help to Taiwan or MODA.

### Jeremy Grant:
There's probably a broader conversation. We'd love to learn more about some of your goals. FIDO's expanding beyond authentication into other things that touch on the identity, biometrics, and privacy side of things, so are there other ways that we could look to collaborate and perhaps provide some tools that could support some of your initiatives?

### Audrey Tang:
Certainly, and we have the head of the administration for digital industries in charge of digital transformation, the cybersecurity industry, and the adoption of cybersecurity in industries.

> (laughter)

### Audrey Tang:
I'm sure that you will have many in common. And the head of Democracy Network, also our account representative of W3C. We just joined yesterday the Decentralized ID Working Group.

### Andrew Shikiar:
You did?

### Audrey Tang:
Yeah, we're putting a lot of bets on the DIDs. Taiwan is a unique situation internationally. We want to interoperate actively with the eIDAS or as many identity centers as possible, but we cannot join the EU very quickly. [laughs]

Just like certain other countries that cannot quickly join the EU, we're looking at ways to tap into the common infrastructure, so that we can share some of the underlying tech. That's why it's called the Department of Democracy Network, not the Department of International Cooperation.

### Andrew Shikiar:
That's very interesting.

### Karen Chang:
For your information, we have more than 300 people attended the Monday Taipei seminar. Thanks for your video. People amazingly liked the video, really liked your talk, and asked me if that could be available to share?

### Audrey Tang:
Of course. It's all in Creative Commons. Everything we do are in the commons.

### Karen Chang:
Anyway, thank you so much.

### Andrew Shikiar:
I know you know a lot about FIDO already, but I thought it was a good chance to level set on what we're talking about these days with FIDO Alliance, and what we see driving the market, and talk a little bit about what we our priorities are at the organization.

These types of numbers, fraud numbers, account takeovers, fraud costs, these are the things that I've always driven FIDO Alliance to try to solve the password problem. The fact of the matter is, the vast majority of these issues track directly back to dependence on knowledge based credentials — passwords in general.

We need a better way, we know that, so this is what we've been talking about for some time. I think this is very important. The way we've always done things is what we call legacy authentication, knowledge based authentication, and even 2FA.

SMS OTP, more and more you read about bypass attacks. We have major concerns about consumers not understanding the threats they're in, but more importantly service providers doing what I'll call "Check the box" 2FA, your SMS OTP. It's not good enough.

What we want to do is move towards modern authentication, and FIDO authentication, which inherently is an efficient system, does not involve sending a human readable shared secret over the network, so it's easier initiated, cryptographically secure.

This comparison, compare and contrast, is something that we message on and try to get across to industry and government, often.

### Audrey Tang:
Can we just say "Passkeys, not passwords"?

### Andrew Shikiar:
Yes. Largely, yes. I think passkey...exactly. That's the contrast. Password is something you know, passkey is something you have. That's what we've been doing all along. Everyone has a chart, looking at the top right corner, always, but it's been a focus. Simpler and stronger than both passwords and SMS 2FA.

What's interesting about this, and we'll talk about it throughout the slides, is that our tagline is "Simpler, stronger authentication." The conversations we used to have were always about the "stronger" piece. It was always the security posture, but more and more the conversations really begin and end with usability.

There's a graveyard of old strong authentication technologies that were too hard to use.

### Audrey Tang:
Yeah, like memorizing 52 English words.

### Andrew Shikiar:
Yes, or having the token keychain problem, or PKI, asking consumers to do this was too much. Consumers will opt out, and employees will just work around it. It's user friendly public key cryptography.

You know how this works. I don't need to explain public key cryptography to you.

### Audrey Tang:
Card-carrying cypherpunk, here.

### Andrew Shikiar:
What's unique here is, what people don't understand is the importance of the authenticator mediating this relationship. The local user verification; everything's local of course. A bit about who we are. I think this is important to talk about. The main reason is to understand what's happening within FIDO Alliance.

When Apple joined FIDO at the beginning of 2020, that sent a very powerful message to the world, that this is really the only body working on this, and if you want to use standards based strong authentication, you look to FIDO Alliance.

One unique thing about FIDO is the standards efforts is there's no competitive body. If you want to use standards based authentication, you come to FIDO because literally every company that you want to have working on this is working on it together, inside of FIDO Alliance.

We've seen good adoption. What's interesting, we had adoption from day one, with a lot of big brands using FIDO, the mobile native apps, security keys, but now with passkey we have the opportunity to take it to the next level. We'll talk about why.

Government adoption. I thought your talk really set the stage for the seminar so well. I came away so impressed by exactly how ingrained FIDO is in Taiwan.

### Audrey Tang:
It's everywhere.

### Andrew Shikiar:
It's amazing. I hear it and read about it, but actually hearing people talk about it, and seeing the presentation, it is everywhere, which is remarkable.

We're seeing that not every country is as aggressive as Taiwan. Korea's been pretty systemic with FIDO support, but more and more we're seeing governments either reference FIDO or leverage it for consumer services, identity schemes, employee protection, things like that.

### Audrey Tang:
Taiwan's criminals, scam and phishing is very developed.

> (laughter)

### Audrey Tang:
A very strong criminal activity, so without FIDO support, the administration for digital industries, if just relying on server hygiene awareness lectures alone, is a lost cause.

### Andrew Shikiar:
That's exactly it. It should be hard to execute an attack, and it's too easy right now. You can license at a professionally serviced phishing kit, and then spin up a phishing site in no time.

### Audrey Tang:
I explained this to our President. I said, "It's a measure for defense." We change the battlefield so it works better for the defense side, to make the attackers pay more. Whereas the old battleground, the defenders have to pay more.

### Andrew Shikiar:
That's interesting.

### Jeremy Grant:
It's similar to what we've talked about. Nothing's hack proof, but how can you eliminate scalable attacks? Passwords, there's millions, billions, that are out there. That's scalable. If it comes down to, now I have to compromise a single device, a single set of keys, that's a very different story. It's a good way to think about it, flipping the script. I like that.

### Andrew Shikiar:
The other question is, how do you scale? Ultimately, we want to take passwords out of play. Passwords are a threat, we talked about that. While we have good initial adoption, to really scale it needs to be more usable.

You know about Authn. It's fine for platform...on the web. This is mainly about the web, not mobile apps. WebAuthn is good, in the sense that it allows any website to enable a password as login, but the way it's always been implemented has had some issues, usability issues.

One is that there are awkward browser prompts and some awkward UX loads. In fact, we launched a UX committee, and we did a UX guide on the best way to deploy FIDO for platform authenticators. Even then, we see some inconsistencies across browsers and across operating systems.

It wasn't quite intuitive enough. I think there's areas for improvement in usability just on the OS side. The other thing is that part of the strength of public key cryptography is that the key is sitting on the device, but it's also a limitation from a usability standpoint.

By allowing the private key to be secured safely across a secure cloud, that's a much better user experience. I think it has the added security benefit of not forcing a service provider to keep that password front and center for account recovery and re enrollment. That's why we've done passkey. You get that, of course.

### Audrey Tang:
You can take out the Captchas. The passwords, when it's eliminated, and with a good UX, the Captchas also goes away, which is a major usability and accessibility gain.

### Andrew Shikiar:
Yes, absolutely.

### Audrey Tang:
Our new services all use Cloudflare Turnstile, which uses passkey in lieu of "Identify this car" or whatever Captcha.

### Andrew Shikiar:
I did not know. That's great. That's fantastic. That's what we're doing with passkey. Usability, beyond that, we have UX working groups. If any of the Taiwanese government agencies are interested in what we're doing in usability, we plug you into those work streams. It's actually a very unique group.

A standards body's work is sitting in W3C DID Alliance. Typically, you have a bunch of people sitting around a table debating where a semicolon goes in the spec or whatever it might be. This group, these are design experts. These are cool people, designers and UX people, who are passionately focused on the user journey.

### Audrey Tang:
Great. We recently invited Muan, who used to be head of accessibility at GitHub, a Taiwanese, to join our National Institute of Cybersecurity. She will be heading a team with the digital service department for the UX of systems such as our upcoming 6000.gov.tw. I'm sure that we can work together.

### Andrew Shikiar:
That'd be fascinating. Accessibility's been a focus point for us as well. We have accessibility guidance issued this year. Right now — next week actually — we're kicking off our next UX guidelines study, which will be on passkey. When we do this study, it's a three part test.

First, it's a moderated test where the research firm works with the person and walks them through what it's going to look like. We get the live, interactive feedback. Then we do an unmoderated study where we have a live site. We watch to see how successful they can be in registering, enrolling a passkey, and then some more moderated testing to get more qualitative feedback.

Included in our test subjects are four sightless individuals. We're going to test for people with vision issues.

### Audrey Tang:
We're very passionate about it.

### Andrew Shikiar:
Great. That'd be great to connect on that. I can send you both the accessibility paper, and then details...

### Audrey Tang:
Excellent. I'll refer the experts to you.

### Andrew Shikiar:
That'd be wonderful.

### Audrey Tang:
We've got 20 national languages, including sign language, so we're in a very unique...

### Andrew Shikiar:
Yeah, I'd imagine. That's fascinating.

It talks about passkeys. I don't need to go through this much more, reiterate it. This is one other key thing about passkeys. I mentioned it. We've never had a term for FIDO. Behind the scenes, we know what FIDO is, but consumers don't know what FIDO is.

In fact, we put a straw man up of a consumer brand, what we call the I Mark, that companies could use at point of sign in, but no one took it. With passkeys now and with every major platform standing behind it, we now have a term.

Our belief is that now people will start understanding, "Wait, passkey's an alternative to password," and they'll start getting the common vernacular, which is very important. The consumer education is everything for consumer uptake.

We think that by having this logo program, by having the terminology, we'll start building consumer awareness, consumer utilization. We've seen some early adoption. The next slide might show it where we talk about live passkeys. I'll cover that in a second.

We're talking of the mission. We're taking passwords out of play. That's amazing. For some use cases, you can use what we'll call a device bound passkey. If you have a higher security scenario or high assurance scenario, you could have a bound passkey that is not synched, typically on a security key like YubiKey or such.

We also think, again, usability. The digital divide's a real thing, and not just users with disabilities, but I think about older people. Digital transformation left a lot of people behind. Part of that is having to do we have so many accounts and so many passwords for each account.

### Audrey Tang:
Yeah.

### Andrew Shikiar:
If every store is online now, and people are used to going to a storefront or calling someone, that's no longer available. Having to manage passwords sets both a barrier for them, but also puts them at risk because they'll use an easy password. It'll be too hard. They're locked out of their account, or their account will be taken over.

### Audrey Tang:
SMS OTP is super unfriendly to adult people.

### Andrew Shikiar:
It's unfriendly and risky.

### Audrey Tang:
Risky too.

### Andrew Shikiar:
It's very unfriendly.

### Audrey Tang:
Like worst of both worlds [laughs]

### Andrew Shikiar:
Yeah, it's the worst of both worlds. As an aside, we made some predictions earlier this year. One of my predictions was that smishing was going to be a big thing this year, SMS phishing. I think that consumers are becoming more aware of phishing. There's some awareness of this, but smishing, SMS phishing is a new thing.

### Audrey Tang:
Not for Taiwanese people. [laughs]

### Andrew Shikiar:
Not you.

### Audrey Tang:
During the whole pandemic, we get consistent...

### Andrew Shikiar:
Oh, was it?

### Audrey Tang:
...smished. In fact, we launched a g0v.tw URL shortener specifically to counter smishing.

### Andrew Shikiar:
Interesting. In other markets too I think smishing is going to be a bigger thing. The silver lining there is that, hopefully, it'll drive more people to look for stronger MFA and stronger authentication.

We know that Google, Apple, and Microsoft have all committed to support us in their operating systems. Android, Chrome, iOS, MacOS, iPad OS are all live. Microsoft has some support capacity today. They will have, we'll call it, OS level support, meaning you can initiate and synch keys in Windows, later this year.

Once all platforms fully support it is when we'll start seeing a lot of added industries deploy it at scale. We've got some very early deployment commitments, PayPal, Shopify, Docomo out of Japan, KDDI. Those are the ones we know of. I heard this week about Robinhood cryptoexchange is using it. In our meeting this week, a major American bank told us that they are going to be using passkey. A major, major retailer, e commerce provider, will also be doing this.

As we move into 2023, I expect that we'll see easily a half dozen we'll call flagship brands deploy passkey.

### Audrey Tang:
I think my GitHub account is already a passkey.

### Andrew Shikiar:
Yep, it is.

### Audrey Tang:
I don't use passwords to log in anymore. It's just touch ID.

### Andrew Shikiar:
Yeah, it's fantastic. Some other work — Jeremy alluded to this — beyond user authentication, we're doing work on identity verification. The recovery process remains a potential back door for social engineers, so we want to find ways to match our commitment to possession based authentication with possession based onboarding and recovery.

One thing we're doing is certification testing for document authenticity initially, and then we're going to be adding in more for face verification, liveness, selfie match, and things like that.

The other key work we're doing is our IoT, which I think is a message that should be very important in Taiwan in particular, and focus on the device on boarding piece of it, so from the manufacturing standpoint and making sure that it's quicker and more secure to manufacture and deploy IoT devices, particularly in interesting use cases, supply chain, for example.

This is our spec. It's called the FIDO Device Onboard Spec. The spec is published. We'll be launching a certification program around this probably in the next couple months, at which point I expect this to become more and more of a focus for FIDO Alliance in addition to the work we're doing with passkey.

That's what we have. This is what we told people on Monday. We want people to deploy today. Obviously, there's so much activity already in Taiwan. That message has already landed. Focus on usability.

The other thing is we, as a body, issue a lot of best practices. We issue a lot of guidance. We talked about the US guidelines. We're also looking at things like how to deploy FIDO and passkey inside your enterprise for different types of use cases, how to deploy to consumers.

The membership is deeply committed to this mission. We'll continue to put guidance and materials out there. Again, we appreciate this collaboration with the Taiwanese government.

### Audrey Tang:
Excellent.

### Andrew Shikiar:
That was a very quick run through.

### Audrey Tang:
Awesome. Anything you'd like to add?

### Jeremy Grant:
No, I think Andrew covered it pretty well. My role is I used to lead the digital identity team at NIST and also led the Obama administration's national strategy for trust and identities in cyberspace.

My role with FIDO — six years now, I think — has been as an advisor, helping them with government engagement across the globe, in part because — how's s the best way to say it? — FIDO changed the paradigm.

There were a lot of regulations where pointed to either one time pass codes, they pointed to PKI. FIDO was something that was new and different. There's a lot of work to do to run around the world and educate governments.

A lot less work needed in Taiwan, obviously. You all have been quite out in front on all of this. From a standards, policy, regulatory perspective, we've been doing quite a bit of that. That's part of why I'm here today.

I'm still based in Washington, DC, still engaged globally on a lot of different things on the digital identity front. That's essentially my role, but he's the one who's in charge.

### Audrey Tang:
Anything further, Jang Hwa?

### Jang Hwa Leu:
Thank you Karen, for inviting us to this meeting and to talk about changing our industry.

### Karen Chang:
FIDO will have some activities in Asia or worldwide. Next plenary will be held in Dublin. In October, we'll be in San Diego. We'll come to the plenary, and we will have the first ever FIDO ASEAN summit in August or September. We have FIDO online training collaborated with ITU.

### Andrew Shikiar:
Yes. Working on some professional training programs.

### Karen Chang:
Yes. Also, we have Identity Week Asia. It will be held in Singapore, IWA 2023 in November.

### Andrew Shikiar:
Yeah, that's in November.

### Andrew Shikiar:
In the ASEAN summit, we're anticipating a lot of regional governments not just from the ASEAN countries, but throughout Asia to come. The key industries we're going to focus on there are government and banking, naturally.

One output from this week, and having seen all of you speak, the Vietnamese government has decided to join FIDO Alliance and follow suit. They're keen to learn from other governments such as yourself. Once we have the details finalized for this summit, which will be September in Nha Trang, it would be wonderful if you could send a delegation.

### Audrey Tang:
Sure. I'm looking forward to it.

### Andrew Shikiar:
Super.

### Karen Chang:
In the summit, Thailand, India, Malaysia, Singapore, I believe all of them will be in there for that summit. I believe so.

### Audrey Tang:
As I mentioned, I think accessibility and usability will be our main goal this year. To comprehensively counter against SMS phishing and phishing in general, if we want to say, "OK, pass keys, no passwords," we better follow through with that.

For example, during the pandemic, the civic hack community invented a novel way of a privacy-enhancing technology where you just scan a QR code, and it sends an SMS, a ring of code. Without divulging your mobile phone number to the venue, you can still get social notifications. It's more private than many other designs.

The thing with that is, of course, people living with blindness cannot scan a QR code, [laughs] so we need to design with an extra amount of care that says, "OK, they can still stamp their way in." If they stamp their way in, you better put it in a kind of ballot box so that people queuing after them don't see their phone number and so on.

It's not just usability for the pass key scenario, but also for people who have not yet migrated to pass key. They must feel that there is a smooth transition for them, especially if they have accessibility needs. Once we achieve that, then it will be much easier for us to tell the industry you now have to convert. That would be my main objective this year.

### Andrew Shikiar:
If and as you come across anything you think that we could be doing from a bio specifications standpoint to improve accessibility or else wise, please let us know.

### Audrey Tang:
Excellent. Anything from our web3 department?

> (laughter)

### Eric Juang:
Because now we are a member of W3C DIDs working group, and we don't know quite is the passkeys can interoperate yet. Maybe we have a true bridge for decentralized identity and FIDO. Maybe we have things to contribute to this issue.

### Audrey Tang:
It was mainly the idea of some web3 wallets already use, for example, the Google login. The Google login can also, like in Kukai, that app, the rule of intra rules as a digital signature that can be used to see a threshold key for the Web3 part of the world.

Of course, the Google sign in flow itself has been revamped by the passkeys, so some way to bridge these two together so that people feel natural, like I'm not creating specifically a public key pair for Polygon, for Tezos, and things like that. Rather, the wallet lives on the same passkey device as I usually use. That would be very useful.

In Taiwan, we use the TW FidO to also sign official document through the KCS, like the old standard. We have to support both interfaces within the same app. For some circumstances, the user gets confused, like, "Am I signing or am I authenticating?" and so on.

A much more streamlined view for those di identity parts and the signing part will help everybody involved because the Web3 is really just a bunch of people signing documents. There's no [laughs] encryption in cryptocurrency.

### Jeremy Grant:
Thank you for saying that, by the way. I've had that argument before, "Oh, it's crypto. It must be secure." Let's not...

### Audrey Tang:
It's just digital signatures.

### Jeremy Grant:
I'd say, within the Web3 ID community, we don't yet have consensus. Some people are suggesting we should be using FIDO. Others are suggesting we need to come up with a new authentication protocol just for Web3 ID. As you might imagine, we're very much, in this camp, not looking to complicate things.

That space still is not quite mature. A lot more work needs to be done. Certainly, if you guys are all involved now in Decentralized Identity Forum and other initiatives, I think it's good to be advocating on that front, to be looking to leverage FIDO.

It's also been interesting to me, the emergence of passkeys has been a reflection of the reality of how difficult it is for people to manage private keys. This has, I think, been a reason why a lot of Web3 initiatives with identity, or cryptocurrency for that matter, have been struggling. Most people don't know how to manage private keys.

### Audrey Tang:
Exactly.

### Jeremy Grant:
The ability to sync them, while it's a little less decentralized perhaps than some of the purists would like to see, makes it much more usable for everybody else.

### Audrey Tang:
It turns out people just want to avoid enter login.

### Jeremy Grant:
Yes.

### Audrey Tang:
There are multiple ways to do that without full decentralization.

### Jeremy Grant:
If you read Moxie Marlinspike's blog of about a year ago, they've been playing around with web3. It turns out it's just new middlemen.

### Audrey Tang:
I know. It's easier to afford them, but nobody's doing that, I wonder why. [laughs]

### Jeremy Grant:
We're of like mind on these things, that's good.

We were talking on the way over here. One of the things that's been eye opening this week, we've been aware for some time of the great ways that you've been using FIDO in Taiwan.

One of the things we do, actually, in the Government Deployment Working Group, that Karen chairs, is case studies from different governments across the globe. We think it'd be really interesting to do a case study on what you all have been doing with FIDO here, if you'd be interested in collaborating with us. I assume that might be...

### Audrey Tang:
What was that?

### Andrew Shikiar:
Yeah, we'd write one up. There's different types of case studies we do. Typically, we would send some questions, and we'd set up either an interview, or you'd type in the answers, then I have a writer on staff who could write this up. That's one type of case study. That's the easiest step.

We have your presentations from this week, as well. Being able to archive those as well, and share. Having archived presentations is also a very powerful way of conveying what you're doing.

### Jeremy Grant:
We did a similar one a few years ago for, in the US, login.gov, which is...won't quite call it the single sign on system, and it's not used everywhere, but they aspire to. login.gov and Yahoo! Japan, I think, were the first two big sites that scaled to work with FIDO2.

We did one looking at login.gov, and it's been nice to promote around the globe as one way governments can use it, but there's a good story here for Taiwan to tell to governments, so we'd love to do that.

### Audrey Tang:
We don't need to build login.gov.tw, because there's already TW FidO, so we can just piggyback on it.

### Andrew Shikiar:
Yeah, as you were talking about TW FidO...Yeah, that would be good.

> (laughter)

### Audrey Tang:
Our Ministry of the Interior, who also paid our membership fee...

> (laughter)

### Audrey Tang:
Yeah, I think the interoperability really is key, because in the previous generation, the Citizen Digital Certificate, also built by the Ministry of the Interior here, there is no way for it to interoperate with, say Azure AD or other vendors, because it's n times m, everybody has to write a lot of data.

With TW FidO, nowadays we just say, "OK starting, I think April, all of the Ministry of Digital Affairs employees will switch to passwordless," so it will be CrowdStrike on the device authentication part, and TW FidO on the Identity part.

It turns out HIRD and Cloudflare natively support this, without even knowing our existence. That's what open standards do. Then it would just transparently work, and we eliminate a very large vector for cyber threats, which is impersonation.

This is a very good story to tell, the approach to the CISOs and say, "You can run this on a negative budget. You can save money." It's a good start for all senses.

### Andrew Shikiar:
Yeah, absolutely. That's fantastic. There's probably a case study here,  a good take away as well.

### Audrey Tang:
Yeah, how we approach the Zero Trust authentication, safeguarding the endpoints, and so on, starting from moda, but before the end of the year to all the different ministries deploying T-Road. The only reason why we can scale so quickly is because, again, it is an interoperable ecosystem. Happy to share.

### Andrew Shikiar:
Wonderful. Karen, we need to work that out.

### Audrey Tang:
Excellent.

### Karen Chang:
Thank you so much.

### Audrey Tang:
Thank you for your time. Thank you very much.



