'use client'

import { type FC } from 'react'

import Button from './Button'
import { useCart } from '../../hooks/useCart'

interface TotalInvoiceProps {
  tax: number
}

const DOLLAR_FORMAT = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const TotalInvoice: FC<TotalInvoiceProps> = ({ tax }) => {
  const { subtotal } = useCart()

  const getInvoiceTotal = () => {
    return subtotal + (subtotal * tax) / 100
  }

  return (
    <div className="flex min-w-[350px] flex-col rounded-lg border-[1px] p-4 dark:border-filter-color">
      <div className="flex items-center justify-between p-2">
        <div>Subtotal:</div>
        <div>{DOLLAR_FORMAT.format(subtotal)}</div>
      </div>
      <div className="flex items-center justify-between p-2">
        <div>Tax:</div>
        <div>{tax}%</div>
      </div>
      <div className="my-3 h-[1px] border-t-[1px] border-dashed"></div>
      <div className="flex items-center justify-between p-2">
        <div>Total:</div>
        <div>{DOLLAR_FORMAT.format(getInvoiceTotal())}</div>
      </div>
      <Button className="mt-4 w-full rounded bg-teal-700 py-7 font-semibold text-white hover:bg-teal-600 dark:bg-teal-300 dark:text-black dark:hover:bg-teal-200">
        Checkout now
      </Button>
    </div>
  )
}

export default TotalInvoice
