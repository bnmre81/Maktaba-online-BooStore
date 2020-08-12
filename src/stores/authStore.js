import { decorate } from "mobx";
import axios from "axios";

class AuthStore {
  signup = async (userData) => {
    try {
      await axios.post("http://localhost:8000/signup", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
}

decorate(AuthStore, {});

const AuthStore = new AuthStore();

export default AuthStore;
