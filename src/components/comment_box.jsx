import React, {Component} from 'react';

export default class CommentBox extends Component{
  render(){
    return(
      <div className="comment-box"> 
        <textarea />
        <button>Create comment</button>
      </div> 
    );
  }
}
