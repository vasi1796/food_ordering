import { Platform } from 'react-native';
const API = 'http://192.168.0.102:3000/v1';

export const apiMiddleware = store => next => action => {
  // Pass all actions through by default
  next(action);
  switch (action.type) {
    // In case we receive an action to send an API request
    case 'GET_MENU_DATA':
      // Dispatch GET_MOVIE_DATA_LOADING to update loading state
      store.dispatch({type: 'GET_MENU_DATA_LOADING'});
      // Make API call and dispatch appropriate actions when done
      fetch(`${API}/menus.json`)
        .then(response => response.json())
        .then(data => next({
          type: 'GET_MENU_DATA_RECEIVED',
          data
        }))
        .catch(error => next({
          type: 'GET_MENU_DATA_ERROR',
          error
        }));
      break;
    // Do nothing if the action does not interest us
    default:
      break;
  }
};

export const menu_reducer = (state = { menus: [], loading: true }, action) => {
  switch (action.type) {
    case 'GET_MENU_DATA_LOADING':
      return {
        ...state,                   // keep the existing state,
        loading: true,              // but change loading to true
      };
    case 'GET_MENU_DATA_RECEIVED':
      return {
        loading: false,             // set loading to false
        menus: action.data.menus, // update movies array with reponse data
      };
    case 'GET_MENU_DATA_ERROR':
      return state;
    default:
      return state;
    }
};

export const order_reducer = (state={order:[],sent:false},action)=>{
  switch(action.type){
    case 'ADD_TO_ORDER':
    return{
      state
    };
    case 'REMOVE_FROM_ORDER':
    return{
      state
    };
    case 'SEND_ORDER_DATA_LOADING':
    return{
      ...state,
      sent:false,
    }
    case 'SENT_ORDER_DATA':
    return{
      sent:true,
    }
    case 'SEND_ORDER_DATA_ERROR':
      return state;
    default:
     return state;
  }
};