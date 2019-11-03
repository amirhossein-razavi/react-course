import React from 'react';

const defaultPost = {
  id: '',
  title: '',
  body: '',
};

const Post = ({ post = defaultPost, mode }) => {
  if (mode === 'selectedPost' || mode === 'Edit') {
    return (
      <div>
        <h2>{`${post.id} - ${post.title}`}</h2>
        <p>{post.body}</p>
      </div>
    );
  }

  return (
    <div />
  );
};

export default Post;
