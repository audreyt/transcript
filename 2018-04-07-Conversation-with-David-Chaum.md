# 2018-04-07 Conversation with David Chaum

### David Chaum:
Did you have a chance to maybe look at some of the things that I’ve been doing more recently?

### Audrey Tang:
To be honest, it is your colleague who visited me a few months ago.

### David Chaum:
Yeah, Nicholas.

### Audrey Tang:
Yeah, Nicholas. I read through the code, the mock election, the math. I can’t say that I understand all of it, but I understand most of the properties that you’re making, the anti-vote selling and stuff like that.

### David Chaum:
Oh, really?

### Audrey Tang:
Yeah, I understand the idea, so you can assume that I know the idea. I haven’t followed very closely the development in the past few months.

### Audrey Tang:
No, it’s good.

### David Chaum:
We had a system called Two Ballot, which hasn’t been published yet.

### Audrey Tang:
It helps the economy?.

### David Chaum:
\[laughs\] Help is quite a thing. I have to keep in mind that I’m on the record.

### Audrey Tang:
No, you can edit it for 10 days.

### Audrey Tang:
Yeah. You can’t edit my utterances. It still has to make sense in context.

### David Chaum:
I see. That’s interesting.

### Audrey Tang:
I’ve had a journalist who removed all her statements, it looks like me monologuing.

> (laughter)

### David Chaum:
That’s interesting. I said I was big fan of this.

### Audrey Tang:
It’s open by default. If you want to change the default, you have to put some thought into it. That’s all this means.

### David Chaum:
That’s interesting.

### Audrey Tang:
Besides, the transcription technology could have typos and so on, we can’t say you can’t edit.

### David Chaum:
Plausible deniability.

### Audrey Tang:
That’s exactly right.

### David Chaum:
Thank you. By the way, what is your tenure here? Is that going to be for quite some time?

### Audrey Tang:
I’m here for one year and a half now. If all goes well, I’m here for another two years. Then there’s the presidential re-election. If Tsai get re-elected, there’s a chance that I’ll be here for six years, but there’s no promise about it.

### David Chaum:
You’re voted on by the national population?

### Audrey Tang:
The Taiwan administration is weird. \[laughs\] The president is by popular vote. The president appoints the premier, and the premier nominates ministers for the president to appoint. We’re all appointees, in a sense.

### Audrey Tang:
It’s technically revocable for accountability. If there’s a major disaster, of course, I’ll have to resign. But a minister without portfolio, don’t have a portfolio.

> (laughter)

### Audrey Tang:
It’s unlikely that I’ll be held accountable for something that I have to resign. That’s the design of the minister without portfolio position. There’s nine of us now.

### Audrey Tang:
Yeah, there’s nine ministers without portfolio.

### David Chaum:
Maybe we could talk about the random sample voting just generally for a moment.

### David Chaum:
You have some understanding of the random sample voting. Let me try to refresh your memory, just briefly, and then maybe we could talk about it more substantively.

### Audrey Tang:
Sure.

### David Chaum:
Random sample voting proves to the public, irrefutably, because the proofs can’t be falsified or fabricated, even by someone with infinite computing power. You realize that they are statistically -- we say unconditionally -- convincing. That’s very strong, and that’s what you want in a situation where a state actor could try to mess with the integrity of a system. It proves a few things:

### David Chaum:
One is that the voters are selected independently and uniformly, at random. We found that most people, even scientists, when they hear about this first, their biggest concern initially -- this is valuable information -- is that the selection itself would somehow be manipulated and that it wouldn’t be truly at random.

### David Chaum:
One thing we found helpful in explaining this was to say that it is equivalent to each voter being given the opportunity to flip, say, 20 coins. They would be allowed to vote in that election if all 20 were heads. We proved that the choice is unmanipulatable by even us, by anyone, but remains secret until after the election was reported.

### David Chaum:
The second thing is that the tally does, in fact, reflect accurately the votes cast. That second property is also unconditional, statistical. The third property is of voter secrecy, where how an individual voter voted will never be revealed. In that white paper, which I think you have in front of you, maybe...

### Audrey Tang:
Yeah, I was just reading the property list.

### David Chaum:
I wish I was half as smart as you.

### Audrey Tang:
No.

> (laughter)

### Audrey Tang:
That would make you one-tenth smart as you currently are.

> (laughter)

### David Chaum:
I’m sorry. You threw me for a loop there.

### David Chaum:
The only bifurcation in the proposal, and it’s actually just a footnote, is that there is a version where...The basic version is where who the voters are is revealed after the vote in a kind of audit. The special version is different in that the voters are more or less never revealed publicly. Both are good because if you reveal the voters before the vote, they could be manipulated.

### David Chaum:
The way we do that is not perfect, but it is by a kind of what you might call indirection in computer science. We say, &quot;OK, we’re going to reveal the name of all voters, but each voters name is only revealed to a single randomly chosen person that’s specifically randomly chosen for that voter.&quot;

### David Chaum:
Then we say, &quot;Go talk to that voter, get this number from them, and make sure they’re happy and then bring that number back and when we see that number come back then we’ll know that you really did check on them.&quot;

### David Chaum:
Now, why do we need either of these or at one of these mechanisms? Do you have any answer to that?

### Audrey Tang:
Just to make sure that it’s unsalable.

### David Chaum:
No.

### Audrey Tang:
To make sure that the person actually voted the way that it was reviewed.

### David Chaum:
No. It’s because the election officials could pretend that they did all this, if no one ever knew who the voters were, there might be no voters at all. \[laughs\] They could just say, &quot;We mailed out a thousand ballots and here are the results,&quot; but actually, they never mailed out any ballots.

### David Chaum:
You need to actually go and check that real people really did get the ballots. The way we do it is perfectly effective, but it does have the consequence that the simple way, the most secure way, is we just reveal who the voters are, but only afterwards.

### Audrey Tang:
The scenario I was raising was that they actually run two or more votes, and it’s selected the one that’s most favorable to their political preference.

### David Chaum:
This is an excellent observation, but the way we do it is secure it against that certainly. What happens is that who the voters are is locked in...Let me just explain the basic randomization of who the voters are process in outline, because that I think explains a lot of the properties that drive from it. In the white paper, in the introduction, I say, it’s similar to flipping a coin and you put your hand over it on your wrist. You have that here? You’re familiar with this, right?

### Audrey Tang:
Yes, sure.

### David Chaum:
No one’s supposed to see what the outcome is, and then the counter-party says, &quot;If it’s heads, I’m going to be a voter.&quot; Then, only then, is it opened or revealed. Because of that mechanism, there is no way for me to cheat you out of having a 50/50 chance of being a voter, because even though you don’t know what I have hidden here, I cannot change it.

### David Chaum:
You flip a coin basically and decide whether to say it’s heads you get to be a voter, or tails you get to be a voter. I have no way of knowing what you’re going to do, there is no way for me to change it once its covered by my hand. It only reveals exactly what was there before. Does that make sense?

### Audrey Tang:
Yes.

### David Chaum:
This means that the choice of voters is locked in. As soon as that random experiment is made, which you could use blockchain for, or you could use a stock market closing price, or something, there is no way to change it, the possible attack that you were sketching doesn’t work.

### Audrey Tang:
Just to check my understanding. The sampling, the voters who are not sampled, they still receive some sort of choice? Out of the two million people in Taipei, about, I don’t know, 200 are sampled. For the rest of the citizens, what do they receive?

### David Chaum:
Let’s switch gears, break the thread there. Let me talk about, briefly, an example way to use this system in Taipei.

### Audrey Tang:
We’re going to have a mayoral election.

### David Chaum:
Yeah, I know it’s coming up and it’s a big deal. I think there is also the question of absentee voting.

> (laughter)

### David Chaum:
Let me just roughly sketch out for you. You could ask me, David, how would you foresee the random sample voting be used if say you had your way? It was miraculously the case that we decided to use it here in Taipei, and make the best use of it. What would you recommend? How would you see it really being used? Not a pilot. What was the ultimate...

### Audrey Tang:
For mayors, for councilors, for participatory budgeting, for what?

### David Chaum:
Here’s how I would imagine it. We would run a tournament of, let’s say, binary contests.

### David Chaum:
Anyone who wants to, can submit ballot question language.

### Audrey Tang:
Would you like some caffeinated stimulants?

> (laughter)

### David Chaum:
No.

### Audrey Tang:
You can draw on this iPad here.

### Audrey Tang:
Wait. We already do a version of that now, I don’t worry about feasibility. There’s an e-petition system. Every month, all the delegates from each ministry vote for two cases that are worthy for cross-ministry collaboration. We already have this kind of system.

### David Chaum:
I saw a website. There was a web page for each question.

### Audrey Tang:
We call them e-petition, but many of them could be phrased as yes/no questions.

### David Chaum:
Where do they come from exactly?

### Audrey Tang:
Anyone with a mobile phone number in Taiwan can submit an e-petition.

### David Chaum:
Then these parts of government decide which ones?

### Audrey Tang:
Yeah, the participation officers. They look every month to the previous month e-petitions, ordered by the signatures each one collected. If it’s above 5,000, or if it’s sufficiently cross-ministry, then these become valid for all the participation officers. There’s about 30 or so POs, one from each ministry.

### Audrey Tang:
We do a simple approval voting, actually limited by two votes. Every PO has two votes. At the end, every month, we take the two cases that has the highest vote for deliberation and collaborative action for that month. We already have an approximation of the case. It’s just that the second round is not done by the citizens. It’s by the ministry.

### David Chaum:
Then what happens to them?

### Audrey Tang:
We telephone, email, or contact the petitioner. We work them to refine their language. We invite the stakeholders named. In each of the petition, we have pro and con columns. We collect the best ideas, again, voted by the general populace and map them into what we call issue-based mapping, which lists the pro and con points of this proposal.

### Audrey Tang:
We invite up to five petitioners, ranked by how quickly they respond to our call-to-meeting, to a meeting. Then we livestream the meeting, keep a full record, and make sure that everybody knows why we’re finalize this or that.

### Audrey Tang:
The final resolution is by deliberation. It’s not by voting, but the voting is helpful because it let us collect the stakeholder network, the aspects, the possible solutions, the questions, which is yellow, suggested solutions or options for solutions, which is green, supporting material, which is blue, and possible government actions.

### Audrey Tang:
At the end of the co-creation workshop, we collect possible solutions and each government minister responsibility in it on a Friday. The next Monday, I bring this to the prime minister and my colleagues, the other ministers without portfolio. If they think it’s OK to proceed, then it becomes policy. That’s the system we’re working on at the moment.

### Audrey Tang:
It starts from e-petition, but ends in deliberation.

> (pause)

### David Chaum:
The five people who appear and participate in the deliberation are...

### Audrey Tang:
The people who participated in the original petition.

### David Chaum:
It’s not just someone who sends it in, but then there’s signatures that are collected, and then there’s more than one person?

### Audrey Tang:
It’s all electronic.

### David Chaum:
How does more than one person participate, besides signing?

### Audrey Tang:
You can sign. You can add a comment, and the comment can be pro or con, and then you can vote on each other’s comments. The comments with the highest vote get to the top.

### David Chaum:
Then the people who were the most active are the ones that are brought to the deliberation.

### Audrey Tang:
That’s right, and these people’s points are also carried, verbatim, into this mind map, they can come and defend their points.

### David Chaum:
The conclusion from that deliberation...

### Audrey Tang:
Is then synthesized and brought to the prime minister.

### David Chaum:
But it is just then a specific action?

### Audrey Tang:
Yeah, sure, but if it’s something that’s within the capability, if it doesn’t need a new law, then we can just go ahead and allocate random millions of budget and make it happen. That’s the system we’re working on. It doesn’t end in voting. This is not the same as the mayoral or councilor election base. It’s cheap enough so we can do it every other week.

### David Chaum:
You found this to be...

### Audrey Tang:
Very useful. We’ve been running this for a year now.

### David Chaum:
What sort of changes has it affected?

### Audrey Tang:
A large hospital has been built in the south-most part of Taiwan. The people there asked for a helicopter to serve as ambulance, but that’s not the best solution. After this mind mapping, we decide to allocate some hundred million or something, a lot of money, to build a larger hospital there.

### Audrey Tang:
For example, our income tax filing software was petitioned because it was broken on Mac and Linux, but the people who allocate the funds are Windows users. We did five co-creation workshops with petitioners. We’ve completely redesigned this year’s income tax filing software.

### Audrey Tang:
There’s many other cases. There’s a case where we have the Marine National Park to selectively ban fishing. That was the original petition, but then we reached a compromise with the people who do the fishing there. There’s many others.

### Audrey Tang:
The current one that we’re deliberating is whether unmarried women can apply to have artificial insemination. This is currently not allowed in Taiwan, but legal in US. That will actually require legislative action. This is more of unifying what the ministries think about it.

### Audrey Tang:
There’s some very practical ones, like the very long turnout that goes to whether we allow motorcycles or not. There’s many ones.

### Audrey Tang:
There’s also ones that has constituents as public servants, like whether we can take an absence, public servants, counted in hours instead of half-day, because at the moment, it’s half-day. After the petition and consultation, we decided that one hour, this actually makes more sense, starting next month, it’s one hour, and so on.

### Audrey Tang:
It’s been like 30 or so cases and only about half of which are exactly as the petitioner wanted. Everything else has to go through amendments and refinements. Yeah, it’s resulted in some pretty good policy changes.

### David Chaum:
I wanted to tell you about random-sample voting, but now, you’ve got me very interested in what you are doing. \[laughs\] I did look at the website...

### Audrey Tang:
Yeah, sure.

### David Chaum:
...but it wasn’t really obvious to me. Maybe I was looking in the wrong place.

### Audrey Tang:
Yeah, but that is there, too.

### David Chaum:
A question that comes to mind is, &quot;To what extent have other municipalities been paying attention to what you’re doing?&quot;

### Audrey Tang:
We’re actually not the first. We’re the central government, but Taipei City has been doing the i-Voting for quite some time already, since 2014.

### David Chaum:
Maybe that’s the site that I went to.

### Audrey Tang:
Yeah, you perhaps went to the i-Voting, because our PO Network is very new, it’s just one year, but i-Voting has been going on since 2014. For example, recent i-Voting, was that whether they allowed a zoo, the Taipei Zoo, to close for a month or something during summertime. That was a citizen proposal to give the animals some break or something.

> (laughter)

### Audrey Tang:
That was i-Voting and voted into existence by, again, petition platform to a certain point and the refinement and review and then into i-Voting. The final is by popular vote by Taipei citizens, that’s not the same.

### David Chaum:
Oh, it is.

### Audrey Tang:
Yeah.

### David Chaum:
When you say that that’s by full referendum?

### Audrey Tang:
It’s binding. It’s supposed to be full referendum, but actually, I don’t know how many offline ballot boxes they have, but it’s primarily through online voting, only people who participate online get to have a say. There’s no threshold, so just people who bothered to vote online.

### David Chaum:
It’s like a petition, but it is binding.

### Audrey Tang:
It is binding. It’s a binding petition, yeah. That’s Taipei City. Taichung City is now following the central government design in their local parts, as well. There’s about three cities at the moment that joined the platform that we’re using for e-petition.

> (pause)

### David Chaum:
That’s very interesting. Random-sample voting is a little more direct. You can see the differences. Talking about how you would use it as opposed to the mechanics largely, everyone would get to vote, let’s say in my vision of this, once every six months. The elections wouldn’t all be concurrent, they’d be various, but they’d be only a couple of weeks long, is the current example that I have been mentioning.

### David Chaum:
I think that’s something where people could be called on to make a single binary choice, have time to think about it, discuss it with their friends and family and so on, search it online, maybe reach out to experts or others and gather some specific information, and then cast their ballot.

### David Chaum:
This is very similar, as you may know, to the ancient Greek jury system. I understand there’s no jury system here in Taiwan currently.

### Audrey Tang:
The Judicial Reform Forum has just voted it into existence. We’re designing a jury system now. It will take effect, maybe, next year.

### David Chaum:
Oh, really?

### Audrey Tang:
Yeah.

### David Chaum:
That’s for...

### Audrey Tang:
For everything.

### David Chaum:
For everything?

### Audrey Tang:
Yeah, for everything. I think there’s some exceptions, like there’s a rolling rollout. Other than for things that should be protected in privacy by law, and I don’t know, there’s some parts, but in general, yes, it will be a general jury.

### David Chaum:
Wow, that’s quite a change. This has to do with criminal and civil...?

### Audrey Tang:
Cases, but I think it will start with the criminal cases with high penalties now.

### David Chaum:
As an option that the defendant has to...?

### Audrey Tang:
Yeah. At the moment, it is only in cause for the citizens and judges, the jury to consult with the three judges, and so there’s a judging panel, it’s a different design than the one that...

### David Chaum:
In the US.

### Audrey Tang:
...you’re used to in the US design.

### David Chaum:
The Greek one, there were no judges.

### Audrey Tang:
Exactly. We’re not there yet.

> (laughter)

### Audrey Tang:
Yeah, that’s right.

### Audrey Tang:
No, I think for the initial batch, which is I think criminal cases with penalty above a certain threshold, they will actually be making decisions together with the judges. The explicit detailed procedure is still being worked out, but that’s the National Judicial Reform’s consensus.

### David Chaum:
It’s not that the jurors come to their own conclusion.

### Audrey Tang:
No, the judge is part of the jury, I think.

### David Chaum:
Because according to the literature, juries can easily be manipulated by strong...

### Audrey Tang:
Judges.

### Audrey Tang:
It’s three judges, in any case.

### David Chaum:
Oh, you always have three judges.

### Audrey Tang:
I don’t actually know. They’ve run simulations and mock trials and so on for many, many years now in various different systems. The National Judicial Reform is mostly just selecting based on the experiment results. Yeah, it’s not for real, we don’t know what will happen if it’s for real.

### David Chaum:
That’s something. I’m very impressed. \[laughs\] A majority of the population is in favor or against this particular issue and it’s also the mechanics make it irrefutable.

### Audrey Tang:
Mm-hmm.

### David Chaum:
It’s a much stronger thing than the i-Vote system. You see there’s a big difference there...

### Audrey Tang:
Exactly.

### David Chaum:
...or any kind of petition. This is not a petition, it’s a vote.

### Audrey Tang:
The thing is that the i-Voting or whatever e-petition system, we can only bind the administration and we cannot ever bind the representation, the council or the legislative, exactly because of the property that you mentioned.

### Audrey Tang:
We can’t say that this population is more representative than the original voters who voted in the representative in the council. In the newer system you can, because it essentially carries the binding power of the full referendum without the cost of a full referendum.

### David Chaum:
That’s very clear. Thanks for pointing that out. That’s the basic essence of it. It doesn’t have the real deliberative, or this consultative, or problem-solving mechanism, like what you propose after the public decision, you could say that’s a disadvantage.

### David Chaum:
Of course, if your perspective is about security and a lack of the possibility for government to manipulate things, maybe the difference is between a system that can work even if you don’t trust the government anymore, versus a system that can work pretty well as long as everything’s copacetic in terms of government.

### David Chaum:
I think random-sample voting, as you point out, is a little bit stronger, but it’s much more durable.

### Audrey Tang:
It’s just like distributed ledger that’s a distributed relational database, right?

> (laughter)

### Audrey Tang:
I generally trust my SQL folks, but...

> (laughter)

### Audrey Tang:
Right. If stake is high enough then we can well imagine that this is an adversarial, but in general, everyday life we don’t actually do that, there’s a trade-off.

### David Chaum:
It’s a nice analogy, but I think this might be misunderstood slightly if you take it to mean that it’s really a difference of ease of manipulation. What I was trying to point out is that to me a really critical thing is the level of expectation that the public has about the power they have.

### Audrey Tang:
If citizens are used to it in their colleges, in their online and gaming guilds. Why not? \[laughs\] In their whatever, daily operation, if they’re just used to random-sample voting, then it builds the sovereignty...

### David Chaum:
Expectation.

### Audrey Tang:
...expectation of individuals and then they take this and demand that out of their government. I think that’s really grassroots and really the way to gain the legitimacy is just by using it more often and to not start with the Taipei City. The Taipei City, or the Central Election Committee at the moment really has plenty of trust actually...

> (laughter)

### Audrey Tang:
...so if they run a centralized database people trust that they will run a centralized database well, is what I’m saying.

### David Chaum:
I think what you infer from it is probably interesting. The way I think about it is that the random-sample voting allows a thousand flowers to bloom before the critical public actual vote of approving things and then that then is immutable, is like you say, binding, because it has in effect the majority vote behind it.

### David Chaum:
It’s also of a higher quality than a referendum initiative, in which is everyone is called upon to vote on 50, because what they do with it is the same as the i-Vote in California. Most people don’t vote all initiatives, or if they do, it’s random. They vote the ones they care about or know about. It’s i-Vote.

### David Chaum:
What random sample voting does is it says, this is really an important point, &quot;What would a sincere, informed electorate do? What would this set of citizens do if they were to vote sincerely?&quot; That’s a technical term in the voting world, they’re not trying to manipulate the election by voting more extremely to push...

### David Chaum:
If they voted and sincerely and they were well informed on that issue, this is what the whole population would do if they were to vote in that way. There’s never been a thing like that, of course. Interestingly, it scales with the complexity of society, which is a point that I make.

### David Chaum:
You can get down to some pretty specific questions and some pretty crisp language, that’s a strong feature of it. Yeah, because you’re really flexible on the input side, government agencies can make proposed language, lobbyists for corporate interests, different groups, candidates for office, or parties, what have you.

### David Chaum:
It doesn’t really matter, you want to encourage all that input. That’s where you would have, by the way, all of this clever group decision creative solution forming, brainstorming...There are books on how to make a group of people come to a way to solve a problem the best way, or whatever.

### David Chaum:
All of that stuff can be on the input side, because the best reasoned proposition will receive the popular support, because people go looking online and find this very compelling argument that says, &quot;You could stop the fisherman, or you could plant more fish, or you could do this, but actually, you get a better result if you just stop dumping chemicals into the harbor,&quot; or whatever it is.

### David Chaum:
Then that would win. That process cannot be manipulated by the fishermen’s union, unless not enough attention is being paid to the whole voting process, but since it’s all binding and a large scope you would assume this is prioritized

### David Chaum:
People would propose topic areas that...

### Audrey Tang:
It’s simple. That’s good.

### David Chaum:
There would be proposals for topic areas. Then within each topic area, there would be a ladder competition for the most succinct and clear binding statement to reflect an outcome for that topic.

### David Chaum:
Then, there would be a second ladder to select the winner of that. That way, each topic would get a crowdsource competitive incentive, whatever, competition to get a good statement, elevator pitch, or what...it’s actually binding rule. Then, those would be then compete against each other.

### David Chaum:
As well as individual votes, the outcome is the issue that the public thinks is the most important and the best actionable proposed legislation on that topic, or the top three such things.

### David Chaum:
We can actually divide up the voters in such a way that they’re totally independently and firmly chosen with each jury, if you will. There’s a jury, but no voter is asked to be in more than one jury. Every citizen, say, in fact, is in exactly one jury.

### Audrey Tang:
That answers my question, actually, my original question from way back.

### David Chaum:
Yeah, I know.

### Audrey Tang:
Where there are people who are not even participating. Basically, you have population who are part of this game and people who are not. The people who are not cannot for sure know that they are not in it, just because their luck is bad or they’re being excluded was my original question.

### David Chaum:
Yeah, the people are picked independently and uniformly at random. If only one jury were selected, then those selected would know that they were chosen properly, but everyone who wasn’t selected would also know that they weren’t chosen properly. \[laughs\]

### David Chaum:
The whole thing’s predicated on ultimately some testing that some people were really chosen. Can I switch gears for a minute to tell you a very interesting technical thing that turned out to be needed in order to actually make such a perfect partition and to make the system really work?

### David Chaum:
This is getting to that thing that’s really important we could talk about the security of remote voting.

### Audrey Tang:
Mm-hmm.

### David Chaum:
We worked on this a lot, and eventually, it occurred to me that what’s actually needed, as a key concept, is what we call, now, &quot;proof of decoy.&quot; A decoy ballot, you recognize, is a ballot issued by the election officials that is indistinguishable from what we call a real ballots, but is guaranteed never to be counted.

### David Chaum:
It’s always indistinguishable. You can vote it. You never find out that it’s a decoy. Any vote cast with it will not be counted, but it remains indistinguishable. That’s the notion of a decoy ballot. The reason we issue those is to in effect keep the price that a vote buyer will be willing to pay down...

### Audrey Tang:
People can volunteer to be a decoy.

### David Chaum:
Yeah, they can make money helping democracy, selling their fake votes to...It’s a beautiful thing.

### Audrey Tang:
After a few rounds, I imagine the price would drop.

### David Chaum:
People drive the price down. Yeah, but it depends on the issue. There may be some issues that some people think are really worth throwing money at and then they’ll try it again.

### Audrey Tang:
Do you hand out decoy ballots to anyone who’ll sign up?

### David Chaum:
In principle, I would like to have a system where there are just an unlimited amount of decoy ballots. However, it turns out that because of the mechanics, we have to fix the number of decoys at a certain point before starting the election.

### David Chaum:
There’s actually two ways that decoys can be issued. One is responsive to requests and the other is unsolicited. We can do both. You could also ask, &quot;Can someone get a multiplicity of these decoys -- greater than one?&quot; Yes, that’s also possible.

### David Chaum:
Then you could start to say, &quot;What if someone was selected at random to get a ballot,&quot; because everyone is in some scenarios.

### Audrey Tang:
But also...

### David Chaum:
Then they get this other ballot. How are they going to know which one to vote if they’re indistinguishable? That’s a problem.

### David Chaum:
Let me talk about the proof of decoy briefly and then we’ll come to how you would probably want to use these things. The proof of decoy is...Let’s say you were selected at random to receive a vote, a ballot, you received it. Maybe everyone gets one. Then you’ve asked for a decoy to sell. You get that -- also comes in the mail, let’s say.

### David Chaum:
Then we send you by an additional mail message or any other way, online or what have you...

### David Chaum:
The proof of decoy is additional information which is sent by another channel and it allows the voter to verify that the decoy is in fact a decoy and absolutely will not be counted. They could be absolutely certain of that on traditional information-theoretic statistically valid proof.

### David Chaum:
It’s easily verified. You don’t need a computer or a calculation. You can just look up and say, &quot;Oh yeah. They sent me this. I checked it on the online posting of the data that’s for the election, and it’s true. This is a decoy.&quot;

### David Chaum:
Of course, you’re never going to show the proof of decoy \[laughs\] to the person if you’re offering to sell these ballots. It helps you discriminate which one is the decoy.

### David Chaum:
Not everyone who gets a decoy has to check it, but that’s the good thing about voting. As a security mechanism, it’s pretty easy to show that even if a small percentage of people check, then that’s sufficient.

### David Chaum:
Here’s the funny twist about the proof of decoy. Another reason you need it is, not just to help people distinguish, but because the election officials could try to manipulate the outcome -- say, for instance, if they knew there was a lot of vote-buying money, let’s say, on one side of an issue.

### David Chaum:
Then they could send real ballots to the people requesting the decoys if election officials supported that monied side, and knowing that those would actually get voted with the money. The real voters would get the decoy ballots.

### David Chaum:
The proof of decoy solves that, because you can’t fool someone by sending them a real ballot when they think that they’ve received a decoy. You have to prove to them that it’s a decoy. That works out really neat. We actually have a construction for it. It’s really simply and perfect. That was a really nice theoretical breakthrough.

### David Chaum:
That just cleaned up all the clutter. How do we make sure that we really strictly only give each voter one vote, one question and all that? What if they get two? What if the name comes up twice, and they want decoys? All these issues.

### David Chaum:
Then we realized there’s a second order interesting effect if you have the proof of decoy, another thing that’s really interesting to notice, but maybe interesting I guess, if there were to be a serious vote buyer, in the modern world, they would probably be able to find out if you as a vote seller were likely to have already voted it their way. Then they wouldn’t be willing to buy it from you.

### David Chaum:
In the US, your party affiliation is sort of public record more or less. These days, \[laughs\] there are a lot of information floating around.

### David Chaum:
That’s a weird thing that you have the worst case assumption is that the vote buyer is more economical with their money or more parsimonious, whatever gets more bang for their buck, by figuring out who the voters who would be worth paying to flip their vote are and then only paying them.

### David Chaum:
But anyways, election official trying to manipulate election in that sophisticated environment would then have even no good target with the decoy system. That’s the proof of decoy and the decoy.

### Audrey Tang:
We’re not doing it remotely I think. We would have nothing to stop.

### David Chaum:
Not yet. I heard there are proposals to do it.

### Audrey Tang:
No, it’s for indigenous people to vote in a voting booth that’s not in their district, but it’s still voting booth voting.

### David Chaum:
I heard there were proposals to allow the million people on the mainland to vote electronically.

### Audrey Tang:
The nationalist party has been proposing this for decades. But it’s not likely to be passed.

### David Chaum:
But many countries have it as you know. You don’t have it here. That’s good.

### Audrey Tang:
We don’t. It would require a flip in the Parliament. But there’s a real need for people to vote outside the voting booth in their district. But it’s still voting booth voting. You just mark their ballot with this ballot is actually for that district. But that’s it.

### David Chaum:
Well put, but it’s also a very clean mechanism. Because you know some countries don’t allow for that, others say it has to be provisional, and others say you have to register no in that district.

### Audrey Tang:
In some countries, you can override it by walking to the walking booths at the very end. But we don’t have that here.

### David Chaum:
This was the thing I wanted to mention about remote voting. The decoys now perfected with the proof of decoy allows remote voting to be done securely. I think that’s a huge contribution that random-sample voting has made.

### David Chaum:
There’s a bunch of reasons why remote voting, I know you don’t have it but I would say, is preferable. You have physical intimidation and harm that’s done to people at voting places like in India where they blow up, burn down polling places and the baseball bats in New Jersey.

### David Chaum:
Then you have the police barricades so that you’re not part of the United States on the way for black people to go to the polling places. You have the fact that many polling places in LA don’t open mysteriously every election that happen to be not in Beverly Hills. You have the \[laughs\] fact that there aren’t enough voting machines or whatever in certain places.

### David Chaum:
There’s an old story you might not have heard. The Eastern part of the United States they love these big mechanical voting machines, lever machines. In a lever machine, everyone in the polling place can hear you vote, because the levers make a lot of noise.

### David Chaum:
Those are many times states where they have what they call &quot;straight party voting.&quot; If you don’t vote straight party, it becomes extraordinarily obvious to the people in the polling place.

### David Chaum:
Then you know about the schemes for like manipulating polling place voting where you get a blank ballot out of the polling place and then you give it to a voter and make them go in and vote that one once you’ve already filled it in and then bring you out another blank one. You just sit there doing that all day long. In Eastern Kentucky, where votes were sold routinely that’s one of the techniques which can be used.

### Audrey Tang:
Yeah, but we have witnesses for each party and the final tally we allow live streaming, it’s quite unlikely.

### David Chaum:
I’m not saying you...

### Audrey Tang:
During the tallying.

### David Chaum:
...that would be dangerous.

### Audrey Tang:
How is that? Like a certain corner of things and things like that, like positional?

### David Chaum:
Let’s talk about that for a minute, because if you do that, that’s wrong. That’s insanity.

### Audrey Tang:
We’re not allowing people to photograph the actual ballot itself. We’re letting people...

### Audrey Tang:
...photograph the tallying.

### David Chaum:
If anyone can capture electronic images of ballots, I just want to say, &quot;It’s very dangerous.&quot; I’m not trying to criticize what you’re doing.

### Audrey Tang:
What I’m saying is that...I’m just describing this thing. You see from your live-streaming point of view, mainly taking out ballots out of this, but it’s at a back view, but you photograph the witnesses looking at me looking at this.

### David Chaum:
Yeah, that’s perfect.

### Audrey Tang:
The actual position is not visible to you. If any witnesses say, &quot;This is miscounted,&quot; or whatever, then we look at that particular ballot.

### David Chaum:
Yeah, that works. There have been proposals to video or scan ballots...

### Audrey Tang:
We’re not doing that.

### David Chaum:
Good, because of the different ways that ovals can be filled and all that. Can I switch gears for a minute...

### Audrey Tang:
Yeah, sure.

### David Chaum:
...to the Scantegrity voting system, since we’re talking about polling places?

### Audrey Tang:
Sure.

### David Chaum:
Do you know about Scantegrity?

### Audrey Tang:
I think I read about it, but I don’t have any...

### David Chaum:
Can you just go to scantegrity.org, because I’m not online at the moment. There’s a video there.

### Audrey Tang:
I’ve read the...Yeah.

### David Chaum:
Yes, that’s the basic idea, the invisible ink and then you fill the oval and that code is developed and then we prove that the published codes...

### Audrey Tang:
I’m aware of this.

### David Chaum:
Oh, you are.

### Audrey Tang:
Yeah, but I haven’t seen this application anywhere in Taiwan yet.

### David Chaum:
You almost won’t see it anywhere in the world. It’s really a bit disappointing, because we found that it’s much less expensive than voting systems sold in the United States, because we use commercial off-the shelf office scanners instead of the special ones, which are more expensive.

### David Chaum:
Then we could just inkjet print the ballots. It’s a lot less expensive then the direct digital printing, which is used by the two companies in the United States, or something, that are allowed to print ballots.

### David Chaum:
We did surveys of the voters when they leave the polling place. Every voter was asked to fill out a 10-question questionnaire and every third voter exactly was asked an open-ended question by a professional interviewer. Like, &quot;What did you think of this voting? How did you like it? Can we get your comments on it?&quot;

### David Chaum:
Then those responses were recorded, or summarized, or whatever. Then, we also had some focus groups with election workers and all this stuff. We published these results, and basically people loved it.

### David Chaum:
Of course, the voter satisfaction is a factor in voter turnout, right? This might be something you want to consider. Yeah, and it’s actually really fun, because when you fill it with the yellow highlighter, it just turns black in half a second and you see it. It’s as if you filled that whole oval in perfectly accurately, but you only have to do a swipe.

### Audrey Tang:
Yeah.

### David Chaum:
You get a really neat result and people find that gratifying. Then the code is revealed. If you write those codes down, you can check later online that they’re posted. That’s like a FedEx tracking number for your vote. People found that really great, because it means that their vote was recorded as cast.

### David Chaum:
That’s something the survey showed distinctly people really appreciated. Very few people, of course, understood the proofs that we give of the verifiable proof that the tally does accurately reflect the votes that are encoded in those numbers.

### David Chaum:
Still, they were very happy with the overall system. I guess they were willing to take that second phase on faith somehow seeing at least their vote was...I don’t know exactly how each person thought about it, but the overall appreciation, satisfaction was much higher, and in fact, it costs nothing extra to do this. It’s actually cheaper. And, of course, its a pure overlay, so that there is no diminution in overall hand-counting options or traditional security.

### David Chaum:
We offered any jurisdiction that would want to start adopting it, we’d give them all the software for free and all updates in perpetuity for free, but no one signed up. I don’t know what’s with that. If you’re running polling place voting, there’s no excuse for not using it, because voters like it better and turnout is higher, it costs less, and its strictly speaking more secure.

### David Chaum:
Those elections we ran in Takoma Park, Maryland, 2009, 2011, the only publicly verifiable binding governmental regular elections that I know of even to date.

### Audrey Tang:
I see.

### David Chaum:
Unbelievable. Either an election is publicly verifiable or it isn’t. These are publicly verifiable. In other words, you would present this as openly, I don’t know what you’d call it, transparently verifiable. \[laughs\] Anybody with a laptop or a smartphone can go and see that all the posted data really does add up correctly and check it.

### David Chaum:
We have multiple people whove written their own independent auditing softwares and then the APIs are public and documented, people can write their own auditing software or they could run those auditing softwares from others.

### David Chaum:
Now, here’s like a technical hacker perspective on this, &quot;It’s a certain amount of work to check everything,&quot; but actually, what we never wrote, but there was a German guy that got halfway through it, but what you really ideally want is a smartphone app that while you’re looking to see that your own code is there, your vote is there...

### Audrey Tang:
It also performs some verification work.

### David Chaum:
...it does a little bit of auditing, but it chooses a random place to check. Then in aggregate the auditing would be done anyway by everyone.

### Audrey Tang:
That’s a very good idea.

### David Chaum:
We had a sketch for that. I know you can be very technical. Sometimes, you probably are not using those skills these days in your day job...

### Audrey Tang:
I actually am, but yes.

> (laughter)

### Audrey Tang:
I automate a lot of my administrative work.

### David Chaum:
Look at where these are really technical about how these systems work, the one thing you might have not have noticed too much is the only funny thing about it is that when you have a physical paper ballot, there’s a malfeasance where the vote codes could be swapped relative to the candidate, say.

### Audrey Tang:
\[laughs\] OK.

### David Chaum:
If I knew that a certain candidate was likely to win and I didn’t like that, I could criminally print ballots that switched those...You don’t want the candidate, in my opinion...Everyone knows that you should randomize the candidate names. If you have too long list, you can’t do that obviously. That’s why random-sample voting is all binary. You get rid of all the voting paradoxes.

### David Chaum:
In any event, you should randomly, or at least rotate. They can be alphabetical but it’s sequentially computed, they should have done...The codes are, you only see the code that you mark, and so there is this malfeasance. In Takoma Park, we did this thing where someone as according to Maryland law, you come in and you say, &quot;I’m here to audit&quot;.

### David Chaum:
You act, of course, just like a voter and you just come in get your thing with the rest of the voters, but then once you get your ballot from them, you say, &quot;I am here to audit and I am going to mark every question and then under Maryland law I can photograph this ballot and give me another one so I can go vote.&quot;

### David Chaum:
That would then, with some probability detect...Then we saw that it was wrong, because we could open, we didn’t, you could open that particular ballot then and there but probably we didn’t, we opened it at the end. You’ll understand later why we did it that way, but probably you wouldn’t have to.

### David Chaum:
That’s a technicality and if you read the random-sample voting paper you’ll see that we use what we call, and it’s confusing, but it is confusing because it confused a lot of people, double ballots. If you look at that last...

### Audrey Tang:
Yeah, I was just reading that picture.

### David Chaum:
I’d really love it if you did understand that picture, and I want...I was hoping to explain it to you, but you see how you have a double-ballot there. It’s like it would be ballot say 100, and there’d be two forms of it.

### David Chaum:
The one that you see on the left there, the 100a, and the one...No. Down on the left. The extreme left. You see, that’s a printed form. That white thing. You see how there’s two versions of the ballot. The idea is it says, &quot;OK, voter, you choose one of these at random to vote, and the other one, you keep it and check it. You can audit it.&quot;

### David Chaum:
That way, that’s pretty clear that if there’s what we call print fraud, then there’s a 50/50 chance that instance of it will be detectable by a voter having this half that doesn’t reflect how they voted at all. It’s hard evidence of malfeasance.

### David Chaum:
That’s how we do it, but in a voter sense, it’s a little weird to get two. We did it where you put one on one side, one on the other. It’s livable.

### Audrey Tang:
It’s good enough.

### David Chaum:
It’s very clear. It’s not such a big problem, but there’s a finesse where you can get rid of that. I’ll just mention it to you briefly if it’s not shown here, or should we talk about how this system works?

### Audrey Tang:
It’s good. How do we get rid of the double-ballot?

### David Chaum:
When you go to vote the ballot online as we call it, electronic bulletin-board, it’s pretty sophisticated the way we’ve done it in practice in the election.

### David Chaum:
Here’s a physical analogy for how you could it which is extremely close to the way it works. It’s essentially the same thing. Suppose let’s say you and I were going to run an election, and there were no computers or anything, and always plan to use a new computers or cryptography.

### David Chaum:
What we would is we would write those numbers there that are shown. Those are lists of numbers. You see that. There’s a bit of text in them. There’s ellipses because for every ballot, there’s a row. There’s 1,000 ballots so it’d be 1,000 rows, but you see, there’s also planes in there.

### David Chaum:
It says there are 256 such tables. Do you see those indices? Yes. It’s actually like 256 rows. These are generated numbers when we use computers, but spreadsheets which are...I think it’s, what is it, eight columns of these short text strings.

### David Chaum:
We would come in here at night, and write these on the wall with a marker, and then we’d cover each column with a piece of black tape. You and I, we did that all by flipping our own coins, or whatever. We’d just make this stuff up.

### David Chaum:
Then for the consistencies, the algorithm for creating that is describing there basically all the stable are the same except they’re subject to random row permutations. The rows are reordered, but they’re kept together.

### David Chaum:
There’s another thing which is done which is those pairs, the columns at the end, the yellow and the blue pairs, the sum of adjacent entries in the yellow pair is the same for all the rows before the permutation.

### David Chaum:
There’s a lot of difference, what do you call it, separate group ways to add. You can have two numbers that have the same sum. There’s the full number. Those pairs, we randomize those pairs by like panning around a numbered one, to drag it from the other, and then we permute all the rows for each table.

### David Chaum:
We write all these up on the wall, and then we put the black tape down each column, and then we invite the voters in, and say, &quot;You’ll stay in here for any election. Watch that no one comes in, and changes any numbers under the tape.&quot;

### David Chaum:
Then we give out the ballots which we’ve written up, and they vote them, and then basically you just, &quot;Come in, and write your vote codes on the wall.&quot; They all come in, they write their vote codes knowing that their ballot secrecy is protected. Then they sit there while we flip coins.

### David Chaum:
The coins tell us which tape to pull off. Now if you look at this chart, it’s very exact about which tape to pull off. Let me try that. Indicate that to you. You see these bars below here, those lines are...Let’s say this line here means that there’s the first stage. Can we just scroll up a little bit?

### Audrey Tang:
Sure.

### David Chaum:
These are the nine stages of the election. After the voters log their ballots on the voter bulletin board, and the election officials then finally...I lied. We have to say, &quot;Guys leave the room now, or we’ve got this other room where we’re going to write the blue columns. We’re going to write those, and then you guys can come in there, too.&quot;

### David Chaum:
It’s actually interesting. Then, we do this division by the coin flipping of all of the spreadsheets into five categories. There’s like 50 spreadsheets in each category. We choose which one go...That’s by coin flips, we could not have known that in advance.

### David Chaum:
Depending on which of the five categories of this is in, we have to open certain tape. If it’s in the first category, then we have to open these two tapes. We reveal those three columns. If it’s in the second category, then we reveal this column, and this column, and I guess in this column. You have to do it exactly according to this.

### David Chaum:
We can do this in stages. There’s a preliminary audit which just locks in the recording of the ballots, and the printing fraud that we talked about, and there’s a second stage where we actually reveal the votes. It’s like reel elections because when we run reelections, there was like an hour delay before we reveal the outcome, but we could do some checking then.

### David Chaum:
Then there’s this thing they sometimes call canvassing, two weeks after the vote to check everything. That’s this part here. Or you can do it all at once or in these three conventional stages.

### David Chaum:
In that final step, you would say, hey, you finally can find out the third summand. That’s the 222. Now, we know to go to the house of the voter number, 777, and then we can say, &quot;Hey, did you in fact get ballot number 100?&quot;

### David Chaum:
That’s important because if number of the decoys could be, we don’t want to give them to wrong people. &quot;Did you get ballot number 100? Did you vote it?&quot; &quot;Yes.&quot; &quot;OK. Good. Then we’re done with that audit.&quot; Does that make sense?

### Audrey Tang:
Yes.

### David Chaum:
The little bit of tricky business in here, you see the reason we break the voter number into one of the summands is because we want that to be random after this, and this stuff is committed.

### David Chaum:
Yellow is committed before the purple choice. That’s the coin flip thing. But the green, these yellows and green, you see how they’re mirrors of each other? Some of the yellows have the decoy. The decoy slots were built in advance.

### David Chaum:
Before the purple, I think I have to accept the request for decoy. Because then I know what numbers to put in the green when I publish it. I say, &quot;Oh, you wanted to be a decoy voter? Great. I’ll write you in in the green.&quot;

### David Chaum:
No one will ever know that you’re a decoy voter. That I didn’t include you in advance of the coin flip, because I never open these. I let people check. You see, this one...

### David Chaum:
This one corresponds to that one. Here, you see this one is equal to that one except for the ones marked decoy, and that one corresponds to that one in this case here. These are a little bit folded together to make it more efficient, but basically, we audit...

### David Chaum:
For some of the tables that this is equal to this, and for other tables that this is equal to this. That never reveals these sums until...That way, we know these are copies of each other except for the roads that are marked decoy or nothing is known about them.

### David Chaum:
With the tables that are open where you can see the votes, those are different tables, we never see what the summands are in those open tables. Do you see what I’m saying?

### Audrey Tang:
Yes.

### David Chaum:
It’s always kind of...

### Audrey Tang:
What does it mean here, to have the double ballot versus the full double ballot?

### David Chaum:
It’s just that I didn’t...I think in this example, I showed all four rows for this example, double-ballot 100, is that correct? I showed all the cases that, but for the other one, I didn’t want to make it the big illustration...

### Audrey Tang:
It means that there’s two more like this?

### David Chaum:
There are two more. Now of course, they wouldn’t all be in this canonical order. I show that as an example, you can do that.

### Audrey Tang:
This is an illustration to say that there’s more omissions?

### David Chaum:
Yeah, and the fact that these particular ones are all miraculously in order is for convenience in illustration, as are these repeated digits \[laughs\] and all these other tricks to make it a little easier to understand.

### Audrey Tang:
Right. I’m making a design comment where have double ballots shown here or something. It would make it more clear.

### David Chaum:
Thank you. I appreciate that enormously. I’m going to do that.

### Audrey Tang:
I think I got the flow and the intuition, but this is great. I think it’s high-school understandable.

### David Chaum:
In fact the vote codes are actually much longer numbers, but the voter bulletin boards, they only have some digits of the hash of the vote codes so that when you type it in, they could recognize that it’s valid.

### David Chaum:
Actually, there’s 10,000 codes that would yield that same hash that they’ve stored. The chance that they could guess what the valid vote code is insignificant. They could check, and then, they’d give you the standard user feedback, but they can’t falsify them. Of course, they can’t swap them knowing one.

### David Chaum:
It gives no clue about the others.

> (pause)

### Audrey Tang:
No, that’s great. I think I got it. Thank you for the instructions.

### David Chaum:
Thank you for for taking the time to understand.

### Audrey Tang:
That’s awesome.

### David Chaum:
It’s just a great thing that you can make something that’s understandable that has that level of security. I want to just mention one other security trick we do. You might say, &quot;Well, that’s great, but the election officials have all these secrets that they use to generate this, and that might be...compromise privacy or something.&quot;

### David Chaum:
The way we did it in Takoma Park, Maryland...A cryptographer would just approach this typically and say, &quot;Well, we’ll use a lot of public key signatures and multiparty computation,&quot; actually something I helped invent. &quot;There’ll be boatloads of computing. Then, every election official will have their own secure computer and they’ll exchange all these encrypted messages.&quot;

### David Chaum:
But no election official’s today \[laughs\] going to run their own secure computer, and if they did they might not do a good job. You can’t use all that fancy public key stuff, because the public’s not going to understand it.

### David Chaum:
What we did to make it practical -- the election officials were happy with it and support what we need. We have a computer that we boot up from a thumb drive that has the bootable image on it, and it boots up.

### David Chaum:
The election officials put those in, and they boot up this virgin desktop machine. Then they each type in their passphrase, which is a cryptographic key-length string, and then it starts up and it runs step one.

### David Chaum:
That’s why it’s all divided into those steps. It recreates the secret state from that. It gets the randomness from those keys. Then it does the one state. Then it posts that step nine. Then they witness its complete erasure. They go home happily, but they save this enscripted state on their thumb drives.

### David Chaum:
Next time they come together, we call those &quot;meetings,&quot; they put in the thumb drive and the passcodes. They’re off the races again to do the next step, which is generate the PDF ballots. Then they sit there while they print those out. It’s neat.

### David Chaum:
There is no computer that always has secrets in it. It’s only reconstructed during those meetings. Then the bulletin boards don’t know enough to do any harm. They can in fact be run by different interested parties. It’s pretty robust.

### Audrey Tang:
Ideally, one per party.

### David Chaum:
Yeah, maybe other people would do it just to prevent DDOS because that’s of the unsolvable problems according to the anti-online voting people. &quot;Oh, well, wouldn’t want DDOS. What if the election were delayed? What if the whole rule were delayed?&quot;

### Audrey Tang:
First, you set up quantum lines.

> (laughter)

### David Chaum:
The more you have...That’s the beautiful thing. It’s not like election server that has the secrets. It could be penetrated. It’s online. No, there’s just a bunch of these things. They collect it. It gets posted. It’s pretty complete and pretty tight. It could be used for a lot of different things.

### David Chaum:
You know, it’s in the article, the way the ancient Greek juries worked. I didn’t realize it when I created this, but it turned out I basically recreated the exact thing they had. Did you know that when the...Jurors during the Classical Era had to be of a certain minimum age. It was like 33. Did you know that?

### Audrey Tang:
Mm.

### David Chaum:
Oh. They would show up at the jury place. The archon or however you pronounce that, the armed guy there running the thing, would pour a jar of or urn of marbles. They were mixed alternatively black and white. They would go down this slot. Do you know about that?

### Audrey Tang:
The kleroterion.

### David Chaum:
The rows, the IV parts, and the tribes, the districts that were stripes, the whole thing. Then the jurors would go in. They weren’t allowed to talk to each other. The two contestants would argue it out a little bit. Then the jury would leave. They’d have the disk.

### Audrey Tang:
Pinakia.

### David Chaum:
I’m glad you know about this. They’d go out with those disks. They weren’t allowed to talk to each other. Some of them had holes, some not. They put their their arms in, and they released them. It’s almost as secure as pope elections for the last 600 years or so. I try to make this argument...It’s shocking how much the same it is that what I proposed.

### David Chaum:
Also, the jury sizes are pretty large compared to...The minimum was I think 300. It’s very much like RSV. Then the interesting thing...

> (pause)

### David Chaum:
Letting a thousand flowers bloom, like liquid democracy, all these deliberation forums, expert lobbying, all this junk as input but then using the RSV as the final imprimatur that this is violated by the general public in view of all this analysis and argument that’s been placed.

### David Chaum:
The only good way to do it that I know of and works really neat because it’s super definitive. When I was in electronic money, for a photoshoot, they took me to the US Mint in DC, I think. The Bureau of Engraving and Printing, where they print the bank notes.

### David Chaum:
They took a photo of me leaning on a palette full over $100 bills. It was pretty cool and everything. The interesting thing about that place is it’s a huge facility. It’s a big industrial place, they’re printing bank notes.

### David Chaum:
They’ve got all these machines and everything, but then there’s this one room, it’s not really much bigger than this room. It has a taller ceiling because there’s a catwalk around where you can watch it.

### David Chaum:
There’s basically one machine in there that puts the seal on the bank notes. Every single bank note gets that little seal with the serial number and there’s just this one machine that does it. It’s not even sheet by sheet. I think it’s part sheet by part sheet.

### David Chaum:
Then they get sliced up and bundled and they mail them -- believe it, it’s the weirdest thing -- they mail them by registered mail to the banks.

### David Chaum:
That final stamp of approval. Really, no one cares that much about all the rest of the paper in that plant. If they didn’t do it that way, it wouldn’t work. It wouldn’t be anywhere near as secure as it is.

### David Chaum:
It’d be way too expensive. It just wouldn’t work. That’s like this. You want to allow as much and as flexible and really neat brainstorming and Post-Its and everything. If some other guys have a better idea and maybe they are proactive or not, who cares? It’s all good.

### David Chaum:
The tournaments don’t have to use the full-out sample size in the lower rungs because they could be a slightly larger air probability there, but when you get to the top, it’s a way to really get high probability, the best few...

### David Chaum:
If you look at tournament design, it’s a thing to make one that’ll give you top 10 for sure, but it’s pretty easy to give you the top 10 probably and then you don’t really have to pay too much attention.

### David Chaum:
The tournament design people in sports, they really worry that there would be an error and the absolute best team wouldn’t win because they got eliminated. Second best wouldn’t win, that’s the thing, and that kind of thing, wouldn’t get the second best title.

### David Chaum:
You can use the tournament-style thing to make sure that the stuff that gets put to a real vote -- and people have to pay the most attention to -- is the high priority and reflects all the best input and then you decide whether you agree with it or not.

### David Chaum:
It’s kind of pretty close to the Greek jury system except they didn’t really use it to create legislation. They used it to, in effect, approve legislation. Anyone who proposed legislation that someone else thought...Sue them. Any citizen could sue a legislator -- sorry, I have to say this -- for even proposing legislation, which the citizen deemed to be unconstitutional. Did you know that?

### Audrey Tang:
Yeah, sure.

### David Chaum:
Then the two would argue. If the jury found that it was, in fact, unconstitutional, then the two would propose a punishment.

### David Chaum:
You could be put to death as a volunteer legislator, for proposing a law that was unconstitutional. That shows, to me, and you can argue, that they really did run their whole democracy that way. That’s why I call random-sample voting a proven way to run a group of citizens, a democracy.

### David Chaum:
It’s actually the only way so that in 140 years, they created all the elements of Western civilization really, from the musical scale to philosophy and medicine and particle physics and the rest of it. They had the first phonetic alphabet. That’s my contention anyway.

### David Chaum:
They add the vowels. That’s the Internet of those days. They basically empowered citizens to be able to read and write and then they control the whole thing, in effect through RSV.

### David Chaum:
It was a little bit, would you call it after-the-fact kind of control? They let legislators do stuff, but in case it violated the constitution, there was this after-the-fact way to prosecute them or probably invalidate the laws.

### David Chaum:
They did it by bringing every question down to a binary vote. Do you know this guy, Hannu Nurmi?

### Audrey Tang:
No.

### David Chaum:
He’s a Finnish, emeritus professor of electoral systems. I was once in a conference of about 25 people from around the world that were the top people in the world of electoral systems design and it was in Erchie Italy, in Sicily, in this little stone village.

### David Chaum:
For a whole week, we had stuff in churches and we stayed at the monastery. Anyways, I can tell you that the electoral rule expert or whatever, expert in electoral rules is Hannu Nurmi. Everyone there deferred to him. He was the guy. He had a bibliography of several thousand papers on electoral rules and he gave the survey $200... \[laughs\]

### David Chaum:
He backs random-sample voting, by the way. He wrote this beautiful monograph called &quot;Electoral Paradoxes.&quot; You’ll see him on our RSV website.

### David Chaum:
When you read that it’s fascinating. It was like a total validation of RSV to me, because I only read it afterwards. Every chapter talks about a different electoral paradox like Arrow’s theorem. There’s all these different things. More generally they’re called &quot;aggregation paradoxes.&quot;

### David Chaum:
At the end of each chapter, there’s typically a few paragraphs about what you could do if you wanted to get rid of that paradox. It always comes down to, &quot;Well, if there were only binary contests.&quot; It’s the same thing.

### Audrey Tang:
The tournament you proposed as you said before one particular paradox, the Condorcet paradox, like the A over B over C over A utility, the aggregate utility thing, that will surface a different winner based on how the initial pairing of the tournament is done. If the group has no Condorcet winner as A, B, C as proposals then anyone is as good as the other.

### Audrey Tang:
It’s not a real attack, I’m just commenting that it doesn’t magically solve because of binary voting.

### David Chaum:
It doesn’t solve it, it just moderates it. Thanks for keeping me honest here. I normally would say that, but I was a little...One way that it talks about is that you have to, when issues are contingent on each other, you have to serialize the decisions on them.

### David Chaum:
You can’t, whatever, you know the examples that come up. You can’t decide what kind of plants to plant in a park if you haven’t decided yet to have parks.

### Audrey Tang:
That’s right.

### David Chaum:
Like that sort of stuff.

### Audrey Tang:
Past dependence.

### David Chaum:
Let me ramble, if you don’t mind, just for a minute or two about some of the cool things you can do when you have really inexpensive elections, 1,000, 10,000 times cheaper.

### David Chaum:
You can have rolling elections. You can always be voting on a certain issue. Like the prime minister, &quot;Do we still think he’s doing what he said he was going to do when he ran for office?&quot; Or whatever.

### David Chaum:
As soon as the public says, &quot;Hmm, he cheated us. He lied. He’s not really going to do what he said he’s going to do,&quot; and then we’re going to keep voting that way, then the secession rules kick in and everyone moves forward.

### David Chaum:
Instead of wasting a good fraction of the government’s time with these periodic lame duck sessions and the campaigning periods, which is raised to a ridiculous level in the US, you just say, &quot;Screw that. Why vote a person in for four years if typically they don’t do what they say they were going to do anyway?&quot; \[laughs\] Then, they waste a whole year at the end voting and campaigning for the next.

### David Chaum:
Screw it. We’ll just keep voting on them because that costs us nothing. There’s room for thousands of elections concurrently, we just keep voting to make sure that we think that person’s doing a reasonably good, I’m not saying make it a hair trigger thing, but at a certain point, it’s like, &quot;This is really not happening,&quot; and just secession and move people along.

### David Chaum:
Probably they won’t start doing the wrong thing and that’ll be an impetus to make it. I don’t know how that applies to political parties in a multiparty system as they get elected and they negotiate themselves about how they want to form the government, which totally betrays the same thing, what people voted for in the first place. I don’t know how it relates to that.

### David Chaum:
I personally am not a big fan of celebrity and the main way that the public generally thinks about voting as a way to choose these leaders, because it extends this representative democracy thing, which is so broken in my opinion.

### Audrey Tang:
I’d rather vote policies than people.

### David Chaum:
It was worth coming here just to hear you say that.

### Audrey Tang:
Sure.

### David Chaum:
Really. From a pure security guy’s point of view, that’s clear.

### Audrey Tang:
Yeah, because policies are generally reversible. If you make a bad choice in a Condorcet paradox, you can usually reverse it or amend it somehow, but people it’s very difficult.

### David Chaum:
It’s also, there’s that bit and the basic thing is that it’s effective. Another aspect of this is that the granularity of voting for leaders is so blunt compared to voting on issues. What’s actually happened, I’m trying to make a point that you might find it beneficial if you read the introductory material in there, I try to suggest that the complexity of issues now has scaled beyond what elected officials can...

### David Chaum:
Federal legislators don’t have time, obviously, they don’t have time to read all the legislation so that the complexity has scaled beyond the 5, 10 1,000 people that vote for a representative idea where you might have actually known...That was the original concept, but that doesn’t work anymore.

### David Chaum:
Also, you’re right, then the transparency, which you were a fan of, has revealed this, made this really obvious to people.

### Audrey Tang:
Without the transparency, people don’t even know that this is being talked about. Even if people do know and even if people do have a lot of ways to organize among themselves to have a co-intelligence or collective intelligence, with the current voting regime because the upload bandwidth is so small, it’s impossible to upload the collective intelligence into a...

### David Chaum:
Just from an information theory point of view.

### Audrey Tang:
Exactly.

### David Chaum:
Yeah, it’s such a limited channel, one bit. \[laughs\]

### Audrey Tang:
Just three bits or two bits, per two years. Even if we have the best answer, we can’t upload it.

### David Chaum:
Then, sorry to have to say this, but the bad guys get another bite at the apple, because even if that system even with such a restricted bandwidth uplink were to work, then they can work their magic on the representatives.

### David Chaum:
Why was Obama not who he said he was? Was he a rotten guy? How many rotten guys do you know who would volunteer to be, what did he call it, he called himself a community organizer, his job title? Basically, he worked in very poor districts in Chicago trying to help poor people.

### David Chaum:
Why would someone like that once they got elected all of a sudden support and actually take all the Bush policies and make them more &quot;Bushian?&quot; I don’t think it was from his own conscience and free will.

### Audrey Tang:
You don’t think it was predetermined.

### David Chaum:
Most people are mystified, &quot;Why do they lie to us? Why did even a good guy like that...?&quot;

### David Chaum:
When Swiss meet people they haven’t known before, like random meetings of people at cafes or on buses, or whatever, they are inclined to have debates about issues, because the people that have a responsibility to figure these things out as opposed to positioning themselves and arguing and quarreling. Newspaper readership, when they used to have newspapers, there were much better and more newspapers in Switzerland than anywhere else.

### Audrey Tang:
That’s right.

### David Chaum:
It creates a whole different culture when you have even the little bit of direct democracy that they have. It’s scalable both in the complexity and size. It scales nicely with the size, because the size is the more votes you can have without burning up too much bandwidth of people, it’s a beautiful thing. Already the size, the numbers worked out well. I’ll tell you another thing.

### Audrey Tang:
I may have to go to dinner shortly.

### Audrey Tang:
Global Challenge?

### David Chaum:
Exactly. I submitted something to them.

### Audrey Tang:
Oh, you did?

### David Chaum:
I did. Here’s the interesting thing. I don’t know if I’m going to win or anything. I didn’t hear anything, but I don’t care. I thought, &quot;That’s interesting. That’s a problem. I’ll just see how random-sample voting might be used to do something like that.&quot;

### David Chaum:
It didn’t take me long to spin up a whole scheme that really when you go against their eight criteria, the questions they had and all, worked perfectly. It’s like this, &quot;We can do global votes now, because it’s so cheap.&quot; \[laughs\] Imagine that.

### David Chaum:
We could have a global contest to find out the highest priority issues for the global population. That’s nice to know. &quot;Well stated,&quot; as I said. Then, we let people submit proposals for independent entities that will try to address those issues separately.

### Audrey Tang:
Taiwan’s new Referendum Act is in fact designed for such a purpose. We have a new Referendum Act that dramatically lowered the threshold for petition. It’s now just 2,000 people.

### David Chaum:
Really?

### Audrey Tang:
Yeah. It’s Swiss style with a very long period between the start of the petition to being part of the next vote. The binding power is one of the highest in the world. It binds the Parliament. It binds, aside from the name of the country and the territory of the country, it binds anything that’s not a constitutional violation, it’s a really high binding power.

### Audrey Tang:
At the end of this year, we’re going to see many referendum things, topics that are highly political in nature and are in fact designed to build these comments that people can add in, and eventually refine and if it passes with a very high percentage, it’s nation building. Let’s put it this way.

### Audrey Tang:
That’s Taiwan’s. We copied many things. E-petition from the US and UK, and now the Referendum Act from the Swiss. It’s happening. It’s going to be electronic next year. This year, we didn’t get the electronic system up. The electronic part is all up to the signature, counter-signature part. The actual voting is still in the ballot in the voting booth.

### David Chaum:
That’s awesome. I’ve studied initiative processes around the world. I know that there’s usually a threshold where you have to submit it at a police station and this and all that and the period you have to get them, and so on.

### David Chaum:
Interestingly, if you read the random-sample voting paper, you’ll see that random-sample voting would be a much better way to validate a petition as non spam...

### Audrey Tang:
Exactly.

### David Chaum:
...than signatures, which are more or less a joke. Be careful, you lower that threshold too much, you’re going to get a lot of rubbish and the whole thing’s going to be discredited. You have to be a bit...

### Audrey Tang:
That’s right.

### David Chaum:
It’s not just the...The random-sample voting does exactly what this signature thing should...

### Audrey Tang:
I do agree.

### David Chaum:
...the election, I’m just talking about whether the question should be put on the ballot.

### Audrey Tang:
It’s the best of both worlds, right? It has the same proof-carrying power as a full referendum with mandatory turnout, but it’s at the expense of a low threshold petition.

### David Chaum:
You’re going to lower the expense. \[laughs\]

### Audrey Tang:
Even lower if you do it right.

### David Chaum:
Thanks for recognizing that. That’s a nice use of random-sample voting to get it going. Don’t forget, the petition process, one other thing, it doesn’t scale to the set of issues that random-sample voting would allow.

### David Chaum:
Don’t forget, also, it’s not necessarily a good thing that everyone vote on something, because that limits the number of things, but it also means that press, media, propaganda, whatever can be used to influence those votes, as we’ve seen.

### David Chaum:
These plebiscites have not gone well. It’s not more democracy of that &quot;Everyone has to vote on only one thing,&quot; nature which has proven to be a bad thing. Random-sample voting obviates that by making it so that it becomes almost infeasible to try to manipulate all opinions on many issues all at once by means that would not succumb to real study and investigation by the voter.

### David Chaum:
You have to really put forward good arguments against a thing, because people...

### Audrey Tang:
Which is what we want, if people want to thwart it this way, more powers. Yeah.

### David Chaum:
Say again.

### Audrey Tang:
If people want to thwart the voting against existing options by proposing better options, that’s what we want.

> (pause)

### David Chaum:
Like if you look at the Brexit thing, it was a single question, there was a whole run up to it. It was so easy for the media to manipulate it, the Facebook people, all this stuff, you could target it and overly influence the outcome. Whereas if you...

### Audrey Tang:
Yeah.

### David Chaum:
I’m sorry. I didn’t quite get the way you...

### Audrey Tang:
What you’re saying basically is a one-bit upload from the collective by extending...

### David Chaum:
Yeah, or with a block of time. That one bit per year is a dangerous thing...

### Audrey Tang:
By increasing the...

### David Chaum:
...because actually it’s even less secure than having a higher bandwidth, because then you can’t manipulate it in the process. That’s funny, yeah.

### Audrey Tang:
Is what I’m saying. Whether through a tournament, whether through pair wise, whether through...

### David Chaum:
If you think of information theoretically, yeah, you’ve got this one bit, it’s maybe really easy to influence that one bit in one direction by throwing everything at it. Whereas if you have a 1,000 bits coming up, you can’t really effectively...You can think of it too as a channel of information theoretically of the propaganda mechanism that you’re not going to have enough bandwidth in that channel.

### Audrey Tang:
Also, it makes the society much more pluralistic, because if you have only one or two dividing issues it’s very easy to have camps or tribes...

### David Chaum:
That’s an excellent point.

### Audrey Tang:
...of being in green or red or blue, or whatever.

### David Chaum:
I hear you.

### Audrey Tang:
Even if it’s just 10 bits, then it’s a 10-dimensional space and in 10-dimensional space, any two points are very far away anyway, it’s impossible to form tribes or identities around.

### David Chaum:
That’s right. People can more meaningfully be engaged in the one they are selected for and actually be more thoughtful.

### Audrey Tang:
That’s the main observation.

### David Chaum:
That’s really well put. Yeah, cheaper elections that are at least as secure, are a really good thing.

### Audrey Tang:
Yeah.

### David Chaum:
You’re expecting the elections, you’ve got problems.

### Audrey Tang:
Yeah, it stinks.

### David Chaum:
You...

### Audrey Tang:
Yes?

### David Chaum:
...I’ve been waiting for like years to talk to someone like you \[laughs\] about something like this. I really appreciate it. It was fabulous!!!

