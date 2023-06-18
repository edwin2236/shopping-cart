import { type Product } from '../../domain/product'

export function fromJsonToProducts({ ...params }: Product) {
  return { ...params }
}
