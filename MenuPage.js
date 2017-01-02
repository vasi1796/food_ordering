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
                ]}>Cartofi</Text>
                <Text style={[
                    styles.text, {
                        textAlign: 'right'
                    }
                ]}>15</Text>
                <Switch onValueChange={(value) => this.setState({on: value})} onTintColor="#00ff00" style={{
                    marginBottom: 10, paddingLeft:10, paddingTop:0.1
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
                        <MenuItem/>
                    </ScrollView>
                    <View style={styles.totalBoxText}>
                        <Text style={styles.text}>Total: 15</Text>
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

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#BBDEFB'
    },
    orderMenu: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#BBDEFB'
    },
    singleText: {
        alignSelf: 'center',
        width: win_width - 50,
        marginTop: 10,
        padding: 15,
        borderWidth: 0.1,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    totalBoxText: {
        alignSelf: 'center',
        width: win_width - 50,
        padding: 15,
        borderWidth: 0.1,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    placeOrder: {
        alignSelf: 'center',
        width: win_width - 50,
        margin: 10,
        padding: 15,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.1,
        borderRadius: 8
    },
    menuDescription: {
        alignSelf: 'center',
        width: win_width - 50,
        padding: 15,
        backgroundColor: '#64B5F6',
        borderWidth: 0.1
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
});
module.exports = MenuPage;
