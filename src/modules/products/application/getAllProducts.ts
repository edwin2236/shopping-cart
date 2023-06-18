import { type ProductRepository } from '../domain/productRepository'

export class GetAllProductsUseCase {
  constructor(private readonly repository: ProductRepository) {}

  async call() {
    return await this.repository.getAll()
  }
}
