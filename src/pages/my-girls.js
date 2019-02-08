import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import "../scss/post.scss"
import ImageTransformer from "../components/ImageTransformer"

export default ({ data }) => {
  console.log(data)
  const quotes = data.allQuotes.edges.map((quote, i) => (
    <div className="column is-half quote" key={i}>
      <ImageTransformer
        img={quote.node.src}
        quote={quote.node.content}
        size={quote.node.size}
        date={quote.node.date}/>
    </div>
  ))

  return (
    <Layout page="my-girls" title="My Girls">
      <div>
        <div className="post-body">
          <div className="container">
            <h1>One-liners from the little people in my house</h1>
            <div className="columns is-variable is-8" style={({flexWrap: 'wrap'})}>
              {quotes}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allQuotes {
      edges {
        node {
          content
          date(formatString: "DD MMMM, YYYY")
          src
          size
        }
      }
    }
  }
`