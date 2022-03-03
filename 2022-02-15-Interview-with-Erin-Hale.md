# 2022-02-15 Interview with Erin Hale

### Erin Hale:
Just to give you a run through, this article is focusing on the tech behind COVID, which is why I want to talk to you.

My first question is, we talked about this last time, but I don't quite understand what is your relationship with g0v and their relationship with the Taiwan government. I know they made a lot of suggestions that were important, but I was wondering what that process looked like.

### Audrey Tang:
Sure.

### Erin Hale:
How often they work with the government.

### Audrey Tang:
Well, g0v is a series of spaces. There is the Slack Channel/Telegram/many others. There's also the bi-monthly physical large hackathon and there's also smaller hackathons and so on. I've been involved since the very beginning and I'm still on the Slack Channel.

Before the COVID, I provided my office to Social Innovation Lab as one of the weekly meeting places for the vTaiwan project so it's a very close collaboration. Any of the zero contributors can instantly direct message me, or just mention me and so on. I'm still a community contributor, so to speak.

The relationship would be somewhere between a public forum, and also a bimonthly and a weekly gathering of us online and offline.

### Erin Hale:
Are they mostly programmers or how would you describe the members because we always have to summarize?

### Audrey Tang:
The contributors of "g0v jothon" project have their own [impact report](https://drive.google.com/file/d/1SPfg7h8LJZkDd6dt_QyR5pBT_c7YTCBF/view), publicly listing all the backgrounds, capabilities, and so on. I would encourage you to read the impact report. There are about equal programmers and designers, but there are also people specializing in law, public administration, arts, and so on.

### Erin Hale:
Interesting. Thank you. That was helpful. You might have seen I asked them some questions about how they helped out, and that was a big, big QR thing for them. They had a few other projects, which you seem to have taken into consideration.

The thesis of my articles seems to be emerging is that Taiwan has used a lot of...I don't want to call it too severe to be derogatory, but easy like low-tech solutions or bridging existing tech on purpose to make it more accessible.

### Erin Hale:
Yeah, it is. Accessible is the better word.

### Audrey Tang:
There's an old term called appropriate technology.

### Erin Hale:
Appropriate Technology, OK.

### Audrey Tang:
Meaning that it respects what already works. Also, because it's open source, it's meant to be appropriated. People locally can also remix it. I think a low-cognitive load solution is what we're aiming for because it's easier to explain, certainly.

### Erin Hale:
That was one of your big concerns, or when you were designing...When you're working on a lot of these, was just that it would be easy to explain, or were there any other factors that you were considering?

### Audrey Tang:
Easy to explain, yes, but also easy to remix, and one builds upon another. If you can't even explain that, of course, there will be no people remixing it for the better. Designing for remixing or as we say in g0v forking, optimizing for the forkability is probably the most important thing.

### Erin Hale:
Then, can I ask how centralized it was, just for yourself digital minister. When a lot of these decisions you're making or being made, I'm guessing, say, early 2020, when they started coming out, what does that process look like in government?

Were you all meeting together, and they delegated something to you, which you then went and talked to g0v about or whoever's on your team. What does that look like?

### Audrey Tang:
It's the other way around. It's g0v surfacing the needs to visualize mask availability or to shorten the contact tracing times in Taiwan. Then I bring the prototypes, the draft, if you will, the proof of concepts to the cabinet meeting. I call this reverse procurements because it's g0v making a specification.

### Erin Hale:
They right away jumped on it. Is that fair to say?

### Audrey Tang:
Yes. It's often due to the idea of a standby coffee, like you buy somebody else coffee paying for it. Some of the g0v people call it a standby governments. Before the government is even ready or even aware that they need coffee, g0v already pay for it.

### Erin Hale:
OK, that's interesting. You brought these ideas to the cabinet. That's really interesting and they were like, "OK, all right." I understand g0v has worked with the government before on other projects. I was reading about that on their website. They would trust them.

### Audrey Tang:
Yeah, there's 10 years of working together in collaboration. Many people active in g0v were previously ministers. There's a real talent circulation going on.

### Erin Hale:
That's interesting. One question that the editor had was, was the private sector involved in any of your COVID solutions?

### Audrey Tang:
Yes. Of course, to scale up and scale out the solution, we need a private sector. I call it people-public-private partnership, because it's the people, g0v, and the social sector coming up with the specification, including the privacy and several security guarantees that must be made.

Then we, in the public sector, amplify that, gets the implementation going. Of course, they're still private sector contractors, but they implement the open standard that was defined by the people, by the social sector.

### Erin Hale:
The private sector, would that be the phone companies?

### Audrey Tang:
Yeah, sure, the five telecoms, had to implement their own data retention, deletion after 28 days, reverse audit capability for contact tracing, and so on according to the specification made in a g0v collaborative note.

Also, for example, the QR code making, initially the Trade-Van, which is one of the publicly listed software company in Taiwan, did initial QR code maker, which is important because it allows small and medium enterprise without full signing a document or something. Just use their own telephone and then with a mobile ID be able to print QR codes even for the nearby streets and so on.

It resulted in more than two million vendors printing those QR code in the first week. Of course, all those vendors are also in the private sector.

It was initially designed just for public transportation on the first week, but because it's so easy to print and so easy to remix and use, a lot of food places, restaurants, and so on, even nine markets adopted quite voluntarily.

### Erin Hale:
Interesting. I didn't realize...for that sorry. The QR code company I think I didn't hear quite clearly. What was the name?

### Audrey Tang:
The Trade-Van, T-R-A-D-E-V-A-N.

### Erin Hale:
Trade-Van, OK. Cool. I'll make sure to include that. I didn't realize it was for transportation. That's very interesting. I understand that another big thing or successful tech thing was the use of adding flight information to three-NHI system.

That's how people were being tracked if they're high risk and that's still going right now. I'm not a tech person, but I'm guessing this is something to do with big data. How you're managing this level of information coming in? How has that worked?

### Audrey Tang:
The National Health Administration, the NHIA, Health Insurance Administration, already manages a very comprehensive back end to all the clinicians and pharmacists.

When they're making a diagnosis, and because it ultimately goes to the single payer, Universal Healthcare System, so it's all on the record. Each person using the health IC card, of course, is now also virtualized, so you can also present a QR code.

Either way, IC card or QR code, it begins a transaction with the clinician or pharmacist institutional card and patient's certificate, and two of them combined together and make a call to the National Health Insurance Administration, which is entirely centralized system.

Then, it writes a record with both of those electronic signatures on the record. All transactions pass through this NHIA, so they can add a footnote reminding both sides of extra information of the other side.

### Erin Hale:
That makes sense. It was already in place?

### Audrey Tang:
Yes.

### Erin Hale:
You didn't have to do that much. To summarize, then, for the vaccine rollout and the process of also doing priority groups, it seemed like, initially, that was very government-led. Then, as there are more and more vaccines, it became more of a local government issue. Is that fair to say? Back to the hospitals themselves, I was wondering how the registration process was designed.

### Audrey Tang:
Currently, there's two concurrent systems running. There's the 1922 system, which is pre-registration only and is run by the national government. That's the system I helped design.

As you said, because there's a abundance of vaccines now of all four different kinds, people are also free to simply walk in or register on their local hospital or local government in Taiwan. It wasn't the case back last July or something.

There was simply no spare vaccines, but yes, this year, the 1922-centralized government system focus on the third booster dose, whereas the first and the second shots as well as boosters is for the local government to handle.

### Erin Hale:
Then, 1922, what is the relationship with the CECC?

### Audrey Tang:
1922 is the toll-free number of CECC. Anyone can call 1922 and then a CECC call center person will pick up the phone, which is why the SMS also goes to 1922. The website is called 1922 because it stands for Center for Disease Control.

### Erin Hale:
Oh, I feel stupid now for asking.

### Audrey Tang:
It's fine. It's like calling 9-1-1.

### Erin Hale:
I like studying how everything is connected and is important. What ethical considerations do you all think about when responding to these issues like contact tracing? If a lot of personal information going over to the government, how do you make sure that wasn't misused?

### Audrey Tang:
By decentralizing or at least stored in plural segments. The technical term here is multi-party architecture, meaning that your phone company does not know the mapping between the 15 digits in your SMS and the venue.

All it has is a string of almost random code to then make sure entirely random code to them. It knows nothing about the venues. On the other hand, the venue never learns of your phone number. QR code maker, the TradeVan company, never learns your SMS record, your whereabouts.

These different parties are storing only part of the piece of the puzzle. Without piecing them together, a cybersecurity breach, or something does not review anything useful. Because of that, there's no perverse incentive to commercialize for advertisement purposes.

These fragmented pieces of data and only contact tracer can piece them together and they have to authorize themselves similar to how national health insurance administration authenticates clinicians, the pharmacists. When they do so, they leave a record for the person being traced to reverse all that was going on.

### Erin Hale:
That makes sense. Is the same thing go for the app, the Social Distancing app?

### Audrey Tang:
The Taiwan Social Distancing app provides only a QR code scanner, that's launched your built-in SMS message center. It's a shortcut more than anything. It's useful because it only admits QR code designed for contact tracing.

That's to say for 1922, any other QR code, like arbitrary QR code purporting to redirect your 1922 but collects your main data meanwhile, or is a scam or something like that. The Taiwan Social Distance app does not even recognize that QR code. It's also a cybersecurity interface.

### Erin Hale:
I know when the Diamond Princess cruise happened, cell phone location was used to trace people. Is that still used, transept the news and other major outbreaks? How does that work?

### Audrey Tang:
There's a way to send exposure notifications based on the coarsely defined phone tower proximity -- unlike 1922 SMS, which is very close -- it would send to tens of thousands of people at a time because you don't know whether they're in the same building or not. You just know they're proximal to each other within 50 meters or something.

By necessity, it notifies way more people than 1922 SMS. It's still used a few times, as a CECC decision. The decision to use that triangulation for exposure notification is not through me. I don't have any input as of the criteria of when to use it. Yes, it's still used last year. I don't think it's used this year but I might be wrong.

### Erin Hale:
I haven't heard that much about it but I wanted to double-check with you, though. How has the Digital Vaccine Certificate Program been going that you launched?

### Audrey Tang:
Because we're now in the hopefully postponed pandemic phase, it's not expanded in its restrictions. Other than the eight entertainment industries where it's almost by design, you can't wear a mask there.

For those places, host and hostess bars, and so on, you currently need to present your vaccination records, but it doesn't have to be QR code-based. It could also be your national health insurance app screen, or it could also be the paper, yellow card, as we call it here. It doesn't matter.

To present the records and the QR code is one form of record for convenience because many people want to carry it on their iPhone wallet or Google Pay wallet. It's built as a convenience device. It's not built as something that's mandatory in any way.

### Erin Hale:
That makes sense. Besides g0v, is there an end, like your company? Is anybody else in Taiwan who you think that I deserve mentioning in this article? I haven't been able to follow as closely as you [laughs] and other people.

### Audrey Tang:
As I mentioned in my "Summit for Democracy" conversation, my panel input the judge that denied a search warrant from a criminal investigator, who did receive the SMS copies and file search warrant to trade event, to the QR code maker. The investigator wants to piece things together even though it's not a contact-tracing thing. It's a criminal investigation thing.

The judge -- 張淵森 is the name -- denied the warrant and went public with it. The direct result is that the CECC met and said, "OK, we need to preclude, to exclude the 1922 SMS from the wiretappers." Basically, it's not designed to be wiretapped as it's not private "communication". You're certainly not chatting with 1922 -- there's no chatbots either. So it should not be used for criminal investigation because we say on each and every SMS is for counter pandemic use-only. That's a conversation.

Pretty much, all our nearby jurisdiction who wrote out something like this have had it. From what I understand, Taiwan is the most secure in the sense that in none of the cases. No matter how serious the crime, can they be used for the wiretapping investigation purposes.

### Erin Hale:
I'll be sure to include that. I didn't hear about that. That's a very good detail. Cool. I think that is all for now. I'll email you if I have any follow-up questions. Thank you so much for your time.

### Audrey Tang:
Sure thing.

### Erin Hale:
Thank you. Have a good day.

### Audrey Tang:
OK, cheers. Bye. Live long and prosper.
