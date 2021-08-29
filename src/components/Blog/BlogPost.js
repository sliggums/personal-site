import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ data }) => (
  <div className="post" id={data.id}>
    <h2 className="blog-title">{data.title}</h2>
    <div className="blog-date">
      <p> {data.postDate} </p>
    </div>
    <hr />
    <div className="post-text">
      <p>
        test testtesttesttest <br />
        test
      </p>
    </div>
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
