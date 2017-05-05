import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';


class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
    let post = this.props.post;
    return(
      <View style={styles.backgroundColorText}>
        <TouchableHighlight>
          <Text style={styles.includeFontPaddingText}>
            {post.data.title}
          </Text>
        </TouchableHighlight>
        <Text style={styles.includeFontPaddingText}>
          {post.data.subreddit}
        </Text>
        <Text style={styles.includeFontPaddingText}>
          {post.data.author}
        </Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: post.data.thumbnail}}
        />
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

export default PostIndexItem;
