import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';
import PostIndexItem from './post_index_item';


class PostIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render (){


    return(
      <View style={styles.backgroundColorText}>
      <ul className="post_content_main">
        {posts.map(post => (
          <PostIndexItem post={post} receiveTrack={this.props.receiveTrack} key={post.id} />
        ))}
      </ul>

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
