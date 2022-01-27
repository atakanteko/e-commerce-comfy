// import { productsUrl } from '../utils/api_urls.js'
import { SET_LOADING } from './action_types';

export const state = () => ({
  product_loading: false,
  product_error: false,
  products: [],
  featured_products: [],
});

export const getters = {
  getProductLoadingStatus: state => state.product_loading,
};

export const actions = {
  setLoading: ({ commit }, loadingStatus) => {
    commit(SET_LOADING, loadingStatus);
  },
};

export const mutations = {
  [SET_LOADING](state, loadingStatus) {
    state.product_loading = loadingStatus;
  },
};
