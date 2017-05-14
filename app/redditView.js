import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import  PostIndex  from './components/posts/post_index_container';
import PostDetail from './components/posts/post_detail';
import configureStore from './store';
import { Router, Scene } from 'react-native-router-flux';


const store = configureStore();
window.store = store;

const RedditView = () => (

  <Provider store={store}>
    <Router>
      <Scene key="home" component={PostIndex} title="Home" hideNavBar={true} initial />
      <Scene key="postDetail" component={PostDetail} title="postDetail" hideNavBar={true} />
    </Router>
  </Provider>
);

export default RedditView;
