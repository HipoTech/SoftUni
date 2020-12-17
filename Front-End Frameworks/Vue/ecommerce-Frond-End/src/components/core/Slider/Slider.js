import ProductSmall from '../ProductSmall/ProductSmall.vue';

export default {
  name: "Slider",
  props: {
    allProducts: Array,
  },
  components: {
    ProductSmall,
  }
};