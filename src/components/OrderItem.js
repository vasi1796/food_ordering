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
            </View>
        );
    }
}

OrderItem.propTypes = {
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

module.exports = OrderItem;