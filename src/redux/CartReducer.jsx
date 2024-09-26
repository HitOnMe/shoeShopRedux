import data from '../data/data.json';
const cartState = {
    cart: data
}
export const CartReducer = (state = cartState, action) => {
    return {...state}
}