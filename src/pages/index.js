// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
  ListElement,
} from '../components/styles'
import '../css/main.css'

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
            <Title>Progression at Qubit 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              This is where we keep the progression framework that we use in
              Qubit Engineering.
            </DescriptionText>
            <DescriptionText>
              Progression frameworks are tools that help us evaluate and pay our
              staff consistently and fairly, and help everyone understand how to
              progress. We&apos;ve put ours here for everyone at Qubit to use.
            </DescriptionText>
            <DescriptionText>
              This is very much a work in progress. We are opening it up early
              so we can create a framework that is By Qubytes, For Qubytes,
              rather than just pulling something off the shelf.
            </DescriptionText>
            <DescriptionText>
              This site, along with the framework contents, is open source. That
              means you can contribute to the development it by submitting and
              reviewing changes to both the code and content!
            </DescriptionText>
            <DescriptionText>
              To get involved, go to{' '}
              <a href="https://github.com/qubitdigital/progression-framework">
                <FontAwesomeIcon icon={faGithub} />{' '}
                qubitdigital/progression-framework.
              </a>{' '}
              We recommend watching the repo for changes so you can give
              feedback directly as we evolve the framework! 🚀
            </DescriptionText>
          </Description>
          <DescriptionTitleGroup>
            <Subtitle>Done</Subtitle>
          </DescriptionTitleGroup>
          <Description>
            <ul>
              <ListElement>
                ✅ First cut of the criteria for a lead/principal engineer who
                has maxed out the framework
              </ListElement>
              <ListElement>
                ✅ First attempt at role-specific domain expertise for the above
                lead/principal
              </ListElement>
              <ListElement>
                ✅ Set up a microsite to visualise the framework nicely
              </ListElement>
            </ul>
          </Description>
          <DescriptionTitleGroup>
            <Subtitle>Todo</Subtitle>
          </DescriptionTitleGroup>
          <Description>
            <ul>
              <ListElement>
                ⬜ Pare down + refine our lead/principal framework (make all
                points more concise, get rid of repetition)
              </ListElement>
              <ListElement>
                ⬜ Make it possible to visualise a single topic through each
                level
              </ListElement>
              <ListElement>
                ⬜ Decide how many levels we need/want at Qubit
              </ListElement>
              <ListElement>
                ⬜ Decide whether we want numeric levels, job titles, or both
              </ListElement>
              <ListElement>
                ⬜ Build out criteria for each of the remaining levels, bottom
                up
              </ListElement>
              <ListElement>
                ⬜ Develop a process for people to evaluate their current
                performance against the framework
              </ListElement>
              <ListElement>
                ⬜ Develop a process for setting goals against the framework
              </ListElement>
              <ListElement>
                ⬜ Develop a process for progressing through levels, including
                how pay rises might work
              </ListElement>
              <ListElement>
                ⬜ Implement framework for the discipline of Infrastructure
                Engineering
              </ListElement>
              <ListElement>
                ⬜ Implement framework for the discipline of Client Engineering
              </ListElement>
              <ListElement>
                ⬜ Implement framework for the discipline of Support Engineering
              </ListElement>
              <ListElement>⬜ Introduce salary banding</ListElement>
            </ul>
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
            # sidebarGroup
          }
        }
      }
    }
  }
`
