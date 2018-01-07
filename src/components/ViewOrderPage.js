import React, {Component} from 'react';
import {
    Text,
    View,
    BackAndroid,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    Image, ToastAndroid
} from 'react-native';
import { connect } from 'react-redux';
import OrderItem from './OrderItem';
import {GET_ORDER_DATA} from '../constants/ActionTypes';

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
    order: state.order_reducer.order,
    loading: state.order_reducer.loading,
    people: state.people_reducer.people
  }),
  dispatch => ({
    refresh: () => dispatch({type: GET_ORDER_DATA}),
  }),
)
class ViewOrderPage extends Component {
    render() {
        const { order, loading, refresh ,people} = this.props;
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
                                flex:1 }]}>Comanda
                    </Text>
                    <Text style={{width:40}}></Text>
                </View>
                <ScrollView
                    // Hide all scroll indicators
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={refresh} />}>
                <View style={{flexDirection:'row', backgroundColor: '#ededed'}} elevation={3}>
                <View style={styles.noTicket}>
                    <Text style={[styles.text,{color:'#313338',textAlign:'center'}]}>Estimat{'\n'}{order!=null?people*2:"0"} minute</Text>
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
                        ToastAndroid.show('Nu se poate conecta la baza de date', ToastAndroid.SHORT)
                    }
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
