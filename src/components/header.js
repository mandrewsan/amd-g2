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
              <a className="navbar-link" href="#blog">
                Blog
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="#all">
                  All Posts
                </a>
                <a className="navbar-item" href="#cats">
                  Categories
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="#daily">
                  Daily
                </a>
                <a className="navbar-item" href="#oneline">
                  One-liners
                </a>
              </div>
            </div>
            <a className="navbar-item" href="#contact">
                Contact
              </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
