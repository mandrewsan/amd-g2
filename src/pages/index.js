import React from 'react'
import Layout from '../components/layout'
import '../scss/home.scss'
import Tabs from '../components/tabs'
import { Link, graphql } from 'gatsby'

import 'bulma/bulma.sass'
import '@fortawesome/fontawesome-free/js/all.js'
import LazyLoad from 'react-lazyload'

class Subline extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lines: [
        'is walking to the white car',
        'is thinking about a burger',
        'is driving to work',
        'is writing an app',
        'forgot about the burger',
        'is at the meeting',
        'is fixing the truck',
        'is listening to JRE'
      ],
      currentLine: 'wrote this page',
      lineIndex: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClick)
  }

  handleClick() {
    let lineIndex = this.state.lineIndex
    const maxLines = this.state.lines.length
    
    if (lineIndex === maxLines -1) lineIndex = 0
    else lineIndex++
    
    this.setState(prevState => ({
      ...prevState,
      lineIndex: lineIndex,
      currentLine: prevState.lines[lineIndex]
    }))
  }

  render() {
    return (
      <span onClick={() => {this.handleClick()}}>{this.state.currentLine}</span>
    )
  }

}

const Skill = props => (
  <div className="column is-four">
    <div className="icon">
      <i className={`fa ${props.icon}`}></i>
    </div>
    <h3>{props.heading}</h3>
    <p>{props.content}</p>
  </div>
)

const IndexPage = ({ data }) => (
  <Layout page="home">
    <section id="top" className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Andrew Delos Reyes
          </h1>
          <h2 className="subtitle">
            <Subline />
          </h2>
        </div>
      </div>
    </section>
    <section className="skills">
      <div className="container">
        <h2>What I do</h2>
        <div className="columns">
          <Skill 
            heading="Digital Design"
            content="Websites, landing pages, and emails. Just kidding, don't talk to me about emails."
            icon="fa-eye"
          />
          <Skill 
            heading="Front-end Development"
            content="I enjoy working with React. Most recently I've gotten into static sites using GatsbyJS, as demonstrated by this site."
            icon="fa-code"
          />
          <Skill 
            heading="Search Marketing"
            content="I've been doing SEO and paid advertising since 2008. "
            icon="fa-search"
          />
        </div>
      </div>
    </section>
    <section className="transition">
      <div className="container">
        <h2>Projects</h2>
      </div>
    </section>
    <section id="projects" className="projects">
      <div className="container">
        <LazyLoad>
          <Tabs />
        </LazyLoad>
      </div>
    </section>
    <section className="transition">
      <div className="container">
        <h2>Ramblings</h2>
      </div>
    </section>
    <section className="ramblings" id="blog">
      <div className="container">
        <div className="columns is-variable is-6" style={({'flexWrap':'wrap'})}>
          {/* <h2>{data.allMarkdownRemark.totalCount} Posts</h2> */}
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="column is-one-third">
              <div className="post">
                <Link key={node.id} to={node.fields.slug}>
                  <strong>
                    {node.frontmatter.title}{" "}
                    <span>{node.frontmatter.date}</span>
                  </strong>
                  <span>{node.excerpt}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`