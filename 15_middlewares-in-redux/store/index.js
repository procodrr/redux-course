import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import wishListReducer from './slices/wishListSlice'
import { configureStore } from '@reduxjs/toolkit'
import { logger } from './middleware/logger'


export const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  middleware: [logger, ],
})
