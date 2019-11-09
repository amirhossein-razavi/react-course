/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {connect} from 'cato-react-store';
import styles from '../../styles';

import mapping from './mapping';

const AddPost = ({
  selectedPost, mode, onChange, onSave, onCancel,
}) => {
  if (selectedPost && mode === 'AddPost') {
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
              value={selectedPost.title}
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
              value={selectedPost.body}
              onChange={(e) => onChange('body', e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => onSave(selectedPost)}
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

export default connect(mapping)(AddPost);
