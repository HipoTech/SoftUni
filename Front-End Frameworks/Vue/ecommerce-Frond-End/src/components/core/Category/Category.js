import apiService from '../../shared/api/ApiService';

export default {
  name: "Category",
  props: {
    category: Object,
  },

  methods: {
    deleteCategory(categiryId) {
      console.log('deleted');
      const categiryData = {
        _id: categiryId,
      }
      apiService.deleteCategory(categiryData)
        .catch(e => console.log(e));
    }
  }
};