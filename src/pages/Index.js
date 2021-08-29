import React from 'react';

import Main from '../layouts/Main';
import BlogSection from '../components/Blog/BlogSection';

import posts from '../data/blog/posts';

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <BlogSection data={posts} />
  </Main>
);

export default Index;
