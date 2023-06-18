'use client'

import { type FC } from 'react'

import { useCart } from '../../hooks/useCart'
import Button from './Button'

interface ProductSizesProps {
  productId: number
  sizes: string[]
  selectedSize?: string
}

const ProductSizes: FC<ProductSizesProps> = ({
  productId,
  sizes,
  selectedSize,
}) => {
  const { selectProductSize } = useCart()

  const handleSizeSelected = (productId: number, size: string) => {
    selectProductSize(productId, size)
  }

  return (
    <>
      {sizes.map((size) => (
        <Button
          key={size}
          className={`rounded ${
            selectedSize === size ? 'bg-btn-dark dark:bg-btn' : ''
          } hover:bg-btn-hover`}
          onClick={() => {
            handleSizeSelected(productId, size)
          }}
        >
          {size}
        </Button>
      ))}
    </>
  )
}

export default ProductSizes
