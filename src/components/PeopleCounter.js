import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Text
} from 'react-native';
var styles = require('../style/styles');

class PeopleCounter extends Component {
    render() {
        return (
            <Text style={[
                styles.text, {
                    textAlignVertical: 'center'
                }
            ]}>{this.props.people}</Text>
        );
    }
}

PeopleCounter.propTypes = {
  people: PropTypes.number.isRequired,
}

module.exports = PeopleCounter;