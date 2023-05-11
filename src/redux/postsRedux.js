//selectors
export const getPostById = ({ posts }, postId) =>
  posts.find((post) => post.id === postId);

export const getAllPosts = ({ posts }) => posts;
// actions
const createActionName = (actionName) => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');

// action creators
export const removeCard = (payload) => ({
  type: REMOVE_POST,
  payload,
});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter((post) => post.id !== action.payload);
    default:
      return statePart;
  }
};

export default postsReducer;
