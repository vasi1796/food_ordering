import React, {Component} from 'react';
import {AppRegistry,Navigator} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { apiMiddleware} from './src/api/caffeteria';
import reducer from './src/reducers'

const store = createStore(reducer, applyMiddleware(apiMiddleware));
store.dispatch({type: 'GET_MENU_DATA'});
store.dispatch({type: 'GET_ORDER_DATA'});
store.dispatch({type: 'GET_PEOPLE_DATA'});

const MenuPage = require('./src/components/MenuPage');
const MainPage = require('./src/components/MainPage');
const ViewOrderPage = require('./src/components/ViewOrderPage');

class Food extends Component {
    _renderScene(route, navigator) {
        if (route.id === 1) {
            return <MenuPage navigator={navigator} store={store}/>
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
                return Navigator.SceneConfigs.PushFromRight;}}/>
        </Provider>);
    }
}

AppRegistry.registerComponent('Food', () => Food);
