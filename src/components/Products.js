import React from 'react'
import products from '../jsons/products.json'
import ProductCard from './ProductCard'

export default function Products() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-4">
      {products.map((product, i) => (
              <ProductCard key={"product"+i} product={product}/>
            ))}
    </div>
  )
}
