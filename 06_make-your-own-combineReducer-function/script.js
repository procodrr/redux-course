import { createStore } from 'redux'
import productsReducer from './productsReducer'
import cartReducer, {
  CART_ADD_ITEM,
  CART_ITEM_DECREASE_QUANTITY,
  CART_ITEM_INCREASE_QUANTITY,
} from './cartReducer'
import wishListReducer, {
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
} from './wishListReducer'

function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers)

  return function (state = {}, action) {
    const nextState = {}
    
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    }

    return nextState
  }
}

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())

console.log(store)

store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 1, quantity: 1 } })
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 12, quantity: 1 } })
store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: { productId: 12 },
})
store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: { productId: 12 },
})

store.dispatch({
  type: CART_ITEM_DECREASE_QUANTITY,
  payload: { productId: 12 },
})

store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 18 } })
store.dispatch({ type: WISHLIST_ADD_ITEM, payload: { productId: 11 } })
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 11 } })
store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 18 } })
console.log(store.getState())
