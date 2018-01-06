import {
  GET_PEOPLE_DATA_LOADING,
  GET_PEOPLE_DATA_RECEIVED,
  GET_PEOPLE_DATA_ERROR
} from '../constants/ActionTypes'

export const people_reducer = (state={people:0,loading:true},action)=>{
  switch(action.type){
    case GET_PEOPLE_DATA_LOADING:
      return {
        ...state,                   // keep the existing state,
        loading: true,              // but change loading to true
      };
    case GET_PEOPLE_DATA_RECEIVED:
      return {
        loading: false,             // set loading to false
        people: action.data.people[0].peopleInside, // update movies array with reponse data
      };
    case GET_PEOPLE_DATA_ERROR:
      return state;
    default:
     return state;
  };
};