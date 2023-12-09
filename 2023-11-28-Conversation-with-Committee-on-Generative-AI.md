# 2023-11-28 Conversation with Committee on Generative AI

### Audrey Tang:

Good local time. I am Audrey Tang, Taiwan's Digital Minister. I'd like to first offer a broad description of my duties and the work we are doing to democratize AI. In Taiwan's Ministry of Digital Affairs, we uphold three core values: democratic participation, progress, and safety. This unique design ensures these principles coexist within the same ministry.

As the chair of the Institute of Cyber Security, I am also responsible for AI evaluation. Our decision-making process is based on the belief that there should be no trade-offs between progress and safety — and public participation. We strive to make decisions that simultaneously satisfy these overlapping values.

Now, generative AI is a transformative technology with unique challenges and immense utility. I personally use an M2 Max laptop with 96 gigabytes of RAM for tasks like drafting emails, aided by AI models trained on my own public domain transcripts and then fine-tuned locally. This approach is not only efficient but also ensures data security.

In Taiwan, we have established guidelines for the public sector's use of generative AI, prioritizing edge AI deployment. For sensitive tasks like personal data processing or drafting confidential materials, we avoid cloud solutions like OpenAI in favor of edge setups. This approach differs from many other public sectors and reflects our commitment to fostering democratic control over AI.

Our upcoming AI Evaluation Center focuses on inclusivity, working with Taiwan's many national languages. This ensures diverse inputs in AI development, avoiding opaque data sources and enabling citizen participation in determining AI inputs.

My ministry collaborates with organizations like GovLab, the GETTING-Plurality Research Network, OpenAI, and Anthropic. We've conducted four alignment assemblies to explore AI alignment, each using different collective intelligence methods to address various aspects of AI policy and ethical considerations. These assemblies tackle issues like information integrity, the ethical implications of AI, and the balance between honesty and harmlessness in AI development.

Looking ahead, our focus will be on protecting information integrity. We aim to continue balancing public health and economic prosperity, similar to our approach during the pandemic, and apply these lessons to the field of generative AI.

> (audience asks a question)

### Audrey Tang:

The alignment assemblies, organized to date, have been pivotal in shaping AI policy and risk assessment, demonstrating a strong commitment to democratic participation in AI development. The complete record of these assemblies is available at cip.org. We have hosted four assemblies, each focusing on different aspects of AI alignment. The inaugural assembly tackled the polarized views on GPTs, employing tools like Polis for community-driven surveys. Subsequent assemblies, in collaboration with OpenAI and Anthropic, delved into public concerns, evolving collective constitutions for AI governance.

Specifically, the first assembly, held at the end of March this year, coincided with the Summit for Democracy. It featured diverse participants, including notable figures like Dario Amodei. The session I led focused on the emergent capabilities of GPTs during a period of significant uncertainty. The discourse, especially on Twitter, was sharply divided between those advocating for rapid AI development and those cautioning against its risks.

To gauge public sentiment, we utilized Polis. This tool enables participants to vote on sentiments expressed by others, resembling a jury in a wiki survey. The uniqueness of this approach lies in the absence of predefined survey sentiments; they are entirely participant-generated. Through principal component analysis, we demonstrated that despite sharp polarization, there existed more consensus than disagreement. Our first alignment assembly's report, particularly on the Summit for Democracy, highlights this, revealing deepfakes, disinformation, and misinformation around elections as universally recognized short-term risks.

We shared these findings with leading labs, encouraging them to engage in more detailed discussions. The subsequent assembly in June, partnered with OpenAI, adopted AllOurIdeas, an Icelandic tool for prioritizing competing values like honesty versus harmlessness. This method allowed for the expression of more nuanced preferences. OpenAI's open report responded to these insights, outlining the survey's findings and the outcomes of an online deliberative forum, with its agenda collaboratively set by the survey's 1,000 U.S. participants.

In Taiwan, we replicated this model, adding two all-day, face-to-face workshops to formulate our collective constitution, the TAIDE model. October saw Anthropic adopting a similar approach, utilizing their AI training method for a people-driven AI constitution. Comparative analysis showed that while capacity remained consistent, the people's AI excelled in fairness, compared to Anthropic's baseline constitutional AI model.

Our discussions have covered diverse themes: policymaking, risk assessment, and the development of constitutions in both Taiwan and the U.S. The next assembly may focus on safeguarding information integrity.

> (audience asks a question)

### Audrey Tang:

Indeed, we collaborate with all three major public cloud providers. Notably, Microsoft and Google have established data centers in Taiwan. Amazon is also present here, offering computation services like EC2. Our requirements for these services stem not from data or source code localization, but from our need for resilience. Our experiences, such as the disruption to submarine cables connecting Matsu Islands and the main Taiwan Island earlier this year, have taught us the importance of domestic routing for our data. These cables were "accidentally" severed by fishing and cargo vessels flying the PRC flag, highlighting our vulnerability to such incidents. Therefore, we focus on ensuring that our computing and routing capabilities can withstand both natural and unnatural disasters, without depending on overseas routing that could be compromised in major earthquakes.

We've fostered strong relationships with public cloud providers, allowing us to avoid being locked into a single solution. Additionally, we maintain our own supercomputing cluster and utilize the National Center for High-performance Computing. Initially, this was to support Bloom, a significant scientific project, and to adapt it to traditional Mandarin needs. Now, with the availability of more open licenses, like those of Mistral and other models, we're at the forefront of adopting the latest innovations.

When it comes to balancing control between external vendors and internal operations, our approach varies based on the sensitivity of the material. For instance, the transcripts of my meetings are public domain, released under Creative Commons Zero, and are published on the IPFS network, ensuring their permanence and public accessibility. In contrast, for personal data, we are striving for GDPR adequacy and adhere to European standards. This includes employing privacy-enhancing technologies. For example, confidential but not top-secret official documents are signed by me using end-to-end encryption on my phone, ensuring even our system maintainers cannot access their contents.

We also encourage public adoption of digital infrastructure that supports end-to-end encryption through initiatives like the TW FidO app, which offers encryption and digital signature capabilities to every citizen. This approach reduces our dependency on any single vendor and ensures interoperability with commercial providers.

Moreover, in our procurement processes, we avoid using the same vendor for two consecutive layers in a stack. For instance, if one vendor provides endpoint detection and response, another will handle the TW FidO implementation. This policy prevents vendor lock-in and ensures that every layer adheres to international interoperable standards. While we are not exclusively reliant on open-source solutions like Element/Matrix, we firmly believe in preventing vendor lock-in at any level of our technology stack.

> (audience asks a question)

### Audrey Tang:

I believe that the notion of open source does not inherently guarantee greater safety. To me, open source signifies a potential for more collaborative safety and alignment research, provided there is a supportive ecosystem. This ecosystem should include responsible disclosure practices and collaborative red teaming efforts. The idea is that with many vigilant eyes, bugs become less complex and easier to address.

However, it's important to acknowledge that only a few open source projects actually achieve this ideal state. These projects vary greatly in their maturity, especially regarding security aspects.

The concerns surrounding the safety and security of generative AI are particularly pressing. In this context, I support concepts like Anthropic's idea of 'buffering'. This involves evaluating societal vulnerabilities — be it biohazards, cyber interference, or other risks — that emerging frontier models might exploit. If such a model exhibits a fraction of potential harm, say one-sixth, we must consider the possibility that malevolent actors may possess the remaining capability, which we might be unaware of.

Therefore, it's not advisable to immediately release these models as open weights or even as publicly accessible APIs. We must first strengthen our societal defenses and information integrity. This is crucial before allowing public access, not only for API consumers but also in the open-source domain, where withdrawal post-release is extremely challenging.

Given these safety concerns, we're establishing an AI evaluation center. This center will focus on inspecting how AI models might confabulate or perpetrate epistemic injustices. By identifying and halting these patterns, we aim to foster more honest AI interactions.

Techniques like LoRa and fine-tuning are valuable for aligning AI with societal norms. Therefore, all things considered, I favor models that are adaptable through fine-tuning. Our primary investments are in ensuring safety, alignment with ethical standards, and promoting collaboration.

While we do work with proprietary vendors, we aim to avoid vendor lock-in. Given the current dominance of certain models, it might appear that we're primarily engaged in open-source projects. This approach is a strategic move to counteract the imbalance between capabilities and safety in this field.

> (audience asks a question)

### Audrey Tang:

As for the increasing role of generative AI in fraud, previously, to scam someone from a minority culture, it required involvement from someone within that culture. However, generative AI now enables the creation of convincing voice clones and scripted calls across different cultures, significantly lowering the cost of such scams. This reduced cost has led to a surge in financial and cryptocurrency scams.

To combat this, Taiwan recently amended a law. It states that if platforms like Facebook are notified of scams, including deepfakes or AI-scripted content, and fail to remove them from sponsored advertisements or similar, they face financial liability. For example, if someone is defrauded of $1 million, Facebook would be responsible for that amount. This amendment aims to re-internalize liability back to the platforms that amplify these scams.

Since the law's introduction, we haven't fined Facebook as they have actively worked to detect and remove such scams. In Taiwan, we believe it's crucial to raise awareness about these vulnerabilities, ensuring that platforms profiting from advertisements associated with these scams also assume responsibility for their spread. We're addressing these issues using the EU's term, "foreign information manipulation and interference" (FIMI), particularly during campaign seasons. However, we distinguish between domestic political accusations and FIMI.

Our focus is on information integrity and provenance. Starting January 1st, all SMS and public messages from Taiwanese agencies will come from a single, easily recognizable number, like 111. This initiative changes the default assumption. Previously, messages appearing to be from humans were assumed legitimate until proven otherwise. Now, if a message claims to be from a government agency but does not come from an approved number, it will be considered a bot. Verification will only be assumed through pre-verified digital signatures, supported by public infrastructure like FIDO, making digital signatures accessible to everyone at no cost. This shift in default assumptions is a critical step in combating the spread of fraudulent information.

> (audience asks a question)

### Audrey Tang:

Our first experience with the Polis method, first used in 2015 during the Uber case. Uber was then bypassing the unions and cooperatives of taxi drivers, employing people without professional driver's licenses for earnings. This impacts not just Taiwan, but many other countries as well.

The rationale behind involving citizens in co-determination stems from the observation that those experiencing challenges firsthand often have viable solutions. However, they lack the means to communicate their ideas effectively to the national government. Many cooperatives and individuals, especially in rural areas, have developed equitable principles for sharing rights without exploiting workers. They have ideas for maintaining fair practices, like not undermining existing meters and ensuring full insurance and registration.

The limitation with traditional democratic methods, such as referendums, petitions, or voting, lies in their insufficient bitrate to fully convey these comprehensive solutions. The bandwidth of democracy was too narrow, and the response time too delayed. Utilizing Polis allowed us to transform conventional voting inputs into structured natural language inputs. Through crowd moderation, we demonstrated that stakeholders, including Uber and taxi drivers and their passengers, generally agree on most issues.

This consensus provided the legitimacy to hold Uber accountable, leading to their integration into the Q Taxi fleet while allowing for surge and dynamic pricing. This approach of co-creation from tension represents a significant contribution to digital democracy. Higher bandwidth communication enables the discovery of unifying narratives and solutions.

In my ministry, we apply similar principles. Staff members can initiate petitions, which I address monthly in live streams. We also collaborate with "Talk to the City," an advanced form of visualization that includes voice transcripts. This system uses language models not just for summarizing discussions but also for facilitating interactive communication. Participants can clarify or correct the interpretations of their input, allowing for continuous refinement of the model. This approach represents an advancement over traditional constitutional AI, which tends to be more static and infrequent. Our goal is to achieve incremental progress in constitutional AI, ensuring continuous and dynamic citizen engagement.

> (audience asks a question)

### Audrey Tang:

To clarify, our approach to civic engagement, particularly in digital spaces, is multi-faceted. We've been exploring various methods under our president's direction, seeking innovative ways to enhance civic participation. This includes both digital and non-digital avenues, aiming to encompass the entire population's diverse needs and preferences.

Addressing your curiosity about the extent of Taiwanese public involvement in digital initiatives, it's not just a matter of engaging digital natives. Our efforts reach a broader spectrum of the population. We've developed a comprehensive platform, join.gov.tw, serving as a one-stop shop for public participation. This platform integrates various facets such as participatory budgeting, e-petitions, regulatory consultations, and collaborative meetings with civil society. It represents a unified infrastructure for public engagement, operational for over eight years.

Regarding participation statistics, the Join platform annually attracts about 10 to 12 million participants in a country of 23 million people. This indicates that nearly half of our population engages in at least one activity on the platform each year. The most popular feature is e-petitions, allowing 5,000 signatures to directly bring a matter to a minister's attention, akin to an MP's interpolation.

Turning to your question about costs and resources, I believe the primary factor isn't expense but rather the efficiency and immediacy of our response to collective consensus. On average, we address e-petition points within 60 days. However, during the pandemic, we expedited responses to pandemic-related issues, addressing top suggestions in daily press conferences and implementing them within a week.

Financially, we've established a framework for discretionary budgets. For expenses below 43,000 euros, ministers have the autonomy to implement solutions swiftly. This flexibility facilitates the execution of 'low-hanging fruit' suggestions. For more significant, infrastructure-level proposals, we have the Presidential Hackathon, an annual event where the president commits to funding the top five teams to scale their local initiatives to a national level.

Finally, it's important to note that since 2017, digital infrastructure has been recognized as public infrastructure, equating investments in digital initiatives to building physical infrastructure like bridges or highways. This paradigm shift allows for similar funding opportunities for public AI and data infrastructure projects, fostering a robust and inclusive digital ecosystem in Taiwan.

> (audience asks a question)

### Audrey Tang:

In discussing our response to these perceptions, I would highlight the importance of reskilling, a key component of our AI action plan initiated a few years ago. This plan was developed before the rise of generative AI, so it didn't consider extinction risks in our initial AI strategy. This plan aligns with our efforts to reimagine our public education system. Prior to my cabinet position, I contributed to the basic education curriculum system, and in 2019, we shifted from a literacy-based curriculum to a competence-based one. This transition focuses on producing new information, co-creation, and fostering creativity, rather than just consuming information and performing predefined tasks.

I believe this educational shift, combined with the reskilling initiatives in the Ministry of Labour, has helped reduce fears about AI replacing jobs. Additionally, Taiwan's robust public health and safety net system provides a sense of security, leading to a cautiously optimistic attitude among the public. While AI poses challenges to many professions, there's a general understanding that people can adapt and collaborate with AI systems.

Moreover, I would emphasize the support from labor and trade unions, who are adapting strategies similar to those used in Hollywood negotiations. They leverage AI tools, made accessible and affordable, to empower themselves with subsidies supported by my ministry. Our administration for digital industry specifically subsidizes this retraining and reskilling, extending the benefits to small companies, co-ops, local unions, and associations, ensuring a broad and inclusive approach to managing AI's impact on the workforce.

> (audience asks a question)

### Audrey Tang:

Many in Taiwan see AI as a tool that allows us to dedicate more time to human interactions, acting as a time-saving assistant. Additionally, there is a strong belief that the public sector should lead in implementing fair, ethical, and safe AI. We aim to establish guidelines for AI use that can be built upon by both the industry and civil society.

My ministry's role in the public sector is more akin to a sandbox. We experiment with the latest technologies to ensure they align with societal expectations. This approach is effective only if we have a system to evaluate societal impacts in real time, something we are actively developing. We believe in taking the time to thoroughly assess these systems before they are officially implemented.

"To give no trust, is to get no trust." By showing trust in our people, we hope to earn their trust in return.

> (audience asks a question)

### Audrey Tang:

I believe our approach during the pandemic has significantly altered public expectations. Taiwan is among the few places that successfully implemented a zero-knowledge contact tracing system during the pandemic. This system was unique because it was deployed effectively before widespread community transmission occurred.

Our method was straightforward. Venues could generate a random 15-digit number for a QR code using open-source software. Visitors didn't need an app; they simply scanned the QR code and sent a SMS to a secure number, 1922, containing only the random number. This process allowed venues to verify participation without learning personal information, such as phone numbers. The telecom companies storing these numbers were also unaware of the locations these numbers corresponded to, retaining the data for about 28 days. In the event of community transmission, we could efficiently issue exposure notifications to those who visited the same locations.

This simple, privacy-preserving approach was well-received in Taiwan. Even though it was optional, many people preferred using it. This experience has made it easier to promote privacy-enhancing technologies, as the public has firsthand experience with non-invasive methods that contribute to the public good.

Currently, we are advancing public infrastructure based on zero-knowledge principles. We are developing guidelines for data altruism and Privacy Enhancing Technologies (PETs) that move beyond traditional methods like K-anonymity, which are increasingly vulnerable due to advancements in General AI. Our focus is on more secure techniques like differential privacy, multi-party computation, and homomorphic encryption.

Moreover, the state is investing in the infrastructure necessary to support these technologies. The aim is to avoid the trade-off between privacy and data utility. By employing methods like multi-party computation, homomorphic encryption, or synthetic differential private data, we can maximize data utility without compromising privacy.

We're also collaborating with a startup from Israel named Chain Reaction. They are developing a chip intended to significantly reduce the computational burden of zero-knowledge proofs and fully homomorphic encryption. This technology, if successful, could be a game-changer, making privacy technology a lucrative area for venture capitalists and our startup ecosystem.

> (audience asks a question)

### Audrey Tang:

As an open source developer myself, I can confirm that we indeed fund such projects. Our focus extends particularly to projects that contribute to public infrastructure, especially those that address critical needs like cybersecurity and privacy. These projects represent more than just open source; they embody what we call 'public code'. This is a type of free software used in the public sector, adhering to specific codes of conduct or compliance standards, and designed to ensure interoperability.

Our approach to public code is evolving. Openness in these projects is not just beneficial; it's increasingly becoming a necessity, particularly for infrastructure-level applications. To facilitate this, we're currently overhauling our procurement system to better accommodate public code procurements. This includes innovations in areas such as PETs and democratic processes, which we are integrating into our broader concept of public infrastructure.

Additionally, I'm authoring a book on these themes, which is free from copyright and available at Plurality.net. This book embodies the concept of 'plurality', a principle that's central to our approach. It explores the potential of technologies like generative AI and language models to augment public engagement processes, transcending traditional limitations of capitalism and voting systems, which often provide minimal information.

Our strategy involves identifying and investing in seven key areas of public infrastructure, unified under the concept of plurality. This notion of plurality is deeply ingrained in our work. In fact, the Mandarin words 數位, used in Taiwan, encapsulates both 'digital' and 'plural', aligning with my role as the 'plural minister'. This dual meaning reflects our commitment to not only open source but also public consultation and democratic participation. As the plural minister, I am dedicated to fostering collaborative diversity in our initiatives, ensuring that our actions resonate with the principles of Plurality.

Thank you for all the questions. Live long and prosper.