import { getAllProductsUseCase } from '@/modules/products/infrastructure/di'
import { Container, Dropdown, Filter } from './components'
import ListProduct from './components/client/ListProduct'

export default async function HomePage() {
  const products = await getAllProductsUseCase.call()

  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ]

  return (
    <main className="flex gap-6 px-6 pb-8 pt-4">
      <Filter />
      <Container>
        <div className="flex items-center justify-end pb-4">
          <Dropdown options={options} placeholder="Sort By" />
        </div>
        <ListProduct products={products} />
      </Container>
    </main>
  )
}
