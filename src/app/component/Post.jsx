import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="border-2 border-white text-center p-4 rounded-lg">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;