// @flow
import * as React from 'react'
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
