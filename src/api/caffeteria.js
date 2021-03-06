const API = 'https://food-unitbv.herokuapp.com/v1';
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
    case 'GET_ORDER_DATA':
      store.dispatch({type:'GET_ORDER_DATA_LOADING'});
      fetch(`${API}/order/:orderId=33`)
        .then(response => response.json())
        .then(data => next({
          type: 'GET_ORDER_DATA_RECEIVED',
          data
        }))
        .catch(error => next({
          type: 'GET_ORDER_DATA_ERROR',
          error
        }));
      break;
    case 'SEND_ORDER_DATA':
    let ticket_id=Math.floor(Math.random()* 100);
    let payload = {
    ticket: ticket_id.toString(),
    title: store.getState().ticket_reducer.ticket,
    price: store.getState().ticket_reducer.price
    };
      store.dispatch({type:'SEND_ORDER_DATA_LOADING'});
      fetch(`${API}/order`,
        {method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(payload)})
      .then(response => response.json())
        .then(data => next({
          type: 'SENT_ORDER_DATA',
          data
        }))
        .catch(error => next({
          type: 'SEND_ORDER_DATA_ERROR',
          error
        }));
      fetch(`${API}/inc_people`,{method:'PUT'});
      break;
    case 'GET_PEOPLE_DATA':
    store.dispatch({type:'GET_PEOPLE_DATA_LOADING'});
      fetch(`${API}/people.json`)
        .then(response => response.json())
        .then(data => next({
          type: 'GET_PEOPLE_DATA_RECEIVED',
          data
        }))
        .catch(error => next({
          type: 'GET_PEOPLE_DATA_ERROR',
          error
        }));
      break;
    // Do nothing if the action does not interest us
    default:
      break;
  }
};