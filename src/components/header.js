import React from 'react'
import Link from 'gatsby-link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import '../scss/nav.scss'

const CustomLink = props => {
  if (props.page==='home') {
    return (
      <AnchorLink
        offset={props.offset}
        href={props.href}
        className={props.className}>
        {props.children}
      </AnchorLink>
    )
  } else {
    return (
      <Link to={props.href} className={props.className}>
        {props.children}
      </Link>
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navbarActive: false,
      page: props.page
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
        <nav className="navbar is-fixed-top">
          <div className="container">
            <div className="navbar-brand">
              <CustomLink page={this.state.page}
                className="navbar-item"
                href="#top"
              >
                ADR
              </CustomLink>
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
                <CustomLink page={this.state.page} className="navbar-item" href="#projects">
                  Projects
                </CustomLink>
                <CustomLink page={this.state.page} className="navbar-item" href="#blog">
                  Blog
                </CustomLink>
                {/* <div className="navbar-item has-dropdown is-hoverable">
                  <Link className="navbar-link" to="#blog">
                    Blog
                  </Link>
                  <div className="navbar-dropdown is-boxed">
                    <Link className="navbar-item" to="#all">
                      All Posts
                    </Link>
                    <Link className="navbar-item" to="#cats">
                      Categories
                    </Link>
                    <hr className="navbar-divider" />
                    <Link className="navbar-item" to="#daily">
                      Daily
                    </Link>
                    <Link className="navbar-item" to="#oneline">
                      One-liners
                    </Link>
                  </div>
                </div> */}
                <CustomLink page={this.state.page} className="navbar-item" href="#contact">
                    Contact
                  </CustomLink>
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
