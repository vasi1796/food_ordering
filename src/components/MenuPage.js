'use strict';

import React, {Component} from 'react'
import {
    Text,
    View,
    TouchableNativeFeedback,
    BackAndroid,
    ScrollView,
    ToastAndroid,
    RefreshControl,
    Image,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import {SEND_ORDER_DATA} from '../constants/ActionTypes'

const styles = require('../style/styles');

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
    componentWillUnmount() {
      this.props.store.dispatch({type:'RESET_TICKET'});
    }
    render() {
        const { menus, loading, refresh, store, totalPrice } = this.props;
        let _scrollView : ScrollView;
        return (
            <View style={styles.parentView}>
                <View style={{flexDirection: 'row',backgroundColor:"#1565C0",paddingTop:5,paddingBottom:5,alignItems: 'center',padding:10}} elevation={5}>
                    <TouchableOpacity onPress={this.gotoMainPage.bind(this)}>
                        <Image style={{width:30,height:25}}
                               source={require('../images/back_left.png')}/>
                    </TouchableOpacity>
                    <Text style={[styles.text,{textAlign:'center',
                                fontWeight:'bold',fontSize:20,
                                flex:1 }]}>Meniu
                    </Text>
                    <Text style={{width:40}}></Text>
                </View>
                <ScrollView style={styles.menuDescription}
                    // Hide all scroll indicators
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={refresh}/>}>
                <View>
                    {menus ? 
                        <ScrollView ref={(scrollView) => {
                        _scrollView = scrollView;
                        }} automaticallyAdjustContentInsets={false} horizontal={false} style={styles.menuDescription}>
                        {menus.map((menu, index) => <MenuItem
                            name={menu.title}
                            price={parseFloat(menu.price)}
                            ingredients={menu.ingredients}
                            key={index}
                            dispatch={store.dispatch}
                        />)}
                        </ScrollView>
                    :
                        ToastAndroid.show('Nu se poate conecta la baza de date', ToastAndroid.SHORT)
                    }
                </View>
                </ScrollView>
                <View style={styles.totalBoxText}>
                        <Text style={styles.text}>Total: {totalPrice.toFixed(1)} RON</Text>
                </View>
                <TouchableNativeFeedback onPress={this.orderFood.bind(this)} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.placeOrder}>
                        <Text style={styles.text}>Comanda</Text>
                    </View>
                </TouchableNativeFeedback>
                
            </View>
        );
    }
    gotoMainPage() {
        this.props.navigator.pop();
    }
    orderFood() {
        this.props.store.dispatch({type:SEND_ORDER_DATA});
        ToastAndroid.show('Comanda plasata', ToastAndroid.SHORT);
    }
}

module.exports = MenuPage;
