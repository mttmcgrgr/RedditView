import React from 'react';
import { ScrollView, View, Text, Image, ListView,
   TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';
import PostIndexItem from './post_index_item';


class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      currentTab: "hot",
    };
    this.getPosts = this.getPosts.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }


  componentDidMount(){
    this.getPosts("hot");
  }


  getPosts(tab) {
    this.setState({ refresh: true });
    this.props.requestPosts(tab || this.state.currentTab).then(
      (res) => {
        this.setState({ refresh: false});
      }
    );
  }

  renderRow (post) {
    return (
      <PostIndexItem post={post}/>
    );
  }



  render (){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let posts = this.props.posts[this.state.currentTab];
    let dataSource = ds.cloneWithRows(posts);
    console.log(this.props.posts);

    return(
      <View>
        <Text>Reddit View</Text>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
        />
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
  },
  mainTitle: {
    fontSize: 15,
    color: "#6A97C8"
  }
});
