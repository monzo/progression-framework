// @flow
import * as React from 'react'
import {
  Card,
  MarkdownContent,
  PrimaryView,
  Subtitle,
  Title,
} from '../redesign'
import toTitleCase from '../../utils/toTitleCase'

type Props = {
  data: Object,
  html: string,
}

export default class MarkdownRenderer extends React.Component<Props> {
  render() {
    const { data, html } = this.props
    return (
      <PrimaryView>
        <Subtitle small>
          {data.sidebarGroup != null ? toTitleCase(data.sidebarGroup) : null}
        </Subtitle>
        <Title small>{data.title}</Title>
        <Card>
          <MarkdownContent dangerouslySetInnerHTML={{ __html: html }} />
        </Card>
      </PrimaryView>
    )
  }
}
