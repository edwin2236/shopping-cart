'use client'

import {
  type ReactNode,
  createContext,
  useState,
  createServerContext,
} from 'react'

export interface ProductFilter {
  price: number
  categories: string[]
}

interface FilterContextValue {
  filters: ProductFilter
  setFilters(filter: ProductFilter): void
}

export const FilterContext = createContext<FilterContextValue | undefined>(
  undefined
)

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<ProductFilter>({
    price: 300,
    categories: ['men', 'women', 'kid'],
  })

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}
