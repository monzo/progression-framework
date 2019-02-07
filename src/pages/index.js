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
  DescriptionTitleGroup,
  DescriptionContainer,
} from '../components/styles'
import '../css/main.min.css'

type Props = {
  data: Object,
}

type State = {
  titleGroupHeight: string,
  descriptionHeight: string,
}

export default class Index extends React.Component<Props, State> {
  titleGroup: ?Object
  description: ?Object
  state = {
    titleGroupHeight: '0',
    descriptionHeight: '0',
  }

  componentDidMount() {
    if (this.titleGroup != null && this.description != null) {
      const titleGroupHeight = this.titleGroup.clientHeight
      const descriptionHeight = this.description.clientHeight
      this.setState({ titleGroupHeight, descriptionHeight })
    }
  }

  render() {
    return (
      <Layout data={this.props.data}>
        <DescriptionView>
          <DescriptionTitleGroup
            ref={titleGroup => {
              this.titleGroup = titleGroup
            }}
          >
            <Subtitle>Welcome To</Subtitle>
            <Title>Progression at Monzo 🎉</Title>
          </DescriptionTitleGroup>
          <Description
            ref={description => {
              this.description = description
            }}
          >
            <DescriptionText>
              This is where we keep the progression frameworks we use at Monzo.
            </DescriptionText>
            <DescriptionText>
              Progression frameworks are tools that help us evaluate and pay our
              staff consistently, and help people understand how to progress in
              their work.
            </DescriptionText>
            <DescriptionText>
              We&apos;ve put them here for everyone at Monzo (and anyone in the
              world!) to use.
            </DescriptionText>
            <DescriptionText>
              We&apos;ll be adding more frameworks as we build them, and
              updating existing ones as we grow, so expect things to change
              around here!
            </DescriptionText>
            <DescriptionText>
              This site, along with all our progression frameworks, are open
              source. That means you can contribute to the development of this
              site or our progression frameworks, and use both as inspiration
              for your own projects!
            </DescriptionText>
            <DescriptionText>
              To get involved, go to{' '}
              <a href="https://github.com/monzo/progression-framework">
                <FontAwesomeIcon icon={faGithub} />{' '}
                @monzo/progression-framework.
              </a>
            </DescriptionText>
            <DescriptionText>
              You can find out more about progression at Monzo and what it means
              for us in this{' '}
              <a href="https://monzo.com/blog/2019/01/07/progression">
                blog post.
              </a>
            </DescriptionText>
            <DescriptionText>
              Take a look around and let us know what you think! 🚀
            </DescriptionText>
          </Description>
          <DescriptionContainer>
            <DescriptionIllustration
              src={illustration}
              titleGroupHeight={this.state.titleGroupHeight}
              descriptionHeight={this.state.descriptionHeight}
            />
          </DescriptionContainer>
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
