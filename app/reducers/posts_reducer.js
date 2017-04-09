import { RECEIVE_POSTS } from "../actions/post_actions";
import merge from "lodash/merge";

const defaultState = {
  hot: [],
  new: [],
  rising: [],
  top: []
};

const postsReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
    switch(action.type){
       case RECEIVE_POSTS:
         newState[action.tab] = action.posts;
         return newState;
       default:
         return state;
    }
};


export default postsReducer;
