import {
  GET_ORDER_DATA_LOADING,
  GET_ORDER_DATA_RECEIVED,
  GET_ORDER_DATA_ERROR
} from '../constants/ActionTypes'


export const order_reducer = (state={order:[],loading:true},action)=>{
  switch(action.type){
    case GET_ORDER_DATA_LOADING:
    return{
      ...state,
      loading:true,
    };
    case GET_ORDER_DATA_RECEIVED:
    return{
      loading:false,
      order:action.data,
    };
    case GET_ORDER_DATA_ERROR:
    return state;
    default:
     return state;
  }
};
