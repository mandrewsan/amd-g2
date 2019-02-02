import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import './index.css'
import '../scss/main.scss'
import '../scss/layout.scss'


function getYear () {
  return (
    <span>{(new Date()).getFullYear()}</span>
  )
}

const year = getYear()

const Layout = (props,{ data }) => (
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
          title={(props.title? props.title : data.site.siteMetadata.title)}
          // meta={[
          //   { name: 'description', content: 'Probably thinking about a burger right now.' }
          // ]}
        />
        <Header page={props.page} siteTitle={data.site.siteMetadata.title} />
        <div>
          {props.children}
        </div>
        <footer>
          <h2>Copyright &copy; {year} Andrew Delos Reyes. All rights reserved.</h2>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
