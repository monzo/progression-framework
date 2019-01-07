// @flow
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import YamlRenderer from '../components/renderers/yamlRenderer'
import MarkdownRenderer from '../components/renderers/markdownRenderer'
import { Section } from '../components/styles'
import '../css/monzo-framework-prog.min.css'
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
        <Section className="strip--white full-page">
          <div className="container">
            <div className="grid-row">
              <div className="grid-col-12">
                {pageFrontmatter.yaml === true ? (
                  <YamlRenderer
                    pageData={pageFrontmatter}
                    genericData={genericFrontmatter}
                  />
                ) : (
                  <MarkdownRenderer data={pageFrontmatter} html={html} />
                )}
              </div>
            </div>
          </div>
        </Section>
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
          }
        }
      }
    }
    genericData: markdownRemark(
      frontmatter: { path: { eq: "/frameworks/generic" } }
    ) {
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
