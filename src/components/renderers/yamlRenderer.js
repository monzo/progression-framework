// @flow
import * as React from 'react'
import * as R from 'ramda'
import { contains, match } from '../../utils/arrayUtils'
import ButtonBar from '../buttonBar'

type Props = {
  pageData: Object,
  genericData: Object,
}

type State = {
  level: ?number,
  isGeneric: boolean,
  inheritsGeneric: boolean,
}

export default class YamlRenderer extends React.Component<Props, State> {
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
    const { isGeneric, inheritsGeneric } = this.state

    return (
      <React.Fragment>
        <div className="grid-row">
          <div className="grid-col-12 o-box u-bg-color-white">
            <h1>{pageData.title}</h1>
          </div>
        </div>
        {isGeneric ? (
          <div className="grid-row">
            <div className="grid-col-12 o-box u-bg-color-grey">
              <p>
                This is our &quot;generic progression framework&quot;, which
                exists so that levels are comparable across different roles in
                the company.
                <br />
                No roles are directly tied to this framework, and it should be
                applicable for all employees.
              </p>
            </div>
          </div>
        ) : null}
        {inheritsGeneric ? (
          <div className="grid-row">
            <div className="grid-col-12 o-box u-bg-color-grey">
              <p>
                This framework is based on our &quot;generic progression
                framework&quot;, which means that some skills and behaviours are
                shared with it.
                <br /> This is to ensure that levels are comparable across
                different progression frameworks.
              </p>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    )
  }

  renderButtonBar() {
    const { pageData } = this.props
    return (
      <div className="grid-row">
        <div className="grid-col-12 o-box u-bg-color-grey-lightest">
          <ButtonBar
            onClickHandler={this.handleClick}
            levels={pageData.levels}
          />
        </div>
      </div>
    )
  }

  renderFramework() {
    const { pageData } = this.props

    return pageData.topics.map(topic => this.renderTopic(topic))
  }

  renderTopic = (topic: Object) => {
    const { pageData, genericData } = this.props
    const { level, isGeneric } = this.state

    const genericTopic = genericData.topics.filter(
      obj => obj.name === topic.name,
    )
    const title =
      genericTopic != null && !R.isEmpty(genericTopic)
        ? genericTopic.map(obj => obj.title)[0]
        : topic.title
    const description =
      genericTopic != null && R.isEmpty(genericTopic)
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
        <div className="grid-row" key={topic.name}>
          <div className="grid-col-12 o-box u-bg-color-grey-lightest">
            <h2>{title}</h2>
            <h4>{description}</h4>
            {frameworkCriteria != null && !R.isEmpty(frameworkCriteria) ? (
              <div>
                <div
                  className="grid-col-12 o-box"
                  style={{ border: '3px solid #14233c', borderStyle: 'dashed' }}
                >
                  <h5>{pageData.title} criteria</h5>
                  <ul>{frameworkCriteria}</ul>
                </div>
              </div>
            ) : null}
            {!isGeneric &&
            !R.isEmpty(genericCriteria) &&
            genericCriteria != null ? (
              <div>
                <div
                  className="grid-col-12 o-box"
                  style={{
                    color: '#888888',
                    border: '3px solid #888888',
                    borderStyle: 'dashed',
                  }}
                >
                  <h5>{genericData.title} criteria</h5>
                  <ul>{genericCriteria}</ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )
    }
  }

  render() {
    const { level } = this.state

    return (
      <React.Fragment>
        {this.renderDescriptionAndTitle()}
        {this.renderButtonBar()}
        {level != null ? this.renderFramework() : null}
      </React.Fragment>
    )
  }
}
