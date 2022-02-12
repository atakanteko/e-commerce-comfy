import {
  actions as productActions,
  getters as productGetters,
  mutations as productMutations,
  state as productState,
} from '../store/products_context';

const modules = {
  products_context: {
    namespaced: true,
    state: productState(),
    getters: productGetters,
    actions: productActions,
    mutations: productMutations,
  },
};
export default modules;
