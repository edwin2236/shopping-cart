export const enum CategoryType {
  FEMALE = 'women',
  MALE = 'men',
  KID = 'kid',
}

export interface Product {
  id: number
  title: string
  description: string
  stock: number
  images: string[]
  price: number
  category: CategoryType
  sizes: string[]
}

export interface ProductInCart extends Product {
  quantity: number
  selectedSize?: string
}
