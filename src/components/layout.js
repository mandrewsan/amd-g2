import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import './index.css'
import '../scss/main.scss'
import '../scss/layout.scss'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Probably thinking about a burger right now.' }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
