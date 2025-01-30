# 2025-01-25 Interview with BBC NewsDay

### Interviewer:

On Tuesday, the US President Donald Trump called the rise of the Chinese company DeepSeek a wake-up call for the US tech industry after the emergence of its artificial intelligence (AI) model triggered shockwaves, not least on Wall Street. Shares in major tech firms such as NVIDIA fell sharply, with the chip giant losing almost $600 billion in market value.

DeepSeek claims that its model was made at a fraction of the cost of its rivals. It’s also raised cybersecurity concerns in some countries, with the Australian Science Minister, for example, urging caution. Nevertheless, DeepSeek has become the most downloaded free app in the US just a week after it was launched.

So let’s discuss this and some of the wider issues around AI with Audrey Tang, Taiwan’s cyber ambassador at large and former Minister of Technology. Welcome to the programme. What are the strengths of DeepSeek?

### Audrey Tang:

I’m sorry, can you repeat the question?

### Interviewer:

Yeah, I wondered what the strengths of DeepSeek were. What makes it so impressive at this early stage?

### Audrey Tang:

The uniqueness is that it can squeeze onto a single high-end laptop.

So that while the frontier labs require a lot of operational costs, nowadays, in your phone or laptop, you can run a distilled or smaller version of DeepSeek.

And because of this, the guardrails that usually come with services can be completely ablated — or deleted — from those local versions.

When this happens, weaponizing AI for polarizing attacks, phishing attacks, propaganda, and so on, just becomes far more accessible.

### Interviewer:

Okay, there’s plenty to unpack there. Let’s start perhaps with creating it, using a smaller model as it were. Is that part of why it’s simply been so much cheaper to produce DeepSeek than its competitors?

### Audrey Tang:

The way that DeepSeek’s R1 is trained is basically figuring out how to make the AI ask itself questions and then validate its thought processes with right or wrong answers—like mathematics or coding questions.

Previously, it required a lot of data collection or human-annotated data, but their training process means that in any domain with standard answers for validation, the training costs have gone down significantly.

### Interviewer:

Does that mean its rivals are going to have to follow suit? That everything is going to become cheaper?

### Audrey Tang:

In a sense, yes. DeepSeek R1 was not the first to figure out the reasoning model tricks. We’ve already seen Google’s Gemini “thinking” model, Anthropic, and OpenAI’s o1 and o3 before DeepSeek R1, delivering similar or higher performances.

The main difference is that DeepSeek R1 is open in the sense that people can host versions of it themselves, and it can be used to teach smaller models like LLaMA and Qwen these reasoning tricks.

So while it didn’t break new ground in reasoning power, it made the technology much more accessible.

### Interviewer:

You touched on some of the potential negative impacts of this breakthrough. Can you expand on your major concerns?

### Audrey Tang:

Definitely. Previously, hosted versions of OpenAI, Gemini, or Anthropic’s models had guardrails in their web or API endpoints to block malicious uses like propaganda, disinformation, or phishing attacks.

Now, DeepSeek also offers a web/app store version with guardrails, but because it’s openly accessible, people can download it onto their own systems, remove those safeguards, and start generating phishing campaigns, polarization, scams, cyber attacks, and so on.

And because it’s not hosted centrally, there’s no external audit trail for these activities.

### Interviewer:

Does that leave citizens at risk of state-sponsored action via DeepSeek, or are we talking more about individual criminal enterprises?

### Audrey Tang:

State actors already had similar capabilities. We’re now seeing small-time actors, like criminal gangs, gaining access.

Imagine scammers posting ads on social media. If you click it, a “celebrity” engages in a real-time conversation with you, and they seem to actually know something about you. They can follow your reasoning and then scam you into buying fraudulent goods or services, and so on.

Previously, it required a human in the loop. With R1, small-time actors and criminal gangs can now tune their own versions.

### Interviewer:

Audrey Tang, thank you very much indeed, Taiwan’s cyber ambassador at large.
