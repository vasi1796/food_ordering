import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button,
    BackAndroid,
    ScrollView
} from 'react-native';
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
class OrderItem extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row'
            }}>
                <Text style={[
                    styles.text, {
                        flex: 1,
                        textAlign: 'left'
                    }
                ]}>{this.props.name}</Text>
                <Text style={[
                    styles.text, {
                        textAlign: 'right'
                    }
                ]}>{this.props.price}</Text>
            </View>
        );
    }
}
class ViewOrderPage extends Component {
    render() {
        var _scrollView : ScrollView;
        return (
            <View style={styles.parentView}>
                <Button style={{
                    width: win_width,
                    flex: 1
                }} onPress={this.gotoMainPage.bind(this)} title="Inapoi" color="#1565C0"/>
                <View style={styles.noTicket}>
                    <Text style={styles.text}>Nr Tichet: 12</Text>
                </View>
                <View style={styles.orderMenu}>
                    <View style={styles.singleText}>
                        <Text style={styles.text}>Comanda</Text>
                    </View>
                    <ScrollView ref={(scrollView) => {
                        _scrollView = scrollView;
                    }} automaticallyAdjustContentInsets={false} horizontal={false} style={styles.orderDescription}>
                        <OrderItem name="Cartofi" price="5"/>
                        <OrderItem name="Supa" price="10"/>
                    </ScrollView>
                    <View style={styles.orderTotalBoxText}>
                        <Text style={styles.text}>Total: 15</Text>
                    </View>
                </View>
            </View>
        );
    }
    gotoMainPage() {
        this.props.navigator.pop();
    }

}
module.exports = ViewOrderPage;
