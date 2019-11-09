import repository from '../../../repository';

const { postRepo } = repository;

export default (store, originalProps) => ({
  selectedPost: store.getState().selectedPost,
  mode: store.getState().mode || '',
  index: originalProps.index,
  post: originalProps.post,
  posts: store.getState().posts,

  onEdit: (post) => {
    store.setState({
      mode: 'Edit',
      selectedPost: { ...post },
    });
  },

  onSelect: (post) => {
    store.setState({
      selectedPost: { ...post },
      mode: 'selectedPost',
    });
  },

  onDelete: (post) => {
    // eslint-disable-next-line no-restricted-globals
    const onConfirm = confirm('are you sure');
    const defaultPost = {
      title: '',
      id: '',
      body: '',
    }


    if (onConfirm) {
      store.setState((state) => ({
        ...state,
        posts: state.posts.filter((p) => post.id !== p.id),
        selectedPost: defaultPost,
      }), () => {
        postRepo.savePosts(store.getState().posts);
      });
    }
  },

});
