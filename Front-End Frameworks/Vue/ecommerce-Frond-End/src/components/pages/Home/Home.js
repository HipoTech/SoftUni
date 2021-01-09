import apiService from "../../shared/api/ApiService";

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
    apiService.getAllCategories().then((data) => this.allCategories = data);
    apiService.getAllBrands().then((data) => this.allBrands = data);
    apiService.getAllProducts().then((data) => this.allProducts = data);
  },

};