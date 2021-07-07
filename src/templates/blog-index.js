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
                    I like doing four things in life - Read, Write, Be Sarcastic and play football. The first 3 you can find here - I read tons of stuff - code, articles, analyses, and I write about my interpretations and experiences about those.
                    From software engineering concepts that you can retain, to how I fire fought my way through 2 years in the software industry, to the mightily unpopular yet equally necessary data structures and algorithms, to some experience driven
                    information on the non-code aspects of the software world, to market analyses, there'll be a lot of writing and a lot of sarcasm.

                    I can't guarantee making this a go-to resource for anything, but what I can guarantee is that you'll never be bored with reading what I write.
       

<a href="https://dkprobes.tech/ds">
<h3 style={{color: 'var(--textLink)', padding: "5px 20px"}}>DSA</h3></a> 

<p style={{padding: "0px 20px"}}>
I've lived long and seen enough in the software industry to realize that you can't get a job without knowing DSA, and so, rather than forcing myself to do it, I try to develop interest in it by writing about my thought process.
I do NOT intend to make this a complete end-to-end resource for every DSA problem in the world. I only write about problems that stimulated my thinking, or that I considered important, and I write about them in a way that could help you
retain the approaches better.
</p>

<a href="https://dkprobes.tech/sen/tech">
<h3 style={{size: '30dp', padding: "5px 20px", color: 'var(--textLink)'}} >Full Stack Development</h3></a> 

<p style={{padding: "0px 20px"}}>
      Full Stack Development is what's known as firefighting by software engineering veterans, or so I've been told. No, really - software engineering is always about some idiot out there messing something up, and you rushing with your firehose(read, your 'machine') to try
      and deal with it as best as you can. I keep running into fires all over the place, and I keep picking up a few tips and tricks of the trade - which include some concepts, tutorials and hacks. 

</p>

<a href="https://dkprobes.tech/sen/experience">
<h3 style={{size: '30dp', padding: "5px 20px", color: 'var(--textLink)'}} >The world of software engineering - experiences</h3></a> 

<p style={{padding: "0px 20px"}}>
      Here, I write about some common concepts, processes, reviews and issues in the world of software engineering. I also keep note of my experiences working at each of the companies I have worked with.
</p>

<a href="https://dkprobes.tech/sen/productivity">
<h3 style={{size: '30dp', padding: "5px 20px", color: 'var(--textLink)'}} >Productivity</h3></a> 
<p style={{padding: "0px 20px"}}>
I routinely experiment with different productivity tools and techniques and write about the experiences, so if that interests you, check this out!
</p>

<a href="https://dkprobes.tech/analysis">
<h3 style={{color: 'var(--textLink)', padding: "5px 20px"}}> Analysis </h3></a> 
<p style={{padding: "5px 20px"}}>
I analyze markets and business strategy in depth, and bring to you, some of 
the hottest stories in the market, from complete case studies of WeWork, Uber to 
analyses of stocks, and corporate concepts.
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
