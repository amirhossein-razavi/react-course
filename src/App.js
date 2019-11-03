import React from 'react';

import repository from './repository';
import styles from './styles';

import Post from './components/Post';
import PostList from './components/PostList';

const { postRepo } = repository;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: postRepo.loadPosts() || [],
      selectedPost: undefined,
    };

    this.onSelectPost = this.onSelectPost.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onSelectPost(post) {
    this.setState({
      selectedPost: { ...post },
    });
  }

  onSave(post) {
    this.setState((state) => ({
      posts: state.posts.map((p) => (
        p.id === post.id
          ? { ...post }
          : p
      )),
      selectedPost: undefined,
    }), () => {
      const { posts } = this.state;

      postRepo.savePosts(posts);
    });
  }

  onChange(prop, value) {
    this.setState((state) => ({
      selectedPost: {
        ...state.selectedPost,
        [prop]: value,
      },
    }));
  }

  onCancel() {
    this.setState({
      selectedPost: undefined,
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
        <div style={styles.postList}>
          <PostList posts={posts} onSelect={this.onSelectPost} selectedPost={selectedPost} />
        </div>
        <Post
          post={selectedPost}
          onCancel={this.onCancel}
          onChange={this.onChange}
          onSave={this.onSave}
        />
      </div>
    );
  }
}

export default App;
