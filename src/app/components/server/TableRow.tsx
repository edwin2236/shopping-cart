import Image from 'next/image'
import { type FC } from 'react'

import { type ProductInCart } from '@/modules/products/domain/product'
import CounterProduct from '../client/CounterProduct'
import ProductSizes from '../client/ProductSizes'

interface TableRowProps {
  product: ProductInCart
  isLastOfList: boolean
}

const DOLLAR_FORMAT = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const TableRow: FC<TableRowProps> = ({ product, isLastOfList }) => {
  const tableBorder = 'border-b-[1px] dark:border-filter-color'

  return (
    <tr key={product.id} className={`${isLastOfList ? tableBorder : ''}`}>
      <td className="p-6">
        <div className="flex gap-4">
          <Image
            className="rounded"
            alt="Product"
            src={`/static/images/products/${product.images[0]}`}
            blurDataURL={`/static/images/products/${product.images[0]}`}
            placeholder="blur"
            width={100}
            height={100}
          />
          <div className="flex flex-col gap-2">
            <div className="font-bold">{product.title}</div>
            <div className="flex items-center gap-2">
              <ProductSizes
                productId={product.id}
                sizes={product.sizes}
                selectedSize={product.selectedSize}
              />
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <CounterProduct product={product} />
        </div>
      </td>
      <td className="text-center">{DOLLAR_FORMAT.format(product.price)}</td>
    </tr>
  )
}

export default TableRow
