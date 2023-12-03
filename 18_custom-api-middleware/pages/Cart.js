import React from 'react'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import {
  getAllCartItems,
  getCartError,
  getCartLoadingState,
} from '../store/slices/cartSlice'

export default function Cart() {
  const cartItems = useSelector(getAllCartItems)
  const isLoading = useSelector(getCartLoadingState)
  const error = useSelector(getCartError)
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {isLoading ? (
          <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        ) : error ? (
          <h2 style={{ textAlign: 'center' }}>{error}</h2>
        ) : (
          cartItems.map(({ id, title, rating, price, image, quantity }) => (
            <CartItem
              key={id}
              productId={id}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={image}
              rating={rating.rate}
            />
          ))
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          {!isLoading ||
            (error && (
              <div className="total">
                $
                {cartItems.reduce(
                  (accumulator, currentItem) =>
                    accumulator + currentItem.quantity * currentItem.price,
                  0
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
