import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from "./store.types";
import BDInfoStateModule from "./modules/bd-corona";

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: {
    BDInfoStateModule
  }
};

export default new Vuex.Store<RootState>(store);