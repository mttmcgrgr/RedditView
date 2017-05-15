import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TouchablHighlight  } from 'react-native';


class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
  }


  timeAgo(milliseconds){
    let currentTime = Date.now() * 1000;




  }

  render (){
    let post = this.props.post;
    let image = post.data.thumbnail.length > 10 ? post.data.thumbnail : "https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/reddit.png";

    return(
      <View style={styles.postIndexItem}>
        <Image
          style={styles.thumbnail}
          source={{uri: image}}
        />
      <View>
        <Text style={styles.subreddit}>
          {post.data.subreddit_name_prefixed}
        </Text>
        <Text style={styles.author}>
          submitted by {post.data.author}
        </Text>
        <TouchableOpacity onPress={this._goToPost}>
          <Text style={styles.title}>
            {post.data.title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.comments}>
            {post.data.num_comments} comments
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  postIndexItem : {
    paddingBottom: 20,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row'
  },
  thumbnail: {
    width: 100,
    height: 100,
    flexDirection: `column`,
    marginLeft: 10,
    marginRight: 10,
    alignSelf: `center`,
    marginTop: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: `bold`,
    paddingLeft: 5,
    paddingBottom: 10,
    top: 5,
    width: 200,
    alignSelf: 'flex-start',
    flexDirection: `column`
  },
  subreddit :{
    fontSize: 10,
    paddingBottom: 5,
    paddingLeft: 5,
    color: `#4381B6`,
    flexDirection: `column`
  },
  comments :{
    fontSize: 10,
    fontWeight: `bold`,
    paddingBottom: 5,
    paddingLeft: 5,
    color: `#4381B6`,
    flexDirection: `column`
  },
  author :{
    justifyContent: 'flex-start',
    fontSize: 10,
    paddingLeft: 5,
    color: `#4381B6`,
    flexDirection: `column`
  },



});

export default PostIndexItem;
