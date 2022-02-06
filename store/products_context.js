import axios from 'axios';
import { productsUrl, singleProductUrl } from '../utils/api_urls.js';
import {
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_LOADING,
  GET_SINGLE_PRODUCT_SUCCESS,
  LOAD_PRODUCTS,
  SET_LOADING,
  SET_SORTED_PRODUCTS,
} from './action_types';

export const state = () => ({
  product_loading: false,
  product_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  all_products: [],
  filter_products: [],
});

export const getters = {
  getProductLoadingStatus: state => state.product_loading,
  getFeaturedProducts: state => state.featured_products,
  getSingleProductLoadingStatus: state => state.single_product_loading,
  getSingleProductErrorStatus: state => state.single_product_error,
  getSingleProduct: state => state.single_product,
  getAllProducts: state => state.all_products,
  getFilterProducts: state => state.filter_products,
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
      context.commit(LOAD_PRODUCTS, products);
      const featuredProducts = products.filter(item => item.featured === true);
      context.commit(GET_PRODUCTS_SUCCESS, featuredProducts);
      await context.dispatch('setLoading', false);
    } catch (error) {
      await context.dispatch('setLoading', true);
    }
  },
  fetchSingleProduct: async (context, id) => {
    await context.dispatch('setSingleProductLoading', true);
    try {
      const response = await axios.get(`${singleProductUrl}${id}`);
      const product = response.data;
      context.commit(GET_SINGLE_PRODUCT_SUCCESS, product);
      await context.dispatch('setSingleProductLoading', false);
    } catch (error) {
      await context.dispatch('setSingleProductLoading', false);
      await context.dispatch('setSingleProductError', true);
    }
  },
  setSingleProductLoading: ({ commit }, status) => {
    commit(GET_SINGLE_PRODUCT_LOADING, status);
  },
  setSingleProductError: ({ commit }, errorStatus) => {
    commit(GET_SINGLE_PRODUCT_ERROR, errorStatus);
  },
  applySortFunctionality: (context, { value, filteredProducts }) => {
    let tempProducts = [...filteredProducts];
    switch (value) {
    case 'price-lowest':
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-highest':
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      break;
    case 'name-a':
      tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-z':
      tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      tempProducts = [...filteredProducts];
    }
    context.commit(SET_SORTED_PRODUCTS, tempProducts);
  },
};

export const mutations = {
  [SET_LOADING](state, loadingStatus) {
    state.product_loading = loadingStatus;
  },
  [GET_SINGLE_PRODUCT_LOADING](state, status) {
    state.single_product_loading = status;
  },
  [GET_SINGLE_PRODUCT_ERROR](state, errorStatus) {
    state.single_product_error = errorStatus;
  },
  [GET_PRODUCTS_SUCCESS](state, featuredProducts) {
    state.featured_products.push(featuredProducts);
  },
  [GET_SINGLE_PRODUCT_SUCCESS](state, singleProduct) {
    state.single_product = { ...state.single_product, ...singleProduct };
  },
  [LOAD_PRODUCTS](state, products) {
    state.all_products.push(...products);
    state.filter_products.push(...products);
  },
  [SET_SORTED_PRODUCTS](state, sortedProducts) {
    state.filter_products = sortedProducts;
  },
};
