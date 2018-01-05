import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    View
} from 'react-native';
var styles = require('../style/styles');

class OrderItem extends Component {
    render() {
        return (
            <View>
                <Text style={[
                    styles.text, {
                        flex: 1,
                        textAlign: 'center',
                        color:'#313338',
                        fontSize:17
                    }
                ]}>{this.props.name}</Text>
            </View>
        );
    }
}

OrderItem.propTypes = {
  name: PropTypes.string.isRequired,
}

module.exports = OrderItem;