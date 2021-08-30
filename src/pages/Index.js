import React from 'react';

import Main from '../layouts/Main';
import BlogSection from '../components/Blog/BlogSection';

import posts from '../data/blog/posts';

const Index = () => (
  <Main
    description={"Steve Wang's thoughts"}
  >
    <BlogSection data={posts} />
  </Main>
);

export default Index;
