export default (store, originalProps) => ({
  selectedPost: store.getState().selectedPost || {},
  mode: store.getState().mode || '',
  index: originalProps.index,
  post: originalProps.post,
  onEdit: () => {

  },
  onSelect: (post) => {
    store.setState({
      selectedPost: { ...post },
      mode: 'selectedPost',
    });
  },
  onDelete: () => {

  },
});
