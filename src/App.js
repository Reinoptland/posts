import React, { Component } from "react";
import "./App.css";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("http://localhost:4000/posts")
      .then(response => response.json())
      .then(posts => this.setState({ posts: posts }));
  }

  deletePost = idToDelete => {
    // console.log("DELETE POST IN APP, ID:", idToDelete);
    // TODO: setState here at some point

    fetch(`http://localhost:4000/posts/${idToDelete}`, {
      //`http://localhost:4000/posts/1`
      method: "DELETE"
    });

    const posts = this.state.posts.filter(post => post.id !== idToDelete);
    // console.log(posts); check if transformation worked
    this.setState({ posts: posts });
  };

  addPost = (author, text) => {
    // const id = Math.round(Math.random() * 100000000); // server will create an id
    // console.log("ADD POST IN APP, author: ", author, "text: ", text, id);
    const newPost = { author: author, text: text };
    // const posts = [...this.state.posts, newPost];

    fetch("http://localhost:4000/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(post => {
        const posts = [...this.state.posts, post];
        this.setState({ posts: posts });
      });

    // this.setState({ posts: posts });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PostForm addPost={this.addPost} />
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
