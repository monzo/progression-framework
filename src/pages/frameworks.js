// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  CenteredContainer,
  CustomEmoji,
  InlineSecondHeader,
} from '../components/styles'
import partyParrot from '../images/emoji/parrot.gif'
import '../css/main.min.css'
import '../css/monzo-framework-prog.min.css'

type Props = {
  data: Object,
}

export default class Frameworks extends React.Component<Props> {
  render() {
    return (
      <div className="full-page">
        <Layout data={this.props.data}>
          <CenteredContainer className="strip--gradient full-page">
            <div className="container">
              <h1>Welcome 👋</h1>
              <InlineSecondHeader>
                You&rsquo;ve found yourself on the Progression at Monzo site{' '}
                <CustomEmoji src={partyParrot} />
              </InlineSecondHeader>
              <br />
              <p className="u-font-size-h3">
                Here you can see all of the current progression frameworks we
                use internally at Monzo, and we&rsquo;ll be adding more as they
                are built! By its very nature this site will always be a work in
                progress as roles at Monzo evolve.
              </p>
              <p className="u-font-size-h3">
                <a href="">
                  Read more about how we use our progression frameworks in this
                  blog post.
                </a>
              </p>
            </div>
          </CenteredContainer>
        </Layout>
      </div>
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
