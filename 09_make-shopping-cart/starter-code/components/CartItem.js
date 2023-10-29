import React from 'react'

export default function CartItem({ title, rating, price, imageUrl, quantity }) {
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
      <div className="item-quantity">
        <button>-</button>
        <span>{quantity}</span>
        <button>+</button>
      </div>
      <div className="item-total">${quantity * price}</div>
    </div>
  )
}
