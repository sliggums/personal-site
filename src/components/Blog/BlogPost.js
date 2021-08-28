import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = (data) => (
  <p>
    {data.postDate}: {data.title}
  </p>
);

BlogPost.propTypes = {
  data: PropTypes.shape({
    postDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired
}

export default BlogPost;