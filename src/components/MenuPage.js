'use strict';

import React, {Component} from 'react'
import {
    Text,
    View,
    TouchableNativeFeedback,
    Button,
    BackAndroid,
    Dimensions,
    ScrollView,
    Switch,
    ToastAndroid,
    ActivityIndicator,
    RefreshControl,
} from 'react-native';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';

var styles = require('../style/styles');
var win_width = Dimensions.get('window').width;
var win_height = Dimensions.get('window').height;

BackAndroid.addEventListener('hardwareBackPress', function() {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
});

@connect(
  state => ({
    menus: state.menu_reducer.menus,
    loading: state.menu_reducer.loading,
    totalPrice: state.ticket_reducer.price,
  }),
  dispatch => ({
    refresh: () => dispatch({type: 'GET_MENU_DATA'}),
  }),
)
class MenuPage extends Component {
    componentWillMount() {
      this.props.store.dispatch({type:'RESET_TICKET'});
    }
    render() {
        const { menus, loading, refresh, store, totalPrice } = this.props;
        var _scrollView : ScrollView;
        return (
            <View style={styles.parentView}>
                <Button style={{
                    width: win_width,
                    flex: 1
                }} onPress={this.gotoMainPage.bind(this)} title="Inapoi" color="#1565C0"/>
                <ScrollView
                    // Hide all scroll indicators
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={refresh}/>}>
                <View style={styles.orderMenu}>
                    <View style={styles.singleText}>
                        <Text style={styles.text}>Meniu</Text>
                    </View>
                    {menus ? 
                    
                        <ScrollView ref={(scrollView) => {
                        _scrollView = scrollView;
                        }} automaticallyAdjustContentInsets={false} horizontal={false} style={styles.menuDescription}>
                        {menus.map((menu, index) => <MenuItem
                            name={menu.title}
                            price={parseInt(menu.price)}
                            key={index}
                            dispatch={store.dispatch}
                        />)}
                        </ScrollView>
                    
                    : 
                    <ActivityIndicator animating={loading} size="large"/>}
                    <View style={styles.totalBoxText}>
                        <Text style={styles.text}>Total:{totalPrice}</Text>
                    </View>
                </View>
                <TouchableNativeFeedback onPress={this.orderFood.bind(this)} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.placeOrder}>
                        <Text style={styles.text}>Comanda</Text>
                    </View>
                </TouchableNativeFeedback>
                </ScrollView>
            </View>
        );
    }
    gotoMainPage() {
        this.props.navigator.pop();
    }
    orderFood() {
        this.props.store.dispatch({type:'SEND_ORDER_DATA'});
        ToastAndroid.show('Comanda plasata', ToastAndroid.SHORT);
    }
}

module.exports = MenuPage;
