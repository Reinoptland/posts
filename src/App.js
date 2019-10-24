import React, { Component } from "react";
import "./App.css";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

class App extends Component {
  state = {
    posts: [
      { id: 1, author: "Rein", text: "aksjfasdcvsbvsbvscv`sdc`sc" },
      { id: 2, author: "David", text: "These things happen" },
      { id: 3, author: "Jeroen", text: "You do not have to make it on Jeroen" },
      { id: 4, author: "Wouter", text: "7 Productivity hacks for Asana" }
    ]
  };

  deletePost = id => {
    console.log("DELETE POST IN APP, ID:", id);
    // TODO: setState here at some point
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PostForm />
          {this.state.posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                text={post.text}
                id={post.id}
                deletePost={this.deletePost}
              />
            );
          })}
        </header>
      </div>
    );
  }
}

// Putting functions outside of app will not work:
// deletePost = id => {
//   console.log("DELETE POST IN APP, ID:", id);
//   this.setState needs set state of App,
//    won't work if you put this function outside of App
// };

export default App;
