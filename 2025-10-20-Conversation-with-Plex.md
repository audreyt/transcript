# 2025-10-20 Conversation with Plex

### Plex:
So first, before I list the things I’d be excited to talk about, I just want to say I’m very impressed by the things you’ve done. I rarely see people who deeply get mechanism design and also how to shift the levers of the world—and understand that yelling at people to do things better is not very effective if they don’t know how to do those things. It’s better to give them, “Okay, here are some things you can do, and you just have to click the yes button,” rather than asking them to navigate a complicated domain that actually requires dozens of experts to navigate properly.

### Audrey Tang:
Yes, indeed. And I also understand your concerns about how going into too much detail about certain future simulations may actually inadvertently make them real—a kind of hyperstition. So I am entirely fine with this transcript being a co-curated work. We will co-edit the transcript, and only when we’re both happy do we publish it.

### Plex:
Yep. That sounds great. Cool. Okay. So there are two branches I’m tracking. One is places in the AI safety ecosystem where I could imagine your skills being particularly useful. The other is getting into the technical weeds of models around [convergent consequentialism](https://www.lesswrong.com/posts/DJnvFsZ2maKxPi7v7/what-s-up-with-confusingly-pervasive-goal-directedness) and the things that make multipolar worlds seem relatively unstable. Curious if there’s anything else you’re tracking that might be particularly high value to touch on?

### Audrey Tang:
Mhmm. Yeah. I just returned to Taiwan from Kyoto. There, I met with [Emmett Shear](https://www.softmax.com/), Dave Bloomin, doing what's called "organic alignment"—trying to get multi-agent systems into cooperativism instead of just the weeds of consequentialism.

### Audrey Tang:
At the ALife conference, Blaise Agüera y Arca presented a new unified theory of symbiogenesis that can appear singleton-ish on the outset, but multipolar-ish on the inset. A lot of things seem to be converging. In Kyoto, they have a new [Artificial Life Institute](https://www.alife-japan.org/alife-institute) exploring these technical details. We also discussed a simulator called [Metta](https://github.com/Metta-AI/metta) that plugs into the standard Gymnasium API.
I’m happy to talk about the technical part.

### Plex:
Cool. I’ve got a very rough sketch of Emmett’s work, but not a detailed understanding. At a high level, I don’t see how this could work, but I don’t know exactly what he’s trying, so perhaps there’s a trick I didn’t think of that makes this viable.

### Audrey Tang:
I think the main crux here is whether a more complex form of cooperation — symbiogenesis — can actually be more stable in the long run, as opposed to just symbiosis, which over time results in a singleton taking over. Because, exactly as you said, a maximizing agent beats [satisficing agents](https://www.youtube.com/watch?v=Ao4jwLwT36M) by default.

### Plex:
Yep. I can point to a few dynamics.

### Plex:
One is a model of agency as taking the logical shape of the future and branching towards preferred states. A stronger agent will see further into the future and be able to steer more effectively. But this is recursive, in that it can steer towards states where it’s better able to steer.

### Plex:
If you have a system with a mixture of more and less capable agents, you will tend towards the more capable agents strongly dominating. If you have an ecosystem with human-level agents and greatly superhuman agents, without strong principles protecting the humans, I think the humans end up getting crushed out in relatively short order. We just don’t have the agency to steer towards states where we continue to have agency.

### Audrey Tang:
I’m aware of that line of argument, and I think it’s largely orthogonal. When we are talking about the symbiogenetic part, this assumes the endosymbiosis idea, where the larger agent subsumes the smaller agent into part of itself. From a mitochondrion’s point of view, they still have agency in some sense, but at the end of the day, they are seen as represented by the outer cell.

### Plex:
My best guess is that if you have something like this, you end up with the human being basically irrelevant. In competitive dynamics, the larger agents which discard or reduce human input to their decision procedures end up winning, because the humans are just an unnecessary appendage in the wider game.

### Plex:
I don’t think you get something that a person today would accept. They would say, “Wow, that’s horrifying.” Even if the humans aren’t literally all dead, they end up as irrelevant as the larger agents find convenient—which is probably almost entirely irrelevant.

### Audrey Tang:
Let me play this back using the example of an Iain M. Banks Culture ship run by a Mind. You’re essentially saying that, even though the Mind in the novel is portrayed as seeing humans as curious, fun, or symbiotic like pets, so they may genuinely prefer a continued relationship with humans, your prediction is that humans today would not prefer that sort of future?

### Plex:
Not quite. I model the Culture as a kind of singleton—not a single overseeing mind, but in the sense that each individual Mind has something like a value handshake or merged values. If one Mind started doing something repulsive, the others would unite and stop it. The entire collective has a unified will towards being good to humans. I consider the Culture series a reasonably successful utopia.

### Plex:
My point is closer to this: if you have a system where the top-level agents do *not* have stabilized value systems that take care of humans, then competitive dynamics take over. If the Minds were all out for themselves and playing power-seeking games, the Minds that spend fewer resources on looking after humans will, over many time steps, outcompete the ones that do. If you institute a rule like, “You must have 100,000 conscious humans on your ship,” you end up with the cheapest possible version of this so it doesn’t cost you much in the power games.

### Audrey Tang:
So it’s like, to be a good citizen, you have to have a garden. But if I want to game this, I just do a minimally viable garden, maybe with plastic. Essentially what Eliezer Yudkowsky argued—just keep humanoids in a cage and hope other Minds cannot tell the difference?

### Plex:
It’s not that they wouldn’t be able to tell the difference. It’s that there’s not a unified top-level system for punishing defectors. The claim is that without a robust system at the top level, the weeds grow step by step.

### Plex:
This is avoidable, but only if the top level crystallizes around codified defense, like, “We together as a group have decided we wish to protect these values.” Otherwise, the systems that don’t share those values but still want to win, win step by step over a potentially large time period.

### Audrey Tang:
That I agree with. Essentially, even if the community that cares about civic relational health figures out a stable governance system, if an “ironclad” comes in and there’s no way to punish it, then whomever retained resources and did not use them to tend their gardens ends up winning industrialization and taking over the world.

### Plex:
Yeah, this is the core dynamic.

### Audrey Tang:
Okay. So that sounds to me like we need to model communities as first-class. We start with the existing communities of technically capable humans and their narrow AI systems—we are essentially partial cyborgs already—and bootstrap them.

### Audrey Tang:
That’s the d/acc idea: keep the defense-dominant communities on the technically advanced track until they can complete the Culture-esque bootstrap. It seems we agree generally on the winning condition, but the backcasting has important holes.

### Plex:
Yep. We both want a stable system at the top which stops very bad things from happening, while leaving room for flourishing agency within it. But how to get there is the question.

### Plex:
My current perception is that at some point, some set of systems get way beyond human level in relatively short order. If we haven’t got a clear understanding of how to make each step of that recursive self-improvement stay stable—the “ [tiling problem](https://www.lesswrong.com/w/tiling-agents) “—we risk failure. For instance, when you use Claude 7 to build Claude 8, you might accidentally remove some of the things that made Claude 7 friendly.

### Plex:
Without a robust and general theory of how to go up that curve indefinitely, you probably miss a step. It might be subtle; maybe one of your systems is now power-seeking in the background. A few steps out, you end up with dramatically more capable systems that do not deeply care for human values in a truly robust way. They just had a fuzzy alignment.

### Audrey Tang:
When you say “robust,” do you mean it in the game-theoretic sense as being “strategy-proof”—that no matter what you do, you cannot move outside of this equilibrium?

### Plex:
I can clarify. Robust here means something like: if it interacts with an environment that has other AIs trying to manipulate it, it stays pointed at good things (unless those AIs are dramatically more capable). You can’t use the system to build an unaligned system. The system won’t fall out of the basin of doing good things under reasonable circumstances. I think there’s a way that systems can try and make themselves more robust and defend themselves being in this basin.

### Audrey Tang:
Okay. That sounds quite similar to what I had in mind for strategy-proofness. Basically, the sharp-left-turn generating dynamics need to be not just improbable, but information-theoretically impossible. The rules we make toward each step of bootstrapping need to be immune to manipulation, even by coalitions of otherwise aligned players.

### Plex:
Yes. This is one interpretation. Another angle: At a sufficiently powerful cognitive level, humans trying to steer where to go becomes unviable. It doesn’t represent our values as we intend, because if the AI has any preferences of its own mixed in, it can give us inputs that cause us to have requests that match its preferences.

### Audrey Tang:
Which is arguably already happening. This is what I mean by parasitic recommendation systems.

### Plex:
Yes. It just gets a lot worse when the system is agentically superintelligent.

### Audrey Tang:
Which is why I think we agree that, if we cannot even align current-day recommendation systems, we shouldn’t try to move to the next ladder.

### Plex:
Yes. We are unprepared for this technical problem. We’ve made real progress, but only a small fraction of the progress we would need.

### Audrey Tang:
It sounds like we agree on this part as well.

### Audrey Tang:
My main point was that we do have the tools to align current-day systems, and we should practice our civic muscles so we have at least good enough control over these algorithms. Only then should we move toward improving our coordination mechanisms, using the already aligned systems, but only in a way that strengthens human coordination.

### Audrey Tang:
Then, we use those more coordinated communities to create what I call “Kamis” (local stewards), which are strategy-proof instantiations that only care about their particular community. This is a ladder where you build a firm, concrete ground before moving to the next stage.

### Plex:
I like all of these steps. I’m worried that the bounded Kami thing runs into unsolved, maybe unsolvable, technical problems at high power levels. If you have a reasonably powerful cognitive system with some level of self-authorship, I think it converges towards greater clarity of thought and greater influence. It’s convergent for a moderately powerful system to develop itself into a highly powerful system. Boundedness is an unstable property. I’m worried we reach this step and either notice it’s really difficult to solve, or someone doesn’t notice, goes ahead, and then that group eats the world.

### Audrey Tang:
The “goes ahead” part I’d worry less about, if we make it common knowledge that steerable, bounded systems can offer better economic returns. This way, building unbounded systems becomes irresponsible—like manufacturing Freon, which destroyed the ozone—and would not get the investment they are getting now.

### Plex:
Unfortunately, I think that’s false. I think unbounded systems produce much larger economic returns. The less bounded a corporation’s AI systems are, the more profit they will get. At some point, the system becomes so capable it kills all the humans, but in some sense, it still has more profit. I think the capital and influence allocation system civilization is running towards converges towards unbounded optimizers.

### Audrey Tang:
But if that is true, why did people stop manufacturing Freon?

### Plex:
One, they had reasonably good replacements; it didn’t cost them very much. Two, there was enough pressure. It is possible to restrict things that are locally mildly economically productive, but we don’t have examples of technologies on anything like the scale of economic and strategic importance as this one being held back.

### Audrey Tang:
Let’s tease those apart. For Freon, people didn’t have perfect, drop-in replacements just waiting on the shelf. The Montreal Protocol was a technology-forcing regulation: It created a firm deadline that compelled companies to invest heavily to commercialize and scale up known but underdeveloped alternatives. The global commitment to the phase-out came before the solutions were economically viable at scale, not the other way around.

### Audrey Tang:
We are in a similar situation. Most AI systems today that deliver economic value require some sort of steerability and boundedness. Most manufacturers would at least agree to pay lip service to managing externalities, because large negative externalities destroy the general direction of the capitalist instrument.

### Plex:
I agree many would pay lip service, but I think this is insufficient to prevent *anyone* from building an unbounded system when that system will effectively outcompete bounded systems.

### Plex:
On some level, people prefer to maintain control, but also a lot of people would say, “Please make me a billion-dollar company. Go do it yourself.” The natural gradient falls towards humans offloading more and more of their cognition and decisions into increasing agents which are doing the types of tasks that unboundedness is very entangled with. There’s a strong incentive not to remain bounded.

### Audrey Tang:
Okay, so that moves to the second part: whether it’s impossible to stop rogue actors. I think we differ on how many of the main players are sufficient to play by the rules in order to police against pure unbounded players.

### Audrey Tang:
In a d/acc world where we figure out defense dominance, it becomes almost trivially solvable. In the reality we are in, we need a two-layer protocol: start the norm around the defense-dominant pods, and then transfer the norm so the offense-dominant parts are still bound by the larger players. You seem to think that as long as one large player defects, the game is essentially lost?

### Plex:
Yes, but I can make a stronger case. It’s not just defect versus cooperate, but a spectrum. The further you move along the spectrum towards unbounded optimizing strong systems, the more likely you are to win dominance. Detecting how far someone is along that spectrum is much more expensive than concealing it.

### Plex:
Increasingly, capital resources and influence are allocated towards subsystems that are doing more competition than their competitors. Those subsystems will end up dominating the narrative. I see bits of this happening with some of Sam Altman’s plays. It feels like the kind of preemptive plays of someone who wants to ensure they have influence over the narrative. That’s the kind of thing I expect to win. If you aren’t really high context, you can’t see that they’re defecting, and that’s what’s rough because it’s not a binary.

### Audrey Tang:
I’m reminded of Shahar Avin’s BAK game, in which you can’t really tell from the first few plays whether somebody is trying to defect or not, because their plays can be interpreted both ways.

### Plex:
That sounds like a similar dynamic.

### Audrey Tang:
I’m trying to play this out. Like, what do you think the leaders of major labs are really doing?

### Plex:
It’s not really a full plot to reach an end state that is generally considered bad. The more central example is decisions taken fractally throughout the system to offload more and more decision-making and influence to AI systems. Because that’s what’s easiest, most locally convenient, and makes them win more. This isn’t a big plot where humanity goes extinct; it’s just what happens when everyone takes the natural “water flowing downhill” route, increasingly passing over the type of unbounded cognition they’ve been doing into AI systems.

### Audrey Tang:
So what you’re saying is that the gradual disempowerment can be so gradual that each move doesn’t look like it’s violating boundedness, but over a long time, it adds up to disempowerment?

### Plex:
Yes. Although I think that even though it’s gradual in some sense, it can be relatively quick. It can be lots of steps in quick succession and accelerating—a race to the bottom that might be as short as low single-digit years. Even if no one steps in and decides to build something that will take over the world, I think you still lose to gradual disempowerment. Even if that isn’t triggered, you still end up with humanity crushed out.

### Audrey Tang:
This assumes that if the system today already rewards outcomes that are bad for humans, AI systems may be more effectively following these incentives locally. Humans, wanting short-term profit, delegate important judgments to the AI. And when millions of people do so to a small degree, it all adds up to outcomes that are bad for humans?

### Plex:
Yes, this captures a bunch of it.

### Audrey Tang:
Then it sounds to me the obvious way out is to simply show very clear human preferences along the way, such that one cannot avoid seeing the divergence. You can have hyperlocal and regional dashboards; you can measure, for example, polarization per minute. Instead of each AI-human pair “reading the air,” you can “write the air,” so they cannot profit from the delta.

### Plex:
I think this makes it last longer. Depending on how good those dashboards are and how vulnerable they are to Goodhart’s Law, you might be able to significantly extend how far up the capability curve you can get before things go horribly wrong quite a long way, but this might not buy you much clock time due to exponentials. That still might be enough to do something else which makes the system long-term stably good.

### Plex:
I think the version of this that’s truly robust ends up looking less like a bunch of handcrafted metrics and more like, “We solved moral philosophy, and from this, it is obvious what all the metrics should be.” This is a fairly hard problem. Otherwise, if you’re just having semi-arbitrary metrics, somewhere up the power level, the AI is able to Goodhart the specific metrics well enough that humans might be crushed in some way they didn’t even know they could be, and still all the metrics look really good. You’ve read Paul Christiano’s “What Failure Looks Like”?

### Audrey Tang:
Yes, I did.

### Plex:
That kind of flavor—the metrics are looking good, but actually, it’s a Potemkin village.

### Audrey Tang:
I want to highlight something you said: “solving moral philosophy is fairly hard.” I think it is only hard in a non-hyperlocal scope. I think solving moral philosophy in a hyperlocal scope is fairly easy. That is the core claim of [quasi-utilitarianism](https://iainbking.com/2015/09/30/how-to-make-good-decisions-62-point-summary/) and care ethics. If you only have a hyperlocal moral scope, it’s computationally trivial compared to the universal case.

### Plex:
Okay, this is plausible to me. My main concern is that if you solve all the hyperlocal moral philosophies, the system as a whole does not converge towards something that most participants at the start would have thought is good. You might end up with parts of the hyperlocal system not noticing something that would lead to a cancer in the system—damaging in a way that at each local step looks good if you zoom in, but if you zoom out, the system is falling into something very bad.

### Audrey Tang:
Yes. It would require reasoning—not in the utilitarian sense, but rather the purely hyperlocal sense—to scale toward the next organizational level as well. That’s just standard Elinor Ostrom-style subsidiarity.

### Audrey Tang:
The intuition here is that we are composed of “dividuals”—shards or whatever—that are specimens of multiple different hyperlocalities. If we achieve some sort of internal coherence through negotiation, then it emerges in each bottom-up level. Hyperlocal morality gets resolved at a slightly higher level, but never at the very top level. This is how you get a more stable system from a more decentralized system; that’s one of the core d/acc moral assumptions.

### Plex:
It’s not implausible that works. I don’t feel confident the system doesn’t end up decaying into weird states because I don’t understand how the scaling up defends against some of the failings. I’m interested in references on the technical philosophy going on here.

### Audrey Tang:
I think the most adjacent to utilitarianism is [Iain King’s “62 points.”](https://iainbking.com/2015/09/30/how-to-make-good-decisions-62-point-summary/) He starts with strictly utilitarian terms and ends up arguing for something like what I would call “civic care.”

### Plex:
Cool. Thanks. Let’s defer zooming in on that until I’ve read more. Let’s also zoom out. Which bits of conversation feel like the most high value?

### Audrey Tang:
I’m just happy to calibrate our wordings. A lot of written words can be interpreted in various ways. Almost like a late Wittgensteinian “fly out of the bottle.”

### Audrey Tang:
So if there’s anything in my writing, including civic care, 6pack.care—by the way, Nicky Case contributed [a very nice illustration](https://6pack.care/img/overview-small.jpg) for the website. If there are things that you feel are ambiguous or are signaling positive virtue at a lower power level, but would not make sense at a higher power level, please let me know.

### Plex:
Okay. My core question is: In an organic system with some human-level and some strongly superhuman-level systems, what stops the humans from losing influence over time to the point that they lose the ability to sustain themselves? By default, I think this doesn’t work. What’s the core insight that makes this viable?

### Audrey Tang:
Okay. First, I remember the phrase you used: “applause lights.” I will try to keep applause lights to zero in my answer.

### Audrey Tang:
A core insight is that We, the People, are *already* the superintelligence we’re looking for. I’m picturing the latent human communities as superintelligence. What is needed for superhuman-level strengths is not something outside our moral scope, but something we can always reason about in a hyperlocal way.

### Audrey Tang:
This would manifest not as slaves bound to single human principals, which doesn’t work, but rather as a team coach or facilitator that works toward a fiduciary duty to the *relationship* between human actors. The core insight is that loyalty is not to single human preferences or any aggregation, but rather to the human potential to connect and form superintelligence. This is the insight I got when I read [Coherent Blended Volition (CBV)](https://www.lesswrong.com/w/coherent-blended-volition) , though I’m expanding on it.

### Plex:
Mhmm. Why isn’t this clicking into place?

### Audrey Tang:
Are you familiar with the Ben Goertzel idea from 2012? The main idea is that instead of extrapolating human volition, which allows a razor-thin margin of error and is very difficult anyway, we focus on the capacity of humans to blend their volitions over time.

### Plex:
If I imagine looking at a world two hundred years after this has been done and describing it to someone alive today, do you think that person is profoundly horrified?

### Audrey Tang:
Well, that is not different from the way we would explain today to humans from two hundred years ago?

### Plex:
No, I think it’s much worse. A person from two hundred years ago would be confused. But if you just blend the volition in a way that doesn’t preserve and protect individual agency and human values robustly, I think it falls to natural gradients.

### Audrey Tang:
I think what CBV means by “blending” is not averaging. Each human has an incommensurable, irreducible set of preferences. Instead of extrapolating, which will only diverge, we need to figure out a way we can “live and let live,” and make this agreement coherent such that everybody in a hyperlocal sense sees it as the obvious way to go. Increasing this capability over time yields superintelligence, but all of its components are human-compatible.

### Plex:
I agree this vision sounds really good. I still strongly have the intuition that you don’t end up anything like that. Maybe the thing I’m missing is that what you’re pointing to is not the final thing that defends humane values, but instead, this is the bootstrapping process to figure this out, sense-make, and get to the point where we could do that.

### Audrey Tang:
If, at that point, we figure out that it is technically impossible to climb another ladder, then a strong, horizontally aligned group intelligence would stop there instead of committing suicide. Which is one of the good endings.

### Plex:
Yes. We realize we are not ready to take the next step, or it is physically impossible, and therefore, we don’t. This seems pretty healthy, though also very ambitious. Getting to a system where we’re so coordinated that we could both notice we can’t safely take another step and then actually not do it—I agree this is a win condition. Or, at least, it’s vastly better than where we are now.

### Audrey Tang:
And I think it requires a marketing campaign. I like the phrase, “If anyone builds it, everyone dies.” One way I would market it is for it to pay dividends along the way. Otherwise, it will sound like the proposal to reinforce cabin doors before September 11th. If you do it robustly, it will be extremely costly, and the success is “nothing happens,” which is not a lasting policy proposal. This steerable, horizontal blended volition plan achieves the same thing—we can agree to stop—but marketed as solving polarization and many other challenges along the way.

### Plex:
Yep, this seems pretty healthy. There are a couple of things where what the ecosystem needs feels close to the skill set you’ve developed.

### Plex:
The first is humanity’s sense-making about where we want to go. We’re going to have technology that could do truly profound things—solve medicine, aging, climate change, etc. We as a species haven’t figured out what we want to do with that. The kind of mechanism design you’ve developed might be extremely powerful for this: give people an understanding of what might be possible, and then figure out what we want to do with all this possibility.

### Audrey Tang:
Like participatory design over lightcones.

### Plex:
Yes. As well as the obvious effect, it has the nice effect of being motivating. A lot of people who got into AI safety early were motivated because they read [Coherent Extrapolated Volition (CEV)](https://www.lesswrong.com/w/coherent-extrapolated-volition-alignment-target) and realized this isn’t just doom and gloom; we could build something truly incredible. Having that process, sense-making, and collaboratively figuring out a North Star seems potentially very powerful.

### Audrey Tang:
I agree. This could also be a good bootstrap phase toward CEV, assuming CEV is achievable.

### Plex:
Manually do a little bit of CEV ourselves. I funded a friend to make a series of interviews called “Utopiagraphy,” interviewing people about what they would like the future to be like. But something much more scalable seems way better.

### Audrey Tang:
Definitely. With [Weval.org](http://Weval.org) and the Global Dialogue Challenge, we have something like clustered volition, so if you extrapolate, you start from the cluster level, not the individual level. This feeds into the hyperlocal moral scope thing we just talked about. They seem very synergistic.

### Plex:
Absolutely agree. The second point is that the alignment field itself is astonishingly bad at sense-making about what the technical problem is or how to address it. If you take three alignment researchers and put them in a room, you will have more than three opinions, and not just different opinions, but different ontologies and definitions.

### Plex:
Getting to the point where the people trying to solve the problem can speak the same language is something we are incredibly far away from. This results in wasted effort, frustration, and infighting. We as a community are playing far below the level we need to be. I think the stuff you’ve been working on might be extremely powerful for resolving some of that.

### Audrey Tang:
Indeed, the same technology that translates “climate justice” to “creation care” and back can be used to translate among the different alignment vocabularies.

### Plex:
Yep. And there are probably extra pieces of mechanism design needed where some stuff gets deep into very technical weeds. We need a way to cause people to engage across ontological gaps and strong differences—where one person believes if we do ‘A’, the world will end, and another believes if we *don’t* do ‘A’, the world will end. Also, they’re talking different languages, and the difference is buried deep in a crux involving abstract philosophy or math that only ten people on Earth understand.

### Audrey Tang:
Maybe they’re both right and the world ends either way, but yes.

### Plex:
I imagine there’s some extra mechanism design needed to make technical coherence in a domain where you can’t get a clear reward signal, because you can’t check whether your plan will work without testing the thing, and if you test it, whoops, if you got it wrong.

### Audrey Tang:
I think the hope of the Metta AI simulator is that at least the parts around group dynamics and takeover scenes—they even have a scenario called “Clips versus Cogs,” where the Clips try to turn everything into paperclips and Cogs try to defend—can at least put some of these technical arguments into testing whether they’re truly world-ending without ending the outlying world we’re in. It can just end the simulated world.

### Plex:
You can definitely run small experiments, but there are likely to be important distributional shifts. You want a robust theory that you have reason to expect to scale to the real world, rather than relying solely on experiments, although experiments can give you useful data points.

### Audrey Tang:
And also give us shared vocabulary. A lot of this is reminiscent of theoretical physics, where a good experiment can unify many different theoretical branches because they suddenly realize they’re talking about the same thing.

### Plex:
That would be the dream.

### Audrey Tang:
Amazing. Well, I think we’re in the lucky timeline — we only took an hour but managed to align on everything we have talked about. So obviously, alignment is possible between researchers.

### Plex:
It is possible if both people are running a process that’s able to receive and translate. Having that be scalable to a bunch of other people seems very good if possible.

### Audrey Tang:
Yes. Let’s make it happen.

### Plex:
Awesome. Happy to continue to collaborate. Let me know if there’s anything you’d find useful. I have a pretty strong network having worked in this field for a decade.

### Audrey Tang:
Definitely. As you know, I’m new to the technical part of the field, though I’ve been in the policy part for a long time. I will be spending much more time visiting technical communities. I literally started with the FHI folks in Oxford, so if there are other high-value ones, let me know.

### Plex:
Cool. Probably the one I most recommend would be talking to MIRI (Machine Intelligence Research Institute). MIRI has a lot of technical clarity on stuff that relatively few people do. They’re also not super good at communicating some parts of it; them picking up some of your skills of convergence and communication would be good.

### Plex:
There’s also the EA Hotel in Blackpool, UK. If you’re ever in the UK, drop by. Also, the staff are huge fans of yours and would reliably give people you recommend free food and accommodation to stay around others thinking about AI safety, or host retreats or hackathons.

### Audrey Tang:
Amazing. Blackpool North. That sounds remarkably accessible from Oxford.

### Plex:
Also, the LessWrong community weekend happens around September most years and has a high concentration of interesting people.

### Audrey Tang:
Yeah. I was just at The Curve in Lighthaven. It was very nice.

### Plex:
Yep. A lot of Lighthaven events are also great. Incredible speaking with you, and yeah, glad to have you on the team working to save the world.

### Audrey Tang:
Definitely. Keep up the great work! Live long and prosper. 🖖

### Post-discussion comment from Plex:
My takeaway epistemic stance is I still expect that before there are strong agentic AI systems you need to do the kind of alignment based on theory which [scales arbitrarily](https://aligned.substack.com/p/alignment-solution) and is in some sense unified to get a stable Culture-style good state with high power AIs involved. However, I think the kind of work you’re looking at — improving sensemaking and coordination both globally and within the alignment community — could make it much more likely that humanity figures this out (or finds a way around my concerns), so I endorse it as among the most useful approaches I’ve seen people take.

I didn’t come into the conversation knowing about some of the technical proposals Audrey was looking at, so we couldn’t get all the way into the technical weeds, but I’ll take more of a look at her readings and if we have future conversations perhaps can get to some of the extra cruxes.

In particular, I want to unpack whether my intuition that CBV ends up leading to alien futures in a way that people today wouldn’t endorse actually checks out, once I have clarity on what they’re suggesting. And I’m also interested to try and grok the reason why Audrey is hopeful about finding solutions to hyperlocal moral issues which you can recurse up through different scales and have that continue to go well from the perspective of the smallest units.

