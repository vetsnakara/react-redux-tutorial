const initState = {
  posts: [
    { id: 1, title: "one", body: "body 1" },
    { id: 2, title: "two", body: "body 2" },
    { id: 3, title: "three", body: "body 3" }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    const newPosts = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
