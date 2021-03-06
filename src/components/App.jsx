import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import PostList from './PostList';
import PostForm from './PostForm';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: {

      },
      selectedPost: null
    };
    this.handleUpvoting = this.handleUpvoting.bind(this);
    this.handleDownvoting = this.handleDownvoting.bind(this);
    this.handleAddNewPost = this.handleAddNewPost.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateElapseTime(),
      5000
    );
  }
  componentWillUnmount(){
   clearInterval(this.waitTimeUpdateTimer);
 }

  handleAddNewPost(newPost){
    let newMasterPostList = Object.assign({}, this.state.masterPostList, {[newPost.id]: newPost});
    this.setState({masterPostList: newMasterPostList});
  }

  async handleUpvoting(post){
    await this.setState({selectedPost: post});
    const listToUpdate = this.state.masterPostList;
    console.log(listToUpdate)
    console.log(this.state.selectedPost)
    listToUpdate[this.state.selectedPost].votes = listToUpdate[this.state.selectedPost].votes + 1;
    this.setState({masterPostList: listToUpdate});
  }

  async handleDownvoting(post){
    await this.setState({selectedPost: post});
    const listToUpdate = this.state.masterPostList;
    listToUpdate[this.state.selectedPost].votes = listToUpdate[this.state.selectedPost].votes - 1;
    this.setState({masterPostList: listToUpdate});
  }

  updateElapseTime() {
    console.log("check");
    let newMasterPostList = this.state.masterPostList;
    for (let post in newMasterPostList) {
      newMasterPostList[post].formattedWaitTime = (newMasterPostList[post].timePosted).fromNow(true)
    }
    this.setState({masterPostList: newMasterPostList})
  }

  // handleOrganizingList() {
  //   let sortedMasterPostList =
  // }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" render={() => <PostList postList={this.state.masterPostList} onDownvote={this.handleDownvoting} onUpvote={this.handleUpvoting} />}  />
          <Route path="/newpost" render={() => <PostForm onAddNewPost={this.handleAddNewPost}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}



// Test-Post': {
//   title: 'A New Post',
//   text: 'Here is some text for this awesome post!',
//   username: 'user',
//   votes: 2,
//   id: 'Test-Post'
// }


export default App;
