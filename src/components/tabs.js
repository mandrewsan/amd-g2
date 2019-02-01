import React from 'react'
import { StaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import '../scss/tabs.scss'
import Modal from '../components/modal'


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
        modalImg: "",
        modalActive: false,
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
      modalImg: image,
      modalActive: true
    }))
  }

  handleModalClose() {
    this.setState({
      modalActive: false
    })
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
        <Modal 
          img={this.state.modalImg} 
          isActive={this.state.modalActive}
          closeModal={this.handleModalClose} />
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