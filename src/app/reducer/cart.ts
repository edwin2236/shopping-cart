import { type ProductInCart } from '@/modules/products/domain/product'

export const enum CartKindAction {
  ADD_PRODUCT,
  REDUCE_QUANTITY,
  DELETE_PRODUCT,
  CLEAR_PRODUCTS,
  SELECTED_PRODUCT_SIZE,
}

interface SizeOfProduct {
  productId: number
  size: string
}

interface CartAction {
  type: CartKindAction
  payload?: ProductInCart | number | SizeOfProduct
}

interface CartState {
  products: ProductInCart[]
}

export const CartReducer = (state: CartState, action: CartAction) => {
  const { type, payload } = action

  const findProductIndexById = (productId: number) => {
    const products = structuredClone(state.products)
    const productInCartIndex = products.findIndex(
      (item) => item.id === productId
    )

    return { products, productInCartIndex }
  }

  switch (type) {
    case CartKindAction.ADD_PRODUCT: {
      const product = payload as ProductInCart
      const { products, productInCartIndex } = findProductIndexById(product.id)

      if (productInCartIndex >= 0) {
        products[productInCartIndex].quantity += 1
      } else {
        products.push({ ...product, quantity: 1 })
      }

      return { ...state, products }
    }

    case CartKindAction.REDUCE_QUANTITY: {
      const { products, productInCartIndex } = findProductIndexById(
        payload as number
      )

      if (productInCartIndex >= 0) {
        products[productInCartIndex].quantity -= 1
      }

      return { ...state, products }
    }

    case CartKindAction.SELECTED_PRODUCT_SIZE: {
      const sizeOfProduct = payload as SizeOfProduct
      const { products, productInCartIndex } = findProductIndexById(
        sizeOfProduct.productId
      )

      if (productInCartIndex >= 0) {
        products[productInCartIndex].selectedSize = sizeOfProduct.size
      }

      return { ...state, products }
    }

    case CartKindAction.DELETE_PRODUCT: {
      const products = state.products.filter(
        (product) => product.id !== payload
      )
      return { ...state, products }
    }

    case CartKindAction.CLEAR_PRODUCTS:
      return { ...state, products: [] as ProductInCart[] }

    default:
      return state
  }
}
