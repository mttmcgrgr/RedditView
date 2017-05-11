import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';


class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    let post = this.props.post;
    let imgStyle = post.data.thumbnail.length > 10 ? styles.thumbnail : styles.noThumbnail;

    return(
      <View style={styles.postLayout}>
      <Text style={styles.subreddit}>
        /r/{post.data.subreddit}
      </Text>
      <Text style={styles.author}>
        {post.data.author}
      </Text>
      <TouchableHighlight>
        <Text style={styles.title}>
          {post.data.title}
        </Text>
      </TouchableHighlight>
      <Image
        style={imgStyle}
        source={{uri: post.data.thumbnail}}
      />
      </View>
    );
  }

}

const styles = StyleSheet.create({

  title: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 5,
    flexWrap: 'wrap',
    top: 5,
    alignSelf: `flex-start`,
    width: 270,
    position: `relative`,
    flexDirection: `row`
  },
  subreddit :{
    fontSize: 10,
    paddingBottom: 5,
    paddingLeft: 5,
    color: `#4381B6`
  },
  author :{
    justifyContent: 'flex-start',
    fontSize: 10,
    paddingLeft: 5,
    color: `#4381B6`
  },
  postLayout : {

    paddingBottom: 20,
    backgroundColor: '#EEEEEE',
    flexDirection: 'column'
  },
  thumbnail: {
    width: 90,
    height: 90,
    flexWrap: `wrap`,
    alignSelf: `flex-end`,
    marginRight: 10,
    position: `relative`,
  },
  noThumbnail: {
    height: 1
  }


});

export default PostIndexItem;
