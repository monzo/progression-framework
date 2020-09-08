// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  Title,
  Subtitle,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionTitleGroup,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class HowTo extends React.Component<Props> {
  render () {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup>
            <Subtitle>You are probably wondering</Subtitle>
            <Title>How it works❓</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              Skills are grouped in three categories: specialist, behavioural
              and management They are then ranked by a job level, where 1 is
              most junior, and 5 is most senior. As you progress up levels, you
              grow from none, to knowing, to practicing, to mastering. Not all
              categories develop equally; we expect to see specialisms develop
              faster and more naturally than management capabilities, so our
              framework is designed to support that.
            </DescriptionText>
            <DescriptionText>Category growth</DescriptionText>
            <DescriptionText>Intra-role levels</DescriptionText>
          </Description>
          <DescriptionTitleGroup>
            <Subtitle>Growth</Subtitle>
          </DescriptionTitleGroup>
          <DescriptionTitleGroup>
            <Subtitle>Intra-role levels</Subtitle>
          </DescriptionTitleGroup>
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
