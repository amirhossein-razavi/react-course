/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from '../../styles';


const AddPost = ({
  mode, onChange, onSave, onCancel,
}) => {
  if (mode === 'AddPost') {
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
              onChange={(e) => onChange('body', e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => onSave()}
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

export default AddPost;
