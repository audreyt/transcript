# 2023-02-16 Conversation with Autoware Foundation

### Men-Feng Wu:
非常謝謝部長今天的接待及有這麼多好朋友在這裡，包括胡副署長，這次主要是台灣測量協會跟一些會員邀請 Autoware Foundation, the chairman, Kato Shinpei, and his colleagues come to Taiwan to visit our industry. Looking forward to some future cooperation. Also, we have set up a new sector, Autoware Foundation Taiwan Sector.

### Audrey Tang:
Excellent.

### Men-Feng Wu:
I think the Autoware Foundation is the biggest open source software foundation in the world. We just signed our memorandum with them this afternoon.

Under this umbrella, we can look forward to much more cooperation between our members and our industry technology or some kinds of policy orientation or regulation requirement. I think Shinpei Kato will have a great presentation for each item.

### Shinpei Kato:
If needed. I didn't know you will start the meeting, so I just prepared some presentation. If needed, we can use the presentation, or we can fire away, start more interactive.

### Audrey Tang:
What's your preferred style?

### Shinpei Kato:
Let's start because everybody knows you and you don't know me, so I can introduce.

> (laughter)

### Audrey Tang:
Maybe just a round of quick introductions. [laughs]

### Shinpei Kato:
I'm founder and the CEO of TIER IV which is Tokyo based startup. I think we are still small startup, but maybe one of the most large scale startups in Tokyo. I'm also founder and chairman of Autoware Foundation which is non profit organization.

At the same time, I'm also associate professor at University of Tokyo, and my background is computer science. I hear that you also have computer science background.

### Audrey Tang:
Yes.

### Shinpei Kato:
You can imagine Autoware is Linux.

### Audrey Tang:
Linux for self driving cars.

### Shinpei Kato:
Autoware Foundation is Linux Foundation.


### Shinpei Kato:
TIER IV is Ubuntu.

> (laughter)

### Shinpei Kato:
Red Hat.

### Audrey Tang:
Distribution.

### Shinpei Kato:
Distribution. Long story short.

### Audrey Tang:
Good. [laughs]

### Shinpei Kato:
We can start. This is what we are doing. In Japan, we have many autonomous vehicles project already. We have some experimental vehicles like Robotaxis, Roboshuttles, which we use every day for R&D. Now it becoming commercialized.

This is the project this Yamaha offers. It's a 24 hours, 365 days operation already. This is Tokyo Olympic Village that we presented two years ago co operated with Toyota Auris. We actually had a real services in portfolio's reaction. Now, the same system goes to airport project with Isuzu. It's a truck, bus, car manufacturers in Japan, and Suzuki.

There are many, many other car companies using our platform like E3 as actually using also our platform. Main reason why we're here is make that collaboration. What is more exciting is the small robot using the same technology in races is among global races.

They all use the same software platform that we developed, so it's like a Linux. You can leverage Linux for your laptops, desktops, servers, so we have the same concept. The software would look like this. This is open source, you can download it right away if you have your laptop.

### Audrey Tang:
I have my laptop.

> (laughter)

### Shinpei Kato:
It can recognize environment in 3D coordinates and have some kind of deep learning for neural networks to detect objects or recognize scenes, then create trajectories, path planning, which is a robotics technology. Everything is implemented in a set software, but this is a platform. You are not going to use it as it is.

You always download it and add your applications or libraries because you have your own objectives. I would say this is 60 percent, 70 percent satisfy your requirements. The rest of 40 percent, 30 percent, you still have to build your own applications. It can save a lot because you don't have to build everything from scratch. Go ahead.

### Audrey Tang:
OK.

### Shinpei Kato:
It's like climbing mountain. In Japan, most people do not climb from the ground. We use the car...

> (laughter)

### Shinpei Kato:
...to halfway. Open source is actually like a car. Go to the mountain halfway. You don't have to climb yourself. What TIER IV is doing is to provide further useful tools, know hows, or other kinds of software libraries on top of open source so that you can also climb to maybe 80 percent, 90 percent.

Now, your job is to climb from 90 percent to the top of the mountain. This always, you need lots of effort to build your application to make it 100, but you can skip halfway by open source and use our product, some.

It doesn't have to be ours, there are other distributors. You can use distributors' software to easily climb up to 90 percent, then now your place from 90 percent to 100. You can save a lot of time, a lot of money, a lot of resources. You don't have to climb from the ground to 100 percent.

### Audrey Tang:
I have a question. I actually went to the Discourse and everything just now. I remember in 2016 when I tele visited Madrid, they built a robot as my digital double called Galatea, and it self navigates. I just tell it where to go and it just goes there, and I use a VR, I interact with people in Madrid.

Then I remember it's built with the ROS community, with ROS.org. Then I went to your Discourse forum and it says ROS. What's the connection here?

### Shinpei Kato:
Very good. It's a very technical question.

> (laughter)

### Shinpei Kato:
ROS is more general. Autoware is more specialized for autonomous vehicles. There are many robots. ROS can be used for, say, manipulation.

### Audrey Tang:
So Autoware is part of ROS has passengers. Can I understand in this way?

### Shinpei Kato:
Autoware uses ROS inside for R&D because all students now use ROS for their research education. Even students can easily jump in R&D on Autoware.

### Audrey Tang:
It's in an even more infrastructural layer of the mountain. OK, thank you.

### Shinpei Kato:
Autoware, ROS, Linux. Autoware is actually an application. ROS is middleware, and Linux is the operating system.

### Audrey Tang:
Understood. Thank you.

### Daniel:
I probably can add that the core of ROS is DDS. ADLINK is the one to manufacture the leading hardware to support industrial grade ROS application.

### Audrey Tang:
I see. Excellent. Thank you.

### Shinpei Kato:
Next slides will explain why open source is good. In a previous meeting, I didn't have the slides. I had to explain myself but now, go ahead.

Without open source, 100 resources, if you have 10 projects, each project only has 10 because in total you only have 100. It's elementary class. Now, what is open source? We don't spend 10 for each. Just invest 90 to open source.

However, since we only have 100, we only have the rest 10 resources still goes to each project, one, but open source is a shared resource, so resulting resources that each project could have 91 instead of 10.

### Audrey Tang:
This is brilliant.

### Shinpei Kato:
Brilliant.

### Audrey Tang:
Is the presentation open source? Can I use it on my next meeting?

> (laughter)

### Shinpei Kato:
Please credit to me.

> (laughter)

### Audrey Tang:
Of course, for attribution.

### Shinpei Kato:
If we are a super country, then I think you can just divide your resources into 10 because total resource is huge. Maybe Japan or Taiwan, we are not super country. We have to optimize the resources.

Having open source or the shared resources baseline, then build each application, which could be quite specific to company, region, product, but they can share, I believe, more than 90 percent. Perfect theory. Now, that challenge is how to make this theory into practice.

### Audrey Tang:
It's a coordination problem. Who will go first?

### Shinpei Kato:
Which I don't have any textbook, so my presentation ends here.

> (laughter)

### Shinpei Kato:
Now we need discussion. In Japan, I somehow coordinated this practice using open source. Most of autonomous vehicle projects, they use Autoware, which very successful. If you go to Japan and ask, say, autonomous vehicles project, "Do you know Autoware?" Then I think 99 percent, they will say, yes.

In Taiwan, actually quite surprising that without this coordination, I realized that everybody is using Autoware. Maybe they love me. Now, I want to make it more organized. I wouldn't say, Taiwan project using Autoware are not organized. I think we can still include this organization so that we can further optimize resource utilization.

We decided to launch Autoware Foundation, Taiwan sector. Professor Daniel Xi. I know him for 20 years. He is going to take initiative creating this ecosystem in Taiwan so that now Taiwan, Japan can also share resources. That's the end of the presentation.

### Audrey Tang:
Thank you.

> (laughter)

### Audrey Tang:
It's a great presentation.

### Shinpei Kato:
The slides, I just made five minutes ago.

> (laughter)

### Audrey Tang:
Just in time.

> (laughter)

### Audrey Tang:
Yeah. Maybe the professor would like to add something.

### Daniel:
Yeah, I think this is right timing for the academia community and also our industrial partner to start to work together because in last five to six years, there are several autonomous vehicle projects, and many or all them use the Autoware as a foundation to save at least 50 percent effort, and customize their software for different sites.

I think there are sites for the high speed rail station shuttle, airport shuttle, parking lot shuttle, and also the amusement park shuttle. There are not much collaboration and communication between, and also there are not much communication or collaboration between the university research team. I think that after these five years development, we have some foundation already.

Now it's time to put together, to call everyone, come together to see how can we go further. In particular now, we are in a time to meet some safety requirements. In particular, cybersecurity is a very important issue. How do we secure the communication? How do you secure the software inside the vehicle? That's the hardest topic for autonomous vehicle community.

I think we need some cooperation and organization to call a friend together, to work together, to share our effort so we can move along. That's the reason we come to visit DAO for the meeting to seek support from the government. We meet an industrial friend in the afternoon already. Everybody is very excited.

We do, looking for the support for the government, including regulation. How do we set out regulation? How do we set out the testing procedure? What guideline can have for the industrial partner so they can launch their service to the public? This will take effort, and we need some resource if we want to ask people to work together.

Autoware Foundation is a good motto. The joint member, they can contribute their finance budget, financial support, or they can contribute their manpower as well. I think we're also looking for the support from the public sector because this is the foundation for the public service.

If we can have a support from the public sector that will be greater help the foundation to move up. As Shinpei just mentioned that we will register the Autoware Foundation Taiwan sector as a local legal entity in Taiwan in these months. Then we can organize the friend and the research together.

### Audrey Tang:
Great. How is it in Japan, the way you're coordinating with the public sector? Do the municipalities, for example, join as members or do they just contribute resource for research? Is this arm's length or is it like a direct multi stakeholderism?

### Shinpei Kato:
In Japan has already had a five years, six years project for Autonomous driving. Particularly focusing on autonomous vehicles project, public sectors, I think they work together.

### Audrey Tang:
There's a dedicated unit in the cabinet level, the municipalities, or prefectures?

### Shinpei Kato:
Yes, so cabinet office so prime minister's office. They first can initiate it, "Let's do." Now, say, transportation economics, communication, police. First moment, yes, was very tough to talk to each other, those different cultures. At some point in time, I showed up. I'm very good at communication.

> (laughter)

### Audrey Tang:
Yes, I noticed that.

### Shinpei Kato:
The cabinet office also created two committees. One is steering committee, the other is technical committee. We set very well recognized professor in steering committee so that everybody can follow what he says. Somebody has to tell him what to do, it's technical committee.

Until last year, I was the chairman of this technical committee. I spent a lot of time to actually execute how to satisfy regulation for what technology readiness is sufficient to move forward. Mostly, we get some consensus, so now steering committee is willing to proceed. Since I have three affiliations, sometimes it can conflict of interest.

I handed over my chairman position to somebody else. Since regulation is constructed, my company is now trying to make it business. I'm still member of committee. I'm not chairman. I just propose some ideas, and there is another chairman who can actually make some final decision, but I am still contributing to committee.

This having two committees across different public sectors and cabinet office always is let's do. This structure works very well today. Digital affairs also launched in Japan. I think you know many of them. We are also working with them. I'm also part of the committee member of digital, but yet weak connection. It could still take some time for them to be organized, first of all.

They tried to give us some technology map, including regulation, because some technical problems, transportation, economics, communication, they are not very good at. We are trying to hand it over to digital agency.

### Audrey Tang:
I see, agency.

### Shinpei Kato:
I think it will also work out because this digital agency has composing professor committee so that we can also talk. To begin with this digital agency proposing how to leverage autonomous vehicles.

This committee is how to develop, how to operate, autonomous vehicles. That's their mission, while new digital office agency is trying to think about how to leverage, how to use autonomous vehicles.

### Audrey Tang:
Under application layer, so not strictly technological research.

### Shinpei Kato:
For example, virtual reality could be one application. They are thinking how virtual reality technology can be application of autonomous vehicles. Since my background is computer science, we also talk to each other. Web3, no, metaverse, no, it's virtual reality. I'm trying to replace maybe with the right words.

### Audrey Tang:
And the right word for blockchain is... Decentralized ledgers.

> (laughter)

### Shinpei Kato:
It's quite organized in this domain. Other domains, I'm not sure. Sometimes, it doesn't work well.

### Audrey Tang:
Is the professor looking for a similar dynamic here in Taiwan where the Ministry of Digital Affairs, of course, we also have spectrum allocation, satellite, and cyber security duty? A little bit more than the digital agency, but the principle is the same. We find the use cases.

We are the outermost layer that directly interacts with industries and citizens, whereas the National Science and Technology Council handles the research part.

### Daniel:
I think as Shinpei just mentioned, that cybersecurity for autonomous vehicle is a very important issue because of all the software. Now we are moving into what we call software defined vehicle instead of traditional vehicle because everything will program software. The hardware will commoditize.

The difference will be on the software, but we cannot bring the car into the garage every few minutes, every few days. All the update will be over the air. The security on the communication and also security on the computing platform itself is a very critical issue for autonomous vehicles.

There are also other issue, reliability issue, robustness issue, of course, we need to file that, but they already have a standard there. Security wise, people are struggling, still discussing how to make it secure. There are many efforts around the world trying to make it work for a secure communication between vehicle, between the vehicle and the wayside unit, and also between the vehicle to operations center.

I think for autonomous bus, in particular, or a transportation system where you will have autonomous system, you will be required to have operation center to monitor the service. It's very important because if there is no driver on the bus, you need to somehow choose to monitor or you have a black box to record everything and store it on the cloud.

All these must be secure because you will record a lot of things that have private data. For instance, you will have a camera on the vehicle, and you will record everything on the street. Can you store that on the vehicle? Can you store that on your cloud side? If you cannot, how can we resolve the issue? It will take a long time to remove all identity for all image data. It's just not possible.

If we cannot solve this issue, the camera probably won't be banded for an autonomous vehicle just because of privacy issues. That's actually a very critical issue for autonomous vehicle. This is a time because we are looking for business service in the public sector, so we need to have a regulation or guidelines to see how we can work together.

Shinpei just mentioned the way they do in Japan, and actually, they just passed level four regulation in April 2022. They will execute this in April. If the vehicle pass the regulation and receive a permit, under that regulation, actually they can operate level for service in Japan starting for April.

As you understand that there's a lot of software on the vehicle. How do we test and verify those software? That's important. When you have open source, you can save a lot of effort because everybody can see it, you can verify, you can understand what's going on there.

We want to collaborate with the public sector and see how we can work together. The Taiwan sector will try to organize the event between the university research and also the industrial partner to work together, in particular, on technology side. How do we make it happen?

I think you probably know there's another organization, MIH, in Taiwan. They're mainly focused on standard API. How the different partner work together, communicate with each other? MIH and AWF have a different mission. We are mostly focused on the technology side.

### Audrey Tang:
Do you reuse each other's code?

### Daniel:
MIH do not request to release the code. They only request you to open the standard. They do not request how you implement. They only design a procedure and a standard. Once you pass or meet that requirement, you're OK. They don't care how you implement it. For implementation, I think Autoware Foundation can help with that.

### Audrey Tang:
I see. Very clearly delineated.

### Shinpei Kato:
I have one question.

### Audrey Tang:
Yes, please.

### Shinpei Kato:
What is Taiwan government strategy about cloud computing? Cloud computing is quite traditional, becoming more traditional. In Japan, say, we have some servers in Tokyo region, say, for example, Amazon Web Service, we have servers in Tokyo. Latency using cloud in Tokyo, still acceptable.

In Taiwan, sometimes we're struggling since...Cloud is quite powerful because once you deploy on the cloud, you can use it everywhere if it's cloud. For general purpose Internet, I think you don't notice the latency. You can still use.

For safety critical applications like autonomous vehicles and robotics, the latency is quite important. If you access AWS from Taipei, Taiwan, because it actually accesses Tokyo.

### Audrey Tang:
It does have a local EC2 service, if I understand correctly, it's a local zone.

### Shinpei Kato:
Now they are building zone, so yes, last year.

### Audrey Tang:
They are already here?

### Shinpei Kato:
Yes, but it's zone, not region. Zone is very limited.

### Audrey Tang:
It doesn't have S3. If you want S3, you can get an outpost because we've done exactly that. [laughs]

### Shinpei Kato:
Exactly. We would like to know the government strategy so that when we start implementing autonomous vehicles in Taiwan, so cloud plays quite vital role. You want to make it software upgrade by over the air, and DevOps, you want to create a cycle always.

It really depends on what is the cloud architecture the government is planning to implement in the future so that we can design the autonomous vehicles.

### Audrey Tang:
Google is here at least. The full GCP services is well distributed within Taiwan. Azure really is here except they're not very well devoted, I guess. [laughs]

### Shinpei Kato:
Microsoft...

### Audrey Tang:
Right. Amazon, I think, will have a full region here, but they're advertising only the local zone. The rest of the services there in private data or something includes testing. If you want to experience the full API, of course, you can do what we do which is get outpost machine.

Now, the governmental strategy, very simply, put is that we want the local services still function when earthquake destroy all our submarine cables. In 2006 that actually happened, and just recently from Matsu, it happened again, except its not earthquake, but anyway... [laughs]

There are earthquake that are natural and there are those are the human made earthquakes. In any case, [laughs] when such things happens, the latency becomes infinite if its hosted in Tokyo.

### Shinpei Kato:
Of course.

### Audrey Tang:
We are taking a very practical approach. In the Ministry of Digital Affairs, we ensure that for the internal communications there is always three or more vendors. We have the so called public cloud in those free providers, plus the National Center for High Speed Computation which is domestic.

For those regions we ensure that we store our critical data backups with error correction code in a N of M configuration the cold storage like Glacier and so on, hosts the backups of our critical data, but no single provider has the all the code. Of course, it's also encrypted.

We can say that no cloud provider has our privacy information stored outside of our jurisdiction, but if our submarine cables are cut, [laughs] then we will have to switch to satellite communication with the current geostationary, but also we are using MEO now, and then of course, soon LEO in our service.

When that happens, we would just reactivate the code backups and reassemble the critical services outside of our jurisdiction but, at least, maintain the solid communications in the fixed and mobile places so that the local journalists, and so on, can have a real time conversation, like Zelensky's daily addresses with international correspondents.

### Shinpei Kato:
Now, the second question is the further, when they make strategy for using cloud, how much...In Japan, yes, we have three cloud providers and, also, domestic server providers. That said, we would like to put as many things as possible onto the Edge.

This is public government strategy. We don't want to rely on the cloud, because it makes more communication, more data privacy issues, more energies, so we want to use Edge.

### Audrey Tang:
Like your phone.

### Shinpei Kato:
Yes, because Japanese industry, if you look at electronics, is stronger than the software industry. We want to keep as much data as possible, which also contributes to green energy, because we don't have to...Most our energy actually comes from communication.

### Audrey Tang:
Like localized data processing, is what you're saying.

### Shinpei Kato:
Something like that. If the Taiwan government also had some kind of policy like Edge oriented or cloud, can it do better then? If you already have some policy, it's also important to design the architecture. If not, I think we can also design architecture together.

### Audrey Tang:
I think we need to distinguish between the energy requirements that you said, as well as the privacy requirements. These two are not always aligned. There's always a way, like with homomorphic encryption and all sort of computational encrypted data, secure multi party computation, and so on, to trade privacy.

We can get a lot of privacy if you are willing to throw a lot of energy at it. If you want, you can do full homomorphic encryption, which is extremely wasteful in terms of energy, but it's extremely private in that nobody really can see any of your raw data.

Sometimes we think just like that recent conversation about OAMs, there are ways to design them to be more sparse so that activation doesn't consume as much energy and so on. We want to invest in such privacy enhancing technologies that, for its first iteration, trades energy for more privacy.

This is important because otherwise people do not place a lot of trust in this computational apparatus. When, one, a public profile of a current or something case happens, then it decimates the trust people have on that particular service category. We intend instead to start wasteful energy in communication, but safeguard privacy.

On the next iterations, we will improve our algorithm on dedicated chip making to lower the energy requirements. This makes sense to me because the initial early adopters, they are not that many anyway, so it is not likely that you will waste much of energy.

### Shinpei Kato:
Could the mission of Open Foundation Taiwan sector, which is one in a possible joint project with your agency is to design this architecture, because the architecture defines what privacy issues you have to address, what cybersecurity issues we have to address.

Today, we have not yet investigated what is most appropriate architecture of Edge and cloud for autonomous vehicles in Taiwan. Maybe we can consider privacy issues and cybersecurity issues, as well as your strength in industry, IT semiconductor, they're your strength.

### Audrey Tang:
We can afford to throw chips at the problem. [laughs]

### Shinpei Kato:
I think we can also include the scope of Taiwan sector.

### Daniel:
Now we plan to have four different SiC working group in Taiwan, including simulation working group, autonomous driving, low speed vehicle and our Smart Copy. We can definitely increase the number of working group to include privacy issues here. I know some of our industrial partner, they are already working on that.

For instance, the smart sensor company, they are trying to just output the running parts for the action instead of giving you a role each. They can protect the privacy from the sensor side. There is no private data going to the Edge server. Of course, no private data going to the cloud server, but a vehicle can still identify the object.

There are several companies in Taiwan looking at that. We are very strong in chip design. This is the right working group to start with so we can invite your colleague to join the working group to work out the...

### Audrey Tang:
Privacy at the Edge is an investment. It makes the future cybersecurity designer's life easier. If you don't have that much of a privacy oriented data to protect, if it's in the most extreme scenario in communities such as Ethereum, nobody trust anyone. [laughs] It's very adversarial, everyone you meet is probably a scammer. [laughs]

In this very maximal adversarial situation, the zero knowledge proofs were fine tuned to really commercial use. Even if just a little bit of your private data is on blockchain, it's on there forever. We need to, more and more, design for such a use case because of large language models and so on, scamming and so on.

You can just assume it will always succeed. Even when that always succeeds, we can still design for an environment that when it succeeded, has nothing to steal. I think this is quite important.

### Shinpei Kato:
Do you think the scope like Edge cloud architecture for autonomous vehicles involving cybersecurity issues and privacy issues, as well as strength of the industry market could it be one of the value that your agency is going to work...?

### Audrey Tang:
We already have the TTC, which is another organization that currently works on exactly such issues, but specifically for flying automatic vehicles, so drones. Drones carry exactly the same surveillance privacy, whatever issues with additional kinetic damage [laughs] that can hit this floor. A car cannot hit this floor.

For the drone use case, there is a strong mandate from the Ministry of Transportation and Communication, that a large drone, before it even takes off, its chips and its software need to pass the cybersecurity certification from the TTC starting, I think next month.

### Shinpei Kato:
TTBC...?

### Audrey Tang:
The TTC.

### Shinpei Kato:
What does it stand for?

### Audrey Tang:
The Telecom Tech Center.

### Shinpei Kato:
I see.

### Audrey Tang:
I wanted to convince them to retronym into a Trust Tech Center.

> (laughter)

### Audrey Tang:
Trustworthy Technology Center.

> (laughter)

### Audrey Tang:
Because such privacy and cybersecurity certificates is what they do, but it's not strictly speaking telecom anymore. They started doing telecom. This is something that the TTC will actively do anyway for drones.

### Shinpei Kato:
Is it operating under the Digital Affairs, you will...?

### Audrey Tang:
Yeah, it's our associated institute, but it's not doing the certificate alone. It also work with a ecosystem of cybersecurity researchers and so on, but it is the one stop shop for drone operators and manufacturers to get certifications. I think there is a natural partnership here.

### Shinpei Kato:
It seems like we could also include that topic. What about virtual reality, digital twin, say, Web3 things, is it also an interesting scope of your sector to be integrated into automotive mobility?

### Audrey Tang:
I read just recently that the Decentralized Autonomous Organization, the DAO office of Japan is thinking about issuing legal cooperation digital certificates to DAOs on the Web3 world. Interestingly, we are also doing the same.

We are the certificate authority of XCA, which is the certificate that we hand to, actually, it would be to your organization because it's not a company, so to non company organizations. Company is still in the Ministry of Economic Affairs, but nonprofits and so on, that is our domain. We issue the XCAs to such organizations.

We're just last week talking about reforming the XCA so we can issue them to DAOs. There is a dedicated department within MoDA, The Department for Democracy Network. It's not called International Cooperation but rather Democracy Network because the DAO belongs to which nation? We don't know. [laughs]

This is the department in charge of the things you said, which is about configurating the local regulations so that it doesn't take over but interoperate with existing Web3 community and other norms. It's like a bridge. It is this department that will be naturally linked to such use cases.

### Daniel:
Specifically speaking, I think we have two topics that we can work together. One is...

Daniel We have a Smart Copy working group, so inside a vehicle that will become a virtual reality with a three dots spherical environment. You can imagine that when you're sitting in the car, the door is closed, you cannot go anywhere. You can become a shopping mall or become a gaming world for yourself or for all the passengers inside the vehicle.

Smart Copy working group, we're also talking or discussing this issue because we also have another single company, they are specialized in panel manufacturing, so they are interested on how they can deploy their panel to the autonomous vehicle.

### Shinpei Kato:
I think panel, digital cockpit, it is the interface for autonomous vehicles. In general, two topics that I wanted to highlight, one is digital architecture, Edge cloud. The second topic could be bridging or interfacing what we are doing to AI applications like digital maps or digital twin be also used in healthcare, drones, other applications.

Maybe we can consider also how to leverage asset of autonomous vehicles to other applications. Maybe your agency can bridge across multiple domains. I think autonomous vehicles have many interesting assets like virtual reality, digital twin, maps, which I hope also valuable for other applications in different sectors like healthcare, drones, and so on.

I think we can set two high level topics. Since we have not yet founded the sector, but once we set up Taiwan sector, maybe we could have some workshop. If not every month, maybe some time...

### Audrey Tang:
A regular meetup, yes.

### Shinpei Kato:
Appreciate if you can also promote Taiwan sector from digital affairs point of view.

### Audrey Tang:
Definitely. Betty?

### Betty Hu:
I don't think we have much interaction with the open source community. I think we will be the first API that have the relationship with them.

Maybe the two topics that our Minister highlight will maybe not in our agency, but in TTC or any other agency, then we can have the relationship together. Also comes the III colleagues, if you have anything that you want to ask or...

### Audrey Tang:
The III is very familiar with open source. The mission of III, after they moved to MoDA, became more on the foundational part, not the pinnacle of the mountain.

> (laughter)

### Audrey Tang:
Because, on the pinnacle, they would become one of the competitors of your 10/10/10/10 slide.

> (laughter)

### Audrey Tang:
But on the foundational model, the III become the 90.

### Men-Feng Wu:
The 91.

### Audrey Tang:
The 91, yes.

### Henry Meng:
Thank you, Minister. Japanese friend from TIER IV. So many our friend in ITS. III is working on autonomous driving project with E3 for many years. Based on the AWF architecture, three parts, sensing part, analysis, and control part.

From software defined engine, because the mechanical part about the car, control and the breaking, such thing, maybe is related to the car manufacturer, car industry. From our point of view. Katosan and professor propose three types of topic.

I think from software point of view, we fully agree. One is the cybersecurity. Second one is the Edge computing. The third, maybe we like to propose because the AI drive brand need to customize the Taiwan mixed traffic problem.

### Audrey Tang:
Domestication.

### Henry Meng:
Domestication, and kind of similar with Southern Asia environment. We have a corporation with Professor Sue. We have AI driving data set we collect and accumulate for many years. I think TIER IV also very interest in this kind of technology.

If we have this kind of brand, I think your AWF open source were identifying and know how to drive your autonomous driving car in Taipei. Taipei big traffic point driving. I think maybe this data set can combine with a open source and probably open to the public.

If this is work, and this is not a new business model, we can get more revenue from the industry. I think this is in addition to your two suggestion. Maybe the first suggestion on III experience we can discuss with your team. Thank you.

### Audrey Tang:
Localization service. Excellent.

### Men-Feng Wu:
Yes. Thank you, Minister. I have a question about...Since in 2018, we have some regulation about autonomous vehicle for POC, but in less than five years, we saw many POC project been going.

They also earn some experience and some achievement, but for the huge future we are approaching and towards the smart mobility smart city, how can we help our local industry together with AWF and Japanese industry to help our industries move a big step to provide future smart mobility services to our people here?

In less than five years, there are so many resources from MOTC, MOEA, but we are very happy to see Ministry of Digital Affairs is launched last August. I think Ministry of Digital Affairs should play a very important driving force to bring our society to the smart city, smart future, smart mobility.

I do think this is from the cabinet level, they have to coordinate each ministry to have a much more ambitious and much more focused project for our local industry. I think we can much more dialogue with your agency.

### Audrey Tang:
Definitely. When I was the minister without portfolio or at large, for coordination, I work with, for example, the FinTech Sandbox Act. The Software self driving vehicles Sandbox Act with Mr. Yuan, so and so. There are many sandboxes. Of course, nowadays there are cases that are already graduated, so to speak.

Now it is mostly about acceptable trade off between participation for progress, everybody want to build smart city together. Participation for safety, everybody want to look at cybersecurity loopholes, want to contribute penetration testing, want to test the privacy boundaries. We've got many ethical hackers and so on.

Participation-for-progress and participation-for-safety are fundamental at odds, [laughs] because for these white hat hackers, they can always find one more reason why you shouldn't roll out to the general public.

On the other hand, for these disruptive innovators, you can always find a reason that says, if you just put a warning or some guard rails and say, "If you enter this lane, it's your own problem." [laughs] Then you can roll out whatever.

Our work at MoDA is to find innovative ways to solve this life dilemma. As I just mentioned, for example, with encrypted computation, you can release none of your privacy data but still get all the privacy usability out of the training data for federated learning or whatever other use cases.

It is progressive and safe. Once we have some POCs using these technologies that people already use and love, then we can expand the POC and get people from both sides not fighting each other, but working together co creating.

What's important for MoDA is to find use cases just as we did during the pandemic, for contact tracing, for mask visualization, and things like that, which are all co creation by both communities that has progress and safety in mind.

The ADI, the Administration for Digital Industries, is currently working with hundreds and hundreds of innovators that tries to deliver both progress and safety through participation.

They will in the next month or something, surface like 100 innovation methods that solves this dilemma in whichever sector, as long as they are digital first, meaning, that it has the potential of delivering service to Japan or to other places, that it's not tied to any specific locality. I think we will soon have a community with such social innovators to work with.

If some of them can work with the mobility as a service community, or our front end mobility as a service community, then I think that is very natural collaboration opportunity with the III and the ADI here.

### Men-Feng Wu:
Thank you.

### Shinpei Kato:
It seems like the privacy tech is actually the very focus of moda. Our foundation, Taiwan sector could be pilot application of how privacy tech could be applied on mobility or automotive production, which is good.

### Audrey Tang:
Great.

### Tomohira Kan:
I have some questions.

### Audrey Tang:
Yes.

### Tomohira Kan:
I would like to hear from you what's your vision or wish list if autonomous driving vehicles is going to apply.

### Audrey Tang:
I think it should be as understandable and natural as the escalators and elevators, who are autonomous vehicles, and used to require a driver. When I visited New York or Paris, it used to be that it still says car one, car two, car three, and it still had human operators, manual control. It used to be like it's a car, just vertical.

Of course, there were probably a lot of safety conversations and so on about damage it could do to the people in the car, the passengers and so on. Nowadays, we think of elevators and escalators as just common sense. Part of that, of course, is safety engineering, but part of that is also participation.

People are not afraid of fire, not because fire is not dangerous, but because we learn about fire safety and fire ethics as early as kindergarten. It's called cooking classes, by the way, and then the recipes are open source.

> (laughter)

### Audrey Tang:
You don't have to sign an NDA and pay for a proprietary fire. You can start a fire anywhere. Yet, we have good safety and security like firefighters in our cities. We also have a lot of volunteer firefighters in our communities. It's not just the public sector for security, this security is participatory. Anyone can sign up to be a voluntary firefighter.

AI, in general, to me is assistive intelligence, but it's only assistive to the communities if just like fire every kid can use it, every kid understand how it works. Is open source, if you get a copy, like in the Olympic torch, you retain original copy, so it's abundant resource. Then the danger is well understood, but people still use it every day. I think that's my vision.

### Shinpei Kato:
Thank you. We can put some poster. This is like a striker. Don't worry.

> (laughter)

### Audrey Tang:
Yes, the elevator music. You can play it in your car.

> (laughter)

### Shinpei Kato:
That's interesting. Thank you.

### Audrey Tang:
Thank you.
