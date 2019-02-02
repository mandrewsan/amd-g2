import React from 'react'
import Layout from '../components/layout'
import Tabs from '../components/tabs'
import { Link, graphql } from 'gatsby'

import 'bulma/bulma.sass'
import '@fortawesome/fontawesome-free/js/all.js'
import LazyLoad from 'react-lazyload'

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
  <Layout>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Andrew Delos Reyes
          </h1>
          <h2 className="subtitle">
            is walking to the white car
          </h2>
        </div>
      </div>
    </section>
    <section className="intro">
      <div className="container">
        <h3>An SEO turned developer</h3>
        <p>I got my feet wet in the digital world doing SEO and content creation for agencies. With an eye for clean design and a knack for picking new things up, I've developed a love for creating attractive websites and other types of UI.</p>
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
            content="On-site and off-site optimization. Paid campaign creation and management. Google Analytics to tell you what's going on."
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
        <div>
          <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="post" key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>{node.frontmatter.date}</span>
                </h3>
                <p>{node.excerpt}</p>
              </Link> 
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="callout" id="contact">
      <div className="container">
        <h2>Get in touch</h2>
        <div className="social">
          <a href="https://twitter.com/its_andrews"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/andrewdelosreyes/"><i className="fab fa-linkedin"></i></a>
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