'use strict';
import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableNativeFeedback,
    StatusBar,
    Image
} from 'react-native';
import PeopleCounter from './PeopleCounter';
import { connect } from 'react-redux';
import {GET_PEOPLE_DATA} from '../constants/ActionTypes';
import TimerMixin from 'react-timer-mixin';
const styles = require('../style/styles');

@connect(
    state => ({
        people: state.people_reducer.people,
        loading: state.people_reducer.loading,
    }),
    dispatch => ({
        updatePeople: () => dispatch({type: 'GET_PEOPLE_DATA'}),
    }),
)
class MainPage extends Component {
    mixins : [TimerMixin];
    componentWillMount(){
        this.props.updatePeople();
    }
    componentDidMount() {
        this.update = TimerMixin.setInterval(() => {
            this.props.updatePeople()
        }, 3000);
    }
    componentWillUnmount() {
        TimerMixin.clearInterval(this.update);
    }
    render() {
        const { people } = this.props;
        return (
            <View style={styles.mainPage_generalView}>
                <StatusBar backgroundColor="#0D47A1" barStyle="light-content"/>
                <View style={styles.peopleInCaffeteria} elevation={3}>
                    <Image style={{width:40,height:40}}
                           source={require('../images/sigla.png')}/>
                </View>
                <Image style={{flex:10,resizeMode: 'cover',width: null,
                    alignSelf: 'stretch',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',}}
                       source={require('../images/food.jpg')}>
                    <TouchableNativeFeedback onPress={this.gotoMenuPage.bind(this)} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styles.choices_view} elevation={3}>
                            <Text style={styles.text}>Comanda Mancare</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.gotoViewOrderPage.bind(this)} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={styles.choices_view} elevation={3}>
                            <Text style={styles.text}>Vezi Comanda</Text>
                        </View>
                    </TouchableNativeFeedback>
                </Image>
                <View style={styles.peopleInCaffeteria} elevation={3}>
                    <Text style={styles.text}>Oameni in cantina</Text>
                    <PeopleCounter people={people}/>
                </View>
            </View>
        );
    }

    gotoViewOrderPage() {
        this.props.navigator.push({id: 3, name: 'ViewOrderPage'});
    }
    gotoMenuPage() {
        this.props.navigator.push({id: 1, name: 'MenuPage'});
    }
}

module.exports = MainPage;
