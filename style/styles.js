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
    peopleInCaffeteria: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    noTicket: {
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
    orderDescription: {
        alignSelf: 'center',
        width: win_width - 50,
        padding: 15,
        backgroundColor: '#64B5F6',
        borderWidth: 0.1
    },
    orderTotalBoxText: {
        alignSelf: 'center',
        width: win_width - 50,
        marginBottom: 10,
        padding: 15,
        borderWidth: 0.1,
        backgroundColor: 'steelblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    }
});
