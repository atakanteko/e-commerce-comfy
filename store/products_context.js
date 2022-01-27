import axios from 'axios';
import { productsUrl } from '../utils/api_urls.js';
import { GET_PRODUCTS_SUCCESS, SET_LOADING } from './action_types';

export const state = () => ({
  product_loading: false,
  product_error: false,
  products: [],
  featured_products: [],
});

export const getters = {
  getProductLoadingStatus: state => state.product_loading,
  getFeaturedProducts: state => state.featured_products,
};

export const actions = {
  setLoading: ({ commit }, loadingStatus) => {
    commit(SET_LOADING, loadingStatus);
  },
  fetchProducts: async context => {
    await context.dispatch('setLoading', true);
    try {
      const response = await axios.get(productsUrl);
      const products = response.data;
      const featuredProducts = products.filter(item => item.featured === true);
      context.commit(GET_PRODUCTS_SUCCESS, featuredProducts);
      await context.dispatch('setLoading', false);
    } catch (error) {
      console.log(error);
      await context.dispatch('setLoading', true);
    }
  },
};

export const mutations = {
  [SET_LOADING](state, loadingStatus) {
    state.product_loading = loadingStatus;
  },
  [GET_PRODUCTS_SUCCESS](state, featuredProducts) {
    state.featured_products.push(featuredProducts);
  },
};
