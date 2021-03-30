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
      valid: false,
      validation: {
        name: [
          v => !!v || 'Name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters',
        ],
        artNumber: [
          v => !!v || 'Articule number is required',
          v => (!v.length || v.length > 5) || 'The articule number must be more then 5 characters',
        ],
      },
      originalName: '',
      brandName: '',
      brandImageUrl: '',
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

    editBrand() {
      const brandData = {
        originalName: this.originalName,
        name: this.brandName,
        imageUrl: this.brandImageUrl,
      };
      apiService
        .editBrand(brandData)
        .then(serverResponse => {
          if (!serverResponse.ok) {
            serverResponse
              .json()
              .then(response => processErrorFromBackEnd(response, this.serverError))
              .catch(e => console.log(`Error from backend response: ${e}`));
          } else {
            this.$router.push({ name: 'Brands' });
          }
        })
        .catch(e => `Brand creation error: ${e}`);
    },

    fillEditForm(brand) {
      this.originalName = brand[0].name;
      this.brandName = brand[0].name;
      this.brandImageUrl = brand[0].imageUrl;
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
    apiService.getOneBrand(this.$route.params).then(data => this.fillEditForm(data));
  },
};