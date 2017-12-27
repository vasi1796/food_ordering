import React, {Component} from 'react';
import {AppRegistry,Navigator} from 'react-native';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware, menu_reducer,order_reducer } from './redux';

// Create Redux store
const rootReducer = combineReducers({
    menu_reducer,
    order_reducer
});
const store = createStore(rootReducer, applyMiddleware(apiMiddleware));
store.dispatch({type: 'GET_MENU_DATA'});

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
        return (<Provider store={store}>
            <Navigator ref={(nav) => {
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
        }}/>
        </Provider>);
    }
}

AppRegistry.registerComponent('Food', () => Food);
