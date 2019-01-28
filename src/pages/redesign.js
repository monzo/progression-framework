// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import RedesignedLayout from '../components/redesignedLayout'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Redesign extends React.Component<Props> {
  render() {
    return (
      <div className="full-page">
        <RedesignedLayout data={this.props.data}>
          <p>Welcome To</p>
          <h2>Progression at Monzo</h2>
        </RedesignedLayout>
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
