import products from '@/mock/products.json'

export function GET() {
  return new Response(JSON.stringify(products))
}
