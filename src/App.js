import React from 'react';

import postData from './data/posts';

import Post from './components/Post';
import PostList from './components/PostList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: postData || [],
      selectedPost: undefined,
    };

    this.onSelectPost = this.onSelectPost.bind(this);
  }

  onSelectPost(post) {
    this.setState({
      selectedPost: { ...post },
    });
  }

  render() {
    const { posts, selectedPost } = this.state;

    return (
      <div>
        <h1>
          {'Posts App | '}
          <small>{`${posts.length} posts`}</small>
        </h1>

        <hr />
        <PostList posts={posts} onSelect={this.onSelectPost} selectedPost={selectedPost} />
        <Post post={selectedPost} />
      </div>
    );
  }
}

export default App;
