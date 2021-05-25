import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a style={{marginRight: '5px'}}href="https://dkp.today" target="_blank" rel="noopener noreferrer">
            My Website
          </a>
          <a href="https://dkprobes.tech/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>
        <a
          href="https://twitter.com/dkp1903"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/dkp1903"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        &bull;{' '}
        <a
          href="https://linkedin.com/in/dkp1903"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    );
  }
}

export default Footer;
