import { connect } from 'react-redux';
import { requestPosts }  from "../../actions/post_actions";
import PostIndex from './post_index';


const mapStateToProps = (state) => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  requestPosts: (tab) => dispatch(requestPosts(tab))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
