import { CategoryType, type Product } from '../../../domain/product'
import { type ProductRepository } from '../../../domain/productRepository'
import { fromJsonToProducts } from '../../adapters/fromJsonToProduct'
import Router from '@/shared/utils/router'

const BASE_URL = process.env.BASE_URL ?? ''

export class ProductServerRepository implements ProductRepository {
  private getCategory(gender: string) {
    switch (gender) {
      case 'men':
        return CategoryType.MALE
      case 'women':
        return CategoryType.FEMALE
      case 'kid':
        return CategoryType.KID
      default:
        return CategoryType.MALE
    }
  }

  async getAll(): Promise<Product[]> {
    const resp = await fetch(BASE_URL + Router.productsApi, {
      cache: 'no-store',
    })
    const data = await resp.json()

    return data.products.map((product: any) =>
      fromJsonToProducts({
        id: product.id,
        title: product.title,
        description: product.description,
        stock: product.inStock,
        price: product.price,
        category: this.getCategory(product.gender),
        sizes: product.sizes,
        images: product.images,
      })
    )
  }
}
