import apiService from "../../shared/api/ApiService";

import processErrorFromBackEnd from '../../shared/helpers/processErrorFromBackEnd';

import CategorySideBar from '../../core/CategorySideBar/CaregorySideBar.vue';
import BrandSideBar from '../../core/BrandSideBar/BrandSideBar.vue';
import PriceRangeSideBar from '../../core/PriceRangeSideBar/PriceRangeSideBar.vue';
import Brand from '../../core/Brand/Brand.vue';
import AppErrorMessage from '../../core/ErrorMessage/ErrorMessage.vue';


export default {

  name: "CreateProductPage",
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
          v => v.length > 5 || 'The articule number must be more then 5 characters',
        ],
        price: [
          v => !!v || 'Please enter a price',
        ],
        condition: [
          v => !!v || 'Please enter a condition',
        ],
        brandDropDownRules: [
          v => !!v || 'Please select a Brand',
        ],
        categoryDropDownRules: [
          v => !!v || 'Please select a Category',
        ],
        imageUrl: [
          v => !!v || 'Please enter a URL for the image of the product',
        ],
        description: [
          v => !!v || 'Please enter a description of the product',
          v => v.length > 10 || 'The description must be more then 10 characters',
        ],
      },
      title: '',
      webId: '',
      price: '',
      condition: '',
      brand: '',
      category: '',
      description: '',
      availability: false,
      featuredItem: false,
      recommended: false,
      onSlider: false,
      imageUrl: '',
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
    createProduct() {
      const productData = {
        title: this.title,
        webId: this.webId,
        price: this.price,
        imageUrl: this.imageUrl,
        condition: this.condition,
        description: this.description,
        brand: this.brand,
        category: this.category,
        availability: this.availability,
        onSlider: this.onSlider,
        featuredItem: this.featuredItem,
        recommended: this.recommended,
      };
      apiService
        .createProduct(productData)
        .then(serverResponse => {
          if (!serverResponse.ok) {
            serverResponse
              .json()
              .then(response => processErrorFromBackEnd(response, this.serverError))
              .catch(e => console.log(`Error from backend response: ${e}`));
          } else {
            serverResponse.json().then(newProductData => {
              this.$router.push({ name: 'ProductDetails', params: { id: newProductData.result._id } });
            })
          }
        })
        .catch(e => `Brand creation error: ${e}`);
    },
    validate() {
      this.$refs.form.validate()
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
  }
};