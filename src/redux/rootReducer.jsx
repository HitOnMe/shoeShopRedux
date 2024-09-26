import {combineReducers} from 'redux';
import {CartReducer} from './CartReducer'
export const rootReducer = combineReducers({
    CartReducer: CartReducer
})