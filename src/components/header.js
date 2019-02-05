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
                <svg className="name" xmlns="http://www.w3.org/2000/svg" height="37.76" viewBox="0 0 162.757 9.991">
                  <g className="name-content" font-weight="400" font-family="Varela Round" letter-spacing="0" word-spacing="0">
                    <g aria-label="ANDREW DELOS REYES" font-size="53.333" opacity=".99">
                      <path className="name-long" d="M.87 9.365q-.278 0-.458-.17-.166-.17-.166-.418 0-.105.069-.262L3.848.643q.11-.235.305-.379.208-.157.498-.157h.139q.29 0 .485.157.208.144.319.38l3.532 7.871q.07.157.07.262 0 .248-.18.418-.167.17-.444.17-.194 0-.36-.091-.152-.105-.236-.275l-.9-2.04h-4.71L1.464 9q-.083.17-.25.275-.152.091-.346.091zm1.98-3.491h3.741l-1.87-4.25zM11.857 9.365q-.263 0-.443-.17t-.18-.418V.97q0-.353.263-.601.263-.262.637-.262h.18q.444 0 .762.393l5.334 7.27V.71q0-.249.18-.419.18-.183.444-.183.263 0 .443.183.194.17.194.419v7.806q0 .353-.277.602-.264.248-.638.248h-.166q-.221 0-.415-.091-.194-.105-.32-.262l-5.36-7.31v7.075q0 .248-.195.418-.18.17-.443.17zM22.978 9.3q-.263 0-.443-.17t-.18-.418V.774q0-.248.18-.418.18-.183.443-.183h2.785q1.58 0 2.674.667 1.108.653 1.662 1.7.555 1.046.555 2.196 0 1.151-.555 2.197-.554 1.046-1.662 1.713-1.095.654-2.674.654zm2.633-1.112q1.136 0 1.995-.431.859-.445 1.33-1.216.47-.785.47-1.805t-.47-1.791q-.471-.785-1.33-1.216-.86-.445-1.995-.445h-1.995v6.904zM33.396 9.365q-.263 0-.443-.17t-.18-.418V.774q0-.248.18-.418.18-.183.443-.183h3.228q1.884 0 2.826.732.943.732.943 1.922 0 .785-.472 1.439-.457.64-1.343.928.997.248 1.357 1.177.374.915.374 1.804v.602q0 .248-.18.418-.18.17-.443.17-.291 0-.471-.157-.166-.17-.166-.431v-.392q0-.654-.125-1.203-.125-.563-.596-.994-.47-.445-1.427-.445h-2.868v3.034q0 .248-.194.418-.18.17-.443.17zm3.145-4.746q1.191 0 1.884-.445.707-.445.707-1.255 0-.785-.61-1.203-.596-.419-2.05-.419h-2.439V4.62zM43.273 9.3q-.264 0-.444-.17t-.18-.418V.774q0-.248.18-.418.18-.183.444-.183h5.555q.25 0 .416.17.18.157.18.392 0 .235-.18.392-.166.157-.416.157H43.91v2.89h4.42q.249 0 .415.17.18.157.18.392 0 .236-.18.393-.166.157-.415.157h-4.42v2.902h4.918q.25 0 .416.17.18.157.18.393 0 .235-.18.392-.166.157-.416.157zM54.116 9.365q-.277 0-.499-.143-.207-.157-.318-.445L50.583.905q-.041-.144-.041-.222-.014-.249.152-.406.18-.17.457-.17.222 0 .388.131.166.13.236.34l2.327 7.218L56.444.604q.069-.222.263-.353.208-.144.457-.144.25 0 .443.144.208.13.277.353l2.342 7.192L62.553.578q.07-.21.236-.34.166-.13.388-.13.277 0 .443.17.18.156.166.405 0 .078-.041.222l-2.716 7.872q-.11.288-.332.445-.208.143-.485.143t-.513-.157q-.221-.17-.304-.431l-2.231-6.67-2.23 6.67q-.084.261-.32.431-.22.157-.498.157zM69.737 9.3q-.264 0-.444-.17t-.18-.418V.774q0-.248.18-.418.18-.183.444-.183h2.784q1.58 0 2.674.667 1.109.653 1.663 1.7.554 1.046.554 2.196 0 1.151-.554 2.197t-1.663 1.713q-1.094.654-2.674.654zm2.632-1.112q1.136 0 1.995-.431.859-.445 1.33-1.216.471-.785.471-1.805t-.471-1.791q-.471-.785-1.33-1.216-.859-.445-1.995-.445h-1.995v6.904zM80.154 9.3q-.263 0-.443-.17t-.18-.418V.774q0-.248.18-.418.18-.183.443-.183h5.556q.25 0 .416.17.18.157.18.392 0 .235-.18.392-.167.157-.416.157h-4.918v2.89h4.42q.249 0 .415.17.18.157.18.392 0 .236-.18.393-.166.157-.416.157h-4.42v2.902h4.919q.25 0 .416.17.18.157.18.393 0 .235-.18.392-.167.157-.416.157zM89.252 9.3q-.36 0-.623-.235-.25-.249-.25-.589V.71q0-.249.18-.419.18-.183.444-.183.263 0 .443.183.194.17.194.419V8.11h4.53q.264 0 .444.183.194.17.194.419 0 .248-.194.418-.18.17-.444.17zM100.643 9.43q-1.455 0-2.55-.6-1.094-.602-1.69-1.661-.595-1.06-.623-2.433.028-1.373.623-2.432.596-1.06 1.69-1.66 1.095-.602 2.55-.602 1.454 0 2.535.601 1.095.602 1.69 1.674.61 1.06.638 2.42-.028 1.36-.638 2.432-.595 1.059-1.69 1.66-1.08.602-2.535.602zm0-1.11q1.108 0 1.925-.471.818-.471 1.247-1.282.43-.81.43-1.83t-.43-1.831q-.43-.811-1.247-1.282-.817-.47-1.925-.47-1.122 0-1.94.47-.803.47-1.233 1.282-.43.81-.43 1.83t.43 1.831q.43.81 1.233 1.282.818.47 1.94.47zM110.666 9.43q-1.76 0-3.297-.627-.166-.065-.277-.21-.11-.156-.11-.326 0-.222.151-.38.167-.17.416-.17.139 0 .263.053 1.275.536 2.73.536 2.424 0 2.424-1.504 0-.392-.319-.653-.304-.262-.761-.406-.458-.157-1.303-.366-1.122-.275-1.815-.523-.692-.262-1.191-.772-.499-.51-.499-1.36 0-.745.416-1.346.415-.615 1.219-.968.817-.366 1.953-.366 1.524 0 2.757.431.388.131.388.523 0 .21-.152.38-.153.17-.402.17-.083 0-.222-.053-1.08-.353-2.23-.353-1.095 0-1.787.393-.68.392-.68 1.098 0 .47.32.772.332.287.817.457.499.157 1.344.34 1.094.249 1.76.497.678.249 1.15.772.484.523.484 1.412 0 .732-.443 1.32-.444.576-1.247.903-.804.327-1.857.327zM120.364 9.365q-.263 0-.443-.17t-.18-.418V.774q0-.248.18-.418.18-.183.443-.183h3.228q1.885 0 2.827.732t.942 1.922q0 .785-.471 1.439-.457.64-1.344.928.997.248 1.358 1.177.374.915.374 1.804v.602q0 .248-.18.418-.18.17-.444.17-.29 0-.47-.157-.167-.17-.167-.431v-.392q0-.654-.125-1.203-.124-.563-.596-.994-.47-.445-1.427-.445h-2.867v3.034q0 .248-.194.418-.18.17-.444.17zm3.145-4.746q1.192 0 1.884-.445.707-.445.707-1.255 0-.785-.61-1.203-.595-.419-2.05-.419h-2.438V4.62zM130.24 9.3q-.262 0-.442-.17t-.18-.418V.774q0-.248.18-.418.18-.183.443-.183h5.556q.249 0 .415.17.18.157.18.392 0 .235-.18.392-.166.157-.415.157h-4.919v2.89h4.42q.25 0 .415.17.18.157.18.392 0 .236-.18.393-.166.157-.415.157h-4.42v2.902h4.919q.249 0 .415.17.18.157.18.393 0 .235-.18.392-.166.157-.415.157zM141.555 9.365q-.263 0-.457-.17-.18-.17-.18-.418V5.442l-3.311-4.38q-.11-.17-.11-.353 0-.249.165-.419.18-.183.444-.183.346 0 .554.301l2.895 3.975 2.896-3.975q.208-.3.554-.3.263 0 .443.182.18.17.167.419 0 .183-.111.353l-3.325 4.38v3.335q0 .248-.18.418-.18.17-.444.17zM147.938 9.3q-.264 0-.444-.17t-.18-.418V.774q0-.248.18-.418.18-.183.444-.183h5.555q.25 0 .416.17.18.157.18.392 0 .235-.18.392-.166.157-.416.157h-4.918v2.89h4.42q.249 0 .415.17.18.157.18.392 0 .236-.18.393-.166.157-.416.157h-4.419v2.902h4.918q.25 0 .416.17.18.157.18.393 0 .235-.18.392-.166.157-.416.157zM159.21 9.43q-1.759 0-3.297-.627-.166-.065-.277-.21-.11-.156-.11-.326 0-.222.152-.38.166-.17.415-.17.139 0 .264.053 1.274.536 2.729.536 2.424 0 2.424-1.504 0-.392-.318-.653-.305-.262-.762-.406-.458-.157-1.303-.366-1.122-.275-1.815-.523-.692-.262-1.191-.772-.499-.51-.499-1.36 0-.745.416-1.346.416-.615 1.22-.968.816-.366 1.953-.366 1.523 0 2.757.431.387.131.387.523 0 .21-.152.38t-.402.17q-.083 0-.221-.053-1.081-.353-2.23-.353-1.095 0-1.788.393-.679.392-.679 1.098 0 .47.319.772.332.287.817.457.499.157 1.344.34 1.094.249 1.76.497.678.249 1.15.772.484.523.484 1.412 0 .732-.443 1.32-.443.576-1.247.903-.804.327-1.856.327z" opacity=".99"/>
                    </g>
                    <g aria-label="ADR" font-size="14.111" stroke-width=".265">
                      <path className="name-short" d="M.635 9.99q-.282 0-.466-.183Q0 9.624 0 9.356q0-.113.07-.283L3.67.58q.113-.254.31-.41Q4.191 0 4.487 0h.141q.297 0 .494.17.212.155.325.409l3.598 8.494q.07.17.07.283 0 .268-.183.451-.169.184-.451.184-.198 0-.367-.1-.155-.112-.24-.295l-.917-2.202H2.159l-.917 2.202q-.085.183-.254.296-.155.099-.353.099zm2.018-3.767h3.81L4.558 1.637zM11.826 9.92q-.268 0-.451-.183-.184-.184-.184-.452V.72q0-.268.184-.452.183-.197.451-.197h2.837q1.608 0 2.723.72 1.13.705 1.694 1.834.564 1.129.564 2.37 0 1.242-.564 2.371-.565 1.129-1.694 1.849-1.115.705-2.723.705zm2.682-1.2q1.157 0 2.032-.465.874-.48 1.354-1.312.48-.847.48-1.948 0-1.1-.48-1.933-.48-.847-1.354-1.312-.875-.48-2.032-.48h-2.032v7.45zM22.437 9.99q-.268 0-.451-.183-.184-.183-.184-.451V.72q0-.268.184-.452.183-.197.451-.197h3.288q1.92 0 2.879.79.96.79.96 2.074 0 .847-.48 1.552-.466.692-1.37 1.002 1.017.268 1.384 1.27.38.988.38 1.948v.649q0 .268-.183.451-.183.184-.451.184-.297 0-.48-.17-.17-.183-.17-.465v-.424q0-.705-.126-1.298-.127-.607-.607-1.072-.48-.48-1.454-.48h-2.92v3.274q0 .268-.198.451-.184.184-.452.184zm3.204-5.122q1.213 0 1.919-.48.72-.48.72-1.354 0-.847-.622-1.298-.606-.452-2.088-.452h-2.484v3.584z"/>
                    </g>
                  </g>
                </svg>
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
