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
          Hey there! Thanks for stopping by. You're here either because you have heard me rant about how well I explain Tech, teach DSA or write markets. If you heard something else from me,
          please excuse my spurious claims, and just give this a shot.
Here's what I talk about : 
<a href="https://dkprobes.tech/tech">
<h3 style={{size: '30dp', color: "#FF8A00"}} >Tech</h3></a> 
Ever thought how good it'd be if you could actually remember all the tech stuff you read? Well, I did, and decided to do something about it, something, I, well, rant a lot about - go funny, rhetoric, short and crystal clear - 
from Full Stack Web Development to Natural Language Processing to the latest frameworks that are coming in like snow in Chicago(EH!?), I got you covered.

Just sign up for my <a href='https://dkprobescode.substack.com/subscribe'>Tech and DSA newsletter</a>, and you won't be disappointed.

<a href="https://dkprobes.tech/Data-Structures">
<h3 style={{color: "#FF8A00"}}> Data Structures and Algorithms </h3></a> 
DSA is without a doubt, an extremely crucial skill for technical interviews, and 
being a Software Engineer myself, I have given my share of DSA interviews. 
Have failed in many, succeeded in some, learnt a lot through all of them. 
Here, too, I explain standard problems, by outlining the entire thinking process behind 
the problem, starting from a brute force solution, to optimize it step by step, with time and 
space complexities explained.

Just sign up for my <a href='https://dkprobescode.substack.com/subscribe'>Tech and DSA newsletter</a>, and you won't be disappointed.

<a href="https://dkprobes.tech/Markets">
<h3 style={{color: "#FF8A00"}}> Markets </h3></a> 
I analyze markets and business strategy in depth, and bring to you, some of 
the hottest stories in the market, from complete case studies of WeWork, Uber to 
analyses of stocks, and corporate concepts.

If you want my posts to reach you via mail, subscribe to my Substack 
<a href="https://dkprobesmarket.substack.com/subscribe">here</a>. 
You can find all my posts on markets <Link to="/Markets">here</Link>


<a href="https://dkprobes.tech/foreign">
<h3 style={{color: "#FF8A00"}}> International Affairs </h3></a> 


If you want my posts to reach you via mail, subscribe to my Substack 
<a href="https://dkprobesmarket.substack.com/subscribe">here</a>. 
You can find all my posts on markets <Link to="/Markets">here</Link>



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
          <button style={{backgroundColor: '#FF8A00', color: '#000000', radius: '5px'}}>Category: {node.frontmatter.tags}</button>
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
