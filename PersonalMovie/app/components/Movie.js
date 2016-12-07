import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    Image,
} from 'react-native';


var styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
    mainContainer: {
      flex: 1,
      padding: 30,
      marginTop: 65,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#9b59b6'
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center',
      color: '#fff'
    },
    searchInput: {
      height: 50,
      padding: 4,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 0,
      color: 'white'
    },
    textDescription: {
      fontSize: 15,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: 'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 0,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }

})


  class Movie extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={styles.backgroundImage}
          source={{uri: this.props.movie.Poster}}
          />
        <Text style={styles.textDescription}>
          Rating : {this.props.movie.imdbRating}
        </Text>
        <Text style={styles.textDescription}>
          Year: {this.props.movie.Year}
        </Text>
        <Text style={styles.textDescription}>
          Movie Genre : {this.props.movie.Genre}
        </Text>
        <Text style={styles.textDescription}>
          Movie Description: {this.props.movie.Plot}
        </Text>
      </View>
    )
  }
}



function mapStateToProps(state) {
  return {
    movie: state.movie
  }
}


export default connect(mapStateToProps)(Movie)
