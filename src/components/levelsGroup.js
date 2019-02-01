// @flow
import * as React from 'react'
import {
  LevelsTextWrapper,
  LevelsContainer,
  LevelsText,
  LevelsSubtitle,
} from './styles'

type Props = {
  onClickHandler: number => (SyntheticUIEvent<>) => mixed,
  levels: number,
  activeLevel: ?number,
}

const renderLevels = ({ onClickHandler, levels, activeLevel }: Props) => {
  const toRender = []

  for (let i = 1; i <= levels; i++) {
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

const LevelsGroup = ({ onClickHandler, levels, activeLevel }: Props) => {
  return (
    <LevelsContainer>
      <LevelsSubtitle>Levels</LevelsSubtitle>
      <LevelsTextWrapper>
        {renderLevels({ onClickHandler, levels, activeLevel })}
      </LevelsTextWrapper>
    </LevelsContainer>
  )
}

export default LevelsGroup
