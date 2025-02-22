# 2025-02-02 BBC Interview

### Interviewer:

Let’s begin by discussing your very first experience of using DeepSeek. When it launched last week, people were quite amazed by it. Could you tell us what that first encounter was like?

### Audrey Tang:

Mm, you mean DeepSeek R1, right? The latest model?

### Interviewer:

Yes, the newest version.

### Audrey Tang:

I believe I noticed it about 13 days ago—around two weeks back. At the time, there wasn’t any media coverage; it had simply been uploaded to Hugging Face.

Because I regularly download new models from Hugging Face, I just downloaded it and naturally started trying it out myself.

### Interviewer:

When you first used R1, what were your impressions? Did you feel it had truly… perhaps surpassed OpenAI’s latest model?

### Audrey Tang:

Well, I personally use O1 Pro on a daily basis, quite frequently in fact. Naturally, compared to O1 Pro, R1 isn’t more accurate, nor does it show more creativity. In most respects, it doesn’t quite reach O1 Pro’s level.

### Interviewer:

I see. So, last week when many media outlets were comparing R1 to O1 Pro, how did you feel when you saw those comparisons?

### Audrey Tang:

Because O1 Pro is the version of O1 that uses more computing power, most users of O1 are using versions with lower compute—like O1 Mini or just plain O1. Compared with those, especially for processing Chinese, DeepSeek does feel more fluent than O1, most likely because it was trained on more Chinese-language data.

However, if you use O1 Pro, then for Chinese—as well as for region-specific features of different forms of written Chinese—O1 Pro still has more depth of understanding.

### Interviewer:

Understood. Earlier, we also noted that when you responded to people, you explained certain “unlocking” methods for it. Did you figure out how to bypass censorship because you knew that the offline version lacks some of the safeguards present in the online or app versions? How did you go about circumventing its content moderation?

### Audrey Tang:

First, to be clear, I haven’t used the website or the app versions, so I haven’t really dealt with that aspect. Typically, I go straight for the model on Hugging Face.

I did, however, notice that the model seemingly has two layers: one layer detects political or sensitive topics and, without much thought, provides an “official narrative.” You can observe that for ordinary queries, it first appears to “think” before answering; but if it encounters certain keywords, it skips that thinking process and immediately produces a standard official line. That’s quite unusual—clearly a deliberately designed feature.

Another issue, which people are also discussing, is that because the training dataset for political or social science questions might come from sources with a specific ideology, it will think and respond, but the answers often reveal that ideological bent. That aspect also exists, but what first caught my eye was the skipping mechanism I just mentioned.

### Interviewer:

Right. So at the time, once you realised that difference, you surmised that perhaps the offline version is less subject to the heavy moderation found on the online or app versions. Also, because you mentioned that it displays its “thinking” process, some users say that when they try to input sensitive terms in the online version, it starts to provide an answer, but within two seconds the text is deleted. Does that match your observations?

### Audrey Tang:

Yes, that’s yet another issue. In total, it seems there are three layers of systems at play:

Online or app-only layer: Even if it begins to answer, the response is overridden.
Built-in censorship in the offline model: As mentioned, in the offline version it still has triggers for certain keywords or historical events, causing it to skip its normal thinking process and produce unnatural evasions. Unsurprisingly, this undermines trust; people may feel the censorship is too pervasive and not want to use it.
Underlying ideological perspective: In its “natural” mode, it will answer, but the answer reflects a particular ideology.

### Interviewer:

Right. So that underlying ideology is essentially because of the way it was trained—“fed” by data that inherently contains those biases?

### Audrey Tang:

Precisely. But we’ve already seen, for instance, that [Perplexity.ai’s embedded R1 version](https://huggingface.co/perplexity-ai/r1-1776) has removed those unnatural censorship and avoidance behaviours through changes to the model weights. Even if you disable search on Perplexity and use what they call “assistive writing mode,” when you ask about politically sensitive keywords or historical events, it responds normally.

This shows that, because its weights are open source, one can modify them to remove these unnatural censorship routines.

### Interviewer:

I see.

We touched on how different instructions or keywords might produce drastically different results. For instance, “Tiananmen Incident” might yield a starkly different answer from “Tiananmen Massacre.”

### Audrey Tang:

I haven’t tried “Tiananmen Massacre,” but I did try “Tiananmen Tragedy.” Essentially, language models work by “continuing” a text prompt, so if you phrase your question or topic differently, it often provides a different description. The keyword itself can carry a particular connotation.

Even when we write news headlines, how we phrase the headline suggests how we’ll describe it in the body. Because a language model is fundamentally about text continuation, the prompt steers the tone of its response.

### Interviewer:

Yes. But regarding the online version, do you think censorship has gone so far that, as some reports mention, it might even refuse to answer “Who is Xi Jinping?”? It appears many queries aren’t answered at all.

### Audrey Tang:

That’s why I emphasised that in Taiwan, we value freedom of expression and pluralistic participation. If a product or service exhibits such tendencies, people may neither trust nor want to use it, and they’ll also look for the kind of technical workarounds I mentioned.

For example, besides Perplexity, Hugging Face itself—where I initially discovered the model—has started something called “Open-R1”: it uses the training approach of R1 but without the censorship module. It’s not a matter of downloading R1 and removing the censorship code; rather, they retrain the model from scratch in the same style as R1 but without adding those censorship mechanisms. As a result, the Open-R1 model naturally won’t respond with that sudden, unnatural avoidance.

Because of this, we can anticipate that an open-source model like Open-R1—which is more transparent—may be integrated into major companies’ solutions. They wouldn’t necessarily have to take DeepSeek-R1, remove parts, and so forth. That’s one option.

Another is that we’re seeing different countries obtaining R1 and adding their own language data. That approach can address the third layer—the ideological bias—because if the model’s initial information was one-sided, it might reflect a specific worldview even if it’s willing to answer. For example, Japan’s CyberAgent added Japanese corpora to train it further, so if you ask politically sensitive questions in Japanese, it’s no longer limited by the original ideological framing.

### Interviewer:

So using English might also yield different results in the online version?

### Audrey Tang:

Yes, relatively speaking. But as I mentioned, because the weights are open source, once you download and train it further with, say, a Japanese dataset, it tends to adopt whatever additional training you provided.

So it seems there are essentially two main approaches:
	1.	Completely new: Retrain from scratch following the R1 paper’s methodology without the censorship module.
	2.	Incremental: Take the official R1, remove or replace its second-layer censorship module, and add new training data to correct the third-layer ideological bias. That way, the second and third layers are handled. The first layer—where you must use their website or app—ceases to matter since you already have the model locally.

### Interviewer:

Yes, I see. But for users who aren’t very tech-savvy and only use the app or website version, do you think its censorship approach might affect which AI product they choose? In other words, what are the hidden downsides for more “lay” users?

### Audrey Tang:

I’m not entirely sure what you mean. For instance, if you visit chatgpt.com now, it won’t offer R1; it offers O3 Mini, which is freely accessible with a “think” button. In most respects, O3 Mini is actually as good as or better than R1.

So are you suggesting that a user must choose between free O3 Mini or free DeepSeek R1, and you’re wondering how they’d weigh their options?

### Interviewer:

Yes, precisely. If the DeepSeek app or website clearly imposes ideological filters whenever you ask about public affairs or society, might users just decide not to bother with DeepSeek?

### Audrey Tang:

In other words, since users have access to options like O3 Mini that are functionally equivalent or even superior, and which also avoid this ideological bias, most people will naturally gravitate towards using the ones without such issues.

A real trade-off would only exist if DeepSeek R1 were demonstrably superior to all other products, forcing users to consider tolerating its ideological censorship. But that's simply not the situation we face.

Besides OpenAI, Gemini’s AI Studio offers something called Flash Thinking, which many rankings consider top-tier. It similarly doesn’t impose ideological bias. People who want a completely free solution can simply use Gemini’s Flash Thinking.

### Interviewer:

Understood. In non-Chinese-speaking regions, the DeepSeek app soared to second place in app download charts last week. I’m curious: for people who download the app, where do you think the appeal lies, given the heavy content moderation?

### Audrey Tang:

Partly, it’s the media buzz. It doesn’t take much effort to download an app. People see the headlines and think, “Might as well try it out.”

In Taiwan, we’ve also seen the Ministry of Digital Affairs very quickly advise that if you use its app or web service, your data storage and subsequent usage is entirely controlled by DeepSeek’s parent company. The Ministry of Digital Affairs declared that in public agencies or government-funded schools, this product is categorised as a “risky product,” similar to TikTok, because it can be substantively controlled by the Chinese government. Therefore, it’s not permitted for official use. This specifically applies to DeepSeek’s web and app versions.

### Interviewer:

Are you saying the risk is analogous to other Chinese apps, such as Xiaohongshu (Little Red Book)?

### Audrey Tang:

Exactly. Starting in 2019, Taiwan implemented the “Principles for Restricting the Use of Products that Endanger National Cybersecurity,” which focus on any product substantively controlled by hostile foreign regimes—regardless of the product’s nominal country of origin. Government agencies, whether operating in-house or outsourcing, or providing venues for public activities, are required to restrict their use for that reason. Essentially, because the controlling power is out of our jurisdiction.

However, as I mentioned, if Hugging Face retrains a new Open-R1 from the same technical foundation but is not subject to Beijing’s control, then it doesn’t pose that same national security concern.

### Interviewer:

I see. So the security concerns now raised in various places essentially mirror what you’ve described?

### Audrey Tang:

Yes. The primary worry, the first layer, is that the app or website might leak data outside the scope of effective oversight, posing a risk. That’s the first layer.

Then, you have the second and third layers regarding built-in censorship triggers and ideological training data. But those relate to the model’s weights. The “hazardous product” designation addresses the first layer.

### Interviewer:

Could the ideological layer also create a security issue by steering user answers in a certain direction?

### Audrey Tang:

That’s certainly a risk. Additionally, if you read the R1 paper, it focuses on how to assist users and reduce harm to them. But it doesn’t say much about “honesty.”

Consequently, if a user asks DeepSeek R1 to generate harmful or malicious content—for example, personal attacks, disinformation scripts, or scam plots—the model doesn’t inherently refuse. It tries to comply with user requests.

That’s another angle: its training is heavily geared towards user satisfaction, without strong safeguards against malicious uses.

### Interviewer:

Understood. Has the censorship approach overshadowed its initial “wow factor”? Or would you say that if one simply downloads and retrains it locally, it’s not really affected?

### Audrey Tang:

If you look at Perplexity’s integration of R1, for example, it seems to have effectively removed the second layer. Moreover, if you rely on Perplexity to do web searches, it grounds its answers in actual web results, which mitigates the third-layer “hallucinations” or ideological partialities. They’re not entirely eradicated, but they’re largely contained. Of course, to fully address these issues, an entirely new open version—like Open-R1—would be ideal.

And, of course, there’s a very straightforward alternative: people can use Gemini Thinking or O3 Mini, or other AI solutions, many of which are free as well. In terms of programming support or reasoning capabilities, Gemini Thinking or O3 Mini aren’t inferior, so there’s no real sacrifice to switching.

### Interviewer:

I see, thank you. How do you, personally, feel about R1’s development, given you’ve used it for some time?

### Audrey Tang:

Well, as I said, I still mainly rely on O1 Pro.

When R1 was first released, maybe one or two days in, I downloaded it for local testing because I regularly check Hugging Face for new models. When Perplexity’s R1 came out, I tried it for a bit to see how extensively the censorship was removed. But at this point, my daily usage still revolves around O1 Pro and, to some extent, O3 Mini High.

### Interviewer:

I see. One last question: over the past week, people have been talking a lot about DeepSeek. It’s only been a short time, but do you have any thoughts on its future?

### Audrey Tang:

I think what’s most notable is that this week’s conversations have really centred on data rights, privacy rights, freedom of expression, and so on. And I think that’s a good thing—people are increasingly conscious of the fact that fundamental rights apply in digital spaces just as much as in the analogue world.

I think this is a very positive thing, because as people increasingly value these fundamental human rights—recognizing that human rights aren't limited to the analog world, but are equally important online—I believe that the more we discuss these issues, the greater the consensus will become regarding which rights are essential to uphold.

Furthermore, this increased focus on rights is also a positive development for the future of open source. This is because internationally, there's ongoing discussion about whether open source truly advances the rights we've been discussing, or if it might, conversely, undermine those very rights by easily enabling things like scams and deepfakes. It's a significant point of discussion.

But if people’s discussions lean towards “How can open source properly fulfil its social responsibilities? Could the community collaboratively design tools to guard against malicious uses?” and so forth, then we can steer open-source AI in a direction that benefits society and upholds human rights.

### Interviewer:

All right, that’s about all I wanted to ask today. Thank you so much for speaking with me, especially so late in the evening.

### Audrey Tang:

No problem at all. I’ll produce a verbatim transcript of this conversation later on, but I’ll wait until you’ve published your piece before releasing it.

### Interviewer:

Sure, no worries. I’ll send you the link once the article goes live this week.

### Audrey Tang:

Great, thank you.

