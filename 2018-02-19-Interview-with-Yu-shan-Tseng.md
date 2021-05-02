# 2018-02-19 Interview with Yu-shan Tseng

### Yu-shan Tseng:
I thank you for being willing to be interviewed by me. I just had a talk with Andres. He found that with the use of algorithm in the public participation, it’s quite advanced and quite new in digital geography. He wants to understand a little bit more, and I think that’s probably one of... maybe it has potential that I can write a chapter around it. There are loads of debate about whether algorithm or machine learning, this kind of technique, has its own agency in making decisions or how do they participate or collaborate with human actors in public-participation process.

### Yu-shan Tseng:
I think with the use of pol.is is somehow very interesting and experimental. We’re from a more geography background, so we both have some doubts around the algorithm. We would want to un-black box, to understand it. I think the knowledge could be shared by other researchers so that in the future maybe then more discourses or discussion can be established. Thank you very much.

### Audrey Tang:
Certainly, my pleasure. Can you see my screen?

### Yu-shan Tseng:
Let me see. Yeah. I can see you.

### Audrey Tang:
I’m supposedly sharing my screen, great.

### Audrey Tang:
The big question here is, as you said, the space itself behaves like an agent in a discussion.

### Audrey Tang:
When we say we use pol.is to automate away a facilitator’s job, we mean mostly that it does things that a human will necessarily do if we announced the methods beforehand and in a sense that it’s predictable or explainable, as the jargon currently says.

### Audrey Tang:
It is not strictly speaking an artificial intelligence in a sense of deep learning but rather as in really handy automation, which is supposedly easy to explain. We can, of course, demonstrate it by having me explain it to you here.

> (laughter)

### Audrey Tang:
It is not deep learning. As you said, it’s a marketing choice that Colin and friends call it AI-powered conversations, but that’s a separate conversation, between you and Colin preferably. Let’s get to your questions.

### Yu-shan Tseng:
My first question is I have some thoughts about the clustering. I’m not so sure if it’s clustering algorithm. According to the first conversation that we had, you explained how you choose the most representative comment within one cluster or across different clusters. I don’t know how do you break it down into clusters.

### Audrey Tang:
As you can see here, at the polisMath repository, there is very simply to say a maximum number of clusters, which is five.

### Yu-shan Tseng:
Right.

### Audrey Tang:
The idea, the intuition being it is a k-means algorithm, with k being anywhere from one to five. It recalculates the k value, which is the number of clusters, every time a new vote or a new comment comes in.

### Audrey Tang:
It doesn’t suddenly change the cluster number, for UI reasons. There is a buffer. For example, there is three groups at the beginning. After a while, the system thinks it’s better to have four groups, but it will not change three to four until it’s consistently four times four. That is to say, after four actions, the ideal group number remains four. It will then change.

### Audrey Tang:
There is a buffer. If, after two or three votes, the system think it’s better to go back to three, then the user doesn’t see it suddenly splitting and suddenly joining. It is, I think, mostly a user experience thing.

### Audrey Tang:
How does it think whether three is better or four is better? It is a standard algorithm to choose the best k. It use an idea called silhouette. The silhouette value, here it is a value from -1 to 1 to determine whether a group is a good fit -- that is to say, whether the points in a certain group or a certain cluster actually belong to that cluster -- by calculating the distance between them. It is a very standard algorithm.

### Audrey Tang:
If you check the Wikipedia article on determining the number of clusters in a set, I think it uses the standard silhouette method to try to partition it into two, three, four, or five groups, and then see whether any of these k values yields a better silhouette number for all the groups involved. It chooses the one that’s best. It is quite standard, statistics speaking.

### Yu-shan Tseng:
Are there any particular reason that you choose k-means algorithm and the associated method?

### Audrey Tang:
First, I didn’t code the math part. We can simply say it is mostly Christopher’s decisions. To have an in-depth discussion of which methods did Christopher evaluate, you’ll have to interview Christopher instead.

### Audrey Tang:
Personally, I find the k-means and silhouette method easy to explain. It’s the main attraction to me, but, because I didn’t write this code, I don’t really have any intuition on whether there is an even more explainable method that’s around.

### Yu-shan Tseng:
Perhaps, if it’s possible, I would like to also interview Christopher or Colin in the follow-up.

### Audrey Tang:
Yes, certainly, on both the marketing and mathematics departments.

### Yu-shan Tseng:
Thank you. I’ve checked Wikipedia, and they say normally clustering algorithm is a set of loads algorithms. When you say you use k-means algorithm, it’s not only one algorithm. It’s like a collective, to my understanding.

### Yu-shan Tseng:
I’m just a bit curious. When you showed me earlier the screen, I think that’s the parameter, the setting for the formula or the algorithm that you used, but I wonder where I can see all the algorithms that you use in pol.is.

### Audrey Tang:
Certainly. It’s in one, single GitHub repository called polisMath.

### Yu-shan Tseng:
I went there, but if I type algorithm, there’s nothing. I wonder what’s a name that you use, so that I can search by myself.

### Audrey Tang:
It is written in Clojure, which is Lisp. It is very mathy, \[laughs\] but it’s not very easy to follow if you are used to more, let’s say, object-oriented way of programming. Most of the algorithm you’re interested in are in this one, single file called Clusters. It’s just cluster.clj in polisMath/math.

### Audrey Tang:
I think it is pretty standard, iterated, k-means clustering. I think what you’re looking at is the entire algorithm here. I’m sure that you can dive into it and find the hyperparameters and parameters to this algorithm. I think the pol.is team did not deviate from the standard statistics or mathematics at all when coding this part.

### Yu-shan Tseng:
OK, thank you. I always think that’s very interesting, but there’s another group in academia talking about there are loads of algorithms that have been used in our everyday lives.

### Yu-shan Tseng:
Of course, social scientists, we don’t really understand it. We want to understand it in an amateur way or in a layman way, so that we can share and we can explain it in an easier way to the common people or to other people who are interested.

### Yu-shan Tseng:
Even though I can’t code or there’s some barriers for us to try to understand, I think that’s the starting point. \[laughs\] Thank you very much for explaining everything to me.

### Audrey Tang:
To introduce their intuitions, there is a kind of strings after each function. Right after the definition line for silhouette, it writes -- in English more or less -- what it’s trying to do in code afterwards. It should be somewhat helpful if you want to walk through this entire file.

### Yu-shan Tseng:
Right. Thank you very much. I will definitely check it out. The second question is, when you decided to use pol.is to facilitate all those comments, I wonder what did you expect? What kind of result or what kind of effect did you expect to get from pol.is?

### Audrey Tang:
When we start a pol.is discussion, as we previously discussed, it’s usually because the sheer amount of input comments exceeds the reading comprehension \[laughs\] time for everybody involved.

### Audrey Tang:
The first effect I would like everybody to have is to have an overview of what kind of arguments are there. It is easy to overlook that there are better or more interesting arguments if one is just focused on one particular conversation thread.

### Audrey Tang:
Pol.is, I think the main effect I want to give is more or less the overview effect, which is the effect that let people see that there is a variety, or we should say a distribution, of all the possible ideas in an idea space. That is the first thing that I would like people to consider.

### Yu-shan Tseng:
I wondered, for some particular interests, such as Airbnb or Uber, why do you choose to use pol.is and not Discourse in a questionnaire or giving a big-picture stage?

### Audrey Tang:
I think I already answered. It is simply because the incoming opinions are so much in volume and in diversity that it is practically impossible, had we used Discourse or a traditional forum method, for everybody to read it all. Even when people can read it all, they would not be able to tease out consensus from the sheer volume of opinions.

### Audrey Tang:
The same thing happened in the drunk driving case. In particular, we already know that there are people who are interested who will iterate the same opinions over and over. In pol.is, people who share the same idea would just consolidate into a single dot. They would not waste everybody else’s time by revisiting the same points over and over. Rather, we reward consensus-making behavior.

### Yu-shan Tseng:
I think my question is, in vTaiwan, there are a number of issues. I found some of them you don’t use pol.is in the questionnaire stage, and some you use pol.is. I wonder. Is there any rationale behind it?

### Audrey Tang:
We usually use pol.is if we think that there are a lot of opinionated members of society who will want to come to this space. We don’t use pol.is if we think that there’s not so much strong emotions, feelings, or reflections, and the volume is something that a forum can handle or a questionnaire can handle. Then we use forums instead.

### Audrey Tang:
Basically, we use forums because we know that we can moderate the forums ourselves. When the volumes or variety grows to such a point that human moderation is no longer feasible, instead of giving up, we use an automated moderator. That’s the intuition.

### Yu-shan Tseng:
I’m curious. In the very beginning, when you start to collect different opinions, before collecting opinion, how did you know this issue will be very popular, like most people will participate?

### Audrey Tang:
You can analyze this topic and see whether it is hot in social media, in traditional media, whether it is being actively followed, or things like that. There are ways to analyze the traditional and social media to see if any particular topic is likely to get people who are very opinionated or a lot of people.

### Audrey Tang:
For things that the government or the society doesn’t quite have this strongly opinion on, we don’t have to handle this volume of input.

### Yu-shan Tseng:
I see your point. I want the skip the third question but I will come back to it. I will go to the fifth...ah the fourth question. The fourth question is, when you say there’s a moderator in the Discourse in a forum format, I wonder perhaps there is a comment moderation in pol.is. There’s a by-default setting, such as lazy or strict. I wonder, which mode did you choose?

### Audrey Tang:
We tried both ways. Initially, in the UberX case, we did strict moderation, but I almost watched it constantly, approving new comments as quick as I can.

### Audrey Tang:
Afterwards, for Airbnb, we went for lazy, that is to say &quot;pass by default&quot; moderation, which created an explosion in number of comments. The comments, it’s not very high quality, at that. We had to very quickly prune the comments, as Billy did during the drunk-driving one.

### Audrey Tang:
I don’t have a very good rule. If the moderator can be 24/7 looking at the moderation, then strict moderation is good. It doesn’t waste anybody’s time. If the moderator can only visit a few times a day, then perhaps lazy moderation is good. I don’t really have a very fine heuristic on this. It’s mostly a trade-off between the time wasted on the participants and the time spent by moderators.

### Yu-shan Tseng:
That’s quite interesting. You were the moderator for the strict mode for Airbnb?

### Audrey Tang:
No, for UberX. For Airbnb, I was also the moderator, but it started in lazy mode.

### Yu-shan Tseng:
Are you the only moderator for...

### Audrey Tang:
Pol.is, at that time, only allows one moderator. There’s no group moderation.

### Audrey Tang:
It’s very recently that vTaiwan created a group account and that we made pol.is run independent of Heroku, so we can share a group moderator. All these are very recent advancements. Every case before this year, there’s, by necessity, only one moderator.

### Yu-shan Tseng:
Wow, you did a lot of jobs, lots of tasks. \[laughs\]

### Audrey Tang:
Yeah.

### Yu-shan Tseng:
That’s very interesting. I wonder, how did you moderator in the strict moderation mode? How did you approve each comment, is there any protocols or principles behind it?

### Audrey Tang:
Easily, if it’s a duplicate. If the point is made by, strictly speaking, a comment that address exactly the same thing or something that a very high correlation was distinct, then I tend not to let it through.

### Audrey Tang:
If it’s making a new point or a point that’s not equivalent, although somewhat similar, to a previous comment, then I let it through. It’s mostly de-duplication.

### Yu-shan Tseng:
So, you have to remember, when the amount of comment goes really huge, you will have to remember that there are maybe 100 comments which are very different from each other.

### Yu-shan Tseng:
When there is a new comment comes in, you have to remember, &quot;Oh, this goes into the first one.&quot;

### Audrey Tang:
Yes, that’s right. Really substantial comments, they tend to resonate already with one particular group or the other, so it’s not that hard. We already have to do this if we are doing a face-to-face deliberation. If people bring up new points that’s already covered in the handbook or in any of the stakeholder materials, then you have to understand or remember that.

### Audrey Tang:
It is easier for a facilitator to simply navigate the comment space, just as we did with RealtimeBoard. It is certainly already easier to simply see one incoming comment and remember whether it’s a duplicate, than seeing one incoming comment and think, &quot;Which group will tend to agree with this?&quot; which is what a face-to-face moderator often have to do.

### Audrey Tang:
By leaving that part to an algorithm, we can focus on the quality and diversity of the comments. While it is work, it is already significantly less work.

### Yu-shan Tseng:
That’s quite interesting. Go back to the third question. Will pol.is ensure every comment is viewed by more or less the same amount of people to make it fair when it single out the most representative comment in one group?

### Audrey Tang:
Yes, it does that. We are also talking about an algorithm change recently. If you interview Christopher, you can go into depth in that. There is a tension between wanting to give every comment the same number of votes or eyeballs, in order make sure that they get fair treatment, versus making the time that’s spent on pol.is most efficient use of a voter’s time.

### Audrey Tang:
If there is, say, dozens or even hundreds of comments, a random distribution will mean that the quality of the comments seen by any viewer is, by necessity, not very correlated. That is to say, how I vote in my first comment or the second comment does not really give any indication of what kind of comments I will see on the third or on the fourth vote.

### Audrey Tang:
That creates a somewhat different experience compared to what we are now thinking about, which is to give the voters the most controversial comments first. After two or three votes, we can be reasonably sure which group that this person belongs to.

### Audrey Tang:
Then we give them, as fair as possible, the comments that this particular group tend to be divisive about, in order to further refine the comment space. There is an argument to be said by try to use the existing votes of one person to inform the question or comment to show, versus the current way, which is as fair as possible to give every comment the same number of eyeballs.

### Audrey Tang:
We haven’t really did an empirical trial of the new, let’s say, it’s more narrative-based way of presenting comments. I can’t really tell you how the experience differs. The design intuition is so that people will become more engaged, because they get more relevant and controversial comments early on. It engage them into constant thinking based on where they are.

### Audrey Tang:
Of course, I can argue the other way, which is they don’t get exposed to things that everybody tend to vote yes or tend to vote no. These are useful, too, because it establish a rapport or an understanding that people can come to agreement, even if they have controversies.

### Audrey Tang:
By having the controversies upfront, it may create an experience that emphasize the controversies. I don’t really know, because we haven’t made a field study yet.

### Yu-shan Tseng:
I think that’s a very, very interesting argument. I’ll definitely follow up with Christopher. I think that sometimes, because of these mathematics or algorithms, statistic behind the...They will slightly or subtly change the way how people participate, or even change how they feel.

### Yu-shan Tseng:
Sometimes they will get very sympathetic, because you create another button and say, &quot;You can say yes, or you can say what.&quot; The emotional changes will be quite...That’s very interesting.

### Yu-shan Tseng:
That comes to the fourth question. Have you tried to get a better performance out of pol.is? For example, I checked the document. They recommend every user, if they want to use pol.is, for example, to leave seed comments, to make sure there are some diversities in the very beginning or...

### Audrey Tang:
We definitely do that, just as a face-to-face deliberation start with an inform phase, where people get a handbook that lists the major arguments and positions from the relevant stakeholders. We try to put, as succinct as possible, the various positions that we get from the stakeholders beforehand and get them into seed comments.

### Audrey Tang:
We used to have this formula, which we still follow, more or less -- not religiously -- in that we have nine seed comments at first. Three of them are profiling questions. That is to say, in the UberX case, there would be, &quot;Do I have a professional driver’s license?&quot; &quot;Have I used Uber before?&quot; and things like that.

### Audrey Tang:
Three of them will be position questions, &quot;I think taxation is important,&quot; &quot;I think insurance is important,&quot; &quot;I think registration is important,&quot; and so on. Three of them will be wish questions, like, &quot;I wish the government will do more to rein UberX in,&quot; and things like that.

### Audrey Tang:
The initial seed questions are meant to let people know that there are good answers, both the yes and no, on those profile questions, which means there are people who are like them and people who are not like them. The positions necessarily follows from the profiles, but not always.

### Audrey Tang:
The wish or the statements that, as the government, we have received from the lobbyists, we also try to put them into seed questions. After all, that is what people considered important enough to raise as lobbying statements. What we want out of pol.is is a refinement out of those very strong or very polarized positions.

### Yu-shan Tseng:
Where did you get the questions for those seeds from?

### Audrey Tang:
We asked the stakeholders, &quot;If there is one thing that you can put in as your wish or your position, what would that thing be?&quot;

### Yu-shan Tseng:
Can I still find the archive questions?

### Audrey Tang:
You certainly can. I have a slide that shows exactly that. I think I even recorded it as an online course, how to use pol.is. I’ll send you that afterwards.

### Yu-shan Tseng:
Yes, thank you very much. Also, in that document on GitBook, it also states that there’s a limited number that it can only have less than a thousand comments at a time. Sometimes, because vTaiwan is quite popular, from, say, Uber or Airbnb, there are more than a thousand comments.

### Yu-shan Tseng:
I wonder. Is it pushing the capacity or the limit of pol.is, or it’s not a concern of yours?

### Audrey Tang:
If it is things like UberX or Airbnb, people tend to be willing to spend a lot of time on pol.is, even answering all the comments. It is less of a concern.

### Audrey Tang:
We do think that, for more mild topics, where people feel less strongly, then it may be good to moderate out most of the repetitive comments and/or introduce a different presentation order, where people are presented the more controversial comments first. As I mentioned to you, that’s Christopher’s idea.

### Audrey Tang:
There is a certain guess work we have to do, how much time any voter, any participant is willing to spend on pol.is. Beyond that number, we will see that the sampling gets less and less effective. Each comment has less and less significant participation, so we’ll have to change accordingly. For the really hot cases, like UberX and Airbnb, I am not that worried.

### Yu-shan Tseng:
OK, I see. That’s fine. I think we can go to...This is a quite interesting one, the last one, encourage participants to stop back a few times to vote on new comments, which are only showing up very recently. You don’t want them to comment at the end, because if they come later, then they might not be...when it comes to the first point that if they are all being voted by a certain amount of people.

### Audrey Tang:
If they leave their emails, they’ll get reminders. That’s something that pol.is already does. Disallowing new comments toward the end may be useful, but it may not. In Airbnb’s case, two days before the pol.is period draws to a close, there’s a huge influx of participants, because Airbnb sent an email to all their members in Taiwan asking them to come to pol.is.

### Audrey Tang:
If we disallow new comments at that point, we will not get high quality conversation. Despite there only being only 48 hours or something left, they still have a lot of very useful interactions. We can always extend the date. If we don’t get a super majority or if we don’t get resonating, high-quality comments, we can always say, &quot;OK, we run it for another week.&quot; It is not a hard deadline.

### Yu-shan Tseng:
That’s quite interesting. I wonder, how do you judge if it is a high-quality conversation?

### Audrey Tang:
It is a high-quality conversation if we manage to get people from different groups to nevertheless agree on something. That’s the whole point.

### Yu-shan Tseng:
The whole point is to get a consensus out of the participants, out of different opinions.

### Audrey Tang:
That’s exactly right. By consensus, I think it was Christopher who came up with something like this:

### Audrey Tang:
\\\[ Cons(c) =\_{def} \\prod \_ {g \\in G} 2 \\min ( P\_a(g, c)- 0.5, 0 ) \\\]

### Audrey Tang:
Which means that there exists a certain comment, C, which, for every group in G where there is a majority of people -- this is basically saying anything less than 50 percent is treated as zero -- then timed to two so that it still normalizes to 100 percent. It multiplies its support across all groups, the higher the better.

### Audrey Tang:
The idea is that if there emerges a comment C that is agreed by everybody in every group, then of course it has a perfect score. If it’s agreed by all groups, except one minority group, and that minority group, less than half people agree with it, then that comment is zero.

### Audrey Tang:
It has to get more than majority support from all groups in order to have a non-zero number of the consensus function. The idea is that if we have a handful -- that is to say more than three, I would guess -- comments, C, with a high enough consensus score that is consistent, then the pol.is conversation is a success. Otherwise, we may have to run it a little bit longer.

### Yu-shan Tseng:
That’s very interesting. Christopher wrote, come up with this formula himself, the consensus formula?

### Audrey Tang:
Mm-hmm.

### Yu-shan Tseng:
That’s brilliant. That’s very interesting. I’m definitely going to talk to him.

### Yu-shan Tseng:
Basically, you have the forum tools and a pol.is tool. To use this tool, you gather different ideas on the direction of the trend where you see the issues, how do they integrate? Since you have so many viewpoints, how do they being gather or bring to the other stage, where you’re having the expert meeting, the face-to-face one?

### Audrey Tang:
Nowadays, it’s simple. We just ask the pol.is algorithm to come up with a report and to read from the report.

### Audrey Tang:
Before we had a report, we had to do something manually that is very much like the report, only much more tedious. The idea is that we first list the consensus arguments, and then we try to find, in each group, which are the comments that are representative of that group.

### Audrey Tang:
The comments kind of define that group, meaning this particular group agrees on this, but pretty much nobody else agrees this strongly. That’s it. That’s all we do.

### Audrey Tang:
We let the face-to-face expert meeting or we let people online know, through a presentation, how many groups are there. What are the majority’s consensus arguments? What are the non-consensus, but nevertheless distinguishing sentiments within every particular group? That’s pretty much it.

### Yu-shan Tseng:
When you are, say, facilitating the face-to-face expert meeting...

### Audrey Tang:
I start with a briefing of the pol.is phase.

### Yu-shan Tseng:
There’s a minority opinion, which was still in the presentation. During the discussion with experts, all kinds of stakeholders, as a facilitator, how did you treat the minority opinions in these conversations or discussions?

### Audrey Tang:
If it’s a minority group, one of the telling points of pol.is is that it doesn’t ignore minority groups at all. The minority group, I will say, &quot;This group only has 10 percent of population, but it brings a very good point, which is blah, blah, blah.&quot; If it is a comment that nobody agrees on, like a negative consensus, then maybe it’s just a really bad idea. \[laughs\]

### Audrey Tang:
I don’t actually present those, unless it’s significant in the sense that the reverse of it, it’s still a useful sentiment. I remember I picked one from the UberX case, which is to say, &quot;We should not have this conversation. We should just fine Uber.&quot; \[laughs\]

### Audrey Tang:
A majority of people disagree with that. I shouldn’t, strictly speaking, show it in the presentation, but I think it helps the discussion to let people know that most people don’t feel that we should stop the discussion. We should let the discussion go on.

### Audrey Tang:
It is somewhat arbitrary, I admit. Otherwise, minority groups do get representation, but not those minority comments that are ignored by everybody.

### Yu-shan Tseng:
That’s really interesting. I’ve heard from one of your colleagues who said that once pol.is was shut down. It was at the end of one of the issue, which he forgot. I want to follow up. Do you know what happened and what caused it to shut down?

### Audrey Tang:
I don’t remember anything like that. I remember that a report function is broken when we want to get the drunk-driving thing. Billy had to do it manually. I think that morning the report function is repaired, so we were able to include the report function’s output. The PDF file is fine.

### Audrey Tang:
We didn’t have a report function before, anyway, \[laughs\] so it’s all like that. It is the first time we tried the reporting function. That’s it. I think that’s all it is.

### Yu-shan Tseng:
When you say you don’t have the report function, is that because you use pol.is as SaaS?

### Audrey Tang:
No, the reporting function is a new feature. It didn’t get completed until, I think, around drunk driving and NCII. When we were doing online liquor sales, Airbnb, or Uber, there’s no reporting function to speak of.

### Yu-shan Tseng:
Why do they want to have this function?

### Audrey Tang:
It is what everybody asked them to write... It is tedious work that all the facilitators have to do. There is no human creativity in it, which makes it a prime candidate to be automated.

### Yu-shan Tseng:
Do you still have the spreadsheets or the sheets where you create those tedious jobs that I can take a look...

### Audrey Tang:
There is a GitHub repository called polis-tally. If you look at polis-tally, you probably have everything here. This is the pol.is conversation. If you search for the first nine comments, you will see the seed questions that I just talked about, &quot;I am a Taxi driver,&quot; &quot;I’m an Uber driver,&quot; &quot;I think accident insurance is important,&quot; &quot;Taxation is important.&quot;

### Audrey Tang:
&quot;Conflict resolution should be handled by the Ministry of Transport and Communications,&quot; &quot;I think surge pricing is fair,&quot; &quot;I have used Uber,&quot; &quot;I think multiple dispatch systems can be allowed on the same taxi,&quot; &quot;I think there should be prominent display on a car to transfer service,&quot; and, &quot;I think to run after such unlicensed operation is the MOTC’s duty,&quot; and so on.

### Audrey Tang:
This is basically the matrix that I operated off before the reporting function. This is sorted by consensus, by the way. You can see the highest consensus is really pretty high.

### Yu-shan Tseng:
Wow.

### Audrey Tang:
They are 97% and 96%, respectively.

### Yu-shan Tseng:
That’s very interesting. You said those are the seed comments?

### Audrey Tang:
No, this is the final result, sorted by percentage of consensus. I was just searching for single-digit index -- which means they are seed comment, because they’re the first nine -- to show you. Of all the seed comments, only the accident insurance one made it to the complete consensus list.

### Yu-shan Tseng:
Only this one made it?

### Audrey Tang:
Yeah, I think only this one made it to the list.

### Yu-shan Tseng:
The conversation actually grows more than the seed comments.

### Audrey Tang:
This is why we use pol.is. Otherwise, we’d just send out a survey, right?

### Yu-shan Tseng:
Yeah, that makes a lot of sense. Next one, I’ve seen it on GitHub, they say there’s a data export function. Have you ever used the data export function?

### Audrey Tang:
Of course. What you’re looking at is the data export. Of course, I write some programs to make it easier to see. The raw export is something like this, which is not very easy to comprehend. It is actually easy if I explain a little bit. Every comment has a body, an index, number of agree, number of disagree, and a percentage.

### Audrey Tang:
For each index, you can match it with one voter. This voter, participant 1, belongs to the first group, the k cluster, the first cluster. He had posted no comments, and they voted for it 29 times, agreeing 14 times, and disagreeing 10 times.

### Audrey Tang:
For each comment that are there -- there are almost 200 comments -- here is how they voted. One is a yes, negative one is a no, zero is a skip. If you don’t see anything, that person hasn’t seen this comment before.

### Yu-shan Tseng:
That’s very interesting. Is this also on GitHub?

### Audrey Tang:
This is on GitHub. If you search for polis-tally, all the pol.is we have run, I have dumped its data and committed it.

### Yu-shan Tseng:
Would you be able to know the geography, the gender, age, or the profiles of the participants?

### Audrey Tang:
We don’t ask that questions, so we don’t.

### Yu-shan Tseng:
In pol.is privacy policy, it say that they might possibly also collect the data when you register either through Google, through Facebook, or Twitter, whatever.

### Audrey Tang:
That’s right. If Facebook choose to reveal your gender, it is possible that people who sign up through Facebook, you can cross-analyze its profile. Although technically we can do that now with our own pol.is login and our own non-Heroku version of pol.is, we haven’t even beginning to think about doing it.

### Audrey Tang:
Now that you mention it, we can do this, technically, but we’re not doing it now.

### Yu-shan Tseng:
Christopher or Colin, do they do these analyses? The privacy policy looks like they are going to do some cross-reference...

### Audrey Tang:
They do do geography analysis. I remember, for the UberX case, they correlated the number of population in Taiwan and the number of participants of the UberX conversation in Taiwan. They found that there is very even. There is no overconcentration on large cities, which makes us really happy. I don’t know which other analysis they do, so maybe you have to ask them.

### Yu-shan Tseng:
I probably need to ask them. This is quite popular to use this data. When you have a conversation, those data are collected accordingly, so that you can recycle or reuse those data, kind of like a data market.

### Audrey Tang:
I do agree it’s useful. It’s just maybe useful from an analytic sense or academic sense, maybe not that relevant to the deliberation itself.

### Audrey Tang:
Certainly, if I think the gender or age is important, I will have that included as one pol.is question. If it’s not, then it’s circumstantial. People do not necessarily use Facebook to log in, for one, and people’s Facebook profile may not be that accurate, for another.

### Yu-shan Tseng:
Yes, exactly. That’s true. I agree with you.

### Yu-shan Tseng:
The next one, I wonder, all the data collected in the process of pol.is, who has the ownership? I checked the privacy policy of vTaiwan. It said most of the data, it’s from the CC0 license.

### Audrey Tang:
That’s right, so it belongs to everybody — or it belongs to nobody, depending.

### Yu-shan Tseng:
No one, I would say in terms of ownership, and that’s very interesting.

### Yu-shan Tseng:
When I checked the privacy policy in pol.is, they said every data, every piece of code source, are owned by pol.is and subject to intellectual and proprietary rights and law protection.

### Yu-shan Tseng:
You have used pol.is in a quite interesting way, in a fast way, in a direct way. Did you have the control of the data? Who owns this data?

### Audrey Tang:
The first thing is that, the privacy statement here, I don’t think pol.is says that your IP address and things like that become their intellectual property... I don’t think it says anything like that here. Maybe I’m mistaken.

### Yu-shan Tseng:
I think one of them, they say, for example, the comment. When you use the user materials...Is it materials? Yes, user materials. It’s you have a comment in a public domain, and then they might use this data for further analysis. Also, according to I think there is an intellectual...

### Audrey Tang:
No, I don’t think there is an intellectual property. Of course, by necessity, just by showing your comment to other people, you have to give pol.is a non-exclusive right to show it to other people. Otherwise, there is really no point of pol.is existing.

### Audrey Tang:
I don’t think somehow you become a contracted author and you give the IP right, and you can’t use those copyright statement yourself. I don’t see anything like that here.

### Yu-shan Tseng:
I think there’s another part, which is to check the source code.

### Audrey Tang:
This is term of use. This refers to the source code of pol.is itself. Of course they will want to assert intellectual property on the pol.is code. Otherwise, they can’t put it under AGPL.

### Yu-shan Tseng:
Also, I think it express several lines to talk about how many...where all these materials -- I think they used a collective word, materials, to express all this data and all this stuff are owned by pol.is.

### Audrey Tang:
Yeah, but this is about materials. This is not about user material. This is things that Christopher has written. This is not what a participant has written. Of course, pol.is will want to retain IP right for their code, because otherwise, they will not be able to release it under a open-source license; they will have to check with everybody else.

### Audrey Tang:
I don’t think those two materials are the same thing.

### Yu-shan Tseng:
When they say there’s data...I wonder when these comments or all kinds of things becoming data are saved in a data format. If they say they own this ownership input, it’s embedded in Taiwan, I wondered, do you have a say to use this data generated by pol.is? I think that’s my question.

### Audrey Tang:
I think the scope is different. This talks about the service which is you can consider the input being both in comments and the output being a visual display. Then, pol.is is essentially saying, how we generate the output from the input is the intellectual property. It doesn’t really say anything about the vote itself and the comments itself.

### Audrey Tang:
Of course, the vote and comments are under CC0 if it’s a vTaiwan context, or whatever IP right is belonging to the person who wrote this. All that pol.is is asking is a non-exclusive right for you to let it show your comments to other people. I think that is pretty reasonable, actually.

### Yu-shan Tseng:
Christopher wrote this, the term of use and the...

### Audrey Tang:
No, no, no, the code. I don’t know which lawyer wrote this. You have to talk to their lawyer, but I think the intent is never to control the intellectual property of user-generated material. I’m pretty sure about it.

### Yu-shan Tseng:
Thank you. According to GNU APGL Version 3.0, if through open source you get the source code of pol.is and you modify it, you will probably have to publish the modified pol.is. Does it apply to the Sandstorm pol.is?

### Audrey Tang:
Yeah, of course. We will have to provide the modified code to any user of the system. That is actually a Sandstorm feature. You can, whenever you use a Sandstorm system, download any data you have in the Sandstorm as well as a copy of the code that is running in Sandstorm.

### Audrey Tang:
This is called portability. You can move to your own hardware anything that you participate on a Sandstorm instance. Sandstorm is designed with this kind of free software copy left in the cloud in mind, in the sense that any user is able to obtain not only the data stored on the cloud, but also a copy of the code that’s running in the cloud.

### Audrey Tang:
By that, I think we’re already AGPL-compliant. In addition to that, I think our modifications are all done publicly on GitHub anyway. People can just follow our fork and chase the changes we made.

### Yu-shan Tseng:
That’s amazing. That’s very interesting. \[laughs\] Next one, did you have other meeting afterwards? I noticed that the time is up, but there’s still...

### Audrey Tang:
No, it’s OK. It’s OK. We can go on for another, I don’t know, half an hour or something.

### Yu-shan Tseng:
The chief of Department of IT in Taipei City, Lee Wei-Bin, he mentioned you in an interview. He mentioned that when in the government and outside of government state, g0v, when they’re trying to build software or a product, they might have some differences, the value they believe or the principle they have.

### Yu-shan Tseng:
For example, his perspective, he thinks g0v, when they’re doing a project is focusing on very agile and very specific and very fast. They want to be very effective.

### Yu-shan Tseng:
In the government maybe they focus on the stability and the safety of that piece of software or the system. I wonder, when you are building...vTaiwan is somehow every interesting. It’s somehow in between. It’s a project proposed by a former minister in Executive Yuan, but it’s been built and maintained largely by g0v.

### Yu-shan Tseng:
I wonder, when you are doing this, when you are building or design the infrastructure of vTaiwan, is there any trade-off? There are some people coming from the government. They might have different ideas of the design, what vTaiwan should look like or what kind of software this should be, compared to you were from g0v at the time, and other people.

### Audrey Tang:
People who want control from the government side all participate in the Join platform instead. I think the best thing for vTaiwan was that there is, concurrently speaking, a Join platform. People who want government control can put their ideas to the Join platform and leave vTaiwan to experiments.

### Audrey Tang:
On the other hand, of course, cybersecurity and safety is very important, which is why we use pretty much tried-and-true open source components, pol.is being the one exception. When we are using it, it is not yet open source. There is significant algorithm in it. We don’t necessarily have to trust their explanation to it. We have to do a lot of validations and so on.

### Audrey Tang:
I think Chia-Liang Kao recommended pol.is because, first, he knew Colin face-to-face. We wanted to create pressure from them to open source pol.is. Before we can apply pressure, we have to let the pol.is team see that it helps to open source things if the large governments are going to use pol.is as part of the decision-making platform.

### Audrey Tang:
To get credibility, you have to open source it. If it is just a few hobbyists or private sector people using pol.is, they may not care that much about algorithmic transparency. We have to prove that pol.is can be used on a massive scale before we can convince them to open source it.

### Audrey Tang:
We took a risk by using a proprietary SaaS software as part of the vTaiwan stack. Otherwise, we are building on very solid, open-source proven grounds.

### Yu-shan Tseng:
That’s very interesting. I didn’t know it is g0v, Chia-Liang Kao, and you to push them to open source pol.is.

### Audrey Tang:
Yeah, definitely.

### Yu-shan Tseng:
I’m going to follow up with you. That’s a very interesting story. The next one, there are some discussion around civic tech and the city.

### Yu-shan Tseng:
I mean to say Decide Madrid, Consul, to some degree has benefited from, say, the resources from Madrid City Hall. Outside that, from Media Lab or from the very talented software engineers who are residents in Madrid, or all kinds, this city as a space for all kinds of experiment and civic tech would be one of them.

### Yu-shan Tseng:
This kind of discussion has been made in urban geography or in human geography a lot. I’m just curious, because I found that the Sunflower Movement or all kinds of activity from g0v, even vTaiwan, data hackathon, all these hackathon, they are all located and happen in Taipei. I wonder, what do you think? Is it any connection or it’s just happened accidentally?

### Audrey Tang:
No, it’s not an accident. In Taiwan, we have 20 years of open source movement, with COSCUP, with OSDC, with the meet-ups, with the various conferences inspired by COSCUP and OSDC. There’s a huge amount of people who already are gathering in Taipei.

### Audrey Tang:
There are, of course, the MOPCON community, and there’s a bunch of people around NCKU in Tainan. By and large, the largest annual events in open source happens in Taipei, and usually around Academia Sinica.

### Audrey Tang:
Academia Sinica, in the early 2000s, has this national plan to push open source, and it established a so-called OpenFoundry to build infrastructure.

### Audrey Tang:
It’s just like GitHub before GitHub existed, to basically give the developers not just a online space, but also a legal space through the introduction of Creative Commons and l;icensing advisors, as well as offline space.

### Audrey Tang:
That is to say, the Academia Sinica building itself provides a lot of practically free venues for large-scale events.

### Audrey Tang:
g0v itself would have not be able to accommodate hundreds of participants if not for @scw’s intervention that allowed to join the Academia Sinica Department of Information Technologies to serve as a stable venue spot, and so on and so forth.

### Audrey Tang:
There’s many offline space, online space, and legal frameworks that supports the open source community throughout the past 20 years. G0v just rides on this wave. There is many other teams riding on this wave, as well. g0v is just the civic tech part of it.

### Yu-shan Tseng:
That’s very interesting. I’m going to follow with other \[laughs\] people from g0v, and so the last one...

### Yu-shan Tseng:
I had a talk with Andres because he went to g0v summit 2014, and he said he interviewed you and other key persons. He thinks the value or the logic behind these agile, or anarchy, or either decentralized value of vTaiwan has some connection with the Silicon Valley.

### Audrey Tang:
Certainly, the hacker culture, as we call it, but it’s not really just Silicon Valley. The hacker culture is also MIT. It is also European, like the Chaos Computing Club. It is pretty global, but it is part of the hacker culture.

### Yu-shan Tseng:
That’s his point of view, and I think it’s more than that, so I wonder what else...Is there any specific cases or particular culture that you make it as a reference to build g0v, or to make it as the value of g0v?

### Audrey Tang:
The leaderless values, I think it is part of the Internet itself. The Internet is basically rewarding innovations without permission, and we, I think, very consciously connect to the global open-source movement.

### Audrey Tang:
Which, again, after the invention of decentralized version control, SVK and BitKeeper, and, of course, Git now, everybody is free to fork any project in any way, knowing that if other people think it’s a good idea, they can merge it with minimal cost.

### Audrey Tang:
Because both @clkao and I were both developers of decentralized version control systems, we naturally took a lot of the analogy in the decentralized version control system culture, and later the Git culture, into the formulation of the g0v ethos, which again rewards forking, and rewards innovation without permission.

### Audrey Tang:
We also has a lot of experience with open space technology, in particular the BarCamp and Foo Camp idea of open space technology, or unconference. That is, of course, a pretty Silicon Valley idea.

### Audrey Tang:
The first BarCamp is organized in Socialtext, a company that I worked with for eight years, and @clkao for about five years. There’s various other g0v participants who worked in some way or another with the Socialtext people.

### Audrey Tang:
Socialtext, even in Silicon Valley, is considered very radically decentralized. There’s a lot of Socialtext culture in the g0v culture, as well.

### Audrey Tang:
Otherwise, I think it is also very local. The Taiwan people already has a very active meet-up culture, a very active culture where there’s a rough consensus, and just go and do something.

### Audrey Tang:
The organization management part owe a lot to the Mozilla community, and also the local COSCUP community in particular. You’ll probably want to interview the OCF people who are involved with g0v summit planning, because the g0v summit in particular is modeled after COSCUP.

### Yu-shan Tseng:
You mentioned something very interesting. Where you have global experiences, sometimes you have to translate, or to make it localized in a specific context, and each context has its personality or characteristics.

### Yu-shan Tseng:
It’s not that easy, or it’s not that it’s all the same. I think showing some character of the context in Taiwan would be something I want to figure out.

### Yu-shan Tseng:
Last question, because I read some text on the archive vTaiwan, they do a hackathon history, and so I learned that you refer to RegulationRoom as kind of like the prototype.

### Audrey Tang:
Yeah. We basically recreated RegulationRoom using this course, and some GitBook and other technologies. RegulationRoom was written from Drupal, and we find its interface not exactly the best to modify.

### Audrey Tang:
The design principles I think is really advanced, and that there is something very concrete in its output, as well the synthetic documents and so on. We basically started exactly where the RegulationRoom left off.

### Audrey Tang:
I also think RegulationRoom leaves a very good trail in the sense that they work with IBM and other research institutes to publish a series of papers on exactly what kind of training they gave to the online moderators, what kind of preparatory material it gave, what kind of interventions it had, and so on.

### Audrey Tang:
We also think that it’s essential that the public servants involved get a course on how exactly this thing works instead of just being another forum to attend. I think having a concrete prototype as well as theory is very helpful.

### Audrey Tang:
( [https://www.slideshare.net/autang/ss-42792460](https://www.slideshare.net/autang/ss-42792460) )

### Yu-shan Tseng:
Why did you choose RegulationRoom? Of course, you mentioned there’s advantages to all this concrete profile they’re doing, that had been done by the people from RegulationRoom...

### Audrey Tang:
By far, it’s the most advanced. I haven’t seen any national-level regulation making that has quite a success as RegulationRoom had.

### Audrey Tang:
Basically, we picked the state of the art and started from there.

### Yu-shan Tseng:
In one of the speech, you mentioned there’s difficulties, but Michel Hess, this professor...

### Audrey Tang:
Yeah. That’s one of the meta-analysis that mentioned RegulationRoom as well as others.

### Yu-shan Tseng:
He mentioned that there are three big issues they encounter. The first one is the ignorant wall. Then the second one is the silly wall. That’s just my translation. The third one is the too much information explosion wall, as three barriers they encountered.

### Audrey Tang:
I can get you the exact formulations in his paper later.

### Audrey Tang:
( [http://scholarship.law.cornell.edu/cgi/viewcontent.cgi?article=1178&amp;context=facpub](http://scholarship.law.cornell.edu/cgi/viewcontent.cgi?article=1178&amp;context=facpub) p.417)

### Yu-shan Tseng:
Because you know that they have some difficulties or you know exactly what kind of an issue they have. When you’re building, designing the infrastructure of vTaiwan, say you think of a way to circumvent or try to prevent these things from happen?

### Audrey Tang:
Yeah, certainly. We try to have a lexicon or a mini dictionary to make the ignorance not that much of a problem. We try to have dedicated moderators in order to foster a positive conversation instead of a toxic one.

### Audrey Tang:
We explicitly choose Discourse because it has excellent moderation tools so that it’s possible to edit away the part that is an ad hominem attack, but still leave the part that gives a substantial contribution. This kind of piecemeal moderation is something that not many other systems have.

### Audrey Tang:
Finally, for information overload, that’s where pol.is comes in. Even before pol.is, we tried to make finer subtopics of each policy subject so that people don’t go all over the place but can instead focus on one specific aspect at a time. We learned from the advises and the issues that they run into.

### Yu-shan Tseng:
One last one. Because he problematized this issue based on his experiences in the US, in the States, I wondered do you think digital forum culture in Taiwan also share the same issue or there are other issue happening in the context of Taiwan, from your previous experiences?

### Audrey Tang:
From my previous experience, in Taiwan we’re lucky in that we don’t have to advertise a lot to engage people in politics. People are very engaged in politics. You don’t have to mobilize them.

### Audrey Tang:
We don’t have to think that much about rural areas and digital gap because there’s broadband everywhere. There’s advantages in Taiwan in that we can deploy cutting-edge systems without fearing that nobody will get on them. That’s the thing we don’t have to worry about.

### Audrey Tang:
As for the culture of the people who are the most ignorant, comment the loudest, the trolls culture, as well as a lot of forum things, of course it is the same everywhere because it is a property of the medium. It is not a property of a population because it rewards things that capture people’s attention, and so the attention seekers dominate the discussion.

### Audrey Tang:
This is a problem that’s also problematized by the Discourse team, which is why they call themselves the Civilized Discourse Construction Kit, because they find most online discourse to be not civilized. They try to invent or construct a system that makes it more civility.

### Audrey Tang:
By using Discourse, we’re basically standing on the shoulder of the troll masters of the Internet who have all operated and constructed a lot of forums that measures in millions of users. By using Discourse, we’re pretty sure that it will scale, but the RegulationRoom people have to reinvent a lot of it themselves.

### Yu-shan Tseng:
Were you saying the moderators, are they from g0v committee to moderate or a team from Discourse?

### Audrey Tang:
The Discourse provides moderation tools. The vTaiwan community is the moderators. For every single comment, there’s a huge number of tools that could be used. You can flag it. You can put it a badge. You can edit part of it. There’s a moderation history. There’s many tools a moderator can use.

### Audrey Tang:
You can also give out badges to reward useful behavior. You can also assign moderation rights to people who are active in the community. The people who freshly registered, they cannot post pictures. Only after they become a good citizen and participate for a while, do they gain the right to post pictures.

### Audrey Tang:
There’s thousands of very small things like this in Discourse that generally encourage a civil behavior.

### Yu-shan Tseng:
That’s fascinating. I’m going to follow up with Discourse, which I haven’t been doing much homework on it. I will look it a little bit more.

### Audrey Tang:
As you can see, there is a huge number of knobs you can tweak to let a system trust the user to a degree where they can post new topics, where they can reply, where they can post pictures, and so on and so forth.

### Yu-shan Tseng:
This is very, very interesting. I’m going to tell Andres about it. I think he might find this very interesting. Sorry for asking you to spend more time. Thank you very much. Perhaps I’ll probably have to ask you some more questions in the future. I will let you know.

### Audrey Tang:
It’s fine. Those are very good questions.

### Audrey Tang:
I’m happy that you agree for me to post this online so that the wider research community can benefit from it also.

### Yu-shan Tseng:
Of course. Thank you very much.

### Audrey Tang:
Cheers.

### Yu-shan Tseng:
Cheers. Bye.

### Audrey Tang:
Take care. Bye.

### Yu-shan Tseng:
Take care. Bye.

