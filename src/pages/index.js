import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/layout'

import 'bulma/bulma.sass'
import '@fortawesome/fontawesome-free/js/all.js'

const IndexPage = () => (
  <Layout>
    <section class="hero is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Andrew Delos Reyes
          </h1>
          <h2 className="subtitle">
            Digital Portfolio
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
          <div className="column is-four">
            <div className="icon">
              <i className="fa fa-eye"></i>
            </div>
            <h3>Digital Design</h3>
            <p>Websites, landing pages, and emails. Mobile apps and other UI, including wireframes using Balsamiq, and hi-fi mock-ups with InvisionApp. Ads for display network, as well as print ads and banners.</p>
          </div>
          <div className="column is-four">
            <div className="icon">
              <i className="fa fa-code"></i>
            </div>
            <h3>Front-end Development</h3>
            <p>Strong HTML and CSS skills. Javascript, jQuery, Sightly (AEM) and some PHP. Sass and Grunt. Responsive sites hand-coded from scratch or using Bootstrap. Version control using Git with teams.</p>
          </div>
          <div className="column is-four">
            <div className="icon">
              <i className="fa fa-search"></i>
            </div>
            <h3>Search Marketing</h3>
            <p>Skilled at both on-site and off-site optimization, from content strategies to link building. Paid campaign creation and management. Google Analytics and Google Webmaster Tools.</p>
          </div>
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
        Project list
      </div>
    </section>
    <section className="callout">
      <div className="container">
        <h2>Get in touch</h2>
        <div className="social">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </section>
    <footer>
      <h2>Copyright 2019 Andrew Delos Reyes. All rights reserved.</h2>
    </footer>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
