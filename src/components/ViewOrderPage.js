import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions,
    Button,
    BackAndroid,
    ScrollView,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import OrderItem from './OrderItem';
import {GET_ORDER_DATA} from '../constants/ActionTypes';

var styles = require('../style/styles');
var win_width = Dimensions.get('window').width;

BackAndroid.addEventListener('hardwareBackPress', function() {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
});

@connect(
  state => ({
    order: state.order_reducer.order,
    loading: state.order_reducer.loading,
  }),
  dispatch => ({
    refresh: () => dispatch({type: GET_ORDER_DATA}),
  }),
)
class ViewOrderPage extends Component {
    render() {
        const { order, loading, refresh } = this.props;
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
                    <RefreshControl refreshing={loading} onRefresh={refresh} />}>
                <View style={styles.noTicket}>
                    <Text style={styles.text}>Nr Tichet: {order!=null?order.ticket:"Nu exista in baza de date"}</Text>
                </View>
                <View style={styles.orderMenu}>
                    <View style={styles.singleText}>
                        <Text style={styles.text}>Comanda</Text>
                    </View>
                    {order?
                    
                    <ScrollView ref={(scrollView) => {
                        _scrollView = scrollView;
                    }} automaticallyAdjustContentInsets={false} horizontal={false} style={styles.orderDescription}>
                    <OrderItem name={order.title} price={order.price}/>
                    </ScrollView>
                    
                    :
                    <ScrollView ref={(scrollView) => {
                        _scrollView = scrollView;
                    }} automaticallyAdjustContentInsets={false} horizontal={false} style={styles.orderDescription}>
                    <OrderItem name="Nu exista comanda" price=""/>
                    </ScrollView>}
                    <View style={styles.orderTotalBoxText}>
                        <Text style={styles.text}>Total: {order!=null?order.price:""}</Text>
                    </View>
                </View>
                </ScrollView>
            </View>
        );
    }
    gotoMainPage() {
        this.props.navigator.pop();
    }

}
module.exports = ViewOrderPage;
