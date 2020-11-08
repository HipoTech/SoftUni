import api from './api-addresses'

const apiControler = {
  allProducts(element) {
    const getAll = fetch(element, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/html',
      }
    })

    return getAll
  }
}

const get = {
  get AllProducts() {
    return (
      async () => {
        const getAllProducts = await apiControler.allProducts(api.allItems)
        return getAllProducts.json()
      })();
  }

}

export default {
  get
}