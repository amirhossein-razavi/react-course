import React from 'react';
import { connect } from 'cato-react-store';

import mapping from './mapping';

const styles = {
  selectedPost: {
    fontWeight: 'bold',
    backgroundColor: '#ececec',
    border: '1px solid #ccc',
  },
};

const PostItem = ({ post, index, onSelect, onEdit, onDelete, selectedPost, mode }) => {
  const isSelected = (selectedPost.id === post.id) && mode === 'selectedPost';
  const Editing = (selectedPost.id === post.id) && mode === 'Edit';

  return (
    <tr style={isSelected ? styles.selectedPost : {}}>
      <td>{index + 1}</td>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onSelect(post)}
          disabled={isSelected}
        >
          {isSelected ? 'Selected' : 'Select'}
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onEdit(post)}
        >
          {Editing ? 'Editing' : 'Edit'}
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(post)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default connect(mapping)(PostItem);
