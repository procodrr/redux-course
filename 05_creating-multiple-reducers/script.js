import { combineReducers, createStore } from 'redux'
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

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)

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
