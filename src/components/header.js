import React from 'react'
import Link from 'gatsby-link'

import '../scss/nav.scss'

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar is-transparent">
      <div className="container">
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            to="/"
          >
            Delos
          </Link>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#projects">
              Projects
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="#">
                Blog
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="#">
                  All Posts
                </a>
                <a className="navbar-item" href="#">
                  Categories
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="#">
                  Daily
                </a>
                <a className="navbar-item" href="#">
                  One-liners
                </a>
              </div>
            </div>
            <a className="navbar-item" href="#">
                Contact
              </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
