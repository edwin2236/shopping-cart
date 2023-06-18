'use client'

import { type Product } from '@/modules/products/domain/product'
import { useCallback, useContext } from 'react'
import { FilterContext } from '../context/filterContext'

export const useFilter = () => {
  const context = useContext(FilterContext)

  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }

  const { filters, setFilters } = context

  const filterProducts = useCallback(
    (products: Product[]) => {
      return products.filter(
        (product) =>
          product.price <= filters.price &&
          filters.categories.some(
            (filter) => filter === product.category.toString()
          )
      )
    },
    [filters]
  )

  return { filters, filterProducts, setFilters }
}
