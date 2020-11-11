import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <main>
          <h1>Coming soon</h1>
          <p>You've hit a dead end. It's either coming soon, or you need to recheck your link!</p>
          
          <a href="https://dkprobes.tech">Go back home</a> 
                 </main>
      </Layout>
    );
  }
}

export default NotFoundPage;
