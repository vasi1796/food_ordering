import {
  GET_MENU_DATA_LOADING,
  GET_MENU_DATA_RECEIVED,
  GET_MENU_DATA_ERROR
} from '../constants/ActionTypes'

export const menu_reducer = (state = { menus: [], loading: true }, action) => {
  switch (action.type) {
    case GET_MENU_DATA_LOADING:
      return {
        ...state,                   // keep the existing state,
        loading: true,              // but change loading to true
      };
    case GET_MENU_DATA_RECEIVED:
      return {
        loading: false,             // set loading to false
        menus: action.data.menus, // update movies array with reponse data
      };
    case GET_MENU_DATA_ERROR:
      return state;
    default:
      return state;
    }
};