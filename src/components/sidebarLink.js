import * as React from 'react'
import { navigate } from 'gatsby'

type Props = {
  to: string,
  className: string,
  onClickFunction: Function,
  children?: React.Node,
}

class SidebarLink extends React.Component<Props> {
  handleClick = async () => {
    const { onClickFunction, to } = this.props
    const timeout = window != null && window.screen.availWidth > 736 ? 300 : 0

    const promise = new Promise(resolve => {
      onClickFunction()
      setTimeout(() => resolve(), timeout)
    })
    await promise.then(() => {
      navigate(to)
    })
  }

  render() {
    const { className, children } = this.props

    return (
      <a onClick={this.handleClick} className={className}>
        {children}
      </a>
    )
  }
}

export default SidebarLink
