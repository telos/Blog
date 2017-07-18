import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  // Automatically called by React as soon as component has shown on the screen
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex);
