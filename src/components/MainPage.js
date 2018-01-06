'use strict';
import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableNativeFeedback,
    StatusBar,
    ScrollView,
    RefreshControl
} from 'react-native';
import PeopleCounter from './PeopleCounter';
import { connect } from 'react-redux';
import {GET_PEOPLE_DATA} from '../constants/ActionTypes';
import TimerMixin from 'react-timer-mixin';
var styles = require('../style/styles');
var win_width = Dimensions.get('window').width;
var win_height = Dimensions.get('window').height;

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
        const { people, loading, refresh } = this.props;
        var _scrollView : ScrollView;
        return (
            <View style={styles.mainPage_generalView}>
                <StatusBar backgroundColor="#0D47A1" barStyle="light-content"/>
                <View style={[
                    styles.peopleInCaffeteria, {
                        width: win_width,
                        backgroundColor: '#1565C0'
                    }
                ]} elevation={3}>
                    <Text style={[
                        styles.text, {
                            textAlignVertical: 'center'
                        }
                    ]}>Oameni in cantina</Text>
                    <PeopleCounter people={people}/>
                </View>
                <View style={{
                    flex:10,
                    flexDirection: 'row'
                }}>
                    <TouchableNativeFeedback onPress={this.gotoViewOrderPage.bind(this)} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[
                            styles.choices_view, {
                                backgroundColor: '#64B5F6'
                            }
                        ]}>
                            <Text style={styles.text}>Vezi Comanda</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this.gotoMenuPage.bind(this)} background={TouchableNativeFeedback.SelectableBackground()}>
                        <View style={[
                            styles.choices_view, {
                                backgroundColor: '#2196F3'
                            }
                        ]}>
                            <Text style={styles.text}>Comanda Mancare</Text>
                        </View>
                    </TouchableNativeFeedback>
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
