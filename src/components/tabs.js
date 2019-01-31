import React from 'react'
import { StaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import '../scss/tabs.scss'
import '../scss/modal.scss'

class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ...this.props,
      modalActive: false
    }

    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    console.log('modal close clicked')
    this.setState(prevState => ({
      ...prevState,
      activeModal: ""
    }))
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isActive) {
      this.setState(nextProps => {
        return {
          ...nextProps
        }
      })
    }

    console.log(nextProps)
  }

  render() {
    return (
      <div className={`modal ${(this.state.isActive ? 'is-active' : '')}`}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <p className="image is-4by3">
            <img src={this.props.src} alt=""/>
          </p>
        </div>
        <button 
          onClick={()=> this.props.closeModal()} 
          className="modal-close is-large" 
          aria-label="close"></button>
      </div>
    )
  }
}

class Tab extends React.Component {
  render() {
    return (
      <li 
        className={this.props.className}
        onClick={() => {this.props.onTabClick(this.props.value)}}>
        <a>{this.props.content}</a>
      </li>
    )
  }
}

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    let allProjects = []
    let projectsObj = {}
    
    // build array of project names
    this.props.data.forEach(project => {
      if (project.node.relativeDirectory) {
        allProjects.push(project.node.relativeDirectory)
      }
    })

    const projects = Array.from(new Set(allProjects))

    // build object of projects and add images
    this.props.data.forEach(object => {
      if (object.node.relativeDirectory !== "") {
        let key = object.node.relativeDirectory
        if (!projectsObj[key]) {
          projectsObj[key] = []
        }
        projectsObj[key].push(object.node.publicURL)

      }
    })

    this.state = {
        activeTab: projects[0],
        activeModal: "",
        projects: projects,
        ...projectsObj
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleModalClick = this.handleModalClick.bind(this)
    this.handleModalClose = this.handleModalClick.bind(this)
  }

  handleClick(project) {
    this.setState(prevState => ({
      ...prevState,
      activeTab: project
    }))
  }

  handleModalClick(image) {
    this.setState(prevState => ({
      ...prevState,
      activeModal: image
    }))
  }

  render() {
    const projectNames = this.state.projects.map((project, i) => {
      let formattedName = project.replace(/-/g, " ").toUpperCase()
      return (
        <Tab 
          className={`${(this.state.activeTab === project ? `is-active` : ``)}`}
          key={i}
          onTabClick={this.handleClick}
          value={project}
          content={formattedName} />
      )
    })

    const projectImages = this.state.projects.map((project, i) => {
      let projectContent = this.state[project].map((img, i) => {
        return (
          <li 
            className="column is-one-quarter" 
            key={i}
            onClick={() => this.handleModalClick(img)}>
            <img src={`${img}`} alt="" />
            <Modal 
              src={img}
              isActive={this.state.activeModal === img}/>
          </li>
        )
      })

      return (
        <div 
          className={`tab-content ${project} ${(this.state.activeTab === project ? `is-active` : ``)}`} 
          key={i}
          >
          <ul className="columns is-8 is-variable">{projectContent}</ul>
        </div>
      )
    })

    return (
      <div className="tab-container">
        <div className="tabs is-centered is-small">
          <ul>
            {projectNames}
          </ul>
        </div>
        <div className="tab-contents">
          {projectImages}
        </div>
      </div>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDirectory(filter: { sourceInstanceName: { eq: "projects" } }) {
          edges {
            node {
              id
              relativePath
              name
            }
          }
        }
        allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
          edges{
            node {
              relativeDirectory
              name
              publicURL
              extension
            }
          }
        }
      }
    `}
    render = {data => (
      <Tabs 
        data={data.allFile.edges}/>
    )}
  />
)