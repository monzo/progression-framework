// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import LowFundsAnimation from '../components/animations/lowFunds'
import '../css/main.min.css'
import { ErrorPageHeader, ErrorPageLink } from '../components/styles'

type Props = {
  data: Object,
}

export default class Frameworks extends React.Component<Props> {
  render() {
    return (
      <div className="full-page u-bg-color-navy">
        <Layout data={this.props.data}>
          <div className="strip strip--navy strip--middle cover cover-md--640">
            <div className="container">
              <div className="grid-row grid-row--middle grid-row--center">
                <div className="grid-col-12 grid-col-6-md">
                  <ErrorPageHeader className="u-font-maison-mono u-font-light u-color-gray-blue">
                    404
                  </ErrorPageHeader>
                  <h2>
                    Sorry, we can&rsquo;t find the page you&rsquo;re
                    looking&nbsp;for
                  </h2>
                  <ErrorPageLink
                    href="/"
                    className="o-button-text u-margin-top-large-md"
                  >
                    Visit the home page&nbsp;&rsaquo;
                  </ErrorPageLink>
                </div>
                <div className="grid-col-12 grid-col-4-md">
                  <LowFundsAnimation />
                </div>
              </div>
            </div>
          </div>
          <div className="strip strip--navy">
            <div className="container">
              <div className="grid-row grid-row--center">
                <div className="grid-col-12 grid-col-6-md u-align-center-md">
                  <h3 className="u-font-masion">Did you know&hellip;</h3>
                  <p>
                    In 2008, there were 4,916 claims (totalling &pound;113,000)
                    for bank notes which had been eaten by pets.
                  </p>
                  <p className="u-font-size-h1">🐶 🐱</p>
                </div>
              </div>
            </div>
          </div>
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
