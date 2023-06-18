import { SummaryCart, TotalInvoice } from '../components'

const CURRENT_TAX = 19

export default function CartPage() {
  return (
    <>
      <section className="w-full">
        <h1 className="text-3xl font-semibold">Cart</h1>
        <table className="w-full">
          <thead className="border-b-[1px] dark:border-filter-color">
            <tr>
              <th className="p-2 font-normal">Product</th>
              <th className="p-2 font-normal">Quantity</th>
              <th className="p-2 font-normal">Price</th>
            </tr>
          </thead>
          <tbody className="p-8">
            <SummaryCart />
          </tbody>
        </table>
      </section>
      <section>
        <TotalInvoice tax={CURRENT_TAX} />
      </section>
    </>
  )
}
