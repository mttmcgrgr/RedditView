import React from 'react';
import { connect } from 'react-redux';
import fetchPosts from "../../actions/post_actions";
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);

  }


  fetchPosts () {
    
  }

  render (){
    return(
      <View>
        <Text>
          This is the post index!
        </Text>
      </View>
    );
  }
}


const mapStateToProps = ({posts}) => ({
  posts
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: tab => dispatch(fetchPosts(tab))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
