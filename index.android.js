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
    BackAndroid
} from 'react-native';

var MenuPage = require('./MenuPage');
var MainPage = require('./MainPage');
var ViewOrderPage = require('./ViewOrderPage');

class Food extends Component {
    //componentWillMount() {
    //    BackAndroid.addEventListener('hardwareBackPress', this._handleBackButtonPress.bind(this));
    //}
    //_handleBackButtonPress() {
    //    console.log("yes")
    //}

    _renderScene(route, navigator) {
        if (route.id === 1) {
            return <MenuPage navigator={navigator}/>
        } else if (route.id === 2) {
            return <MainPage navigator={navigator}/>
        } else if (route.id === 3) {
            return <ViewOrderPage navigator={navigator}/>
        }
    }

    render() {
        return (<Navigator style={{
            flex: 1
        }} initialRoute={{
            id: 2
        }} renderScene={this._renderScene} configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid}/>);
    }
}
AppRegistry.registerComponent('Food', () => Food);
