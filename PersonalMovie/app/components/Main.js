import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { findMovie } from '../actions'
import Movie from './Movie';

class Main extends Component{
    constructor() {
        super()
        this.state = {
            title: '',
            execute: false
        }
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(e) {
        this.setState({
            title: e.nativeEvent.text
        })
    }

    _handleSubmit(e) {
      this.props.findMovie(this.state.title)
      this.props.navigator.push({
              title: this.state.title,
              component: Movie,
            })
      // findMovie(this.state.title)
      // console.log(findMovie(this.state.title))
    }

    render() {
      console.log('...', this.props.movie)
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.title} >Search Movie</Text>
                <TextInput style={styles.searchInput} value={this.state.title} onChange={this._handleChange} />
                <TouchableHighlight style={styles.button} onPress={this._handleSubmit}>
                    <Text style={styles.buttonText}> Search </Text>
                </TouchableHighlight>
            </View>
        )
    }
}



var styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 30,
      marginTop: 65,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#f39c12'
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
    buttonText: {
      fontSize: 18,
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

function mapStateToProps(state) {
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    findMovie: bindActionCreators(findMovie, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
