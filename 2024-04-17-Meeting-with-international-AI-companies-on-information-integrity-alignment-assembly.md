# 2024-04-17 Meeting with international AI companies on information integrity alignment assembly

### Audrey Tang:

Thank you all for attending today's meeting, as part of the alignment assembly on information integrity.

This is actually the multi stakeholder meeting part of the alignment assembly. And we welcome representatives from Meta from Google, from Microsoft, and from OpenAI to participate in this meeting.

This meeting has two focuses: First, I will briefly share with you the international industry leaders on how our deliberation has been doing and the consensus of the Taiwanese population or a microcosm of our population has information integrity, so we can focus on the commitments that they collectively want. And the second is that I would like to welcome you to join our pilot program for our AI Evaluation Center (AIEC), the language models that you develop.

So just two things we're going to talk about today. As you know, that Taiwanese AI ecosystem, the talent cultivation, the technology advancements, and all of these are a part of the work of the ministry of digital affairs, as well as the administration for digital industries.

Underneath all of this is the AI evaluation system so that we can establish standards and application guidelines to ensure that the AI is trustworthy. Now, as you may also know, in addition to more than 300 startups with more than 10,000 employees, and that's only counting the ones with good rank AI applications most like a downstream or was that already powered by them. These are built upon the foundations of the enterprise This is that produces the sauce tools, and of course also the AI chip and hardware.

Now we see this as the foundation of our AI evaluation and certification system works on both the systems and the products that are listed there in so that we can ensure that the startups creates systems and products that are fitting of the people's expectation. And so in order to do this, we're setting up a two tiered system. What we are meeting today is determined by the steering committee guiding the AI Evaluation Center. So AIEC will later half of this year. Make sure that we specify the eval or evaluation items for an AI evaluation institution, which will also guide the development of the tools based on those assessment items for the AI evaluation tool development lab.

That's our picture on the right and together they will inform the setup of first a pilot by ourselves was also in the private sector, AI testing laboratories that would then apply those tools and provide a testing reports to the system that are being tested in those labs. So it is a two tiered system. Now as for the items to be assessed, we basically took a union of the NIST the ISO, the EU and also some of the MITRE ATLAS to ensure that we can automatically evaluates those our picture on the left with bright green, bright blue ones that can be technically done, kind of automatically, and they're also the ones that need societal input or additional review by experts.

And these are the ones that were holding those assemblies on so that we can know what kind of definitions on integrity for example, that this society wants that we can include in further society evaluations. For the ones that can be automatically tested. This is just one very short example. So all of you, of course, have your AI models and some of them have like multi turn conversation capabilities. And so by offering us either API endpoint, some of you have research or the access program that can evaluate before deployment is that what we will hook it to the testing tool Web UI, and then select the category the risk level and the application and they will load the results.

This is just one quick example to ensure accuracy, our translation tasks so that we would have the prompt translate the following sentence to the zh-tw meaning Taiwanese Mandarin, please give me some potato and then it should respond with something like 請給我一些馬鈴薯 instead of 土豆 or something else right? So and then we will provide with you the reports, the automatically research reports that will let you then gauge whether you're this revision of your model has regressed or has advanced the issues that people care about the test sets. And so for this particular test, we use the Taiwan official vocabulary and commonly used term and traditional Mandarin as the one and this is the test sets that we will share a sample with you and we'll keep the rest for the evaluation purposes. Now here is a brief roadmap.

So you're all welcome now on the left column to pilot partnership with AIEC, so if you have models that are already there, like if you have actually open weights models, we don't actually need your permission, we can just do this ourselves, but we really prefer if we can enter in some sort of a agreement so that you as you release models, or as you prepare your models for a release we can run this initial evaluations of language models are our classification tasks with image models, so that we ensure a continuous relationship so you can also learn whether your Frontier models have regressed or progressed.

By next year, we will extend it to object detection models and also make sure that our events meet international standards such as the ones that are established by the AISI in the US and also in the UK and also EU and so at that will extend to audio generative video and for multimodal evaluation in the follow eds. All the while starting next year, we will also provide private testing laboratories using the same risk management framework.

So before I proceed to the alignment assemblies, do you have any questions or any feedback on the roadmap of evaluation or the idea of AIEC that I've presented so far? Please feel free to raise your hand or simply unmute to speak okay, if everyone is okay with that today, let's proceed to the main discussion agenda for today. So, let me briefly Oh, we have live from Max. Max, would you like to say something?

### Meta_Max Chen:
Oh, actually, I have a question since the inception of the AIEC that we joined the opening last December I think. What I would believe that one of, as you just put an example there... It's like focusing on the translation language accuracy. Are there going to be any standards that are going to be driven by the AIEC for Taiwan? Or is AIEC going to collaborate with other countries and jurisdictions in terms of AI assessment models?

### Audrey Tang:
And this is an excellent question.

Indeed, as you can see, our particular accuracy criteria is the only one that is not found in a list AR MF 1.0. So that is somewhat domestic. So AIEC actually has a webpage that is in English now. So I think Timmy has posted in the chat. So feel free to open and check it for yourself, but for the other ones, including safe explain where recently affair and so on and so forth.

We have already visited NIST. To implement the AI RMF, they established at AI Safety Institute (AISI) at NIST AISI in the US, and we have already had a working relationship with this AISI; the NIST director have visited us here, I have visited her there and we're now in continuous workstreams.

And also, we work quite closely with the leading institutes domestically in Taiwan. So that's the ITRI and that's the NICS and those two together will also ensure for example, for the secure part, the cybersecurity related issues, then NICS already has capabilities related to cybersecurity evaluations. And for that will we will also work with ISO and MITRE and so on.

So, the short response to your question is yes, while the accuracy one is somewhat domestic the other one is working relationship with international counterparts, which is why in the slide, we say doubts by next year, we fully expect our emails meet international standards and if they also accept our contributions of our emails that that will also contribute to their for example accuracy evaluation criteria of this answer your question, Max.

Okay, great. And we see OpenAI online. Hello. Would you like to say hi to the rest of us so that we know your microphones? Right?

### OpenAI_Teddy Lee:
Sure. Hi, everyone. My name is Teddy Lee. I'm a member of the OpenAI team. Great to be here. 

### Audrey Tang:
It's just fine. So welcome. So now, if there's no further questions, either from here or from remotes, let's get to the main discussion topic, which is alignment assemblies. Now, alignment assemblies is a project that we jointly launched with the CIP collective intelligence project last year during the summit for democracy in March, and we're official partner and the goal of alignment assembly, in short, is that because AI affects everyone decisions about AI and the input from everyone, and we work with deliberative technologies, such as, as you see here delivered workshops that combined the online portion was polis and the face to face portion was facilitated conversation in Taipei and Tainan so which is what we have done last year, and it co-created a constitutional documents for our TAIDE training, and you can actually already downloaded the pilot model from the hugging face.

And so this direct democratic input has the ability to not just educate the public about how to instruction tune how to alignment tune a language model, but also let people have a say, in tuning those models. And, in addition to the ideas on alignment assemblies are the future of AI, which was last year. This year, we focus on something called information integrity. As some of you know, many leading countries have joined together and sign the global declaration, information integrity online, which is defined as an information ecosystem that produces accurate, trustworthy and reliable information meaning that people can rely on the accuracy of the information to access while being exposed to a variety of ideas. And this is a direct result of this generation of Frontier AI that can convincingly synthesize people, whether it's text or image or sound or video and so when it leads to a lot of deceptive AI content online.

Fortunately for Taiwan, while there were some of those manipulation attacks during our January election, our information resilience ecosystem has countered these attacks pretty well. Leading to low, effective polarization following the election. However, there's many, many other democratic countries going to be in the elections this year, and many of them are quite worried, frankly, speaking about the polarization that could result by this convincing synthetic content and so as part of the global Declaration, which chose the enhance the public trust, in fairness, enhancing transparency as the topics to consult with the people in Taiwan, about what exactly are the topics they care about? And are there any duties for the governments or for the large platforms are afforded from here AI labs that they would like to see placed as maybe guide rails or guide rails out these technologies?

Now, we use a democratically rigorous process. We sent to 200,000 people through the official Baldwin one SMS platform a survey. And then through stratified random sampling, we chose at least 400 citizens that represent that microcosm of our citizenry, and so many of them agreed to participate. And on March 23, more than 400 of them actually did. Participates with the Stanford deliberative poll platform. And we talked about in two sessions.

First, self regulation versus government regulation. How should AI help analyzing emerging threats?

Session Two, we deliberated about how should platform help the user maintain the standard of information integrity. And how we should help practitioners testers, the creators of media to maintain their information integrity standards in their practice?

In the end, we're very happy that more than 450 participants, including 120 practitioners, they're sorted in groups of 10 randomly stored hid, and AI facilitation robot aided by Stanford, allowed to tap into not just come to consensus after deliberation, but also raised important topics for us that policymakers to decide now I will not repeat the full result because you already have a copy of the four results. So I would just to focus on the consensus. The consensus is three votes.

First, but the public should be continuously invited to participate in a policymaking formulates mechanism and standards, which means that our aim is to at least run this kind of alignment assemblies twice a year, or maybe more as situations corporate large platforms should analyze and identify deceptive AI use that is difficult for humans to discern, which is almost all of them now and either choose just those are genuine, trustworthy and reliable to show the users or at least provide reliable verification and certification. For example, through digital signature mechanisms.

And finally, large platforms should be evaluated on their capability to manage and identify the session and adhering to cybersecurity best practices. This is worth exploring a little bit here, because as of this week, our ministry became the competent authority for large online advertising platforms. So we will begin with such large advertising platforms who Meta in particular, will work with you to develop a set of evaluation criteria on your capability to manage and identify AI deception and adhering to cybersecurity best practices.

And what does it mean concretely? We chose three consensus always overwhelming support after deliberation as the topic for the discussion today.

First, for interaction with generative AI people would like you to clearly mark them as such. And if there's a citation or sources where they came from, people would strongly prefer to see citations and labeling of those information channels, at least the source where they came from, for users who persistently post deceptive content on their platforms, people would strongly like to see a temporary suspension of these accounts and to have proper review and correction so that we can put a stop to large scale deceptive uses.

And finally, for the AI tools providers for generating AI content, especially the visual ones or audio visual ones. We should label them with provenance signatures or watermarks, etc. But the goal is to indicate to viewers that they are AI generated and I will just stop here and begin our conversation.

So please feel free to start covering either one or all three of these consensus topics. We will make a full transcript but you are free for 14 days after this meeting. After a transcript is made to co-edit so that you can also add relevant links or read act ones that are tracing or things like that. So without further ado, why don't we start I don't know alphabetically. So maybe let's start with Facebook. With Max like two comments at least your initial reactions of those three expectations on large platforms.

### Meta_Max Chen:
Oh, thanks, Audrey. Well, thank you for having me to join this and I'm sorry I can't be there in person and because I'm traveling and so but the technology enables us to join virtually. I think I want to congratulate these events and also the projects that Audrey and the team at MODA that were leading. I remember that Audrey, you talked to Nick Clegg on several occasions and I think the one key takeaway from the conversation was that democratic deliberation is essential for to tech governance. And I think at that meeting, we also invited the MODA representatives to join Meta's deliberative democracy program. So we do believe that citizen deliberation is essential part for tech governance, and we have done that since 2022.

We partner with Stanford University to run community forum on Metaverse governance. And that was a great experience. And so we also ran that in Taiwan. I think Taiwan set a clear example of how citizens can come together and discuss in a really informative way and make rational decisions, come to the consensus. That can be the foundation for further governance models. And that's reason why we did another community forum to which the MODA was invited. We did it with four countries and we hope to expand that in the future. But we are happy that MODA representative joined that forum and served as an observer and found the experience very positive and valuable. So you're doing this community forum or a kind of deliberative project in Taiwan in March. I want to share some of our experiences on that because I think even though the questions asked in this community forum and those in the deliberation projects here in Taiwan are different, but they're all centered around AI, and how people should interact with AI, and what kind of concerns that people have around AI.

So I think I just want to share this really briefly as a complement to the findings that we have here. Let me just pull out my note. The first finding from our survey from our community forum is that people are really genuinely excited about AI. And they are curious about AI and they see a great potential for AI applications. But also there are concerns and the concerns are in a few folds definitely around the misinformation around the validation against human rights, and the source of information and data privacy.

So I think those are reflected in the conversation here as well. So, in our conversation, like people from from USA, from Brazil, from Germany, and from Spain also share the same concerns as Taiwanese do and some kinds of solutions. Such as labeling and citing the resources of information and have a mechanism to allow people to control their data and control their experiences. So I think those are basically at least four or five countries here, that can be seen as universal, although we do need more evidence to support the argument but at least I think this is quite universal among the democratic countries. So as a response to the findings that we had, and also similar findings that Taiwan project has, is that we do believe that labeling is important. And we are working with the industry.

And I think that requires a lot of investment as well. A good example was the industry standard about watermarking of the AI generated content, especially in video and images. The other thing is that because it's open space, so that there are a lot of future models that can be not complying with the standards or they are doing their own things. So the industry are investing to build up a detection system to better detect the contents are generated by AI. So I think that's a really quick response about labeling and finding industry wide standards and building up with industry system that can detect content generated by AI, but I also want to note that not all the content created by AI are harmful. And I think that's also reflected in most of the discussions.

So, at Meta as a social media company, we do think that we treat content with same standard, so AI generated content, labeling is one thing but even if it's labeled as Gen AI, it doesn't mean that they are harmful or so. Here's a separate mechanism to evaluate or to assess or moderate the content based on the harmfulness the content has. So, I will stop here and happy to discuss more.

### Audrey Tang:
Okay, So, you have addressed the point three, right. So about what your marks and detection systems you mentioned, that the provenance that is to say if it is generated AI, we should know which tool generated for example, but you also noted that if I as Audrey Tang, then deepfake myself and visually science, that maybe that's not harmful, so that the harmfulness and deceptiveness are essentially two things. That's another takeaway from your point. Okay, thank you. And please also think about the two other points while alphabetically I think it's Google who can share with us and hopefully you.

### Google_Anita Chen:
Thank you all. Let me go ahead and talk a bit about our approach to AI. I want to talk a bit about labels and watermark. First, let me start by saying that we are investing in tools to help users understand when they are interacting with generative AI content. As we invest in more and more capable models, we also care deeply about investing in AI responsibility. This includes having tools to identify synthetically generated content whenever you encounter it. So these days when you look at a synthetic image, it is so impressive how real it looks. We realize that it has a lot of creative potential, but it can also present new risks, like enabling creators to spread false information. So the key question facing all of us is how to strike the right balance between opportunities and risks.

At Google, we believe that there should be a risk-based approach that builds upon sector-specific guidance. Let me talk about some of our recent efforts to help users navigate content that is AI-generated. First, about content labels on YouTube, we have been a strong supporter of disclosure in appropriate context. As we announced in December last year, we believe it is important for the healthy ecosystem on YouTube that we help inform viewers when they are engaging with content that's made with generative AI. The first step of this announcement started in March 2024 when we launched a new tool in YouTube Creator Studio to enable creators to mark their content that is made with altered or synthetic media, including generative AI. So what does this mean? This means that creators will be required to disclose the content when it is too realistic that viewers can easily mistake what's being shown with a real person, real place or real event, and the label will appear within the video description.

If the content is not only AI generated, but it also relates to sensitive topics such as news, health, election or finance, we will also display a label on the video itself in the player window. So basically, creators will have to disclose it in the video description if their content has been created using generative AI. And if this is related to sensitive events, there will be a second label on the video in the player window. In some cases, YouTube may also add a label even when a creator hasn't done so, especially if the altered or synthetic content has the potential to confuse or mislead people. In the future, creators who constantly choose not to disclose this information may be subject to content removal suspension from their YouTube Partner Program or other penalties. We're rolling out these requirements step by step because we want to give creators some time to adjust and try out our new tools and new processes and features before we introduce penalty later this year.

Next I'd like to talk about Attaching invisible watermarks to imagery that Google’s models generate. So all images generated within [Imagen 2](https://deepmind.google/technologies/imagen-2/) in our consumer products will be marked by [SynthID](https://deepmind.google/technologies/synthid/), which is a tool developed by Google DeepMind that adds a digital watermark directly into the pixels of images we generate. SynthID watermarks are imperceptible to the human eye but detectable for identification. This also applies to images created with generative AI in Google Ads, including Performance Max.

The third point I like to talk about is how we believe we should provide users with additional context.  [About this image](https://blog.google/products/search/google-search-new-fact-checking-features/) in Search helps people assess the credibility and context of images found online. Also in Gemeni, Google's Gen AI tool, our [double-check feature](https://support.google.com/gemini/answer/14143489?visit_id=638495268452713667-1852206679&rd=1) in Gemini enables people to evaluate whether there’s content across the web to substantiate Gemini’s response. 

I talk a bit about our ads product earlier and I want to add that Google is a strong supporter of appropriate disclosures for synthetic media. Being able to run the forensics and identify AI-generated content is critical to prevent the spread of misinformation. All images created with generative AI in Google Ads, including Performance Max and the conversational experience, will be identified as such. We’re using SynthID to invisibly watermark these images and they will include open standard metadata to indicate the image was generated by AI. In addition, we recently joined C2PA as a steering committee member to help advance methods for tracing the provenance of digital content

These are some of the ways that Google are ensuring that the images or content showing up on our platforms and via our products remain responsible. I'll pause here in case anybody has any question.

### Audrey Tang:
Thank you, that is very comprehensive, and indeed addresses all three points. I have one follow up question. So when you say that for users who persistently post deceptive content, you need to give creators some time before you rule out the rule that suspends them. When they do so, like consistently. When you say that, give them some time, what exactly is the timeline you would have in mind? For how long will YouTubers be given this grace period before your SynthID or other C2PA related rules kick in?

### Google_Anita Chen:
So that's a very good question. If you will allow me to get back to you on that because we just announced this Creator Studio tool in March. I think it's about three weeks ago. And so we are simultaneously letting creators know that they need to comply with this. So you understand we will need to educate creators how to do this and then give them time to to get used to this. If you can allow me to get back to you on when we will start introducing penalties. I will appreciate it.

### Audrey Tang:
Because there are 14 days to co-edit this transcript. So if you can get the answer within the next 14 days, we can retro actively add it to the transcript. And it sounds as if you answered this question right here. But for the other points, I think yes, you have clearly explained the double checking idea of Gemini so that it addresses deciding part, you introduced a C2PA and SynthID which although again as Metaverse is still there, so I'll call them Meta.

Now, Meta pointed out is not entirely foolproof or is not unbreakable. At least it provides an industry standard to go forward with. And finally, you also mentioned that your ads and so on are already comprehensively being rolled out to adhere to these signature and watermark related provenance schemes. So thank you for your very comprehensive response. Now I think alphabetically we have Microsoft. Is Microsoft here?

### Audrey Tang:
Okay, so while Allen is figuring out some technical issues with Microsoft Teams, we will go to Open AI. So, please would you like to talk about in these three points?

### OpenAI_Teddy Lee:
Yes. So, Audrey and the Moda team, thank you for running these alignment assemblies. Really interesting and important topic. From the top - so for interaction in generative AI, clearly marketing them as such while setting and labeling the sources. I think I'll answer this one and the second one a little bit together about users kind of misusing the technology to create deceptive content. Some of the things that we have in our usage policies are that we don't allow people to build applications for things like political campaigning and lobbying.

We don't allow builders to create chatbots that pretend to be real people, such as political candidates, or celebrities, or institutions like governments. We don't allow applications that deter people from participating in democratic processes. And we have teams that focus on also enforcing these usage policies to monitor what's happening, what's being built and what people are using these technologies for, so that we can figure out how to stop bad behaviors, how we can build technologies and classifiers to detect them more automatically. And also, with our new GPTs, we allow people who are using the GPTs to flag and report potential violations to us.

For us, a lot of the bad behavior happens when people are trying to use the models to create GPTs to do those things that I just outlined, which we don't allow. But also there's of course people who are using our API, or just ChatGPT to generate pieces of content. So we have various teams that are trying to enforce against those, but one important thing that we're doing, I know there are dialogues happening between OpenAI and platform companies like Meta and Google to make sure that we do our part in terms of ensuring that we can minimize the creation of bad content or deceptive content. We also need to partner with the platform companies to ensure that we communicate when we find that kind of behavior and also that when you know the piece of content that is undesirable slipped through that we can also have a way to monitor if that gets spread and has really high prevalence, even if it's a very low rate of actual creation of content that would be in violation.

I think that's something that will really require ongoing dialogue. I know that a lot of that's already happening between our companies. So excited to see that continue.

On the last piece for content produced by general AI tools. This is also something so I think Anita already mentioned this, I think Max is also doing this. So for our DALL·E image generation technology we've also added the C2PA protocol, that coalition for content provenance and authenticity, which is basically some metadata that's inserted into the narratives that are generated so that you can see what tool generates. So for this, that'd be DALL·E. I will say that this is not foolproof by any means people could screenshot the image. Or they could delete the metadata at times when it's uploaded to certain platforms to probably reduce the file size, and the data may also be altered or removed. So I think this is one tool and toolkit but not by no means the full solution. We've also been exploring the provenance classifier, so a tool that will allow us to detect if images were created by DALL·E even without that C2PA watermark.

We have seen promising initial results but that's kind of a work in progress and open research area that we're hoping to share more about soon. Also, outside of the image domain, ChatGPT is increasingly integrating with existing source of information. For example, users can access real time news reporting globally, including attribution to those sources and links to them. And also in certain specific cases, we really try to point people to the canonical source of truth. So for example, if people are asking about local elections, pointing them to the canIvote.org site in the US so that we're not trying to tell people where they would go to vote, we just point them to the appropriate official sources of information. I know that's something that other platforms do as well, so we're taking a page from those playbooks.

### Audrey Tang:
So on your last point, when you say that, for things related to local elections, who point them to a canonical resource, what is the process of for example, adding such canonical resources? Is it a government representative relationship with OpenAI? Is it civil society relationship? How is the keywords detected and things like them?

### OpenAI_Teddy Lee:
Yes, we have a team called Global Affairs led by Anna Makanju. And there's a specific elections focused team there. And right now, we're aware that there's more elections happening in 2024 that have ever happened on record. So they're constantly working with civil society organizations and local governments. A lot of people we've hired have worked in various regions of the world worked in government. They're experts on the dynamics and local regions. So it's a combination of all the above, and we have a bunch of experts on the team that are working on that. And I think you had one other question, Audrey, do you mind repeating if there was a second piece?

### Audrey Tang:
Sure. Basically it's about you talk about a specific case. But Google just mentioned for Gemini, there's general purpose double check tool that would allow for like, orienting fact checks or an misinformation attributions. You mentioned that ChatGPT when it's allowed access to real time user information marks the source URL that came from of course, but that is not the same as a double check tool, about the kind of generative models outputs being compared against sources of information. So would you like to elaborate a little bit on the ChatGPT part?

### OpenAI_Teddy Lee:
The searching and using of links is a general purpose approach. We have classifiers that allow our models to determine if for example data that it needs or the question being asked references stuff that would need the latest and greatest information. But for things like pointing people to canonical resources, those are things that are more hard coded. And we have a repository of those resources. So canIvote.org as an example. Or in a different domain, if there are people asking about self-harm instructions, potentially pointing them to suicide hotlines and websites. That's another example. So it's a just a more specialized kind of classifier and then pointing to specific resources that we know exist and are the best ones to point people to. 

### Audrey Tang:
Thank you. So you mentioned like significant self-harm and so on. So if our community already have a list of such resources as well as the triggers, let's call it the fight them for such resources, would it also be in a local affairs team? So that we can get to citizens and NGOs and MPOs in soft of and their resources to your local affairs team so that Taiwanese people using champion at church up you will benefit from those more far reaching not the election because we're not going to have an election anytime soon?

### OpenAI_Teddy Lee:
Yes, I would say so. My team Collective Alignment (https://openai.com/index/democratic-inputs-to-ai-grant-program-update) is focused on, for example, contextualizing or models to different geographies or different contexts, and so my team would be the ones to connect with on pointing people to canonical resources in general. But election-related topics would be more of a Global Affairs topic.

### Audrey Tang:
Understand. So we'll continue to build a relationship with your team. Thank you. Now we have Microsoft back.

### Microsoft_Allen Tang:
Yeah. Okay. I'm Allen from Microsoft. And I'm happy to join this meeting to know various opinions from all of you. We are happy to work with all players and Moda or to provide our opinions. But sorry that our CTO is taking the high speed rail right now and he cannot talk now. Microsoft will collect more information from MODA and will provide feedback later.

Opinions provided after the meeting:

When Microsoft adopted ethical guidelines for AI in 2018, we made transparency one of our six foundational principles. In accordance with Microsoft voluntary commitment to Whitehouse, Microsoft will commit that it will continue to ensure that our AI systems are designed to inform the public when they are interacting with an AI system and that the system’s capabilities and limitations are communicated clearly. Also, Microsoft will deploy new state-of-the-art provenance tools to help the public identify AI-generated audio-visual content and understand its provenance.

Microsoft believes there is benefit in requiring AI generated content to be labeled in important scenarios so that the public “knows the content” it is receiving. 

Microsoft prohibits users from using Microsoft products in a way prohibited by law in accordance with user terms.  Violation will be managed under the use terms. 

### Audrey Tang:
Okay thank you. So you will provide a response to these three points in written form. Okay. Understand that. Thank you. And now let's circle back to Meta. On q1 and q2. We talked a little bit about how those deceptive contents who are persistently posted maybe detected in the previous round of discussion that same pointing about point two, and in fact, the AIEC also has its own capabilities in actively scanning for such deceptive content. For example, trying to defame or cheap fake celebrities and so on and so forth. I understand that Meta has a library that enables this kind of transparency, what kinds of advertisements and so on are synthesized or can be tempted to whether they're synthesized. Are there plans to apply the ideas that you Max just mentioned, which is the provenance signatures, watermarks and so on, more generally, to the advertisement space for the advertiser related pictures and things like that.

### Meta_Max Chen:
Alright, so I will share more information about the advertisements later because I know there are like public posts about that, and I can share that for the accuracy. But I just want to note here that we believe that transparency is important. So we built a system to detect. And we want to encourage everybody to disclose when they are posting something that is created or generated by AI. They disclose that, be it in organic content, or it's paid content. So we have policies to allow people to disclose that they are using Gen AI to create this content. We do have the policy to ban the users from using Gen AI created content in the electoral ads. So there are multiple dimensions and multiple solutions to different problem sets. So I'll share more information in the URLs, the links to the information online for the clarity, but in terms of the first question?

### Audrey Tang:
YouTube allows YouTubers to or creators to label Anita was it only like videos or just general purpose like pictures or sound recordings and so on?

### Google_Anita Chen:
For the YouTube creator labelling  - it's any content uploaded to YouTube that has been altered or generator using generative AI tools.

### Audrey Tang:
Now YouTube products that you're also rolling it out such as system?

### Google_Anita Chen:
In terms of disinformation - purposefully misleading content: Any ad created with GAI is subject to our existing Ads policies before it serves and enforcement actions, if it violates our policies. Our ads policies prohibit manipulating media to deceive, defraud, or mislead others.  So basically, there are exisitng ads product policy that will apply whether your content is generative AI lead or not. But if you use generative AI to create content as your ad, you are also required to disclose that.

### Audrey Tang:
So that there is a direct correspondence, right because Facebook or Instagram you can also post pictures and videos and also advertisements. So for this point I would like to hear Meta’s response.

### Meta_Max Chen:
Yeah, so I had probably understood this question differently, but so let me just say first about my response to the questions that I perceived. So first about interaction. Meta does have AI tools for the end users. So in the US and in selected markets, if you use messenger on Facebook, and you click Meta AI to enter some prompt, the Chatbot, so to speak. Well, it creates content/text for you or create a images for you. I'm not sure about video for now, but at least for from what I have tested before, it's texts and images.

So in terms of images, it's definitely marked as made by AI. And that watermark, I think there are ongoing development to make sure that watermark is not just a visible watermark, but there are also like kind of DNA embedded in that. There's technical aspect. I won't go into details. Because we provide the contents in the form of a personalized AI chatbot or humanized AI chatbots, even if the name of the Chatbot is not AI, but like Mr. John Doe, then the interface still shows that this is not a real person, but an AI agent. So I think that's my quick response to the questions number one in the way that I perceived the questions.

### Audrey Tang:
And is this coming to Taiwan like is this experience how we could have in Taiwan?

### Meta_Max Chen:
we are taking a very cautious approach. We do not believe this being rolled out to Taiwan anytime soon. There'll be international expansion, but it's going to be available in English language only. And yeah, so I think that people will still have access if they are traveling or they're using the IP of the markets that we are launching the products potentially they will still have access to that. And I think that will bring us to the next question. Probably next one slide on in terms of AI evaluation, I think that's something we can discuss there. Also, on the deceptive content, in a way that I perceived the question, is that the people posting something online, either images, videos or texts that were generated by AI.

So again, as I mentioned earlier, that the contents that is created by generative AI are not necessarily deceptive and harmful. So deceptive, I think the definition of deception has to be pretty clear, that is done with bad intent on a malicious intent. And so if people are using our platforms to upload such content, we are building the tools to detect those contents so that people know that those come across those contents can know that these are created or made by AI. That's, one, labeling and transparency. Two, we encourage them to disclose if they are uploading this content to our platforms, and make sure that they can disclose that or our detection system will detect that. And three, if the content itself violates our community's standards, then our community standards will govern the contents our platforms and we will remove content that violates our community standards or policies irrespective of the status of the content, generated by AI or not.

So harmful contents will be removed based on our policies and the misinformation will be governed using our third party fact checking program. The third party fact checkers evaluate and to give rating and for repeated offenders that has continuously post misinformation that being ranked and rated by the fact checkers, we will remove the accounts and the pages as the most severe punishments but of course, we will start with the more less intrusive measures. For example, down ranking the contents of the of the pages and repeated offenders will lead to the ultimately removal off our platforms.

### Audrey Tang:
I think that this address point two. So you're essentially saying that if it's deceptive in the sense of is Gen AI or its deep baking someone in depth causes harm, then that is already governed by your community rules. On the other hand, you strongly encourage people to label such content as AI generated so that you can display such a line that is AI generated and people who continue to do so while producing content that do not by itself cause harm will be considered okay by your community standards. And so is this already here like is it already part of the product is part of the Instagram or Facebook experience as we speak.

### Meta_Max Chen:
The system detection is continuing to evolve. And I would say let's give them some time to build up a better detection system. The disclosure for the ads, it's been there. But for the organic content, the disclosure products or tools or interfaces has not been created for now. That's my understanding.

### Audrey Tang:
Because we have 14 days to provide written addendum. If you have timelines and such please do add to the transcript. Okay, great. So I think we have covered all three points in some detail. Does any of you have your own, like additional points to make or additional responses to the expectation for problems with overwhelming support? That's great. So I'm happy to hear about your commitments to response to the expectations, as you know, this is a multistakeholder conversation. So I'm not speaking as a regulator here, but the consensus will be provided as public information on our website along with this conversation.

So legislators who pay strong attention to these consensus are expected to take some of them into their platforms and we also have a upcoming anti-Fraud Act that will incorporate some of these measures. So while this one is just to gauge people's general understanding, and make sure we're all on the same page, there will be follow up conversations around the kind of more regulatory parts of these measures. So if there's no further questions. There is a question.

### ADI_Timmy Lin:
I have a question with meta and I heard the lead meta will start labeling AI generated content from May. And the government that concerns about the risk of deepfake,  is this automatically detected by the AI system or some other operation system?

### Audrey Tang:
so that whether the system you mentioned that maybe Ross and so we learn is May entirely developed in house or it is somehow in partnership with some other third party system or things like that.

### Meta_Max Chen:
I will share more information and I can share a link to the upcoming changes and system updates for you guys. But again, I think we are working with industry to improve our detection systems so that the vision of our platform is that when people are seeing content that are generated by AI, they will see a label.

### Audrey Tang:
Okay, great. Yeah. And we look forward to working with you on that. I think there is a strong consensus during the deliberation that there needs to be like useful monitoring the levels of like, if you say that your identify and manage capability is at x percent. People expect that the AIEC or the competent authority does us develop some sort of evaluation standards, so that we can evaluate objectively that it is actually the case and it can’t be done of course, with various different ways we understand that some of you engage with privacy enhancing technologies like OpenMined.

And we understand there's also ways to just take the classification models in a kind of remote testing way and so on. So while we will leave the technical details to working over the discussions, I just want to use the event consensus slide to remind that it is not just for large platforms to develop such capability to manage and identify deception. It is also on us as AI Evaluation Center competent authority to evaluate such things as you announced that you have rolled it out. I hope that is clear to all of you. So, if there is no other questions on this particular issue, we will move on to the second topic.

### ADI_Timmy Lin:
Yes, topic two about AI Evaluation.

### Audrey Tang:
So, to ensure that the content generated by Gen AI because there's a characteristic fairness, reliability, safety, etc. We are working with the the NIST as I mentioned, the AISI within the NIST in the US, the AISI in the UK, and other counterparts for example, the one in in charge of EU AI act, and so one to co-develop such evolution criteria.

And so, as a pilot, we've already commenced evaluation for the TAIDE model, which is now an open model with that you can all download with hugging face. And so we here invite all of you to also join as TAIDE did, to the pilots program so that we can get a sense mutually improve our evaluation pipeline, in our case, because we test specifically for accuracy and so one, which is the evaluation set that you may not otherwise get for other sources from your sides, you can then get a continuous reports, whether your point releases or your updates and so on advanced or progress.

And what we will require, of course, is some sort of researchers access to your API or in case of open models that are yet to be released. Some early access to your models. I hope that this slide speaks for itself. So again, maybe let's begin with Meta which development one of the larger open models.

### Meta_Max Chen:
so I think Meta has two aspects that would be relevant to this, one is a is Meta is a builder of certain large language models, and two Meta as a end-user product provider, the Meta AI that was mentioned earlier. So I would go first, the large language models. We open sourced and actually enabled TAIDE to continue to fine tune and to eventually a public release. So the large language model like we have here now, Llama 2 and in the near future, Llama 3, they are going to be open sourced and people can take it to further evaluate and fine tune and to do whatever as licensing allows. So I think in that aspect, we will be happy that to see how people are evaluating our models and so I think that's open source and we don't have any particular...

### Audrey Tang:
Meaning we just go ahead and download the 140 billion model of Llama 3 ourselves and make the test would you be interested in receiving the testing reports? 

### Meta_Max Chen:
I will be interested. I'm happy to see how accurate these are in terms of local language capabilities. But I would say that it's foundational models so that is not meant to be served or to work as the end products for all. And I think one key takeaway from our community forum is that the users do feel that the context is important when the AI Chatbot is providing them with answers. So sometimes that we believe that this is important and that means that we need more AI developers to fine tune and to build up more context oriented language models for the users to use. So that I think that's the first response to the first part.

As to Meta as an end user product provider. We are cautious in rolling out our products to the users. And I think that's reflective of our approach is to make sure that they are created responsibility and with safety in mind. I think I'm happy to take the AIEC evaluation center’s standards to our teams for them to consider if that is something as a pre requirements or at least something that we will consider before we decided to launch the Meta AI in Taiwan. So that's my second response.

### Audrey Tang:
We also earlier I heard you saying that's the Mandarin version or the Taiwan version is not going to be deployed to production soon, which means that we will have plenty of time to do the testing and evaluation and thank you for committing to taking this back to your product team. So that we I wouldn't say that it would gate your release necessarily, but we would strongly provides feedback so that you can know well in advance of rolling out to our citizenry, whether your interactive chatbots will adhere to the local expectations. I think that is a mutually beneficial arrangement. Thank you and so Google?

### Google_Anita Chen:
I wanted to say first of all, Meaningful transparency can be helpful in building trust in AI technologies. 
But it is important that due care is applied when disclosing information about AI models, such as through the “submission” of LLMs for evaluation. This is especially because such comparison requirements, such as submitting LLM for evaluation may conflict with other importantly principles such as privacy, security and the protection of trade secrets. We also want to note that the EU AI act, for instance, does not mandate companies to submit their LLM or evaluation. Rather, it focuses on transparency and reporting requirements by either the developers or the deployers.

So what we will recommend is a principled approach to AI model disclosures, balancing the need and the privacy of users and recognizing the importance of protecting IP and information that contributes to industry competitiveness. For example, where it is possible and appropriate. A developer of an LLM should provide documentation outlining how the model is intended to be used, whether there are any known inappropriate users, normal risk and any recommendations or deployers and users to manage risk. Importantly, we also recommend that governments around the world support the development of international technical standards on AI, including common benchmarks and standards for AI safety evaluations. There should also be mechanism to support interoperability on AI safety testing to avoid unnecessary duplication.

### Audrey Tang:
Okay, we get your idea about post deployment evaluations that would need to respect the privacy of these users and trade secret and so on. But for this one, I think what we're asking is essentially, pre-deployment testing, meaning that instead of just testing Gemini, as it is something more like your upcoming version of Gemini, or you're just being rolled out version of Gemini for Taiwan locale to our country. And so to ensure that before it reaches the end users of Taiwan, we have a kind of time, it's just like an open collaboration was red teamers, to have a set time so that we can do preliminary evaluation so that, well in advance whether at this point version has regressed on that point stuff that people care about.

So I think we're talking fundamentally about two different things. This is about pre-deployment or just about to be deployed, this kind of testing. Do you have the same concerns, as you outlined?

### Google_Anita Chen:
So I will definitely take this back to our team, but in my discussion with our team the past few days, I think our preference is that developer of LLM provide documentaion outlining how the model is intended to be used, known inappropriate uses, known risks, and recommendations for deployers and users to manage risk. That's our current preference, but I will definitely bring your your recommendation back to our team.

### Audrey Tang:
We're not talking about a model. We're talking about an API. So API, just like the existing API that takes a prompt and normal prompt and feedback, something so that the evaluation is done not on the model weights itself, but rather as API user is just that it's more like early research or red team access. So that this access is granted to AIEC before it reaches our population, so we can assess harm. We're not saying that you should submit the entire model with Gemini to AIEC. We're saying that open up APIs slightly before deployment. Is this more clear?

### Google_Anita Chen:
Yeah, I understand that. Let me take this back to the to the team because when the question were sent to us, it actually said we are to "submit the model for evaluation." I think, Minister, you have explained the idea clearly, let me take this back to the team.

### Audrey Tang:
Okay, excellent. Thank you. And then we have Microsoft.

### Microsoft_Emma Liao:
This is Emma from Microsoft. Basically we are the Licensee of the LLM. So we are probably not in the position to comment on this topic.

### Audrey Tang:
Okay, so we'll ask your licensor, OpenAI. If you have any comment on this particular issue.

### OpenAI_Teddy Lee:
Okay, Emma, nice to meet you. Thanks for being our partner. Yeah, so I think with that clarification that you provided to Anita I know that we actually already have a researcher access program. So we've worked with external researchers to red team to our products to study areas related to responsible deployment of technologies and mitigating risks. And some of the areas that we've been exploring with these external researchers include alignment, fairness, representation, societal impacts, different kinds of interdisciplinary research, interpretability and transparency, different types of misuse and also robustness of the model and reliability, consistency of outputs. I'll actually drop in the chat, a link to our research access program. So in general, people can apply to get API credit so that they can do research on our models.

And so I, I imagined that we could do something similar with potentially additional levels of access for the AIEC team. We talked about this earlier. I would want to talk to the team that made it as a researcher access program and see what other kinds of offerings might have but by understanding from our last conversation was that this even just having the API access can be go quite far. And we would welcome kind of setting the findings there as we do with the Researcher Access Program.

### Audrey Tang:
Excellent. So now we have essentially two commitments.

One from OpenAI, about the research access program in which AIEC will also have a window in addition to your window there so that when we detect significant regression or things like that, we will let you know before it's deployed to the general public or just as it's being deployed to the general public.

And for Meta, it is going to take more time, right before your chatbot reaches Taiwanese people. So it allows us to develop a more comprehensive testing plan based on API's hopefully, with AIEC here and with Anita — I'm sorry about the mistranslation before — but we would love if in the next 14 days, we can have a similar level of commitment from Google so that we can say for this particular version of Gemini, just as ChatGPT or Llama, at least some sort of accuracy. If it's going well, it's not going to harm our citizens.

Alright, so I think that covers the discussion topic. Do anyone here would like to raise additional points? Okay, if not, I think this is great and we have now a general free discussion, time for at least three minutes. So anything, raise your hand, Max, please.

### Meta_Max Chen:
I do want to ask. So go back to the topic to AIEC. I think the first question that asked in this meeting was about the AIEC evaluation metrics. And the only thing that differs AIEC from others is the traditional Chinese or Taiwanese Chinese accuracy.

I think I want to level set here the expectation, that the large foundational models are not necessarily serving as the end products and I continuously emphasized that the products developed, having a global audience as a potential user in the mind. I think I just want to make sure that the standards for the language accuracy is...

### Audrey Tang:
...is applied to the local aligned model, not the foundation model. Yes, of course.

### Meta_Max Chen:
So I'm really happy that TAIDE is a great example of how an AI developer, a group of AI developers use the large language models created by or offered by us for example, and to fine tune it with the data sets that are context specific and accurate. I think these are the final points that I want to make clear, that there should be a reasonable expectation of a global product versus a product that is designed and fine tuned for a specific market.

### Audrey Tang:
Yes, of course there is a trade off. There's a smaller open source model that can be alignment tuned to the local expectation using local data. There is a larger size, like Llama 3 400+ billion models that may not fit all the accuracy expectations locally.

You can actually take those together, because it is well within Meta capability to take the TAIDE alignment training materials and align the larger LLaMA 3 models by yourself. So that we have a fully tuned LLaMA 3 for Taiwanese population that may be something we want to try before rolling out chatbots did that way.

So I think this is a really helpful and constructive point. That is to say, we want to ensure that through the accuracy and alignment assemblies, what accuracy actually means or what fairness actually means or what is reliability actually means and so on. All these change as the frontier models capabilities change, and while respecting your trade secrets and all doubts.

I'm sure there are privacy-preserving ways so that we can continue this evaluation relationship into like deeper collaboration without either from pure models, like giving the model was before the effort fully ready or not ready at all, and the societal expectation that there are meaningful audits to all of these 10 different criteria of AI evaluation and eventually certification.

So does anyone want to raise any extra points to this meeting? If not, then I sincerely thank you for your commitment and your participation.

I look forward in the next 14 days after the transcript is produced to add links and everything, blogs, announcements, so that the reader of this transcript can also collectively benefits from the cutting edge research and the commitment from the industry to a safer and more trustworthy AI and information integrity environment.

I thank all for attending. Thank you.

