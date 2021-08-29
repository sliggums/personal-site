import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ data }) => (
  <div className="post" id={data.id}>
    <h1 className="blog-title">{data.title}</h1>
    <p className="blog-date">
      {data.postDate}
      <br />
      test
    </p>
  </div>
);

BlogPost.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    postDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default BlogPost;
