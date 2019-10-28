import React from 'react';

const defaultPost = {
  id: '',
  title: 'No post selected',
  body: '',
};

const Post = ({ post = defaultPost }) => (
  <div>
    <h2>{`${post.id} - ${post.title}`}</h2>
    <p>{post.body}</p>
  </div>
);

export default Post;
