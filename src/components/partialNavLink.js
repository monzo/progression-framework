import * as React from 'react'
import { Link } from 'gatsby'

const partlyActive = className => ({ isPartiallyCurrent }) => ({
  className: className + (isPartiallyCurrent ? ` active` : ``),
})

const PartialNavLink = ({ className, ...props }) => (
  <Link getProps={partlyActive(className)} {...props} />
)

export default PartialNavLink
