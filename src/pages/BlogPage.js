import React from 'react';
import { useParams } from 'react-router-dom';

import Main from '../layouts/Main';

const BlogPage = () => {
  const params = useParams();
  return (
    <Main
      title={params.id}
      description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
      + 'co-founder and CTO of Arthena, and YC Alumni.'}
    >
      <div className="post">
        <p> {params.id} </p>
      </div>
    </Main>
  );
};

export default BlogPage;
