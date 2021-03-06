import { combineReducers } from 'redux'
import {menu_reducer} from './menu_reducer'
import {order_reducer} from './order_reducer'
import {ticket_reducer} from './ticket_reducer'
import {people_reducer} from './people_reducer'

export default combineReducers({
    menu_reducer,
    order_reducer,
    ticket_reducer,
    people_reducer
})
