---
path: "/engineering/devOps"
title: "♾️ DevOps Engineering Framework"
sidebarTitle: "♾️ DevOps"
sidebarGroup: "engineering"
yaml: true
levels: 4
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
          - "Provides helpful and actionable feedback in code reviews in an empathetic manner"
          - "Writes PR descriptions that provide context and provide rationale for significant decisions"
      - level: 3
        criteria:
          - "Proactively gives feedback 'upwards' and to people they interact with who are not in their team"
          - "Transparent in making design and technical decisions"
          - "Helps people in non-technical roles understand technical constraints / trade-offs"
          - "Shares technical context and direction for less experienced engineers"
          - "Gives direct and constructive feedback to other engineers"
      - level: 4
        criteria:
          - "Helps other people develop themselves and regularly gives insightful, useful feedback to those around them"
          - "Talks to non-technical stakeholders on appropriate level of abstraction"
          - "Transparent about feedback they have received and what they are going to do differently"
  - name: "impact"
    title:
    content:
      - level: 1
        criteria:
          - "Delivers assigned tasks working with a more senior team member and able to take PR feedback to improve their work"
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
          - "Empathises with stakeholders"
          - "Contributes to writing proposals (Co-authors with more experienced Engineer)"
          - "Breaks down large problems into smaller iterative steps across multiple PRs"
          - "Solves ambiguous problems"
          - "Leads writing small/medium scope technical designs"
          - "Thrown at fires and resolves / contributes heavily to resolving them"
          - "Makes pragmatic choices about taking on tech debt"
          - "Considers multiple different solutions for solving a problem"
          - "Breaks down projects into smaller iterative steps that each deliver value"
      - level: 4
        criteria:
          - "Solves larger ambiguous problems"
          - "Leads incident resolutions"
          - "Makes judgements about when to diverge from the immediate goal to achieve something else"
          - "Leading large scale technical infrastructure projects"
          - "Leads writing large scope proposals"
          - "Breaks down large long-lasting projects into sensible discrete chunks that compound to achieve a large goal"
          - "Helps prioritise and balance short-term and long-term investments, focusing on high impact, high value work"
          - "Accountable for delivery of large, mission critical engineering projects"
          - "Originates or finishes large, horizontal engineering efforts"
  - name: "mastery"
    title: "🛠️ Mastery"
    content:
      - level: 1
        criteria:
          - "Aware of the purpose of each of our AWS services"
          - "Learns to create and configure simple CI/CD jobs in TeamCity, following guidance and training materials"
          - "Fixes simple issues with TeamCity builds"
          - "Understands the purpose of each of our environments (dev, staging, mirror, prod) and can explain how changes get promoted between them"
          - "Learns simple network security concepts"
          - "Understands the benefits of docker and learns the basic commands and workflow of general docker use"
        exampleCriteria:
          - criteria: "Understands network infrastructure elements and how they connect together"
            examples:
              - "DMZ"
              - "DNS"
              - "Firewalls"
              - "Load balancers"
              - "Proxy servers"
              - "Routers and switches"
              - "Storage"
      - level: 2
        criteria:
          - "Can explain what each of the AWS services that we use does and understands how we have them configured"
          - "Creates and configures simple jobs in TeamCity following accepted best practices"
          - "Makes minor modifications to AWS services"
          - "Assists more experienced engineers on the design and implementation of larger infrastructure changes"
          - "Understands and can explain the TeamCity pipeline for each of our products"
          - "Strong docker knowledge and understands how Assetz uses docker"
          - "Understands the Assetz network infrastructure setup"
          - "Applies network security knowledge to Assetz infrastructure with the help of others to make improvements"
      - level: 3
        criteria:
          - "Follows appropriate dev-ops best practices"
          - "Champions some technologies/components, and produces technical documentation to facilitate the learning of colleagues"
          - "Identifies obvious deficiencies in the processes and supports activities to improve them"
          - "Proactively considers security implications of their work"
          - "Understands the AWS services to a deeper level including ones that we do not use"
          - "Debugs complex issues at speed"
          - "Identifies and fixes security vulnerabilities"
          - "Identifies and fixes performance issues with TeamCity builds and AWS services"
          - "Implements solutions that are maintainable and scale reliably without intervention"
          - "Explains all aspects of our use of the AWS platform to new engineers"
          - "Explains all aspects of our CI/CD implementation to new engineers"
          - "Understands the Assetz network infrastructure setup in detail and can explain it to others"
          - "Applies network security knowledge to ensure Assetz infrastructure and services stay secure"
        exampleCriteria:
          - criteria: "Helps to maintain any docker images that Assetz uses"
            examples:
              - "Bump node version"
              - "Manage package versions"
              - "Manage ECS contents and maintain container lists"
      - level: 4
        criteria:
          - "Implements solutions that serve as definitive examples for new engineers"
          - "Contributes to external technologies or libraries that we depend on"
          - "Uncovers and fixes tricky issues that have previously evaded detection"
          - "Implements performance improvements that impact multiple services"
          - "Serves as a technical authority on a TeamCity usage or a / multiple AWS services"
          - "Creates major contributions to our documentation, and creates documents that provide guidelines and best practices to other engineers"
          - "Facilitates technical decision making in complex and ambiguous situations"
          - "Promotes architectural thinking and good engineering practices at scale"
          - "Identifies and explores opportunities for service and business improvement"
          - "Follows industry best practices to help ensure Assetz infrastructure is kept up to date with industry advancements and changing technologies where appropriate"
          - "Looks beyond the immediate security concerns and owns our future infrastructure roadmap"
          - "Suggests and implements improvements to the way that docker is used and is a point of knowledge for other engineers regarding docker"
  - name: "leadership"
    title: "👩‍💼 Leadership"
    content:
      - level: 3
        criteria:
          - "Onboards / mentors new engineers"
          - "Contributes to maintaining the Assetz engineering culture in their team, helping new joiners"
          - "Gets buy-in on technical decision-making and proposed designs"
          - "Proactively involves other relevant engineers"
          - "Sought out for code reviews"
          - "Instills Assetz engineering principles in other engineers"
          - "Helps the growth of engineers around them through coaching and mentoring"
          - "Helps their squad work together more effectively"
          - "Helps facilitate team/squad rituals"
          - "Makes improvements to modules/libraries/services and goes out of their way to help others learn from it"
      - level: 4
        criteria:
          - "Instills Assetz engineering principles across a whole squad of engineers"
          - "Works with relevant Engineering Managers to help other engineers perform and grow"
          - "Fosters effective collaboration in multi-disciplinary squads (backend, web)"
          - "Delegates technical decisions with low risk and high reversibility"
          - "Owns technical decisions with high risk and low reversibility"
          - "Contributes to maintaining the Assetz culture in the wider company"
          - "Encourages and supports other engineers to achieve outstanding results"
          - "Bootstraps new teams"
  - name: "influence"
    title: "✨ Influence"
    content:
      - level: 1
        criteria:
          - "Improves documentation that is incorrect"
      - level: 2
        criteria:
          - "Proactively raises issues they spot in retrospectives"
          - "Provides valuable input to proposals from their team"
          - "A good boy scout - proactively improves modules, services, systems and codebases they encounter"
          - "Contributes to the engineering hiring process (e.g. reviews technical exercises, does on-site pair programming tasks)"
          - "Builds simple tools or iterates existing tools for the benefit of all engineers"
          - "Encourages others to follow clean code principles"
      - level: 3
        criteria:
          - "Positively influences engineers in the wider org"
          - "Maintains documentation on things they know the most, makes it easy for future engineers to interact with systems/code"
          - "Clears blockers for junior team members, provides context/guidance, or knows how to escalate"
          - "Asks why. Does not take truths for granted unless they understand exactly where they are coming from (especially with regards to regulation, compliance, etc)"
          - "Drives changes to engineering practices with well-reasoned arguments and a 'strong opinion, weakly held' mentality"
          - "Shapes the direction of systems designs with less experienced engineers"
          - "Breaks down delivery and knowledge silos in their team"
      - level: 4
        criteria:
          - "Represents Assetz Engineering at conferences/events"
          - "Given as reason for other engineers to join Assetz"
          - "Proactively shares knowledge internally"
          - "Acts as the 'sole proprietor', in the CEO mindset, their ego/agenda is not a factor in their thinking or decision making"
---

Become a master of the automated build, test, release and deployment process of all of our products and services. ♾️

### Technologies

- AWS
- Docker
- TeamCity

#### AWS Services we use

| Service    | Description |
|------------|-------------|
| CloudWatch | AWS CloudWatch is a monitoring and observability service that provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health. |
| EC2 (Elastic Compute Cloud) | AWS EC2 is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. |
| ECS (Elastic Container Service) | AWS ECS is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS.  |
| ElastiCache | AWS ElastiCache offers fully managed Redis and Memcached. Seamlessly deploy, run, and scale popular open source compatible in-memory data stores. |
| Fargate | AWS Fargate is a compute engine for Amazon ECS that allows you to run containers without having to manage servers or clusters. With AWS Fargate, you no longer have to provision, configure, and scale clusters of virtual machines to run containers. |
| RDS (Relational Database Service) | AWS RDS makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. |
| S3 (Simple Storage Service) | AWS S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. |
| VPC (Virtual Private Cloud) | AWS VPC lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways. |
| WAF (Web Application Firewall) | AWS WAF helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources. AWS WAF gives you control over which traffic to allow or block to your web applications by defining customizable web security rules. |

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
