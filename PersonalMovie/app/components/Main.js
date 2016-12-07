import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native';


export default class Main extends Component(
    constructor() {
        super()
        this.state = {
            title: ''
        }
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(e) {
        this.setState({
            username: e.nativeEvent.text
        })
    }

    _handleSubmit(e) {

    }


    render() {
        return (
            <View>
                <Text>Search Your Fav Movie</Text>
                <TextInput value={this.state.title} onChange={this._handleChange} />
                <TouchableHighlight onPress={this._handleSubmit}>
                    <Text> Search </Text>
                </TouchableHighlight>
            </View>
        )
    }
)