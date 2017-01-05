'use strict';

import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    Button,
    BackAndroid,
    Dimensions,
    ScrollView,
    Switch
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
class MenuItem extends Component {
    state = {
        on: true,
        off: false
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
                <Switch onValueChange={(value) => this.setState({on: value})} onTintColor="#00ff00" style={{
                    marginBottom: 10,
                    paddingLeft: 10,
                    paddingTop: 0.1
                }} thumbTintColor="#0000ff" tintColor="#ff0000" value={this.state.on}/>
            </View>
        );
    }
}

class MenuPage extends Component {
    render() {
        var _scrollView : ScrollView;
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
                        <MenuItem name="Cartofi" price={12}/>
                    </ScrollView>
                    <View style={styles.totalBoxText}>
                        <Text style={styles.text}>Total: 0</Text>
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
        console.log("food ordered");
    }
}

module.exports = MenuPage;
