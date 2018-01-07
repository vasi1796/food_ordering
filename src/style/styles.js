'use strict';
import React from 'react';
import {StyleSheet} from 'react-native';
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
        padding:20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:5,
        borderRadius:50,
        width:170,
        backgroundColor:"#1676e2"
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
        flexDirection: 'column',
        flex: 1,
        padding:5,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1565C0'
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
