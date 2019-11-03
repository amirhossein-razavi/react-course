import initialData from '../data/posts';

const savePosts = (posts) => {
  window.localStorage.posts = JSON.stringify(posts);
};

const loadPosts = () => {
  const storagePosts = window.localStorage.posts;
  if (!storagePosts) {
    savePosts(initialData);
    return initialData;
  }

  const postsData = JSON.parse(storagePosts);
  return postsData;
};

export default {
  loadPosts,
  savePosts,
};
