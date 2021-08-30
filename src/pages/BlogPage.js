import React from 'react';
import { useParams } from 'react-router-dom';

import Main from '../layouts/Main';

import BlogSnapshot from '../components/Blog/BlogSnapshot';

import posts from '../data/blog/posts';

const postMapping = new Map();
posts.forEach((post) => {
  postMapping.set(post.id, post);
});

const BlogPage = () => {
  const params = useParams();
  const parsed = Number(params.id);
  return (
    <Main title={params.id}>
      <div id="blogs">
        {!Number.isNaN(parsed) && postMapping.has(parsed)
          ? <BlogSnapshot data={postMapping.get(parsed)} />
          : null}
      </div>
    </Main>
  );
};

export default BlogPage;
