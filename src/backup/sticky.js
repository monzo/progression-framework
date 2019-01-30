// @flow
import React from 'react'
import './sticky.css'
import { Lipsum } from './safari'

class StickyView extends React.Component<null> {
  render() {
    return (
      <React.Fragment>
        <div className="HolyGrail">
          <header className="HolyGrail-header">Header</header>
          <div className="HolyGrail-body">
            <main className="HolyGrail-content">
              <Lipsum />
              <Lipsum />
            </main>
            <nav className="HolyGrail-nav">Navigation</nav>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default StickyView
