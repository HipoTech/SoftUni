import apiService from "../../shared/api/ApiService";

import router from '../../../router';
import processErrorFromBackEnd from '../../shared/helpers/processErrorFromBackEnd';

import CategorySideBar from '../../core/CategorySideBar/CaregorySideBar.vue';
import BrandSideBar from '../../core/BrandSideBar/BrandSideBar.vue';
import PriceRangeSideBar from '../../core/PriceRangeSideBar/PriceRangeSideBar.vue';
import Brand from '../../core/Brand/Brand.vue';
import AppErrorMessage from '../../core/ErrorMessage/ErrorMessage.vue';


export default {

  name: "CreateBrandPage",
  data: () => {
    return {
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      brandName: '',
      brandImageUrl: '',
      allCategories: [],
      allBrands: [],
      serverError: {
        state: true,
        errorMessage: ''
      },
    };
  },

  methods: {
    createBrand() {
      const brandData = {
        name: this.brandName,
        imageUrl: this.brandImageUrl,
      };
      apiService
        .createBrand(brandData)
        .then(serverResponse => {
          if (!serverResponse.ok) {
            serverResponse
              .json()
              .then(response => processErrorFromBackEnd(response, this.serverError))
              .catch(e => console.log(`Error from backend response: ${e}`));
          } else {
            router.push({ name: 'Brands' });
          }
        })
        .catch(e => `Brand creation error: ${e}`);
    },
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
  },

  mounted() {
    this.$refs.form.validate();
  },

};