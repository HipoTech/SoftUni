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
      id: '',
      title: '',
      webId: '',
      price: '',
      condition: '',
      brand: '',
      brandCurrent: '',
      category: '',
      categoryCurrent: '',
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
    getSelectdBran(event) {
      this.brand = event.target.value;
    },

    getSelectdCategory(event) {
      this.category = event.target.value;
    },

    editProduct() {
      const productData = {
        id: this.id,
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
      console.log(productData);
      apiService
        .editProduct(productData)
        .then(serverResponse => {
          if (!serverResponse.ok) {
            serverResponse
              .json()
              .then(response => processErrorFromBackEnd(response, this.serverError))
              .catch(e => console.log(`Error from backend response: ${e}`));
          } else {
            this.$router.push({ name: 'ProductDetails', params: { id: this.id } });
          }
        })
        .catch(e => `Brand creation error: ${e}`);
    },

    fillEditForm(product) {
      this.id = product._id;
      this.title = product.title;
      this.webId = product.webId;
      this.price = product.price;
      this.condition = product.condition;
      this.brand = product.brand._id;
      this.brandCurrent = product.brand;
      this.category = product.category._id;
      this.categoryCurrent = product.category;
      this.description = product.description;
      this.availability = product.availability;
      this.featuredItem = product.featuredItem;
      this.recommended = product.recommended;
      this.onSlider = product.onSlider;
      this.imageUrl = product.imageUrl;
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
    apiService.getOneProduct(this.$route.params).then(data => this.fillEditForm(data)).then(() => this.$refs.form.validate());
  },
};