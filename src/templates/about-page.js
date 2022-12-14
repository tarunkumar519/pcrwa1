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
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1001754121155645500/lingarao.jpg" class="profile" />
		<figcaption>
		<h2>Linga Rao</h2>
		<h2>Boyanapally</h2>
		<h4>President</h4>
		</figcaption>
		</figure>
        <figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1001754120971108372/janardhan.jpg" class="profile" />
		<figcaption>
		<h2>Bhandari</h2>
		<h2>Janardhan Goud</h2>
		<h4>Working President/General Secretary</h4>
		</figcaption>
		</figure>
        <figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1002173941693030481/sampath.jpg" class="profile" />
		<figcaption>
		<h2>Sampath Kumar</h2>
		<h2>Neelam</h2>
		<h4>Treasurer</h4>
		</figcaption>
		</figure>
		<figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1004651664915042395/IMG_0634_1.jpg" class="profile" />
		<figcaption>
		<h2>Aennamaneni</h2>
		<h2>Ram Gopal Rao</h2>
		<h4>Chief Advisor</h4>
		</figcaption>
		</figure>
        <figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1004730304361140234/98D8AA55-DFE5-49E9-9C83-A0172C4914B3.jpeg" class="profile" />
		<figcaption>
		<h2>Thallapally</h2>
		<h2>Ramesh Goud</h2>
		<h4>Legal Advisor</h4>
		</figcaption>
		</figure>
		<figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1005143853923319848/WhatsApp_Image_2022-08-05_at_9.23.51_PM_1_1.jpeg" class="profile" />
		<figcaption>
		<h2>Anagoni Veeranna</h2>
		<h4>Vice-President</h4>
		</figcaption>
		</figure>
		<figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1005144806768525382/WhatsApp_Image_2022-08-05_at_9.31.33_PM_1.jpeg" class="profile" />
		<figcaption>
		<h2>Kante Bhupal</h2>
		<h4>Vice-President</h4>
		</figcaption>
		</figure>
        <figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1001754119884771358/prasad.jpg" class="profile" />
		<figcaption>
		<h2>Prasad Madadi</h2>
		<h4>Joint Secretary</h4>
		</figcaption>
		</figure>
        <figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1002847249782538270/subbarao.jpeg" class="profile" />
		<figcaption>
		<h2>Subbarao Gonuguntla</h2>
		<h4>Vice-President</h4>
		</figcaption>
		</figure>
		<figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1005145720518615160/WhatsApp_Image_2022-08-05_at_9.38.46_PM_1_1.jpeg" class="profile" />
		<figcaption>
		<h2>Bhavana Rushi</h2>
		<h4>Advisor</h4>
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
        <figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1001754120732024952/ramesh.jpg" class="profile" />
		<figcaption>
		<h2>Ramesh</h2>
		<h2>Kodumuri</h2>
		<h4>Vice President</h4>
		</figcaption>
		</figure>
		<figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1005149450659954799/IMG_20220805_215143_1.jpg" class="profile" />
		<figcaption>
		<h2>vijay Kumar</h2>
		<h4>Advisor</h4>
		</figcaption>
		</figure>
        <figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1001754118731341864/tarun.jpeg" class="profile" />
		<figcaption>
		<h2>Tarun Reddy</h2>
		<h2>Chintakuntla</h2>
		<h4>Executive Member</h4>
		</figcaption>
		</figure>
        <figure class="snip1390">
		<img src="https://cdn.discordapp.com/attachments/914907771063894059/1001754120446816298/pasha.jpg" class="profile" />
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
