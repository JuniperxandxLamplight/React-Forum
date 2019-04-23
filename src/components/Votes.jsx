import React from 'react';
import PropTypes from 'prop-types';

function Votes(props) {
  return(
    <div>
      <img  src="https://img.icons8.com/ios-glyphs/30/000000/up.png" onClick={() => {props.onUpvote(props.post.id);}}/>
      <h5>{props.post.votes}</h5>
      <img src="https://img.icons8.com/ios-glyphs/30/000000/down.png" onClick={() => {props.onDownvote(props.post.id);}} />
    </div>
  );
}

Votes.propTypes = {
  post: PropTypes.object,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
};

export default Votes;
