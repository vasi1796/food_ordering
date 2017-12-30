import {
  ADD_TO_ORDER,
  REMOVE_FROM_ORDER,
  SEND_ORDER_DATA_LOADING,
  SENT_ORDER_DATA,
  SEND_ORDER_DATA_ERROR
} from '../constants/ActionTypes'

export const ticket_reducer = (state={ticket:{},sent:false},action)=>{
  switch(action.type){
    case ADD_TO_ORDER:
    console.log('add to order '+action.name);
    return{
      state,
    };
    case REMOVE_FROM_ORDER:
    console.log('remove from order '+action.name);
    return{
      state
    };
    case SEND_ORDER_DATA_LOADING:
    console.log('send order request');
    return{
      ...state,
      sent:false,
    }
    case SENT_ORDER_DATA:
    return{
      sent:true,
    }
    case SEND_ORDER_DATA_ERROR:
      return state;
    default:
     return state;
  };
};