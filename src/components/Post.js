import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  render() {
    return (
      <div>
        <h1>Post</h1>
        <h2>Author: Rein</h2>
        <p>
          ALdhfkasjckasdcj`sdlkvjb`sdhvbsdhb`jhb j`xb j`sbdcj`hbx
          j`nzbxcj`bsdxjchb`sjdcbv`jhxbc`,jhxcb`jhxbcjshdbcvj`bdhs
        </p>
        <div>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    );
  }
}

export default Post;
