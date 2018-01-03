import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    View,
    Switch,
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
                    ? this.props.dispatch({type: ADD_TO_ORDER,price:this.props.price,name:this.props.name})
                    : this.props.dispatch({type: REMOVE_FROM_ORDER,price:this.props.price,name:this.props.name}))} style={{
                    marginBottom: 10,
                    paddingLeft: 10,
                    paddingTop: 0.1
                }} value={this.state.on}/>
            </View>
        );
    }
}

MenuItem.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

module.exports = MenuItem;