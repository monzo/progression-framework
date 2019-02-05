// @flow
import * as React from 'react'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import illustration from '../images/intro_illustration.svg'
import Layout from '../components/layout'
import {
  Subtitle,
  Title,
  DescriptionView,
  Description,
  DescriptionText,
  DescriptionIllustration,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Layout data={this.props.data}>
          <DescriptionView>
            <Subtitle>Welcome To</Subtitle>
            <Title>Progression at Monzo 🎉</Title>
            <Description>
              <DescriptionText>
                Hey there! 👋
                <br />
                You’ve found yourself on the Progression at Monzo site.
              </DescriptionText>
              <DescriptionText>
                This site has been created to show the Progression Frameworks
                that we use internally at Monzo to the rest of world 🌐
              </DescriptionText>
              <DescriptionText>
                We’ll be adding more frameworks to this site as they are built
                and as roles at Monzo evolve, so expect things to change around
                here!
              </DescriptionText>
              <DescriptionText>
                This site, along with all of our frameworks, are open source.
                This means that anyone can contribute to the development of this
                site or Monzo’s Progression Frameworks, and can use both as
                inspiration for their own projects!
                <br />
                To get involved, go to{' '}
                <a href="https://github.com/monzo/progression-framework">
                  <FontAwesomeIcon icon={faGithub} />{' '}
                  @monzo/progression-framework.
                </a>
              </DescriptionText>
              <DescriptionText>
                We’ve also written a blog post all about Progression at Monzo
                and what it means for us{' '}
                <a href="https://monzo.com/blog/2019/01/07/progression">
                  - and you can check it out here.
                </a>
              </DescriptionText>
              <DescriptionText>
                Take a look around and let us know what you think! 🚀
              </DescriptionText>
            </Description>
            <DescriptionIllustration src={illustration} />
          </DescriptionView>
        </Layout>
      </React.Fragment>
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
