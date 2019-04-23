import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import {v4} from 'uuid';

function PostList(props){
  let postArray = [];

  function makeArray() {
    for (let post in props.postList) {
      let thisPost = props.postList[post]
      postArray.push(thisPost);
    }
    postArray.sort(function(a, b) {
      return a.votes - b.votes
    });
    postArray.reverse();
    console.log("sorted?", postArray);
  }

  makeArray();

  return(
    <div>
      {postArray.map((post) =>
        <Post post={post}
          key={post.id}
          onUpvote={props.onUpvote}
          onDownvote={props.onDownvote}/>
      )}
    </div>
  );
}
// {Object.keys(props.postList).map(function(postId) {
//   const post = props.postList[postId];
//   return <Post post={post}
//     key={post.id}
//     onUpvote={props.onUpvote}
//     onDownvote={props.onDownvote}/>
// })}

PostList.propTypes = {
  postList: PropTypes.object,
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired
};

export default PostList;
