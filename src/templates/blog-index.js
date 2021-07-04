import { Link, graphql } from 'gatsby';
import { formatPostDate, formatReadingTime } from '../utils/helpers';

import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Panel from '../components/Panel';
import React from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';

class BlogIndexTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const langKey = this.props.pageContext.langKey;

    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <Layout location={this.props.location} title={siteTitle}>
          <SEO />
            <aside>
                <Bio />
            </aside>
            <main>             
                <p>
                    Welcome to DKProbes. I am Dushyant(DKP), a Full Stack Engineer. I love writing about challenging problems that I come across and/or face either in my work life, my personal projects, or stuff that I read/research on.
                    <br />
                    My posts(I call them probes), are intuitive, focused, sarcastic and focus on retention rather than quantity and overwhelming content.
                    <br />
                    You can find stuff on Data Structures and Algorithms, Full Stack Development, some market analyses and some experiences about the non-tech aspect of the software engineering world. 
       
<h2 style={{color: "#6875f5"}}>Tech</h2>
<u>
<a href="https://dkprobes.tech/ds">
<h3 style={{color: "#6875f5", padding: "5px 40px"}}>DSA</h3></a> 
</u>
<p style={{padding: "0px 40px"}}>
I've lived long and seen enough in the software industry to realize that you can't get a job without knowing DSA, and so, rather than forcing myself to do it, I try to develop interest in it by writing about my thought process.
I do NOT intend to make this a complete end-to-end resource for every DSA problem in the world. I only write about problems that stimulated my thinking, or that I considered important, and I write about them in a way that could help you
retain the approaches better.
</p>
<u>
<a href="https://dkprobes.tech/sen/tech">
<h3 style={{size: '30dp', padding: "5px 40px", color: "#6875f5"}} >Full Stack Development</h3></a> 
</u>
<p style={{padding: "0px 40px"}}>
      Full Stack Development is what's known as firefighting by software engineering veterans, or so I've been told. No, really - software engineering is always about some idiot out there messing something up, and you rushing with your firehose(read, your 'machine') to try
      and deal with it as best as you can. I keep running into fires all over the place, and I keep picking up a few tips and tricks of the trade - which include some concepts, tutorials and hacks. 
<br /><br />


</p>
<h2 style={{color: "#6875f5"}}>Non Tech</h2>

<a href="https://dkprobes.tech/sen/productivity">
<h3 style={{size: '30dp', padding: "5px 40px", color: "#6875f5"}} >Productivity</h3></a> 
<p style={{padding: "0px 40px"}}>
I routinely experiment with different productivity tools and techniques and write about the experiences, so if that interests you, check this out!
</p>
<a href="https://dkprobes.tech/analysis">
<h3 style={{color: "#6875f5", padding: "5px 40px"}}> Others </h3></a> 
<p style={{padding: "5px 40px"}}>
I analyze markets and business strategy in depth, and bring to you, some of 
the hottest stories in the market, from complete case studies of WeWork, Uber to 
analyses of stocks, and corporate concepts, my personal internship experiences, events of international importance and more!
You can find all my posts on markets <Link to="/Markets">here</Link>
</p>

</p>


        </main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
        
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
      
    ) {
      edges {
        node {
          fields {
            slug
            langKey
            
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            tags
            
          }
        }
      }
    }
  }
`;
