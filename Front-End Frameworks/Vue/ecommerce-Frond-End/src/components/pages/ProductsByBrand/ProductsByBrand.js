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
      productsOfBrand: [],
    };
  },
  components: {
    CategorySideBar,
    BrandSideBar,
    PriceRangeSideBar,
    Product,
  },
  watch: {
    '$route.params.id': function () {
      apiService.getAllCategories().then((data) => this.allCategories = data);
      apiService.getAllBrands().then((data) => this.allBrands = data);
      apiService.getOneBrand(this.$route.params).then((data) => this.productsOfBrand = data[0].products);
    }
  },
  beforeCreate() {
    apiService.getAllCategories().then((data) => this.allCategories = data);
    apiService.getAllBrands().then((data) => this.allBrands = data);
    apiService.getOneBrand(this.$route.params).then((data) => this.productsOfBrand = data[0].products);
  },
};