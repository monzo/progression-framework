import React from 'react'
import { Router } from '@reach/router'
import InProgressView from '../views/InProgressView'
import '../css/main.min.css'
import '../css/monzo-framework-prog.min.css'

const Index = () => {
  return (
    <Router className="router full-page">
      <InProgressView path="/" />
    </Router>
  )
}

export default Index
