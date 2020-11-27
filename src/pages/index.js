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
  ListElementMain,
  CardContentList,
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
            <Title>Engineering Progression at Assetz 🎖️</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              This is where we keep the engineering progression frameworks we
              use at Assetz.
            </DescriptionText>
            <DescriptionText>
              The aim of these frameworks are to:
            </DescriptionText>
            <CardContentList>
              <ListElementMain>
                Help people understand how to progress in their work
              </ListElementMain>
              <ListElementMain>
                Help us evaluate and pay people fairly and consistently
              </ListElementMain>
              <ListElementMain>
                Help people understand the skills and behaviours we value
              </ListElementMain>
            </CardContentList>
            <DescriptionText>
              We&apos;ll be adding more frameworks as we build them, and
              updating existing ones as we grow, so expect things to change
              around here!
            </DescriptionText>
            <DescriptionText>
              A big thanks to{' '}
              <a href="https://github.com/Monzo/progression-framework">
                <FontAwesomeIcon size="1x" icon={faGithub} />{' '}
                @Monzo/progression-framework
              </a>{' '}
              for sharing the great work they have done and inspiring this site
              👏
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
