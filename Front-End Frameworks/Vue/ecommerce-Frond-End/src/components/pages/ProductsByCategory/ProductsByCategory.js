import apiService from "../../shared/api/ApiService";

import CategorySideBar from '../../core/CategorySideBar/CaregorySideBar.vue';
import BrandSideBar from '../../core/BrandSideBar/BrandSideBar.vue';
import PriceRangeSideBar from '../../core/PriceRangeSideBar/PriceRangeSideBar.vue';
import Product from '../../core/Product/Product.vue';

export default {

  name: "Shop",
  data: () => {
    return {
      allBrands: [],
      allCategories: [],
      productsOfCategory: [],
    };
  },
  props: {
    msg: String,
  },
  methods: {},
  components: {
    CategorySideBar,
    BrandSideBar,
    PriceRangeSideBar,
    Product,
  },
  beforeCreate() {
    apiService.getAllCategories().then((data) => this.allCategories = data);
    apiService.getAllBrands().then((data) => this.allBrands = data);
    apiService.getOneCategory(this.$route.params).then((data) => this.productsOfCategory = data[0].products)
  },

};