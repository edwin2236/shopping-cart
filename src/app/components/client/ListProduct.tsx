'use client'

import { type FC } from 'react'

import { type Product } from '@/modules/products/domain/product'
import { useFilter } from '../../hooks/useFilter'
import Article from '../server/Article'

interface ListProductProps {
  products: Product[]
}

const ListProduct: FC<ListProductProps> = ({ products }) => {
  const { filterProducts } = useFilter()

  const productsFiltered = filterProducts(products)

  return (
    <div className="grid grid-cols-product gap-4">
      {productsFiltered.map((product) => (
        <Article key={product.id} product={{ ...product, quantity: 0 }} />
      ))}
    </div>
  )
}
export default ListProduct
