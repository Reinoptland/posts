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
              />
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
