import React from 'react';
import PropTypes from 'prop-types';
import Votes from './Votes';
import Moment from 'moment';

function Post(props) {
  return(
    <div>
      <h3>{props.post.title}</h3>
      <p>{props.post.text}</p>
      <h6>{displayTimePosted(props.post.timePosted)} ago</h6>

      <Votes post={props.post} onDownvote={props.onDownvote} onUpvote={props.onUpvote}/>
    </div>
  );
}

function displayTimePosted(timePosted) {
  return timePosted.from(new Moment(), true);
}

Post.propTypes = {
  post: PropTypes.object,
  key: PropTypes.number,
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired
};

export default Post;
