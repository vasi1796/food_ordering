import React, {Component} from 'react';
import {
    Text
} from 'react-native';
var styles = require('../style/styles');

class PeopleCounter extends Component {
    state = {
        people: 0
    };
    onPress = () => {
        this.setState({
            people: this.state.people + 1
        });
    }
    render() {
        return (
            <Text style={[
                styles.text, {
                    textAlignVertical: 'center'
                }
            ]} onPress={this.onPress}>{this.state.people}</Text>
        );
    }
}

module.exports = PeopleCounter;