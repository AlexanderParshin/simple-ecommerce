import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Head = (props) => (
  <Helmet>
    <title>{props.title}</title>
    <meta charSet="utf-8" />
  </Helmet>
)

Head.propTypes = {
  title: PropTypes.string
}

Head.defaultProps = {
  title: 'Simple ecommerce'
}


export default Head