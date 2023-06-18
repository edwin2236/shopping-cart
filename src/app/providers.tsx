'use client'

import { ReactNode } from 'react'

import { CartProvider } from './context/cartContext'
import { FilterProvider } from './context/filterContext'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <FilterProvider>{children}</FilterProvider>
    </CartProvider>
  )
}
