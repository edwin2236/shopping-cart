'use client'

import { IconTrash } from '@tabler/icons-react'
import { type FC } from 'react'

import { type ProductInCart } from '@/modules/products/domain/product'
import { useCart } from '../../hooks/useCart'
import Button from './Button'

interface CounterProductProps {
  product: ProductInCart
}

const CounterProduct: FC<CounterProductProps> = ({ product }) => {
  const {
    addProductToCart,
    decrementProductQuantityInCart,
    removeProductFromCart,
  } = useCart()

  const handleDecrement = () => {
    if (product.quantity > 1) {
      decrementProductQuantityInCart(product.id)
    }
  }

  const handleIncrement = () => {
    addProductToCart(product)
  }

  const handleRemoveProductFromCart = (productId: number) => {
    removeProductFromCart(productId)
  }

  return (
    <>
      <div className="flex w-fit items-center justify-center overflow-hidden rounded border-[1px] dark:border-filter-color">
        <Button
          className="hover:bg-btn-dark hover:dark:bg-btn-hover"
          onClick={handleDecrement}
        >
          -
        </Button>
        <span className="flex h-10 w-10 items-center justify-center">
          {product.quantity}
        </span>
        <Button
          className="hover:bg-btn-dark hover:dark:bg-btn-hover"
          onClick={handleIncrement}
        >
          +
        </Button>
      </div>
      <Button
        className="w-auto rounded p-4 hover:bg-btn-dark hover:dark:bg-btn-hover"
        onClick={() => {
          handleRemoveProductFromCart(product.id)
        }}
      >
        <IconTrash /> Remove
      </Button>
    </>
  )
}

export default CounterProduct
