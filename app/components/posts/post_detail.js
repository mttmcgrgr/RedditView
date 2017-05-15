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
