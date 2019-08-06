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
            <Subtitle>Boas-vindas a</Subtitle>
            <Title>Progressão no GetNinjas 🎉</Title>
          </DescriptionTitleGroup>
          <Description>
            <DescriptionText>
              Aqui é onde mantemos nossos frameworks de progressão que usamos no GetNinjas.
            </DescriptionText>
            <DescriptionText>
              Frameworks de Progressão são ferramentas que nos ajudam a avaliar e pagar nossos(as)
              funcionários(as) consistentemente, e ajudar pessoas a entender como progredir em seu trabalho.
            </DescriptionText>
            <DescriptionText>
              Nós adicionarmos mais frameworks assim que formos construindo-os, e atualizando os existentes
              assim que eles forem cresecendo, então as coisas podem ir mudando por aqui (não deixaremos
              de envolver todas as pessoas nessas decisões de mudanças =D).
            </DescriptionText>
            <DescriptionText>
              Esse site, assim como todos os frameworks de progressão, são open source. Isso significa
              que você pode contribuir com o desenvolvimento desse site ou nossos frameworks de progressão,
              e usar ambos como inspiração para seus próprios projetos! Nós estamos seguindo um template utilizado pela Monzo (agradecemos a vocês pelo trabalho incrível desse template/projeto).
            </DescriptionText>
            <DescriptionText>
              Pra ficar a par, vá para{' '}
              <a href="https://github.com/getninjas/progression-framework">
                <FontAwesomeIcon icon={faGithub} />{' '}
                @getninjas/progression-framework.
              </a>
            </DescriptionText>
            <DescriptionText>
              Você pode encontrar mais informações sobre progressão na Monzo e o que isso significa
              You can find out more about progression at Monzo and what it means
              pra eles nesse{' '}
              <a href="https://monzo.com/blog/2019/01/07/progression">
                blog post.
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
