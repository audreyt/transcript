# 2020-08-20 Interview with Dan Xin Huang

### Audrey Tang:
Let’s get started.

### Dan Xin Huang:
Great. Thank you. I thought we would start with I had some questions about particular things that you guys were doing during the early pandemic response, and then we can move on to more abstract questions I have for you about the Taiwan model.

### Dan Xin Huang:
You talked about transparency a lot as one of the key pillars in your work here. One of the ways in which that value really expressed itself was via open data when it came to the real-time mask supplies.

### Dan Xin Huang:
I was wondering, just starting from when you guys tapped in to the effort, if you could walk me through the various initiatives in which there was a move of some kind to open up more data, government data to civic hackers to the public community, if we could just go through that.

### Audrey Tang:
Sure. One of the most important ideas is about this OpenAPI, which is making available, for example, the amount of mask in each pharmacy every 30 seconds. We call it OpenAPI because it’s refreshing almost real-time. If we had published it once a day, that’s just open data. There’s a real difference, even though that it is, of course, still open data that we’re pushing out.

### Audrey Tang:
According to most of the other counties for the Information Acts, usually, those data will pass a human review, which necessitates a longer publishing schedule, like once per week or, at most, once per day. This person has to review it every day before it tallies at the end of the day.

### Audrey Tang:
By publishing every 30 seconds, we’re essentially saying that this is machine to machine. It doesn’t go through a human review. It says that we can’t even hide any glitches from the general public.

### Audrey Tang:
If people queue in line in a pharmacy and swipe their NHI card nowadays, they will expect that people came after them can refresh their map and see the number decreased by 9 if you’re adult, or 10 if you are a child. Had we published it every day, it’s not possible.

### Dan Xin Huang:
Wait, but you said there’s still a 30-minute window?

### Audrey Tang:
30 seconds. At most, the longest window is three minutes. We don’t do longer than three minutes intervals. That’s because each transaction is, on average, two to three minutes. It means that people coming in can keep each other honest, keep the system accountable, and making sure the pharmacy isn’t stowing away the masks or something.

### Dan Xin Huang:
The Open API was available for the supply of masks at all the different pharmacies.

### Audrey Tang:
That’s right.

### Dan Xin Huang:
Were there any other data sets?

### Audrey Tang:
That’s the decision that we made. It was February 6, the first day of the pharmacy-based mask rationing. In the morning, the open data was like open data. It’s published. The National Health Insurance Administration originally planned to publish a few times a day, after human review, of course.

### Audrey Tang:
Very quickly, people found out that if the map has only stale information, it actually creates more confusion than it solves confusion, because then really what it would use is yesterday’s numbers for people queuing, not today. We keep pushing the NHIA to reduce the interval.

### Audrey Tang:
They’re like, “Yeah, but that means that outside developers will have incorrect information and we have to correct it afterwards, because there’s no human review.” Then there’s a crack in everything, that’s how the light gets in. That’s how we welcome the input. By afternoon that day, it’s switched to every 30 seconds.

### Dan Xin Huang:
Same day?

### Audrey Tang:
It is the same day.

### Dan Xin Huang:
By the end of the first day, it was already OpenAPI.

### Audrey Tang:
That’s right. There’s many discrepancies, of course. There’s pharmacies tending on number plates and just collecting NHI cards. They swipe the NHI card at their leisure and ask people to come with number plates in the afternoon. The map will show a gradual decrease, but actually it’s like this in the field. That created a lot of confusion.

### Audrey Tang:
We listened to the pharmacists because in one of the early mask availability projects from Jiang Mingzong, the one with a lot of triangles are the most popular one now. Each pharmacist can type in public notes for other customer to see. There’s many pharmacists that just say numbers are wrong because they handed out numbered tokens.

### Audrey Tang:
We had to adjust the data schema, meaning the structure of the data, adding, for example, availability times, hours. We even developed a feature where a pharmacy, after handing out all the numbered tokens, they can press a key and disappear in the map, and so on.

### Audrey Tang:
This is a real co-creation. That’s how the light gets in. It makes all the misassumptions, wrong assumptions very transparent to people as well. People did complain about it, and every time they complain about it, we fix it every other Thursday. In the beginning, every Thursday.

### Dan Xin Huang:
A few clarifying questions on what you just said.

### Audrey Tang:
Sure.

### Dan Xin Huang:
First of all, sorry, what are number tokens? How does that system…?

### Audrey Tang:
Right. It’s called 號碼牌. Basically, they will, for example, for 200 masks per day, they will have small cards with handwritten numbers or printed numbers from 1 to 100.

### Audrey Tang:
For people queuing in line, sometimes, some pharmacies, they do handing the pharmacies their NHI card in exchange for the plate. Then they can go to work, have lunch, or something.

### Dan Xin Huang:
Oh, I see.

### Audrey Tang:
They very quickly absorb all the queuing people.

### Dan Xin Huang:
It’s like a reservation.

### Audrey Tang:
Right, and once the 200th token is handed out, they say, “We’re out of masks.” At a backstage, they are slowly swiping the NHI card. It creates a discrepancy.

### Dan Xin Huang:
Yeah, I see, thanks. Then when you’re describing a lot of that, you said, “Starting with the first day of the mask rationing policy, we kept pushing the NHIA.” When you say we, do you mean the digital ministry, you guys here in the government?

### Audrey Tang:
Well, just me, \[laughs\] but of course, there’s people working also as secondments from other ministries as well. The people you see are also part of PDIS. By we, I mostly mean our office.

### Audrey Tang:
I think there were, the people pushing for the quicker intervals are Zach Huang, my executive secretary and Bing-Luen Zhuang, used to be our intern, but now a full-time, software engineer. Also, Targee Hsu, so the four of us.

### Dan Xin Huang:
Beyond the real-time mask supplies, were there any other more qualitatively different datasets that you guys put on OpenAPI or that you guys pushed the boundaries of transparency by opening up to this open data philosophy?

### Audrey Tang:
Sure. Another thing of value, I think, is the…Let me get the English name right. Just a second.

### Dan Xin Huang:
No problem.

> (pause)

### Dan Xin Huang:
Sorry, what kind of console is this?

### Audrey Tang:
It’s an Asus ROG computer.

### Dan Xin Huang:
Oh, wow.

### Audrey Tang:
It’s just a computer.

### Dan Xin Huang:
That’s very cool.

### Audrey Tang:
I think the dashboard, even though it’s standard now, is a interesting story of compromise. For a long time, this has been around for other respiratory disease. This has come from cases by counties and cities.

### Audrey Tang:
People kept pushing for finer resolution, like to district level or to even smaller levels, like township. The CECC keeps saying no. I think this is a non-radical transparency issues. Like for each confirmed cases, there’s a number.

### Audrey Tang:
Each confirmed cases has this case history that says how many people are checked and/or quarantined because of this particular case, so there’s a history. You always only see up to the county or city level.

### Audrey Tang:
It never reveals any spatial resolution that is finer than county or city level. This is, I think, a good decision, a publishing only in the aggregate, so that reidentification is very difficult. Not entirely impossible, but I think for the vast majority of cases, the journalists worked with the CECC to not publish reidentifiable information.

### Audrey Tang:
So that once they recovered, there’s no, or little to no, labeling effect for those people. The crucial thing here is that, if we publish, as many people demanded CECC, any more detail, reidentification would be inevitable.

### Audrey Tang:
Then people who show any symptoms will fear the social pressure. Then they will not wear mask, show up to a local clinic, and get checked. Then that will probably cause a community transmission.

### Audrey Tang:
Since the very beginning, there’s this tug-of-war going on. I think, just by saying very clearly that we do not publish any cases, travel history, if we already know through contact tracing interviews, exactly who that person have reached…

### Audrey Tang:
If the interview is successful, then we publish nothing, only to the city level.

### Dan Xin Huang:
Nothing of the travel history?

### Audrey Tang:
Only if, for cases like for example, the Diamond Princess, where there was no very fine-detailed interview possible. Then we do publish their travel history and ask people to compare their own travel history against that travel history.

### Audrey Tang:
That’s a very isolated case. By and large, we do not do that. I think this is also worth mentioning, lest other people look at radical transparency and think that we make the people transparent to the state. That’s not what we’re doing.

### Dan Xin Huang:
It’s in the other direction. Where does that mechanism get triggered? Who has the information and at what point? Who comes in to say, “OK, when it comes to the next level, we’re going to intentionally not make this information public”?

### Audrey Tang:
The medical officer’s team has that information, because they are the interviewers. The person who make the final decision whether to publish or not is Commander Chen Shih-chung. That’s pretty much it.

### Audrey Tang:
Of course, I am not in the expert panel in the CECC meeting, but I am in the weekly mask meeting with Minister Chen. We also talk about quite a few things.

### Audrey Tang:
For example, there was a case where the contact tracing interview for someone working as a professional waitress in an intimate drinking bar pretended to be not a professional of that kind on the first day of the contact tracing interview.

### Audrey Tang:
Then said a very different story on the second day of contact tracing interview. Then we had a very long discussion. By we, I mean everybody in the mask weekly meeting, including the premier, had a very long discussion about what exactly to do with nightclubs and intimate drinking bars.

### Audrey Tang:
The ultimate result was that there was no persecution. We do not introduce, not even fines, let alone criminal charges, if they cannot keep contact tracing, contact book for all their customers, because we understand many of customers do not want to be reidentified.

### Audrey Tang:
Also, they couldn’t keep the physical distance very well. That’s the point. We didn’t say that it’s illegal. We’re saying essentially, Minister is saying, before they can do those things – keeping a contact history and keep the physical distance – then he would encourage people to not visit these places.

### Audrey Tang:
He would encourage these business owners to shut down their business until they figure it out. That’s softest possible way to go about this. Actually, that’s the only legal way, because we have no state of emergency. \[laughs\]

### Audrey Tang:
It’s not like we can pass anything, like a criminal prosecution without parliamentary oversight. On the other hand, we don’t want to do that, because then it will just push these people as others.

### Audrey Tang:
I think Minister Chen operates on what I call the Pygmalion effect. He expects the nightclub and intimate drinking bar owners to figure out something. Then, after a couple months, they did. They figured out that they can ask for a pseudonym.

### Audrey Tang:
Then an email or an SMS number that ensures proper contact, but they don’t key it into the cloud or some other computer system. They just write it down. Then they shred it after four weeks.

### Audrey Tang:
Then they have these plastic shields that people can still drink underneath, but there is no kissing and no violation of physical distance, and so on. They reopened after their municipal oversight.

### Audrey Tang:
I think that illustrates very well this kind of mutual trust business going on.

### Dan Xin Huang:
You attribute that to…

### Audrey Tang:
Minister Chen.

### Dan Xin Huang:
…Minister Chen, but you described it as the Pygmalion effect?

### Audrey Tang:
That’s right. It’s like expecting the society to come up with innovations, and so they will rise up to the challenge.

### Dan Xin Huang:
The way that you described that sounds like it has a lot of overlap with your own view, right?

### Audrey Tang:
Very much so.

### Dan Xin Huang:
Was it that you guys both just happened to see eye-to-eye, be aligned when it comes to these things?

### Audrey Tang:
Yeah, I learned a lot from Minister Chen. That’s for sure. He was part of, I think, the first public citizens deliberation of national policy. That’s the national healthcare deliberation, I think around 2002, 2003. Yeah, he has been doing this open government thing for a long time.

### Dan Xin Huang:
Actually, he’s had a huge influence on you when it comes to developing…

### Audrey Tang:
…for this particular, for the counter-coronavirus, definitely.

### Dan Xin Huang:
You mentioned these weekly mask meetings. Are they still happening?

### Audrey Tang:
No. Once we lifted the export ban, I think that’s when the meetings concluded.

### Dan Xin Huang:
That’s when it concluded. Do you guys still have any regular or semiregular meeting at the high levels to focus on coronavirus?

### Audrey Tang:
There’s the cabinet meeting. Nowadays, I think we’re, after the lifting of the mask export ban, we’re in this post-pandemic period, or the “new normal.” \[laughs\]

### Audrey Tang:
Unless, of course, there’s locally transmitted cases, and then I expect we’ll resume the weekly meetings. Long as there’s no locally transmission or local spread, I think we’re good.

### Dan Xin Huang:
I think in the last one or two weeks, anecdotally, I’ve been talking to people, including just regular people, who it seems to me like they’re a little bit more worried.

### Dan Xin Huang:
I think they’re looking at imported cases, but they’re also looking at some of these confusing, like the Belgian guy, for example and some of these other cases, where there are no symptoms detected until people leave.

### Audrey Tang:
I am, of course, aware of that.

### Dan Xin Huang:
How are you feeling about that stuff right now?

### Audrey Tang:
I feel that, if we keep the physical distance, wash our hands, and bring us with a mask and put it on when it’s crowded, we are reasonably sure that these three measures together, if observed by more than three-quarters of population, decrease the r-value to be under one.

### Audrey Tang:
Even if there’s and few locally-transmitted cases or something, it would not spread with a lower-than-one r-value. That’s the systemic response.

### Dan Xin Huang:
OK, thanks for that. At a certain point, I know that part of the response was actually this really smooth and effective collaboration between you and the social sector. I think prominent within the social sector is g0v. Could we start from just how you first got involved?

### Audrey Tang:
With g0v?

### Dan Xin Huang:
Yeah, because I know that you…

### Audrey Tang:
That’s around the end of 2012, with CL Kao and many of his friends just started this movement. I think it was on the Yahoo! Hack Day, where they visualized the national budget and provided an interactive forum.

### Audrey Tang:
Which, by the way, is now part of the national government website, join.gov.tw. It literally adapted the inaugural g0v project into the national mechanism. It’s a fork and then a merge. I was helping out.

### Audrey Tang:
I was maintaining the spreadsheet system called EtherCalc that they use for many of their coordination, but I wasn’t directly involved in any particular project. My involvement would come later in 2013 when my good friend, Yeh Ping, started this project to “liberate the dictionary from the Ministry of Education.”

### Audrey Tang:
That is to say, there’s many good dictionaries, and the largest one, the revised Mandarin dictionary maintained by the MoE was just not usable on the mobile phone. It uses very old encodings. It’s impossible to bookmark any URL.

### Audrey Tang:
Anyway, it’s a broken website by modern standards, but each Web page says, “Copyright all reserved,” or something, “All copyrights reserved.” We decided to do a collective civil disobedience to scrape all the data and relinquish all our whatever copyright claim that we may have on it.

### Audrey Tang:
Then we just collectively do a multilingual dictionary project together. I helped choosing a name for the project, calling it the MoeDict or 萌典, and then became the principal maintainer. Actually, I still am now. That became one of the most visible g0v projects.

### Dan Xin Huang:
I understand g0v to be this decentralized network…

### Audrey Tang:
It’s just a bimonthly large hackathon with many, many weekly or biweekly meetups.

### Dan Xin Huang:
At the same time, would it be fair to say that there’s certain members who take more of an organizing role?

### Audrey Tang:
At each point, of course, but people fade in and people fade out within the community.

### Dan Xin Huang:
When it comes to the pandemic response, can you talk specifically about when that collaboration between social sector, g0v, and the government was at its maximum?

### Audrey Tang:
It’s still growing. I don’t know where the maximum is.

### Dan Xin Huang:
OK. In relation to COVID.

### Audrey Tang:
Yeah, it’s still growing. If you ask when is the most intense, that’s a different question. I think when Howard Wu wrote the first crowdsourcing mask availability map, I think he started having that idea around end of January and started coding at the very beginning of February, and then offer it to the public.

### Audrey Tang:
He joined the g0v Slack channel to just ask how to save some API usage fees from Google Maps, because he was owing Google a lot of money at that time. Then people volunteered to think about ways to build a different back end, to use a different mapping system.

### Audrey Tang:
I saw that discussion and actually brought that idea to the premier, I think, the very next day. The premier said, “Of course, we need to support this kind of social innovation.” The four people in my team were all on the g0v Slack channel, answering questions.

### Audrey Tang:
Essentially acting as bridges between the civic hackers on one side and the NHIA on the other. NHIA people was not on the Slack channel, but our internal chat tool, Rocket.Chat, is very straightforward a Slack clone. \[laughs\]

### Audrey Tang:
People already gets very versed in operating in Slack context. There’s no cultural differences between our office and g0v. It enable a very efficient conversation. Then just random civic hackers appearing, saying, “What about people only using LINE? They are not going to use the map.”

### Audrey Tang:
“We’re doing a chatbot. Is the open data just for Howard Wu, or can we use it, too?” Of course, you can use it, too. It turned out they are the HTC DeepQ team with the name Frank. I think the amazing thing is that it’s just thousands of people at one time in the channel, talking about all these things.

### Audrey Tang:
The channel would eventually split off the general channel and then move onto the mask channel, which gets renamed to the COVID-19 channel. I think at any time, there is more than 500 members on that channel, which is a very sizable developer base.

### Audrey Tang:
Like Frank of HTC DeepQ, I think, has more than two million users at that time, so very comparable numbers with the maps from Finjon Kiang and Howard Wu, which each also have millions of users. Altogether, I think we reach more than half the population in the first week, which is I think the first time that civic tech became essentially public infrastructure.

### Dan Xin Huang:
That’s cool.

### Audrey Tang:
Like, more people using it than a highway, probably.

### Dan Xin Huang:
Yeah, well…

### Audrey Tang:
\[laughs\] Which qualifies the civic technologists as civil engineers. \[laughs\] That’s, I think, the most busy days, was in early February, all the way to end of February.

### Dan Xin Huang:
Before the general channel became the mask channel and COVID-19 channel, how many members were in the general channel?

### Audrey Tang:
At any time, there is 8,000-ish people in the general channel.

### Dan Xin Huang:
To your mind, what are the links between the Sunflower movement and the public response to the Sunflower occupation and 2020 government trust, social trust, and how all of that came together in this pandemic response?

### Audrey Tang:
I think the ideas of accountability really changed. In Sunflower, the idea is that accountability could be participatory. It could be direct. You can just show up in the parliament or watch the live stream, ask your question, and expect it to be answered.

### Audrey Tang:
It’s very liberating. Previously, it’s constrained by your representative schedule, for one, and the parliamentary schedule, and the life cycle of FOIA requests. It’s frustrating. There’s no single portal toward all regulatory pre-announcements, draft.

### Audrey Tang:
There’s no petition platform, but there’s a lot of grassroots petition platform, which may or may not get any response. There’s no visualization of the budget, except the g0v one, but that g0v one doesn’t guarantee the public sector will read it, let alone answering it.

### Audrey Tang:
It’s all very fragmented, and so accountability was seen as something that is very time-consuming, very intensive. You have to organize politically to get an account from the government.

### Audrey Tang:
Then the norm after Sunflower is that of participatory accountability, which actually could be linked to the counter-COVID response by this OpenAPI mindset. Like, people queuing in line keep each other honest and keep this system honest.

### Audrey Tang:
Before, people would say the Control Yuan, the ministers, or whatever is where they place the trust. Whether they earned the trust or not, there was no measure to shorten the distance between the people on one side and the civil servants on the other.

### Audrey Tang:
It’s always the political representatives and appointees in the middle that keeps these two sides unconnected to one another. After the Sunflower Occupy, Minister Jaclyn Tsai asked me to be a reverse mentor.

### Audrey Tang:
Then I taught. I think the first batch was three batches of 100 people each, of the section…No, actually, department heads. Like level 12 or higher public servants. There’s exactly 300 people of that rank in the entire civil service.

### Audrey Tang:
Then we talked, and to my surprise, I learned that a majority of them were Occupy supporters. They are also very much pining for a way to listen at scale. Like, they would wish that the signal-to-noise ratio is higher when doing public hearings.

### Audrey Tang:
They also really want to communicate directly to the people, instead of through caricatures, through various different channels. We brainstormed together, using a few initial cases, such as the equity-based crowdfunding telework and the closely-held companies law with special voting stocks and so on.

### Audrey Tang:
These were the first three cases that we worked on to find a way to not talk only to a representative, but to work with the people, so they can represent themselves. That was the vTaiwan project.

### Audrey Tang:
I think that’s the cultural change, like people would expect that public service is not something hidden behind professional politicians. They expect that, through a digital deliberation platform, they can systemically provide accountability.

### Audrey Tang:
It’s mutual as well. The public sector can ask the social sector to work on things that the social sector considers important, but it’s inappropriate for the public sector to work on these things. For example, fact-checking.

### Audrey Tang:
That’s a very good example, because the public sector is one of the parties that’s reported by journalists. If we say that we’re fact-checkers, that will actually throw all the journalism standards. We’re just saying, “No, we provide timely responses to journalistics inquiries, but it’s people in the social sector that are fact-checkers. That’s what I mean by the social sector leading the innovation.

### Dan Xin Huang:
In the scheme of escalating US-China tensions, we have an election coming up. The US is obviously dealing with a lot of its own democratic public trust issues.

### Dan Xin Huang:
I wonder if you could say a little more about where Taiwan’s place is in all of this.

### Audrey Tang:
I’ll use a example, because I didn’t talk about the parliament in all our interviews. I feel that there is something missing there. I remember a time when we – I think it was also during late February-ish – when there’s a mask map from a team called Geobingan, G-E-O-B-I-N-G-A-N.

### Audrey Tang:
They are the first mask availability map that shows not only each individual pharmacies, but also the trend. You can zoom out and see whether the north side have more supply left than the south side of Taiwan.

### Audrey Tang:
You can zoom in to learn about discrepancies within the county that…For example, in the city center of Pingtung, there is more supplies than the more rural parts of Pingtung.

### Audrey Tang:
Even though the pharmacies look like they’re evenly distributed, it’s actually if you are an elderly person and rely on public transportation or bicycle, it will actually cost much more time for you in the more rural parts, even though the distance looks the same, because of lack of public transportation and so on.

### Audrey Tang:
There’s a legislator, MP Ann Kao, is a new legislator of the Taiwan People’s Party who served as VP of Data Analytics at Foxconn, so she knows something about data science. She cited numbers and projected the Geobingan map in her interpolation to Minister Chen Shih-chung.

### Audrey Tang:
Saying that there’s uneven distribution due to supply and demand differences. Minister Chen at the time was at the height of his popularity. He did not jump to defend any of our existing systems.

### Audrey Tang:
He simply said 「委員，也許你可以教教我們」, which is in English, “Legislator, teach us.” \[laughs\] Then promised to immediately revise the system.

### Audrey Tang:
The day afterward, Ms. Kao posted on her Facebook – and I quote – “In the wake of yesterday’s questioning is two days improvement,” because we did change the distribution algorithm as per the Geobingan’s insight.

### Audrey Tang:
I think this is a good illustration of the opposition party doing a constructive criticism. The revision is only possible, because all the different sites share the same objective facts. It is not like she criticized in the abstract fashion, but rather she pointed to data.

### Audrey Tang:
It looks fine in this city or county, but if you zoom in, you find discrepancy and things like that. I think Minister Chen’s response is something, I think it really is a Taiwan model, and that many administrations can learn from.

### Audrey Tang:
Which is essentially like the Mandarin I use is, 你行你來. I don’t know how to translate that to English.

### Dan Xin Huang:
“If you have the ability, then come on board.”

### Audrey Tang:
That’s right, “Welcome aboard.” I think some people translate it about, “You can, you up.” \[laughs\] That’s probably not the right translation. \[laughs\]

### Dan Xin Huang:
It’s punchier.

### Audrey Tang:
OK. By amplifying all the constructive criticisms, it turns out that people are not polarized at all when we share the same objective fact. A lot of the political divisiveness is because people that people who hold very similar, even the same, values simply were living in different realities.

### Audrey Tang:
This OpenAPI participatory accountability is just to make sure that people live in the same reality and can confirm with their own eyes, just like how we, in the voting ballot counting process, hold up each vote for each YouTuber to film the ballot.

### Audrey Tang:
It is a way for people to trust whichever YouTuber that was in that particular counting station to reflect correctly on this shared fact. I think that what’s necessary for any liberal democratic or social democratic countries to regain public trust.

### Dan Xin Huang:
It sounds like another big factor there is that it’s another argument for how technology can empower democracy.

### Audrey Tang:
That’s right.

### Dan Xin Huang:
I think we’ve talked a lot about how, when it comes to technology, a lot of it is the communication elements of it. It’s a speaker phone. You can listen. You can speak, but you also have to listen.

### Dan Xin Huang:
When it comes to these new data tools, it’s the ability to create more robust and more accurate data that then everyone – it doesn’t matter what party you’re in – has to buy into.

### Audrey Tang:
That’s exactly right, yes.

### Dan Xin Huang:
Great. That’s all I’ve got for you. This is really helpful.

