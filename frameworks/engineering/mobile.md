---
path: "/engineering/mobile"
title: "👩‍💻 Mobile Engineering Framework"
sidebarTitle: "👩‍💻 Mobile"
sidebarGroup: "engineering"
yaml: false
levels:
---
Check out the original mobile engineering progression site [here](https://eng-progression.monzo.com/framework/mobile/)

## Level 1
### Mastery
- Writes Swift or Kotlin code according to our style guides

- Proactive in asking questions, explains what they have tried so far and why that hasn’t worked
- Updates layout to existing screens
- Builds simple screens or flows
- Asks questions and actions feedback from PRs and other engineers
- Fixes simple bugs or issues

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
- Uses appropriate algorithms and data structures to solve problems
- Uses appropriate design patterns
- Responsible for building small to medium sized new features inside the app
- Modifies and improves existing parts of the app (and reasons about the improvements)
- Integrates with new APIs
    > **Example 1**
    >
    > Can add an integration with a new backend endpoint and handle return data

    > **Example 2**
    >
    > Can add an integration with a documented third party API
- Adds basic UI tests or snapshots
- Adds basic unit tests
- Proactively learns new things and seeks out people who can help them
- Manages the release master process
- Contributes to Android or iOS chat
- Appropriately uses common functional reactive programming concepts
- Designs database models
- Appropriately handles errors or failure conditions in their code
- Uses concurrency appropriately
    > **Example 1**
    >
    > Can reason whether to use asynchronous or synchronous operations

    > **Example 2**
    >
    > Understands impact on app performance to use either

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
- Uses tools to diagnose and improve performance issues
- Builds non-trivial, coordinated app flows with multiple services and data sources
- Adds migrations to handle changes between old and new app versions
    > **Example 1**
    >
    > Owning migration from major language versions
    
    > **Example 2**
    >
    > Handling complex changes to third party dependencies
    
    > **Example 3**
    >
    >  Writing migrations from one data schema to another
- Builds complex UI layouts in code or via IDE
- Contributes to group standards, impactful in improving our processes

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
- Identifies and fixes security vulnerabilities
- Owns and coordinates large scale architectural changes to the entire codebase
  - *Researches potential solutions and evaluates how they solve the problem. Able to articulate why a change in architecture is needed and the impact this will have on the team and business. Dissects into discrete tasks and works with other team members to resolve issues.*
    > **Example 1**
    >
    > Network request lifecycle and authorisation

    > **Example 2**
    >
    > Model layer and persistence

    > **Example 3**
    >
    > App navigation and coordination, eg deep links

    > **Example 4**
    >
    > Modularisation
- Debugs complex problems across a variety of subject areas
  - *Seeks out technical knowledge to compliment their own, researches and patches third party libraries where needed. Uses reasoning to debug and find the root cause of issues. Articulates problem and proposed solution to both technical and non technical peers.*
- Writes proposals and architects complex app flows
  - *Coordinates with backend developers around API specifications and requirements. Able to digest into discrete tasks and work with peers to solve problem in an efficient manner to avoid blockers.*
- Sought out for reviewing complex changes or commenting on larger scale proposals
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
### Communication & Feedback 
- Proactively gives feedback "upwards" and to people they interact with who are not in their team

- Transparent in making design and technical decisions

- Helps people in non-technical roles understand technical constraints / trade-offs

- Shares technical context and direction for less experienced engineers

- Gives direct and constructive feedback to other engineers
### Leadership
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
- Coordinates group efforts across horizontal
  - A technical authority for iOS/Android on multiple teams, working with team leads and other engineers across the company.

-Anticipates platform/project needs from other teams, technical debt and common problems
  - Proactively seeks out solutions for problems not owned by product teams, works with others to scope and identify solutions. Justifies effort to PMs in order to schedule work.

- Anticipates large or significant platform changes, work with team to define possible solutions. Starts or finishes these projects.

- Takes high level requirements and turns them into discrete technical concerns

- Takes charge of low level deep dives when debugging complex issues. Able to handle situations where domain knowledge does not exist in the company and can lead the effort to resolve them.

    > **Example 1**
    >
    > Resolving issues with our compiler

    > **Example 2**
    >
    > Mapping out code paths for “hard to reproduce” issues
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