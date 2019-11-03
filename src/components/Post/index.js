/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Post = ({ post, onChange, onSave, onCancel }) => {
  if (!post) {
    return <div />;
  }

  return (
    <div>
      <p>
        <label>Title:</label>
        <input
          type="text"
          value={post.title || ''}
          onChange={(e) => onChange('title', e.target.value)}
        />
      </p>
      <p>
        <label>Body:</label>
        <textarea
          rows="3"
          value={post.body || ''}
          onChange={(e) => onChange('body', e.target.value)}
        />
      </p>
      <p>
        <button
          type="button"
          onClick={() => onSave(post)}
        >
          {'Save'}
        </button>
        <button
          type="button"
          onClick={() => onCancel()}
        >
          {'Cancel'}
        </button>
      </p>
    </div>
  );
};

export default Post;
