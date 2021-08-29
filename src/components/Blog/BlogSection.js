import React from 'react';
import PropTypes from 'prop-types';

import BlogPost from './BlogPost';

const getPosts = (posts) => posts.map((post) => (
  <BlogPost data={post} />
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
  })),
};

BlogSection.defaultProps = {
  data: [],
};

export default BlogSection;
