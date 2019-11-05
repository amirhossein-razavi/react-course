import repository from './repository';

const { postRepo } = repository;

export default (store) => ({
  posts: store.getState().posts,
  initializePosts: () => {
    store.setState({
      posts: postRepo.loadPosts(),
    });
  },
  addPost: () => {
    const { posts } = store.getState();
    const postsLen = Number(posts.length);
    const lastId = Number(posts[postsLen - 1].id);
    store.setState({
      selectedPost: {
        userId: 'newUser',
        id: lastId + 1,
        title: '',
        body: '',
      },
      mode: 'AddPost',
    });
  },
});
