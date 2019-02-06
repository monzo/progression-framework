// @flow
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import LevelledRenderer from '../components/renderers/levelledRenderer'
import TextRenderer from '../components/renderers/textRenderer'
import '../css/main.min.css'

type Props = {
  data: Object,
}

class View extends React.Component<Props> {
  render() {
    const { pageData, genericData, allMarkdownRemark } = this.props.data
    const { frontmatter: pageFrontmatter, html } = pageData
    const { frontmatter: genericFrontmatter } = genericData

    return (
      <Layout
        data={{
          allMarkdownRemark: allMarkdownRemark,
        }}
      >
        {pageFrontmatter.yaml === true ? (
          <LevelledRenderer
            pageData={pageFrontmatter}
            genericData={genericFrontmatter}
          />
        ) : (
          <TextRenderer data={pageFrontmatter} html={html} />
        )}
      </Layout>
    )
  }
}

export default function FrameworkView({ data }: Object) {
  return <View data={data} />
}

export const pageQuery = graphql`
  query($path: String!, $isYaml: Boolean!) {
    allMarkdownRemark: allMarkdownRemark {
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
    pageData: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        sidebarTitle
        sidebarGroup
        yaml
        levels
        topics @include(if: $isYaml) {
          name
          title
          description
          content {
            level
            criteria
            exampleCriteria {
              criteria
              examples
            }
          }
        }
      }
    }
    genericData: markdownRemark(frontmatter: { path: { eq: "/generic" } }) {
      html
      frontmatter {
        path
        title
        sidebarTitle
        sidebarGroup
        yaml
        levels
        topics @include(if: $isYaml) {
          name
          title
          description
          content {
            level
            criteria
          }
        }
      }
    }
  }
`
