# What we want to build

1. Display a post with a list comments
2. A post has an id, author and text
3. A comment has an id, commenter and content
4. We want to be able to delete a post
5. We want to be able to add a post

## Challenge: Make a todo list with steps you need to take to make this app

10 minutes

## Setup app

1. create-react-app
2. npm start

## Components

1. X Make a Post component, hardcode the author and text
1. X Make the Comment component, hardcode the commenter and content
1. X Make a Comment Form component, just the input fields and such

## Make Components have dynamic data, so state and props

1. X Think about where the data needs to live
1. X Think about what should be props and what should be state

## Decision on where state lives:

App: manages posts -> this.state.posts

Post:
manages comments -> this.state.comments
gets props from app: this.props.author and this.props.text

Comment:
manages nothing: so no state
gets props from Post: this.props.comment and this.props.content

## Add state to App -> pass down to Post

- X Define initial state in App for posts (array of object)
- X Render the posts in app using map
- X Pass props to the post component
- X Use props in Post to render the author and text dynamically

## Add state to Post -> pass down to Comment

- X Define initial state Post for comments -> arry of objects
- X Render comments in Post using map
- X Pass props to the comment component
- X Use props in Comment to render the commenter and content

## Delete a post

- App manages posts so define deletePost in App
- Pass deletePost callback as a prop the Post component
- Make a button in Post component to delete it
- Make an eventListener and handler so we can somethin when the button gets clicked
- Use our callback prop deletePost to call back to App
- Make sure deletePost changes the state of the App component (using setState)

## Adding post

- App manages posts so define addPost in App
- Pass the addPost callback as a prop to the PostForm component
- To PostForm into a controlled form (so reads value from state, and onChange handlers use setState)
- Get value from form onSubmit (also preventDefault)
- Use out callback prop addPost to call back to App
- Make sure addPost changes the state of the App component (using setState)
