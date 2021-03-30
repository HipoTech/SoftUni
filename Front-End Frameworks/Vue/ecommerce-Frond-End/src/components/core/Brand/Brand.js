import apiService from '../../shared/api/ApiService';

export default {
  name: "Brand",
  props: {
    brand: Object,
  },

  methods: {
    deleteProduct(productId, productBrand, productCategory) {
      console.log('deleted');
      const productData = {
        _id: productId,
        brand: productBrand,
        category: productCategory
      }
      apiService.deleteProduct(productData)
        .then(this.$router.push('/home'))
        .catch(e => console.log(e));
    }
  }
};