'use client'

import { type ProductInCart } from '@/modules/products/domain/product'
import { createContext, useReducer, type ReactNode } from 'react'
import { CartKindAction, CartReducer } from '../reducer/cart'

const PRODUCT_INITIAL_STATE = { products: [] as ProductInCart[] }

interface ProductContextValue {
  products: ProductInCart[]
  addProductToCart(product: ProductInCart): void
  decrementProductQuantityInCart(productId: number): void
  selectProductSize(productId: number, size: string): void
  removeProductFromCart(productId: number): void
  clearCart(): void
}

export const CartContext = createContext<ProductContextValue | undefined>(
  undefined
)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(CartReducer, PRODUCT_INITIAL_STATE)

  const addProductToCart = (product: ProductInCart) => {
    dispatch({ type: CartKindAction.ADD_PRODUCT, payload: product })
  }

  const decrementProductQuantityInCart = (productId: number) => {
    dispatch({ type: CartKindAction.REDUCE_QUANTITY, payload: productId })
  }

  const selectProductSize = (productId: number, size: string) => {
    dispatch({
      type: CartKindAction.SELECTED_PRODUCT_SIZE,
      payload: { productId, size },
    })
  }

  const removeProductFromCart = (productId: number) => {
    dispatch({ type: CartKindAction.DELETE_PRODUCT, payload: productId })
  }

  const clearCart = () => {
    dispatch({ type: CartKindAction.CLEAR_PRODUCTS })
  }

  return (
    <CartContext.Provider
      value={{
        products: state.products,
        addProductToCart,
        decrementProductQuantityInCart,
        selectProductSize,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
