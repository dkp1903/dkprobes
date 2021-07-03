import React from 'react';
import profilePic from '../assets/dkp-avatar.png';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`DKP`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Probes by{' '}
          <a href="https://dkp.today">Dushyant Pathak</a>.{' '}
            I talk about Software Engineering and the rest of the world
        </p>

        
      </div>
    );
  }
}

export default Bio;
