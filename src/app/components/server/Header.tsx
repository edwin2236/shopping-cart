import Router from '@/shared/utils/router'
import { Lobster } from 'next/font/google'
import Link from 'next/link'

import ItemMenu from '../client/ItemMenu'

const lobster = Lobster({ subsets: ['latin'], weight: '400' })

const Header = () => {
  return (
    <header className="flex h-[70px] items-center justify-between border-b-[1px] border-[#e5e5e5] px-8 dark:border-[#5f6368]">
      <Link
        className={`${lobster.className} text-3xl font-bold dark:text-white`}
        href={{ pathname: Router.home }}
      >
        Shopping Cart
      </Link>

      <ItemMenu />
    </header>
  )
}

export default Header
