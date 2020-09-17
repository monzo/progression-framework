// @flow
import * as React from 'react'
import Masonry from 'react-masonry-css'
import { match } from '../../utils/arrayUtils'
import Header from '../header'
import {
  Card,
  CenteredElement,
  PrimaryView,
  Subtitle,
  BREAKPOINT_TABLET,
  BREAKPOINT_DESKTOP,
  MarkdownContent,
  TopicRow,
  CardTitle,
  CardCategory,
  TopicRowHeader,
  TopicRows,
  Homepage,
} from '../styles'
import { default as TopicCard } from './topicCard'
import { getTitle, getCategory } from './helpers'

type Props = {
  pageData: Object,
  genericData: Object,
  html: Object,
}

type State = {
  level: ?number,
  isGeneric: boolean,
}

const masonryBreakpoints = {
  default: 3,
  [BREAKPOINT_DESKTOP]: 2,
  [BREAKPOINT_TABLET]: 1,
}

export default class LevelledRenderer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const { genericData, pageData, html } = props
    const genericDataTitles = genericData.topics.map(obj => obj.title)
    const pageDataTitles = pageData.topics.map(obj => obj.title)
    const genericDataNames = genericData.topics.map(obj => obj.name)
    const pageDataNames = pageData.topics.map(obj => obj.name)

    // isGeneric checks to see if the variable names and the "Title" is present on both the generic
    // and page date we receive. This should only flag the generic framework, unless someone redeclares the
    // framework titles and variable names in a new framework (which should not get past review)
    const matchingNames = match(genericDataNames, pageDataNames)
    const matchingTitles = match(genericDataTitles, pageDataTitles)
    const isGeneric = matchingNames && matchingTitles

    this.state = {
      level: pageData.homepage === true && html !== '' ? null : 5,
      isGeneric,
    }
  }

  handleClick = (val: ?number) => (event: SyntheticUIEvent<>) => {
    event.preventDefault()
    this.setState({
      level: val,
    })
  }

  renderPageHeader() {
    const { pageData } = this.props
    const { level } = this.state

    return (
      <Header
        onClickHandler={this.handleClick}
        pageData={pageData}
        activeLevel={level}
      />
    )
  }

  renderEmptyState() {
    const { pageData, html } = this.props

    if (pageData.homepage === true && html !== '') {
      return (
        <Homepage>
          <Card>
            <MarkdownContent dangerouslySetInnerHTML={{ __html: html }} />
          </Card>
        </Homepage>
      )
    } else {
      return (
        <CenteredElement>
          <Card>
            <Subtitle>
              To view a framework, please select a level above.
            </Subtitle>
          </Card>
        </CenteredElement>
      )
    }
  }

  renderFramework() {
    const { pageData, genericData } = this.props
    const { level, isGeneric } = this.state

    if (level === Infinity) {
      return (
        <TopicRows>
          <div>
            {pageData.topics.map(topic => {
              const category = getCategory({ genericData, topic })
              const title = getTitle({ genericData, topic })

              return (
                <TopicRow key={topic.name}>
                  <TopicRowHeader>
                    <CardCategory bgColor={category.color}>
                      {category.title}
                    </CardCategory>
                    <CardTitle>{title}</CardTitle>
                  </TopicRowHeader>
                  {Array.from(Array(pageData.levels)).map((_, i) => (
                    <TopicCard
                      key={i}
                      topic={topic}
                      genericData={genericData}
                      level={i + 1}
                      isGeneric={isGeneric}
                      minimal
                    />
                  ))}
                </TopicRow>
              )
            })}
          </div>
        </TopicRows>
      )
    }

    return (
      <Masonry
        breakpointCols={masonryBreakpoints}
        columnClassName="framework-columns"
        className="framework-view"
      >
        {pageData.topics.map(topic => (
          <TopicCard
            key={topic.name}
            topic={topic}
            genericData={genericData}
            level={level}
            isGeneric={isGeneric}
          />
        ))}
      </Masonry>
    )
  }

  render() {
    const { level } = this.state

    return (
      <PrimaryView noPadding>
        {this.renderPageHeader()}
        {level != null ? this.renderFramework() : this.renderEmptyState()}
      </PrimaryView>
    )
  }
}
