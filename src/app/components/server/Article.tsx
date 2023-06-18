import { Pacifico } from 'next/font/google'
import Image from 'next/image'
import { type FC } from 'react'

import { type ProductInCart } from '@/modules/products/domain/product'
import ArticleAction from '../client/ArticleAction'

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })

interface ArticleProps {
  product: ProductInCart
}

const Article: FC<ArticleProps> = ({ product }) => {
  return (
    <article className="flex w-64 cursor-pointer flex-col overflow-hidden rounded-lg border-[1px] bg-btn hover:bg-btn-hover hover:shadow-2xl dark:border-none dark:text-white">
      <header>
        <Image
          alt="product"
          className="h-auto w-auto"
          src={`/static/images/products/${product.images[0]}`}
          width={256}
          height={256}
          priority
        />
      </header>
      <div className="h-full p-4">
        <p className={`${pacifico.className} mb-4 mt-2 text-4xl`}>
          ${product.price.toLocaleString()}
        </p>
        <h4 className="mb-2 line-clamp-2 text-ellipsis font-semibold">
          {product.title}
        </h4>
        <p className="line-clamp-3 text-ellipsis text-sm">
          {product.description}
        </p>
      </div>
      <footer>
        <ArticleAction label="Add to Cart" product={product} />
      </footer>
    </article>
  )
}

export default Article
