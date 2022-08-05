import React from "react"
import { graphql } from "gatsby"
import Janardhan from "../../janardhan.png"
import Lingarao from "../../lingarao.png"
import Pasha from "../../pasha.png"
import Prasad from "../../prasad.png"
import Rameshgoud from "../../rameshgoud.png"
import Rameshkodumuri from "../../rameshkodumuri.png"
import Ramgopalrao from "../../ramgopalrao.png"
import Sampathkumar from "../../sampathkumar.png"
import Subbarao from "../../subbarao.png"
import Tarun from "../../tarun.png"
import Waseem from "../../waseem.png"
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
  <img src="{Lingarao}" class="profile" />
  <figcaption>
      <h2>Linga Rao</h2>
      <h2>Boyanapally</h2>
    <h4>President</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="{Janardhan}" class="profile" />
  <figcaption>
    <h2>Bhandari</h2>
      <h2>Janardhan Goud</h2>
    <h4>Working President/General Secretary</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="{Sampathkumar}" class="profile" />
  <figcaption>
      <h2>Sampath Kumar</h2>
      <h2>Neelam</h2>
    <h4>Treasurer</h4>
  </figcaption>
</figure>
    <figure class="snip1390">
  <img src="{Ramgopalrao}" class="profile" />
  <figcaption>
    <h2>Aennamaneni</h2>
      <h2>Ram Gopal Rao</h2>
    <h4>Chief Advisor</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="{rameshgoud.png}" class="profile" />
  <figcaption>
    <h2>Thallapally</h2>
    <h2>Ramesh Goud</h2>
    <h4>Legal Advisor</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="{Prasad}" class="profile" />
  <figcaption>
    <h2>Prasad Madadi</h2>
    <h4>Joint Secretary</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="{Subbarao}" class="profile" />
  <figcaption>
    <h2>Subbarao Gonuguntla</h2>
    <h4></h4>
  </figcaption>
</figure
        <figure class="snip1390">
  <img src="{Waseem}" class="profile" />
  <figcaption>
    <h2>Mohammed</h2>
      <h2>Abdul Waseem</h2>
    <h4>Joint Secretary</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="{Rameshkodumuri}" class="profile" />
  <figcaption>
    <h2>Ramesh</h2>
      <h2>Kodumuri</h2>
    <h4>Vice President</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="{Tarun}" class="profile" />
  <figcaption>
    <h2>Tarun Reddy</h2>
      <h2>Chintakuntla</h2>
    <h4>Executive Member</h4>
  </figcaption>
</figure>
        <figure class="snip1390">
  <img src="{Pasha}" class="profile" />
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
