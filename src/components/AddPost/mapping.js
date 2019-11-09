import repository from '../../repository';

const { postRepo } = repository;

export default (store) => ({
  selectedPost: store.getState().selectedPost,
  mode: store.getState().mode || '',
  posts: store.getState().posts,

  onChange: (prop, value) => {
    store.setState((state) => ({
      selectedPost: {
        ...state.selectedPost,
        [prop]: value,
      },
    }));
  },

  onSave: (post) => {
    const posts = store.getState().posts;
    let newPosts;

    console.log(posts);

    if (post.userId === 'newUser') {
      newPosts = [...posts, { ...post, userId: '' }];
    } else {
      newPosts = posts.map((p) => (
        p.id === post.id
          ? { ...post }
          : p
      ));
    }

    store.setState(() => ({
      mode: '',
      posts: newPosts,
      selectedPost: {},
    }), () => {
      postRepo.savePosts(newPosts);
    });
  },

  onCancel: () => {
    store.setState({
      selectedPost: {},
      mode: '',
    });
  },

});
