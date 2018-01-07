import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    View,
    Button,
} from 'react-native';
import {ADD_TO_ORDER,REMOVE_FROM_ORDER} from '../constants/ActionTypes'
var styles = require('../style/styles');

class MenuItem extends Component {
    state = {
        on: false
    };
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                flex:1,
                padding:15,
                marginBottom:2,
                backgroundColor:'#fcfcfc'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex:1}}>
                        <Text style={[styles.text, {textAlign: 'left',color:'#313338',fontSize:17}]}>
                        {this.props.name}
                        </Text>
                        <Text>{this.props.ingredients}</Text>
                        <Text style={[styles.text, {textAlign: 'left',color:'#0d4687'}]}>{this.props.price} RON</Text>
                    </View>
                <View style={{alignSelf:'center',width:100,}}>
                    <Button onPress={()=>this.setState({on:!this.state.on},
                        this.state.on?
                        this.props.dispatch({type: REMOVE_FROM_ORDER,price:this.props.price,name:this.props.name})
                        : this.props.dispatch({type: ADD_TO_ORDER,price:this.props.price,name:this.props.name}))}
                            title={this.state.on?"Remove":"Add"}
                            color='#1155a3'/>
                </View>
                </View>
            </View>
        );
    }
}

MenuItem.propTypes = {
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

module.exports = MenuItem;