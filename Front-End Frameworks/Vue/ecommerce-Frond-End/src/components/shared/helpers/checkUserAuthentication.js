import apiService from "../api/ApiService";
import store from "../store";

const authenticateUser = () => {
  apiService
    .authenticateUser()
    .then((serverResponce) => {
      if (serverResponce.statusText === "Unauthorized") {
        store.commit("logOutUser");
        apiService.logOutUser();
        console.log('You are not logged in!');
      }
    })
    .catch(err => console.log(err));

}

export default authenticateUser