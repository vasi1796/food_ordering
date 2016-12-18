'use strict';

import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicator,
    Image,
    Button
} from 'react-native';

class MenuPage extends Component {
    render() {
        return (<Button onPress={this.gotoMainPage.bind(this)} title="Go Back" color="steelblue" accessibilityLabel="Learn more about purple"/>);
    }
    gotoMainPage() {
        this.props.navigator.push({id: 2, name: 'MainPage'});
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    }
});
module.exports = MenuPage;
