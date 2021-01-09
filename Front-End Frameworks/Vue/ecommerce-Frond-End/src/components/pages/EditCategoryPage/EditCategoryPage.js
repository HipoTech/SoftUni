import apiService from "../../shared/api/ApiService";

import processErrorFromBackEnd from '../../shared/helpers/processErrorFromBackEnd';

import CategorySideBar from '../../core/CategorySideBar/CaregorySideBar.vue';
import BrandSideBar from '../../core/BrandSideBar/BrandSideBar.vue';
import PriceRangeSideBar from '../../core/PriceRangeSideBar/PriceRangeSideBar.vue';
import Brand from '../../core/Brand/Brand.vue';
import AppErrorMessage from '../../core/ErrorMessage/ErrorMessage.vue';


export default {

  name: "EditProductPage",
  data: () => {
    return {
      originalName: '',
      categoryName: '',
      categoryImageUrl: '',
      allCategories: [],
      allBrands: [],
      allProducts: [],
      serverError: {
        state: true,
        errorMessage: ''
      },
    };
  },

  methods: {

    editCategory() {
      const categoryData = {
        originalName: this.originalName,
        name: this.categoryName,
        imageUrl: this.categoryImageUrl,
      };
      apiService
        .editCategory(categoryData)
        .then(serverResponse => {
          if (!serverResponse.ok) {
            serverResponse
              .json()
              .then(response => processErrorFromBackEnd(response, this.serverError))
              .catch(e => console.log(`Error from backend response: ${e}`));
          } else {
            this.$router.push({ name: 'Categories' });
          }
        })
        .catch(e => `Categoty creation error: ${e}`);
    },

    fillEditForm(category) {
      this.originalName = category[0].name;
      this.categoryName = category[0].name;
      this.categoryImageUrl = category[0].imageUrl;
    }
  },

  components: {
    CategorySideBar,
    BrandSideBar,
    PriceRangeSideBar,
    AppErrorMessage,
    Brand,
  },

  beforeCreate() {
    apiService.getAllCategories().then((data) => this.allCategories = data);
    apiService.getAllBrands().then((data) => this.allBrands = data);
    apiService.getAllProducts().then((data) => this.allProducts = data);
    apiService.getOneCategory(this.$route.params).then(data => this.fillEditForm(data));
  },
};