import { combineReducers, createStore } from 'redux'
import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import wishListReducer from './slices/wishListSlice'

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
)

const users = [
  {
    name: 'Anurag',
    age: 26,
  },
  {
    name: 'Ram',
    age: 18,
  },
  {
    name: 'Adarsh',
    age: 16,
  },
]