// @flow
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { CenteredElement, InProgressText } from '../components/styles'
import '../css/main.min.css'

const InProgressView = () => (
  <React.Fragment>
    <Helmet>
      <title>Progression at Monzo</title>
    </Helmet>
    <CenteredElement>
      <h1>
        🏗️ 🏗️ 🏗️ 🏗️ 🏗️
        <br />
        <span>Work in progress</span>
        <br />
      </h1>
      <br />
      <InProgressText>
        Welcome to Progression at Monzo.
        <br />
        Please be aware that this is a <strong>work in progress</strong>, and is
        likely to change throughout development.
      </InProgressText>
      <br />
      <Link to="/frameworks/" className="btn btn--primary">
        Enter anyway
      </Link>
    </CenteredElement>
  </React.Fragment>
)

export default InProgressView
