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
        Welcome to my megaphone. I am ~Dushyant~ DKP, a Software Engineer by profession. I write regularly about <a href="https://dkprobes.tech/Tech">Tech Concepts</a>, <a href="https://dkprobes.tech/Data-Structures">Data Structures and Algorithms</a> and <a href="https://dkprobes.tech/productivity">Productivity</a>, and more occasionally, about
         Markets, Foreign Affairs and my experiences working with the companies I have interned with.
        <br /> <br />
        I also occasionally send out newsletters of my writings, so if that interests you, subscribe with your emails below. If not, continue reading, by all means!

<a href="https://dkprobes.tech/Data-Structures">
<h3 style={{color: "#6875f5", padding: "5px"}}> Data Structures and Algorithms </h3></a> 
DSA is without a doubt, an extremely crucial skill for technical interviews, and 
being a Software Engineer myself, I have given my share of DSA interviews. 
Have failed in many, succeeded in some, learnt a lot through all of them. 
Here, too, I explain standard problems, by outlining the entire thinking process behind 
the problem, starting from a brute force solution, to optimize it step by step, with time and 
space complexities explained.
<iframe src="https://dkprobescode.substack.com/embed" style={{background:'#000', color:'#29ff14', marginLeft: '25%', marginBottom: '0', borderRadius: '19px', width:'350px', height:'100px'}} frameborder="0" scrolling="no"></iframe>

<a href="https://dkprobes.tech/Tech">
<h3 style={{size: '30dp', color: "#6875f5"}} >Tech</h3></a> 

Tech is best learnt when it's explained so that it's hands on, retention-first and focused - and that's what I bring to you. 
I have been developing full stack applications in Javascript, Python and related technologies 
for more than 3 years now, and regularly learn new technologies, and architectures, and write about the same, so if that interests you, do check this out. 

<iframe src="https://dkprobescode.substack.com/embed" style={{background:'#000', color:'#29ff14', marginLeft: '25%', marginBottom: '0', borderRadius: '19px', width:'350px', height:'100px'}} frameborder="0" scrolling="no"></iframe>

<a href="https://dkprobes.tech/productivity">
<h3 style={{size: '30dp', color: "#6875f5"}} >Productivity</h3></a> 

I routinely experiment with different productivity tools and techniques and write about the experiences, so if that interests you, check this out!

<a href="https://dkprobes.tech/Markets">
<h3 style={{color: "#6875f5"}}> Markets </h3></a> 
I analyze markets and business strategy in depth, and bring to you, some of 
the hottest stories in the market, from complete case studies of WeWork, Uber to 
analyses of stocks, and corporate concepts.
You can find all my posts on markets <Link to="/Markets">here</Link>

If you want my posts to reach you via mail, subscribe to my Markets and Affairs newsletter
<iframe src="https://dkprobesmarket.substack.com/embed" style={{background:'#000', color:'#29ff14', marginLeft: '25%', marginBottom: '0', borderRadius: '19px', width:'350px', height:'100px'}} frameborder="0" scrolling="no"></iframe>
 


<a href="https://dkprobes.tech/foreign">
<h3 style={{color: "#6875f5"}}> International Affairs </h3></a> 

I am politically informed, and I enjoy researching into international affairs and countries' histories - talk, the Afghan war, the US plans for the Middle East, and other exciting stuff, and I try to write about it
with a bit of analysis, without making it drawn out like the history books. 

Subscribe to my Markets and Affairs newsletter for the latest updates on the same
<iframe src="https://dkprobesmarket.substack.com/embed" style={{background:'#000', color:'#29ff14', marginLeft: '25%', marginBottom: '0', borderRadius: '19px', width:'350px', height:'100px'}} frameborder="0" scrolling="no"></iframe>

<br />
And most of all, I am always thinking on making things better - more interesting stuff, more ways to express it in, so do keep a check here to not miss something you might not want to be missing.

</p>




          {/* {posts
          
          .map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: rhythm(1),
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      style={{ boxShadow: 'none' }}
                      to={node.fields.slug}
                      rel="bookmark"
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>
                    {formatPostDate(node.frontmatter.date, langKey)}
                    {` • ${formatReadingTime(node.timeToRead)}`}
                  </small><br />
          <button style={{backgroundColor: '#6875f5', color: '#000000', radius: '5px'}}>Category: {node.frontmatter.tags}</button>
                </header>
                <p
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
                />
              </article>
            );
          })} */}
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
