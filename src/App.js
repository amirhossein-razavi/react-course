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

        {/* <div style={styles.showPost}>
      <Post />
    </div>

    <div style={styles.showPost}>
      <ShowPost />
    </div>

    <div style={styles.showPost}>
      <AddPost />
    </div> */}
      </div>
    );
  }
}

// class AppContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       posts: postRepo.loadPosts() || [],
//       selectedPost: {},
//       mode: '',
//       post: {},
//     };

//     this.onSelectPost = this.onSelectPost.bind(this);
//     this.onSave = this.onSave.bind(this);
//     this.onChange = this.onChange.bind(this);
//     this.onCancel = this.onCancel.bind(this);
//     this.onDelete = this.onDelete.bind(this);
//     this.onEdit = this.onEdit.bind(this);
//     this.addPost = this.addPost.bind(this);
//   }

//   onSelectPost(post) {
//     this.setState({
//       selectedPost: { ...post },
//       mode: 'selectedPost',
//     });
//   }

//   onSave(post) {
//     const { posts } = this.state;
//     let newPosts;

//     if (post.userId === 'newUser') {
//       newPosts = [...posts, { ...post, userId: '' }];
//     } else {
//       newPosts = posts.map((p) => (
//         p.id === post.id
//           ? { ...post }
//           : p
//       ));
//     }

//     this.setState(() => ({
//       mode: '',
//       posts: newPosts,
//       selectedPost: {},
//     }), () => {
//       postRepo.savePosts(newPosts);
//     });
//   }

//   onDelete(post) {
//     // eslint-disable-next-line no-restricted-globals
//     const onConfirm = confirm('are you sure');

//     if (onConfirm) {
//       this.setState((state) => ({
//         ...state,
//         posts: state.posts.filter((p) => post.id !== p.id),
//       }), () => {
//         const { posts } = this.state;
//         postRepo.savePosts(posts);
//       });
//     }
//   }

//   onChange(prop, value) {
//     this.setState((state) => ({
//       selectedPost: {
//         ...state.selectedPost,
//         [prop]: value,
//       },
//     }));
//   }

//   onCancel() {
//     this.setState({
//       selectedPost: {},
//       mode: '',
//     });
//   }

//   onEdit(selectedPost) {
//     this.setState({
//       mode: 'Edit',
//       selectedPost: { ...selectedPost },
//     });
//   }

//   addPost() {
//     const { posts } = this.state;
//     const postsLen = Number(posts.length);
//     const lastId = Number(posts[postsLen - 1].id);
//     this.setState({
//       selectedPost: {
//         userId: 'newUser',
//         id: lastId + 1,
//         title: '',
//         body: '',
//       },
//       mode: 'AddPost',
//     });
//   }

//   render() {
//     const {
//       posts, selectedPost, mode,
//     } = this.state;

//     return (
//       <App
//         posts={posts}
//         selectedPost={selectedPost}
//         mode={mode}
//         addPost={this.addPost}
//         onSelectPost={this.onSelectPost}
//         onSave={this.onSave}
//         onDelete={this.onDelete}
//         onChange={this.onChange}
//         onCancel={this.onCancel}
//         onEdit={this.onEdit}
//       />
//     );
//   }
// }

export default connect(mapping)(App);
