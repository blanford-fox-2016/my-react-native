import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class Movie extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    console.log('ajajajaja', this.props.movie)
    return (
      <View style={{padding: 100}}>
        <Text>
          {this.props.movie.Title}
        </Text>
      </View>
    )
  }
}
// export const Movie = (props) => {
//   <View>
//     <Text> props.title </Text>
//   </View>
// }
