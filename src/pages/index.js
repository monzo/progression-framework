// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>Welcome To</Subtitle>
            <Title>Progression at Bright 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>This is where we keep the progression frameworks we use at Bright.</DescriptionText>
            <DescriptionText>
              It’s a guide that sets out the things we expect from engineers, at different levels across the company.
              They’re divided into five categories:</DescriptionText>
              <Subtitle>Mastery:</Subtitle>
              <DescriptionText>Your knowledge of the tools and technologies we use, the area you work in, and your technical ability.</DescriptionText>
              <Subtitle>Impact:</Subtitle>
              <DescriptionText>The size, scope and value of what you deliver.</DescriptionText>
              <Subtitle>Influence:</Subtitle>
              <DescriptionText>How you change the world around you for the better.</DescriptionText>
              <Subtitle>Communication and Feedback</Subtitle><DescriptionText>How you interact with others.</DescriptionText>
              <Subtitle>Leadership:</Subtitle>
              <DescriptionText>How you help those around you become better and more impactful. To make sure people can understand what each means in their work, the framework’s filled with real-world examples of times we’ve seen them used by our teams day-to-day.
              In time, we’ll make sure we illustrate every item on the framework with a few meaningful, practical examples.
              </DescriptionText>
            <Subtitle>What’s it for?</Subtitle>
            <DescriptionText>
            The framework gives engineers and managers a shared vocabulary, that will help us have more useful, 
            structured conversations about progression and personal development.
            We hope our engineers will use it as a tool to measure their own development, and 
            understand how they can move forward and build on their skills.
            </DescriptionText>
            <Subtitle>What isn’t it for?</Subtitle>
            <DescriptionText>
            Think of the framework as a compass, not a GPS. 
            There are lots of ways to show your technical ability or make an impact with your work.
            <br></br>
            If we tried to describe every single step in an entire career’s worth of progression, we’d end up with an impossibly long and detailed document, that wouldn’t be useful to anyone!
            <br/><br/>
            No framework can ever be exhaustive, and cover all the edge cases you’ll see when a group of people come together to create an amazing product.
            <br/><br/>
            It’s also not a checklist. You don’t need to tick off every single item to move forward, and it isn’t the only way for people to understand and measure their progression. 
            Crucially, it will be supported by regular feedback and frank conversations with managers.
            </DescriptionText>

            <DescriptionText>
              Take a look around and let us know what you think! 🚀
            </DescriptionText>

            <DescriptionText>
              This framework was completely inspired by the folks at Monzo.
              You can find out more about their progression framework and what it means
              to them in this {' '}
              <a href="https://monzo.com/blog/2019/01/07/progression">
                blog post.
              </a>
            </DescriptionText>
          </Description>
        </DescriptionView>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            sidebarTitle
            sidebarGroup
          }
        }
      }
    }
  }
`
