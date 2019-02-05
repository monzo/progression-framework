// @flow
import * as React from 'react'
import * as R from 'ramda'
import Masonry from 'react-masonry-css'
import { contains, match } from '../../utils/arrayUtils'
import toTitleCase from '../../utils/toTitleCase'
import LevelsGroup from '../levelsGroup'
import {
  Card,
  CardContentList,
  CardSubtitle,
  CardTitle,
  CardTitleGroup,
  CenteredElement,
  FrameworkCard,
  PrimaryView,
  Subtitle,
  Title,
  FrameworkTitleGroup,
  FrameworkHeader,
} from '../styles'

type Props = {
  pageData: Object,
  genericData: Object,
}

type State = {
  level: ?number,
  isGeneric: boolean,
  inheritsGeneric: boolean,
}

const masonryBreakpoints = {
  default: 3,
  [700]: 2,
  [500]: 1,
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

  handleClick = (val: number) => (event: SyntheticUIEvent<>) => {
    event.preventDefault()
    this.setState({
      level: val,
    })
  }

  renderDescriptionAndTitle() {
    const { pageData } = this.props
    const { level } = this.state

    return (
      <React.Fragment>
        <FrameworkHeader>
          <FrameworkTitleGroup>
            <Subtitle small>
              {pageData.sidebarGroup != null
                ? toTitleCase(pageData.sidebarGroup)
                : null}
            </Subtitle>
            <Title small>{pageData.title}</Title>
          </FrameworkTitleGroup>
          <LevelsGroup
            onClickHandler={this.handleClick}
            levels={pageData.levels}
            activeLevel={level}
          />
        </FrameworkHeader>
      </React.Fragment>
    )
  }

  renderEmptyState() {
    return (
      <CenteredElement>
        <Card>
          <Subtitle>To view a framework, please select a level above.</Subtitle>
        </Card>
      </CenteredElement>
    )
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
    const description =
      genericTopic != null && !R.isEmpty(genericTopic)
        ? genericTopic.map(obj => obj.description)[0]
        : topic.description
    const frameworkCriteria = topic.content
      .filter(objContent => objContent.level === level)
      .map(objContent =>
        objContent.criteria.map((val, i) => (
          <li key={i + '-' + Math.random()}>{val}</li>
        )),
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
      (frameworkCriteria != null && !R.isEmpty(frameworkCriteria))
    ) {
      return (
        <FrameworkCard key={topic.name}>
          <CardTitleGroup>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{description}</CardSubtitle>
          </CardTitleGroup>
          <CardContentList>
            {frameworkCriteria != null && !R.isEmpty(frameworkCriteria)
              ? frameworkCriteria
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
        {this.renderDescriptionAndTitle()}
        {level != null ? this.renderFramework() : this.renderEmptyState()}
      </PrimaryView>
    )
  }
}
