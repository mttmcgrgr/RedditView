import * as PostAPI from "../util/posts_api_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";

 export const receivePosts = (posts, tab) => ({
  type: RECEIVE_POSTS,
  posts,
  tab
});

export const requestPosts = (tab) => dispatch => (
  PostAPI.fetchPosts(tab).then(posts => dispatch(receivePosts(posts, tab)))
);
