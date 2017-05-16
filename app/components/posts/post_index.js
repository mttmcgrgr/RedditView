import React from 'react';
import { ScrollView, View, Text, Image, ListView,
   TouchableOpacity, StyleSheet, TouchableHighlight, TabBarIOS  } from 'react-native';
import Tabs from 'react-native-tabs';
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
    this.tabBar = this.tabBar.bind(this);
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

  tabBar(){
    return (
        <Tabs selected={this.state.currentTab} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.getPosts(el.props.name)}>
            <Text name="hot" selectedIconStyle={styles.tabStyle}>Hot</Text>
            <Text name="top" selectedIconStyle={styles.tabStyle}>Top</Text>
            <Text name="new" selectedIconStyle={styles.tabStyle}>New</Text>
            <Text name="rising" selectedStyle={styles.tabStyle}>Rising</Text>
        </Tabs>
    );
  }

  listView(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let posts = this.props.posts[this.state.currentTab];
    let dataSource = ds.cloneWithRows(posts);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
        style={styles.listView}
      />
    );
  }


  render (){

    return(
      <View style={styles.backgroundColorText}>
          <Text style={styles.mainTitle}>
            Reddit View
          </Text>
          <View>
            {this.listView()}
          </View>
          <View style={styles.tabBar}>
            {this.tabBar()}
          </View>
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
  tabBar: {
    bottom: 30,
    flexDirection: `column`
  },
  tabStyle: {
    borderTopWidth:2,
    borderTopColor:'red'
  }

});
