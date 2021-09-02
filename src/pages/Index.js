/* eslint-disable */

import React, { useState, useEffect } from 'react';

import Main from '../layouts/Main';
import BlogSection from '../components/Blog/BlogSection';

import posts from '../data/blog/posts';

const BATCH_SIZE = 1;

const Index = () => {
  const reversePosts = posts.reverse().reduce((r, e, i) =>
    (i % BATCH_SIZE ? r[r.length - 1].push(e) : r.push([e])) && r, []);

  const [idx, updateIdx] = useState(reversePosts.length - 1);
  const [postsToShow, updatePostsToShow] = useState(reversePosts[idx]);

  const next = () => {
    updateIdx(currIdx => Math.max(currIdx - 1, 0), [idx]);
  };

  const prev = () => {
    updateIdx(currIdx => Math.min(currIdx + 1, reversePosts.length - 1), [idx]);
  };

  useEffect(() => updatePostsToShow(reversePosts[idx]));

  return (
    <Main description={"Steve Wang's thoughts"}>
      <div id="outer">
        <BlogSection data={postsToShow} />
        {idx < reversePosts.length - 1 ? <button className="prev-button" type="prev" onClick={prev}>prev</button> : null}
        {idx > 0 ? <button className="next-button" type="next" onClick={next}>next</button> : null}
      </div>
    </Main>
  );
};

export default Index;
