# 2017-10-12 Meeting with Workplace by Facebook team

### George Chen:
Let me introduce my colleagues first. Yujing (Guo) takes care of Great China Region, for Workplace by Facebook, and her clients include the Singaporean government. \[laughs\]

> (laughter)

### Audrey Tang:
Appreciate it.

### George Chen:
Yujing will give a overview of Workplace by Facebook. I know you already heard it from the press or friends, but you will get the official version of what Workplace by Facebook is this time.

### Audrey Tang:
That’s great.

### George Chen:
Georg is our APAC head of platform engineering, security. I told them, because Audrey is a different kind of minister, \[laughs\] and she knows the engineering stuff better than most people, so if you have any questions regarding security, technical issues, Georg will be the expert to have an Q&amp;A after Yujing’s presentation.

### Audrey Tang:
Awesome. That’s great.

### Georg Zoeller:
We worked first with GovTech, which is a technology agency. That was the pilot. We rolled out to GovTech, and then the decision was made to roll out to the rest of the government as a result.

### Yujing Guo:
Should we start?

### Audrey Tang:
Yeah, sure.

### Yujing Guo:
I think I’ll spend about 20 minutes to show with all of you some general introduction of Workplace. Then, Georg will spend another about 20, 25 minutes showing some security issues, and also show some more advanced value that can be added to Workplace. Then we can open it up for Q&amp;A.

### Yujing Guo:
Before everything, I want to position Workplace very well. It’s not for enterprise social network. Many people think it inherits for Facebook, so easy for enterprise to do a lot of social networking on it, but it’s not. It’s really for you to do the communication platform and to incorporate your existing workflows into it, to make the...

### Audrey Tang:
There’s no personal wall.

### Yujing Guo:
Yeah.

> (laughter)

### Yujing Guo:
Today we’re confident that it’s helping the Singapore government. Potentially, maybe in the future, looking at Taiwan government, why we’re so confident it can bring you a better collaboration platform?

### Yujing Guo:
First off, familiarity. Out of the whole Taiwan population 18 million are on Facebook, and they’re monthly active user. That is also 92 percent of the Internet user.

### Yujing Guo:
You don’t need to provide any training, not like a lot of other apps or Internet you need always think about adoption rate. For this one, we see fast adoption rate, because the people are already familiar with Facebook.

### Yujing Guo:
Really, we focus on the mobile app and experience as well. You can rely on our mobile app to connect your people, wherever they are, whenever they are. Also, Workplace is very easy to become the heart of your business.

### Yujing Guo:
Once you shift your announcements from your traditional email channel to workplace, and also shift off your workflow through our integration technology to Workplace, it’s very easy to start involving people and ask them to come to Workplace to share business ideas and to get updated.

### Yujing Guo:
Another thing is it’s totally separate from Facebook. You don’t need to be concerned about there’s some things that people can easily show to Facebook. Information, Facebook and Workplace, they’re located very independently.

### Yujing Guo:
You don’t need to be concerned like, &quot;Oh, I really need to maybe concerned of adding my colleagues as my Facebook friend to share about work-related stuff.&quot; Workplace is totally separate environment, registered under a corporate email or enterprise email.

### Yujing Guo:
I just want to share with you some of our existing enterprise users that are already seeing a lot of impact, in terms of organization communication. A few days ago, we just announced Wal-Mart. They’re going to bring over one million of their global employees to Workplace to start sharing work stuff on Workplace.

### Yujing Guo:
Also, we’ve seen a lot of success across industries, regions, and more traditional ones like Starbucks or Wal-Mart, this kind of retail organizations.

### Yujing Guo:
In Southeast Asia, we’re seeing a lot of success from insurance companies, banks, and also Singapore government. For all these organization, they’re very highly concerned about the security level of a platform for enterprise. We’re already proving that we’re a successful platform for them.

### Yujing Guo:
BIBD and also Land Bank here, they’re all the state-owned banks of the Vietnam government, and also Philippines government.

### Yujing Guo:
I think I don’t even need to show you how Workplace looks. It’s basically exactly like how Facebook looks. We have basically all the features from Facebook site. For example...

### Georg Zoeller:
No ads, no games.

### Yujing Guo:
Yes.

> (laughter)

### Yujing Guo:
That’s very important. You don’t see commercial things. We don’t utilize Workplace for commercial ads. You don’t need to be concerned over the ad stuff.

### Yujing Guo:
We have work chat. It’s the equivalent version of Facebook Messenger, to allow you to do instant messaging. There is a very interesting group type, as well, called multi-company group. You can use this group to collaborate with external third parties, as well, invite them to this specific group. It doesn’t allow them access to your whole account, but just that specific group you collaborate on things.

### Yujing Guo:
Workplace has a system admin, so once person leaves organization, that account will be deactivated. Then he can never have access to Workplace anymore.

### Yujing Guo:
Sure. Another thing I want to highlight is live streaming. This is available a long time ago on Facebook and we imported it to Workplace, as well. We’re seeing a lot of companies very successfully utilizing this tool to really increase, enhance the efficiency of communication.

### Yujing Guo:
For example, utilizing them to do live Q&amp;A with leadership team. Another is to broadcast town hall meetings, actual meetings, back to the organization internally.

### Yujing Guo:
Later, I will show a lot of examples of it. Another thing, later on, Georg will focus, talk about integrations and bots. That’s really very interesting. I will just let Georg later on tell about it.

### Yujing Guo:
I just mentioned about live streaming, this is a very good example shared from an Indian national telecom company, Airtel. India is a huge country. Airtel has a lot of branch stars in a lot of remote cities and villages.

### Yujing Guo:
Their remote offices sometimes actually live stream back their huddles, their important meetings, activities, to make sure that the headquarter can hear directly from them, as well, to make them more visible.

### Yujing Guo:
This is a very interesting case I want to share. It’s from the CEO of IMH under Singapore healthcare. This CEO really likes utilizing live streaming to motivate his employees on some actions. This is an example of him doing a live video encouraging employees, claiming their Workplace accounts on the Workplace launch event day.

### Yujing Guo:
I’ll just quickly share it.

> (video begins)

### Yujing Guo:
We also allow live API, so you cannot just only use your mobile phone. You can also use your professional devices to do HD version.

### Georg Zoeller:
One of the key use cases is, obviously, one too many email. Email is OK one-on-one. We all use it. I use it mostly with customers, because internally we don’t use it that much.

### Georg Zoeller:
It’s much higher signal because all the mailing lists, all the groups organically move to Workplace fairly quickly, because you have the threaded view. It’s easy to add new people without moving the entire thread.

### Georg Zoeller:
The dreaded reply all doesn’t exist in Workplace. You can’t really do that, and just moving mailing lists often creates a pretty decent engagement base right at the start.

### Georg Zoeller:
I go over three of those slides here to give you our security position there. The one thing we probably should talk about is data residency, as you know where our data centers are. They are currently not in Taiwan.

### Audrey Tang:
I know, yes.

### Georg Zoeller:
We invest a lot of resources into security. Lots of different areas. Workplace benefits from that, because Workplace is under the umbrella of a lot of these site integrity tools that we are building, or that we have been built, like proactive control technology, and so on. The key thing for enterprises is our recovery time objective is zero

### Audrey Tang:
I assume the VR Spaces thing will be part of the Workplace?

### Georg Zoeller:
Eventually, yeah. It’s not today. One of the positions we have is, you’re not just buying a platform that brings you on the same level as consumer space. We are defining the consumer space. We are not stopping bringing these things in.

### Georg Zoeller:
We’ve just announced Oculus Business like a day ago.

### Audrey Tang:
Once everybody has Oculus Go, it makes very little sense not to have it part of the business.

### Audrey Tang:
More seriously, the service that you provide the launch preparation for the specific departments. How does that work?

### Yujing Guo:
We have a team, the strategy partner management team. After we come from a launch timeline for you, then I can bring the team here and really work with you on a specific launch plan. I know you have a lot of departments, so how we want to.

### Yujing Guo:
Probably at that time, you can share with us the structure that you want to have for all those comments, how we want to basically make Workplace work for them. We need to understand your goals and what you want to achieve.

### Georg Zoeller:
In parallel, my team can work with the technical concerns, provisioning, automating provisioning, security, whatever integrations are interesting and so on.

### Yujing Guo:
Yes, of course. Let’s say you want to do three departments, you think it’s a good time to push the three departments to go at the same time, of course you can do it. You don’t really have to follow one, by one, by one.

### Yujing Guo:
When you’re ready and also share with us the time line, roughly, like before which month you want to roll it out. Then we can plan it out together.

### Audrey Tang:
For the Internal Join case, the board is actually independent. We have one seat in it, but it’s one of 17 people, nine of which are from a public drawing from the entire civil service. We’ll have to, of course, run this over the board and see if the board likes the idea.

### Audrey Tang:
The board previously expressed quite a few concerns. All the privacy and end-to-end issues, I already brought up.

### Audrey Tang:
The other thing is whether this is actually useful as a solidarity-building organizational tool, rather than the public Facebook, where it often devolves into flame wars and things like that.

### Audrey Tang:
This is what we are working at, at the moment. This is our Intranet, literally.

### Georg Zoeller:
Yeah, it will look very similar.

### Audrey Tang:
This is Sandstorm.io. The idea, of course, is that as you did, to solve SSO authentication, compliance, whatever. People just focus on writing whatever apps, without getting proper security training, because the platform actually takes care of the sandboxing and everything. This is, literally, our workspace.

### Audrey Tang:
If we’re migrating from this, we would really need to have some way to either keep those apps running, but in a different container, in a different shell, or we can redo the integrations in a way that enables easy deployment of all the people who actually use it.

### Georg Zoeller:
The SSO route is the easiest. If you have identity, you can connect people. Workplace itself, the type of integrations, it’s like Facebook. There’s certain things that you currently cannot customize. We’re very careful maintain the Facebook look and feel, because a trade-off is, obviously, training. In the future there should be a fairly vibrant click-to-install market for Workplace integrations.

### Audrey Tang:
There are things like the Trello clone, the WeKan here, that we depend on.

### Audrey Tang:
As you can see, all this is open source, and we depend very heavily, at the moment in the team, for the task and the chat, which, of course, you have a counterpart. And spreadsheet and document, of course I understand you have Google Docs integration and Dropbox-ish fast storage that we can also...

### Audrey Tang:
I think what’s the value in Sandstorm is mostly this shared notification thing, and that’s not the easiest thing, as a bot, to do. If you have any beta integrations...

### Audrey Tang:
It’s good if we want to bring people from the Institute for Information Industries, for example.

### Georg Zoeller:
You can have multiple stakeholders from different companies, and it doesn’t have to be one-to-one.

### Audrey Tang:
We are also designing an experience of setting up a discussion forum-like thing for one of the national policies, and we’d have an external stakeholder group.

### Audrey Tang:
Maybe we can send some of them invitations and see how it’s like from their perspective to enter into a policy discussion on Workplace instead of on the Join platform or instead of on the Discourse platform, which we currently use.

### Audrey Tang:
We’ll do some side-by-side comparisons of the experience. That’s what we’ll do over the next two months.

### George Chen:
Your own office is already on trial. You signed up for your own office.

### Audrey Tang:
I did, yeah.

### Audrey Tang:
I just started using it. I was just poking with the settings. I wanted to have this conversation before I bring in others.

### Yujing Guo:
I’ll also set up a multi-company group with you, so I can share all the documents, information, and news with you. If you have any questions, just post there. It’s faster for communications.

### Audrey Tang:
Of course. Thank you so much.

