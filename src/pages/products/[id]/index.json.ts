import { getProduct } from '../../../data/productsStore'

export async function GET({ params, request }) {
  const id = params.id;
  const product = getProduct(id);

  return new Response(
    JSON.stringify(product)
  )
}

export function getStaticPaths() {
  return [
    { params: { id: "hunnie-bunnys-garden" } },
    // { params: { id: "1" } },
    // { params: { id: "2" } },
    // { params: { id: "3" } }
  ]
}