import { GetAllProductsUseCase } from '../../application/getAllProducts'
import { ProductServerRepository } from '../repository/server/ProductLocalRepository'

// ? repositories
const productLocalRepository = new ProductServerRepository()

// ? usecases
export const getAllProductsUseCase = new GetAllProductsUseCase(
  productLocalRepository
)
