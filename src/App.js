import React from 'react';
import { connect } from 'cato-react-store';

import mapping from './mapping';
import styles from './styles';

import Post from './components/Post';
import ShowPost from './components/ShowPost';
import PostList from './components/PostList';
import AddPost from './components/AddPost';

class App extends React.PureComponent {

  componentDidMount() {
    const { posts, initializePosts } = this.props;

    if (!posts) {
      initializePosts();
    }
  }

  render() {
    const { posts = [], addPost } = this.props;

    return (
      <div className="container">
        <div>
          <h1>
            {'Posts App | '}
            <small>{`${posts.length} posts`}</small>
          </h1>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => addPost()}
          >
            {'Add Post'}
          </button>
        </div>
        <hr />

        <div style={styles.postList}>
          <PostList />
        </div>

        <div style={styles.showPost}>
          <Post />
        </div>

        <div style={styles.showPost}>
          <ShowPost />
        </div>

        <div style={styles.showPost}>
          <AddPost />
        </div>
      </div>
    );
  }
}

export default connect(mapping)(App);
