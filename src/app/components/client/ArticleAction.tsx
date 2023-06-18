'use client'

import { type ProductInCart } from '@/modules/products/domain/product'
import { IconShoppingCartOff, IconShoppingCartPlus } from '@tabler/icons-react'
import { useMemo, type FC } from 'react'
import { useCart } from '../../hooks/useCart'
import Button from './Button'

interface ArticleActionProps {
  label: string
  product: ProductInCart
}

const ArticleAction: FC<ArticleActionProps> = ({ label, product }) => {
  const { products, addProductToCart, removeProductFromCart } = useCart()
  const removeItemClassName =
    'dark:bg-red-300 hover:dark:bg-red-200 bg-red-700 hover:bg-red-600'
  const itemClassName =
    'dark:bg-teal-300 dark:hover:bg-teal-200 bg-teal-700 hover:bg-teal-600'

  const cartHasProduct = useMemo(() => {
    const resp = products.findIndex((item) => product.id === item.id)
    return resp >= 0
  }, [products, product.id])

  const handleToggleProduct = () => {
    if (cartHasProduct) {
      removeProductFromCart(product.id)
      return
    }

    addProductToCart(product)
  }

  return (
    <Button
      className={`h-16 w-full font-semibold uppercase text-white dark:text-black ${
        cartHasProduct ? removeItemClassName : itemClassName
      }`}
      onClick={handleToggleProduct}
    >
      {!cartHasProduct ? <IconShoppingCartPlus /> : <IconShoppingCartOff />}
      {label}
    </Button>
  )
}

export default ArticleAction
