// @flow
import * as React from 'react'
import styled from 'styled-components'
import {
  LevelsTextWrapper,
  LevelsContainer,
  LevelsText,
  LevelsSubtitle,
  FrameworkHeader,
  FrameworkTitleGroup,
  Subtitle,
  Title,
} from './styles'
import toTitleCase from '../utils/toTitleCase'

type Props = {
  onClickHandler: (?number) => (SyntheticUIEvent<>) => mixed,
  pageData: Object,
  activeLevel: ?number,
}

/*
 * The level picker is a flexbox which spreads the the levels evenly over the div.
 * This means 1 will always be in the leftmost position and the max level at the opposite.
 * When there are only two or three levels this poses and issue, because the levels look
 * really spaced and like there's a UI bug. To combat this, we give each of them the spacing
 * as if there were 5 levels (i.e. each level takes up 20% space), and add a marginLeft to
 * push things along (i.e 100% - {the new width}%)
 */
const Spread = styled.div`
  display: inline-flex;
  width: ${props => 20 * props.levels}%;
  margin-left: ${props => 100 - 20 * props.levels}%;
  justify-content: space-between;
`

const renderLevels = ({ onClickHandler, pageData, activeLevel }: Props) => {
  const toRender = []

  for (let i = 1; i <= pageData.levels; i++) {
    if (activeLevel != null && i === activeLevel) {
      toRender.push(
        <LevelsText onClick={onClickHandler(i)} key={'button-' + i} active>
          {i}
        </LevelsText>,
      )
    } else {
      toRender.push(
        <LevelsText onClick={onClickHandler(i)} key={'button-' + i}>
          {i}
        </LevelsText>,
      )
    }
  }

  if (5 > pageData.levels) {
    return <Spread levels={pageData.levels}>{toRender}</Spread>
  }
  return toRender
}

const Header = ({ onClickHandler, pageData, activeLevel }: Props) => {
  return (
    <FrameworkHeader>
      <FrameworkTitleGroup onClick={onClickHandler(null)}>
        <Subtitle small>
          {pageData.sidebarGroup != null
            ? toTitleCase(pageData.sidebarGroup)
            : null}
        </Subtitle>
        <Title small>{pageData.title}</Title>
      </FrameworkTitleGroup>
      <LevelsContainer>
        <LevelsSubtitle>Levels</LevelsSubtitle>
        <LevelsTextWrapper>
          {renderLevels({ onClickHandler, pageData, activeLevel })}
        </LevelsTextWrapper>
      </LevelsContainer>
    </FrameworkHeader>
  )
}

export default Header
