import apiService from '../../shared/api/ApiService';

export default {
  name: "Product",
  computed: {
    isLoggedIn() { return this.$store.state.users.isLoggedIn },
    // userName() { return this.$store.state.users.userName },
    // isAdmin() { return this.$store.state.users.isAdmin },

  },
  props: {
    product: Object,
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