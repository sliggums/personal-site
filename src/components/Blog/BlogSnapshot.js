import React from 'react';
import PropTypes from 'prop-types';

const CUTOFF = 3;

const BlogSnapshot = ({ data, cutoff }) => (
  <div className="post" id={data.id}>
    <h2 className="blog-title">{data.title}</h2>
    <div className="blog-date">
      <p> {data.postDate} </p>
    </div>
    <hr />
    <div className="post-text">
      <p>
        {cutoff && data.text && data.text.length > CUTOFF ? data.text.substring(0, CUTOFF).concat('...') : data.text}
      </p>
    </div>
  </div>
);

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
