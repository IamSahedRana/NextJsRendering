import React from 'react';
import Post from '../component/Post';

const PostPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  const posts = await res.json();

  return (
    <div>
      <h2>Post Page: {posts.length}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;