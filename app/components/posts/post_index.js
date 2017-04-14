import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false
    };
    this.getPosts = this.getPosts.bind(this);
  }


  componentWillMount(){
    this.getPosts("hot");
  }


  getPosts (tab) {
    this.props.requestPosts(tab);
    this.setState({
      refresh: true
    });
  }



  render (){
    let firstPost = this.props.posts.hot[0] ? this.props.posts.hot[0].data : "Loading";
    let pic = {
      uri: firstPost.thumbnail
    };
    console.log(firstPost.thumbnail);
    return(
      <View style={styles.backgroundColorText}>
        <TouchableHighlight>
          <Text style={styles.includeFontPaddingText}>
            {firstPost.title}
          </Text>
        </TouchableHighlight>
        <Image source={pic} style={{top: 30, left: 30, width: 300, height: 300}}/>

      </View>
    );
  }
}

export default PostIndex;



const styles = StyleSheet.create({

  backgroundColorText: {
    top: 100,
    left: 5,
    backgroundColor: 'rgba(100, 100, 100, 0.3)'
  },
  includeFontPaddingText: {
    top: 200,
    fontSize: 15,
    backgroundColor: '#EEEEEE',
    color: '#000000',
    textAlignVertical: 'center',
    alignSelf: 'center',
  }
});



// componentDidMount(){
//   this.props.requestPosts("hot");
// }
