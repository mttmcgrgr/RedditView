import { connect } from 'react-redux';
import fetchPosts from "../actions/post_actions";
import PostIndex from "./post_index";

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: tab => dispatch(fetchPosts(tab))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
