import React from 'react';
import { connect } from 'cato-react-store';

import mapping from './mapping';

const Post = ({ selectedPost = {}, mode }) => {
  console.log(selectedPost);
  if (mode === 'selectedPost' || mode === 'Edit') {
    return (
      <div>
        <h2>{`${selectedPost.id} - ${selectedPost.title}`}</h2>
        <p>{selectedPost.body}</p>
      </div>
    );
  }

  return (
    <div />
  );
};

export default connect(mapping)(Post);
