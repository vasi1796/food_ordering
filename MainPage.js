'use strict';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight,
    TouchableNativeFeedback,
    Navigator
} from 'react-native';
var win_width = Dimensions.get('window').width;
var win_height = Dimensions.get('window').height;

class MainPage extends Component {
    render() {
        return (
            <View style={styles.general_view}>
                <View style={[
                    styles.general_view, {
                        width: win_width,
                        backgroundColor: 'steelblue'
                    }
                ]}>
                    <Text style={{
                        textAlignVertical: 'center'
                    }}>People in Caffeteria:</Text>
                    <Text style={{
                        textAlignVertical: 'center'
                    }} onPress={this.handleNumberOfPeople}>20</Text>
                </View>
                <View style={{
                    flex: 9,
                    flexDirection: 'row'
                }}>

                    <TouchableNativeFeedback onPress={this.gotoViewOrderPage.bind(this)} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[
                            styles.choices_view, {
                                backgroundColor: 'powderblue'
                            }
                        ]}>
                            <Text>View Order</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.gotoMenuPage.bind(this)} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[
                            styles.choices_view, {
                                backgroundColor: 'skyblue'
                            }
                        ]}>
                            <Text>Order</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }

    gotoViewOrderPage() {
        this.props.navigator.push({id: 3, name: 'ViewOrderPage'});
    }
    gotoMenuPage() {
        this.props.navigator.push({id: 1, name: 'MenuPage'});
    }
    handleNumberOfPeople() {
        console.log('update people pressed');
    }
}
const styles = StyleSheet.create({
    general_view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    choices_view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
module.exports = MainPage;
