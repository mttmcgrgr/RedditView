import React from 'react';
import { ScrollView, View, Text, Image, ListView,
   TouchableOpacity, StyleSheet, TouchableHighlight, TabBarIOS  } from 'react-native';
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
      <View style={styles.backgroundColorText}>
        <Text style={styles.mainTitle}>
          Reddit View
        </Text>
        <Text></Text>
        <ListView
          dataSource={dataSource}
          renderRow={this.renderRow}
        />
        <TabBarIOS
          unselectedTintColor="yellow"
          tintColor="white"
          unselectedItemTintColor="red"
          barTintColor="darkslateblue"
        >
          <TabBarIOS.Item
            title="Blue Tab"
            selected={this.state.currentTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}>
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}


export default PostIndex;


const styles = StyleSheet.create({

  backgroundColorText: {

    backgroundColor: '#F5FCFF'
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
    fontSize: 20,
    color: "#6A97C8",
    fontWeight: 'bold',
    top: 75
  }
});
