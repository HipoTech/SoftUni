import apiService from "../../shared/api/ApiService";

import CategorySideBar from '../../core/CategorySideBar/CaregorySideBar.vue';
import BrandSideBar from '../../core/BrandSideBar/BrandSideBar.vue';
import PriceRangeSideBar from '../../core/PriceRangeSideBar/PriceRangeSideBar.vue';
import Category from '../../core/Category/Category.vue';

export default {

  name: "Categories",
  data: () => {
    return {
      allBrands: [],
      allCategories: [],
      allProducts: [],
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
    Category,
  },
  beforeCreate() {
    apiService.getAllCategories().then((data) => this.allCategories = data);
    apiService.getAllBrands().then((data) => this.allBrands = data);
    apiService.getAllProducts().then((data) => this.allProducts = data);
  },

};