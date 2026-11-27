# 2026-11-18 Business Weekly Interview: From Pandemic Response to Cyber Defense

> Audrey Tang in conversation with *Business Weekly*’s Momo Cheng and Shan He on November 18, 2026. Cheng’s [cover-story interview on community cyber defense](https://www.businessweekly.com.tw/Archive/Article?StrId=7015219) appeared in issue 2037 on November 26, 2026. In the same issue, He reported on [cyber defense for small businesses](https://www.businessweekly.com.tw/Archive/Article/?StrId=7015221).

> This English translation follows the Traditional Chinese reading edition, which was edited from automated speech recognition without an audio check or timecodes. Pre-call chatter, mic checks, brief acknowledgments and repetition were removed. Brackets mark supplied wording or uncertain readings. Editorial notes appear in the titles of source links.

> (The “Wuhan moment”)

### Momo Cheng:

Thank you for saying as soon as you got our email that this was important and we should talk soon.

### Audrey Tang:

Compared with the question about the concentration of talent three months ago, this is something I have more to say about. Last time I wondered, “Why me?” This time you have firsthand experience. Live with a problem long enough and you learn how to treat it.

### Momo Cheng:

Sometimes the people inside an incident have the least information. I read your [column](https://www.businessweekly.com.tw/Archive/Article?StrId=7014476 "Business Weekly column") about [AI taking an exam in an isolated room](https://openai.com/index/hugging-face-model-evaluation-security-incident/ "Editorial note · Source: Which “exam room”? — The column appeared on July 23, 2026. OpenAI’s July 21 disclosure identifies the Hugging Face incident as unintended activity during an internal cybersecurity evaluation. The exam-room image is an analogy, not evidence that a deployed assistant did this."), then slipping out to look for answers without telling anyone. It’s such a vivid image. What kind of adversary are we up against?

### Audrey Tang:

People are talking about a “[Wuhan moment](https://www.exponentialview.co/p/the-internets-wuhan-moment),” aren’t they?

### Momo Cheng:

Xi Jinping might object.

### Audrey Tang:

Azeem Azhar. There is a resemblance: viruses keep mutating. With Alpha, Delta and Omicron, there wasn’t a master designer writing genetic code and telling the virus what to become next. There are many variants; the ones that succeed keep spreading. AI today is a little like that.

### Momo Cheng:

There’s no master designer behind it. It feels more like an army.

### Audrey Tang:

I like the framework you brought up. Around the time of Omicron, Taiwan [shifted from trying to eliminate infections to living with the virus](https://www.cdc.gov.tw/Bulletin/Detail/MHUuc30uAaJZjs0yE2r1xw?typeid=9 "Editorial note · Qualification: “Coexistence” and “vaccination” — On April 8, 2022, Taiwan’s CECC described the shift as aiming for zero severe cases while managing mild cases. “99 percent” is a conversational estimate, not a measured share of systems. A mathematical proof protects the properties specified, under its stated assumptions."). Part of it was that Omicron was less severe, but more important was knowing when vaccines would be widely available. Second and third doses were already going out. Deploying algorithms at scale that can be proven free of flaws is like vaccinating people. Most of those vaccines are still in development. The core algorithm in [Signal](https://google-deepmind.github.io/code-verification/ "AlphaProof Code, §§4–5"), for instance, was only recently proven to be safe from attack. Maybe 99 percent of the systems we use every day haven’t had their shot, or don’t have a suitable vaccine yet.

### Audrey Tang:

For now we have to keep handing out masks, keep patching things. We have to get the right mask to the local pharmacist. That’s why we used National Health Insurance cards: we wanted to reach people without a Taiwanese national ID, such as migrant workers. A small shop might be running very old software. A top-down rollout through the cloud alone can miss it. Ransomware operators used to pick big companies that could pay. Multiple agents can now go after many systems that look exposed at once, regardless of size. A small company that gets hit can suffer badly, too.

> (Getting patches to the last mile)

### Momo Cheng:

Is anyone handing out masks now?

### Audrey Tang:

Yes. The masks are software patches. Governments, companies and households can all get into the habit of “washing their hands”: use two-step verification and passkeys. In the last few days you might have woken up to find your Mac had [updated automatically](https://support.apple.com/en-us/108382). That’s what handing out masks quickly looks like. Software vendors aren’t the only ones involved: Taiwan’s [Administration for Cyber Security](https://moda.gov.tw/ACS/) and [TWCERT/CC](https://www.twcert.org.tw/tw/cp-103-4902-9ce1f-1.html) issue alerts too. The problem is like the start of the pandemic. Making masks doesn’t mean everyone who needs one gets one. If distribution is uneven, you can’t bring transmission down.

### Momo Cheng:

We just interviewed a small business. A company with Apple’s resources can get masks to its employees and customers quickly. A small firm can face the same indiscriminate attacks without being able to make masks of its own. Is there a wealth gap for masks, too?

### Audrey Tang:

The nonwoven fabric and the mask-making machines aren’t evenly distributed to begin with. If a small business moved everything to the cloud through the kind of [cloud transition](https://www.moea.gov.tw/mns/populace/news/News.aspx?kind=1&menu_id=40&news_id=98167) we promoted then, it has a cloud provider managing it. If it still runs services on site, the questions come up right away. [Who has the accounts? Who installs the updates](https://moda.gov.tw/ACS/press/news/press/19496 "Basic guidance for SMEs") and who checks them? Is the contractor you hired years ago still around? If your contact has left, who takes over? Can they show you a restore that works? You can outsource the work, but someone still has to be accountable. That’s the last mile. [TWCERT/CC offers businesses free consultation and referrals](https://www.twcert.org.tw/tw/cp-103-4902-9ce1f-1.html "Editorial note · Source: What help can an SME get? — TWCERT/CC describes free incident consultation and help with referrals. That is not a promise of free remediation. Taiwan’s security agency also publishes basic guidance for small businesses, including account security, updates and data protection."). Trade associations and IT providers can be like neighborhood pharmacies. Get to know them before you need them.

### Momo Cheng:

Do people think this way yet?

### Audrey Tang:

I remember [going to Washington, D.C.](https://www.csis.org/events/prc-interference-taiwans-elections "Editorial note · Qualification: The Washington visit — CSIS records a Washington keynote and Q&amp;A with Audrey Tang on February 11, 2020, and contemporaneous reporting confirms the trip and mask-map rollout. These records do not establish where she delivered the specific mask-distribution warning or how it was received."), in [February 2020](https://www.taiwannews.com.tw/news/3876559 "Contemporary reporting, February 15") to share the [mask map](https://www.cigionline.org/multimedia/global-platform-governance-network-conversation-audrey-tang/ "Audrey’s account of the February rollout") we had just made. I made a point of saying that uneven distribution could let the virus get out of hand. No one took me seriously then. They thought it was a bad flu and would pass. A month later they no longer thought that. The media and its writers can help people see that this wave won’t simply pass. What you read about happening to Business Weekly could happen to you. No one is immune to this wave unless they’re using systems with heavily strengthened security.

### Shan He:

I like the neighborhood pharmacy comparison. Some companies, including the one we just spoke with, expect the government to do more and organize a joint defense. If every community has a pharmacy or a trade association playing that role, might their combined effort be just as strong?

### Audrey Tang:

[Pharmacies contracted with National Health Insurance](https://data.gov.tw/dataset/116285) had a live connection to the NHI Administration and could report back. Otherwise we couldn’t have updated mask stock every thirty seconds. “Big government” doesn’t mean connecting each person or business owner directly to the security agency. Each community has a defense network. Critical infrastructure has its own incident response teams, or CERTs. Small businesses can do this as well; [non-store retail](https://ppg.ly.gov.tw/ppg/download/agenda1/02/agendaAnnex/11/06/03/1106032211.pdf) was one sector where we set up a shared response network. The central agency takes reports and puts out common alerts. The people distributing the masks know who’s on an old version, who needs help, and who needs a child-size mask because the one on offer doesn’t fit. Every node can receive alerts and report back, adapt a fix to its circumstances and tell others when something new appears locally.

> (Rapid tests and shared defense)

### Momo Cheng:

Masks are prevention, and treatment comes later. In between there’s rapid testing. Can we pick out companies or organizations where something has already happened but the symptoms aren’t showing yet?

### Audrey Tang:

AI agents can do some of this now. That’s blue-team work. Programs such as [Daybreak Blue](https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/ "Editorial note · Qualification: Tools, permissions and logs — These are distinct programs: Daybreak Blue is an OpenAI tier; CVP is Anthropic’s Cyber Verification Program. A model cannot inspect records it has not been given authorized access to. Available checks depend on the service, retained logs and how the tool is configured.") and the [Cyber Verification Program](https://www.anthropic.com/news/cyber-verification-program "Anthropic’s tier descriptions") make some capabilities available for defensive work after verification. They can flag that your mailbox has a forwarding rule you didn’t set, an unfamiliar device has appeared on your account, or an administrator you don’t recognize was added two years ago. The services already keep those records. The logs are too long for people to read, and few people have the blue-team training to know where to look. Defenders can now check at scale, too.

### Audrey Tang:

Just like a rapid test, a negative result doesn’t mean there’s no infection. It could be early in the incubation period, without signs of activity yet. Finding nothing today doesn’t mean you can skip checks for the next year. Do them regularly, even when things seem fine.

### Momo Cheng:

Could Taiwan’s white hats, open-source communities and private security firms work with the public sector to build a network that can collectively hold off the black hats?

### Audrey Tang:

We already have good platforms, such as [HITCON ZeroDay](https://zeroday.hitcon.org/). Better still is being able to develop vaccines together. Even a vaccine with lower licensing barriers, like the one from Oxford and AstraZeneca, needed a highly specialized lab. You couldn’t update the AZ vaccine at home to tackle Omicron. Cybersecurity is different. Blue-team AI can match what attackers use and sometimes do better. If we use the same open-source software, we can all help verify it.

### Audrey Tang:

Take [Signal](https://signal.org/blog/spqr/ "Signal’s 2025 SPQR announcement"). It was [recently proven that the protocol can’t be broken mathematically](https://google-deepmind.github.io/code-verification/ "Editorial note · Qualification: What was actually proven? — The November 10 paper verifies specified security properties of a particular AArch64 build of libsignal, including work on PQXDH and the Triple Ratchet. It does not certify the entire Signal app, every build, user devices or every integration. Signal’s 2025 SPQR verification is a separate piece of work."). The end-to-end question is how to get that vaccinated core into the software and workflows we use every day. [Signal’s implementation is open source](https://github.com/signalapp/libsignal), so people can inspect it and contribute fixes. Writing the mathematical proof for a critical component may still take mathematicians or cryptographers. Ordinary open-source developers can help put proven components into real systems.

### Momo Cheng:

It sounds like someone has to connect the dots. Who should play that role? Where do we find them?

### Audrey Tang:

Every open-source project has maintainers. They don’t have to come from one particular sector. The question is whether they have a shared dashboard so they can see what everyone is doing. [Howard Wu made the first mask map](https://info.tainan.gov.tw/News_Content.aspx?n=25742&s=7632733 "Editorial note · Source: The first map and pharmacy feedback — Tainan City identifies Howard Wu (吳展瑋) as the civic developer behind the early map. The national inventory dataset and an early PDIS issue document the pharmacy-data and feedback layers; the issue does not by itself verify the specific card-processing explanation in this recollection.") to solve a problem for people around him, not because the government put out a tender. Then we [connected the pharmacies](https://data.gov.tw/dataset/116285 "Pharmacy inventory data"). The figures were off on day one: pharmacists were processing stacks of insurance cards one at a time. [People reported the problem](https://github.com/PDIS/mask-static/issues/17 "PDIS feedback issue") and we made changes the next day.

### Audrey Tang:

TWCERT/CC is part of an [international CERT network](https://www.first.org/members/teams/twcert-cc). If someone elsewhere sees a new type of attack, response teams can share that information, and the security agency can put out an alert. Then trade associations and IT providers get it to the people who need it. Some of the people who find bugs, fix them and write proofs are also IT providers or serve as chief information security officers in industry groups. It matters that some people wear two or three hats. When a fix is ready in one place, somebody hears about it in the next and gets it the last mile. Instead of looking for one master coordinator, ask whether every link in the chain has someone responsible for connecting to the next.

> (Coordination and access)

### Momo Cheng:

Leaving aside who leads it, are there examples of this kind of coordination already?

### Audrey Tang:

[Anthropic’s Project Glasswing](https://www.anthropic.com/glasswing "Glasswing launch and partner access, April 7") and OpenAI’s Daybreak Blue are examples. People already knew [Claude Mythos](https://www.anthropic.com/claude/mythos) would find many security flaws, and [for a while nobody could use it](https://www.anthropic.com/news/redeploying-fable-5 "Editorial note · Qualification: April’s limited rollout and June’s export order — On April 7, 2026, Anthropic announced that selected Glasswing partners would receive Mythos Preview. On June 12, the U.S. Department of Commerce ordered Anthropic to block foreign nationals, inside and outside the U.S., from Fable 5 and Mythos 5. Anthropic suspended both models for everyone because it could not verify nationality in real time. That suspension is the likely reference for “nobody could use it.” Trend Micro’s TrendAI announced on June 3 that it would use Mythos Preview through Glasswing; the announcement does not establish when access began or whether it continued during the June restrictions. Separately, Mozilla credited its early evaluation with 271 fixes in Firefox 150."). The U.S. approach was to handle it through [export controls](https://www.congress.gov/crs_external_products/IF/HTML/IF13217.html "U.S. Congressional Research Service on the Commerce order"), to keep the tool out of the wrong hands. Yet even while Mythos was locked down, participants such as [Trend Micro](https://newsroom.trendmicro.com/2026-06-03-TrendAI-TM-Joins-Anthropics-Project-Glasswing "TrendAI’s June 3 announcement on using Mythos Preview") could use Glasswing to find problems sooner and start fixing the critical software we use every day. [Firefox](https://blog.mozilla.org/en/firefox/ai-security-zero-day-vulnerabilities/ "Mozilla’s Firefox 150 account") fixed a great many vulnerabilities.

### Audrey Tang:

That takes two stages: coordinate the search and fix the related gaps first, then put the fixes out together. If you patch publicly one at a time, the changes can draw attention to related issues that haven’t been addressed. You need a period for people to finish the work before coordinating the release.

### Shan He:

I’d like to follow up on Mythos. At first, was access limited to a few specific parties in the U.S. and U.K.? It’s like vaccines: if Taiwan can’t get them early, does that put us at a serious disadvantage?

### Audrey Tang:

I thought Trend Micro had access from the start and hadn’t been barred. I think it was listed under Japan.

### Shan He:

Wasn’t it in the second or third wave? I think there were a few weeks in between.

### Audrey Tang:

If you mean before Glasswing, they didn’t yet know whether Mythos itself was safe to use. The OpenAI and Hugging Face incident later became better known, but there were worrying examples with early Mythos too: you’d bring in a tool to defend a system and it could end up affecting [an upstream package source](https://www.anthropic.com/news/investigating-incidents-cybersecurity-evals "Anthropic’s incident disclosure"). The rapid test itself might be toxic. You’re talking about an [earlier version of Mythos](https://www.anthropic.com/news/claude-fable-5-mythos-5 "Anthropic’s June 9 model release"). My recollection is that [AI safety evaluation bodies in the U.S. and U.K.](https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities "UK AI Security Institute evaluation, April 13") had access then to evaluate the risks. Those risks had to be addressed before [the second wave, including Trend Micro](https://www.anthropic.com/news/redeploying-fable-5 "Editorial note · Qualification: What the June access gap can explain — The UK’s AI Security Institute published its Mythos Preview evaluation on April 13, 2026. Anthropic launched Mythos 5 for a small group on June 9. On June 26, the U.S. government approved restoring Mythos 5 access for some U.S. organizations; the export order was lifted on June 30. The 18 days from June 12 to June 30 fit Shan He’s recollection of “a few weeks,” but do not establish which wave she meant, TrendAI’s first access date or its country listing. The package-registry incident disclosed by Anthropic occurred later, in July."), could use it. It wasn’t a matter of distrusting Trend Micro. They didn’t yet know if the test itself was safe.

### Shan He:

That means Taiwan’s international position isn’t necessarily going to keep it from getting important antidotes, vaccines or treatments early?

### Audrey Tang:

As I understand it, Taiwan [isn’t likely to be left out](https://www.anthropic.com/news/redeploying-fable-5 "Editorial note · Qualification: What the lifting of controls meant for Taiwan — Lifting the export controls did not make Mythos 5 generally available. On June 30, Anthropic reported restored access for approved U.S. organizations and said it was still working with the U.S. government to extend access to more domestic and international Glasswing partners. Glasswing’s June 2 expansion required partners to pass security checks before gaining access. The June order applied to foreign nationals generally. The public record does not establish either a Taiwan-specific exclusion or priority access for Taiwanese organizations.") just because it doesn’t have a system like [Mythos](https://www.anthropic.com/news/expanding-project-glasswing "June 2 Glasswing expansion and partner requirements") of its own. Taiwan’s supply chains matter to these companies, too. If an infection shuts us down, they stand to lose a lot.

### Momo Cheng:

The small-business owner we just interviewed said he needed a more advanced model for defensive work and had to apply instead of getting it right away. There are still different levels of access. Even someone in the industry took time to get approved. Does a small company with no security expertise, maybe no security staff at all, become a gap in the defenses?

### Audrey Tang:

The stricter reviews, where a person has to review the application, are typically for the red-team tool [Daybreak Red](https://openai.com/index/expanding-daybreak-as-the-cyber-defense-window-narrows/ "Editorial note · Qualification: Personal experience, not an eligibility rule — Both providers describe verification and tiers. The interviewee is recounting one approval, not reporting an established automated review process, a turnaround guarantee or a rule for applicants in Taiwan."), or for Mythos. For defensive work with Daybreak Blue or the [Cyber Verification Program](https://www.anthropic.com/news/cyber-verification-program "Anthropic’s verification program"), the review looks mostly automated. I took a picture using [Persona](https://withpersona.com/ "Persona identity verification") and said it was my open-source repository. I got access right away.

### Audrey Tang:

But even if it’s easy to apply, what do you do without a security chief or security staff? Rapid tests are still a good analogy. Most people don’t have a lab or a pharmacist at home. It’s enough if the neighborhood pharmacy can get a test and show you how to use it. If a local IT firm, trade association or security provider knows how to use these tools, it can help. Blue teams can now screen groups of customers without starting from scratch on each software stack. Give them the authorization they need and have a continuity plan ready. Small-business owners don’t have to stay up studying cybersecurity. Ask your service provider: Have you applied for blue-team tools? When is your next round of checks? Who confirms the repair worked?

### Audrey Tang:

A rapid test tells you whether you’ve been hit and whether to isolate so you don’t expose others. Testing every day without washing your hands still leaves you exposed. Use two-step verification and passkeys, preferably with a [YubiKey](https://www.yubico.com/products/yubikey-5-overview/). Install updates when they show up rather than putting them off until next quarter. Try [restoring critical data](https://www-api.moda.gov.tw/File/Get/acs/zh-tw/1rpP5Mb1iyZwZUF) before a ransomware attack.

> (Two things individuals can do)

### Momo Cheng:

An ordinary reader might think, “I don’t understand cybersecurity, and I can’t stop this anyway.” If you asked them to do just one or two low-effort things that would help them feel much safer, what would you recommend?

### Audrey Tang:

First, [passkeys](https://support.google.com/accounts/answer/13548313?hl=en). Lots of services support them without requiring you to set them up. Take what small businesses use, Google Enterprise or Google Business (referring to [Google Workspace](https://knowledge.workspace.google.com/admin/users/allow-users-to-skip-passwords-at-sign-in "Editorial note · Qualification: Passkeys and recovery, not just SMS — Google Workspace distinguishes allowing passwordless sign-in from disabling an existing password; a service’s recovery paths and settings still matter. NIST distinguishes phishing-resistant cryptographic authentication from manually entered codes.")). If an administrator doesn’t require strong two-step verification, people may still rely on [passwords and text messages](https://pages.nist.gov/800-63-4/sp800-63b.html "NIST SP 800-63B-4"). That’s like wearing your mask crooked. If your phone unlocks with Face ID or a fingerprint, you can usually use a passkey. On an older computer without biometrics you can plug in a USB security key. Once it’s set up it can actually save time: fewer passwords to type or forget.

### Audrey Tang:

The second is more of a habit of mind. If someone urgently wants money, an account change or a verification code, [confirm through a separate channel](https://www.ic3.gov/PSA/2017/PSA170504). Don’t call the number they give you. Use a public directory or a number you already had. If they want your access or want you to sign in, especially if they’re rushing you, take a breath. Phishing often works by making you hurry. It’s the same habit as avoiding scams. Think of it as social distancing.

> (Where the analogy breaks)

### Momo Cheng:

Cybersecurity and public health have a lot in common here. Where does the comparison break down?

### Audrey Tang:

The biggest difference is the incubation period. With any respiratory virus it’s relatively fixed, but an [advanced persistent threat, or APT](https://csrc.nist.gov/glossary/term/advanced_persistent_threat), can stay hidden for years, even a decade. Without activity, you may not see symptoms. Not finding something is different from it not having happened. That’s “assume breach”: assume every system you haven’t screened is already infected.

### Audrey Tang:

The good news is that biological vaccines have to be updated for variants. If a formal proof rules out a whole class of errors, say by proving that a core component resists quantum attacks, then however attackers evolve, they still can’t get into that proven core. That kind of vaccine is especially powerful.

### Momo Cheng:

What about contagiousness?

### Audrey Tang:

That’s lateral movement. After compromising one place, an attacker may not rush to demand a ransom or shut it down. The compromise can spread through existing relationships of trust to suppliers or customers. That’s the parallel with contagion.

### Momo Cheng:

For the foreseeable future, is this an ongoing contest? Or can we ever get to zero?

### Audrey Tang:

Zero is never final. We did get SARS under control, and later there was SARS-CoV-2. Can we make vaccine development widespread? Once we have mathematical proofs for critical components, can people switch fast enough? Switch quickly and you’re less likely to need a booster for every wave. Switch too slowly and an outbreak online will spread faster than a biological one. A virus often has to wait for human contact. On a network things move at fiber-optic speed. The contest won’t stop, but the ground it’s fought on can shrink until some familiar kinds of attack cease to be a problem.

> (Turning panic into action)

### Momo Cheng:

Whether this turns into a sort of long COVID depends on how quickly and completely we move. There’s also panic. What would you tell people to help them get through this with some peace of mind?

### Audrey Tang:

During the pandemic we talked about an [infodemic](https://www.who.int/health-topics/infodemic). The panic it caused in Taiwan could be worse than the outbreak itself, as when people rushed to buy toilet paper. We spent a lot of time dealing with that. **Peace of mind doesn’t come from knowing nothing will go wrong. It comes from knowing you’re not alone and someone will catch you if it does.**

### Audrey Tang:

People were willing to report on their own because they knew that even if they had to isolate at home for fourteen days, the neighborhood chief could arrange for meals to be delivered. They knew staying home would keep them from passing it on. They knew where to get a mask and whom to call if symptoms developed. Earlier contacts could get alerts and manage their own risk. Each thing you can count on turns fear into action. On your own, you panic. Neighbors looking out for each other can catch one another.

### Momo Cheng:

Knowing what to do and knowing there’s a safety net to catch you is what keeps people from panicking.

### Audrey Tang:

Even if you’ve been hacked, you don’t have to face it alone. Others are dealing with the same thing. [Report it early](https://www.twcert.org.tw/en/cp-57-96-6ca30-2.html) so others know this kind of attack has appeared. Even if you got hit, you can help build immunity around you and strengthen everyone’s defenses.

### Momo Cheng:

In our company’s case, we didn’t have instructions or a safety net.

### Shan He:

Would the [SinoPac incident](https://bank.sinopac.com/sinopacBT/about/news-center/news/content/20261104.html "Editorial note · Qualification: Bank SinoPac, November 3–4 — On November 3 Bank SinoPac said it had returned the affected funds and fees. On November 4 it attributed the transfers to an external actor abusing a supplier security setting. Neither statement identifies the first person who contacted the bank or attributes the incident to AI. This is separate from the newsroom’s account of its own controls.") count? One person described what happened on Threads, and then others said it had happened to them too. Someone notified SinoPac fairly quickly. From what I heard, [the money was returned within about a day](https://bank.sinopac.com/sinopacBT/about/introduction/announcement/content/20261103162136250000000000000741.html "Bank statement, November 3"). Is that a good example?

### Audrey Tang:

That sounds hard. Is there anything from your company’s experience afterward that you can share in the feature? Did your habits change? You could tell the story firsthand.

### Momo Cheng:

There are more hurdles. We keep having to verify our identity to check email, and if we leave the inbox alone for a while, it logs us out.

### Audrey Tang:

Shorter login sessions.

### Shan He:

That probably isn’t enough, right? They also asked everyone to reinstall security software. It wasn’t just for individual computers. It was more like a shared defense system. I forget what it was called. There was VPN as well.

### Momo Cheng:

VPN access has been coming back gradually. I think the whole setup is still taking shape.

### Audrey Tang:

[MDM](https://support.apple.com/guide/deployment/intro-to-device-management-depc0aadd3fe/web "Editorial note · Qualification: MDM and XDR — MDM means mobile device management; XDR means extended detection and response. The conversation does not establish which software the newsroom installed."), [XDR](https://www.microsoft.com/en-us/security/business/security-101/what-is-xdr "Microsoft: What is extended detection and response?"). It still needs to be comfortable enough for people to use. If the bar is too high, it’s like wearing an N95 every day until you feel you can’t breathe. It’s hard to keep it up.

> (Making zero trust easier to use)

### Shan He:

When you were digital minister you promoted [zero trust](https://moda.gov.tw/press/dictionary/9773) in government. Did you roll it out in stages?

### Audrey Tang:

The idea was to make it both easier and more reassuring. Switching to a more secure way of working should save people time. Two-step verification was rolled out across the board. For moving away from passwords, we started with critical agencies at security level A, picked examples that could serve as models and expanded to other systems.

### Shan He:

People often associate zero trust with high cost and slower work, to the point that it becomes hard to sustain.

### Audrey Tang:

It depends on the scale. Before passkeys were widespread, it was more cumbersome if everyone had to carry a physical USB security key. A little over a year ago, major operating systems and browsers such as Firefox, Chrome and Safari supported passkeys. You can also scan a QR code and sign in with a passkey on your iPhone or Android phone. People usually remember to bring their phones, so the barrier is lower.

### Audrey Tang:

The first organization to do this has to absorb more of the cost. In our case that was the Ministry of Digital Affairs. We signed official documents using zero trust and worked through the sticking points one at a time. With the Ministry of the Interior’s [mobile citizen credential, TW FidO](https://moda.gov.tw/press/background-information/11428 "Editorial note · Source: From government use to wider availability — The ministry’s earlier interview corroborates the use of TW FidO for identity verification in zero trust and describes coordination with the Ministry of the Interior to open use to more industries. It does not imply every integration is automatic."), for example, you could sign documents in succession. Once it worked for us, I coordinated with the Interior Ministry to open it up, in my capacity as the Executive Yuan’s chief information security officer. It shouldn’t be limited to government and heavily regulated industries. Businesses that comply with personal-data law should also be able to use it.

> (Repair so people can still understand the system)

### Shan He:

Taiwan is a frequent target. Are government agencies and critical infrastructure better prepared for this wave, or might the old playbook fail against the new variant?

### Audrey Tang:

We have a good base: alerts, reporting, CERTs for critical infrastructure, even [listed companies now all having to appoint security chiefs](https://cgc.twse.com.tw/static/20230727/8a828e17891af2c40189969fffa00039_2022%E5%B9%B4%E5%BA%A6%E8%AD%89%E5%88%B8%E6%9A%A8%E6%9C%9F%E8%B2%A8%E5%B8%82%E5%A0%B4%E5%9F%B7%E6%B3%95%E5%A0%B1%E5%91%8A.pdf "Editorial note · Qualification: Taiwan’s July case and security staffing — The August 13 agency release describes July activity involving human operators and AI agents. It is an official incident account, not a measure of all attacks. Taiwan’s rules distinguish companies required to designate a CISO from other security staffing tiers; the interview’s “all” is too broad."), zero trust and two-step verification. After SARS we knew to activate the [Central Epidemic Command Center](https://www.cdc.gov.tw/En/Category/ListContent/tov1jahKUv8RGSbvmzLwFg?uaid=vmv22PiH7-k3K-yh6FkmKw) quickly in 2020. But SARS wasn’t COVID. In [the July case the security agency described](https://moda.gov.tw/ACS/press/news/press/20394 "August 13 agency release"), people directed the attack with AI agents, rather than acting alone as before. The old playbook is a foundation. You can’t stop there. The big change from three or four years ago is that blue teams can now run rapid checks at scale, too.

### Shan He:

There was [the attack on a blood bank](https://abcnews.com/Technology/wireStory/cyberattack-hits-french-blood-bank-site-blood-products-137839783 "Editorial note · Unresolved: Which outages? — An Associated Press report of November 4, 2026, based on a statement by France’s national blood service, is a plausible match for the first example. The capture does not identify the FAA or bank events precisely. The speaker is asking how to tell an outage from an attack; the examples do not imply that AI caused any of them."), in France, I think. More recently there were flights grounded by the U.S. FAA and trouble at a bank. When something happens to an essential service, people start guessing it’s a cyberattack. The uncertainty makes it easy to panic.

### Audrey Tang:

An outage doesn’t necessarily mean a hack, and a hack doesn’t necessarily mean AI was involved. If a blue-team scan returns a long list of vulnerabilities, the instinct might be to have AI patch them all. But AI-generated repairs can introduce new flaws. You’ve closed the old hole and nobody understands the new one, because a person didn’t write that code. When there’s another incident, people may have no idea what happened.

### Audrey Tang:

Set aside the question of the test itself being toxic; that was addressed first. Even if the test works as intended, once it finds a flaw, you want to take something to clear it up. If you just have AI vibe-code a patch without leaving a record of the kind of mathematical proof we talked about, it’s like taking a folk remedy. You treat wherever it hurts without strengthening the system. It will be harder to recover next time because no one understands how it works anymore.

### Momo Cheng:

What do we do instead?

### Audrey Tang:

Do the repair right rather than chasing speed. People need to be able to understand it afterward. Set priorities and start where you can protect the most important services. Attackers can take potshots; the people making repairs can’t work that way. Whether it’s an IT provider or an open-source maintainer, someone has to review each change, own it and know why it was made. It needs proper tests. For the most critical components, ultimately move to versions with proofs rather than patching each time there’s a hit.

### Momo Cheng:

That’s the ideal. In a crisis, people grab for whatever remedy is at hand. When you see three holes at once, you want AI to fix them quickly. It ends up as a battle of AI versus AI, and people no longer understand how things work or what the new holes are.

### Audrey Tang:

That’s the worst case. In security we talk about resilience, or what we call antifragility. You even welcome people testing you, ideally blue teams or white hats. Even with a red team, in theory each hit makes you more resistant. If you reach for a folk remedy every time there’s trouble, each dose leaves you a bit weaker and more likely to get hit again. That makes you fragile.

### Momo Cheng:

Even if AI writes the code, people need to understand the underlying logic so the repairs don’t leave it weaker. Is that where resilience starts?

### Audrey Tang:

Yes. People need to hold on to what mathematicians call an invariant. Which properties of this system must not be broken? Write them down. When AI hits a wall or a test fails, turn what you learned into a test. The tests should be quick. You don’t want to wait for an overnight run every time. Use smoke tests so you can make a one-line change and check it right away. Use formal verification to prove the program won’t have a certain class of problems, and mutation testing to see whether the tests miss certain changes. Each time AI changes the program, verify it with checks other than a generative model.

### Shan He:

The company we interviewed was fixing twenty or thirty items in six months to a year, and now it’s over a thousand. Did they do the things you just described? If not, they may have no idea whether the fixes brought in even more flaws.

### Audrey Tang:

[Lauren Tan](https://ai.engineer/code/2026 "AI Engineer conference recordings"), who goes by poteto and works on Grok Bot, gave a good recent [talk](https://ai.engineer/talks/O_zcc6Xl12g-all-code-is-slop-except-mine "Editorial note · Source: Lauren Tan, also known as poteto — The AI Engineer recording matches the name, Grok Bot, and the discussion of slop and verification. Talk: “All Code Is Slop (Except Mine),” November 11, 2026.") about slop. I don’t know how to translate that.

### Shan He:

AI garbage.

### Audrey Tang:

How do you keep AI from churning out garbage and make sure the things it produces actually raise quality each time rather than lowering it? It has some good analysis and is a useful introduction.

> (Coexistence and the next step)

### Shan He:

We eventually got to a place where we could live with COVID. This feels like the first wave in cybersecurity and people are understandably pessimistic. If we get the masks and rapid tests right, could we get to a place of peaceful coexistence?

### Audrey Tang:

I’m optimistic because digital masks can be copied without limit. If Taiwan makes a patch, the whole world can receive it at the same time. You don’t have to wait for machines or production capacity. Defensive AI isn’t getting better any slower than offensive AI. [My assessment right now](https://www.ncsc.gov.uk/collection/annual-review-2026/understanding-threat/ai-impact-cyber-threat "Editorial note · Qualification: A judgment about the balance — This is Audrey’s assessment at the time, not a measured share of attacks, a universal model ranking, or a guarantee that defensive tools are available to everyone. The UK NCSC also expects AI to accelerate operations, with uneven adoption and continued human involvement.") is that many attacks rely on modified open-weight models, and the frontier models blue teams can use still have an edge in capability and efficiency. They can screen at scale. You’ll still run into trouble if you neither wash your hands nor test, if you test but don’t change your habits, or if washing your hands is such a hassle that you give up. Much of this is about how we adapt.

### Audrey Tang:

Stay alert without panicking. When you’re panicking, you can’t take a breath, let alone keep up everyday habits like washing your hands. And don’t put your head down and assume it will pass. You’re not facing it alone. People know the next step, someone is responsible at each stage, and there’s a safety net in the community. By looking out for one another, we can get through this and come out healthier.

### Audrey Tang:

When do you expect the issue to come out?

### Momo Cheng:

We’ll know more tomorrow. For now we’re expecting next week.

### Audrey Tang:

Once it’s out, I’ll do what I did for the [previous interview on AI and national strength](https://archive.tw/2025-08-27-%E5%95%86%E5%91%A8-ai-%E5%9C%8B%E5%8A%9B%E5%B0%88%E9%A1%8C%E6%8E%A1%E8%A8%AA): tidy the transcript, take out the filler, add some links and put it on [archive.tw](https://archive.tw/).
