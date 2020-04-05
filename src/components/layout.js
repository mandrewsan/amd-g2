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
        >
          <script type="text/javascript">{`
            var _paq = window._paq || [];
            /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//analytics.hikaruelio.net/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '2']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
            `}
          </script>
          <script data-ad-client="ca-pub-1500683799778293" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Helmet>
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
