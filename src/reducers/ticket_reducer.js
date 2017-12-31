import {
  ADD_TO_ORDER,
  REMOVE_FROM_ORDER,
  SEND_ORDER_DATA_LOADING,
  SENT_ORDER_DATA,
  SEND_ORDER_DATA_ERROR,
  RESET_TICKET
} from '../constants/ActionTypes'

export const ticket_reducer = (state={ticket:[],sent:false,price:0},action)=>{
  switch(action.type){
    case RESET_TICKET:
    return{
    ticket:[],
    sent:false,
    price:0
    };
    case ADD_TO_ORDER:
    console.log(state.price);
    return{
      ...state,
      ticket:[...state.ticket, action.name],
      price:state.price+action.price
    };
    case REMOVE_FROM_ORDER:
    console.log(state.ticket);
    return{
      ...state,
      ticket:state.ticket.filter(item => item !== action.name),
      price:state.price-action.price
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