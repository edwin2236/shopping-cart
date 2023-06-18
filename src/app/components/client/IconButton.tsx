'use client'

import { type FC } from 'react'
import Button, { type ButtonProps } from './Button'
import { useRouter } from 'next/navigation'
import Router from '@/shared/utils/router'

interface IconButtonProps extends ButtonProps {}

const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
  const router = useRouter()

  const handleRedirectToCart = () => {
    router.push(Router.cart)
  }

  return (
    <Button
      className="h-11 w-11 rounded-full hover:bg-btn-dark dark:text-white hover:dark:bg-btn-hover"
      onClick={handleRedirectToCart}
    >
      {children}
    </Button>
  )
}

export default IconButton
