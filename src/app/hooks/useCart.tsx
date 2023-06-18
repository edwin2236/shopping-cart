'use client'

import { useContext, useMemo } from 'react'
import { CartContext } from '../context/cartContext'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  const subtotal = useMemo(() => {
    let subtotal = 0
    context.products.forEach((product) => {
      subtotal += product.price * product.quantity
    })

    return subtotal
  }, [context.products])

  return { ...context, subtotal }
}
