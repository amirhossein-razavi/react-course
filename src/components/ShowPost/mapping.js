export default (store) => ({
  mode: store.getState().mode || '',
  selectedPost: store.getState().selectedPost,
});
