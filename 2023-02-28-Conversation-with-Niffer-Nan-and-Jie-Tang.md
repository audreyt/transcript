# 2023-02-28 Conversation with Niffer Nan and Jie Tang

### Audrey Tang:
Let's get started. Maybe a short round of introductions.

### Niffer Nan:
My name is Niffer, short for Jennifer, Niffer Nan. My background is in tech. Right now, I advise startups and angel invest. Previously, I was at Asana as the second PM there. 

### Jie Tang:
That's how you know Dave and Rose, right?

### Niffer Nan:
Yeah, that's how I know Dave Bloomin (Braginsky) and Rose Bloomin (Broome). I'm mostly give product, strategy, and fundraising advice for companies now.

### Audrey Tang:
Awesome.

### Jie Tang:
I work at OpenAI. I've been there for about six years or so. I'm doing a lot of work, initially, on reinforcement learning and, nowadays, on optimization large language models, as is the style.

Part of that I was actually in a PhD program at Berkeley working on robotics and machine learning with Pieter Abbeel in his lab. I took a brief detour to work in tech, at startups, Dropbox for about four years. I would say my background has always been in AI machine learning.

Really excited to come talk to you a little bit about what's been happening recently in that space, and hear from you about how you think about it as Digital Minister in Taiwan.

### Niffer Nan:
I should also mention, because my grandma would be thrilled, that we're here in Taiwan because my family's Taiwanese and we're celebrating Grandma's 88th birthday. Mom's side is from Taipei and dad's is from Lukang. 

### Audrey Tang:
About the same age as my grandma, who's also from Lukang.

### Niffer Nan:
Oh, wow. My grandma's from Taipei.

### Audrey Tang:
Awesome.

### Matthew Lien:
我用中文。我是 BlueT，我主要是幫助台灣 community、Linux、open source 相關的東西，我的背景是 data center、cloud、security 相關的，現在被部長徵召過來。

### I-Ting Fang:
我是怡婷，剛剛介紹過，在台灣讀書，然後去美國讀碩士，然後在微軟工作 10 年，中間有做 Bing、也有到倫敦做過 data science，那時買了一間新公司 SwiftKey，就從那邊開始我的 data science 旅程，之後回到西雅圖微軟做 Azure Cognitive Service，在 Azure 下面的一個服務。

兩年前回來台灣，加入一個在日本上市的台灣第一個獨角獸新創公司，是 Appier，是做 data science platform，也是被部長徵召過來，4 月開始應該就是全職在數位部。

### Finjon Kiang:
大家好，我是 Kiang，我主要是程式開發者，過去可能是做一些跟公民科技有關的，跟一般科技人比較不一樣的是，我有走進政治圈一輪，有待過地方政府跟中央單位，部長有提到可以一起參與，未來希望在政府單位跟公民科技結合多一些努力。

### Audrey Tang:
All right. I'm Audrey Tang, digitalminister.tw. [laughs] Really happy to meet with you. Just for the record, our transcripts are co-editable. If there's any intrinsic or whatever that you would like to re-edit after the fact, we're all given 10 days to do so.

### Niffer Nan:
Perfect. Thank you. Helps us relax a little bit.

> (laughter)

### Audrey Tang:
Exactly. We're definitely not live streaming.

> (laughter)

### Audrey Tang:
I had to say that upfront. Go ahead.

### Niffer Nan:
Do you want to start?

### Jie Tang:
Yeah. One topic we'd love to talk to you about is all the recent progress and opportunity that's been created by advances in AI. With language models like ChatGPT, we're finding these crossed some pretty interesting qualitative level into being really useful for a broad range of...

### Audrey Tang:
It just passed the Turing test, not a big deal.

> (laughter)

### Jie Tang:
Part of what I'm excited to talk about is just I feel like one, there's a lot of opportunity for startups. This is not what we're more familiar with as far as investing in new and promising sorts of businesses. There's possible opportunities to engage further in Taiwan and to talk about how these technologies can help spur economic development here.

I think there's also a lot service governments can do on top of these technologies. If you have issues with misinformation, around bias, I think actually these models themselves are quite capable and can augment policymakers trying to address these problems directly.

We're finding that in our own work, internally, it's very useful to be able to turn ChatGPT or internal ChatGPT on the problem as if it were a coworker or assistant.

### Audrey Tang:
Sure. A cool pilot.

### Jie Tang:
Yeah, exactly. That's one area. Happy to talk more about exactly the details of the technologies that I'm most excited about. Also I'll hear from you about what the PC is, the needs and opportunities.

### Niffer Nan:
Yeah. Both: how you think about supporting the AI ecosystem in Taiwan and also if you're thinking about, or how you're thinking about using AI for your own work.

### Audrey Tang:
The National Center of High Speed Computation, the NCHC a few years ago, already invested in Taiwania 2, which is a GPU cluster, specifically designed for AI training. A lot of the local startups are now piggybacking on the open source models such as Bloom and so on.

So that, for example, the National Academy working with MediaTek the National Center for Education Research, they collectively train their Bloom variant which is a foundational model tailored to the traditional Mandarin.

They, I think, just uploaded to HuggingFace a week ago. That's by the collaboration with MediaTek and their startup systems. The NCHC itself with TWCC.ai is also training on a larger, more Q&A-based Bloom derivative.

Because these are open models, the startups do not need to pay a license or anything like that and can more directly participate in the training processes. We've seen many startups that specializes to fill in the gap of the Taiwanese low resource languages, because we've got 20 national languages, including sign language.

For example, if you talk to ChatGPT in Taigi, Hakka, or any of the indigenous languages, then it pretends it's fluent, but it's all wrong. I tried actually the other day I talked to ChatGPT about the Taigi part of MoE Dictionary, and it uses Bopomofo to respond to me...

That's fine if it's in Taiwanese Phonetic Symbols, but ChatGPT doesn't know about that, so it is entirely faking. That's because I guess they did not take into account these low-resource languages when they did primary training.

That's something that the local startups are very eager to help because that will enable, especially the elderly, to access public services without having to speak perfect Mandarin. As most of the seniors are speaking in the mix of their native tongue versus Mandarin.

It has a dual use, in the younger age group because we're now pushing this idea of bilingual environment. Ideally, all the young people can listen or read English. But for them to speak or write in English, that's a distraction. For many of them, they would rather prefer...

### Jie Tang:
Yeah. Including errors, yeah.

### Audrey Tang:
Exactly right. English reading, all of us can do it. If there is a very fluent way for large language models that can serve as a proxy, for us to still think in Taigi, but deliver in perfectly good English, that will also accelerate the realization of the bilingual environment idea.

For the elderly to keep speaking Taigi and for the younger to naturally speak English, that's what the startups are doing.

### Jie Tang:
That makes a lot of sense. It makes total sense the approach that you're describing. I feel like low-resource languages in particular seemed a great way of increasing the accessibility of these models broadly. I wanted to also say that I'm really curious what's going to happen as you get these really fluent models, they keep improving and the fluency improves.

What does the world look where I can just perfectly communicate with anyone else? Does that sort of break down barriers or make it easier to think more commonly about what's good for the world? Seems a very exciting sort of direction in time.

I think that one maybe tension that exists still today and still being figured out, is you have these open source models that are public, free, and unencumbered. You have the APIs that are providing other startups or trying to provide as well where I think we're trying to behave in a way that allows benefits of these technologies to be broadly and widely distributed.

Though we feel we need to have some element of control over the uses of that platform that we lack if everything that we did was fully open. That's probably going to continue to be the case for the foreseeable future. We're going to keep improving the ChatGPT suite of models.

Likewise, I think the open source community is going to keep developing it.

### Audrey Tang:
GPT 2 is open source, is it?

### Jie Tang:
Mm-hmm.

### Audrey Tang:
It's the ideal software thing. You released a previous version. Is there anything that prevents you from open source and ChatGPT that's 3.5?

### Jie Tang:
Yeah. Again, it's this core tension I was alluding to. It's like when we first released GPT 3, there were people using the APIs for use cases that we didn't like... It was CSAM type things, and want to retain the ability to control and block usage of these things.

Also, from a general AI safety perspective it seems prudent to retain that sort of control there. Maybe if we're really confident that a model is not going to be dangerous or be destabilizing, then it's fine at some point to release it in a totally open way. We want to be cautious and thoughtful about staging that and how we release it.

You can imagine, I'm not speaking for OpenAI, this is my own personal perception.

### Niffer Nan:
In general, not speaking for OpenAI.

### Jie Tang:
Should make that clear in the very beginning. You can imagine a world where older models become open sourced gradually, and while the newest and most of them capable, both most capable, but also most potentially dangerous model is under API access.

### Niffer Nan:
If you're thinking about how to train a model, what kind of data sources to use, if you use everything on the Internet, there's a lot of trash on the Internet, but is it truthful? Then you might think trash in, trash out.

I've been playing around with GPT, and pushing it in a few ways. One thing I really like was that they're really thoughtful about gender pronouns. For example I asked, "Sally and Susie are making a cake. Sally is pregnant. What is the gender of Sally?"

They said, "Based on this information, we actually can't tell the gender of Sally." "Even though Sally is pregnant?" "Yes, people of different gender identities can be pregnant." Oh that's actually really thoughtful.

### Audrey Tang:
Because we have the Kenyan teachers to think of, right?

### Niffer Nan:
Exactly.

### Audrey Tang:
Instructed.

### Niffer Nan:
I tried to push them in different ways, try to have them say something inappropriate and actually it was it was pretty thoughtful. I could see how if you don't have these guardrails, then nope. It could actually cause some worse outcomes.

### Jie Tang:
To add on that a little bit, ChatGPT, maybe the success of it caught by surprise a little bit. It was released as a research preview. It was intended to gather some information about how people would interact with these systems.

One thing we're finding is that, a big difference from the 3.5 models that are available to the API have been available for a while. ChatGPT is a sort of additional human feedback, fine tuning. It seems to be very important for making it a usable and effective dialogue agent.

That is actually maybe one of the more hopeful things that we have a way of trying to start eliciting human values and preferences and trying to embed them into these very powerful kind of AI models. In order to somewhat make sure it's kind of not completely uncontrolled, but both useful and more like it seems these things can go together in a good way.

### Audrey Tang:
If it's not aligned, it's not as useful as what we've seen, especially now, given people's expectation of ChatGPT people are going to help, for example, cross-training new models to the same alignment standards, which itself haven't met yet, but hopefully soon.

### Jie Tang:
Yeah, definitely. Curious your thoughts on this actually. I feel that's one thing we're trying to encourage is this sort of race to the top of all models ought to be very well-aligned. The more we encourage that by hopefully setting a high water mark from capability side along with the alignment side.

We really want it to stick I guess. I'm curious if you have your thoughts on ways to make that?

### Audrey Tang:
That's precisely what I mean. It's the ChatGPT in its current generation, although it's not directly optimizing the supervision for the alignment for future AIs. It nevertheless, through the symbiotic relationship with the research and general citizens' community has already raised the norms.

While it's not yet at a code of conduct or regulation-making level, it is already at a norm-shaping level. When is at a norm-shaping level, the market will punish any new chats that's not meeting this social norm as long as ChatGPT keep operating and we keep paying $20 a month to get this norm going.

This is already quite democratic to begin with. I'm just curious as a social enterprise, whether the OpenAI Foundation, the conscience of the OpenAI company thinks about also funding the startups that explores in addition to the applications in a social commercial way.

Whether you're also considering funding things that more directly uses ChatGPT as a kind of norm shaping agent for the future alignment expectations, for pedagogical purposes for example.

### Jie Tang:
Yeah, that's really interesting though. we haven't thought about that much yet, but I see no reason why we wouldn't. It seems like a really good thing potentially do. I think maybe one thing that is new and interesting about the world we find ourselves in, I actually feel all sorts of startups that we do some investing.

There are all sorts of startups that are not on the face of them AI native or AI adjacent that are finding really good ways of using ChatGPT, of using these advanced language models. There's one company that we worked with that does salary range and price transparency and trying to work with some of the new California laws that mandate that.

They found a lot of success using these sorts of large language models. Arbitrary web data taken as input, natural language prose, about jobs. You have ChatGPT extract information like what's the actual pay, what's the title? Do these sorts of complex normalizations.

### Niffer Nan:
You wouldn't think an HR tool that focuses on pay equity would have a use for AI, but it does. The point is there are lots of surprising applications of AI.

### Jie Tang:
The kind of thing you're describing definitely makes sense as something that might have been recently enabled and that's very interesting to look at it and think about right now.

### Audrey Tang:
In the MODA, which is really new, we're like a startup. Last August when we first found I asked E Team and my colleagues to work on data altruism think common voice. I don't know whether you're familiar.

It's people voluntarily with the Mozilla Foundation to donate speech segments that corresponds to certain prompts, and then also voluntarily rate the speeches that others contributed for quality.

The end result is that for Taigi and other low resource languages, we have pretty good parallel corpus that can produce better, as our end speech for it. All of this is critical in g0v and so on. Community that we're owing g0v actually created a specific channel, the rand0m channel.

The rand0m channel where the channel topics as anything you type here will contribute to CC zero for common voice training. We were encouraged to type very weird sentences that will not be covered by the usual training material in order to collect local tonalities, the local idiosyncrasies of those expressions and so on.

That's a case of algorithm where people voluntarily donate data snippets at no expectation of financial reward, but understanding that their dedications will actually result in meaningful public good for their language communities. That's called data altruism.

I'm not exactly sure whether OpenAI thinks of this more participatory instead of supervisory role of the government. It's because we see ourselves in the MODA not as a supervising body that belongs to some other ministries.

We are more like a coaching body that merges the community expectations on one side in the participating way, and the safety expectations on the government or bureaucratic side perfuse them together so that they work with the progress instead of inhibits the progress.

In the progress participation safety triangle, we're definitely starting from this side but helping progress, not contributing progress.

### Niffer Nan:
It's the idea that you try to minimize the amount of rules and instead have guide rails that lead to good results."

### Audrey Tang:
Yeah. The idea is to create new norms that everybody find that those privacy-preserving or privacy-enhancing ways of doing is superior to the old ways of doing things. Like scanning a QR code that tells the venue everything about you versus scanning a QR code for contact tracing that tells the venue nothing about you.

Of course people use this later thing, right? Then within a week or so, nobody used the old way anymore. The old way is considered privacy invasive. Prior to the introduction of one two SMS by the g0v community, people thought this is somewhat tolerable, right? This is the kind of the work that we do.

### Niffer Nan:
I'm curious to hear more about your philosophy on that. Because coming from the private sector, lots of different companies have different leadership philosophies.

A lot of companies are very tops down. At my last company, Asana, it was much more bottoms up. At a lot of successful companies, what they do is focus on providing high level goals to get people running in the right direction, and some minimal guide rails to make sure people don't go totally sideways, and they'll let people use their wisdom and their genius to get good results.

I'm curious with your approach, is it similar? I hear the minimal guiderails, but do you also have goals that you set out to try to achieve?

### Audrey Tang:
Yeah. As I mentioned in the trilemma, the ideas of safety participation and innovation the safety part is usually at odds with progress. We just talk about alignment, which is this classical dilemma thing.

Or for contact tracing public health there's, again, this dilemma thing, right? Do you sacrifice your privacy or do you sacrifice your health? it's a very flat way to put it.

Through participation, we can actually ask people closest to the pain, that is to say, the people who actually write new code for the venues to keep track of their visitors for privacy-enhancing ways for better norms. Increasing the speed of this iteration allows us to see past this false progress safety dilemma.

What we're doing essentially is asking the people who already are very well connected in a participatory culture, instead of to come up with all the solutions by themselves, [laughs] to tap into their community to see whether they have better norm to solve the progress-safety dilemma to increase the overlap of the three communities.

Our main target, if there is a target, is just to create meaningful overlaps because, without those meaningful overlaps, that dilemma feeds into this polarizing topic.

Then we've got, for example, Professor Shoshana Zuboff arguing that surveillance capitalism on one side and democratic culture on the other side, only one would survive. [laughs] It's a death match. That's her words. I'm inviting her to my podcast, by the way.

> (laughter)

### Audrey Tang:
The podcast is run by the TalentPlus. I'm also a regular guest. Anyway, the point is to look at a dilemma, admit that there is a dilemma, but through the participatory nature to find a way to overcome that.

### Niffer Nan:
This idea here that you get people who are closest to the problem to overcome this progressive dilemma, because they have the most context to do so.

### Audrey Tang:
Yeah, just ask the people from the future because they've already solved it.

> (laughter)

### Audrey Tang:
It's just not evenly distributed. [laughs]

### Jie Tang:
The thing I would say is I broadly agree with you that this is an important thing to be able to tap on the innovative capacity of the wider world. It's why we're investing so heavily in things like the platform approach, trying to make the models available as widely as possible.

There seems to be a lot of pro-social uses of AI, a lot of uses that we're not going to be able to get to. We're putting as few restrictions as we can and trying to nurture a robust ecosystem around our APIs. Hopefully, setting norms that make it easier for other companies that are building similar products and tools to do the same.

A really important part of what we're trying to do, going back to the nonprofit mission statement and trying to make the benefits of AI broadly and widely distributed. This is a clear, well aligned with that, and a direct mechanism by which we can try to achieve that.

One thing that maybe in some circles as well is that from the safety side, we're much more concerned about ways in which you can go through some doors that you can't go back the other way from. Making it more open then is good earlier is something we think about very carefully as a thing that guides our decision-making.

### Niffer Nan:
Because once you open things up, it's very hard to bring things back in.

### Jie Tang:
In certain things, yeah, exactly.

### Niffer Nan:
Pandora's box, right?

### Audrey Tang:
We all know that...

> (laughter)

### Audrey Tang:
We've got our share of premature open-sourcing things. [laughs]

### Jie Tang:
That's maybe the tension again that we're trying to navigate around. I do think that the thought of trying to find solutions that in your words like the zero-knowledge contact tracing thing seems like a very elegant way where you don't actually really lose much. It seems really good. Maybe this innovation might happen on the platform levels.

I imagine multiple different model platforms with norms that shape how they make their offerings. That'd be one way in which again the dynamics are such that you're incentivized to adopt any mechanism like this that other providers are doing and maybe, as open AI, we can strive to be the ones promulgating these things widely.

### Audrey Tang:
Soon, later this year, we will probably have the Bloom derivatives combined with the human feedback of the low-resource language communities. We will probably work together to make sure that it fits the local norms, and not just a local linguistic norms, but also local cultural norms.

One very pertinent question is then how do we contribute back in a semi-federated learning way because while it's very easy to fork language models, how to merge is an open problem.

### Jie Tang:
Yeah, indeed.

### Audrey Tang:
The kind of norms that you up upload for ChatGPT and later GPT models provably works really well on high resource languages. It provably doesn't work on low resource languages. How to enhance the kind of ethics standards for low resource languages if we already have in the downstream, a working model. That is also something that's very much worth thinking about.

### Jie Tang:
Yeah, definitely. Off the top of my head, one thing that if the data is available in public, that is a really good first step, having high quality data sets for these low resource languages, make it very easy for organizations like OpenAI and others to incorporate it.

I think it was... Where was I going this? Oh, one thing that seems actually pretty nice about the world we live in is that as the models are scaling up and getting more capabilities, they seem to not require much more data to do the fine tuning well.

For example, with 3.5, they're reinforcing from human feedback. It gets things really quickly. That means that there's hope even for low resource languages, even if you don't have a lot of it. As we continue to scale up and improve capabilities maybe we can just make it work.

If we're lucky for the world, I think it's possible to have those things go well.

### Audrey Tang:
Just to check my understand, you're referring to the fact that given a higher amount of context window, it is possible to have this kind of core curriculum where the same large language model, before it goes in search, Bing, or whatever. Always search prime itself on a local cultural expectation as part of the conversation?

### Jie Tang:
Oh, I actually wasn't thinking about that detailed of a level. I think orthogonal to context length or other features of the models. I was making a point something that low-resource languages do not have that much data, but as the models are scaling up the base models, the pre-trained models, they seem to require less data to get good at...

### Audrey Tang:
Yeah, but that's the linguistic fine tune. What I'm trying to say is around the cultural or norm shaping fine tune. Because currently...

### Audrey Tang:
...has a set of norms. That set of norms, by the way, is considered very problematic by authoritarian regimes, right?

### Jie Tang:
Very good point.

### Audrey Tang:
Still there's some jurisdictions that would much prefer to introduce ChatGPT in a way that is not entirely opposite to the ChatGPT norm, but yet specialized on the local norms.

### Jie Tang:
That's a really good point actually. It's something we're actively thinking about. Maybe can't talk about because it's leading too much into future things that we're are doing, but I do think it's something we want to enable is exactly...

### Audrey Tang:
Cultural sensitivity things.

### Jie Tang:
...describing things. Exactly. Yeah. That might be different from having one base model that's usable by everyone for every purpose probably isn't in the cards. Another reason why the API approach or something we're connected to and investing it.

### Audrey Tang:
We're on the same page. Anything from you folks? Mandarin is fine too.

> (laughter)

### I-Ting Fang:
Curious about the safety side of thing. A lot of bias and unethical outcomes are usually found training AI data itself. Is there anything special you need, or the OpenAI did to prevent this?

In the baseline model we use unsupervised learning or just the Internet content, but for the chatgpt side, we introduce the human labeler. How do we make sure this part is part of the known?

### Jie Tang:
It's a really good question. The answer right now is just being very careful about that second part of the process. We know it's not perfect and you can definitely cause ChatGPT to say certain things if you're pressing at it. It's clearly not perfect.

A lot of it probably comes from what you're just describing, like the data is the wide Internet and it's totally unsupervised. I think that it does seem to be the case that the human feedback, RLHF, post-processing does a pretty good job at preventing really obvious sorts of abuses.

We're just going to have to be tightening that up as we go, as we put stuff out there. See the ways that people are trying to exploit it. You can feed those examples back into the whole data generation gathering process to make your models more and more aligned and hopefully useful over time.

### Niffer Nan:
From the feedback you guys got so far from the data version, I check you found the user feedback. Did you already receive some...?

### I-Ting Fang:
Yeah. There's the like and dislike that we press. Does it actually have an effect?

### Jie Tang:
Yeah, it definitely has an effect. I talk about exactly the like and unlike...

### I-Ting Fang:
You already received a warning sign of the safety issue from the feedback.

### Jie Tang:
Oh, yeah. That's actually been super useful. People will flag and say things that are quite descriptive about here's a long paragraph about why this particular thing was problematic. I think that is going to be a very valuable channel for us going forward.

We're super excited about the possibilities of having a sort of virtuous loop there, where we continue to make the models better and more aligned as more people use it. I do think it's an interesting area for active research. Also, finding ways of maybe gaining confidence, maybe guarantees around what things models will and will not.

### I-Ting Fang:
For the ethical side of things, do you think the government could play any roles?

### Niffer Nan:
We actually wanted to ask _you_ this.

> (laughter)

### Audrey Tang:
I already explained the moda's role, right? Which is to build bridges and to actively coach bridge making algorithms. Actually that's the plurality institute's work, is exactly that. In Twitter for example, for the community networks to be truly useful, you require tons of real-time feedback to surface of the polarizing narratives.

What are the bridging narratives that can really convince people of very different ideologies? This measurement of bipartisanship is currently useful when there's a lot of people participating in the collective intelligence.

On the other hand, with the help of large language models, maybe it is possible to simply interpolate in the opinion space. The kind of rigid narratives given only a few shot examples of the splitting ideologies, narratives that to say trolls on both sides as inputs, and magically a bridging narrative that can make the trolls live with this thing as output.

This process we've thought about it with the computational democracy folks for many years now leading on the 2015 use of pol.is all the way to the committee notes of today.

We're now pretty sure that the so called augmented collective intelligence, or ACI, is theoretically quite a fruitful path. A lot of our work is going to be on the more kind of pro-social use side to help this kind of innovations to get not just government funding, but also in Taiwan we've got many startups that focus on this sort of thing.

For example, Whoscall, which is a collective intelligence project that let people report unsolicited calls. Once people report that, then the next call to everybody else is more so you will not pick it up.

Then Whoscall, who is the other unicorn, right? That also went to Japan. That's another issue for another day. HUSCO then branched into the disinformation space. They work with a acquaintance of ours to call the team of maybe who basically you can invite to your chat groups on end to end encrypted channels like LINE.

Then there's a kind of virus scan of each and every message, but not just computer virus or phish, but also mind virus, which is to say information manipulation.

That was called would work with g0v, Cofacts, and many other communities to assess what kind of disinformation is now going most viral, and therefore subject to be the input for this real time fact finding bridging narrative algorithm.

Because currently this is not automated by LLM. This is a bunch of dedicated journalist, like Taiwan FactCheck Center and MyGoPen. Once we know this virus variants are going viral, it's now worse. They're trying to do bridging narratives. This only has a basic reproduction number of below one, then it just dies down by itself.

At any given point, the social media in Taiwan for that mental bandwidth only allows for maybe two or three truly viral disinformation at the same time.

Which means that with a good dashboard, the fact-checkers can just focus on these things and then we can actually help them to quicker see the trend to synthesize the bridging narratives and to promote a pro-social democratic conversation around the methods instead of the lore, the hallucinations, by the collective intelligence.

Basically, I'm using the vocabulary exactly like alignment for AI, but for CI. [laughs] Collective intelligence can be augmented in such a way as to automatically promoted a pro-social conversation.

### Jie Tang:
It seems super fascinating. It's such a wonderful project as you're describing it. I guess a couple of questions. Can humans do this well? Is it possible to intercept a newly viral narrative and to maybe disperse it in a way that causes it to be pro-social? It has been...

### Audrey Tang:
We do have the LINE company itself collaborating with this whole ecosystem. Anytime we can just long-tap a message and say, "I think this is probably a virus." [laughs] It provides a real-time dashboard, and there're Cofacts people also triage it. I like this, what is that what you're sending because it's quite transparent.

The Cofacts people are not a cabal. Anyone can join their meet ups, and so on. It's more Wikipedia-like than it is court-like — because we have juries now too in Taiwan. [laughs] This is not a substitute of professional judge with juries. This is collective intelligence serving as a contextualizing layer.

### Jie Tang:
It's not like a government body either.

### Audrey Tang:
No.

### Jie Tang:
Something not really, like in US, people will be very concerned about a government...

### Audrey Tang:
A disinformation oversight board. [laughs]

### Jie Tang:
Yeah, that's very cool. I guess you're saying about how it's possible to track this stuff and see these trends, which makes a lot of sense. Are these volunteers also going in and are you injecting additional messaging or other things so that people, as they're being exposed to it, is that like the Twitter warning?

### Audrey Tang:
Yeah, it is exactly like committee notes. So far as I understand that the Kofax people are now learning from the community notes. The committee notes has these guidelines of how to write a community note.

They're now having a conversation just a few days ago on g0v channels about how to incorporate something like this prompt engineering to their collective intelligence.

### Jie Tang:
Yeah. Very cool.

### Niffer Nan:
One thing I'm curious about is, it sounds like a lot of your work is around building or supporting tools that are pro-social. How much work do you do around supporting good legislation to support advanced technologies, and have you seen this working well in Taiwan or in other societies?

One of the things that we are personally a little bit worried about is the rate of change for these advanced technologies is so fast. How do we make sure that the government is supporting the technology in a good way?

### Audrey Tang:
You mean legislation in a sense of promoting pro-social behavior by the private sector, or what? Because legislation is a very wide canvas.

### Jie Tang:
It might be very close to an area that I'm not super well-versed on or I want to go super deep on, but are you asking about just policy...?

### Niffer Nan:
I think that safety and alignment will be important in the future, and more generally, ensuring that outcomes are good for society. We could just rely on the private sector to do the right thing, but government could play a important role either by providing guide rails or funding innovation here. I'm just curious if you do that kind of work.

### Audrey Tang:
It's easier if we speak in examples. Around 2017, and correct me if I'm wrong, a bunch of people really wanted Facebook to release closer to election, which of those sponsored advertisement or bypass fact-checking came from external sources, foreign sources.

The de-norm here is that judges sensing the political contributions should be opened, but the technology that enable it to be open was lagging behind the times.

It required people to physically walk into the Control Yuan and take Xerox copies with watermarks on it for the previous election's campaign donation expense reports. The g0v people worked with very advanced OCR called Otaku Character Recognition chat collective intelligence to...

> (laughter)

### Audrey Tang:
It's true. It really happened. To solve the CAPTCHAs where each capture is one single cell in the Xerox copy of the Control Yuan. That movement went really popular, 2015, '15 to '17. Then people, of course, now have people's copy of the expenses in the campaign. Then, of course, the Control Yuan said you cannot be sure that your OCR is 100 percent correct.

To which the people said, "So maybe you should release us all the data, your records," which they eventually did. Then, in 2018, people saw for the first time from the open Control Yuan that none of those social media advertisement campaigns were filed as political expense. It's circumventing this whole sunshine laws. This created an enormous backlash against Facebook.

Without passing a new law, the civil society and so what basically forced Facebook and other large platforms to sign on the self-regulation report that PTT signed the first that is a domestic Reddit open source and all. [laughs]

Facebook for the next election, the 2020 election, they released in real-time at least as transparent as Control Yuan and more real-time all the campaign donations and they forbid outside jurisdiction contributions exactly as our campaign donation law forbids the donations outside of our jurisdiction.

This is what I call a people-first PPP, that is to say, the social sector sets the norm. Then the public sector, our work, is just to amplify the norm because trade negotiation is easier if the citizen are on your side. [laughs]

Then, without passing a draconian top-down law, the Facebook just, I would say, caved in. According to an ex-member of their civic integrity team, they only do so in jurisdictions like Taiwan where there is a real social sanction.

### Niffer Nan:
What you're describing is more of a hand-off bottoms-up approach, which can work really well. I guess the thing that I'm worried about is, I don't know if you saw a few years ago when there were congressional hearings of Mark Zuckerberg?

### Audrey Tang:
Yeah, I did.

### Niffer Nan:
It's pretty clear in the US many legislators really aren't tech savvy. We were actually recently talking to a state legislator who we really respect and ask them why this is. At least in the US many legislators don't have a math and science background, so understanding tech can be harder.

On top of that, the rate of change for tech is so fast compared to other sectors, that it can be hard to keep up. I think that in order to make good legislation, or the right amount of minimal legislation, or no legislation, it requires a level of comfort and expertise in the area to be able to do so. 

I think in Taiwan there is a lot more math and science background in legislators. Your president, has a background in physics and chemistry, right? It's incredible. 

I'm curious, have you seen examples of how this can work well?

### Audrey Tang:
Our president's background is in trade negotiations, which is why I always frame all these topics as trade negotiation language, as serving as a LLM before she could understand. Anyway, I think really you touched upon a really important point.

If the legislators think in the metaphors that they can internalize and understand whatever their original background is, then the issues become much easier to solve because they can bring their wisdoms there and tap into their constituents.

Again, we're back to a cultural translation problem, something that OpenAI can help to ensure that you find the right metaphors that actually can survive close scrutiny. That will then enable the legislator to frame this issue in a way that they can understand.

### Niffer Nan:
Is that what you've seen be successful with your own experience or...?

### Audrey Tang:
Yeah, definitely. Hopefully with the new vein, people will use it more.

### Niffer Nan:
I really like the idea of using metaphors that the legislators can understand. Do you think there's also more cultural similarity with the legislators? I just don't know what the makeup of your legislatures are, whether they have more math and science proficiency.

### Audrey Tang:
A couple of things. One is that specifically for the trolls and disinformation we just talked about, we deliberately used a epidemiology metaphor. We talk about the basic reproduction number...

### Audrey Tang:
The basic reproduction number of the mind virus. Of the contact tracing, quarantine, vaccination, and cure. These things are...

### Niffer Nan:
They understood.

### Audrey Tang:
Yeah. This entire very strange and alien vocabulary is, intimately familiar to everyone in Taiwan in the past three years. It taps into a collective crisis that we have with common urgency overcame together. This is a narrative of triumph, at least in Taiwan.

Of course that narrative has many other metaphors that when stretched, breaks down. For the disinformation crisis in particular, if you take other metaphors for example, a coercion battlefield metaphor that will naturally lead to takedown orders, and things like that, then it breaks down sooner.

So that the end goal using augmented collective intelligence tools is not to produce metaphors that are 100 percent good. It just needs to be better than the previous metaphor that leads to social norm. That's all we need for the social norm out there.

### Jie Tang:
I want to say I think the stories are super inspiring when I tell of being able to both start from a grassroots level and put this kind of pressure on big corporations to be more transparent, open about, especially if their election spending.

Maybe the one lesson here is the legislatures are ultimately, hopefully you hope are accountable to the people they represent. They're finding good ways of speaking to the people is how you...

### Niffer Nan:
The local dialect right there.

### Audrey Tang:
Yeah. A local dialect... of legalese.

### Matthew Lien:
Today I learned.

> (laughter)

### Audrey Tang:
A credible outside game is very important when it comes to social sanction. When we are working to produce new narratives, new norms, and new metaphors that counters the odd ones that simply didn't fit the reality. There are people on the civil society side who are political organizers, that plays the outside game.

Without a credible outside game, people often, just for example -- I don't want to use US examples -- in certain jurisdictions, the social movements for social justice, equity, and so on did not actually produce meaningful forks that can actually solve at least a segment of the governance issues around those common topics.

Basically they amass counter power, but not communication power. The thing with g0v is that by playing the outside game, the g0v participants also produce working prototypes that provably works better than the government alternative. We call it forking the government.

That's, I think, the crucial difference between Taiwan and other jurisdictions.

### Niffer Nan:
Do you have examples of other countries that have been successful here? I think it was either maybe an article or an interview that you did where you mentioned the thing that's interesting about Taiwan is democracy and the Internet came at same time.

### Audrey Tang:
It's the same group of people.

### Niffer Nan:
It's more tightly bound. I wonder for other countries where there isn't that fortuitous timing...are we doomed? We're not. We're not doomed.

> (laughter)

### Niffer Nan:
This seems more challenging.

### Audrey Tang:
I think that the Taiwanese situation is particularly interesting because the security demands for the people working on participation in innovation, there's no dispute.

When I talk to these people that we need to communicate to the outside world when our submarine cables are cut by earthquakes or fishing vessels, this is not something that we say, "Oh, maybe it's hypothetical. Maybe the government use this as excuse," because our submarine cables are being cut.

### Niffer Nan:
If there are high security risks, then the requirement for government to be competent is higher.

### Audrey Tang:
Exactly. The civic capacity and the state capacity in this particular case, do not dispute over whether public defense it's a public good. Of course, it's a public good. In the US and in other jurisdictions that's not Taiwan/New Zealand, we see for example in the pandemic times, that whether contact tracing is a public good they can spend two years to debate that.

No contact tracing solutions, even how privacy preserving can be given the opportunity to shine. Because whether it's a public good or not is a kind of value based question that is still resolving in a society.

### Niffer Nan:
Similar with Israel. Constant existential risk.

### Audrey Tang:
Exactly, for us...

### Jie Tang:
...COVID, they're used to dealing with threats all the time.

### Audrey Tang:
Exactly. It's as you said, quite fortunate for Taiwan to serve as a kind of a lab for this kind of research in augment to collective intelligence. On the other hand though, the products of our experiments are readily reusable. It's not doomed, right? Just as it costs a lot to do the training for the base model.

Once you train the base model, everybody can use the API with some prompt engineering. Again, I think what we need to figure out here a kind of accord, like the Paris Accord, that people can sign up on and that's what the Plurality Institute is trying to do.

### Jie Tang:
Yeah, I like that. You run the experiment once and then you can share the results broadly.

### Niffer Nan:
Yeah. Very scalable.

### Jie Tang:
I guess the conditions are right. You can apply the same edits. The distribution shifts too much maybe have to do some work again...

### Audrey Tang:
Then you'll have to find some other topic that is not pandemic or infodemic that has the same clarity and urgency. You'll find that topic then you will be able to do the same dynamic.

### Niffer Nan:
What you're saying is if the training data is similar enough, then you can reapply it, right?

### Audrey Tang:
Yeah. Exactly.


### Audrey Tang:
The pandemic or infodemic issues has nothing really similar to the original issues we designed post application to solve in 2015. At the time, it was solving Uber, Airbnb, and so on, which has completely different stakeholder configurations.

### Niffer Nan:
That's right.

### Audrey Tang:
Still, the algorithms and the general norm-shaping idea still carry to this day.

### Jie Tang:
Just curious, is there anything else that you think we ought have to asked for or talked about or easier to breach in?

### Audrey Tang:
Can we, as I mentioned, work in a more working level with openAI in the future when it comes to two things we talked about? One is the low-resource languages and the incorporation of those local norms into a kind of tuning cultural layer thing with openAI. That's very close to our work in the following year. That's one.

The other is this translating for the legalese of legislators.

> (laughter)

### Audrey Tang:
The idea is finding bridging narratives automagically. Then, for the collective intelligence, it could just... It's more like producing multiple labels of vaccines and you choose which vaccine you would like.

> (laughter)

### Audrey Tang:
In Taiwan, we don't have a political faction for anti-vax because we, through open data and open participation, turned that dynamic into a competition of "my vaccine is better than your vaccine."

> (laughter)

### Audrey Tang:
Everybody gets vaccinated, and for each person, some vaccines may be strongly preferred, and some vaccines are "like water..."

> (laughter)

### Audrey Tang:
...according to the people who have strong preferences. Changing this vax/anti-vax narrative, like progress/anti-progress, AI/anti-AI, whatever, into, "but these are the four vaccines that you can subscribe to," this is actually an active area of pro-social norm-making research that I was very curious whether OpenAI would be interested to support.

### Niffer Nan:
Great. Thank you so much for your time.

### Audrey Tang:
Thank you.

### Niffer Nan:
Really nice meeting you.

### Niffer Nan:
Do you mind if we take a photo?

> (laughter)

### Audrey Tang:
We just took a film together...

> (laughter)

### Audrey Tang:
...but a photo is fine too.

### Niffer Nan:
Thanks a lot. Thank you.

