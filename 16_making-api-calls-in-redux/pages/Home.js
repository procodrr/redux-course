import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product'

export default function Home() {
  const productsList = useSelector((state) => state.products.list)
  const isLoading = useSelector((state) => state.products.loading)
  const error = useSelector((state) => state.products.error)
  return isLoading ? (
    <h1 style={{ textAlign: 'center' }}>Loading...</h1>
  ) : error ? (
    <h2 style={{ textAlign: 'center' }}>{error}</h2>
  ) : (
    <div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  )
}
