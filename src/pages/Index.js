import React, { useState, useEffect } from 'react';

import Main from '../layouts/Main';
import BlogSection from '../components/Blog/BlogSection';

import posts from '../data/blog/posts';

const BATCH_SIZE = 3;

const Index = () => {
  const rev = posts.reduce((r, e, i) => (i % BATCH_SIZE
    ? r[r.length - 1].push(e) : r.push([e])) && r, []);

  const [idx, updateIdx] = useState(rev.length - 1);
  const [postsToShow, updatePostsToShow] = useState(rev[idx].reverse());

  const next = (() => updateIdx((currIdx) => Math.max(currIdx - 1, 0), [idx]));
  const prev = (() => updateIdx((currIdx) => Math.min(currIdx + 1, rev.length - 1), [idx]));

  useEffect(() => updatePostsToShow(rev[idx]));

  return (
    <Main description={"Steve Wang's thoughts"}>
      <div id="outer">
        <BlogSection data={postsToShow} />
        {idx < rev.length - 1 ? <button className="prev-button" type="button" onClick={prev}>newer</button> : null}
        {idx > 0 ? <button className="next-button" type="button" onClick={next}>older</button> : null}
      </div>
    </Main>
  );
};

export default Index;
