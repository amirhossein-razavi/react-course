/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from '../../styles';

const Post = ({
  post, onChange, onSave, onCancel, mode,
}) => {
  if (mode === 'Edit') {
    return (
      <form className="container" style={styles.container}>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              value={post.title || ''}
              onChange={(e) => onChange('title', e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Body</span>
            </div>
            <textarea
              className="form-control"
              placeholder="Body"
              rows="3"
              value={post.body || ''}
              onChange={(e) => onChange('body', e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => onSave(post)}
            >
              {'Save'}
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onCancel()}
            >
              {'Cancel'}
            </button>
          </div>

        </div>
      </form>
    );
  }

  return (
    <div />
  );
};

export default Post;
