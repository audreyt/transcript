# 2020-03-18 Conversation with Sean Moss-Pultz

### Sean Moss-Pultz:
OK. I’m recording right now.

### Audrey Tang:
Please, yes.

### Sean Moss-Pultz:
OK, awesome. Of course, first, thank you for taking the time.

### Sean Moss-Pultz:
Our last talk a couple of weeks ago I showed you Spring, this app to get your Facebook data, and a little bit about…Before, we called them data vaults, where what we do with health and Pfizer and things like this…

### Sean Moss-Pultz:
I also mentioned that we were going to work on this app later in the year that would take Facebook data, some of the different environmental data. So, different publicly available datasets, combine it, help you to do what you love better, right? Remember this?

### Audrey Tang:
Yes, of course.

### Sean Moss-Pultz:
Good, good, good. What we were thinking is that it might be wise to speed everything up. Facebook as an entry point for Bitmark was super, super important a few months ago, but it just seems like the world has changed.

### Sean Moss-Pultz:
Maybe there is a better area where we can help. Specifically, what Casey and I did over the past week, is to take this app that we were going to do that can pull all kinds of data, and to focus it specifically on COVID-19-related, and to see if we can come up with something that can help people.

### Sean Moss-Pultz:
I’d love to show you a demo, and then get your feedback and then some questions.

### Sean Moss-Pultz:
OK, great. I’m going to do screen share. Let’s see here. Can you see that OK?

### Audrey Tang:
Yep. Yes.

### Sean Moss-Pultz:
Casey, you drive, OK?

### Casey Alt:
You can see the landing page OK?

### Audrey Tang:
Mm-hmm.

### Casey Alt:
This is the concept from the beginning. We have a short onboarding where we tell them we want to combine their data with data from trusted institutions, probably environmental data and health data, to give them a personal health score.

### Casey Alt:
With that, we could send them private, personal recommendations based on what their health status is, about what they should probably be doing. Then we’ll help you and your community better manage resources. The idea is that we’re not only helping these individuals but helping the community get smarter and know how to collectively work together better.

### Casey Alt:
Then, we would ask them something along the lines of, “Please turn on certain notifications,” so that we can send them messages or anything that might be pertinent to a COVID-19 status location data so that we can get them more accurate environmental information.

### Casey Alt:
If we can access their HealthKit health data on an iPhone, for example, so where we could see if they’re sleeping well, to see if they’re exercising, these sorts of things.

### Casey Alt:
The main UX is similar to what we had, what Sean probably showed you before with Autonomy. The idea was this triangle is a bit of a health indicator, and there’s a score from 0 to 100. This person is in decent health, we’ll say and recommendations that we might send to them based on as factors change in their environment or the status of their community’s health.

### Casey Alt:
If there’s a health risk spreading, or if it’s contained, or whatever, we would send them some suggestions. One may be like, “Go for a 30-minute walk by yourself,” say, “Hey there aren’t a lot of people at the park right now. Go out, get some fresh air. It may be good for you. It might help your immune system,” something like that, and give them just suggestions.

### Casey Alt:
We also would like to periodically push a notification to them and get a check-in, and this is also similar to Autonomy, where we could just say, “Hey, how do you feel physically right now?” just to continuously check in with them.

### Casey Alt:
If they hit the red button, we could say, “OK. Well, could you just talk about what specific symptoms you might be experiencing, if any,” and if they happen to be that are COVID-19 symptoms then we could say, “OK. Well, maybe you want to consider these kinds of actions, maybe contact a medical professional if you could get the test,” these sorts of things that CDC or WHO are recommending.

### Casey Alt:
In the case of an individual who might be at risk, is in a high-risk area, or may have come into contact with someone who tested positive we could send them a different set of recommendations. Maybe stay home and do light exercise, or whatever would be appropriate that the health officials and the institutions would say, “Hey, these are the kinds of things to recommend to people with this status.”

### Casey Alt:
Let’s say they are tested positive or they’re showing definite symptoms, even if they haven’t been tested we could give another list of recommendations, like “Rest at home. This is what that means. You should avoid, even, contact with your family,” and why you should rest at home, and give some explanations and further links if they want to read more.

### Casey Alt:
Also, the smarter we want to make it, we could do something like geofencing. If we do say, “Hey, please rest at home,” and we notice that their location has changed we could say, “Hey, please consider returning to your home for everybody’s safety,” or something like that, to make it a little bit smarter.

### Casey Alt:
Sean, did you want…?

### Sean Moss-Pultz:
That’s it, right?

### Casey Alt:
That’s most of it right now. Did you want to add anything to it?

### Sean Moss-Pultz:
Audrey, the idea is that institutions have a lot of data that’s very viable right now. How do we get individuals and institutions to directly interchange things?

### Sean Moss-Pultz:
Public health is like a Gordian knot in that the more data that’s public the more the institutions can help, but the individuals sometimes feel nervous about the privacy. I believe that our system can handle this. It can allow for sharing privately.

### Sean Moss-Pultz:
You have private groups. You’re pulling the data together. This is based on all the work we’ve done at UC Berkeley, at Pfizer. What we’re thinking is to do it specifically for Taipei, Taiwan. Start very, very, very small, very local.

### Sean Moss-Pultz:
I had a number of questions for you. First I would start, what do you think of this direction?

### Audrey Tang:
It’s pretty useful, but why would it require a app to do so? Why not a, say, web app?

### Sean Moss-Pultz:
It came back to the data model that we have where the keys are secured in a secure enclave, so in some very safe area. The personal data that gets pulled off of the device can be kept private, can be kept encrypted, and then the open data gets combined with it.

### Sean Moss-Pultz:
It could be web based. The challenge is on the privacy side. How do you keep an individual’s data very, very secure, keep the private keys very safe? The phone is super easy to do that kind of stuff, but I think it could be web based, too.

### Audrey Tang:
It looks like there’s two different apps in one that you just demoed. One that requires access to the user’s personal health data and then make health recommendations, and one is more like a self-assessing tool.

### Audrey Tang:
The self-assessing tool doesn’t really need anything from the secure store. The general recommendations that it’s giving, one can do so in a general purpose, web based form and give very similar recommendations. It’s not like your exact geolocation within Taiwan changes the recommendation levels, so it doesn’t even need the exact location of where you are.

### Audrey Tang:
What I’m trying to say is that usually when you’re using a app-specific data source, be it the geolocation data or their personal health data, it’s because you’re going to personalize their experience. The same applies for Bluetooth beacons or things like that.

### Audrey Tang:
In the case of Taiwan and the recommendations they’re giving, that’s going to be uniform in any place in Taiwan. The only differentiating factor would mostly be their age, and everything else is self-assessed.

### Audrey Tang:
Of course, you can always ask “How old do you feel you are?” It’s just I don’t think it’s a very useful question for COVID-19 management \[laughs\] , but otherwise, it’s also assessed. It’s not like the iPhone has any sensors that can automatically get whether you have a fever or not, without extra permission.

### Audrey Tang:
I think it’s useful. I like the UI. It’s just if I’m a personal user, I would be wary to install an app and give them access to my health data to get uniform advice. That’s my honest assessment.

### Sean Moss-Pultz:
What about location? We’ve looked into a lot of ways of how you can have private location, still do geofencing.

### Sean Moss-Pultz:
People would be able to know, in the neighborhoods around them, what’s going on and to be able to make suggestions like which parks to go to if the weather is good. If somebody works in, say, area B and lives in area C, to be able to tell them to work from home based on certain conditions. The location felt like it was something that could be useful.

### Sean Moss-Pultz:
The health data we were actually interested in was sleep and exercise because these two can be really telling as to…For example, resting heartbeat oftentimes goes up when people are getting close to being sick.

### Sean Moss-Pultz:
There’s some very simple biomarkers, I guess you would say, that we thought we could do things with but we can also start it much less personal where you’re providing this direct connection between different institutions and an individual and not go directly into the health so quickly.

### Audrey Tang:
That makes sense.

### Sean Moss-Pultz:
A couple of questions I had for you would be, what useful information could you think of that an individual could provide? A citizen could provide if they felt it could stay private? Would there be any useful information related to, say, COVID-19?

### Audrey Tang:
Obviously, there’s this Google map geolocation data of the places where they’ve been to. It’s something you can download from Google very easily much as how you can download from Facebook…

### Audrey Tang:
…history. There’s already local storage based tools, where you can use that API to download locally to the browser and match it with the already known travel path from a known person who’s infected. That is passive collection, right? It’s basically where your phone has been.

### Audrey Tang:
It’s a much more granular data detail than self-assessed or only when you remember to open the app because most people have Google Maps running in the background as opposed to your app. I think that’s one low-hanging fruit.

### Audrey Tang:
Everything related to that, for example, if people didn’t turn on geolocation but if they make travels…For example, they buy a high-speed rails or an EZE card-based metro purchase using mobile payments. Then, of course, based on that payment, because of the station where you beep to enter and beep to leave, they also can get their own start and stops, whether it’s bus, or metro, or high-speed rail.

### Audrey Tang:
That may be also useful because they have very precise times. They seldom miss their times. That can also be useful as a sort of overlapping trial detection data. That’s a tool dataset I think are people can download by themselves. There’s existing APIs and may be useful to correlate locally.

### Sean Moss-Pultz:
Interesting. I think this is actually a bigger problem in the US. Taiwan is pretty stable right now. My parents, in their neighborhood, some of our neighbors have come by and they asked, “If you need help, we can go to the store. We can buy things for you,” because my mom and dad are older than 70.

### Sean Moss-Pultz:
My brother and I are always calling them saying, “Do not go out. Stay in the home.” It’s really, really bad right now in the area where they live. This idea of individuals helping each other in the community is something that I personally find very interesting. I’m wondering, are there natural boundaries of community in, say, Taipei, or in Taiwan?

### Sean Moss-Pultz:
Is it the district? Is it the neighborhood? Is there some boundary that you feel would be very interesting for people to help one another in?

### Audrey Tang:
I’m not sure about that. The only significant boundary that I can think of is the so-called minimal statistics area. I think that’s the term or 最小統計區. It is a standard term that we use to publish statistics data. Meaning that if we publish any geoinformation more granular than that personal activity, then it will be seen as non-statistics. Meaning, it’s personal data.

### Audrey Tang:
The minimal statistics area, if we publish within the minimal statistics area, then it’s personal data.

### Audrey Tang:
If we publish at or above that, then it’s considered coarse grain enough to be statistic and different laws apply when it’s interpreted that way because personal data may be…For example, you can request for deletion. You can request for a removal. That’s one of your rights that cannot be waived by a contract.

### Audrey Tang:
But, you cannot say, “I’m moving out of Taipei. I want to delete it from the statistics in the census data of my last year’s residence in Taipei.” That’s a nonsensical request. That’s precisely because it’s published as statistics in that area.

### Sean Moss-Pultz:
Interesting. Is there anything that you have felt that we can learn from our peers in these crises? When you have a pandemic, is there anything peer-to-peer that you feel is super valuable?

### Audrey Tang:
The minimal statistics area is around 400 people in residence.

### Sean Moss-Pultz:
400 people?

### Audrey Tang:
Yeah, it’s around 400 people. It’s small-ish. It may be useful by itself. That’s how the, for example, epidemic data around the dengue fever is published as well. This has a long history going back. That’s the only unit that I have in my mind. Of course, you can try larger, the city, county level, but it’s useless at that level because it’s too many people.

### Sean Moss-Pultz:
400 is really interesting. It’s, of course, bigger than Dunbar’s number, but not by too much.

### Audrey Tang:
Not by too much. You can conceivably help everybody there is to be helped \[laughs\] in a statistics area. You can report all that while still being considered not infringing on people’s privacy.

### Sean Moss-Pultz:
I love that idea. That’s super interesting. While we were working through this, we had a crazy idea. I want to share the crazy idea with you. If this sort of app works, the network architecture, the topology, if you will, would be a lot of individual people with encrypted data vaults. These data vaults could be accessible with an API.

### Sean Moss-Pultz:
Essentially, you have something that looks like a next-generation health system. Citizens could own their data. They would form these networks.

### Audrey Tang:
I’m well-aware of that idea.

### Sean Moss-Pultz:
OK, cool. There’s a financial model that I’ve found interesting. I have one of the NHI cards, so I pay into the national health pool. One idea would be to offer almost like a premium health, where individuals, back-of-the-envelope numbers, if they paid $500 NT per month, something, they would be able to have an encrypted vault.

### Sean Moss-Pultz:
All of the data from the hospitals could be put into it. Then there could be an opt-in almost where they could create an open data network where other apps and services could build on top of it, almost like a government app store.

### Sean Moss-Pultz:
The developers that use this network could pay a tax, essentially. Part of the tax could fund the health system. At the same time, leftover money could actually go back to the citizens. I’m wondering. Is that kind of idea interesting to you? Or is it too crazy, too far out?

### Audrey Tang:
It’s not too crazy. There’s plenty of people developing that sort of thing, even an SDK of that. I’m well aware of that idea, and there’s developers who helped forming that SDK that also visited me a while ago. I think it was the Health2Sync people.

### Audrey Tang:
It’s a popular idea. I’m pasting the list of API users that downloads the National Health Insurance centralized database using this My Data export feature into their trusted vaults. You can see that there may be three clinics joining, but most of the Android users are joining the apps developed by the insurance.

### Audrey Tang:
There’s one called Databank. Maybe they have a very similar idea. \[laughs\] The Health2Sync team that monitors auto-magically your diabetes level and things like that.

### Sean Moss-Pultz:
We worked with them on that, Audrey. Our protocol’s beneath that.

### Audrey Tang:
As you can see, it’s a popular idea.

### Audrey Tang:
The main thing preventing this from scaling really well is what we call a legitimacy mechanism where people can audit independently but also as a society of consumers for protection, whether this governing mechanism actually respects people’s designated privacy, and that the rules cannot change afterwards. There’s no beta switch and things like that.

### Audrey Tang:
That mechanism, legally, is not very much there yet, so you have to basically trust the goodwill of the developers. Of course I understand using your architecture there’s less requirement of that sort of trust.

### Sean Moss-Pultz:
What we were trying to do with this app that Casey demoed was to show almost a vertical slice. It had all of the components, essentially an application built on top of a data vault, and connecting all of the individuals at a community level to sort of prove out the concept.

### Sean Moss-Pultz:
Do you feel that there’s a path? As an outsider…Actually both Casey and I are foreigners here. A lot of my friends lately in the US have been calling me and they said, “Hey, can you tell me more about what Taiwan does?” because they’ve been so fascinated with how we’ve been able to flatten the curve so fast.

### Sean Moss-Pultz:
Taiwan is becoming seen, at least in a lot of countries now, as a leader. What I was thinking was, well, is there an opportunity to not just be a leader, but take another step even further and do this sort of open data health network where the citizens have ownership over it and the government uses this as a model. Is this something you feel will be attainable, or is it too much of a pipe dream?

### Audrey Tang:
It’s certainly attainable. As I said, mostly this is an explanation issue. All the youth is joining this movement, however you want to phrase it. They need to be simultaneously informed and also be capable of making their own mind, as for the content structure. And before the content structure there needs to be a consensus structure because otherwise they don’t even know what they’re consenting.

### Sean Moss-Pultz:
Totally.

### Audrey Tang:
That’s the main problem, is a communication problem. That is why I think most of the action to enable this kind of structure will probably have to take place in the parliament.

### Audrey Tang:
There’s a public education campaign where all the four different party members understand the nuances of this social sector-based data management pool, then people can see if there’s a viable alternative to the state-owns-everything model and the big-company-owns-everything model. It needs to be framed that way instead of incremental benefit to a single user.

### Sean Moss-Pultz:
Yes, yes, yes. Yeah, this is like the democratic alternative to…Well, we’re being recorded, so I shouldn’t say the country, but this is the democratic alternative to…

### Audrey Tang:
So, potential restrictions.

### Sean Moss-Pultz:
Yeah, yeah. It just feels like there’s enough elements that are there technically. If there’s anyone that you knew that you’d be like, hey, you should talk to them, work together…If there’s pieces that are connecting in your mind, we’d love to help out with this. This is just a direction that I feel would be amazing if Taiwan could take.

### Audrey Tang:
Yeah. I think Taiwan is one of the few jurisdiction that can actually make this work. The main thing we currently don’t have is GDPR adequacy, because GDPR adequacy is kind of the prerequisite for the eligibility to enter into international collaborations of this sort, especially when US citizens or developers is involved.

### Audrey Tang:
Until we get GDPR adequacy, each person has to independently assess themselves and get an adequacy assessment from the EU, which is prohibitively expensive. I think that’s the main criteria for Taiwan to actually go forward and say this is our preferred model, or one of the preferred models, of data management.

### Audrey Tang:
Japan, with their so-called information bank, is doing very similar things. They have an enabling regulation. Again, because they don’t have a long history of GDPR adequacy, they went into the process earlier than we did, but, at the moment, I don’t know of any actually worked model of so-called information bank that we can point to and say, “Let’s do something Japan did.”

### Audrey Tang:
I would love to, but currently, there’s none. When Japan or Taiwan gets its first example, and either the country, the company, or the co-op gets GDPR adequacy, that’s the point where we can point at that and say, “This is something qualitatively different, and we need to support them by law.”

### Audrey Tang:
That’s how, for example, the fintech sandbox gained acceptance. It’s because we can point at, for example, Bitcoin, and say something qualitatively different has appeared.

### Sean Moss-Pultz:
That’s very cool. Specifically for our app, is there anything that we could do that would get us prepared at least more for the GDPR side? Is there anything us, as a team, could do to integrate which would get us directionally going there? Any kind of low-hanging fruit that you can think of?

### Audrey Tang:
Just getting this transcript published is one, because it’s pedagogy. It’s education material. In the very early on, when there’s a Google Chrome comics, I think that’s the word…

### Sean Moss-Pultz:
I’ve heard that.

### Audrey Tang:
There’s this excellent Scott McCloud that turned this extremely technical documents, references from the Google Chrome team into something super accessible.

### Sean Moss-Pultz:
That’s a cool idea.

### Audrey Tang:
We need to do something like that to gain any kind of political support.

### Sean Moss-Pultz:
That’s a really cool idea. This is great. Awesome. I’ve seen people do that with fair use at Duke. The Center for the Study of the Public Domain did a graphic comic around explaining fair use to artists. It was really cool. This really is a complicated concept.

### Audrey Tang:
On the other hand, when V8, the JavaScript engine or the preprocess rendering model, first appeared, these were complicated concepts, too, even for us programmers. \[laughs\] You’d need to start somewhere. Just educating people who are programmers, but not My Data enthusiasts is a good first step.

### Sean Moss-Pultz:
That’s really interesting. Audrey, thank you again for your time, really appreciate being able to reach out to you and talk to you about this.

### Audrey Tang:
Awesome. I’ll wait for the video. We can make it a transcript, and maybe that becomes comic book dialogue.

### Sean Moss-Pultz:
\[laughs\] I love the idea. We’ve definitely got to make a comic. Take care.

### Audrey Tang:
Thank you.

### Sean Moss-Pultz:
Good night.

### Audrey Tang:
Bye.

### Sean Moss-Pultz:
Bye-bye.

