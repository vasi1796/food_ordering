'use strict';
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
var win_width = Dimensions.get('window').width;
var win_height = Dimensions.get('window').height;
module.exports = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    mainPage_generalView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    choices_view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    parentView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#fcfcfc'
    },
    orderMenu: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2'
    },
    totalBoxText: {
        padding: 15,
        borderWidth: 0.1,
        backgroundColor: '#1676e2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeOrder: {
        padding: 15,
        backgroundColor: '#1565C0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuDescription: {
        flex:1,
        backgroundColor: '#f2f2f2',
        borderWidth: 0.1
    },
    peopleInCaffeteria: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    noTicket: {
        alignSelf: 'center',
        flex:1,
        height:60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderDescription: {
        flex:1,
        padding: 20,
        backgroundColor: '#fcfcfc',
        borderWidth: 0.1
    },
    orderTotalBoxText: {
        padding: 15,
        borderWidth: 0.1,
        backgroundColor: '#1676e2',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
