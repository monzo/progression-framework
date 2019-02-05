// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import LowFundsAnimation from '../components/animations/lowFunds'
import {
  ErrorPageLink,
  ErrorPageHeader,
  ErrorPageDescription,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Frameworks extends React.Component<Props> {
  render() {
    return (
      <Layout data={this.props.data}>
        <div className="strip strip--middle cover cover-md--640">
          <div className="container">
            <div className="grid-row grid-row--middle grid-row--center">
              <div className="grid-col-12 grid-col-6-md">
                <ErrorPageHeader>404</ErrorPageHeader>
                <ErrorPageDescription className="u-color-grey">
                  Sorry, we can&rsquo;t find the page you&rsquo;re
                  looking&nbsp;for
                </ErrorPageDescription>
                <ErrorPageLink
                  to="/"
                  className="o-button-text u-margin-top-large-md"
                >
                  Go back home&nbsp;&rsaquo;
                </ErrorPageLink>
              </div>
              <div className="grid-col-12 grid-col-4-md">
                <LowFundsAnimation />
              </div>
            </div>
          </div>
        </div>
        <div className="strip">
          <div className="container">
            <div className="grid-row grid-row--center">
              <div className="grid-col-12 grid-col-6-md u-align-center-md">
                <h3>Did you know&hellip;</h3>
                <p>
                  In 2008, there were 4,916 claims (totalling &pound;113,000)
                  for bank notes which had been eaten by pets.
                </p>
                <h1>🐶 🐱</h1>
              </div>
            </div>
          </div>
        </div>
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
