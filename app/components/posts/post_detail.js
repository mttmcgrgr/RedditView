import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TouchableHighlight  } from 'react-native';


class PostDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render (){

    return(
      <View style={styles.backgroundColorText}>
        <TouchableHighlight>
          <Text style={styles.includeFontPaddingText}>
            {firstPost.title}
          </Text>
        </TouchableHighlight>
        <Text style={styles.includeFontPaddingText}>
          {firstPost.subreddit}
        </Text>
        <Text style={styles.includeFontPaddingText}>
          {firstPost.author}
        </Text>
        <Image source={pic} style={{top: 30, left: 30, width: 300, height: 300}}/>

      </View>

    )


  }




}

export default PostDetail;
