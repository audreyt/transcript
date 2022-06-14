# 2022-05-31 Conversation on IRMA Idemix

### Audrey Tang:
Excellent. With your informed consent, let's begin.

### D.T. Lee:
Good. [laughs] Let's proceed then. Jonathan, would you begin the discussion of the [slide presentation](https://issuu.com/pdis.tw/docs/2022-05-31_johnathan_levin?e=0)?

### Jonathan Levin:
Sure, I'll happily take it from here. Just a quick note before I begin, most of the presentation, it will just be me going over a slide presentation, but I do have a demo that requires me showing a few things on my phone to the webcam. You can resize the size of each window if you need to make things larger if things are hard to see.

If anything is hard to see, please interrupt me so I can make it easier. The other thing...

### Jonathan Levin:
...Sorry.

### Tanja Lange:
Also, note that when we did the trial run, we couldn't read the phone until we did the full screen.

### Audrey Tang:
Mm-hmm. OK.

### Jonathan Levin:
I know for a fact that some of us have smaller screens than others, just so that everyone is able to access the information. One other quick thing I wanted to say is that the slides are actually uploaded to the URL that you might see at the top of the Firefox pitch. You're welcome to follow along independently if you wish.

From this point, I'm going to full-screen the slides, which actually means I can't see anybody. You'll have to interrupt me vocally if necessary. Please feel free.

Just to maybe say one or two quick things about the background of this. This comes from actually several months of discussion that Tanja, D.T., Bo-Yin, and I have been having. I believe D.T., on his side as well, has been having discussions about making the various COVID-19 contact tracing and vaccine protocols a bit more privacy preserving.

Some of this discussion actually predates the recent changes. There's one aspect that we were still interested in discussing, which was this idea of using privacy preserving vaccine passports, and to specifically use this protocol, Idemix, and this tool called IRMA.

As a very broad start to this discussion, what we really are trying to do is when someone needs to show vaccination record, for instance go to a nightclub or a bar, then what they're really showing is that they own some credential. Here, we're showing we have a vaccination record. This credential has to be valid to allow people to enter.

We want to be able to ensure that these credentials are authentic and that they belong to the person who's presenting them. On top of that, of course, we would love to protect people's individual privacy as much as possible. These are the overarching goals that we're trying to achieve in this context.

However, there's a problem, which is that, for instance, these yellow cards are incredibly easy to forge. This was a recent article in the English language "Taiwan News" that showed somebody selling fake vaccine records on Shopee for 500 NTD. This is itself quite a problem, going back to our goals.

This isn't the only problem, which is that even if these are authentic vaccine records, they still contain things like your name, your date of birth, your passport number, your ID number. This is a lot of private information on these cards that you would be revealing to someone when you're using them that doesn't actually tell them that you're vaccinated. This is extraneous private information.

### Audrey Tang:
Since you said I can interrupt anytime.

### Jonathan Levin:
Please.

### Audrey Tang:
To enter a bar, or really, any of the places that requires such a yellow card, you first have to prove that you're above a certain age.

### Jonathan Levin:
Yes.

### Audrey Tang:
Usually, the way people do that, not just in Taiwan, but everywhere else, is driver's license and so on.

In the, I think it was the verifiable credentials, W3C spec, there was a spectrum that said that the fact that we're over a certain age is considered non-private. It's OK if everybody knows whether I'm an adult or not because there's no way that you could be re-identified. The norm here is to show this yellow card in conjunction with a ID card.

I'm just pointing out that the solution, whichever it is, if it doesn't also obviates the need to show a ID card or driver's license, then at that point probably would be moot. Exactly the same information and more is on the driver's license. Just an observation.

### Jonathan Levin:
That's an excellent point, and also, a very good segue to my next slide. Basically, what this type of procedure or this type of process is called is a so-called attribute-based credential. For example, showing that you are old enough to go to bar in the first place is showing that you have some attribute that you are over 18 in Taiwan.

Also, that you have some attribute that you are vaccinated. This problem of implementing an attribute-based credential system that is private is exactly the problem that this tool IRMA has been designed to solve.

IRMA is an existing smartphone app that's an online service that's developed by a privacy non-profit, Privacy by Design Foundation, in Nijmegen in the Netherlands. I'm not sure if you've heard of the before.

### Audrey Tang:
No.

### Jonathan Levin:
They have their fingers in a lot of different privacy-preserving technologies. IRMA is based on this protocol called Idemix which is doing exactly what we're trying to do which is prove you have some attribute based on a selective disclosure that only requires you to reveal information that is relevant to the thing you're trying to do.

On this slide, what I've done to try and make the information clear because there will be a lot of text, I've tried to put actors and people in italics and any vocabulary that's necessary to pay attention to in bold.

At a basic level, the way IRMA works or Idemix works is that users are obtaining a cryptographically signed credential from some issuing body, an issuer. This could be for instance, the Taiwan CDC issuing a vaccine record or your city or county government issuing you a record stating that you are over 18 for example.

A credential itself, though, is not the fact that you are over 18. It's actually a set of attributes where each attribute is an atomic piece of information.

An attribute could be, for example, a vaccination date like the date of your last booster. Or it could be that you are over 18. Or it could be your address or the city you live in to prove that you're a resident of Taipei, for example.

Additionally, we have verifiers who need to know certain attributes to provide some service. They don't need to know all attributes. In this case, a verifier might be the bouncer at a night club who should know my age and vaccine status to let me in. They don't need to know my name. They don't need to know my exact birth date.

Users are then only required to reveal certain attributes, the necessary ones, while they basically cryptographically prove that they have possession of the authentic parent credential.

They don't reveal all the attributes of a credential. They just reveal the ones that are necessary, but prove the entire credential they own is a valid one. I have a valid vaccine card for example. The verifier will learn then only about the revealed attributes but nothing about the unrevealed ones.

As a bonus, all of these verification and issuing sessions are anonymized. This prevents verifiers and issuers from tracking users even if they're cooperating and colluding with each other.

At this point, I'm just going to give you a short demo of how this looks like. I have two demos. This is the first half. If you want to look at any of this up close, I have some links on this slide for you.

I'm going to do a context switch and now go to this website that I set up, https://irma-tw.jlev.in. One moment. I hope that you can now see a banner that says IRMA Demo Taiwan.

### Tanja Lange:
Still working on it.

### Audrey Tang:
I'm following another browser screen.

### Jonathan Levin:
Great. The very first thing that you'll see at the top there is a banner that says download your vaccine record here. I won't read all of this text. What it's basically saying is that I made a dummy vaccination record that you can download using my fork of the IRMA app.

This vaccination record is a single credential that contains this set of attributes, so it contains your name, your ID number, whether you are fully vaccinated against COVID, the name of the vaccine, when you finished getting vaccinated, if you've been boosted, the name of the booster, and when you last got a booster shot.

It's very simple. This corresponds to a website that maybe the CDC would run, where people can download their vaccine record. When I open the IRMA app on my phone, it takes me to this welcome screen that is an empty collection of credentials. At the bottom, I'm not sure if you can see, at the bottom there's scan QR button.

When I press that, I can now scan the QR on my screen. Now at this point, what it's doing, this is the default behavior of the JavaScript front end. It asks for a pairing code, which is displayed on my phone and that's just to prevent session hijacking, but it's also very customizable. I will enter this.

Now on my laptop screen it's saying follow steps in the IRMA app. What's happening in the IRMA app, it's showing me, hopefully you can see this. Tell me if you can't. Showing me the credential I just downloaded. This is for Jimi Hendrix. It has all the information.

Fortunately, Jimi Hendrix has been vaccinated and boosted. Then at the bottom it asks me if I want to save this credential. I want to save. Then back on the front end, it gives me a success message. This was the entire issuance process.

Now, if you scroll down on the demo website a bit more, you can now verify this vaccine record. Again, I won't read all of the text here. It explains a little bit what's happening. What essentially, this is doing is it's starting another IRMA session that is checking if I satisfied the following four attributes: that I have been fully vaccinated, that I have some vaccine name, that there's a date in the record, and that I have received a booster shot, and it requires...

### Audrey Tang:
Then I post this QR code for you to scan?

### Jonathan Levin:
Mm-hmm.

### Tanja Lange:
Exactly, right. The bouncer at the bar but it's not posting it's an interactive barcode.

### Jonathan Levin:
Exactly. Sorry, good question.

### Audrey Tang:
It has to be a active one, because otherwise you would just run a fake app.

### Jonathan Levin:
Exactly. This would be corresponding to, for example, the bouncer at the bar having a tablet that is constantly showing these new QR codes for people to scan as they enter.

### Audrey Tang:
Which means that it's not a parallel process. It only scales per bouncer.

### Jonathan Levin:
Correct. Yes, but it's analogous to a bouncer checking someone's ID. In terms of, yeah.

### Tanja Lange:
The tablet will display the big check that it's OK.

### Jonathan Levin:
Now I will do the same thing. I will on the IRMA app, scan this QR code. It's again, asking me to enter a pairing code, but of course, I think at the bar this would probably be disabled.

### Audrey Tang:
You're saying, could be disabled.

### Jonathan Levin:
Yes. Now on the app, what it's actually asking, it's asking me for my permission to reveal these four attributes and I have to grant consent to reveal it to the IRMA server. I hit yes, and then the tablet would be displaying.

### Tanja Lange:
At that point, you know which ones they want to see and it will only tell about those credentials.

### Audrey Tang:
Yeah, I'm aware of that.

### Jonathan Levin:
Exactly. Then on both the tablet and my phone, there is a success message displayed. Then at this point, the bouncer knows I have a valid vaccine record, and I can be allowed into the bar. Let me now do a quick context switch back to my slides.

### Audrey Tang:
I have a couple of questions.

### Jonathan Levin:
Sure.

### Audrey Tang:
First of all, the active QR code expires. It says, "Oops, you've not used this for a while. You have to hit try again." That's by design, right? As a bouncer, I have to constantly reload that QR code.

### Jonathan Levin:
Yes. I have a slide at the end that talks a little bit more about the existing libraries that are available for IRMA. What you can essentially do is modify the frontend to be constantly generating new sessions. Anytime you get any type of results, you get a new session QR code displayed.

As soon as anything happens, the bouncer can then have another session happen immediately afterward.

### Tanja Lange:
This is about how it's being used. I think Audrey, what you were asking is whether the session expires. Actually, the same QR code if it's not being used can just stay there until the next person.

### Audrey Tang:
Right. It's not necessary for it to expire. Because I don't see a cryptographic reason for it to expire if it's not used.

### Tanja Lange:
The cryptography behind it is strong enough that we don't need a time out. [laughs]

### Audrey Tang:
That's the first thing. The second thing, so we're not comparing against paper at this point. We're comparing against this app called the Taiwan Social Distancing App or the TSDA. The TSDA is a wallet for the EUDCC, which is also the vendor that the Netherlands used to adopt. I think they relax everything now. Used to do.

I think one of the reasons why EUDCC was used over IRMA, because Netherlands has both, is a very practical one. Simply that a verifier and the credential presenter, neither requires an Internet connection when using the EUDCC.

For the IRMA's case, if either side loses Internet connection or if it takes a very long time to transmit, which could be the case if the bar is underground. Then it loses its validity. Do you have an answer to that?

### Jonathan Levin:
Those are good points. I haven't considered this particular angle of why that was used in the Netherlands over IRMA. What I do know, because I spoke with the developers of IRMA, is that they were investigating using IRMA for vaccine passports.

Actually, the roadblock they encountered had more to do with the Apple and Google Play stores, not allowing IRMA to be used for anything related to COVID. There is a policy that only developers associated with governments can store and process health information related to COVID.

### Audrey Tang:
Yeah, I'm aware of that. The TSDA is the app that requires also the state sponsorship because it uses Exposure Notification Interface, the ENI, which is the Bluetooth contact tracing thing.

### Jonathan Levin:
Exactly.

### Audrey Tang:
Apple and Google does not discourage any additional feature, including play space checking and so on, being added to the national checking method. The reason you cited is that IRMA cannot make its own app. The reason I cited was whether IRMA can be integrated with a existing nationally blessed exposure notification app, in Taiwan's case, the TSDA.

### D.T. Lee:
Jonathan, I thought that the IRMA can be integrated to TSDA?

### Audrey Tang:
That's my original suggestion. The entire TSDA is open source so just make a pull request.

### D.T. Lee:
If we get API available, then we can hook it up as far as that goes.

### Audrey Tang:
Yes. I made a suggestion to D.T., but then the EUDCC people eventually did convince the TSDA people to add the EUDCC wallet. Now, the TSDA is a EUDCC wallet. What I'm trying to say is that the Google, Apple restriction doesn't say that the TSDA cannot be two wallets, one wallet for IRMA, one wallet for EUDCC.

For a practical reason, the bar, the bouncer, would like to standardize on one for obvious reasons. One requires them to scan a QR code. In your case, they need to present a QR code which is an active one. The bouncer can only do so much. The point I'm making is that you're in a competitive goal vis-à-vis the kind of standards that the bouncer at a bar would use.

Because IRMA is in the Netherlands, I was just saying that the Netherlands, when they were using that, I don't know if for bars or for some other locations, what I'm aware of is that they used EUDCC very early on.

### Jonathan Levin:
That is true.

### Tanja Lange:
In the Netherlands, as you actually said, the IRMA people tried to push forward and in this case, it would have been them uploading. That's when they went into the road of not being authorized.

Not because it integrates with Bluetooth, the IRMA app doesn't need the Bluetooth part, but because the Play Store say anything that has to do with COVID has to come through the CDCs. That was the story for there.

Yes, we understand selling something which is defending the privacy is often a little bit more cumbersome. For instance, you need varying QR codes. If you have static QR codes, you're suddenly lumping people together on their shared information. That is the question of how much value you can put on privacy.

One of the things I appreciate about Taiwan is that people have a good sense of security and privacy. I understand it comes for a reason, that you have some big neighbor next to you which constantly reminds you that yes, you better be careful with information.

In the Netherlands. I've been advocating for years, have been running events, and so on to make people more sensitive to those issues. Their feeling is that the government and companies are trustworthy. In all the polls, it's typically at the bottom-end of Europe when it comes to feelings of security and privacy being an important feature.

### Audrey Tang:
The app I had in mind is called CoronaMelder from Rijksoverheid. Pardon my Dutch, I don't really know Dutch. [laughs] My question was more, did the jIRMA people try to send a pull request essentially to CoronaMelder?

### Jonathan Levin:
That, I do not know. I believe they did not. This might have more to do with the fact that the current IRMA app, the use case for it was a broad-based attribute-based credential app, allowing you to prove that you live in a town to get access to the nearest resources, or that you're a university student so you can access journals, these kinds of things.

I don't think this was maybe indeed their top use case. I'm not entirely certain if they tried to do a pull request into the existing CoronaMelder app though. As Tanja said, for various reasons, the priority for that hasn't been privacy to the extent that we all feel privacy is important in the sense it is.

### Audrey Tang:
The bar for bars is not high as we prefer, right?

### Jonathan Levin:
Exactly. Well said.

> (laughter)

### Audrey Tang:
The IRMA website said that in certain jurisdictions within the Netherlands, it comes preloaded with its address and so on. What does that mean? Did you know how they wrote that?

### Jonathan Levin:
I don't know exactly what you're referring to. Let me look.

### Audrey Tang:
I'm reading the FAQ. They say that, "Why do I see the municipality of Nijmegen when loading my address card," and "The municipality of Nijmegen" -- I don't know how to pronounce that -- "offers address cards nationally for everyone in the Netherlands with a digital ID including people who do not live in that municipality." I am a little bit confused by this sentence.

### Jonathan Levin:
Sure. Yes. That is a bit confusing. The University that the Privacy by Design people are working at is in Nijmegen. They have done quite a lot of lobbying with the Nijmegen municipal government to issue credentials for IRMA.

### Audrey Tang:
I see.

### Jonathan Levin:
One of the things that needs to happen for IRMA to function is that issuing bodies like the Taiwan CDC or some municipality need to agree to have their credentials issued from an IRMA server into the app.

I believe that because of where they're located, they focused most of their lobbying on the city of Nijmegen. Nijmegen, every municipality in the Netherlands can issue an ID credential that is nationally verifiable.

You can get your ID credential from the city of Nijmegen and then use that if there's some IRMA server or service operating outside of Nijmegen that wants to check your ID.

### Audrey Tang:
I see. The Taiwan equivalent would be Taipei Pass adopting the IRMA protocol and the bars in Tayoan start scanning Taipei Pass QR codes which is IRMA QR codes. That would be a municipal action, but they can give credentials to everyone in Taiwan.

### Jonathan Levin:
That's a good analogy, indeed.

### Tanja Lange:
One step further would be Taiwan, Taipei's Pass using it, but then Taiwan also starts using it even though you can only get it digitally issued from Taipei, but they will accept the Taipei issues.

Nijmegen is also allowed to issue also for people living in Eindhoven where our university is. That's what this thing means.

Even though I don't want to live in Nijmegen, I could get a statement from Nijmegen because they have agreed to issue things. That's depends on the authority and the competencies of what they're allowed to issue.

### Audrey Tang:
That's very clear. Thank you. To pop this deck a little bit, we were at can either party be offline when doing the verifications?

### Tanja Lange:
The idea here is, no, neither party is offline. That's necessary because else, you could link sessions. If either side would be static, then you would be presenting the same information today as you would at other points.

That could mean that whoever is interacting with you sees the same transcript with you today and on a different date. They know it's the same person.

### Jonathan Levin:
If I can elaborate just quickly.

### Audrey Tang:
Please.

### Jonathan Levin:
There is both a technical reason and a security reason why both need to be online. The technical reason is that the prover and the verifier are not communicating directly. They're both communicating through an IRMA server. They both need to have connectivity to the server. That's the technical reason.

As Tanja said, the cryptographic reason is that the way that this is all working is using zero-knowledge proofs to prove that credentials are authentic even though you're not reviewing the information about those credentials.

These proofs are constantly randomized. That randomization is what makes it possible to not be tracked between different verification sessions.

As soon as you do the same proof or reveal the same proof, then you can immediately say, "Jonathan was at this place and at this place." Those would be the two balance...

### Audrey Tang:
Say if the bar operates its own WiFi hotspot, and then you connect to the WiFi of the bar, then could bar operate a federated local IRMA server that does this your knowledge proof in case that the connection to the main Internet goes down? Can it work in a LAN situation?

### Jonathan Levin:
That actually is possible. The only problem that might happen is -- Credentials can be updated, the attributes of a credential can be updated if necessary -- if the local federated IRMA server at the bar is air gapped in a sense, and it's not getting these updates, you might have verifications fail there if the versioning isn't correct. In terms of how it functions, that could totally work.

### Audrey Tang:
That's exactly how EUDCC work. It publishes a revocation list. The bar only has to connect maybe once an hour or something to get the revocation list, after which it's free to operate entirely offline for some time, right?

In a practical sense, what I'm trying to say is that it's very usual both the proposer and the verifier to be on some sort of local network including Bluetooth.

It's harder to roll it out if it requires both to be independently connected to the Internet, especially vis-a-vis a situation where there's already a perfectly good just not privacy entirely preserving zero-knowledge protocol like the EUDCC available.

### Jonathan Levin:
Maybe one other detail that might be worth sharing. It might be good for me to continue the slides.

### Audrey Tang:
Go ahead. Sure.

### Jonathan Levin:
We're getting into a lot of information that actually I have later and I'm a bit worried I'll forget to say something important.

### Audrey Tang:
That's fine.

### Jonathan Levin:
The demo that I gave a moment ago, I just wanted to give a quick explanation of what was happening behind the scenes.

At the very beginning, the venue tablet or my demo website is communicating with the IRMA server requesting a new session which is then given to the front end of the tablet along with the QR code.

The QR code is basically just a session token plus a unique URI to that session. What I've done actually is everything that the user sees is in blue, and everything that's hidden from the user is in green. At this point, the user scans the QR code which causes the app to then retrieve that session.

The IRMA server responds giving it that session. Then the app is then asking permission to reveal the necessary attributes.

When that permission is granted, at that point the IRMA session is actually conducted where all of the cryptography takes place and the attributes are shared with the IRMA server.

If that succeeds, or even if it doesn't succeed, the result of that is then shared with the venue, the verifier. I had a second demo to show you what happens if the attributes are insufficient. If you're not boosted, for example.

I don't know if you have time for me to show that or if you're interested. I'll leave it to you if I show you or if we skip.

### Audrey Tang:
I have tons of other questions. Maybe that's good because I can imagine that.

### Jonathan Levin:
I just wanted to then go over the security properties that this guarantees. These credentials are cryptographically signed. In fact, they are cryptographic signatures.

The verifier knows that the credential is valid if the verification succeeds. As we mentioned a bunch of times, the verifiers only learn the attributes that are revealed.

You're protecting the privacy of these unrevealed attributes. Also as we mentioned, the signatures on the credentials are blinded and the unrevealed attributes have zero-knowledge proofs of knowledge which are randomized.

Every session looks different even if it's the same information which is what prevents tracking. One piece of information that we haven't mentioned yet, which actually I think relates to your question about online availability is the issue of non-transferability.

It shouldn't be possible for me to take a credential on my phone and put it on the phone of somebody else. The way that IRMA solves this problem is that every credential actually contains a secret key of the user as its first attribute.

This secret key is split between the user's device and a key share server. This is an always-online key-share server. Basically this secret key is fixed to the device. It's common across all of a person's credentials.

Every time a verification session happens, for example if I have to prove that I am over 18 and I'm vaccinated, I'm actually showing attributes of different credentials, but they share that secret key as its first attribute. I'm also proving that this secret key is the same in both credentials.

If I were to transfer my credential to another phone and that person somehow was able to reconstruct the full secret key from the key-share server, the verification would still fail because the secret keys of each credential aren't the same.

### Audrey Tang:
Does it mean that the secret keys are in so-called secured enclave or can you just clone the secret key?

### Jonathan Levin:
The secret key is basically a Shamir secret share so neither the key-share server nor the device ever sees the full key.

### Audrey Tang:
No. If I just clone the entire storage of my phone?

### Tanja Lange:
Yes. You only get half of the key. Your phone only holds to half the key. The other key part is on the key-share server.

### Audrey Tang:
I saw that. Aware of that.

### Jonathan Levin:
Your question, I believe, is if I basically just cloned the hard drive of my phone, can it just boot up IRMA and the protocol?

### Audrey Tang:
Mm-hmm. Would that work?

### Jonathan Levin:
I believe that it would work. Yes.

### Audrey Tang:
It's not in a tamper-proof secure enclave. I see that.

### Tanja Lange:
Certainly not in the demo that we built here. This thing becomes more powerful if IRMA is used for more things.

Already in the Netherlands, it's now used for enough things that there is the barrier. I might be OK (I'm not, but I might be OK as a stupid human) to give somebody else my vaccine passport. I would not be OK giving the same person authority over my bank account or the right to change my address and municipality.

If I would clone the entire hard drive of my phone, find the app and get that piece of storage and put it somewhere else, they could impersonate me on other things as well.

### Audrey Tang:
If you put more and more things into the store, that's a very attractive attack target, especially because there's no other attack targets according to IRMA now.

### Tanja Lange:
I think that vaccine passports are a good application. I also know that Taiwan has been for many years doing lots of digital. Like back in 2003, you already have a digital citizen card when other countries were, not pen and paper, but not classified as...

### Audrey Tang:
We have three digital citizen cards. [laughs]

### Tanja Lange:
In that sense it's something where we feel it might actually be something worth adopting for the government at a bigger scale. The nice benefit is that if you have multiple things that are qualified, then the threshold to give somebody...

If you have a twin and you're really close, you might still give them everything you own. You're sharing a mother so you might as well share a bank account. You wouldn't do this with some random person.

### Audrey Tang:
I see that. It's very useful to have privacy. Especially the vaccine passport, everybody know that it's vulnerable to replay attack. Once I scan your account, I might as well just store that character, right? [laughs] Of course, it's well known.

For the EUDCC, it's considered OK because it's mostly for traveling and for the airport to use. In that case, they're going to verify a stronger passport anyway. It's considered OK for that particular use case. I don't think it's designed for bars in general. [laughs] It's designed for international travel. Everything else is a add on.

Whereas in the IRMA case, it's designed to be general purpose. I'm just saying that there are certain norms that's already being built around EUDCC in Taiwan. We will have to compete vis-à-vis that norm, is my own observation.

### Tanja Lange:
We understand. Well, we tried to get a foot in the door before some changes, but it's moving very, very fast. We still think it's better to do something now than not. It's a nice feature.

In the Netherlands, for instance, we use it also for online registrations. Then, it's not the bouncer with a tablet, but it's a website. You want to offer something online which has age requirement or something, then you can also authenticate with this.

### Audrey Tang:
That's better because a website server almost always has a connection to the Internet, a reliable one at that. Please go on.

### Tanja Lange:
In the Netherlands, we have seen people getting very creative so they had to test to entry or show status to entry. The first thing was a static QR code. Of course, this was cloned. People take the photos. Then, they made a slightly animated one. In the middle of the QR code, you would see a bicycle moving. People took a movie of it.

### Audrey Tang:
[laughs]

### Tanja Lange:
If you don't find technological solution to uncloneability, then people will get creative and find something.

### Audrey Tang:
The TSDA just shows a clock and then a moving part on the background of the clock, which is good in a security theater sense. It looks pretty secure.

### Tanja Lange:
Sounds good to me.

> (laughter)

### Jonathan Levin:
Shall I continue?

### Audrey Tang:
Sure.

### Jonathan Levin:
This is a quick summary of what would be the requirements on infrastructure and software if Taiwan was interested in using IRMA for this. For issuing, you would need both the IRMA server that has issuing permissions for vaccine records and you would need a website that can authenticate people to download their vaccine record.

You would then, as you mentioned actually, likely want additional IRMA servers just for verifications. This can just be general purpose IRMA servers or even locally run ones in certain venues. There would need to be a key-share server that users register with when they first install the app that they would be then interacting with whenever they're performing any issuance or verification session.

On the software side, either a smartphone app that is forked from IRMA or a pull request incorporating IRMA to an existing app. All of the server and front-end and back-end functionality already exists by the Privacy by Design people. They have libraries already written in Go as part of the IRMA-Go project. These are customizable and easy to implement. This would be actually the easiest part of everything.

Then of course, for specific use cases, people would need to be building websites or apps for issuance or verification. That's all I presented. I have a few bonus slides if there's any technical stuff about the protocol itself or the cryptography. Aside from that, that's the main part of what we wanted to talk about and share with you.

Thanks so much for listening and asking good questions.

### Audrey Tang:
We've probably already established that Taiwan is soon going to the way of Netherlands in not requiring vaccine passports anywhere. [laughs] A fruitful direction of our conversation would be what's a useful scenario for this technology?

There are certain scenarios. For example, the one that we just [inaudible 41:59] yesterday, which is proving to your insurance company or your employer that you have actually been quarantined for three days or seven days during the isolation quarantine period.

For that, because it's entirely asynchronous and via a document, we end up choosing the EUDCC. We rationalized that because your insurance company or your employer already knows your birthday anyway. [laughs] It's not like it's a privacy leak. Anticipated use case is just those two.

We went with EUDCC, even though we understand there's many other solutions possible. That's that. What else? Tanja mentioned website logins for, I don't know, a website that has to prove that you're adults to enter. Taiwan used to have that law, but it's not active anymore. We don't have prove age to enter laws here in Taiwan.

It's not a imminent use case, either. I would like to brainstorm with people who have been to various different websites in Taiwan and places in Taiwan to see what could be the next use case.

### Jonathan Levin:
Most of the thought I've been putting into this has been around vaccine passports. I have had some experiences in my time in Taiwan over the last year or two that I think this could be useful.

For example, when I started working here, I was actually required to take a physical examination at a doctor and share that health information with my employer. Which actually, for me, was quite shocking. This is very strange for me.

It would be incredibly useful to have, for example, some health records issued via IRMA that you can essentially prove to your employer that you are safe and healthy to work without actually telling them what your white blood cell count is, which is weird.

Anything that requires private information to be communicated to other parties, especially in the employer-employee relationship, would be a good use case for IRMA.

### Audrey Tang:
Does this support range proofs in general?

### Jonathan Levin:
As in have I been vaccinated in these six months or something?

### Audrey Tang:
Something like that, or that your age is between this age and that age.

### Jonathan Levin:
This is supported. Essentially, the way that it's implemented in the Dutch app is you get a credential that has attributes like over 12, over 18, over 21. Then if you need to be over a certain age, you can satisfy these attributes.

### Audrey Tang:
I'm 41 now. I get 41 certificates of some age or above? Then I get, what, 60 other certificates for I'm not 100 years old?

### Jonathan Levin:
No. This specific credential is only for legally relevant age boundaries. They basically say yes or no, you are over a certain age. Yes or no, you are over this other age. It's only four or five attributes. You can't prove that you're specifically 41. You can prove that you're over 18, for example.

### Audrey Tang:
My point is that they're verifiable.

### Jonathan Levin:
You can't prove that you're specifically 41. You can prove that you're over 18, for example.

### Audrey Tang:
If a verifier want to set its own bar in the bar, like this bar is for 30 years old or older, does it mean that I have to go back to the issuer and say, "Give me a token that says I'm 30 years old or older"?

### Jonathan Levin:
I guess in this particular case, yeah. There would need to be either a new credential or some change in the existing credential to support that.

### Audrey Tang:
It doesn't support generalized range proof is what I was asking.

### Jonathan Levin:
I'm not aware of anything that specifically does. Maybe Tanja, you know more?

### Tanja Lange:
In multi-party computations, if you go one step further in complexity, zero knowledge proofs are crypto-magic, but low-level crypto-magic.

You can go to something called multi-party computations where you have more powerful tools, but also more requirements on those online and number of shares. Typically those proofs are if no more than half of the parties collude and so on.

You're getting more functionality at a trade-off in complexity. For things that I care about, we have privacy guarantees.

Then you can do range proof and such things. The way that IRMA -- Jonathan, you could flip to the last page which has the credential thing -- here the credential is just the thing.

Your credential could be your date of birth, but then you would be showing the whole information. Or it could be a yes, no answer. In this display equation, the attributes are these. Exactly. Jonathan is finding the slide [circles exponents]. Those are specified positions and each position can ask one question.

### Audrey Tang:
I am aware of that. What I was asking is technically known as non-interactive, zero-knowledge range proofs. I was just asking whether IRMA considers that?

### Tanja Lange:
Yes. This one does not have a range proof.

### D.T. Lee:
Excuse me. I thought what you were essentially asking as you said asking for certain queries of a certain range. I thought this could be built in your response, your range, hard query. Put in a requirement there and then let IRMA do the verification of it.

### Audrey Tang:
Essentially a challenge response that issues a new credential on the fly.

### D.T. Lee:
That's right. Exactly. I thought that could be done. Couldn't it? A challenge response, a query. The challenge can be custom made.

### Audrey Tang:
Of course, that means the metadata would be linked because you asked for the credential in response to some verifier.

The point I was making was not a hypothetical one because if what you're saying is that your employer would like verify that you are healthy to some degree, then they will want range proofs.

Each employer will have different ranges for the acceptable threshold. The army, for example, would have a different range compared to other employers like academia and [inaudible 49:12] .

### Tanja Lange:
My understanding is that in the end it's a yes, no answer. You compute the range and then enter a credential which says yes or no.

Quick matter of things. Laurent, mute your button because I'm getting lots of noise when you're unmute. There's lots of ticking. Sorry. There was a person muting.

You can see on the top bar that you're ticking. Better.

### Audrey Tang:
Better.

### Jonathan Levin:
Maybe just one follow up comment about the question of range proofs. I think this is less a limit of what is cryptographically capable and more just that IRMA is specifically implementing Idemix. The way that Idemix credentials are structured, by default they don't allow for range proofs.

I do know though that the IRMA people are constantly enhancing everything. There's quite a lot of stuff that I haven't even explored in the technical documentation in a couple months. It's possible that this is actually in the pipeline. It's something I'm happy to ask about and if you'd like, I can get back to you.

### Tanja Lange:
What I can see that could be possible is that the server gets your exact date of birth, then does a calculation and issues the result. That would be a weaker form of privacy than the rest. Jonathan if you ask them that, sure.

### Audrey Tang:
If it's age range, it's very intuitive to just generate two answers, two attributes to that. For more complex queries, of course, it gets harder for the user to see exactly what's being asked. We end up encoding a lot of things into simple yes, no attributes until we're solving equations or something.

Anyway, the point is what I'm trying to say is that a lot of it can be ameliorated by D.T.'s suggestion that if the client connects to the Internet, they can just on the fly ask for new credentials from a live credential-handling server. I don't know whether it's being used anywhere or if it's cryptographically unsound to do so.

### Jonathan Levin:
In the IRMA context it's possible. The challenge there is all parties, including the IRMA server doing verification, need to have essentially the same set of credential schemes.

As soon as a new one is issued, they all need to be synched in that moment as well which the way it's currently implemented isn't actually a very fast process. It takes a couple seconds to download and verify a scheme signature.

### Tanja Lange:
A scheme signature. You're introducing a whole new credential.

### Jonathan Levin:
Credential. Yes. Sorry. Continue, Tanja.

### Tanja Lange:
I'm just saying you used the word scheme without defining it.

### Jonathan Levin:
Sorry. Yes. A scheme is essentially a set of issuers and credentials that they issue. This entire set is basically encapsulated and signed so that people can't issue fraudulent credentials under the name of other different issuer.

There's essentially a baked-in set agreement about what credentials are even valid credentials before any issuance or verification happens.

Otherwise, you face the possibility not only of having completely new fraudulent credentials but even of, for example, if credentials are updated and attributes are renamed, you might be able to exploit that to use an old credential that has an old name that corresponds to a new attribute name, that means something else. This could cause a lot of problems.

This whole scheme credential synchronization is a big part of the security of IRMA.

### Audrey Tang:
OK, but it's not a problem if the credential is minted from another app on the same phone as the person showing the credential. In that case, it would just be their phone doing the signing.

### Jonathan Levin:
Yeah. This might be a bit of problem in the sense of it's like a self-signed certificate. How do we verify and trust it?

### Audrey Tang:
It would be a self-signed.

### Jonathan Levin:
If this is somehow deemed secure in a particular use case, it's technically possible.

### Audrey Tang:
We do have apps, like the National Health Insurance Express app, that is capable of doing this. Also, the FidO app, the Taiwan Citizens Digital Certificate app, which has actually has two pairs of private-public keys. One for FidO and one for the Taiwan Citizen Digital Certificate. That means that it's technically possible to operate in a self-signed way.

Now, the question becomes how to synchronize those self-signed credentials against the so-called official ones so that they're either eventually consistent or something. I'm happy to hear that it's technically possible.

### Jonathan Levin:
This is definitely outside of the basic IRMA use case. It's something I would have to think about a little bit more. It's a very good question.

### Tanja Lange:
You asked about use cases. Of course, as foreigners, Jonathan and I only see a limited set of things. Our interactions that we have with government sites are probably, not disjoined, but quite different. For instance, I had to go and apply for ARCs quite frequently.

I would have loved to have at least the application process be online and if I had a form of identifying myself to a website to say, "Hey, that's me. It expires again. It's almost December 4th." Those things would be good use cases, where [harrumphs] there's enough private information. At the same time, there's a use case of having something online. There's some things they need to know, some things they don't need to know. Like login procedures. 

You could also have this as a way to prove your identity that you exist. That you're a valid citizen or a valid resident. General registration front ends. Everything which needs some form of authentication.

### Audrey Tang:
That's possible.

### Tanja Lange:
You have to go to the municipality hopefully fewer times. I had to go there every half year. Now I'm in a happy situation because I got a gold card. I'm good for three years. Before that, it was somewhat too many visits for my taste.

### Audrey Tang:
We're in this strange situation where the foreigners already have ARC card. The ARC card or the PRC card for the permanent ARC, but the citizens really don't. There's no private key. Except National Health Insurance, which cannot be used as a general purpose login manner.

We're trying to sidestep that question by rolling out the TW FidO app, which, as I mentioned, have two pairs of secret and public keys in the person's phone in a secure enclave. The only limitation is that the TW FidO app is not available to ARC out there.

We now essentially have two parallel residents with these physical ARC cards that are very cumbersome. Citizens with technically speaking, very advanced TW FidO app, but are totally incompatible with the login flow of the foreigners.

### Tanja Lange:
Those parts are less transparent to me. Only have my personal experiences.

### Audrey Tang:
No. I think this is a valuable one. We do want to provide a streamlined service for people holding the new style ARC numbers, which look exactly like National IDs, except with a different digit. The second digit.

We're now working on a possibility of handing them the Estonian e-resident card to people who have never been to Taiwan, which is already the case in a sense for some gold card holders. You do not actually have to physically be in Taiwan.

As long as somebody vouch for you, you can actually get your gold card number before you first enter Taiwan. It's technically a possibility. Still, it was tied to the fact that you're probably going to land in Taiwan soon.

Whereas in the Estonian case, most of their e-residents probably don't even consider physically being in Estonia. They just want to operate a company there. I think that there's something to be said about offering a streamlined experience of website login, even for people who've never been to Taiwan but would like to access Taiwanese services.

That could be a really good use case.

### Jonathan Levin:
Yep. That sounds really wonderful.

### Tanja Lange:
Other than that, it's like pretty much everything that IRMA does so far could be useful as well. What we're brainstorming about is things that go beyond what the IRMA app is permitting you in the Netherlands so far.

### Audrey Tang:
Maybe people who have spent more time in Taiwan would like to chime in. [laughs] I don't know. Bo-Yin, D.T., Ziv, or Laurent?

### Bo-Yin Yang:
I have to confess that I'm not as acutely privacy aware as my friends who are not from Taiwan, even though I'm American, too. [laughs] On the other hand, one would imagine that some kind of privacy-preserving access to many government services should be possible.

The central government and the city governments are asking sometimes, by my lights, too much information. For example, just one thing that I consider to be way too much information is when you are always on a city bus. You have to click in when you get on. You have to click out when you get off.

That is something that in a sense, the city government shouldn't be asking about, especially if you are using a ID-tied Metro card, like many people are using.

### Audrey Tang:
The Easy card.

### Bo-Yin Yang:
Yeah. Many Easy cards that are tied to people, there are. I always use one that's not tied to me. The government still knows that this card got on the bus here and got off the bus there. In a sense, if possible, all this should be something where the government gets as little information as possible.

I'm not saying that privacy-preserving cryptography is something that works for this particular instance.

### Audrey Tang:
I think coins works better for that instance. [laughs]

### Tanja Lange:
Coins work. If you have a phone with NFC where you can change your ID, that can work as well.

### Audrey Tang:
That's right. That does, too.

### Tanja Lange:
I think there's a conflict between wanting to do charges based on distance or not. The bus is a good example where it is fixed fare no matter how long you go if you pay in coins. It used to be fixed fare no matter how long you go if you pay by card. You're either scanned on entry or on exit. Now, suddenly, it's entry and exit. People become aware of it.

For MRT, it has always been distance-based. People don't complain about having to scan their card because they want to get charged for exactly that distance. That could still be changed depending on what information gets stored.

It could be a blinded thing so that the front end only gets information that, yes, a valid token got through and the billing end would get the information of the distance without knowing the stages.

### Audrey Tang:
The Metro thing, I think the privacy-preserving move would be just use coins in exchange for some physical non-fungible tokens for the Metro travel.

The general norm here, as you have witnessed, certainly tended toward more data collection especially on the city transportation because of many things, but mostly because smart cities vis-a-vis smart citizens' philosophy is still being worked out.

### Tanja Lange:
There's a conflict between getting more information to optimize things to justify more bus routes and so on. You want to have the information, and at the same time for privacy you don't want to give that information.

### Audrey Tang:
The eclectic solution usually has always been to both allow easy cards but also coins and physical non-fungible tokens and also to roll out EUDCC, but at the same time accept entirely easy-to-fake yellow cards that's on paper and so on, which is actually quite privacy preserving because you can write several names down.

It's very easy to forge. [laughs] There's no cryptography behind it. If you want, you can have 10 different identities on a yellow card. I say that on record.

Anyway, the point is that we always allow this slightly more privacy, but not at all useful alternatives, precisely because the people who care about privacy have a lot to say in policy issues such as this one.

D.T., of course, is good friends with many privacy experts when it comes to such policy-making decisions.

### Tanja Lange:
Which is also why we're thinking it could be a fertile ground for fielding something which is both more - D.T., you're muted -- which is both privacy preserving and has the functionality.

### Audrey Tang:
D.T., you're muted. D.T., you want to say something?

### D.T. Lee:
Can you hear me?

### Audrey Tang:
Now we do.

### D.T. Lee:
Because I got disconnected for a long while, a gap.

### Audrey Tang:
It's fine.

### D.T. Lee:
I did not quite follow what you guys are discussing. Sorry about it. I know privacy and security and all those things and convenience, they are all in conflict with each other.

The government is in a different position. As Audrey said, you cannot have a single one thing. You have to allow other options. You pay your Easy card. You can use by coin without any possibility of tracking you or anything like that.

Somehow you have to allow all different several options. You cannot really say you got to do this and without that you cannot do it, something like that. You've got to leave options for it.

### Audrey Tang:
We're a plural society.

### Jonathan Levin:
I wanted to also make a general comment that it's maybe a bit more of a challenge to think of consumer-facing use cases for IRMA that aren't what we just discussed.

What IRMA is perfectly designed to do is any type of attribute-based access control or role-based access control. Institutions, if there's an existing app or easy-to-customize functionality for doing any kind of role-based signature or authentication, IRMA is actually quite perfect for that.

One really general example is in health care if you need to have some note from a doctor that says something about your health, it doesn't actually matter which doctor it came from. You just need to know that it came from a doctor that was qualified to give this record.

With IRMA, you can do attribute-based signatures. If somebody has a credential saying, "I am a gastroenterologist. I am licensed to say something about Jonathan's stomach," then that's actually a perfect use case for it even though it's not completely user facing.

Anything that relates to attribute-based access control or attribute-based signatures is also a perfect use case for IRMA.

### Audrey Tang:
Yes. I totally agree. In Taiwan, we have decided to have reciprocal transparency. If a doctor makes a diagnosis about me with my national health insurance card in my health bank ledger, I always see which doctor and which institution they belong to make that diagnosis.

What you're saying is that if we want to prove to a third party, say someone organizing a marathon who want to make sure that no one suddenly drop dead during the marathon, so they got to have some sort of health certificate.

That marathon host who is definitely not a doctor or nurse really should not have the privilege to see which doctor it is or my white blood cell count or whatever.

### Jonathan Levin:
Right. Exactly. That would be an example of an attribute-based signature in that case. It's about third-party verification.

Even within organizations, if there's any type of access control, for example, one use case that already exists in IRMA is to basically prove that I am a student at a university or a professor at a university.

This allows me to access journals that might be behind a pay wall for people who aren't affiliated with the institution.

Maybe I don't want the institution to know what articles I'm reading because maybe my research is on a topic that's rather taboo.

No specifics, but this kind of an example. It's also something that already exists in IRMA in the Dutch implementation.

### Tanja Lange:
Some more current use cases, there is now news -- Foreigners don't have all the details -- I understand there is now a possibility for children to get free tests.

There is now a possibility for people of lower income to get free tests. How do you prove that you're lower income? If you would have a credential about your income without revealing how much it is, but there is a credential for below or above the threshold, then you could use the IRMA thing to sign in and then order online your batch of five free tests.

### Audrey Tang:
Currently, you just sign in with your national health card which has your national ID number and a website because it's operated by the Ministry of Health and Welfare. Anyway, we already have this attribute by user. That goes back to the first and second party use case.

In which case, it's not very compelling because the MOHW already have, I want to say, its establishment. This organization already gave the permission to do so, but I suddenly memorized the fact that the Constitutional Court may rule otherwise soon. At this very point, it's being debated on Constitutional Court.

At this moment, the ministry already have the mandate to go back and check whether you're a middle or lower-income person.

### Tanja Lange:
As I'm saying, as a foreigner, I don't see all the pieces of connections behind there. What I'm seeing is there is now a scheme where people of a certain qualification can get things. Whenever there is people with a certain qualification can get things, this is a use case.

### Audrey Tang:
It's most compelling for the marathon host scenario because it's asking something that's confidential, private from some institution that is heavily regulated, in this case, a hospital, to some activity that is not regulated at all.

In Taiwan, the norm of information flowing from a heavily regulated industry, be it telecom, or transportation, or health, to a marathon which is totally unlicensed, triggers sufficient discomfort to pave the entry point for IRMA. For flowing between two equally heavily regulated industries, currently, there is no norm for zero knowledge.

### Tanja Lange:
That was our idea we've done with the bouncer at the bar and the vaccination passports. That's another place where the bouncer at the bar shouldn't be authorized to see all the information.

### Audrey Tang:
As I mentioned at the very beginning, they already checked the ID cards so all the information is already out there.

### Tanja Lange:
I mean, for instance, in the bright and glorious future where we don't have to worry about COVID anymore and we still need to check the ID card, do they need to check the ID card or do they need to check that I'm over 18?

### Audrey Tang:
I'm aware of that, which is why I asked about the offline use case, because the ID card is tamper-proof without Internet connection.

What I'm trying to say is that since we are going to use it for marathon or activities as the first use case, what I think is prudent is to make the use case build in such places so that people become generally comfortable with this kind of two active sessions with essentially a active QR code, which from my knowledge is only used now when doing mobile payment.

That's the only other scenario that has a active QR code generating, so maybe a couple toward that sort of cases instead of on the existing norms that already are dominated by paper or paper equivalents.

### Tanja Lange:
Do you know whether the thing, if I take on YouBike's 2.0, is it an active QR code or is it static?

### Audrey Tang:
I don't know. I don't have YouBike access, somebody with YouBike access.

### Tanja Lange:
I have never used YouBike with a QR code. I just know it exists. I'm the kind of the YouBike 1.0 user because it doesn't have trackings.

### Audrey Tang:
It's a active one. I'm pretty sure it's not zero knowledge.

### Tanja Lange:
Since you mentioned...

### Audrey Tang:
It's a possible one because YouBike has a very high penetration rate in citizens' lives. What we're trying to do here is to normalize this interaction pattern to make it everyday life, so to speak.

### D.T. Lee:
When you are talking about whatever things they involve, they have to track you. If you use YouBike, you have to have on and off time. Just like you're doing your phone conversation, you make a phone call. Then, you have to have a friend you call. When the call is on it's on and it's off. They would track you.

The important thing is the data, whether or not the data can get aggregated somewhere or not.

### Audrey Tang:
I agree on that, that the whole design of IRMA is that it's only aggregated on the person's phone and nowhere else.

### D.T. Lee:
That's right.

### Jonathan Levin:
Even in the YouBike case, it's actually quite interesting because you could have the YouBike providing a credential. Let's say I have the YouBike. I'm returning it. It presents an IRMA QR which has an attribute, the amount of time that I had the YouBike checked out for.

I can essentially get a credential with that attribute. I can then send that credential, randomized, to an IRMA server associated with YouBike that has nothing to do with the credential I just got, from how they view it. They can both track where the bike was checked out and returned and for how long it was used.

The billing is completely hidden from that. You can use IRMA to deal with the billing using that credential separately. It's a wrapper around the IRMA protocol to make this both trackable. They can track the bikes, but they can't track who's using it. They could still correctly bill people because those people get the signed credential with the right billing information.

If that's uniquely identifiable information, you're still screwed. You can be tracked, but at least, it's not directly tracking people.

### Audrey Tang:
I see. The other thing I want to ask is, actually I did ask D.T. the last time we met, is SKI+ amenable to becoming a wallet?

### D.T. Lee:
It's interesting. We will have the SKI thing be open source so we can have this linked up with the other things as you mentioned. Even in terms with the social distancing, I'm trying to also look for more possible use case scenario where you can embed SKI, the secure communication protocol, in somewhere, so that we can secure our communication.

### Audrey Tang:
The point I was making was because the TSDA, the social distancing app, probably will only be the wallet for EUDCC for the next while. There are other apps well within D.T.'s control like the SKI+. The other logical thought is to localize, to translate into Mandarin at least, or maybe the other 19, sorry, 16 national languages, the 20 national languages that we have.

We got to start somewhere, so maybe still Mandarin. Then, translating to Taiwanese Mandarin the IRMA app. From my perspective, a lot of the adoption hurdles come from people who see a application not localized or not partially localized.

I just installed the Element messenger, previously known as Riot on iOS, which is maybe just 20 percent translated. [laughs] I was just saying, if we want to roll it out to replace Rocket.Chat, which we contributed a lot of localization in, the first thing we got to do is to translate everything. Otherwise, it would not allure to the general citizenry.

The other thing with IRMA authentication itself is localizable or if there's another already localized application that want to integrate the IRMA protocol. I was thinking whether SKI+ makes sense as the app to do that.

### D.T. Lee:
Certainly, that's a good suggestion. We would keep that in mind in talking about this localization of IRMA thing. The reason why we have this meeting is to let you know that this IRMA attribute-based authentication schema or protocol is available out here.

It's just a matter of whether we can find a good use cases for us to adopt IRMA. Localization, if you want to do it, is certainly something we got to do.

### Audrey Tang:
As a fungible token of goodwill, I'm certainly willing to help sponsoring the localization, which would give IRMA a fair shot in pretty much any scenario. What I cannot guarantee is the vaccination passport use case, which may fade out any week now.

### Tanja Lange:
When we started brainstorming early January or March, these numbers are going up, our first discussions where we got in tracking, then vaccine passports, and then IRMA. By now, it's end of May. Unfortunately the situation in Taiwan has changed a lot since. I hope it's getting better soon, but I understand that that might not be the perfect use case looking forward. It was the use case that got us started.

### Audrey Tang:
I thank you for that. Certainly, the conversation I had with D.T. informed the development direction of the Taiwan Social Distancing App such that it became a wallet after all, not IRMA but EUDCC.

At least it's better than some other -- I wouldn't say names -- municipal inventions. [laughs] We did good work. It did have a positive impact. It's just not specific to zero knowledge.

### Tanja Lange:
For future work, Jonathan and I can certainly not help with localization and in general. We can help support. Again, Jonathan has done -- It was on one of the last slides. There was a link to his internship so while he was still a student and during internship, it was Radically Open, right?

### Jonathan Levin:
Radically Open Security. Yes.

### Tanja Lange:
Basically, auditing the code base.

### Jonathan Levin:
There's a footnote at the bottom here if you'd like to take a look. Sorry to interrupt.

### Tanja Lange:
Understanding what's going on. My understanding is no range proofs. Jonathan can ask about this. We're not the people who are professionals writing front end code things.

### Audrey Tang:
The SKI+ people are which is why I mentioned them.

### Tanja Lange:
You need other people with the skills both for language and for proper web app development. I always say I think the PGP is usable. Don't ask me to make it GUI.

### Audrey Tang:
I think ProtonMail makes it GUI good enough. It's good enough for him.

### Tanja Lange:
I know. I understand. I'm the person who had this Command Line. I shouldn't be the person who is doing these things that normal users get exposed to.

### Audrey Tang:
I'm with you there. I still use Command Line for PGP.

### D.T. Lee:
Audrey, I see you mentioned about localization. You think that IRMA, the attribute-based IRMA protocol, is something that we could look into and then of course try to identify usable use cases. Localization is a certain part that we certainly out group here in Taiwan can actually...

### Audrey Tang:
You probably have to start there in order to have any...

### D.T. Lee:
Army?

### Audrey Tang:
Yeah. In Taiwan, you probably have to start there in order to have any adoption at all.

### D.T. Lee:
OK. You would like to sponsor? You can provide support to do this?

### Audrey Tang:
Yeah. Sure. Does it already have an internationalize framework where it speaks at least Dutch and English?

### Jonathan Levin:
Yes. I was just going to mention that it's already a bilingual app. I believe that it already has quite good support for new languages.

### Audrey Tang:
New languages. New locales.

### Jonathan Levin:
Yeah.

### Audrey Tang:
Roughly, how many strings are we looking at? How many things are there to translate?

### Jonathan Levin:
It scales with the number of credentials in a so-called scheme manager. Every scheme, every credential is itself bilingual.

The app itself is quite minimal in strings. I don't actually think translating it would be that difficult because most of the credentials aren't even applicable to Taiwan anyways. They're usually local for localized Dutch services.

### Audrey Tang:
It could be an inspiring, motivating use case for Taiwanese people in the Netherlands who suddenly see that their credentials speak Mandarin. It may be a heart-warming gesture.

> (laughter)

### Audrey Tang:
Oversee a compatriot service.

### Tanja Lange:
We've been having a few. We had Taiwanese students and also at Amsterdam, there is now one person who was with us who was an assistant before. We have some good exchange over many years. I don't know whether that's a noticeable majority.

### Audrey Tang:
[laughs] Sure. As long as we have one, it will make good PR for our Taiwan economic co-chair and representative office there.

That's one action item that I can do which is if I get a simple description of which GitHubs repositories to look to, roughly how many strings are there, I can look around and see whether we can just sponsor localization but not internationalization assuming there is a good internationalization already in place.

### Jonathan Levin:
Sure.

### D.T. Lee:
That's great.

### Jonathan Levin:
I can send you links to those repositories. Actually, they're all in the slides as footnotes already. I'm happy to send you a list if you'd like.

### Audrey Tang:
I don't currently see on the GitHubs the instructions for contributing a translation. Maybe something like that would be appreciated.

### Jonathan Levin:
Sure. I can reach out also to the developers and check with them if they have anything specific.

### Audrey Tang:
It's generally a good thing to put on the repo just for future translations.

### Tanja Lange:
The body of knowledge of information so, Audrey, I happened to get your address because D.T. cc'd me. I haven't shared it with the others. Would it be OK to share this with them?

### Audrey Tang:
It's on my Twitter profile so it's public information.

### Tanja Lange:
Then we can send you the slides. I understand you have been very fast in already absorbing things and maybe you got copied on all the others. Having the slides, these links, is maybe possible. And again also do a [inaudible 87:23] the strings.

### Audrey Tang:
I learned a lot certainly. This is completely an aside, but I've probably been approaching this on the other side of things, the Totally Public public reputation credentials thing with this author called Vitalik Buterin, a hacker who co-founded Ethereum.

I was just contributing to his paper about decentralized society or DESOC and in the DESOC paper -- I'm not a co-author, but I did suggest a poem from Laos and compare it with W3C verifiable credentials -- what we outlined is something like a reverse, a mirror image, of what we're just proposing.

The idea, very simply put, is like a diploma. The university publishes all the graduated PhD students in a public fashion. The reason why it works at all is that it's very difficult to forge a PhD degree.

I think the completely public on a distributed ledger like Ethereum doesn't quite work for all the use cases. Neither does the completely private.

Your knowledge proofs is a bridge in the middle where people can selectively review the kind of attributes that they have and the communities can also federate in a way that is public within the community, but private outside of that community.

I've been thinking a lot about designs from the other side of the spectrum, but I really appreciate thinking about things from this side of the spectrum.

### Tanja Lange:
What I like is that it puts the user in control that you can't...Technologically, you can make it fine-grained, and you can put the user in the seat where they can decide to reveal something or not because it's consent everywhere.

### Audrey Tang:
Yeah, definitely, which puts more cognitive burden to the user, but it's useful if it's highly sensitive and the user should probably care, anyway.

### Tanja Lange:
[laughs] As I said, I've been trying to sensitize people in the Netherlands on [laughs] these issues. I know that they don't always care. My experience with Taiwan has been that people care more.

### Audrey Tang:
It is true. It is true. We were...

### Jonathan Levin:
In Europe we have the GDPR, where now everybody has to consent to cookies on every website. That is something that I'm sure nobody cares about, but they're still getting used to clicking OK, or actively consenting. With IRMA, you have to consent to revealing things, but they're about yourself.

Hopefully, people, for the same amount of work will have some more motivation [laughs] than what I guess, they're getting used to in other parts of the world.

### Audrey Tang:
The SayIt website and the Sandstorm tool that we use in our office has this privacy policy that simply said, "Non-essential use of cookies are prohibited." [laughs] We do not use cookies period [laughs] for tracking people. That makes us GDPR compliant, because we don't really collect anything.

This is helpful for people who care about this. What we're trying to look at as D.T. put it, a plural solution space, where in socially accepted use cases, both entirely privacy preserving flows are not just possible, but swift and safe and are easy, which coexist with less privacy preserving existing solutions.

People choose the privacy-preserving ones, not just because it's privacy-preserving, but actually, because it's more swift. Meaning that it's convenient, easier to use. That's where the front-end end user experience people will have to contribute here.

At this very moment, the only thing that's more convenient than the Easy cards of the world are the EU-DCCs of the world. [laughs] Are simply, we don't collect your cookies, which of course, it's easy. [laughs] It's not very useful in most use cases in the community.

### Tanja Lange:
People are getting used to having things on the phone. Having something with the phone is already in the category that is easier than having a separate card for it.

### Audrey Tang:
I totally agree. I do agree.

### Tanja Lange:
There's one chance. If the competition is like you have to carry a yellow card and your ID card or your phone, we might have a shot.

### Audrey Tang:
Yes. Your competition is the National Health Insurance app. [laughs] In which case, already, around 10 million people are using it actively. I mean competition in a friendly way.

In the sense that if the norm becomes more privacy-preserving, there is a chance for the NHI to simply adopt IRMA-like protocols within the NHI app. Which they probably have to consider anyway if they lose the constitutional court debate. [laughs] That's another angle.

### Tanja Lange:
Cool. Thanks for all the questions. What I'm going to do after this is send an email to everybody in the room so that they have your email address. Then Jonathan, you can reply to all with the slides, so that we have at least a thread of emails with a reply to all.

If there are any questions that you come up with afterwards, or if we come up with more ideas for use cases, [inaudible 93:40] we'll stay in touch.

### Jonathan Levin:
Sure. I can send out the slides. They're also publicly available now at that URL in the address bar that you can see. I'll send them as well.

### Audrey Tang:
I learned about this whole zero-knowledge range proof thing at all. It's because a couple years back, the National Chengchi University sent a team to our Presidential Hackathon outlining exactly this use case for hosting marathons out of the National Health Insurance data with zero-knowledge range proofs and so on. [laughs]

I was the judge. I'm still the judge for our Presidential Hackathons domestically, they made to top 20.

The idea is that five teams each year proves that their ideas work on a very small scale over three months. Five teams eventually won the trophy, which is a shape of Taiwan with a micro projector underneath it. When you turn it on, it projects our president, Dr. Tsai Ing-Wen, handing you the trophy. It's very meta.

What it signals is that you will get all the budget, regulatory, and personnel support to make your ideas a national policy within the next fiscal year. The competition is fierce. It's a shot. That's how I, as the judge, learn about all the latest cutting-edge technology per year.

It's voted in by quadratic votes, which itself is such an innovation, of all the teams working with each other. Maybe some of your local compatriots can check out Presidential Hackathon, which is still open for submissions. That's one of the fastest tracks toward national adoption, is simply win the Presidential Hackathon. That was a compelling use case.

### Tanja Lange:
Winning a hackathon with a marathon is pretty funny.

> (laughter)

### Audrey Tang:
Yes. They made top 20, not top 5. Something useful like that will be good. That's how we got the QR code-based National Health Insurance card. It was because of a team from the Orchid Island, a remote island who suffered a helicopter crash.

The patient did not trust, their family did not trust their local nurses and doctors to make the full diagnosis and insist on sending people to the main island. That was because there was no way to convey informed consent to get all their data in the main island's hospital to that particular clinic. That was because of the lack of digital signatures in that particular protocol.

Anyway, they tried that. It did work. They won the Presidential Hackathon. Within one year, all the indigenous lands and offshore islands in Taiwan gained this full telecommunication virtual National Health Insurance co-diagnosis thing and regulation. The law was changed so that the local nurses can actually make the diagnosis with a television screen showing the doctor from the main island.

It's being very impactful, especially during this way of pandemic where pretty much all the clinics switched to QR code-based national health cards based on the NHI app. It's a good hackathon.

### Tanja Lange:
That's cool.

### Jonathan Levin:
Yeah, super cool.

### Tanja Lange:
That's one of the many things I'm always amazed by, is seeing Taiwan scooting ahead with digital things. This one I didn't have on my radar, but nice.

### Audrey Tang:
You're welcome to participate. I'm totally impartial because I'm just a convener of the judge. I don't actually score teams, which is why I can solicit entries like this.

> (laughter)

### Audrey Tang:
I don't have anything. If you don't, let's just meet on the email loop.

### Tanja Lange:
Very nice meeting you. Have a nice afternoon.

### Audrey Tang:
D.T., you want to say something?

### D.T. Lee:
Audrey, sorry. My line is not stable. I'm switching off to my cellphone now so I can get to hear hackathon, what you mentioned by hackathon. I'm glad that you...

### Audrey Tang:
With D.T.'s blessing, D.T. was the patron angel of the Presidential Hackathon.

> (laughter)

### D.T. Lee:
That's very nice of you. It's getting late, at least for Tanja it's early in the morning. Let's keep our communication by email, OK?

### Audrey Tang:
OK.

### D.T. Lee:
Thank you very much, Audrey, for taking the time and sharing with us.

### Audrey Tang:
Sure. I'll send you the transcript in a few days. Cheers.

### Jonathan Levin:
Thank you so much again for your time.

### D.T. Lee:
What we can do here, if we come up with some kind of project to help promote this localization of IRMA and whatever this technology that IRMA can provide to Taiwan.

### Audrey Tang:
Definitely. Live long and prosper.

### D.T. Lee:
Thank you very much. Thank you.

### Tanja Lange:
Bye-bye.

### Jonathan Levin:
Thank you again for your attention and great questions.

### Audrey Tang:
Thank you.

### Jonathan Levin:
Bye.

### D.T. Lee:
Thank you, all of you. Thank you very much. Thank you, everybody.

