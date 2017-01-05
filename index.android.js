import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';

var MenuPage = require('./components/MenuPage');
var MainPage = require('./components/MainPage');
var ViewOrderPage = require('./components/ViewOrderPage');

class Food extends Component {
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
        return (<Navigator ref={(nav) => {
            navigator = nav;
        }} style={{
            flex: 1
        }} initialRoute={{
            id: 2
        }} renderScene={this._renderScene.bind(this)} configureScene={(route, routeStack) => {
            if (route.id === 1) {
                return Navigator.SceneConfigs.PushFromRight;
            } else {
                return Navigator.SceneConfigs.PushFromLeft;
            }
        }}/>);
    }
}
AppRegistry.registerComponent('Food', () => Food);
