import { type FC, type ReactNode } from 'react'

interface CartLayoutProps {
  children: ReactNode
}

const CartLayout: FC<CartLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center gap-10 p-8 dark:text-white">
      {children}
    </div>
  )
}

export default CartLayout
