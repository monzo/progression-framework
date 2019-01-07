// @flow
import * as React from 'react'

type Props = {
  data: Object,
  html: string,
}

export default class MarkdownRenderer extends React.Component<Props> {
  render() {
    const { data, html } = this.props
    return (
      <React.Fragment>
        <div className="grid-row">
          <div className="grid-col-12 o-box u-bg-color-white">
            <h1>{data.title}</h1>
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-col-12 o-box u-bg-color-grey-lightest">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}
