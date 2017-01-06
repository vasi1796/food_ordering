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
    ToastAndroid
} from 'react-native';
import TimerMixin from 'react-timer-mixin';

var styles = require('../style/styles');
var win_width = Dimensions.get('window').width;
var win_height = Dimensions.get('window').height;

var totalValue = 0;
var calculator = {
    addTotal(value) {
        totalValue = totalValue + value;
    },
    subtractTotal(value) {
        totalValue = totalValue - value;
    }
};

BackAndroid.addEventListener('hardwareBackPress', function() {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
});

class TotalPrice extends Component {
    mixins : [TimerMixin];
    state = {
        total: totalValue
    };
    componentDidMount() {
        this.update = TimerMixin.setInterval(() => {
            this.setState({total: totalValue})
        }, 500);
    }
    componentWillUnmount() {
        TimerMixin.clearInterval(this.update);
    }
    render() {
        return (
            <Text style={styles.text}>{this.state.total}</Text>
        );
    }
}

class MenuItem extends Component {
    state = {
        on: false
    };
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
                <Switch onValueChange={(value) => this.setState({
                    on: value
                }, value
                    ? calculator.addTotal(this.props.price)
                    : calculator.subtractTotal(this.props.price))} onTintColor="#00ff00" style={{
                    marginBottom: 10,
                    paddingLeft: 10,
                    paddingTop: 0.1
                }} thumbTintColor="#0000ff" tintColor="#ff0000" value={this.state.on}/>
            </View>
        );
    }
}

class MenuPage extends Component {
    componentWillMount() {
        totalValue = 0;
    }
    render() {
        var _scrollView : ScrollView;
        var menuItems = [];
        var getJsonMenu = ["Supa", "Cartofi", "Snitel"];
        for (var i = 0; i < getJsonMenu.length; i++) {
            menuItems.push(<MenuItem name={getJsonMenu[i]} price={i + 3} key={i}/>);
        };
        return (
            <View style={styles.parentView}>
                <Button style={{
                    width: win_width,
                    flex: 1
                }} onPress={this.gotoMainPage.bind(this)} title="Inapoi" color="#1565C0"/>
                <View style={styles.orderMenu}>
                    <View style={styles.singleText}>
                        <Text style={styles.text}>Meniu</Text>
                    </View>
                    <ScrollView ref={(scrollView) => {
                        _scrollView = scrollView;
                    }} automaticallyAdjustContentInsets={false} horizontal={false} style={styles.menuDescription}>
                        {menuItems}
                    </ScrollView>
                    <View style={styles.totalBoxText}>
                        <Text style={styles.text}>Total:
                            <TotalPrice/></Text>
                    </View>
                </View>
                <TouchableNativeFeedback onPress={this.orderFood} background={TouchableNativeFeedback.SelectableBackground()}>
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
        ToastAndroid.show('Comanda plasata', ToastAndroid.SHORT);
    }
}

module.exports = MenuPage;
