<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msg2 }}</h1>
  </div>
</template>

<script>
import apiService from "../api/api-service.js";

export default {
  name: "HelloWorld",
  data: () => {
    return {
      msg2: "empty",
    };
  },
  props: {
    msg: String,
  },
  methods: {},
  beforeCreate() {
    apiService.getAllProducts().then((data) => (this.msg2 = data));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
