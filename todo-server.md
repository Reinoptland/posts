# Storing data using JSON-server

Setup

```
npm install -D json-server
```

Make a db.json

```json
{
  "posts": [
    {
      "id": 1,
      "author": "Rein",
      "text": "aksjfasdcvsbvsbvscv`sdc`sc"
    },
    {
      "id": 2,
      "author": "David",
      "text": "These things happen"
    },
    {
      "id": 3,
      "author": "Jeroen",
      "text": "You do not have to make it on Jeroen"
    },
    {
      "id": 4,
      "author": "Wouter",
      "text": "7 Productivity hacks for Asana"
    },
    {
      "author": "Miloud",
      "text": "Data driven growth hacking yo...",
      "id": 5
    }
  ],
  "comments": [
    {
      "id": 1,
      "commenter": "Wouter",
      "content": "Cool story bro"
    },
    {
      "id": 2,
      "commenter": "David",
      "content": "I see ... "
    }
  ]
}
```

Starting server

```
npx json-server --port 4000 --watch db.json --delay 1000
```

How to post

Example:

```javascript
addPost = (author, text) => {
  const newPost = { author: author, text: text };

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
};
```

How to delete

```javascript
deletePost = idToDelete => {
  fetch(`http://localhost:4000/posts/${idToDelete}`, {
    //`http://localhost:4000/posts/1`
    method: "DELETE"
  });

  const posts = this.state.posts.filter(post => post.id !== idToDelete);
  this.setState({ posts: posts });
};
```
