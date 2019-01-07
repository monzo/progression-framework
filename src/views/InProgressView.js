// @flow
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { CenteredElement } from '../components/styles'

const InProgressView = () => (
  <React.Fragment>
    <Helmet>
      <title>Progression at Monzo</title>
    </Helmet>
    <CenteredElement>
      <div className="grid-row">
        <div className="grid-col-12 grid-col-8-md">
          <h1>
            🏗️ 🏗️ 🏗️ 🏗️ 🏗️
            <br />
            <span>Work in progress</span>
            <br />
          </h1>
          <br />
          <p className="u-font-size-h4">
            Welcome to Progression at Monzo.
            <br />
            <br />
            Please be aware that this is a <strong>work in progress</strong>,
            and is likely to change throughout development.
          </p>
        </div>
      </div>
      <div className="grid-row">
        <div className="grid-col-12 grid-col-8-md">
          <Link to="/frameworks" className="btn btn--primary">
            Enter anyway
          </Link>
        </div>
      </div>
    </CenteredElement>
  </React.Fragment>
)

export default InProgressView
