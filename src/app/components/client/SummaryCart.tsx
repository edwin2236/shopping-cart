'use client'

import { useCart } from '../../hooks/useCart'
import TableRow from '../server/TableRow'

const SummaryCart = () => {
  const { products } = useCart()

  return (
    <>
      {products.map((product, index) => {
        return (
          <TableRow
            key={product.id}
            product={product}
            isLastOfList={index < products.length - 1}
          />
        )
      })}
    </>
  )
}

export default SummaryCart
