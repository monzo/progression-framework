// @flow
import * as React from 'react'
import * as R from 'ramda'
import Masonry from 'react-masonry-css'
import { contains, match } from '../../utils/arrayUtils'
import Header from '../header'
import {
  Card,
  CardContentList,
  CardTitle,
  CardTitleGroup,
  CenteredElement,
  FrameworkCard,
  PrimaryView,
  Subtitle,
  ExamplesText,
  BREAKPOINT_TABLET,
  BREAKPOINT_DESKTOP,
  MarkdownContent,
} from '../styles'

type Props = {
  pageData: Object,
  genericData: Object,
  html: Object,
}

type State = {
  level: ?number,
  isGeneric: boolean,
  inheritsGeneric: boolean,
}

type CriteriaProps = {
  content: Object,
}

type CriteriaState = {
  isHidden: boolean,
}

const masonryBreakpoints = {
  default: 3,
  [BREAKPOINT_DESKTOP]: 2,
  [BREAKPOINT_TABLET]: 1,
}

class ExampleCriteriaComponent extends React.Component<
  CriteriaProps,
  CriteriaState,
> {
  state = { isHidden: true }

  toggleView = (event: SyntheticUIEvent<>) => {
    event != null ? event.preventDefault() : null
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }

  generateExamples = (content: Object) => {
    let criteria = content.examples.map((val, i) => (
      <li key={i + '-' + Math.random()}>{val}</li>
    ))

    return <ul>{criteria}</ul>
  }

  render() {
    const { content } = this.props
    const { isHidden } = this.state

    return (
      <li>
        <ExamplesText onClick={this.toggleView}>
          {content.criteria}
        </ExamplesText>
        {!isHidden ? this.generateExamples(content) : null}
      </li>
    )
  }
}

export default class LevelledRenderer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const genericDataTitles = props.genericData.topics.map(obj => obj.name)
    const pageDataTitles = props.pageData.topics.map(obj => obj.name)

    this.state = {
      level: null,
      isGeneric: match(genericDataTitles, pageDataTitles),
      inheritsGeneric:
        contains(genericDataTitles, pageDataTitles) &&
        !match(genericDataTitles, pageDataTitles),
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
        <Card>
          <MarkdownContent dangerouslySetInnerHTML={{ __html: html }} />
        </Card>
      )
    } else {
      console.log(pageData.homepage)
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
    const { pageData } = this.props
    let content = pageData.topics.map(topic => this.createTopic(topic))

    return (
      <Masonry
        breakpointCols={masonryBreakpoints}
        columnClassName="framework-columns"
        className="framework-view"
      >
        {content}
      </Masonry>
    )
  }

  createTopic = (topic: Object) => {
    const { genericData } = this.props
    const { level, isGeneric } = this.state
    const genericTopic = genericData.topics.filter(
      obj => obj.name === topic.name,
    )

    const title =
      genericTopic != null && !R.isEmpty(genericTopic)
        ? genericTopic.map(obj => obj.title)[0]
        : topic.title

    const frameworkCriteria = topic.content
      .filter(objContent => objContent.level === level)
      .map(objContent =>
        objContent.criteria != null
          ? objContent.criteria.map((val, i) => (
              <li key={i + '-' + Math.random()}>{val}</li>
            ))
          : null,
      )

    const exampleCriteria = topic.content
      .filter(objContent => objContent.level === level)
      .map(objContent =>
        objContent.exampleCriteria != null
          ? objContent.exampleCriteria.map((val, i) => (
              <ExampleCriteriaComponent
                content={val}
                key={i + '-' + Math.random()}
              />
            ))
          : null,
      )

    const genericCriteria =
      genericTopic != null && !R.isEmpty(genericTopic)
        ? genericTopic.map(obj =>
            obj.content
              .filter(objContent => objContent.level === level)
              .map(objContent =>
                objContent.criteria.map((val, i) => (
                  <li key={i + '-' + Math.random()}>{val}</li>
                )),
              ),
          )
        : null

    if (
      (genericCriteria != null && !R.isEmpty(genericCriteria)) ||
      (exampleCriteria != null && !R.isEmpty(exampleCriteria)) ||
      (frameworkCriteria != null && !R.isEmpty(frameworkCriteria))
    ) {
      return (
        <FrameworkCard key={topic.name}>
          <CardTitleGroup>
            <CardTitle>{title}</CardTitle>
          </CardTitleGroup>
          <CardContentList>
            {frameworkCriteria != null && !R.isEmpty(frameworkCriteria)
              ? frameworkCriteria
              : null}

            {exampleCriteria != null && !R.isEmpty(exampleCriteria)
              ? exampleCriteria
              : null}

            {!isGeneric &&
            !R.isEmpty(genericCriteria) &&
            genericCriteria != null
              ? genericCriteria
              : null}
          </CardContentList>
        </FrameworkCard>
      )
    }
  }

  render() {
    const { level } = this.state

    return (
      <PrimaryView>
        {this.renderPageHeader()}
        {level != null ? this.renderFramework() : this.renderEmptyState()}
      </PrimaryView>
    )
  }
}
