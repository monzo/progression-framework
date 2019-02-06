// @flow
import React from 'react'

type Props = {
  htmlAttributes: Object,
  headComponents: Array<*>,
  bodyAttributes: Object,
  preBodyComponents: Array<*>,
  body: string,
  postBodyComponents: Array<*>,
}

// WARN: This is a lightly edited gatsby config file, shouldn't be edited unless it *really* has to.
export default class HTML extends React.Component<Props> {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no"
          />
          <link
            href="https://monzo.com/static/css/monzo-framework.min.css"
            rel="stylesheet"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
