import api from './api-addresses'


async function getAllProducts() {
  const allProducts = await fetch(api.allItems, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/html',
    }
  })

  return allProducts.json()

}

export default {
  getAllProducts
}