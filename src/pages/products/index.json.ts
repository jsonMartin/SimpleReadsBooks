import products from '../../data/products.json'

export async function GET({ params, request }) {
  return new Response(
    JSON.stringify(products)
  )
}