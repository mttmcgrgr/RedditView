import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import  PostIndex  from './components/posts/post_index_container';
import configureStore from './store';
import { Router, Scene } from 'react-native-router-flux';


const store = configureStore();
window.store = store;

const RedditView = () => (

  <Provider store={store}>
    <Router>
      <Scene key="home" component={PostIndex} title="Reddit View" hideNavBar={true} initial />
    </Router>
  </Provider>
);

export default RedditView;
