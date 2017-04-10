import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../../actions/post_actions";
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount(){
    this.props.fetchPosts("hot");
  }


  getPosts (tab) {
    this.props.fetchPosts(tab);
    this.setState({
      refreshing: true
    });
  }



  render (){
    let firstPost = this.props.posts[0];

    return(
      <View  style={styles.bigblue}>
        <TouchableHighlight onPress={this.getPosts("hot")}>
          <Text>{firstPost.title}</Text>
        </TouchableHighlight>

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





const styles = StyleSheet.create({

  bigblue: {
    fontWeight: 'bold',
    fontSize: 30,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6A97C8"
  }

});
