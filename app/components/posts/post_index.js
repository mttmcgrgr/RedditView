import React from 'react';
import { connect } from 'react-redux';
import requestPosts  from "../../actions/post_actions";
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
    this.getPosts = this.getPosts.bind(this);
  }




  getPosts (tab) {
    this.props.requestPosts(tab);
    this.setState({
      refreshing: true
    });
  }



  render (){
    let firstPost = this.props.posts[0];

    return(
      <View>
        <TouchableHighlight>
          <Text style={styles.bigblue}>
            Title
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
}



const mapStateToProps = ({posts}) => ({
  posts
});

const mapDispatchToProps = dispatch => ({
  requestPosts: tab => dispatch(requestPosts(tab))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);





const styles = StyleSheet.create({

  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: "#6A97C8"
  }
});



// componentDidMount(){
//   this.props.requestPosts("hot");
// }
