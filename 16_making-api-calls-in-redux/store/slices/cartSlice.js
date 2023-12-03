import { createSlice } from '@reduxjs/toolkit'

const findItemIndex = (state, action) =>
  state.findIndex((cartItem) => cartItem.productId === action.payload.productId)

const slice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    fetchCartItems(state) {
      state.loading = true
    },
    fetchCartItemsError(state, action) {
      state.loading = false
      state.error = action.payload || 'Something went wrong!'
    },
    loadCartItems(state, action) {
      state.loading = false
      state.list = action.payload.products
    },
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      if (existingItemIndex !== -1) state.list[existingItemIndex].quantity += 1
      else state.list.push({ ...action.payload, quantity: 1 })
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list.splice(existingItemIndex, 1)
    },
    increaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list[existingItemIndex].quantity += 1
    },
    decreaseCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action)
      state.list[existingItemIndex].quantity -= 1
      if (state.list[existingItemIndex].quantity === 0)
        state.list.splice(existingItemIndex, 1)
    },
  },
})

export const {
  fetchCartItemsError,
  fetchCartItems,
  loadCartItems,
  addCartItem,
  removeCartItem,
  increaseCartItemQuantity,
  decreaseCartItemQuantity,
} = slice.actions

export default slice.reducer
