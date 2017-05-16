import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';


class PostDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    let { post } = this.props;

    return(
      <View style={styles.backgroundColorText}>

          <Text style={styles.subreddit}>
            {post.data.subreddit_name_prefixed}
          </Text>
          <Text style={styles.author}>
            submitted by {post.data.author}
          </Text>
          <Text style={styles.title}>
            {post.data.title}
          </Text>
          <Text style={styles.comments}>
            {post.data.num_comments} comments
          </Text>

      </View>

    );
  }

}

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

export default PostDetail;







// import React from 'react';
// import { ScrollView, View, Text, Image, ListView,
//    TouchableOpacity, StyleSheet, TouchableHighlight, TabBarIOS  } from 'react-native';
// import Tabs from 'react-native-tabs';
// import PostIndexItem from './post_index_item';
//
//
// class PostIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       refresh: false,
//       currentTab: "hot",
//     };
//     this.getPosts = this.getPosts.bind(this);
//     this.renderRow = this.renderRow.bind(this);
//     this.renderSeparator = this.renderSeparator.bind(this);
//     this.listView = this.listView.bind(this);
//   }
//
//
//   componentDidMount(){
//     this.getPosts("hot");
//   }
//
//
//   getPosts(tab) {
//     this.setState({ refresh: true });
//     this.props.requestPosts(tab || this.state.currentTab).then(
//       (res) => {
//         this.setState({
//            refresh: false,
//            currentTab: tab
//          });
//       }
//     );
//   }
//
//   renderRow (post) {
//     return (
//       <PostIndexItem post={post}/>
//     );
//   }
//
//   renderSeparator (sectionID, rowID) {
//     return (
//       <View key={`${sectionID}-${rowID}`} style={styles.separator}/>
//     );
//   }
//
//   tabBar(){
//     return (
//         <Tabs selected={this.state.currentTab} style={{backgroundColor:'white'}}
//               selectedStyle={{color:'red'}} onSelect={el=>this.setState({currentTab:el.props.name})}>
//             <Text name="first">First</Text>
//             <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Second</Text>
//             <Text name="third">Third</Text>
//             <Text name="fourth" selectedStyle={{color:'green'}}>Fourth</Text>
//             <Text name="fifth">Fifth</Text>
//         </Tabs>
//     );
//   }
//
//   listView(){
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     let posts = this.props.posts[this.state.currentTab];
//     let dataSource = ds.cloneWithRows(posts);
//     return (
//       <ListView
//         dataSource={dataSource}
//         renderRow={this.renderRow}
//         renderSeparator={this.renderSeparator}
//         style={styles.listView}
//       />
//     );
//   }
//
//
//   render (){
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     let posts = this.props.posts[this.state.currentTab];
//     let dataSource = ds.cloneWithRows(posts);
//
//     let threadView =
//     <ListView
//       dataSource={dataSource}
//       renderRow={this.renderRow}
//       renderSeparator={this.renderSeparator}
//       style={styles.listView}
//     />;
//
//     let tabBar =
//     <TabBarIOS
//       unselectedTintColor="white"
//       tintColor="yellow"
//       unselectedItemTintColor="red"
//       barTintColor="#6A97C8">
//       <TabBarIOS.Item
//           title="Hot"
//           selected={this.state.currentTab === 'hot'}
//           onPress={() => {
//             this.getPosts("hot");
//           }}>
//           {threadView}
//         </TabBarIOS.Item>
//         <TabBarIOS.Item
//             title="Top"
//             selected={this.state.currentTab === 'top'}
//             onPress={() => {
//               this.getPosts("top");
//             }}>
//             {threadView}
//           </TabBarIOS.Item>
//           <TabBarIOS.Item
//               title="New"
//               selected={this.state.currentTab === 'new'}
//               onPress={() => {
//                 this.getPosts("new");
//               }}>
//               {threadView}
//             </TabBarIOS.Item>
//             <TabBarIOS.Item
//                 title="Rising"
//                 selected={this.state.currentTab === 'rising'}
//                 onPress={() => {
//                   this.getPosts("rising");
//                 }}>
//                 {threadView}
//               </TabBarIOS.Item>
//       </TabBarIOS>;
//
//
//     return(
//       <View style={styles.backgroundColorText}>
//         <Text style={styles.mainTitle}>
//           Reddit View
//         </Text>
//         {tabBar}
//       </View>
//     );
//   }
// }
//
//
// export default PostIndex;
//
//
// const styles = StyleSheet.create({
//
//   backgroundColorText: {
//     backgroundColor: '#F5FCFF',
//     flex: 1
//   },
//   includeFontPaddingText: {
//     top: 20,
//     fontSize: 15,
//     backgroundColor: '#EEEEEE',
//     color: '#000000',
//     textAlignVertical: 'center',
//     alignSelf: 'center',
//   },
//   mainTitle: {
//     fontSize: 25,
//     color: "#6A97C8",
//     fontWeight: 'bold',
//     top: 30
//   },
//   separator: {
//     height: 1,
//     backgroundColor: 'white',
//   },
//   listView: {
//     top: 50,
//     flexDirection: `column`
//   },
//   tabName: {
//     flex:0,
//     height:1,
//     width: 1
//   }
//
// });
//
