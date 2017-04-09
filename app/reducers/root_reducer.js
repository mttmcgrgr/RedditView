import { combineReducers } from 'redux';
import postsReducer from "./posts_reducer";


export const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
