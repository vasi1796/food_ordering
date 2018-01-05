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
        backgroundColor: '#f2f2f2'
    },
    orderMenu: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2'
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
        width: win_width ,
        padding: 15,
        borderWidth: 0.1,
        backgroundColor: '#1676e2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeOrder: {
        alignSelf: 'center',
        width: win_width,
        padding: 15,
        backgroundColor: '#1565C0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuDescription: {
        alignSelf: 'center',
        width: win_width,
        backgroundColor: '#f2f2f2',
        borderWidth: 0.1
    },
    peopleInCaffeteria: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    noTicket: {
        alignSelf: 'center',
        width: win_width,
        height:50,
        backgroundColor: '#dddddd',
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderDescription: {
        alignSelf: 'center',
        width: win_width,
        padding: 15,
        backgroundColor: '#fcfcfc',
        borderWidth: 0.1
    },
    orderTotalBoxText: {
        alignSelf: 'center',
        width: win_width,
        padding: 15,
        borderWidth: 0.1,
        backgroundColor: '#1676e2',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
