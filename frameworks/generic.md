---
path: '/generic'
title: '📄 Generic Framework'
sidebarTitle: '📄 Generic'
sidebarGroup:
yaml: true
levels: 1
homepage: false
categories:
  - name: specialist
    title: 'Specialist'
    color: '#afcbff'
  - name: behavioural
    title: 'Behavioural'
    color: '#f3ffe3'
  - name: 'management'
    title: 'Management'
    color: '#ffcbc1'
topics:
  - name: analytical
    title: '🔍 Analytical Excellence'
    category: specialist
    content:
      - level: 1
        criteria:
          - Help Turn business requirements into technical designs.
          - Reduces ambiguity by working with stakeholders to clearly identify the needs & constraints.
          - Ensures that adequate requirements / standards are defined to ensure the eventual solution is of high quality.
          - Able to decompose complex problems into, smaller, manageable units.
          - Moves from 'problem definition' through to 'solution selection & implementation' in an efficient and structured manner.
          - Proficient in using tools and techniques that lead to faster analysis.
          - Understands what to measure and how to use those metrics to drive performance and reveal issues.
          - Applies the scientific method to formulate and answer questions with data (see also Making Decisions).
  - name: architecture
    title: '📐 Architecture & Design'
    category: specialist
    content:
      - level: 1
        criteria:
          - Designs to a specification and doesn't over engineer (able to Differentiate between High Grade and High Quality).
          - Demonstrate creativity in proposing solution options, able to consider novel ideas, whilst also evaluating pre-existing proven methods.
          - Continually researches the wider technology landscape to be abreast of emerging ideas and technologies.
          - Understands which solutions, model types or framworks are appropriate for which kinds of problems and can guide product teams into making the best choices given their business aims (See also Influencing & Making Decisions).
          - The ability to deploy small pieces of your system so that less regression testing is required and the risks of regression are substantially reduced.
          - Reduce the complexity of a problem by breaking them down into chunks that can then be owned by others, and once pieced back together form a coherent system.
          - Architects solutions that harness the power of Cloud technology, always remembering to balance build vs buy
          - Re-uses existing Qubit tech when appropriate, integrating mindfully and responsibly, especially when that tech is owned by another team
  - name: dev-eng-practices
    title: '📖 Development & Engineering Practices'
    category: specialist
    content:
      - level: 1
        criteria:
          - Promote the use of modern software engineering practices including TDD, BDD / ATDD, CI, Pair Programming, test automation, etc. where useful to improve software quality, team flexibiity & resilience
          - Knows and can articulate the benefits and trade-offs.  Must understand the underlying principles and not just the practice (e.g. reduces the feedback cycle time, increases visibility etc.)
          - Assist in refining and sizing work.
          - Be involved in developing code as required.
          - Designs solution options that address business requirements.
          - Embodies 'good enough is best', ensuring our solutions meet our goals without over-engineering and without incurring unacknowleged technical debt
          - Reasons pragmatically with technical debt, ensuring it is paid back at the right time and not tackled for the sake of it
          - Advocates the benefits of 'Just Enough' documentation, leading by example to maximise shared knowledge in the future.
            - Understand what the need for documentation is and understand the consumers' needs.
  - name: quality
    title: '📈 Quality and Support'
    category: specialist
    content:
      - level: 1
        criteria:
          - Ensures that there are adequate and unambiguous requirements in place (e.g. SLAs, SLOs, Code Quality, etc.)
          - Manage incidents and incident response.
          - Applies infrastructure best-practices (e.g. autoscaling, monitoring, alerting) to production services to ensure we meet our SLAs.
          - Debugs and fixes complex issues at speed, prioritising mitigation and customer impact
        exampleCriteria:
          - criteria: Ensure all delivered software meets its functional and non-functional requirements and provides customer satisfaction.
            examples:
              - Simple, secure, flexible, extensible and comprehensible.
              - Performant (latency vs throughput, memory vs cpu, model predictive performance & concept drift).
              - Robust (fault tolerant, resilient, available).
              - Cost analysis.
              - High System Observability (without excessive alerting).
          - criteria: 'Willing and able to take responsibility for conducting sound RCA on production issues'
            examples:
              - Prevent the reoccurrence of past problems.
              - Analyze past issues to learn from them.
  - name: domain-expertise
    title: '🧠 Domain Expertise'
    category: specialist
    content:
      - level: 1
        exampleCriteria:
          - criteria: 'Possess extensive knowledge of the following, and be able to assist in establishing standards across the project teams:'
            examples:
              - Software Engineering concepts and practices such as core OOD, S.O.L.I.D principles, DRY, REST, Functional.
              - Complex data storage & modelling concepts.
              - Client / Server (n-tier) systems architectures.
              - Cloud based architectures.
              - Static analysis and profiling tools.
              - Computer Science fundamentals such as Big O notation, graph theory, search algorithms etc.
          - criteria: 'Extensive expertise of successfully solving real-world problems by applying their domain knowledge into practice'
            examples:
              - Selects the appropriate language and technology to solve the problem in hand
              - Imparts their experience and expertise onto others effectively
          - criteria: "Serve as a technical expert across the team's products and associated technical domains, and maintains a working knowledgeable of the rest of Qubit's services/systems:"
            examples:
              - Takes responsibility for raising awareness of high risk code assets such as live services that are not owned / have limited no. of people with knowledge of how they work.
          - criteria: 'A DevOps mindset, with a reasonable knowledge of the entire Qubit stack:'
            examples:
              - Applies a branching & release strategy when deploying code to protect system uptime, and guards against deployment outages.
              - Able to design systems and environments such that the deployable package is agnostic of the environment on which it is running.
              - Has a good knowledge of Kubernetes and our deployment tooling (including secret management), allowing them to take a system from conception to production without dependency on the infrastructure team.
              - Able to configure and effectively use various Google Cloud products for use in production, including databases, caches and BigQuery, and ensures that service accounts are  securely provisioned with appropriate permissions.
              - Writes production-ready database code; safely creates migrations, writes efficient SQL and debugs query performance
  - name: leadership
    title: '🗣️ Leadership & Influencing'
    category: behavioural
    content:
      - level: 1
        criteria:
          - Define, promote and gain agreement for coding conventions, test approaches, deployment strategies and development guidelines, etc; set an example for the team by following agreed standards.
          - Researches and learns how to effectively apply new technologies to help inform the above
          - Promotes & responsible for maintaining a high level of scientific rigour across the organisation.
          - Pushes forward key technology or architectural change within the organization, generating momentum and enthusiasm along the way;
          - Promotes our engineering culture and is able to clearly set sensible expectations of what is and is not achievable.
          - Is curious about both technical and non-technical aspects of our developments.  Question why and how things work.
          - Scope of Influence is the entire Organisation
  - name: direction-impact
    title: '💥 Direction & Impact'
    category: behavioural
    content:
      - level: 1
        criteria:
          - Sets an example of working at a sustainable pace.
          - In a self managing team, be able to support and use unobtrusive supervision to allow team members to successfully take on challenges and grow.
          - Identifies and leads the refactoring + simplification of complex parts of our systems.
          - Is a consistent role model, behaving in a manner and demonstrating the behavoiurs that we aspire everyone to emulate.
          - Identifies and promotes opportunities for new products or transforms existing products via data or technology innovation.
  - name: communication
    title: '💬 Communication'
    category: behavioural
    content:
      - level: 1
        criteria:
          - Experience of coaching, mentoring and leading a development team.
          - Strong inter-personal, team-working and communication skills.
          - Able to put oneself into the positions of others and to view situations from the other party's point of view, e.g. PMs, CSMs, Customers etc.
          - Uses API design as a communication mechanism to ensure alignment between different technical stakeholders
          - Considers business priorities when evaluating solutions, ensuring non-technical risks are surfaced and costs are estimated
          - Distinguishes between technology decisions and business decisions; when the latter is required, presents the facts upwards in a way that allows leadership to make swift, well-informed decisions and take on responsibility for those decisions
  - name: decision-making
    title: '🔢 Making Decisions'
    category: behavioural
    content:
      - level: 1
        criteria:
          - Use evidence to inform logical and systematic decision making.
          - Forms and tests hypothesis with an awareness of cognitive biases.
          - Able to use decision making tools to facilitate rational decision making (such as Pugh Analysis) by producing a structured comparison of options against a defined criteria
          - Includes risks in options analysis such as financial risks (ours and customers), business risks such as technology fitness for current workforce and skills availability in the wider industry.
          - Remains neutral and overcomes any attachment to ones own ideas.
  - name: relationships
    title: '🧑‍🤝‍🧑 Relationship Management'
    category: behavioural
    content:
      - level: 1
        criteria:
          - Proactively fosters collaboration between teams and across all levels of the business, as well as in their own team.
          - Communicates effectively with stakeholders to identify needs and evaluate alternative technical solutions and strategies to increase business satisfaction and strengthen stakeholder relationships.
          - 'Practices the principles of Radical Candor; care personally, feedback directly'
          - Uses empathy to build trust and make themselves approachable
          - Is patient, level-headed and constructive in difficult situations, and encourages others to follow suit
  - name: planning-self
    title: '🗓️ Strategy & Planning (Self)'
    category: management
    content:
      - level: 1
        criteria:
          - Effectively manages competing priorities effectively
          - 'Takes part in continuous education; A great engineer stays on top of developments in the industry. Changes in technology happen rapidly and the most successful engineers keep abreast of new research and ideas.'
          - Is self aware and cognizant of ones own limits.
  - name: planning-others
    title: '🗓️ Strategy & Planning (Others)'
    category: management
    content:
      - level: 1
        criteria:
          - Able to co-ordinate others and communcate decisions & direction when required in tactical or critical situations.
          - Ensures continued alignment to objectives when in group situations.
          - Recognises and utilises the strengths of others (using a range of techniques from influencing peers through to managing teams)
  - name: delivery-excellence
    title: '📬 Delivery Excellence'
    category: management
    content:
      - level: 1
        criteria:
          - Take responsibility for the quality and suitability of the team's deliverable.
          - Puts users first
          - Ensure technical dependencies, risks and issues are identified and raised within the team, and that management and mitigation options are provided to minimise impact.
          - Be involved in the Release Planning process, ensuring all quality gates are adhered to, and that all product documentation required for a release is produced to the correct quality standards.
          - Familiar with agile development principles, how scrum and similar frameworks can help manage the delivery of complex projects.
          - Able to be an effective scrum master for a sprint and be able to teach the merits of iterative and adaptive development to others.
  - name: people-management
    title: '🕴️ People & Resource Management'
    category: management
    content:
      - level: 1
        criteria:
          - Line manage other engineers including performance management, development and career plans to use ones experience and expertise in assisting less experienced engineers to grow.
          - Able to support and facilitate the recruitment of technical team members.
          - Ensure members of the team have opportunities to attend training courses and enhance their skills.
          - Perform skills assessments on members of the team.
  - name: financial-management
    title: '💰 Financial Management'
    category: management
    content:
      - level: 1
        criteria:
          - 'Is cost concious:'
          - Can explain the cost impact of decisions
          - Protects the business from unexpected and unacknowledged expenditure
          - Understands the infrastructure running cost of their team
---
