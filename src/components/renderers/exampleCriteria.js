import * as React from 'react'
import { ExamplesText } from '../styles'

type CriteriaProps = {
  content: Object,
}

type CriteriaState = {
  isHidden: boolean,
}

export default class ExampleCriteriaComponent extends React.Component<
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
