import apiService from "../../../api/api-service";

import CategorySideBar from '../../core/CategorySideBar/CaregorySideBar.vue'
import BrandSideBar from '../../core/BrandSideBar/BrandSideBar.vue'
import CategoryTab from '../../core/CategoryTab/CategoryTab.vue'
import FeaturesItems from '../../core/FeaturesItems/FeaturesItems.vue'

export default {

  name: "Home",
  data: () => {
    return {};
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

  },
  beforeCreate() {
    apiService.get.AllProducts.then((data) => data);
  },

};