import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import {v4} from 'uuid';

function PostList(props){
  return(
    <div>
      {Object.keys(props.postList).map(function(postId) {
        const post = props.postList[postId];
        return <Post post={post}
          key={post.id}
          onUpvote={props.onUpvote}
          onDownvote={props.onDownvote}/>
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired
};

export default PostList;
