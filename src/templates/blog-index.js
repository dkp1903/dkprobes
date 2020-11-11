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
I talk about three things : 
<a href="https://dkprobes.tech/Tech">
<h3 style={{size: '30dp', color: "#faed27"}} >Tech</h3></a> I love explaining how things work, in a sarcasm-dosed, funny way, with crazy examples so that you get a feel of the topic. I talk about Full Stack Web Development, Android, Natural Language Processing. 

If you want my posts to reach you via mail, subscribe to my Substack <a href="https://dkprobestech.substack.com/subscribe" target="_blank">here</a>. You can find all my posts on tech <Link to="/Tech">here</Link>
<a href="https://dkprobes.tech/Markets">
<h3 style={{color: "#faed27"}}> Markets </h3></a> I analyze markets and business strategy in depth, and bring to you, some of the hottest stories in the market, from complete case studies of WeWork, Uber to analyses of stocks, and corporate concepts.

If you want my posts to reach you via mail, subscribe to my Substack <a href="https://dkprobesmarket.substack.com/subscribe">here</a>. You can find all my posts on markets <Link to="/Markets">here</Link>
<a href="https://dkprobes.tech/Data-Structures">
<h3 style={{color: "#faed27"}}> Data Structures and Algorithms </h3></a> DSA is without a doubt, an extremely crucial skill for technical interviews, and being a Software Engineer myself, I have given my share of DSA interviews. Have failed in many, succeeded in some, learnt a lot through all of them. Here, too, I explain standard problems, by outlining the entire thinking process behind the problem, starting from a brute force solution, to optimize it step by step, with time and space complexities explained.

If you want my posts to reach you via mail, subscribe to my Substack <a href="https://dkprobescode.substack.com/subscribe" target="_blank">here</a>. You can find all my posts on DSA <Link to="/Data-Structures">here</Link>



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
          <button style={{backgroundColor: '#faed27', color: '#000000', radius: '5px'}}>Category: {node.frontmatter.tags}</button>
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
