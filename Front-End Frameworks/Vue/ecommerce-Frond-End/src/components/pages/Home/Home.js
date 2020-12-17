import ApiService from "../../../api/ApiService";

import CategorySideBar from '../../core/CategorySideBar/CaregorySideBar.vue'
import BrandSideBar from '../../core/BrandSideBar/BrandSideBar.vue'
import CategoryTab from '../../core/CategoryTab/CategoryTab.vue'
import FeaturesItems from '../../core/FeaturesItems/FeaturesItems.vue'
import PriceRangeSideBar from '../../core/PriceRangeSideBar/PriceRangeSideBar.vue'
import RecomendedItems from '../../core/RecomendedItems/RecomendedItems.vue'

export default {

  name: "Home",
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
    CategoryTab,
    FeaturesItems,
    PriceRangeSideBar,
    RecomendedItems,
  },
  beforeCreate() {
    ApiService.getAllCategories().then((data) => this.allCategories = data);
    ApiService.getAllBrands().then((data) => this.allBrands = data);
    ApiService.getAllProducts().then((data) => this.allProducts = data);
    // ApiService.get.AllProducts.then((data) => this.allProducts = data);
    // ApiService.get.AllCategories.then((data) => this.allCategories = data);
  },

};