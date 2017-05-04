import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';
import PostIndexItem from './post_index';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false
    };
    this.getPosts = this.getPosts.bind(this);
  }


  componentDidMount(){
    this.getPosts("hot");
  }


  getPosts (tab) {
    this.props.requestPosts(tab);
    this.setState({
      refresh: true
    });
  }



  render (){

    let posts = this.props.posts ? this.props.posts : "Loading";

    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
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
