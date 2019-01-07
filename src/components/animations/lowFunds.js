// @flow
import * as React from 'react'
import Lottie from 'react-lottie'
import * as animationData from './json/lowFunds.json'

export default class LowFundsAnimation extends React.Component<*> {
  render() {
    const animationOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
    }

    return (
      <div aria-hidden="true">
        <Lottie options={animationOptions} />
      </div>
    )
  }
}
