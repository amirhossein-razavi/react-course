import React from 'react';
import PostItem from './PostItem';

const PostList = (props) => {
  const { posts } = props;
  return (
    <div>
      <h2>This is Post List</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>title</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {posts && posts.map((post, index) => (
              <PostItem
                key={post.id}
                post={post}
                index={index}
                {...props}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;
