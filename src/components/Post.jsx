import React from 'react';
import PropTypes from 'prop-types';
import Votes from './Votes';

function Post(props) {
  return(
    <div>
      <h3>{props.post.title}</h3>
      <p>{props.post.text}</p>
      <Votes post={props.post} onDownvote={props.onDownvote} onUpvote={props.onUpvote}/>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  key: PropTypes.number,
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired
};

export default Post;
