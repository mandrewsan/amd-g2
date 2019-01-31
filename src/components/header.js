import React from 'react'
import Link from 'gatsby-link'

import '../scss/nav.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navbarActive: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        ...prevState,
        navbarActive: !this.state.navbarActive
      }
    })
  }

  closeNav() {
    if (this.state.navbarActive) {
      this.setState(prevState => {
        return {
          ...prevState,
          navbarActive: false
        }
      })
    }
  }
  render() {
    return (
      <header onClick={this.closeNav}>
        <nav className="navbar is-transparent is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <Link
                className="navbar-item"
                to="/"
              >
                Delos
              </Link>
              <div 
                className={`navbar-burger burger ${this.state.navbarActive ? 'is-active':''}`} 
                data-target="navbarExampleTransparentExample"
                onClick={this.handleClick}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
    
            <div className={`navbar-menu ${this.state.navbarActive ? 'is-active':''}`}>
              <div className="navbar-end">
                <a className="navbar-item" href="#projects">
                  Projects
                </a>
                <a className="navbar-item" href="#blog">
                  Blog
                </a>
                {/* <div className="navbar-item has-dropdown is-hoverable">
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
                </div> */}
                <a className="navbar-item" href="#contact">
                    Contact
                  </a>
              </div>
            </div>
          </div>
        </nav>
        <div 
          className={`nav-layer ${this.state.navbarActive ? 'is-active':''}`}
          onClick={this.closeNav}></div>
      </header>

    )
  }
} 


export default Header
