// @flow
import * as React from 'react'
import {
  BtnBarContainer,
  BtnBarHeader,
  BtnBarButtonContainer,
  BtnBarButton,
} from './styles'

type Props = {
  onClickHandler: number => (SyntheticUIEvent<>) => mixed,
  levels: number,
}

const semanticRepresentation = new Map([
  [1, ['one', '#6F48BC']],
  [2, ['two', '#2991CC']],
  [3, ['three', '#61CD73']],
  [4, ['four', '#E74C3C']],
  [5, ['five', '#DB6F26']],
  [6, ['six', '#F1C430']],
])

const renderButtons = ({ onClickHandler, levels }: Props) => {
  const toRender = []

  for (let [key, values] of semanticRepresentation) {
    if (levels >= key) {
      toRender.push(
        <BtnBarButton
          inputColour={values[1]}
          onClick={onClickHandler(key)}
          key={'button-' + key}
        >
          {values[0]}
        </BtnBarButton>,
      )
    }
  }

  return toRender
}

const ButtonBar = ({ onClickHandler, levels }: Props) => {
  return (
    <BtnBarContainer className="grid-row">
      <BtnBarHeader>Levels</BtnBarHeader>
      <BtnBarButtonContainer>
        {renderButtons({ onClickHandler, levels })}
      </BtnBarButtonContainer>
    </BtnBarContainer>
  )
}

export default ButtonBar
