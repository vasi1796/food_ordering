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
    Navigator,
    StatusBar
} from 'react-native';
var win_width = Dimensions.get('window').width;
var win_height = Dimensions.get('window').height;
var counter = 15;

class MainPage extends Component {
    render() {
        return (
            <View style={styles.general_view}>
              <StatusBar
           backgroundColor="#0D47A1"
           barStyle="light-content"
         />
                <View style={[
                    styles.peopleInCaffeteria, {
                        width: win_width,
                        backgroundColor: '#1565C0'
                    }
                ]}>
                    <Text style={[
                        styles.text, {
                            textAlignVertical: 'center'
                        }
                    ]}>Oameni in cantina:</Text>
                    <Text style={[
                        styles.text, {
                            textAlignVertical: 'center'
                        }
                    ]} onPress={this.handleNumberOfPeople}>{counter}</Text>
                </View>
                <View style={{
                    flex: 9,
                    flexDirection: 'row'
                }}>

                    <TouchableNativeFeedback onPress={this.gotoViewOrderPage.bind(this)} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[
                            styles.choices_view, {
                                backgroundColor: '#64B5F6'
                            }
                        ]}>
                            <Text style={styles.text}>Vezi Comanda</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.gotoMenuPage.bind(this)} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[
                            styles.choices_view, {
                                backgroundColor: '#2196F3'
                            }
                        ]}>
                            <Text style={styles.text}>Comanda Mancare</Text>
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
        counter++;
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
    peopleInCaffeteria: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    choices_view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
});
module.exports = MainPage;
