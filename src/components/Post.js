import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  state = {
    comments: [
      { id: 1, commenter: "Wouter", content: "Cool story bro" },
      { id: 2, commenter: "David", content: "I see ... " }
    ]
  };
  render() {
    return (
      <div>
        <h1>Post</h1>
        <h2>Author: {this.props.author}</h2>
        <p>{this.props.text}</p>
        <div>
          {this.state.comments.map(comment => {
            return (
              <Comment
                key={comment.id}
                id={comment.id}
                commenter={comment.commenter}
                content={comment.content}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Post;
