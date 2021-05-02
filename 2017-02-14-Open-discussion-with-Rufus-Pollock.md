# 2017-02-14 Open discussion with Rufus Pollock

> ( Whiteboard: [https://ey.pdis.nat.gov.tw/shared/mz-dL7DJofqEZLbuZ00CG8AsgK13jqlHMV\WfUXKlPa](https://ey.pdis.nat.gov.tw/shared/mz-dL7DJofqEZLbuZ00CG8AsgK13jqlHMVWfUXKlPa) )

### Audrey Tang:
2:00 PM today, we’re going to design one of the larger common API — not with the OpenAPI spec — but a common, standard‑based refactoring of our national disaster response systems.

### Audrey Tang:
That is actually a good, concrete example to talk about, because that would involve merging two established governmental units, at least their front‑end websites, together, and establishing a common data exchange pipeline around disaster data.

### Audrey Tang:
Also, we need to somehow demonstrate that it’s better if you open‑source the part of code which may suffer from performance problems, rather than keeping it tied to proprietary DBs and and throwing more hardware at it.

### Audrey Tang:
There’s many dimensions of that operation, and the kick‑off meeting is at 2:00 PM.

### Rufus Pollock:
Perfect.

### Audrey Tang:
So that’s actually a good case we can talk about.

### Audrey Tang:
I’m interested in your book, also. If you want to develop some thoughts, I can help philosophizing, too.

### Rufus Pollock:
We can talk about that, as well. One other thing, let me see if I can go and open...where did I write these notes?

### Rufus Pollock:
Let’s discuss these topics. One is the practical platform question.

### Rufus Pollock:
Second, there’s obviously the book, but particularly out of that is what I call the &quot;open fund&quot; through use open software in gov. Then we might add to that. Let me have a look. Here we go. This is the one I want. I guess I can actually open my OECD slides on data‑driven government.

> ( Website: [http://rufuspollock.org/2016/09/14/visiting-estonia-21-23-september-2016/](http://rufuspollock.org/2016/09/14/visiting-estonia-21-23-september-2016/) )

### Audrey Tang:
Also allocations.

### Rufus Pollock:
In terms of the platforming, do you want to tell me a little bit about... if we take 20 minutes on that. One thing I could also talk about a little bit is the Frictionless Data or data containerization ideas, if that would be useful.

### Audrey Tang:
Sure, of course.

### Rufus Pollock:
Here we go. I’ve got some things here. That’s the one I want, view, into full screen.

### Audrey Tang:
You want to project this out?

### Rufus Pollock:
I could just talk about...some of the ideas might be quite common for the other things. The one question I would have at the moment is you guys all... I will speak in English. Is that OK?

### Audrey Tang:
Yeah, of course.

### Rufus Pollock:
My Chinese is not good enough.

### Audrey Tang:
It’s OK. If you speak JavaScript or SQL all of us also understand.

> (laughter)

### Rufus Pollock:
There’s a really general problem, which is we want to reduce the friction of getting stuff from A to B, from tool A to tool B.

### Rufus Pollock:
One thing that you could imagine would be that you are a government official, working in Excel. An ordinary policy‑maker or analyst in one of your departments is probably never going to use JSON, but they will use Excel.

### Rufus Pollock:
Imagine a journalist at a newspaper. They might use Excel. They might use JSON if they’re a data journalist. Imagine what it would be like if it was one click to import data from anyone or anything on one of the data platforms into the tool of your choice, into R, into whatever, and then even to do things with it in there. What would you need to have that?

### Rufus Pollock:
You need an exchange format, obviously. You need some way to exchange between these tools, and the other is you need tooling.

### Rufus Pollock:
I emphasize that often we — certainly myself — as technologists, tend to focus on the exchange format, &quot;If only everyone used RDF. If only everyone used JSON and JSON Schema.&quot;

### Rufus Pollock:
That is part of the story, in that if you tried to convert from every format out there to every other format out there it would be a nightmare. There are too many of them.

### Rufus Pollock:
At the same time, the tooling is hugely important. The integration into people’s existing tool workflow is crucial for adoption. We sometimes think, &quot;If we build it, they will come. If we have our wonderful format, everyone will just adopt it.&quot; They won’t.

### Rufus Pollock:
Also, in the Frictionless Data project here, the other principles that aren’t necessarily specific, but are distinguishing, are the Zen‑like simplicity.

### Rufus Pollock:
For example, RDF does not have Zen‑like simplicity. A focus on existing tooling, for example, in the Frictionless Data project, is that we don’t really invent any data formats. We just invent some degree of a wrapper around some of them.

### Rufus Pollock:
For example, we use CSV for tabular data because every tool on the planet that supports tabular data basically supports CSV. Every tool out there supports CSV. \[laughs\] It’s the most basic tabular structure you could have and it’s web oriented.

### Rufus Pollock:
That’s another distinguishing feature, which is data containers. It’s this idea around containerization, which is a little bit different. It has a relationship with APIs, but a little bit different, this idea that you want to ship from different tools to different tools and allow the tool to unwrap what’s in the box, if you can.

### Rufus Pollock:
Let’s talk about CSV as maybe exemplifying our approach. For example, why even CSV as a basic tabular format than let’s say JSON? Excel doesn’t support JSON as a native import format. Even if, in our format, you throw away all the data package stuff, you still are left with CSV.

### Rufus Pollock:
Even if you don’t understand data packages, you could open the CSV. Whereas most average bureaucrats will not know what JSON is. You will need to build some tool that takes JSON to whatever they have, to some extent.

### Rufus Pollock:
I’ll maybe just make a comment here. I was involved in an effort that’s something called IATI, for the International Aid Transparency Initiative. I‑A‑T‑I. It started about 10 years ago now, maybe more. I was involved in it from quite early on. Its aim was that people wanted to report about aid projects. There are people who pay for aid projects, and there are people who received money from aid projects.

### Rufus Pollock:
You have issues where you have multiple donors funding the same project without realizing it. Donors don’t realize that there are some projects which are not being funded at all that are important. There’s just a lack of joined up thinking, which is similar to government sometimes. \[laughs\]

### Rufus Pollock:
They created, against some of my advice, at the time their standard was built around XML, which was the JSON of 10 years ago. \[laughs\] JSON’s maybe better. It’s simpler. It’s web oriented and so on.

### Rufus Pollock:
The thing is, they ended up having to spend huge amounts of time. First of all, no one natively can support XML. For example, we spent a load of time writing converters to convert XML back into CSV. That’s what all the analysts, all the people who want to look at the data, or have a spreadsheet and they want to import a spreadsheet. I would just go on about that.

### Rufus Pollock:
Just to explain this format, and when you went for this format, basically the structure is to try and take something people are already using, which is CSV.

### Rufus Pollock:
I don’t know if you know what I mean by progressive enhancement in JavaScript... It’s less done now, but traditionally progressive enhancement in web applications.

### Rufus Pollock:
This is your HTML page. Then you can add JavaScript and progressively enhance it. You’ve got the CSV. Then you can add basically a schema, which is what’s missing in CSV. You don’t know the types. You don’t have rich types.

### Rufus Pollock:
Then you can add a descriptor which said, &quot;This data set was created by Audrey,&quot; or it was created by you. It was created on this day. This is the license. This is where you got it from. For example, even if you were doing JSON schema based APIs, you still probably need an agreement on what that standard metadata that you ship at the top of your API is.

### Rufus Pollock:
You’ve got it perfect. You’re going to bring up an example. You can look at the data package JSON.

### Audrey Tang:
Sure. Let’s look at the CSV.

> ( Website: [https://github.com/datasets/gdp/blob/master/data/gdp.csv](https://github.com/datasets/gdp/blob/master/data/gdp.csv) )

### Rufus Pollock:
Exactly.

### Audrey Tang:
Because it’s progressive. Right?

### Rufus Pollock:
Exactly.

### Audrey Tang:
\[laughs\] It should be self‑descriptive. As you can see the existing github tooling is happy with that.

### Rufus Pollock:
Yes. Exactly.

### Audrey Tang:
You can store it in everything...

### Rufus Pollock:
You can store it.

### Audrey Tang:
...and find whatever. Then you can also see what’s a valid GDP value. Now that you know the country code has to be part of the iso-3-geo-codes/id geo codes.

### Rufus Pollock:
Exactly. If you like, this is the part which I think is the least developed, but most exciting. What was the exciting think about link data? Link data I think fundamentally ultimately hasn’t really worked, but what was exciting was foreign keys.

### Rufus Pollock:
One of the problems at the moment with the web, if you’ve ever done... You guys have probably taken part in hack days or anything like that. You spend 90 percent of your time preparing the data, downloading it, merging it with some other data set, tidying it up. One of the things here, like that foreign key would be a breakthrough, would be we start to be able to if we had some...

### Audrey Tang:
...core data packages...

### Rufus Pollock:
...that we could reference them again and again.

### Audrey Tang:
It’s there.

> ( Website: [http://data.okfn.org/roadmap/core-datasets](http://data.okfn.org/roadmap/core-datasets) )

### Rufus Pollock:
Exactly.

### Audrey Tang:
\[laughs\]

### Rufus Pollock:
There it is. Exactly. The irony I’d also say is you don’t need the whole link. One of the things I’d emphasize here. First of all, going back to SQL, foreign keys are more familiar. They’re very simple here. We still working on that, but the idea would then be you’d be able to do a join, and for example join into this data set some other information.

### Rufus Pollock:
Here by the way, someone’s already bothered to denormalize a little bit. They’ve already inlined the country name in perfectly normal form, like in the database. You wouldn’t have the country name. You’d just have the ID, which is the foreign key and then the GDP values. Someone’s already denormalized a little bit.

### Rufus Pollock:
Let’s say you wanted the continent or you wanted the region. For example a classic thing you might want to do is like, &quot;I’ve got GDP, but I want to aggregate by region.&quot; In fact, if you look at the World Bank data, they kind of do this. Often they’ll include in their data set aggregates, for example, GDP for Europe.

### Rufus Pollock:
Let me give you another one actually that I’m...I could, on my laptop, just very quickly give you a stupid example.

### Audrey Tang:
There’s a text file here that describes all the core data sets.

### Rufus Pollock:
At the moment linked most of the core data. It’s actually more coming. This is the list of all of them. You can build data. What’s also nice is, if you start up to their package, if you want to build really lightweight data catalogs, you don’t even need full on CCAN or something like that. You can just write a text file and then almost do it in JavaScript. Just have a little browser of your data packages.

### Rufus Pollock:
Let me get you data.oecd. Here’s an example of something I’m actually interested in at the moment, just by coincidence. I’m putting up data.oecd. I think if you just search for OECD pharmaceutical expenditure, I think it’s the top, possibly that one. Here we go.

### Rufus Pollock:
What’s great is if you just change the time by the way. Just go down a little bit here, and change the time to all the time. If you drag that over...

### Audrey Tang:
Like this?

### Rufus Pollock:
Just as far over as you can drag that. Then if you just change, for example, this to GDP per capita. Actually US dollars per capita is even better.

### Audrey Tang:
I see.

### Rufus Pollock:
I can’t remember who this is. I think this is the US.

### Rufus Pollock:
By the way, this is how much we spend on buying...

### Audrey Tang:
You’re right, by the way. This is the US.

### Rufus Pollock:
One of the things, the US has gone crazy. This is partly Hepatitis C. There’s one drug category in 2014 that’s released. For example, I know you’re in Taiwan. I don’t know the numbers. In mainland China, there at 30 million people with Hepatitis C who will need this expensive...

### Rufus Pollock:
The point being, just by the way, is if you just look at this dropdown list. Let’s say I wanted total spending on pharmaceuticals, which is the number I actually want. Guess what? It’s not in this list. I would need to join this data set with population per capita over time to do this.

### Rufus Pollock:
That was just one example. We constantly need to do joined and often on the same data set, population, GDP. In fact, the data sets you normally need to join on are quite common. Not always the same, but often they’re the same data sets. Going back, I think you had a nice example of the data package that you...

### Audrey Tang:
The GDP one?

### Rufus Pollock:
Yeah. The GDP one was perfect.

### Audrey Tang:
It was linking to the registry. The thing that it links is not the core yet because it’s not yet curated.

### Rufus Pollock:
I should check that, whether it’s there or not. It’s a good...

### Audrey Tang:
...it is a good example anyway.

### Rufus Pollock:
It’s a good example anyway. I would check that. The other thing we have here that you can see by the way, this is the data packages. Just to look at it, it is actually in JSON. We’re also thinking that you could describe these in JSON, but also in possibly actually CSV itself.

### Rufus Pollock:
My point is to the top. First of all, even if you’re using Swagger, the very top part of this before we have the resources...

### Rufus Pollock:
The resources looks like a little bit how you describe your fields in Swagger.

### Audrey Tang:
Yeah. It’s the JSON Schema part.

### Rufus Pollock:
This part here, you could still be useful as just a convention whenever you’re shipping a file in your API. You may need to send some metadata with it. What’s the license? What is the title? I don’t know. When was it last updated? There’s some standard metadata that you might adopt, that’s just based on having gone through NPM or looking ASCII code metadata.

### Rufus Pollock:
The thing that then is interesting is the description. This is the resources, which is very simple, which is the description of the fields in the file. It’s heavily based actually, some parts are on JSON schema. It’s unfortunately not exactly identical with it. It’s difficult to exactly converge it.

### Rufus Pollock:
The question then is also you can extend the metadata. For example, this is a data package for describing tabular data. Your resources can be anything.

### Rufus Pollock:
In a data package, you can put inside a container. You can put anything. You can put binary data in. It wouldn’t be able to be described so usefully. The resource here wouldn’t have any schema. It would just say name. It would just have those exactly, is the JSON one, exactly.

### Rufus Pollock:
This is actually one with also a remote reference, where it says, &quot;Hey. My resource lives somewhere else.&quot; You can package up stuff that lives somewhere else.

### Audrey Tang:
Which is our usual way of doing things.

### Rufus Pollock:
Right. You can also extend it. Finally, for example, I don’t know if we pull up fiscal data package...

> ( Website: [http://specs.frictionlessdata.io/fiscal-data-package/](http://specs.frictionlessdata.io/fiscal-data-package/) )

### Audrey Tang:
Sure.

### Rufus Pollock:
Looking at this diagram, you can see on the tabular data package, which builds on top of data package JSON Table Schema and CSV. Then you can extend it further by saying, &quot;I must have these fields.&quot; You might have restaurant inspections. This is sort of what you’re doing with your Swagger APIs probably. You’re going to have a list of schemas.

### Audrey Tang:
This is the DITA idea back in the XML era.

### Rufus Pollock:
Exactly.

### Audrey Tang:
The Darwin Information Typing Architecture.

### Rufus Pollock:
Exactly.

### Rufus Pollock:
There’s a lot of people who have talked about this in the last few years, or last decade. Obviously even I talked in the US quite a bit. Where standardizing really simple specifications for like, &quot;Hey. You’re going to put out restaurant inspection data, like ’Was the restaurant clean or not?’ What would be the columns you’d have?&quot;

### Rufus Pollock:
The thing I think for that to work is an obvious idea. It needs to be super simple, and it needs feedback. It’s so easy to write a spec. It’s really easy to say, &quot;You should have column this, this, and this.&quot; It’s a totally different thing for people to actually do that. \[laughs\] The question is, for example, you need good validation.

### Rufus Pollock:
For example, there’s this site called Good Tables that we’ve put up. Obviously they’re schema validated. Here we go. It’s the first one. There are themes like JSON schema validated. All I would say is having looked at them, and even worked at our own site, is let’s say you pick an example. Click on this one here.

> ( Website: [http://goodtables.okfnlabs.org/](http://goodtables.okfnlabs.org/) )

### Audrey Tang:
Sure.

### Rufus Pollock:
If you click on that and then hit validate, you really need to work on your user experience. For example, I don’t think this is still a great user experience. You really need to find a way, and this is harder than you think, to tell people who are going to produce data for you, what’s not right about it if they make errors.

### Rufus Pollock:
In a certain way, when you’re doing your JSON API, it all gets easy because you’ve got tech geeks that are producing the API. If you assume people further down the chain have to...In a way that just hides your complexity. That means someone inside the department needs to get the data in a form that can be published through that API.

### Audrey Tang:
Yeah. Other system depends on it. It would break...

### Rufus Pollock:
It will break.

### Audrey Tang:
...if it somehow invalidates.

### Rufus Pollock:
Right. I got it. That requires a lot of tech. How do I put it? Your real goal ultimately has got to be that civil servants can publish quite a lot of data themselves.

### Rufus Pollock:
At the moment we tend to have a model where basically the civil servants won’t do stuff, but there will be an IT team who will take that data and put it into some schema that we have defined. That has a lot of demand on your IT team.

### Audrey Tang:
I don’t think that’s the case in Taiwan though.

### Rufus Pollock:
My question is here. Let’s pick something really...I don’t know. Inside the department you’ve probably done some research already. What’s a data set that people are producing by hand, where they’re filling out the Excel spreadsheet by hand?

### Audrey Tang:
Meeting logs. That’s the primary example.

### Rufus Pollock:
Great. Do they do that in Excel or do they have now a web form?

### Audrey Tang:
Meeting logs are done in free text, mostly through emails and as Word documents in official document systems. Mostly printed in paper form and re‑scanned as JPEG files, if I’m not mistaken, or at best, as attachment to emails.

### Rufus Pollock:
Perfect. Do you want that to become structured data like a spreadsheet?

### Audrey Tang:
Yes.

### Rufus Pollock:
In each of the departments you’re looking a little bit... What do you think it’s going to happen?

### Shuyang Lin:
I never thought about that. That’s a good question.

### Audrey Tang:
What we’re trying to do here is to... I was explaining the Taiwan situation a bit. I understand that there is usually an IT department in other countries, like in each siloed unit.

### Rufus Pollock:
There might be an IT department. There might be a common one, as well.

### Audrey Tang:
Sure, of course. They would be in a larger IT office or something. In some cases they report directly to an upper level IT unit, sometimes they report to the organization, the command structure doesn’t matter here.

### Audrey Tang:
What matters is that whenever we want to do any data exchange in a normal way, there has to be either a hub in the meta-level, or a direction connection between these IT guys. Then the public servants are blissfully ignorant of it. That’s your picture.

### Audrey Tang:
In Taiwan it doesn’t work that way. \[laughs\] In Taiwan the “IT” people is just a part of the picture. Let’s put it lowercase, like “it”.

> (laughter)

### Audrey Tang:
Most of the time, it’s the private sector vendors...

### Rufus Pollock:
Who do all the stuff?

### Audrey Tang:
...who do all the stuff in building systems. Correct me if I’m wrong, but all of the cases that I’ve seen, it’s an externally procured provider that’s renewed annually, that provides the user-visible experiences. Maybe the infrastructure, the actual machines are maintained by the IT department, but the IT are more like MIS that way than actual information technology.

### Rufus Pollock:
That’s true in many other governments too. They’ve communicated they’ve outsourced a lot of stuff.

### Audrey Tang:
We outsource maybe most of our stuff.

### Rufus Pollock:
Let’s go to the question of structured logs. Let’s call him or her who has to report the meeting logs? What’s her name or his name? Should we give them a name, just for the moment, for doing user research?

### Audrey Tang:
Alice.

### Rufus Pollock:
Alice here has to report the meeting log. You know what it’s like having a structured data. How is that going to work? Which unit are you going to create? Are you going to create a web form where she has to type it in?

### Audrey Tang:
No. In PDIS usually just send her an Etherpad link.

### Rufus Pollock:
You send her an EtherCalc link?

### Audrey Tang:
An Etherpad link.

### Rufus Pollock:
An Etherpad link?

### Audrey Tang:
Yeah.

### Rufus Pollock:
How do you get the structured data out of that, like the time our meeting started?

### Audrey Tang:
We write a parser.

> ( Website: [https://github.com/audreyt/pad2an](https://github.com/audreyt/pad2an) )

### Rufus Pollock:
You give her a structure there in the Etherpad that they must follow?

### Audrey Tang:
We just gave them a template basically.

### Rufus Pollock:
You give them a template.

### Audrey Tang:
The Etherpad always starts with the date of the meeting, the title of the meeting, and then speeches.

### Audrey Tang:
It feels very automated; just start typing whatever. We put on a line of description that said, &quot;Try to put a colon between the speaker and the words they speak.&quot; That’s it.

### Rufus Pollock:
My point though is that as you do this, you’ve created a little format, which is your Etherpad format for reporting speeches. You will need it to be machine-validated.

### Audrey Tang:
Yeah.

### Rufus Pollock:
Sometimes people won’t follow the format. For example, one common thing I’ll do is type dates that you can’t pass as dates. Going back to that Good Table, one of the general challenges you have is of giving people good format.

### Rufus Pollock:
What’s wrong here is there was a header column that was empty. Here the row dimensions are incorrect compared to the thing. For example, here there’s no value for amount of description.

### Audrey Tang:
When they hit publish, what we need to do is to have this very clear, instead of random XML error from SayIt.

### Audrey Tang:
Yes, I do agree, it’s an experience we need to work on.

### Rufus Pollock:
I’m just trying to find...

### Audrey Tang:
Currently, it’s either completely blocked through some cryptic error messages, or it goes through.

### Rufus Pollock:
Let me see if this works. Thank you very much. I probably actually won’t have to, but it’s very interesting see how I do on the...Is this going to work here?

### Audrey Tang:
Just to illustrate, basically, this is from the CastingWords folks. CastingWords is an external vendor. They have their own format. They can produce a VTT or an SRT, which would then timecode it with the YouTube.

### Audrey Tang:
We handle that, too. Oftentimes, we pay for the cheaper option when we don’t care about the timecodes, which is most of the time, where they just paragraph delimit the speakers, and so on. Then we write a parser that translate it into a command console, and then feed it to SayIt. That’s our current platform.

> ( Website: [https://sayit.archive.tw/speeches](https://sayit.archive.tw/speeches) )

### Rufus Pollock:
All I’m going to say is, some things, for example, this is the UK dashboard we built for these. We’re also trying to build these dashboards at the moment. This is an example where this is spending data. Each government department’s supposed to publish spending data every month on what they spent money on.

### Rufus Pollock:
Not just their budget, but individual line items, like we bought this mobile subscription, or whatever. I was involved — when I was on the government transparent board — in designing the format. Guess what? It’s written in CSV. It’s super simple. It’s in Excel or CSV.

### Rufus Pollock:
It has basically eight columns. That’s all it has. Maybe six columns are compulsory. Now, I want you to guess. They’ve actually published now about 3,000 CSVs, because they publish roughly one every month. How many of them are valid?

### Shuyang Lin:
How many?

### Rufus Pollock:
How many out of 1,234 are valid?

### Shuyang Lin:
Valid, you mean?

### Rufus Pollock:
They actually have the six columns they’re supposed to, and the structure of those columns, if it’s supposed to be a number, it’s a number. If it’s a supposed to be a string...

### Shuyang Lin:
Is there a person who really fill out the form?

### Rufus Pollock:
They did it according to the structure.

### Shuyang Lin:
Is it half, 50 percent?

### Rufus Pollock:
Half, 50 percent. What do you guess?

> (pause)

### Rufus Pollock:
80 percent, 20 percent, 10 percent, 100 percent?

> (discussions)

### Rufus Pollock:
30 percent. OK, 30 percent.

### Rufus Pollock:
I hear 20 percent.

### Audrey Tang:
Five percent.

### Rufus Pollock:
Five percent. The answer is zero. They didn’t manage to publish a single valid...

### Audrey Tang:
I’m too optimistic. That’s great to know.

> (laughter)

### Shuyang Lin:
For this one.

### Rufus Pollock:
In addition, you need to track if they keep publishing. Many of them just stop publishing the files. Since the government’s got less interested in transparency, you can just tell here, and we haven’t been running this quite as recently. For example, many of these seem to have not published for quite a long time.

### Rufus Pollock:
For example, these guys, this is one department, which is the Ministry of Defense has published since December 2016. The others are often quite a long time ago, like April 2016, etc. The file, one of the things that we experience, that we went and did user research with the people...

### Rufus Pollock:
Because the civil servants, they’re not trying to be bad. They’re not like they don’t like this. Actually, many of the departments love this. In fact, their heads of department love this data, because they find it really useful for tracking...

### Audrey Tang:
It’s like their GPS for quality.

### Rufus Pollock:
They don’t just like this. They like the data. They like having the data. They’re not against it, but they struggle to publish, and do the Good Tables. What they found is just they don’t understand why changing the column names matters.

### Rufus Pollock:
For example, they often just change the name of the column in the spreadsheet in random ways. They also do things. They often publish dates that aren’t valid, or change the format of the date. Sometimes they save from Excel when it’s switched to US mode, and then they put the month first, rather than the day first, all of this kind of stuff.

### Rufus Pollock:
What it means, by the way, is if you want to actually do a dashboard of government spending, which you’d quite like to build out of this, it’s very painful. It’s very time‑consuming to clean this data up, and actually use it.

### Rufus Pollock:
Why I’m trying to get at that is that it’s not just having the schema. It’s building tooling that gives feedback to users on are they valid with the format?

### Rufus Pollock:
I don’t know in your Etherpad parser, have you done any experience of not having invalid Etherpad documents? What happens when they get it wrong?

### Audrey Tang:
Then you see a broken XML message, a random message that says it’s invalid XML, basically, which is not helpful for the person. You have to click “back,” and then try to figure out where it’s wrong.

### Rufus Pollock:
Try to figure out what’s gone wrong.

### Audrey Tang:
It’s right. I wrote the conversion script myself, and I didn’t do that well on the error reporting thing.

### Rufus Pollock:
It’s hard. I tell you, it’s like good UX for Apple iPhones. It’s harder than you think.

### Shuyang Lin:
Every time I found a problem, I go to her.

### Audrey Tang:
Well, I know exactly how hard it is, because I did write a parser and error reporter for the Perl 6 language.

### Audrey Tang:
Reporting on the exact position when it goes wrong the user a helpful message is really difficult. I spent maybe a year with Larry Wall on that. \[laughs\]

### Audrey Tang:
I know how hard it is. It’s just in the case of meeting logs, I was like, &quot;No, it’s not worth spending that much time on it.&quot;

### Rufus Pollock:
I got you. It’s stuff like also we’re geeks. For us, line column numbers and rows are really valuable. It turns out, in our experience, when we try to do it that way — I don’t know if you have just the good tables, if you just put it up again just for a moment here — it’s not perfect.

### Rufus Pollock:
Originally, we could just say something like, &quot;Header column number one is empty.&quot; This is a geek message. This was written by the...

### Audrey Tang:
Yeah, it’s like, &quot;I don’t know what to do.&quot; This is like my XML messages. It’s like saying the starter tag is empty.

### Rufus Pollock:
Most ordinary users don’t even know what column number one is. You want to draw it like they visualize it. That’s why we try to start drawing out, but it’s harder than you think. \[laughs\] For example, how do you explain date formats?

### Rufus Pollock:
It turns out that just explaining good date formats is harder than you think. It’s not just explaining the date format. For example, many of them go, &quot;Oh, OK, but how do I go to Excel and change the date format?&quot; They don’t know how to change date formats in Excel.

### Rufus Pollock:
There’s also weird stuff, like Excel may show you one date format, but when it exports, it exports in a different date format. It’s things like that that turn out to be hard to do...

### Audrey Tang:
Which is always the case here, by the way, because we start counting years from 1911 in the government.

### Rufus Pollock:
From the revolution.

### Audrey Tang:
From the revolution. It means that Excel is never storing our date formats natively.

### Rufus Pollock:
Right. The thing is, all I’m saying is, this tooling, that’s the really valuable part of format. I can make up format, whatever, building this kind of tooling, so this tooling is built for data JSON table schema.

### Rufus Pollock:
This is an error reporting system that’s built for JSON table schema. You can do, if you want, cool things like once you have this, and this is a Python library, and there’s also a JavaScript library. Now, we’re implementing libraries in every language.

### Rufus Pollock:
You could do things like install it in Travis. Every time you push a file to GitHub, it will check whether your data is valid, and fail or succeed on your pull request.

### Audrey Tang:
The PDIS.tw team here wrote that for our meeting tracking systems.

### Rufus Pollock:
You know that. You can do that kind of integration. Here, the other thing I was going to mention, actually, is fiscal data package. There’s a whole specification that goes beyond just having a tabular data package. I think you search for fiscal data package.

> ( Website: [http://specs.frictionlessdata.io/fiscal-data-package/](http://specs.frictionlessdata.io/fiscal-data-package/) )

### Rufus Pollock:
There you go, the fiscal data package. This, what it does is it says, &quot;It’s a data package. It’s a tabular data package.&quot; It’s got to have tables in it, CSV. Then it says what columns you’ve got to have. It has a model for that.

### Rufus Pollock:
This, it basically says, &quot;Be in CSV.&quot; Basically, it says, &quot;It must be a tabular data package.&quot; Then it says what extra columns or stuff you must have.

### Audrey Tang:
Like the Darwin information typing architecture.

### Rufus Pollock:
Yes, that’s how you described it.

### Rufus Pollock:
Really, by the way, the next level that you probably want if you’re going up, is you’ve got a basic container, like a steel box. Then you say, &quot;My steel box is designed for pallets.&quot;

### Rufus Pollock:
People know what I mean by a pallet. By the way, containers don’t all look the same, it turns out. There’s ones specialized for particular functions. Then you could say, &quot;Mine is a steel box for pallets that hold bicycles.&quot;

### Rufus Pollock:
Here, what you also have, really is, if you know what I mean by OLAP, you probably want to get into dimensional, not just saying, &quot;Hey, I’ve got this columns,&quot; but columns go together. For example, these three columns together describe a customer. These three columns together describe a department, or so on.

### Rufus Pollock:
The question is, then, on the tools, what we want to remember at the very beginning is I should have one click to install, just like you can type npm install, and the library installs. Now, geeks do that, but whether you’re in R, or whether you’re in Excel, or whatever in, you could install data packages or data into your system with one click.

### Rufus Pollock:
The next step has to be, in all of this, it’s just like, &quot;Here is all the tooling you can do. What platform integration can you build?&quot; Going back just a point about see JSON, JSON’s awesome, you can all kinds of stuff with your JSON.

### Rufus Pollock:
Just take an example. One of the standard things people do with data is put it in a relational database, or put it in spreadsheets. They dominate almost any other system — even NoSQL — by orders of magnitude today in terms of installed base.

### Rufus Pollock:
Now, when you have JSON, people do all kinds of fun stuff with JSON. For example, they nest entities. You take one entity, and then inside of it, you embed something else. For example, you might have users, and then you put their posts inside them.

### Rufus Pollock:
Once you start doing that, you have all kinds of fun normalization games. It’s not trivial to take JSON back into a relational database.

### Audrey Tang:
Hmm, you can just create a field with type JSON. Problem solved.

> (laughter)

### Rufus Pollock:
Yeah, but in that case, you’re basically just doing NoSQL in a relational database. You can do it.

### Rufus Pollock:
All I’m pointing out is that, for example, I’ve had this debate with standardization efforts. For example, this thing called the Open Contracting Partnership.

### Rufus Pollock:
Tim Davies is the guy who was quite involved in IATI. The thing is, in life, how do I put it? Many formats get dominated by publisher concerns, not by consumer concerns.

### Rufus Pollock:
Because the people who write the spec are often involved in producing the data, they tend to focus on their concerns as publishers to express what they want to express. Actually, the success of many of your formats is going to depend on consumption.

### Rufus Pollock:
From a point of view of publishers, HTML is pretty rubbish. HTML has no semantic structure, basically, until HTML5.

### Audrey Tang:
I already wrote that on the whiteboard for you. \[laughs\]

### Rufus Pollock:
Even HTML4 is better than XHTML.

### Audrey Tang:
Agreed.

### Rufus Pollock:
It was worse as a structured publishing format, but it was easier to consume. It won. One of my comments is that JSON is great, and you can convert to it, but for example, it’s great for APIs for geeks.

### Rufus Pollock:
You can express however you want it. We could even have GraphQL etc. In some sense, those are optimized for a certain kind of consumption. GraphQL is a JSON API optimized for consumption of mobile or other devices, where bandwidth matters, or complexity of queries matter.

### Rufus Pollock:
For your exchange with a lot of your data, once you’ve got a JSON field, for a lot of the tools, you want to get data back into, it’s not especially convenient, unless you’re building for web application, unless your web APIs are optimized for consumption by web applications.

### Audrey Tang:
Which is the case we’re doing now.

### Rufus Pollock:
Right, but you’ve got to ask yourself, is most of your data designed for consumption by web applications, or is it for consumption back into a database, or back into something else? I’m only pointing this out. I’m not saying you can convert CSV to JSON incredibly easily, like it’s trivial.

### Rufus Pollock:
If you have foreign keys, you can even do complex joins. You can convert JSON back into a normalized structure with tables with no nesting.

### Audrey Tang:
The only things you can do, is either exploding it to individual tables, or declare bankruptcy, and say it’s a JSON field.

### Rufus Pollock:
Right, or it’s a JSON field, but is it a good example? Who here knows Redux?

### Audrey Tang:
R‑E‑D‑U‑X?

### Rufus Pollock:
Like React?

### Audrey Tang:
Sure, of course.

### Rufus Pollock:
Like front end. Do people use React and Redux?

### Audrey Tang:
We use Angular 2, React, Vue, whatever.

### Rufus Pollock:
One of the funny things about Redux is that if you notice the design of a Redux store, your Redux store is like a local cache of your remote database. One of the things you do in Redux is they encourage you to normalize your data.

### Rufus Pollock:
To un‑normalize it, to un‑nest it. If you read the Redux docs, they’ll talk quite a bit about why you need to renormalize your data.

### Audrey Tang:
Because it doesn’t want nesting.

### Rufus Pollock:
It doesn’t want nesting. Why? It’s because it’s hard to do atomic updates of individual items. it becomes a very complex thing to track. Let’s say, for example, you retrieve a post from the server. If that’s nested under the user, then you have to go to...

### Audrey Tang:
It’s expensive, but we can solve it with JSON operational transformation.

### Audrey Tang:
That’s a lot of technical details that we don’t want to get into, though.

### Audrey Tang:
We know nesting is more trouble than flat. That’s a consensus.

### Rufus Pollock:
There’s the thing. I’ve got you. OData, by the way, is like, OData and data packages have quite a lot in common. OData is quite similar. I want to stop there on what I’m saying about data packages. What I would offer is terms of value whatever route you’re going down.

### Rufus Pollock:
One is common descriptive metadata. You could adopt some of the similar descriptive metadata. The other is this question on publisher/user experience. For example, you might want to have a JSON API. At the end, that’s what you’re defining in Swagger.

### Rufus Pollock:
As an experience, maybe you want to have a data package intermediary there. They’re going to publish from maybe Excel.

### Audrey Tang:
Yes. We already agreed on that in the previous meeting. \[laughs\]

### Rufus Pollock:
We did, exactly. I’m just saying, you might want to publish to that, and then convert to JSON for your JSON API.

### Audrey Tang:
We also agreed to that.

### Rufus Pollock:
Those are things that are valuable. We can stop on that one, then, for the moment. I’d like if you could tell me a little bit about this...

### Audrey Tang:
No, it’s just fine. To recap, to augment our realities a little bit, there’s a note that we made some time ago. I think it’s on your Twitter. It’s also on my Twitter, so maybe we’ll bring it up on Twitter.

> ( Website: [https://twitter.com/audreyt/status/829201093368356864](https://twitter.com/audreyt/status/829201093368356864) )

### Audrey Tang:
As the road map of what we’re doing this afternoon, it is a great example. This is the drawing that we had.

### Audrey Tang:
What we essentially said was that there’s an existing system, which for one reason or another, doesn’t have a vendor that responds as quick as we would like to feature amendments, which is the E‑M‑I‑C system, just to put names to it. It’s the EMIC System.

### Audrey Tang:
The EMIC System is where people go when we see typhoons, or any kind of natural disasters. The EMIC System has a back end for all levels of governmental units to register whatever information they have on, for example, a road is broken, or for example, a tree has fallen.

### Audrey Tang:
Usually, their user experience is that of instant messages, which means that it’s unstructured data. Well, at least it’s plaintext, not handwriting.

### Audrey Tang:
Maybe not as unstructured as it can get, but still, for textual data, it’s just a line of description.

### Audrey Tang:
People then look at that line, and decide what to do with it. Most of the time, they just shove it into this time‑stamped append‑only log of disaster data exchange, and then forward to people who want to subscribe to this kind of alert information.

### Audrey Tang:
Then for those subscribers, they maybe add a tag, or maybe even without a tag, meaning they just want to subscribe all the information from the Taipei City, for example.

### Audrey Tang:
Then they get a relay of all those aggregated information out of it.

### Audrey Tang:
What we would like to do, is if it describes a particular place, and we know the place already, we would like to convert it to some kind of geotagging. We’re geotagging it.

### Rufus Pollock:
You enrich it, basically. There’s an enrichment.

### Audrey Tang:
There’s an enrichment, exactly. Then, of course, the reported time may not be the same as the time that it actually happened. You also want that part of the ETL, which is the time part, not just the space part.

### Audrey Tang:
The end result, what we want, of course, is a layer on top of a public-visible map, like OpenStreetMap, with anything that let people query what the disaster is like around your neighborhood.

### Audrey Tang:
Of course, the EMIC System is already under a lot of stress performance‑wise from the existing governmental users, and the existing aggregation, and the queries.

### Audrey Tang:
The existing hardware would not support any more ETL. What we said last meeting, even though we didn’t say EMIC specifically, is that because it’s all in this huge relational database, we need somehow to get it to export in bulk regularly, with a clean data description language that we can amend as the enrichment goes on.

### Audrey Tang:
For example, out of every message, we currently only extract time and text. At some point we would like to extend a TopoJSON-compatible description, like when it talks about road we want the road there, which is a line or a path and so on. We don’t have the complete listing yet.

### Audrey Tang:
We want the DDL to be able to grow, and when we grow it we want the API to stay clean, compatible with existing consumers but also versioned in some way.

### Audrey Tang:
There’s already users in other government agency who broadcasts push notifications, and we don’t want those services to stop. It would be silly to rebuild that. We want this to continue, but against a clean API from now on which is where an data schema comes in. It’s already communicating over HTTP anyway, so why not structure it?

### Audrey Tang:
What we talk about is we take the DDL here and say, &quot;Every hour get me a data package of everything that happens around EMIC, and then publish it as open data packages,&quot; and then send it to a second system which is called the NCDR system. The NCDR system currently is for disaster prediction and reduction. The R stands for reduction I think.

### Audrey Tang:
While NCDR doesn’t have the official mandate to publish alerts around disasters, their develops are in‑house, and they’ve got some good ArcGIS developers there. They can very easily do visualizations that not only look beautiful, but it’s also very useful.

### Audrey Tang:
What they don’t have at the moment is first‑class access to the aggregated database of EMIC.

### Audrey Tang:
Data packages obviously is a way for people who don’t have a relationship, let’s say, with each other, to nevertheless fully consume the other person’s data with the confidence that it will not break. What we are saying is that on the national open‑data platform, we would now house a schema for the data package.

### Audrey Tang:
The EMIC will start producing structured data, and then the existing National Development Council’s open data validation team...I don’t know whether you’ve talked to these people.

### Rufus Pollock:
No. I haven’t.

### Audrey Tang:
They already have a data quality program this year. They will use machines to ensure that the EMIC keeps honoring its open data promise.

### Audrey Tang:
Note that it’s not checking some API description. It’s just plain open data.

### Audrey Tang:
Now we have NCDR consuming this data, and during disaster we want the frequency to pick up.

### Audrey Tang:
We also want to do enrichments at the NCDR, because there are now developers in‑house. We can tell them to get all sort of push notifications, as long as it’s not called government official alerts which is outside of their purview. They can do a lot of even more value adding with for example the weather data, Water Dam control data and so on.

### Audrey Tang:
Also they already partner with Google and other vendors, with standard CAP protocols. Then they can publish not with their own API, but with the existing web‑based APIs for disaster recovery to the consumers of Facebook Safety Check.

### Rufus Pollock:
Yeah.

### Audrey Tang:
And Google, and whatever. This is standardized. We don’t need to do anything here. It can also publish its own enriched data as a kind of derived data set, as also open data on the national data platform. People who want data don’t really need to look at the raw EMIC data.

### Audrey Tang:
They can look at the enriched data that NCDR will already have, not only the raw fields but also the enriched data fields. That’s what we planned essentially with us meeting, without me telling you the used case. That’s essentially the idea.

### Rufus Pollock:
That’s really great. One of the things I think about is that certainly when you’re having large ingestion of raw data, obviously one of the other things you can do is start... often, at the beginning, you could just be dumping...

### Rufus Pollock:
Rather than put it into a structured database, one of the things I like at the moment is you could just use flat files. If you have a DDL and you’re dumping data packages, if you’re getting a lot of raw log data in, you could actually run a lot of your enrichment pipeline.

### Rufus Pollock:
For example, we have this thing at the moment we’re calling — that’s about to be a post, I think — data package pipelines. Basically, ETL pipelines run around packaged input of each stage of the data package. They output the next stage of the data package.

### Rufus Pollock:
If you do quite a bit of ETL, one of your pain points is normally, as they get complicated, &quot;What is the agreement between different stages of the pipeline?&quot;

### Rufus Pollock:
We’re using this at the moment. This is very crude in the sense it’s a mini‑ETL language for a pipeline that’s based around tabular data, particularly.

> ( Website : [https://github.com/frictionlessdata/datapackage-pipelines](https://github.com/frictionlessdata/datapackage-pipelines) )

### Audrey Tang:
It’s kind of naive.

### Rufus Pollock:
Yes, a very naive one, but even if you’re doing a complex code one, you could still have your contract between different parts of the pipeline be written around it. I’m doing one at the moment where I’m looking at cyber security incident data, and more also infection data, like your machine is not yet used for anything, but it’s vulnerable. We have billions of rows come in.

### Rufus Pollock:
You can have a similar enrichment. For example, you just have an IP address. You need to add the geo location. You need to add other information.

### Rufus Pollock:
This kind of aspect of, &quot;How do you build that pipeline?&quot; comes up a lot. I think it’s very useful.

### Audrey Tang:
The &quot;run&quot; here is arbitrary dot‑separated identifiers that mean something to the tools. It doesn’t have a typology?

### Rufus Pollock:
This is the name of an ETL stage. You could imagine this getting more enriched, where you even have a little library of the things that you can do. At the moment, it’s very basic.

### Audrey Tang:
So it’s designed like a Docker Compose file?

### Rufus Pollock:
Yeah, and we do run this in Docker, exactly. What you just say is, &quot;OK, yeah, exactly.&quot; You can add things, format, and you can attach things.

### Rufus Pollock:
It’s a really simple thing. It’s just a very basic convention of data packages, but it’s the tooling around it.

### Audrey Tang:
So all the drawings here that we do can be described by a less naive, but still useful — usefully inspectionable — variant of data package pipeline.

### Rufus Pollock:
Yeah. Just to be clear, you don’t have to do data packages with CSV. To really emphasizes it, you can have data packages with JSON in them.

### Rufus Pollock:
Data packages, at the most naive level, are just like a steel container. You can put what you like inside them. You can have JSON data and a JSON Schema.

### Rufus Pollock:
For tabular data, in my experience, the simplest thing is CSV and using JSON for table schema. Why? Size constraints, you could still CSV on gigabytes of CSV. You can stream it. You can stream JSON, but it’s a bit pain...the pause is much more complicated to stream.

### Rufus Pollock:
You can stream CSV, gigabytes of it, over the web. You can stream it. Every language has well‑built, iterative structures for reading gigabytes of CSV and not breaking, like not having to load it all into memory ‑‑ just stuff like that, which, when you’re building ETL pipelines, really matters.

### Rufus Pollock:
Should we talk about the open fund?

### Audrey Tang:
Sure, of course.

### Audrey Tang:
Thank you for the consultation, wizard.

> (laughter)

### Audrey Tang:
Really, this is great. Before this case, we’ve never really dealt with true cross‑ministry regular pipelines.

### Audrey Tang:
We dealt with different units in the National Development Council, and that’s working pretty well with the regulation preview and also visualization of the national budget.

### Audrey Tang:
These are managed by different units within the NDC, so it’s easy, and they have a common IT department.

### Audrey Tang:
This afternoon is the first case where we’re going in and say to two different ministries, &quot;Hey, you’re going to do things the new way.&quot; I’m pretty excited. If this can be made to work and well‑documented, we can do this with more ministries.

### Rufus Pollock:
That would be great. The one other question that I wanted to talk about was open software, actually more than the open data side. That also comes to the open fund.

### Rufus Pollock:
I could start with a question, which is, does anyone know the list of vendors, the IT, the national government or city governments, for last year how much they spent?

### Audrey Tang:
Of course. It’s our basic procurement data.

### Rufus Pollock:
Great.

### Audrey Tang:
This shouldn’t take long to find; it’s between $2-3 billion TWD per year.

### Rufus Pollock:
The question is, has anyone then checked how much of that spending went to on open software to pay for or buy software or services? It could be actually running a system that used open software versus closed software.

### Audrey Tang:
It’s got to be less that 0.1 percent, so I don’t think anyone...

### Rufus Pollock:
No one bothers looking at it, got it.

### Audrey Tang:
Exactly. No one bothered counting.

### Rufus Pollock:
It did not even register.

### Audrey Tang:
Actually, when I’m look at the raw numbers now, a lot of it is in services. It’s in building an IT system or maintaining an IT system, not on software licensing.

### Rufus Pollock:
I got that, but the question would be how much of the software inside of that service was open software versus closed software, how much that would be. Often, governments don’t know. That would be my question.

### Audrey Tang:
We do have a breakdown.

### Audrey Tang:
It’s mostly hiring services, it’s building, it’s maintaining, and very little on licensing actually.

### Rufus Pollock:
The classic example I also give is — I won’t bring up the diagram — let’s say this a piece of medicine. This is a pill that you take. How much of the cost of that is the information and how much of that is the cost of the manufacturing, the actual chemicals?

### Rufus Pollock:
Let’s say you buy a treatment. You buy $100 of pills. How much of that $100 is the manufacturing cost? How much of that is the information cost? It will vary, right?

### Audrey Tang:
It will vary depending whether it’s a generic or it’s a label drug.

### Rufus Pollock:
Let’s say, an in‑patent drug, it might be that a dollar of that, if we would really draw this diagram correctly, this tiny bit down here would be the cost of the actual chemist and the actual manufacturing it. $99 would be the cost of the information. You can ask the same thing when you buy services.

### Rufus Pollock:
It’s true people don’t normally buy a drug recipe. They buy a drug. They buy the actual pill. Similarly, most people actually buy a working software system with servers that are running and doing stuff, but, obviously, inside of that is the sysadmins, the electricity, the energy to run all this service. The other part is the software, the know‑how.

### Rufus Pollock:
The question would be to ask of how much was spent on IT last year, how much of it was crudely for buying information, and the know‑how, and the actual rest of the software, and running that, and how much of it was paying for the engineers and the electricity to run the computers and stuff like that? I’m going to ask that as one question.

### Rufus Pollock:
The question would be, how much of that went on information or buying information as opposed to paying for just the electricity and all the other stuff, which you pay for whether you’re using open software or closed software? How much of that went on open software? Then you could ask, what’s your goal?

### Rufus Pollock:
How much of government spending should go on open software or closed software and why? The other question I would ask you is, if you went around who is in charge of IT budgets in given departments or across government, what’s the name of the guy who runs that right now?

### Audrey Tang:
There’s a fixed portion that goes to SMEs.

### Rufus Pollock:
A fixed portion?

### Audrey Tang:
Yeah. There’s a fixed SME portion.

### Rufus Pollock:
How much is it?

### Audrey Tang:
Just a second. Let me double‑check before I say anything silly.

> ( For 2016, it’s 40% at a minimum. Source: [http://gpw.moeasmea.gov.tw/moeasmea/wSite/ct?xItem=60540&amp;ctNode=822&amp;mp=00205/](http://gpw.moeasmea.gov.tw/moeasmea/wSite/ct?xItem=60540&amp;ctNode=822&amp;mp=00205/) )

### Rufus Pollock:
There’s a fixed portion? We could ask ourselves, what is their goal?

### Rufus Pollock:
For me, a goal of having open software, that isn’t my goal. My goal is value for money, a good deal for Taiwan citizens or for British citizens because we don’t care about open software or closed software for its sake unless we’re Richard Stallman maybe. I’m joking.

### Rufus Pollock:
Probably he doesn’t care. He cares about freedom. Richard Stallman doesn’t care about free software. Actually, he cares about freedom. Similarly, maybe whoever runs spending here probably cares about or they at least say they care about value for money.

### Rufus Pollock:
My questions is, if you went around now and asked decision makers in Taiwan’s government what role do they think open software has in getting value for money, would they even know what open software was? Would they know what was good or not good about it?

### Audrey Tang:
There was a huge push around OpenOffice in 2013, which is what I was trying to find, because there was this justification paper that says how much licensing cost it saves over Microsoft Office subscriptions and so on.

### Audrey Tang:
I couldn’t quite find the report, but the original justification was very close to what you have said, which is to promote a local community around the then OpenOffice, now LibreOffice community and for people to get in touch with the Chinese text processing part of it instead of waiting for Microsoft to roll next.

### Audrey Tang:
The main argument was that we can save this much amount on licensing cost, which I was trying to find but couldn’t.

> ( The 2013 report on OpenOffice.org: [http://www.dgbas.gov.tw/public/Data/3258342471.pdf](http://www.dgbas.gov.tw/public/Data/3258342471.pdf) )

### Rufus Pollock:
My question here is let’s say you had a goal to have more open software; we’re convinced that more open software would mean better value for money for Taiwan. It would mean better IT systems probably, that they were more agile, they were more adaptable to Taiwan’s needs, and that they were probably in the long run cheaper.

### Rufus Pollock:
I actually come to the cheaper item last. The number one item is freedom to adapt to your needs faster and better.

### Audrey Tang:
I’m pretty sure the IT decision makers know about this, but they don’t usually consider it practical. \[laughs\]

### Audrey Tang:
They have heard of this argument a lot.

### Rufus Pollock:
What I want to talk about now is practical. I went and talked to the OECD leaders. I was saying like, &quot;What can you change? What can you guys, what can you change while you’re here in office?&quot; You could build systems. The thing is you’ll, at some point, probably all leave. It’s natural. You’ll get hired by somebody else. Maybe you’re here anyway on a six‑month period.

### Rufus Pollock:
What often stay around in bureaucracies is process. The rules that you’ve put in place, if you want to buy differently, you need to change the rules by how you buy. Rather than focusing on what you buy, rather than us going and having an argument directly about, &quot;We should buy more open software,&quot; you want to talk about how you’re going to buy. I think it’s actually on my website, if you wanted to put it up.

### Rufus Pollock:
Let me just see. Rufus Pollock. I think if you search for Rufus Pollock. Let’s just have a look. If you look for Rufus Pollock, Rufus OECD, I think that might work. I think the second slide or item which needs to be Twitted \[indecipherable 70:09\] my website. I have to say Google is constantly reducing the priority of individual personal websites. If you then click on the link, I think it’s here. You’ll have them. This slide does not show up...

### Audrey Tang:
I don’t think it’s personal. It’s insecure, not HTTPS, and embedded from a HTTPS site.

### Rufus Pollock:
Is that what it is?

### Audrey Tang:
That is what it is. \[laughs\]

### Rufus Pollock:
If you click on this...

### Audrey Tang:
You probably want to run Let’s Encrypt on your website.

### Rufus Pollock:
Yeah, I could get a cert. I could turn it on.

### Rufus Pollock:
If you just scroll down quite a way, there were some examples. Keep going.

> ( Website: [http://rufuspollock.org/wp-content/uploads/2016/09/data-driven-government-oecd-cio-sep-2016.pdf](http://rufuspollock.org/wp-content/uploads/2016/09/data-driven-government-oecd-cio-sep-2016.pdf) )

### Rufus Pollock:
One more thing: You can only procure what you know. One of the big problems for IT also is if you want to go and ask someone, one great question to ask people who are buying IT of any kind. Just ask them, &quot;What’s the difference between buying software, or buying an IT service, and buying a chair?&quot; What’s the difference?

### Audrey Tang:
The stock of the common procurement doesn’t run dry when you buy software.

### Rufus Pollock:
That’s one point, absolutely.

### Rufus Pollock:
What’s the other thing? How much have chairs changed in the last 100 years? How different are these chairs from 15 or 20 years ago?

### Audrey Tang:
Not since the Bauhaus.

### Rufus Pollock:
Bauhaus.

### Audrey Tang:
\[laughs\]

### Rufus Pollock:
These chairs have not changed. The basic design of a chair has not changed in hundreds of years, but computers have changed quite quickly. In addition, you can only buy what you know.

### Rufus Pollock:
I think it was a famous saying, everyone attributes stuff to Steve Jobs, like they attribute it to Einstein or whatever. Basically, you can only buy what you can imagine.

### Rufus Pollock:
If you’re going to create something that people can’t imagine, you have to create it for them to know it.

### Rufus Pollock:
The problem with buying software is people are trying to procure things they don’t always know that they can have. They only go with what they can already imagine.

### Rufus Pollock:
Also, chairs are very standardized. You can compete on price. There are a few different attributes that you can rate. Software’s not like that.

### Rufus Pollock:
In addition, when you buy a chair, you use it for 10 years. Then it gets old. Then you maybe throw it away. You buy new chairs. Let’s say these chair wear out and we want to buy new chairs.

### Rufus Pollock:
There’s basically no connection between the chairs we buy next and the chairs we had before.

### Audrey Tang:
Except they have the same API.

### Rufus Pollock:
We’re talking about chairs here.

> (laughter)

### Rufus Pollock:
Yeah. They have the same API. You can still sit on them, that does not change. That’s a very good point.

### Rufus Pollock:
But the point is there’s no relationship. If these chairs are really bad and really uncomfortable, you can buy a different set of chairs. It’s not a problem.

### Rufus Pollock:
With software, when you buy one thing, normally you have to lock it. Even the people who come along and say, &quot;Don’t worry. We’ll have standard open APIs. You don’t need to worry what’s behind the scenes anymore,&quot; that’s just rubbish.

### Rufus Pollock:
Don’t believe them. Don’t even believe them if they’re Audrey Tang. It’s not true. The truth is...

### Audrey Tang:
...they’re still bad chairs. \[laughs\]

### Rufus Pollock:
...software is way more complicated than its API.

### Rufus Pollock:
APIs are entirely surface in the interaction between different things.

### Rufus Pollock:
Just for example, go back to a story. Late 1980s, IBM is still one of the richest companies in the world. IBM say, &quot;Well, look. We know what the problem is. People are locked in to the DOS APIs. All we need to do is clone the DOS APIs. It’s not that hard. And you’re going to be completely competitive with them.&quot;

### Rufus Pollock:
IBM spent like four or five years and a hundreds of millions, if not billions, of dollars trying to clone the Microsoft APIs to be feature compatible, so that people can run their applications on IBM’s system just like they can run it on Windows or DOS. They don’t succeed.

### Audrey Tang:
That was also because the standard was set by a single vendor. It’s a very old debate.

### Rufus Pollock:
It’s not just that. Look at AWS. Look at it. There’s AWS for cloud. Cloud APIs aren’t that hard to clone. Yes, they are. Look how fast AWS is producing new services. Now there’s Lambda and there’s this. Every week there’s a new service from them.

### Rufus Pollock:
People always start out and say, &quot;Oh, API’s so simple.&quot; Also what happens when you need to add stuff to the API? Actually the software beneath determines how quickly and how performantly you can add new features to your API.

### Rufus Pollock:
Often, by the way, web APIs still don’t cut it. Often you actually do need to integrate at the machine level. Web APIs all still have significant latency and performance issues. Serializing JSON in and out of APIs is not hugely performed. You often end up having to go back to the system.

### Rufus Pollock:
Believe me, I know it. Also, when people actually want to switch vendors...

### Rufus Pollock:
For example, I went on a contract, bid on a contract years ago. The World Bank and their enthusiasm at the beginning of the open data boom...

### Rufus Pollock:
The finance section at the World Bank. Not the World Bank main part that bought from Socrata, which was a proprietary vendor of data platforms. They did an open bid. It wasn’t really an open bid, but they said it was an open bid.

### Rufus Pollock:
They said, &quot;OK. We’re opening bidding.&quot; The bidding ended at the end of April. They said, &quot;By the beginning of June, when our contract expires, you need to have migrated all the data to our new system and be compatible with the old API from Socrata.&quot;

### Rufus Pollock:
Socrata had that open API. No one else implemented it. Also you had to migrate all the data, comply with all the performance quality \[indecipherable 75:55\] . That’s classic stuff.

### Rufus Pollock:
&quot;Oh, yes. The API is open, but you need to be able to stand up, migrate all the data, do all the other stuff, to really have competition.&quot; Remember, the guy who’s losing the business is not going to be super helpful about migrating all this stuff in.

### Rufus Pollock:
There will always be the features that they added that you really needed, whatever it is. It’s really hard to maintain true backwards compatibility for all the edge cases, for all the little bits of API that have been added that you didn’t notice.

### Rufus Pollock:
The real guarantee of competition is open software. Ultimately you must have the stuff underneath open, or you don’t get real freedom of choice.

### Rufus Pollock:
The thing is, &quot;How do you get more open software?&quot; Let’s just go to the next slide for a moment. This is what I want to emphasize. A lot of time we start saying, &quot;We want more open software of something.&quot; The question is how you buy. That’s what you can change. Let’s just go to the next slide.

### Rufus Pollock:
I’m sorry to have this annoying scroll.

### Audrey Tang:
No. It’s fine.

### Rufus Pollock:
What can you do? This is a little bit for the OECD. It’s a little bit like I customized it for them.

### Rufus Pollock:
One of them is agile‑lean, another is explicitly favor open software in procurement deals in Taiwan. Do you have an explicit category that allows for open software?

### Rufus Pollock:
How big is it? Have you guys ever bought...

### Audrey Tang:
We do.

### Rufus Pollock:
How big is the points relative to other items?

### Audrey Tang:
It’s a section called intellectual property ownership. We just revamped that section.

### Rufus Pollock:
Often what happens is people say, &quot;We want to just have the right to the software.&quot; It’s often clever by the way.

### Rufus Pollock:
If you’re smart, what you’ll do is you’ll say, &quot;Everything that you’re going to buy...&quot; I won’t name a vendor. Let’s say I’m vendor X. You’ll come and buy from me. I’ll say, &quot;Yes. Yes. Everything I build under this contract, everything I build under this contract, will be open software.&quot;

### Rufus Pollock:
What I build under this contract will just be the layer, a thin layer, on top of all my existing proprietary technologies. Yes. At the end of this contract, you will own this layer or it will be open, this layer of open software. It’s completely useless without the rest of the stack.

### Audrey Tang:
Yes. We’re all painfully familiar with this phenomenon.

### Rufus Pollock:
You’re all painfully familiar.

### Audrey Tang:
We’ve been through this many, many times. \[laughs\]

### Rufus Pollock:
This is why, guys. You not just being coders, but getting in there and writing the procurement rules, really carefully. Saying stuff like, &quot;this scoring is not just for the software we buy under this contract, but it’s for the entire solution that must be needed to run it.&quot;

### Audrey Tang:
Down to operating system level.

### Rufus Pollock:
Exactly. The other one is like principles for buying agile. The two I want to talk about is you’ve got open. Buying agile makes a huge difference. It’s hard for governments, because they like to have spec and deliver. They find that hard to do.

### Audrey Tang:
Yeah, we don’t have spec-free procurements here either.

### Audrey Tang:
But I do see your point.

### Rufus Pollock:
Open offsets. That’s the one I wanted to talk, which is setting up rather than the whole thing that gets you out of...

### Rufus Pollock:
The thing still of traditional procurement, even when you procure open software, is you know what you’re buying. I want a chair. How much will it cost to have a chair? I want a website with this, this, and this feature.

### Rufus Pollock:
To get out of that space, you either need to go the agile route, where you stop buying software and you buy development time basically.

### Audrey Tang:
Which is what we’re doing in PDIS.tw.

### Rufus Pollock:
Right. Good idea. The challenge of that is you end up having to build most of the software yourself.

### Audrey Tang:
Well, we have a time frame. We put out a budget. We can still outsource standard-compliant solutions and welcome bidding.

### Audrey Tang:
People who come up with WordPress or Drupal in their stacks automatically gets a better seat in the bidding.

### Rufus Pollock:
I got that. What’s tough about it is still...

### Rufus Pollock:
Let’s have a piece of software that will be valuable if we build it, to Taiwan, to Great Britain, to Brazil. Here in Taiwan you can procure agilely, but you then have to absorb either all of the cost for that piece of software...

### Audrey Tang:
Yeah, all of the cost, mostly.

### Rufus Pollock:
Right. Then that makes it hard for the pieces of software that are only feasible when they’re supplied to multiple countries. You have a coordination problem.

### Rufus Pollock:
Now one route around that is rather than going through traditional procurement, where you say, &quot;I want X, and I’m going to put up this amount of money for it,&quot; you can go to an open offsets model where we have this fund. We put money in it. Then we just pay out of the fund for what we turned out to use.

### Rufus Pollock:
That means I, as an open software vendor, like of the classic VC company, I still have to take the risk. I am going to build this piece of software. If it gets used, I know I get paid out of these funds.

### Rufus Pollock:
It means you invert it. The government no longer needs to know it has chairs. It just looks at the end of the year and says, &quot;What did we use? Oh, we used 5 tables, 10 chairs, 3 tanks.&quot; \[laughs\] Whatever we bought, we’ll pay for out of our open offset fund. The vendors take the risk capital of creating the software in the first place.

### Audrey Tang:
It’s an open alternative to the model of SaaS, basically.

### Rufus Pollock:
Exactly. It’s the open version of SaaS. It’s even better, by the way, because you can distinguish in your payments in the fund. You can pay for the service part of the SaaS separate from the open information.

### Rufus Pollock:
Why is that important? You don’t just want to pay the vendor who supplied you the SaaS service.

### Rufus Pollock:
For example, let’s say someone supplies WordPress services to you. Your procurement will probably just cover the SaaS part of it, the part of running the service. You often won’t actually be paying, unless you’re buying new features, for any of the underlying development of WordPress, but you kind of care of that.

### Rufus Pollock:
The open offsets fund could even be separated from the SaaS procurement. The offsets fund pays for the software.

### Audrey Tang:
What I’m saying is the development needs to piggyback on subscriptions, because it’s the same cycle. We renew annually. This option is to renew annually, because conceptually it’s the same deliverable.

### Rufus Pollock:
Exactly, it’s renewed annually. Let’s just scroll down one more. This is the guide. This is the things. This is why software is different from chairs and bridges. Switching cost is significant, and governments are bad at negotiating. Governments are pretty terrible at negotiating.

### Rufus Pollock:
We can keep scrolling down, keep going. This is the current model and this would be the new model. The new model, government has these IT funds. You pay on use, which is the open offsets. You have spec‑and‑deliver and you have agile. You have three routes, rather the traditional just spec and delivery.

### Audrey Tang:
What we have now is if it’s SaaS, then we call it the cloud procurement, which is the top part.

### Rufus Pollock:
Which is pay‑on‑use.

### Audrey Tang:
Which is pay‑on‑use.

### Rufus Pollock:
That’s still not open offsets.

### Audrey Tang:
No, it’s not.

### Audrey Tang:
What I’m saying is that currently in Taiwan’s IT procurement, everything that’s SaaS is counted differently than the spec‑and‑deliver. We’re trying to convert the spec‑and‑deliver line here.

### Audrey Tang:
That was the picture, but these are two different terms on the procurement sheet.

### Rufus Pollock:
That’s great. The only thing I’d point out is that cloud procurement is just like traditional software buying, lock‑in. The problems of lock‑in to a cloud provider are just as big.

### Rufus Pollock:
If you look at the cloud providers and you go and look at the ones in California, like Workday, any of the really big ones, and you look at their revenue recognition and the way they think about it, they’re clearly willing to lose massive amounts of money to acquire customers.

### Rufus Pollock:
Why are they willing to do that?

### Audrey Tang:
The want to sell the data?

### Rufus Pollock:
No, not because they want to sell the data.

### Audrey Tang:
OK, maybe not... \[laughs\]

### Rufus Pollock:
Because you’re locked in. Once you’re on their platform, once you’re on Workday for HR, you’re on Salesforce, or you’re on these platforms, you are not going to switch off easily.

### Audrey Tang:
Yeah...

### Rufus Pollock:
They are running the same model that old software...that Windows ran. It’s no different. It’s just a recurring revenue rather than a fixed...Windows, you still pay for upgrades. People think it’s so different. Windows used to upgrade every two, three, four years. You bought it at the time, and then you upgraded four years later, but you kept having to upgrade.

### Rufus Pollock:
If we keep going down, we’re nearly finished. But my advice for you guys, that’s the agile and lean part, and we go open offsets, it’s the Heartbleed bug.

### Rufus Pollock:
Start tracking use. My question to you guys would be to say, in terms of policy that you could have, one is could you start tracking use? Is there any way to set up a small, at the beginning, open fund? Say to government, &quot;Hey, could we take some of this cloud budget, maybe five percent right now, and put it in a fund?&quot;

### Rufus Pollock:
&quot;It’s completely limited to open software. We’re not paying for stuff we actually use, like a SaaS license, but we look to the software inside of it. We’re paying the core developers. If EtherCalc gets used or Etherpad or HackMD or WordPress or CKAN gets used, you pay the original developers.&quot;

### Audrey Tang:
We’ve been making some changes.

### Audrey Tang:
Literally the first thing I did as the Digital Minister is to change the procurement rules.

### Rufus Pollock:
Wow, it’s so great.

### Audrey Tang:
I’ve been thinking about this for years.

### Rufus Pollock:
You’ve got to do it. Ideas are cheap. Implementation...

### Audrey Tang:
Right, and then we put it up for 60 days of public consultation. I think it’s drawing to a close now. Let’s look at the actual comments. It’s very tricky.

### Audrey Tang:
There’s 14 days left. We can’t really do anything before that. I’m sorry that it still says OpenAPI, but it will say common API standards at some point.

### Rufus Pollock:
Where’s the open fund in that proposal? Is there a proposal to A, in your procurement...how are you going to measure...let’s say procurement thing, and you’re going to have points, just to get really practical. You say, &quot;OK, we want open software, and we’re going to give points in procurement for software being open.&quot;

### Rufus Pollock:
How will you assess that? Do you check with the vendor? What’s the verification process to check the stack they supply is actually open?

### Audrey Tang:
This is where the cloud procurement and the spec — or agile — procurement differs.

### Audrey Tang:
We don’t have a good story for the latter; this is what all of us are painfully aware of.

### Audrey Tang:
You can say, &quot;You must use PostgreSQL,&quot; but you must know you want PostgreSQL going in. For many government agencies, this is simply out of their consideration, so they just say, &quot;OK, the web application source code must be open,&quot; or something.

### Audrey Tang:
Then it ends up paying a lot on Oracle license, which is your classic example.

### Rufus Pollock:
It must be the whole stack, not just the...

### Audrey Tang:
It’s true. We don’t have a good story here.

### Rufus Pollock:
Without that, it doesn’t mean that much. That’s the problem. Without that...

### Audrey Tang:
It just means you can swap out the top-layer application vendors.

### Rufus Pollock:
The vendors are smart at hacking the system.

### Audrey Tang:
Yes. That means the new vendor must still know Oracle to get the winning bid. Even they get a whole open source, open data system, they must know Oracle.

### Audrey Tang:
We haven’t solved that.

### Audrey Tang:
However, for the cloud part, this is my main target of this procurement change. First, it’s software‑as‑a‑service, but we’re insisting now running on local infrastructure.

### Audrey Tang:
That actually rules out pretty much everybody who relies on this sticky lock-in. Even if they say it’s proprietary software, it still has to run on the data center here.

### Audrey Tang:
We do it not for data localization purposes, but really for know‑how localization, so that people can locally inspect what’s going on.

### Audrey Tang:
As you probably are aware, if they use Oracle and the Oracle Access Manager’s stored procedures, a lot of the procedures is plain text. It’s not binaries.

### Audrey Tang:
Even if we don’t manage to convince to get the entire lower stack binaries to convert to open software, you can still inspect pretty much everything, during a running system, to figure out how it’s working.

### Rufus Pollock:
I got that. Yes, it is great.

### Rufus Pollock:
I guess my suggestion is, and I remain at your disposal, would be, one, see if you can get these numbers, which is, &quot;How much was spent?&quot; and &quot;How much was spent on open?&quot;

### Audrey Tang:
We can measure that for cloud procurements.

### Rufus Pollock:
Two, could you try getting open funds set up, whose sole purpose was to say, &quot;We paid for the open software we used last year.&quot; It might be open SSL Library, it might be WordPress, it might be CKAN, but run an experiment. It could be two percent of the IT budget to say, &quot;Let’s run an experiment next year and see if this delivers us value for money,&quot; and see what happens.

### Rufus Pollock:
You could even limit it and say, &quot;We’ll only spend it in Taiwan,&quot; which would be really good for the government. We’ll say, &quot;We’ll spend it on open software, but it has to be a CKAN developer in Taiwan, it has to be a WordPress developer in Taiwan, it has to someone...we will spend this money, but it will be with local economy,&quot; which is very nice. The money stays in the economy. Just try and run and open fund.

### Rufus Pollock:
The other is to try and write a rule in about assessing the entire stack. Don’t put the burden on the government. You could say, &quot;A vendor, when bidding, has to assess what percentage,&quot; and you could do it in value terms or something. You could say to them, &quot;In terms of the cost of running this stack, what percentage of it is open software?&quot;

### Rufus Pollock:
It’s up to you to say, if you’re going to spend $50,000 running X but you’re going to spend $100,000 buying Oracle licenses, the $50,000 means you’re only doing a third...

### Audrey Tang:
There’s a part in the Digital Nation Plan that develops automated tools to look at all the source code and binaries that a bidding vendor submits, and then try to figure out, first, how much of it is open licensed, how much of it is Creative Commons license, which may not be open, by the way.

### Rufus Pollock:
Yes. We can just say open license. Don’t say CC license. You say open license and non‑open license.

### Audrey Tang:
Well, even if it’s CC‑ND, we want to know its license.

### Rufus Pollock:
Then that’s great, but it’s like going into the discussion of all the weird freeware. I’d say open license, and then you say liberal license...

### Audrey Tang:
Yeah. Technically it’s &quot;free culture license&quot; if we are talking in a CC way.

### Rufus Pollock:
Don’t worry about the free cultural works definition. Open Definition covers all of that.

### Audrey Tang:
I’m aware of that. I’m just saying there’s non‑code part, too.

### Rufus Pollock:
Yeah, exactly.

### Audrey Tang:
Saying &quot;open software&quot; doesn’t cover the whole of it, the non-software parts.

### Rufus Pollock:
That’s a very good point.

### Audrey Tang:
In any case, what I’m saying is that we are, as part of the Digital Nation Plan, developing this automated assessment tool, so we can get some useful numbers out of it. A breakdown of all the licenses, count of lines, and so on.

### Audrey Tang:
The other easy part is to get the local talents and everybody trained to specific technologies...we count them as common things in the stacks, like Tensorflow, OpenStack, maybe Docker or something. Then we say, &quot;OK, so for these critical parts of the infrastructure, since all the procurements...&quot;

### Audrey Tang:
You see the lines of code that use Docker, for example. Then we say, &quot;OK, it’s important to have the local Docker community that is able to maintain this kind of thing.&quot; Then we grade people with three, maybe four levels, like being able to install and use it, maybe able to customize it, and to be able to contribute to it, for example.

### Audrey Tang:
Then we want this many people empowered over four years. That’s part of the Digital Nation Plan. It’s in it already.

### Audrey Tang:
The hard part is to tie this training budget with the cloud usage numbers. Currently in the Digital Nation Plan, these are completely different funds. This is for the enrichment of the community, and this is for reducing the licensing costs. We’re doing both, but not as the same project.

### Rufus Pollock:
Maybe, first, if you’re going to write it on your piece of paper, because then it’ll go into your notes, I said there were three things I would suggest.

### Rufus Pollock:
One was stacks, just how much is spent on open.

### Audrey Tang:
Got it.

### Rufus Pollock:
Number two is an open fund of five percent of the IP budget. That means that money is spent on an automated, algorithmic basis, based on just what open information we use. It could be content. By the way, it doesn’t have to be software, but just of X percent.

### Rufus Pollock:
The third item is percentage, basically a procurement rule where you assess the percentage of open info in a bid, and there’s a points weighting for that. By the way, the points weighting must be very heavily on 100 percent. People make this mistake that somehow 50 percent open is as good as 100 percent open.

### Rufus Pollock:
Unfortunately, it’s like imagine in all those movies...has anyone seen those James Bond movies, where at the very end he just has to remove one thing from the bomb to stop it detonating? Similarly, if you have an entirely open system, but one crucial part of it is closed, then all the value resides there. You need to give a big value for 100 percent, and then the moment you’re under 100 percent...

### Audrey Tang:
You want a curve like a flipped power-law graph.

### Rufus Pollock:
Yeah, exactly. You want to score a curve like that.

### Rufus Pollock:
Otherwise, people just game the system with, &quot;Oh, I got a little bit.&quot; It’s true that it’s better to have 50 percent than zero percent, but most will go, &quot;Well, we’re using Python on Azure,&quot; or something like that. Yes, but...

### Rufus Pollock:
I’m at time with you guys. I’ve got to get to another meeting in a moment, but I’ve really, really appreciated this, and really appreciated going through it with all of you guys.

### Rufus Pollock:
Please be in touch. I know, Audrey, I’ve got your email. You’ve got my book on GitLab. Please keep in touch. If there’s anything else on anyone’s mind before I go today?

### Audrey Tang:
Everybody can Tweet at @rufuspollock.

### Rufus Pollock:
We can Tweet everybody.

### Audrey Tang:
He likes and he re‑Tweets. Now I know this.

### Rufus Pollock:
I check it every now and then...

### Rufus Pollock:
It’s really good to see everyone.

### Audrey Tang:
Yup.

### Rufus Pollock:
Thank you. One last thing, could I get a picture. I’d like to put a picture up.

> (laughter)

### Rufus Pollock:
I don’t normally do this, but...

### Shuyang Lin:
I’ll pull it together with the record file.

### Rufus Pollock:
Can you take a picture as well?

### Shuyang Lin:
Yeah.

### Rufus Pollock:
Can you take one? That’s probably even better, and you can send it to me under a CC BY license.

### Audrey Tang:
We do CC0 here.

### Rufus Pollock:
CC Zero is...

### Audrey Tang:
...is compatible with everything.

### Shuyang Lin:
Three, two, one. There you are.

### Rufus Pollock:
Is that good? Are you happy?

### Shuyang Lin:
One, two, three, cheese.

### Rufus Pollock:
One, two, three, cheese.

### Shuyang Lin:
Yay.

### Rufus Pollock:
Yeah.

### Shuyang Lin:
OK.

### Rufus Pollock:
Thank you very much.

### Shuyang Lin:
Thank you very much.

### Rufus Pollock:
Real pleasure. 謝謝.

