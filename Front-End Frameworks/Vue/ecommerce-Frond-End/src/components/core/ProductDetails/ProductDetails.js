import apiService from '../../shared/api/ApiService';

export default {
  name: "ProductDetails",
  data() {
    return {
      product: {}
    }
  },
  beforeCreate() {
    apiService.getOneProduct(this.$route.params).then(data => this.product = data);
  }
};