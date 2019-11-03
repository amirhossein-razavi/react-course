/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const AddPost = ({
  mode, onChange, onSaveA, onCancel,
}) => {
  if (mode === 'AddPost') {
    return (
      <div>
        <p>
          <label>Title:</label>
          <input
            type="text"
            onChange={(e) => onChange('title', e.target.value)}
          />
        </p>
        <p>
          <label>Body:</label>
          <textarea
            rows="3"
            onChange={(e) => onChange('body', e.target.value)}
          />
        </p>
        <p>
          <button
            type="button"
            onClick={() => onSaveA()}
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
  }


  return (
    <div />
  );
};

export default AddPost;
