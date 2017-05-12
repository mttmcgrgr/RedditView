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
    this.renderSeparator = this.renderSeparator.bind(this);
  }


  componentDidMount(){
    this.getPosts("hot");
  }


  getPosts(tab) {
    this.setState({ refresh: true });
    this.props.requestPosts(tab || this.state.currentTab).then(
      (res) => {
        this.setState({
           refresh: false,
           currentTab: tab
         });
      }
    );
  }

  renderRow (post) {
    return (
      <PostIndexItem post={post}/>
    );
  }

  renderSeparator (sectionID, rowID) {
    return (
      <View key={`${sectionID}-${rowID}`} style={styles.separator}/>
    );
  }


  render (){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let posts = this.props.posts[this.state.currentTab];
    let dataSource = ds.cloneWithRows(posts);

    let threadView =
    <ListView
      dataSource={dataSource}
      renderRow={this.renderRow}
      renderSeparator={this.renderSeparator}
      style={styles.listView}
    />;

    let tabBar =
    <TabBarIOS
      unselectedTintColor="white"
      tintColor="yellow"
      unselectedItemTintColor="red"
      barTintColor="#6A97C8">
      <TabBarIOS.Item
          title="Hot"
          selected={this.state.currentTab === 'hot'}
          onPress={() => {
            this.getPosts("hot");
          }}>
          {threadView}
        </TabBarIOS.Item>
        <TabBarIOS.Item
            title="Top"
            selected={this.state.currentTab === 'top'}
            onPress={() => {
              this.getPosts("top");
            }}>
            {threadView}
          </TabBarIOS.Item>
          <TabBarIOS.Item
              title="New"
              selected={this.state.currentTab === 'new'}
              onPress={() => {
                this.getPosts("new");
              }}>
              {threadView}
            </TabBarIOS.Item>
            <TabBarIOS.Item
                title="Rising"
                selected={this.state.currentTab === 'rising'}
                onPress={() => {
                  this.getPosts("rising");
                }}>
                {threadView}
              </TabBarIOS.Item>
      </TabBarIOS>;


    return(
      <View style={styles.backgroundColorText}>
        <Text style={styles.mainTitle}>
          Reddit View
        </Text>
        {tabBar}
      </View>
    );
  }
}


export default PostIndex;


const styles = StyleSheet.create({

  backgroundColorText: {
    backgroundColor: '#F5FCFF',
    flex: 1
  },
  includeFontPaddingText: {
    top: 20,
    fontSize: 15,
    backgroundColor: '#EEEEEE',
    color: '#000000',
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
  mainTitle: {
    fontSize: 25,
    color: "#6A97C8",
    fontWeight: 'bold',
    top: 30
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
  },
  listView: {
    top: 50,
    flexDirection: `column`
  },
  tabName: {
    flex:0,
    height:1,
    width: 1
  }

});
