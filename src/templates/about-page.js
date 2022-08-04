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
        <h1>PCWRA Members</h1>
    <figure class="snip1390">
  <img src="https://cdn.discordapp.com/attachments/914907771063894059/1004651664915042395/IMG_0634_1.jpg" class="profile" />
  <figcaption>
    <h2>Aennamaneni</h2>
      <h2>Ram Gopal Rao</h2>
    <h4>Chief Advisor</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="https://cdn.discordapp.com/attachments/914907771063894059/1004720156657852496/168C9966-7CD9-4B6C-A206-0C0797F52225.jpeg" class="profile" />
  <figcaption>
    <h2>Mohammed</h2>
      <h2>Abdul Waseem</h2>
    <h4>Joint Secretary</h4>
  </figcaption>
</figure>
      </div>
    </Layout>
  )
}

export default AboutPage
