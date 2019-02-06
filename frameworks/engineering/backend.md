---
path: "/engineering/backend"
title: "🛠️ Backend Engineering Framework"
sidebarTitle: "🛠️ Backend"
sidebarGroup: "engineering"
yaml: false
levels:
---
Check out the original backend engineering framework [here](https://eng-progression.monzo.com/framework/backend/).

## Level 1
### Mastery
- Learns to write correct Go code, following guidance and training materials

- Fixes simple bugs

### Impact
- Delivers assigned tasks, working with a more senior team member, and able to take PR feedback to improve their work

### Influence
- Improves documentation that is incorrect

### Communication & Feedback 
- Provides regular status updates to their mentor/buddy

- Points out syntactical improvements in code reviews

- Writes PR descriptions that provide basic context for the change

- Seeks guidance from other engineers, rather than answers

---

## Level 2
### Mastery
- Writes correct Go code following accepted best practices

- Uses appropriate algorithms and data structures to solve problems

- Writes automated unit and acceptance tests

- Implements simple RPC handlers

    > **Examples**
    >
    > Basic CRUD handlers, Internal/external API proxies, etc.

- Designs simple database tables

- Implements asynchronous messaging between services

- Deploys services to staging and production

- Handles simple error cases in RPC handlers and message consumers

- Fixes bugs involving a number of services and can investigate production issues

### Impact
- Delivers assigned tasks that meet expected criteria

- Works for the team, focuses on tasks that contribute to team goals

- Tries to unblock themselves first before seeking help

- Manages their own time effectively, prioritises their workload well, on time for meetings, aware when blocking others and unblocks

- Helps the team, does what needs doing

- Breaks down small/medium problems into iterative steps

### Influence
- Proactively raises issues they spot in retrospectives

### Communication & Feedback 
- Proactively communicates to their team what they are working on, why, how it's going and what help they need

- Accepts feedback graciously

- Gives feedback to peers when asked

- Provides helpful and actionable feedback in code reviews in an empathetic manner

- Writes PR descriptions that provide context and provide rationale for significant decisions

	> *“I decided to X instead of Y here, I also considered Z but for these reasons I went with X”*

---

## Level 3
### Mastery
- Writes idiomatic Go code

	- Follows the guidelines in [Effective Go](https://golang.org/doc/effective_go.html), avoids using patterns that are idiomatic in other languages

- Uses appropriate design patterns

- Implements complex RPC handlers

	- Implements complex business logic, orchestrates multi-stage processes, deals with idempotency or distributed data sources

- Designs new schemas comprising multiple tables

- Implements complex asynchronous messaging flows

- Co-ordinates complex deployments and database migrations

- Implements distributed systems consisting of multiple interacting services

- Produces technical designs that include a consideration of scalability

- Handles complex error cases in RPC handlers and message consumers

- Mitigates race conditions and partial failure states in distributed systems

	- Uses locking where appropriate, writes code that is “self-healing” when dealing with distributed failure (e.g. data needs to be written in two or more services)

- Debugs production issues

- Considers metrics when building a new system

### Impact
- Delivers large well-defined tasks and solves small scope not-well-defined problems

- Contributes to writing proposals (Co-authors with more experienced Engineer)

- Breaks down large problems into smaller iterative steps across multiple PRs

### Influence
- Provides valuable input to proposals from their team

- Proactively improves modules, services, systems and codebases they encounter, 'this doesn't make sense, I'm going to do something about it'

- Contributes to scaling engineering hiring (e.g. leads calls, does onsite interviews)

- Builds simple tools or iterates existing tools for the benefit of all engineers

### Communication & Feedback 
- Transparent about mistakes they've made, early

- Proactively gives timely actionable feedback to peers

- Proactively seeks feedback from the people around them

- Considers the opinions of others before defending their own

### Leadership
- Onboards / mentors new engineers

- Finds learning opportunities for others when reviewing their code and follows it up

  > *“I think this code could be improved by doing X, let’s pair on it and I’ll talk through why X is good for this”*

---

## Level 4
### Mastery
- Writes code that serves as a definitive example for new engineers

- Makes contributions to library code or core services

    > **Examples**
    >
    > Bug fixes, small improvements; things that don’t result in a major change in the public API

- Builds systems that scale reliably without intervention

    > **Examples**
    >
    > Services can withstand a year’s worth of growth in load/user base without needing first aid

- Leads the refactoring (de-cruftification) of complex systems

- Debugs complex production issues at speed

- Identifies and fixes security vulnerabilities

- Identifies and fixes performance bottlenecks in individual services

- Explains all aspects of the platform to new engineers

- Implements services or libraries that require a deep level of domain knowledge

    > **Examples**
    >
    > Mastercard message parsing, credit decisioning, CASS scheduling, Google Pay, etc.

- Includes actionable dashboarding as part of a new system

### Impact
- Solves ambiguous problems

- Leads writing small/medium scope proposals

- Thrown at fires and resolves / contributes heavily to resolving them

- Makes pragmatic choices about taking on tech debt

- Considers multiple different solutions for solving a problem

- Breaks down projects into smaller iterative steps that each deliver value

### Influence
- Positively influences engineers in the wider org

- Maintains documentation on things they know the most, makes it easy for future engineers to interact with systems/code

- Clears blockers for junior team members, provides context/guidance, or knows how to escalate

- Asks why. Does not take truths for granted unless they understand exactly where they are coming from (especially wrt regulation, compliance, etc)

- Drives changes to engineering practices with well-reasoned arguments and a "strong opinion, weakly held" mentality

- Shapes the direction of systems designs with less experienced engineers

- Breaks down delivery and knowledge silos in their squad

### Communication & Feedback 
- Proactively gives feedback "upwards" and to people they interact with who are not in their team

- Transparent in making design and technical decisions

- Helps people in non-technical roles understand technical constraints / trade-offs

- Shares technical context and direction for less experienced engineers

- Gives direct and constructive feedback to other engineers

### Leadership
- Contributes to maintaining the Monzo culture in their team, helping new joiners

- Gets buy-in on technical decision-making and proposed designs

- Proactively involves other relevant engineers

- Sought out for code reviews

- Instils Monzo engineering principles in other engineers

- Helps the growth of engineers around them through coaching and mentoring

- Helps their squad work together more effectively

- Helps facilitate team/squad rituals

- Makes improvements to modules/libraries/services and goes out of their way to help others learn from it

	> *“I’ve used RxJava for the first time here, I’m going to do a talk about why I’ve done this, here’s some great blog posts on it”*

---

## Level 5 
### Mastery
- Builds systems that serve as a definitive examples for new engineers

- Makes major contributions to library code or core services

- Contributes to external technologies or libraries that we depend on

- Produces clear technical designs for large complex projects

    > **Examples**
    >
    > Outbound and Inbound MasterCard clearing proposals

- Develops clear technical solutions from ambiguous requirements

- Uncovers and fixes tricky bugs that have previously evaded detection

- Implements security improvements that impact multiple services

- Implements performance improvements that impact multiple services

- Demonstrates a deep level of knowledge in a specific area

- Serves as a technical authority on a technology or an area of the codebase

- Creates dashboards that broadly impact all engineers

### Impact
- Solves the 'hard problem' in a project e.g. Mastercard crypto and sees it through to resolution

- Solves larger ambiguous problems

- Leads incident resolutions

- Makes judgements about when to diverge from the immediate goal to achieve something else

- Leading large scale technical infrastructure projects (level 5 would originate or complete, probably)

- Leads writing large scope proposals

- Breaks down large long-lasting projects into sensible discrete chunks that compound to achieve a large goal

- Helps prioritise and balance short-term and long-term investments, focusing on high impact, high value work

### Influence
- Represents Monzo at conferences/events

- Given as reason for other engineers to join Monzo

- Proactively shares knowledge internally

- Acts as the 'sole proprietor', in the CEO mindset, their ego/agenda is not a factor in their thinking or decision making

### Communication & Feedback 
- Helps other people develop themselves and regularly gives insightful, useful feedback to those around them.

- Talks to non-technical stakeholders on appropriate level of abstraction

### Leadership
- Instils Monzo engineering principles across a whole squad of engineers

- Works with relevant Engineering Managers to help other engineers perform and grow

- Fosters effective collaboration in multi-disciplinary squads (backend, mobile, data, design, web)

- Delegates technical decisions with low risk and high reversibility

- Owns technical decisions with high risk and low reversibility

- Contributes to maintaining the Monzo culture in the wider company

- Bootstraps new teams

---

## Level 6
### Mastery
- Makes major contributions to technologies and libraries that we depend on

- Makes improvements to the stability, performance or security of the entire platform

- Serves as a technical authority in the wider engineering community

### Impact
- Accountable for delivery of large, mission critical engineering projects

- Originates or finishes large, horizontal engineering efforts

### Influence
- Attracts other very senior hires

- Engineers around them get better and have a bigger impact, faster

### Communication & Feedback 
- Transparent about feedback they have received and what they are going to do differently

### Leadership
- Helps groups of squads work together more effectively

- Starts things that they cannot finish by themselves

- Delegates to make better use of their time