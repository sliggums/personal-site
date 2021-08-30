import React from 'react';
import PropTypes from 'prop-types';

import BlogSnapshot from './BlogSnapshot';

const getPosts = (posts) => posts.map((post) => (
  <BlogSnapshot
    data={post}
    cutoff
  />
));

const BlogSection = ({ data }) => (
  <div id="blogs">
    {getPosts(data)}
  </div>
);

BlogSection.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    postDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    text: PropTypes.string.isRequired,
  })),
};

BlogSection.defaultProps = {
  data: [],
};

export default BlogSection;
