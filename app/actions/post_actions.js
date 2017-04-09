import PostAPI from "../util/posts_api_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";

const receivePosts = (posts, tab) => ({
  type: RECEIVE_POSTS,
  posts,
  tab
});

export const fetchPosts = tab => dispatch => (
  PostAPI.fetchPosts(tab).then(posts => dispatch(receivePosts(posts, tab)))
);
