import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions,
    Button,
    BackAndroid,
    ScrollView,
    RefreshControl,
    ActivityIndicator,
    TouchableOpacity,
    Image
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
                <View style={{flexDirection: 'row',backgroundColor:"#1565C0",paddingTop:5,paddingBottom:5,alignItems: 'center',padding:10}} elevation={5}>
                    <Text style={{width:40}}></Text>
                    <Text style={[styles.text,{textAlign:'center',
                                fontWeight:'bold',fontSize:20,
                                flex:1 }]}>Comanda
                    </Text>
                    <TouchableOpacity onPress={this.gotoMainPage.bind(this)}>
                        <Image style={{width:30,height:25}}
                               source={require('../images/back_right.png')}/>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    // Hide all scroll indicators
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={refresh} />}>
                <View style={{flexDirection:'row', backgroundColor: '#ededed'}} elevation={3}>
                <View style={styles.noTicket}>
                    <Text style={[styles.text,{color:'#313338',textAlign:'center'}]}>Estimat{'\n'}{order!=null?order.ticket:"Nu exista in baza de date"} minute</Text>
                </View>
                <View style={styles.noTicket}>
                    <Text style={[styles.text,{color:'#313338',textAlign:'center'}]}>Nr. Tichet{'\n'}#{order!=null?order.ticket:"Nu exista in baza de date"}</Text>
                </View>
                </View>
                <View style={styles.orderMenu}>
                    {order?
                    
                    <ScrollView ref={(scrollView) => {
                        _scrollView = scrollView;
                    }} automaticallyAdjustContentInsets={false} horizontal={false} style={styles.orderDescription}>
                    <OrderItem name={order.title}/>
                    </ScrollView>
                    
                    :
                    <ScrollView ref={(scrollView) => {
                        _scrollView = scrollView;
                    }} automaticallyAdjustContentInsets={false} horizontal={false} style={styles.orderDescription}>
                    <OrderItem name="Nu exista comanda" price=""/>
                    </ScrollView>}
                </View>
                </ScrollView>
                <View style={styles.orderTotalBoxText}>
                        <Text style={styles.text}>Total: {order!=null?order.price:""} RON</Text>
                </View>
            </View>
        );
    }
    gotoMainPage() {
        this.props.navigator.pop();
    }

}
module.exports = ViewOrderPage;
