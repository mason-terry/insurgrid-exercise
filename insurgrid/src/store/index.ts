import { createStore } from "vuex";
import carriers from "@/store/modules/carriers";

export default createStore({
  modules: {
    carriers,
  },
});
