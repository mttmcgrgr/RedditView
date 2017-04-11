import { RECEIVE_POSTS } from "../actions/post_actions";
import merge from "lodash/merge";

const defaultState = {
  hot: [],
  new: [],
  rising: [],
  top: []
};

const postsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
       case RECEIVE_POSTS:
         const newState = merge({}, state, {[action.tab] : action.posts});
         return newState;
       default:
         return state;
    }
};


export default postsReducer;
