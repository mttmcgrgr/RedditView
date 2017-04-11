import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
    this.getPosts = this.getPosts.bind(this);
  }


  componentWillMount(){
    this.getPosts("hot");
  }


  getPosts (tab) {
    this.props.requestPosts(tab);
    this.setState({
      refreshing: true
    });
  }



  render (){
    let firstPost = this.props.posts.hot[0].data ? this.props.posts.hot[0].data.title : "Hello";
    
    console.log(firstPost[0]);
    return(
      <View style={styles.backgroundColorText}>
        <TouchableHighlight>
          <Text style={styles.includeFontPaddingText}>
            {firstPost}
          </Text>
        </TouchableHighlight>

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
    fontSize: 120,
    backgroundColor: '#EEEEEE',
    color: '#000000',
    textAlignVertical: 'center',
    alignSelf: 'center',
  }
});



// componentDidMount(){
//   this.props.requestPosts("hot");
// }
