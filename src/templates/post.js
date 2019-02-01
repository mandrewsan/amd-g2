import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import "../scss/blog.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout title={`${post.frontmatter.title} | Andrew Delos Reyes`}>
      <div className="post-body">
        <div className="container">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`