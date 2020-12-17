import Product from '../Product/Product.vue';

export default {
  name: "FeaturesItems",
  props: {
    allProducts: Array,
  },
  components: {
    Product,
  }
};