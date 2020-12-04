---
path: "/specialism/platformEngineer"
title: "🛠️ Platform Engineer Framework"
sidebarTitle: "🛠️ Platform Engineer"
sidebarGroup: "Engineering Specialism"
yaml: true
levels: 6
homepage: true
topics:
  - name: "communication"
    title: "💬 Communication"
    content:
      - level: 1
        criteria:
          - "Points out syntactical improvements in code reviews"
          - "Writes PR descriptions that provide basic context for the change"
      - level: 2
        criteria:
        exampleCriteria:
          - criteria: "Provides helpful and actionable feedback in code reviews in an empathetic manner"
            examples:
              - "Take a look at the levelling up your code reviews talk for some ideas"
          - criteria: "Writes PR descriptions that provide context and provide rationale for significant decisions"
            examples:
              - "I decided to X instead of Y here, I also considered Z but for these reasons I went with X"
      - level: 4
        criteria:
          - "Helps people in non-technical roles understand technical constraints / trade-offs"
          - "Shares technical context and direction for less experienced engineers"
      - level: 5
        criteria:
          - "Talks to non-technical stakeholders on appropriate level of abstraction"
  - name: "impact"
    title: "💥 Impact"
    content:
      - level: 1
        criteria:
          - "Able to take PR feedback to improve their work"
      - level: 3
        criteria:
          - "Contributes to writing technical design proposals (Co-authors with more experienced Engineer)"
          - "Breaks down large changes across multiple smaller PRs where appropriate"
      - level: 4
        criteria:
          - "Leads writing small/medium scope technical designs"
          - "Makes pragmatic choices about taking on tech debt"
      - level: 5
        criteria:
          - "Leading large scale technical infrastructure projects"
  - name: "mastery"
    title: "🛠️ Mastery"
    content:
      - level: 1
        criteria:
          - "Learns to write correct Node.js code, following guidance and training materials"
          - "Learns to write basic SQL queries and understands the structure of the database"
          - "Fixes simple bugs"
        exampleCriteria:
          - criteria: "Uses git to manage the development workflow effectively"
            examples:
              - "Checkout, Push, Pull, Branch, Diff, Merge, Stash, Rebase, etc."
      - level: 2
        criteria:
          - "Designs simple database tables"
          - "Implements asynchronous messaging between services"
          - "Deploys services to staging and production"
          - "Deploys database changes to staging and production"
          - "Fixes bugs involving a number of services and can investigate production issues"
          - "Uses appropriate algorithms and data structures to solve problems"
          - "Writes automated unit and acceptance tests"
          - "Writes correct Node.js code following accepted best practices"
          - "Writes TypeScript types to statically type-check the code at compile-time"
          - "Able to write complex SQL statements following accepted best practices"
          - "Can explain at a high level what each department does at Assetz and what business processes they support"
      - level: 3
        criteria:
          - "Uses appropriate design patterns"
          - "Designs new schemas comprising multiple tables"
          - "Co-ordinates complex deployments and database migrations"
          - "Implements distributed systems consisting of multiple interacting services"
          - "Produces technical designs that include a consideration of scalability"
          - "Debugs production issues"
          - "Considers metrics when building a new system"
          - "Writes highly readable Node.js code"
          - "Writes efficient and performant SQL queries to solve complex problems"
          - "Champions some technologies/components, and produces technical documentation to facilitate the learning of colleagues"
          - "Understands the full lifecycle-of-a-loan process"
        exampleCriteria:
          - criteria: "Mitigates race conditions and partial failure states in distributed systems"
            examples:
              - "Uses locking where appropriate, writes code that is “self-healing” when dealing with distributed failure (e.g. data needs to be written in two or more services)"
          - criteria: "Proactively considers security implications of their work"
            examples:
              - "Appropriately ties down internal access to resources they're working with (e.g. RPC blacklisting, BigQuery permissions)"
              - "Evaluates security risks when contributing to proposals"
              - "Highlights potential security issues when raising and reviewing pull requests - e.g. adding rate limiting in an API, or leaving a code comment to explain why we choose not to"
              - "\"There's a risk here of X, Y but given Z, I think this is OK\""
              - "Loops in Security when their squad is unsure about something by posting in #security-requests"
      - level: 4
        criteria:
          - "Writes Node.js code and SQL that serves as a definitive example for new engineers"
          - "Leads the refactoring of complex systems and deconstructing of monoliths"
          - "Debugs complex production issues at speed"
          - "Identifies and fixes security vulnerabilities"
          - "Identifies and fixes performance bottlenecks in individual services"
          - "Explains all aspects of the platform to new engineers"
          - "Includes actionable dashboarding as part of a new system"
          - "Implements services or libraries that require a deep level of domain knowledge"
        exampleCriteria:
          - criteria: "Makes contributions to library code or core services"
            examples:
              - "Bug fixes, small improvements; things that don’t result in a major change in the public API"
          - criteria: "Builds systems that scale reliably without intervention"
            examples:
              - "Services can withstand a year’s worth of growth in load/user base without needing first aid"
      - level: 5
        criteria:
          - "Builds systems that serve as definitive examples for new engineers"
          - "Makes major contributions to library code or core services"
          - "Contributes to external technologies or libraries that we depend on"
          - "Develops clear technical solutions from ambiguous requirements"
          - "Uncovers and fixes tricky bugs that have previously evaded detection"
          - "Implements security improvements that impact multiple services"
          - "Implements performance improvements that impact multiple services"
          - "Serves as a technical authority on a technology or an area of the codebase"
          - "Reviews technical designs and pull requests for large complex projects"
          - "Creates major contributions to our documentation, and creates documents that provide guidelines and best practices to other engineers"
          - "Works with technical and non-technical stakeholders to identify high-level requirements and turns them into discrete technical concerns"
      - level: 6
        criteria:
          - "Makes major contributions to technologies and libraries that we depend on"
          - "Makes improvements to the stability, performance or security of the entire platform"
          - "Serves as a technical authority in the wider engineering community"
  - name: "leadership"
    title: "👩‍💼 Leadership"
    content:
      - level: 4
        criteria:
          - "Sought out for code reviews"
          - "Instils Assetz engineering principles in other engineers"
          - "Makes improvements to modules/libraries/services and goes out of their way to help others learn from it"
      - level: 5
        criteria:
          - "Instils Assetz engineering principles across a whole squad of engineers"
  - name: "influence"
    title: "✨ Influence"
    content:
      - level: 3
        criteria:
          - "A good boy scout - proactively improves modules, services, systems and codebases they encounter"
          - "Builds simple tools or iterates existing tools for the benefit of all engineers"
          - "Encourages others to follow clean code principles"
      - level: 4
        criteria:
          - "Shapes the direction of systems designs with less experienced engineers"
      - level: 5
        criteria:
          - "Represents Assetz Engineering at conferences/events"
---

Become a master of our internal APIs, the suite of micro-services that is our application layer, and our databases 🛠️

### Technologies

- Node.js
- TypeScript
- PostgreSQL

### The aim of these frameworks are to

- Help people understand how to progress in their work
- Help us evaluate and pay people fairly and consistently
- Help people understand the skills and behaviours we value

The framework is a compass, not a GPS.

It's meant to be helpful. It's not meant to be a rating system for humans, free from edge cases.

### How does it work?

The framework covers all the things we’re looking for from engineers at Assetz. We’re interested in these five elements:

- Mastery - Your Assetz knowledge and technical capability
- Impact - The size, scope and value of what you deliver
- Influence - How you change the world around you for the better
- Comms & Feedback - How you interact with others
- Leadership - How people around you become better and more impactful

We sort them into six levels, and we try to give specific examples of behaviours we expect for each. Each of those levels has a fairly wide salary range associated with it, and within each level you can progress in sub-levels, labelled A–D. So even if you’re at level 3 for a couple of years, you’ll still be able to see that you’re moving forward. Basically, the more behaviours you show from your level, the more you’ll progress.

Your manager will work with you on this. None of it will happen mysteriously behind closed doors. You’ll agree what level of progression you’re going for and what you need to improve on with your manager. It should be clear how you’re doing relative to that at all times.

### Things to keep in mind

- There are many different ways to progress and be valuable to Assetz as you grow, including deep technical knowledge and ability, technical leadership and people management. All are equally valuable paths in Assetz’s engineering team.
- The framework represents a career’s worth of progression, people shouldn’t expect to fly up it in 18 months!
- Engineering progression isn’t an exact science and there will always be some ambiguity.
- This isn’t a checklist – it’s possible to progress up a level without showing all the behaviours in that level.
- You can find some more information in these links. If that doesn't answer most of your questions, please ask your manager.

### Give us your feedback!

This is only the first version of our framework and we really want your feedback.

We're particularly keen to add as many examples to the behaviours as possible, to further clarify them.
