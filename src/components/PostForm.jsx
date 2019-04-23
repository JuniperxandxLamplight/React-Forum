import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function PostForm(props) {
  let _title = null;
  let _text = null;

  function handleNewPostSubmission(event){
    event.preventDefault();
    props.onAddNewPost({title: _title.value, text: _text.value, user: 'superCoolInternetGuy', votes: 0, id: v4(), timePosted: new Moment()});
    _title.value = '';
    _text.value = '';
  }

  return(
    <div>
      <form onSubmit={handleNewPostSubmission}>
        <input placeholder="Title"
          ref={(input) => {_title = input}}/>
        <textarea placeholder="text"
          ref={(input) => {_text = input}}/>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostForm;

PostForm.propTypes = {
  onAddNewPost: PropTypes.func
}
