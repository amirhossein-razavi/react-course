import React from 'react';

import repository from './repository';
import styles from './styles';

import Post from './components/Post';
import ShowPost from './components/ShowPost';
import PostList from './components/PostList';
import AddPost from './components/AddPost';

const { postRepo } = repository;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: postRepo.loadPosts() || [],
      selectedPost: {},
      mode: '',
      post: {},
    };

    this.onSelectPost = this.onSelectPost.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  onSelectPost(post) {
    this.setState({
      selectedPost: { ...post },
      mode: 'selectedPost',
    });
  }

  onSave(post) {
    const { posts, selectedPost } = this.state;

    if (selectedPost.userId === 11) {
      posts.push(selectedPost);

      this.setState(() => ({
        mode: '',
        selectedPost: {},
      }), () => {
        postRepo.savePosts(posts);
      });
    } else {
      this.setState(() => ({
        posts: posts.map((p) => (
          p.id === post.id
            ? { ...post }
            : p
        )),
        selectedPost: {},
        mode: '',
      }), () => {
        postRepo.savePosts(posts);
      });
    }
  }

  onDelete(post) {
    // eslint-disable-next-line no-restricted-globals
    const onConfirm = confirm('are you sure');

    if (onConfirm) {
      this.setState((state) => ({
        ...state,
        posts: state.posts.filter((p) => post.id !== p.id),
      }), () => {
        const { posts } = this.state;
        postRepo.savePosts(posts);
      });
    }
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
      selectedPost: {},
      mode: '',
    });
  }

  onEdit(selectedPost) {
    this.setState({
      mode: 'Edit',
      selectedPost: { ...selectedPost },
    });
  }

  addPost() {
    const { posts } = this.state;
    const postsLen = Number(posts.length);
    const lastId = Number(posts[postsLen - 1].id);
    this.setState({
      selectedPost: {
        userId: 11,
        id: lastId + 1,
        title: '',
        body: '',
      },
      mode: 'AddPost',
    });
  }

  // onSaveA() {
  //   const { posts, selectedPost } = this.state;

  //   posts.push(selectedPost);

  //   this.setState(() => ({
  //     mode: '',
  //     selectedPost: {},
  //   }), () => {
  //     postRepo.savePosts(posts);
  //   });
  // }


  render() {
    const {
      posts, selectedPost, mode,
    } = this.state;

    return (
      <div>
        <div>
          <h1>
            {'Posts App | '}
            <small>{`${posts.length} posts`}</small>
          </h1>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addPost()}
          >
            Add Post
          </button>
        </div>
        <hr />

        <div style={styles.postList}>
          <PostList
            posts={posts}
            onSelect={this.onSelectPost}
            selectedPost={selectedPost}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
            mode={mode}
          />
        </div>

        <div style={styles.showPost}>
          <Post
            post={selectedPost}
            onCancel={this.onCancel}
            onChange={this.onChange}
            onSave={this.onSave}
            mode={mode}
          />
        </div>

        <div style={styles.showPost}>
          <ShowPost post={selectedPost} mode={mode} />
        </div>

        <div style={styles.showPost}>
          <AddPost
            mode={mode}
            onChange={this.onChange}
            onSave={this.onSave}
            onCancel={this.onCancel}
          />
        </div>

      </div>
    );
  }
}

export default App;
