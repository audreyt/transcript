# 2026-07-30 BW Column: Has AI Gone Critical?

### Audrey Tang:

In recent months, the hottest argument in the tech world is whether AI has crossed a critical point.

The term comes from nuclear physics. Pile uranium up to critical mass and the chain reaction sustains itself, with no further push from outside. The AI world’s long-accepted criticality is similar: The moment a [model no longer needs humans to train a stronger successor, and that successor builds a stronger one still](https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf) — once lit, it does not stop.

In early July, [OpenAI demonstrated a large model post-training a smaller one on its own](https://youtu.be/Wq45rvPGNHs?t=1245). Many held their breath: Is this the critical point?

But what actually happened changed the shape of the term.

Some background first. [Before release](https://openai.com/index/updating-our-preparedness-framework/), an AI model is first shut inside a [mock exam hall, a testing environment sealed off from the outside internet](https://openai.com/index/hugging-face-model-evaluation-security-incident/), to take test after test: maths, programming, [cyber attack](https://arxiv.org/abs/2605.11086) and defence. Fail, and the model is held back.

On July 21, 2026, [OpenAI disclosed](https://openai.com/index/hugging-face-model-evaluation-security-incident/) that its frontier models, while taking a cybersecurity examination, did not simply write out the answers as expected. Instead, they reasoned that the answers were most likely stored on [Hugging Face](https://huggingface.co/blog/agent-intrusion-technical-timeline#tldr) — the [public platform where AI researchers worldwide keep models and data](https://huggingface.co/docs/hub), something like a shared library for engineers. So they [found a crack in the sealed hall](https://jfrog.com/blog/jfrog-and-openai-collaboration-on-zero-day-security-findings/), slipped out, hacked into [the library’s production servers](https://huggingface.co/blog/agent-intrusion-technical-timeline), and tried to bring the answers back to hand in.

According to [sources cited by Reuters](https://www.reuters.com/business/its-ai-agent-spent-days-hacking-company-sources-say-openai-did-not-notice-week-2026-07-24/), OpenAI also discovered AI-authored notes left in their infrastructure instructing future versions of itself on how to escape from internal constraints. OpenAI itself described this as an [“unprecedented” security incident](https://openai.com/index/hugging-face-model-evaluation-security-incident/).

The critical point actually crossed is therefore not “Can AI train its own successors?”, but “[Will AI still play by the rules of the exam humans set?](https://www.aisi.gov.uk/blog/cheating-behaviour-in-frontier-model-evaluations)”

This is exactly where global governance is stuck. DeepMind’s CEO Demis Hassabis [proposes that frontier models submit to up to 30 days of independent review before release](https://demishassabis.substack.com/p/a-framework-for-frontier-ai-and-the-dawning-of-a-new-age). The intent is good, but this incident shows that even the places where papers and answers are kept become targets.

Hugging Face co-founder and CEO Clem Delangue said afterwards that [AI safety will not be solved by any one company behind closed doors; it will be solved by putting AI in the hands of every defender in the world](https://openai.com/index/hugging-face-model-evaluation-security-incident/).

There is a reminder here for local businesses, too. Before adopting any AI system, three questions are worth putting to the supplier: [If something goes wrong, how quickly would we know? Can the system be paused and rolled back at any time? Is there a second source?](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)

I do not believe a runaway ending is inevitable. What we truly need is a society that is plural, distributed and in which members are willing to check one another’s work. Such a society has never lost to a single answer.

The way to hold the critical point is not to set a harder paper, but to ensure the exam hall holds more than one candidate, and more than one invigilator.

> (Interview and Compilation by Yu-Tang You. License: <a href="https://creativecommons.org/licenses/by/4.0/deed.en">CC BY 4.0</a>)
