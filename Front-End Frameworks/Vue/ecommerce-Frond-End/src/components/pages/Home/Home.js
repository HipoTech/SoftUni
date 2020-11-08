import apiService from "../../../api/api-service";

export default {
  name: "Home",
  data: () => {
    return {};
  },
  props: {
    msg: String,
  },
  methods: {},
  beforeCreate() {
    apiService.get.AllProducts.then((data) => data);
  },
};