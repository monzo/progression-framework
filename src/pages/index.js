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
            <Subtitle>Bemvindo a</Subtitle>
            <Title>Carreira na QCX 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              Aqui é onde mantemos os frameworks de progressão da QCX.
            </DescriptionText>
            <DescriptionText>
              Frameworks de progressão são ferramentas que nos ajudam a avaliar
              e a pagar nossos funcionários de forma consistente, e ajuda-los a
              progredir na carreira.
            </DescriptionText>
            <DescriptionText>
              Esse ferramenta de exibição de frameworks é uma criação da {' '}
              <a href="https://github.com/monzo/progression-framework">
                <FontAwesomeIcon icon={faGithub} />{' '}
                @monzo/progression-framework.
              </a>
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
