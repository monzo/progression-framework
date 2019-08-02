---
path: "/engineering/data"
title: "📊 Data Engineering Framework"
sidebarTitle: "📊 Data"
sidebarGroup: "engineering"
yaml: true
levels: 6
homepage: true
topics:
  - name: "communication"
    title:
    content:
      - level: 1
        criteria:
          - "Provides regular status updates to their mentor/buddy"
          - "Points out syntactical improvements in code reviews"
          - "Writes PR descriptions that provide basic context for the change"
          - "Seeks guidance from other engineers, rather than answers"
      - level: 2
        criteria:
          - "Proactively communicates to their team what they are working on, why, how it's going and what help they need"
          - "Accepts feedback graciously"
          - "Gives feedback to peers when asked"
        exampleCriteria:
          - criteria: "Provides helpful and actionable feedback in code reviews in an empathetic manner"
            examples:
              - "Take a look at the levelling up your code reviews talk for some ideas"
          - criteria: "Writes PR descriptions that provide context and provide rationale for significant decisions"
            examples:
              - "I decided to X instead of Y here, I also considered Z but for these reasons I went with X"
      - level: 3
        criteria:
          - "Transparent about mistakes they've made, early"
          - "Proactively gives timely actionable feedback to peers"
          - "Proactively seeks feedback from the people around them"
          - "Considers the opinions of others before defending their own"
      - level: 4
        criteria:
          - "Proactively gives feedback 'upwards' and to people they interact with who are not in their team"
          - "Transparent in making design and technical decisions"
          - "Helps people in non-technical roles understand technical constraints / trade-offs"
          - "Shares technical context and direction for less experienced engineers"
          - "Gives direct and constructive feedback to other engineers"
      - level: 5
        criteria:
          - "Helps other people develop themselves and regularly gives insightful, useful feedback to those around them"
          - "Talks to non-technical stakeholders on appropriate level of abstraction"
      - level: 6
        criteria:
          - "Transparent about feedback they have received and what they are going to do differently"
  - name: "impact"
    title:
    content:
      - level: 1
        criteria:
          - "Delivers assigned tasks, working with a more senior team member, and able to take PR feedback to improve their work"
      - level: 2
        criteria:
          - "Delivers assigned tasks that meet expected criteria"
          - "Works for the team, focuses on tasks that contribute to team goals"
          - "Tries to unblock themselves first before seeking help"
          - "Manages their own time effectively, prioritises their workload well, on time for meetings, aware when blocking others and unblocks"
          - "Helps the team, does what needs doing"
          - "Breaks down small/medium problems into iterative steps"
      - level: 3
        criteria:
          - "Delivers large well-defined tasks and solves small scope not-well-defined problems"
          - "Contributes to writing proposals (Co-authors with more experienced Engineer)"
          - "Breaks down large problems into smaller iterative steps across multiple PRs"
      - level: 4
        criteria:
          - "Solves ambiguous problems"
          - "Leads writing small/medium scope proposals"
          - "Thrown at fires and resolves / contributes heavily to resolving them"
          - "Makes pragmatic choices about taking on tech debt"
          - "Considers multiple different solutions for solving a problem"
          - "Breaks down projects into smaller iterative steps that each deliver value"
      - level: 5
        criteria:
          - "Solves the 'hard problem' in a project e.g. Mastercard crypto and sees it through to resolution"
          - "Solves larger ambiguous problems"
          - "Leads incident resolutions"
          - "Makes judgements about when to diverge from the immediate goal to achieve something else"
          - "Leading large scale technical infrastructure projects (level 5 would originate or complete, probably)"
          - "Leads writing large scope proposals"
          - "Breaks down large long-lasting projects into sensible discrete chunks that compound to achieve a large goal"
          - "Helps prioritise and balance short-term and long-term investments, focusing on high impact, high value work"
      - level: 6
        criteria:
          - "Accountable for delivery of large, mission critical engineering projects"
          - "Originates or finishes large, horizontal engineering efforts"
  - name: "leadership"
    title: "👩‍💼 Leadership"
    content:
      - level: 3
        criteria:
          - "Onboards / mentors new engineers"
        exampleCriteria:
          - criteria: "Finds learning opportunities for others when reviewing their code and follows it up"
            examples:
              - "I think this code could be improved by doing X, let's pair on it and I'll talk through why X is good for this"
      - level: 4
        criteria:
          - "Contributes to maintaining the Monzo culture in their team, helping new joiners"
          - "Gets buy-in on technical decision-making and proposed designs"
          - "Proactively involves other relevant engineers"
          - "Sought out for code reviews"
          - "Instills Monzo engineering principles in other engineers"
          - "Helps the growth of engineers around them through coaching and mentoring"
          - "Helps their squad work together more effectively"
          - "Helps facilitate team/squad rituals"
        exampleCriteria:
          - criteria: "Makes improvements to modules/libraries/services and goes out of their way to help others learn from it"
            examples:
              - "I've used RxJava for the first time here, I'm going to do a talk about why I've done this, here's some great blog posts on it"
      - level: 5
        criteria:
          - "Instills Monzo engineering principles across a whole squad of engineers"
          - "Works with relevant Engineering Managers to help other engineers perform and grow"
          - "Fosters effective collaboration in multi-disciplinary squads (backend, mobile, data, design, web)"
          - "Delegates technical decisions with low risk and high reversibility"
          - "Owns technical decisions with high risk and low reversibility"
          - "Contributes to maintaining the Monzo culture in the wider company"
          - "Bootstraps new teams"
      - level: 6
        criteria:
          - "Helps groups of squads work together more effectively"
          - "Starts things that they cannot finish by themselves"
          - "Delegates to make better use of their time"
  - name: "influence"
    title: "✨ Influence"
    content:
      - level: 1
        criteria:
          - "Improves documentation that is incorrect"
      - level: 2
        criteria:
          - "Proactively raises issues they spot in retrospectives"
      - level: 3
        criteria:
          - "Actively comments on and engages with proposals"
          - "Proactively improves modules, services, systems and codebases they encounter, 'this doesn't make sense, I'm going to do something about it'"
      - level: 4
        criteria:
          - "Contributes to data team blog"
          - "Maintains documentation on things they know the most, makes it easy for future engineers to interact with systems/code"
          - "Clears blockers for junior team members, provides context/guidance, or knows how to escalate"
        exampleCriteria:
          - criteria: "Contributes to data hiring"
            examples:
              - "leads calls, does onsite interviews"
      - level: 5
        criteria:
          - "Represents Monzo at conferences/events"
          - "Given as reason for other engineers to join Monzo"
          - "Proactively shares knowledge internally"
          - "Acts as the 'sole proprietor', in the CEO mindset, their ego/agenda is not a factor in their thinking or decision making"
      - level: 6
        criteria:
          - "Attracts other very senior hires" 
          - "Engineers around them get better and have a bigger impact, faster" 
  - name: "mastery"
    title: "🛠️ Mastery"
    content:
      - level: 1
        criteria:
          - "Comfortable with using git and contributing to our code base"
          - "Can extend existing data models and design simple new ones"
          - "Creates new Looker views and dashboards; extracts basic insights quickly from existing Looker explores"
          - "Strong SQL skills"
          - "Implements basic prediction models quickly"
          - "Basic Python or R skills"
          - "Delivers assigned tasks that meet expected criteria"
          - "Tries to unblock themselves first before seeking help"
          - "Works for the team, focuses on tasks that contribute to team goals"
        exampleCriteria:
          - criteria: "Demonstrates a good understanding of the business team they are partnering with"
            examples:
              - "Knows how the team is organised, who is who, what are the goals, current priorities, biggest challenges etc."
          - criteria: "Translates business questions into analysable hypothesis and answers those"
            examples:
              - "Question from business 'Why do salaried users cost us twice as much on customer support?' → cost are allocated by number of intercom queries → salaried users must be generating more queries → Is of queries proportional to engagement? → Are all salaried users are over-proportionally struggling with particular problems (e.g. missing bank statements) → etc."
          - criteria: "Picks the right visualisation types for the data at hand"
            examples:
              - "distributions, time series, scatter plots etc"
          - criteria: "Basic stats and math knowledge"
            examples:
              - "Able to find a formula to calculate confidence intervals for different measurement scenarios, knows how to interpret those etc."
      - level: 2
        criteria:
          - "Reasons well about about underlying principles of data modeling"
        exampleCriteria:
          - criteria: "Attention to details"
            examples:
              - "whenever they deliver a piece of work or send a weekly KPIs report they don’t just blindly copy & paste; they sanity check whether things make sense and try to spot mistakes"
          - criteria: "Manages their own time effectively, prioritises their workload well, on time for meetings, aware when blocking others and unblocks"
            examples:
              - "able to focus on assigned tasks despite distractions from people, emails, slacks etc. Able to create a 'focus environment' for themselves"
              - "exhibits self-awareness around personal productivity (able to spot and debug personal productivity issues or to seek help/advice)"
          - criteria: "Brings things to completion"
            examples:
              - "analysts/data scientists often exhibit a behaviour where they run many analyses in parallel for a prolonged time without closing tasks off. Closing a task off could mean writing down key takeaway and sharing the findings with the relevant audience."
              - "brings a model into a production experiment instead of continuing to tweak offline results"
      - level: 3
        criteria:
          - "Consistently applies data modeling best practices and suggests ways to improve current practices in non trivial cases"
          - "Able determine what really matters for a particular analysis and understands what a 80/20 solution would look like and can prioritise accordingly"
        exampleCriteria:
          - criteria: "Able to pick the best tool and method to effectively help the business to answer a question/make a decision"
            examples:
              - "Looker, SQL, python or spreadsheets + a basic chart, blackbox ML model or a structured scenario model etc) → Understands the problem at hand and proposes alternative suitable solutions rather trying to fit the problem to the favourite tool."
          - criteria: "Concise, clear and effective communication"
            examples:
              - "tailored to audience, clear and concise message (i.e no unnecessary details)"
              - "can be through emails, slack or presentations"
      - level: 4
        criteria:
          - "Actively drives improvements of how the team works"
          - "Values teams success over individual success and company’s success over teams success"
          - "Onboards / mentors new team members"
          - "Gets buy-in on technical decision-making and proposed designs"
          - "Sought out for code reviews"
        exampleCriteria:
          - criteria: "Distinguishes clearly between urgent and important tasks and is able to focus on getting the important tasks done."
            examples:
              - "effectively manages expectations of other people"
              - "communicates priorities to their team and other relevant stakeholders"
          - criteria: "Holds themselves and others accountable"
            examples:
              - "Accountability is about delivering on a commitment. It’s responsibility to an outcome, not just a set of tasks."
          - criteria: "Communicates complex ideas effectively"
            examples:
              - "has the ability to chose the appropriate level of abstraction and make complexity easy to understand tips (see https://www.fastcompany.com/3045853/how-to-talk-about-complex-topics-without-dumbing-them-down)"
      - level: 5
        criteria:
          - "Solves larger ambiguous/not well defined problems"
          - "Contributes to maintaining Monzo’s culture in the wider company"
          - "Proactively thinks about how we can get better at our purpose: quicker and better decisions based on data" 
        exampleCriteria:
          - criteria: "Builds out a strong internal network"
            examples:
              - "i.e. well connected through-out the company, also to teams with no direct common projects at the moment"
          - criteria: "Has good organisational awareness"
            examples:
              - "understands the process of how things are getting done in the company e.g. how and when goals are set, how decisions are being made, how priorities are defined etc."
          - criteria: "Sees common patterns in similar tasks and thinks about the solution from the platform/systems perspective."
            examples:
              - "solutions that not only solve your own problem but also similar problems of other people in the company)"
      - level: 6
        criteria:
          - "Delivers projects that require cross functional collaboration"
          - "Delegates to make better use of their time"
  - name: "mastery-science"
    title: "🧪 Mastery - Data Science"
    content:
      - level: 2
        criteria:
          - "Familiar with ML batch serving techniques"
        exampleCriteria:
          - criteria: "Basic knowledge of standard ML approaches"
            examples:
              - "linear regression, neural nets, clustering, random forests etc."
      - level: 3
        criteria:
          - "Able to pick the right ML method for the problem at hand; demonstrates good intuition of how those approaches work and what strength/weaknesses they have"
          - "Distinguishes well between impactful ML problems vs just 'predicting something'"
      - level: 4
        criteria:
          - "Thrown at fires and resolves / contributes heavily to resolving them"
          - "Replicates cutting edge approaches from research papers where required"
          - "Thinks about the future situations code will be used in, planning and acting accordingly"
          - "Makes pragmatic choices about taking on tech debt"
        exampleCriteria:
          - criteria: "Debugs complex Deep Neural Net code/issues"
            examples:
              - "knows what to look at when the loss is not decreasing etc."
          - criteria: "Validates ideas aggressively & iteratively"
            examples:
              - "tackles the biggest unknowns first; validates ideas with 10% effort"
          - criteria: "Measures, understands and is transparent about the impact of their ML work."
            examples:
              - "we should serve as role models for the rest of the company in this regard in particular"
      - level: 5
        criteria:
          - "Technical authority within their immediate peer group (team/platform), the natural escalation point"
        exampleCriteria:
          - criteria: "Familiar with ML streaming, stateful and stateless serving techniques"
            examples:
              - "can spec out and plan an implementation. Familiar with technological components that might be required"
      - level: 6
        criteria:
          - "Serves as a technical authority in the wider data science community"
          - "Deep domain knowledge, can go lower than almost anyone else"
          - "Makes targeted improvements in stability, performance and scalability across our platform"
          - "Measurable impact on company level goals"
  - name: "mastery-analytics"
    title: "📈 Mastery - Data Analytics"
    content:
      - level: 3
        exampleCriteria:
          - criteria: "Asks why. Does not take truths for granted unless they understand exactly where they are coming from"
            examples:
              - "especially with regards to regulation, compliance, etc."
      - level: 4
        exampleCriteria:
          - criteria: "Valued and trusted business partner for the teams they support"
            examples:
              - "Can be mostly proxied by the type of questions their business partners are asking. 'Can you help me to solve this (hard) problem?' vs 'Can you please pull this number?'"
          - criteria: "Proactively identifies relevant/impactful areas for analyses which would deepen the understanding of the business or enable decisions"
            examples:
              - "during the planning process you contribute proactively to help your team to define the right priorities with relevant insights"
      - level: 5
        exampleCriteria:
          - criteria: "Deep domain knowledge in specific areas, can go lower than almost anyone else"
            examples:
              - "deep credit risk knowledge, user behaviour analytics etc"
      - level: 6
        criteria:
          - "Comfortably supports and interacts with C-level executives"
---
### About our engineering progression frameworks
The engineering progression framework is a tool that helps engineers and managers:
- make development and career plans
- talk about what we’re looking for from engineers in a consistent way
- set a fair level of compensation.

The framework is a compass, not a GPS.

It's meant to be helpful. It's not meant to be a rating system for humans, free from edge cases.

### How does it work?
The framework covers all the things we’re looking for from engineers at Monzo. We’re interested in these five elements:
- Mastery - Your Monzo knowledge and technical capability
- Impact - The size, scope and value of what you deliver
- Influence - How you change the world around you for the better
- Comms & Feedback - How you interact with others
- Leadership - How people around you become better and more impactful

We sort them into six levels, and we try to give specific examples of behaviours we expect for each. Each of those levels has a fairly wide salary range associated with it, and within each level you can progress in sub-levels, labelled A–E. So even if you’re at level 3 for a couple of years, you’ll still be able to see that you’re moving forward. Basically, the more behaviours you show from your level, the more you’ll progress.

Your manager will work with you on this. None of it will happen mysteriously behind closed doors. You’ll agree what level of progression you’re going for and what you need to improve on with your manager. It should be clear how you’re doing relative to that at all times.

### Things to keep in mind
- There are many different ways to progress and be valuable to Monzo as you grow, including deep technical knowledge and ability, technical leadership and people management. All are equally valuable paths in Monzo's engineering team.
- The framework represents a career’s worth of progression, people shouldn’t expect to fly up it in 18 months!
- Engineering progression isn’t an exact science and there will always be some ambiguity.
- This isn’t a checklist – it’s possible to progress up a level without showing all the behaviours in that level.
- There will be levels on top (eg ‘Inventor of Android’ or ‘Author of Go’), but we won’t add them until we need them.
- You can find some more information in these links. If that doesn't answer most of your questions, please ask your manager.

### Give us your feedback!
This is only the first version of our framework and we really want your feedback.

We're particularly keen to add as many examples to the behaviours as possible, to further clarify them.