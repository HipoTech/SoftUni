import ProductSmall from '../ProductSmall/ProductSmall.vue';

export default {
  name: "RecomendedItems",
  props: {
    allProducts: Array,
  },
  components: {
    ProductSmall,
  }
};