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
        <h1>PCRWA Members</h1>
        <figure class="snip1390">
  <img src="static/assets/1ef53473-abb9-4411-9fe5-0958078be49c.jpeg" class="profile" />
  <figcaption>
      <h2>Linga Rao</h2>
      <h2>Boyanapally</h2>
    <h4>President</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="static/assets/e1cea504-01f5-49d0-a751-af21f7651ddc.jpeg" class="profile" />
  <figcaption>
    <h2>Bhandari</h2>
      <h2>Janardhan Goud</h2>
    <h4>Working President/General Secretary</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="static/assets/a6517dcb-0cf4-477c-ba91-5548cc32cac7.jpeg" class="profile" />
  <figcaption>
      <h2>Sampath Kumar</h2>
      <h2>Neelam</h2>
    <h4>Treasurer</h4>
  </figcaption>
</figure>
    <figure class="snip1390">
  <img src="static/assets/67da8f1e-9d1c-43d8-8bf5-0b851f62825f.jpeg" class="profile" />
  <figcaption>
    <h2>Aennamaneni</h2>
      <h2>Ram Gopal Rao</h2>
    <h4>Chief Advisor</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="static/assets/efae5f71-0c2a-4eb7-b661-1348e0080b76.jpeg" class="profile" />
  <figcaption>
    <h2>Thallapally</h2>
    <h2>Ramesh Goud</h2>
    <h4>Legal Advisor</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="static/assets/51e23653-3d03-4795-95ee-df32d3b75153.jpeg" class="profile" />
  <figcaption>
    <h2>Prasad Madadi</h2>
    <h4>Joint Secretary</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="static/assets/a0c607f1-2c22-4328-a9e9-4586bd9bde10.jpeg" class="profile" />
  <figcaption>
    <h2>Mohammed</h2>
      <h2>Abdul Waseem</h2>
    <h4>Joint Secretary</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="static/assets/e96050a3-7101-4125-b468-1db0654b2f9c.jpeg" class="profile" />
  <figcaption>
    <h2>Ramesh</h2>
      <h2>Kodumuri</h2>
    <h4>Vice President</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="static/assets/719cdcc1-6468-488b-a9dc-b58980787a6b.jpeg" class="profile" />
  <figcaption>
    <h2>Tarun Reddy</h2>
      <h2>Chintakuntla</h2>
    <h4>Executive Member</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="static/assets/f413c6a2-eb7a-4011-b9f4-2e47093cc764.jpeg" class="profile" />
  <figcaption>
    <h2>Faqeer Pasha</h2>
      <h2>Mohammed</h2>
    <h4>Executive Member</h4>
  </figcaption>
</figure>

      </div>
    </Layout>
  )
}

export default AboutPage
