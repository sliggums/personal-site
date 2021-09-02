import React from 'react';
import PropTypes from 'prop-types';

const CUTOFF = 30;

const BlogSnapshot = ({ data, cutoff }) => {
  const cut = cutoff && data.text && data.text.length > CUTOFF;
  const redirect = '/blog/'.concat(data.id);
  const text = cut
    ? data.text.substring(0, CUTOFF).concat('...')
    : data.text;
  const splitText = text.split('\n')
    .map((str) => (<p>{str}<br /><br /></p>));
  return (
    <div className="post" id={data.id}>
      <h2 className="blog-title">
        <a href={redirect}>
          {data.title}
        </a>
      </h2>
      <div className="blog-date">
        <p> {data.postDate} </p>
      </div>
      <hr />
      {cutoff
        ? <div className="post-text"><a href={redirect}>{splitText}</a></div>
        : <div className="post-text">{splitText}</div>}
    </div>
  );
};

BlogSnapshot.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    postDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    text: PropTypes.string.isRequired,
  }).isRequired,
  cutoff: PropTypes.bool.isRequired,
};

export default BlogSnapshot;
