import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
    TouchableNativeFeedback,
    Navigator,
    Button
} from 'react-native';

class ViewOrderPage extends Component {
    render() {
        return (<Button onPress={this.gotoMainPage.bind(this)} title="Go Back" color="steelblue" accessibilityLabel="Learn more about purple"/>);
    }
    gotoMainPage() {
        this.props.navigator.push({id: 2, name: 'MainPage'});
    }

}
const styles = StyleSheet.create({});
module.exports = ViewOrderPage;
