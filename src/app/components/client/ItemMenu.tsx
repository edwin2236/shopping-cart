'use client'

import { IconShoppingCart } from '@tabler/icons-react'
import { useCart } from '../../hooks/useCart'
import IconButton from './IconButton'

const ItemMenu = () => {
  const { products } = useCart()

  return (
    <div>
      <IconButton>
        <IconShoppingCart stroke={1} size={28} />
        {products.length > 0 && (
          <div className="absolute left-5 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs">
            {products.length}
          </div>
        )}
      </IconButton>
    </div>
  )
}

export default ItemMenu
