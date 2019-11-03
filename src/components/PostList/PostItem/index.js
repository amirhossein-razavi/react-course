import React from 'react';

const styles = {
  selectedPost: {
    fontWeight: 'bold',
    backgroundColor: '#ececec',
    border: '1px solid #ccc',
  },
};

const PostItem = (props) => {
  const {
    post, index, onSelect, onEdit, onDelete, selectedPost = {},
  } = props;

  const isSelected = selectedPost.id === post.id;

  return (
    <tr style={isSelected ? styles.selectedPost : {}}>
      <td>{index + 1}</td>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>
        <button
          type="button"
          onClick={() => onSelect(post)}
          disabled={isSelected}
        >
          {isSelected ? 'Selected' : 'Select'}
        </button>
      </td>
      <td>
        <button
          type="button"
          onClick={() => onEdit(post)}
        >
          {isSelected ? 'Editing' : 'Edit'}
        </button>
      </td>
      <td>
        <button
          type="button"
          onClick={() => onDelete(post)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default PostItem;
