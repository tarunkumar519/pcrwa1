import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query AboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const AboutPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
    <figure class="snip1390">
  <img src="https://cdn.discordapp.com/attachments/914907771063894059/1004651664915042395/IMG_0634_1.jpg" class="profile" />
  <figcaption>
    <h2></h2>
    <h4>UX Design</h4>
  </figcaption>
</figure>
      </div>
    </Layout>
  )
}

export default AboutPage
