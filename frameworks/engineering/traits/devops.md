---
path: "/traits/devOps"
title: "♾️ DevOps Engineering Framework"
sidebarTitle: "♾️ DevOps"
sidebarGroup: "Engineering Traits"
yaml: true
levels: 4
homepage: true
topics:
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
          - "Creates and updates graphs in Grafana when the data is already accessible by Grafana when guided on what to show"
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
          - "Adds and updates alerts in Grafana"
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
          - "Adds new tables and views as sources for new graphs in Grafana"
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
          - "Leads or contributes significantly to what and how services are monitored and alerted"
---

Become a master of the automated build, test, release, deployment and monitoring process of all of our products and services. ♾️

### Technologies

- AWS (services listed below)
- Docker
- Grafana
- Influx
- TeamCity

#### AWS Services we use

| Service    | Description |
|------------|-------------|
| CDK (Cloud Development Kit) | The AWS Cloud Development Kit (AWS CDK) is an open source software development framework to define your cloud application resources using familiar programming languages. |
| CFN (CloudFormation) | AWS CloudFormation gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code. |
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

We sort them into four levels, and we try to give specific examples of behaviours we expect for each. Each of those levels has a fairly wide salary range associated with it, and within each level you can progress in sub-levels, labelled A–D. So even if you’re at level 3 for a couple of years, you’ll still be able to see that you’re moving forward. Basically, the more behaviours you show from your level, the more you’ll progress.

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
