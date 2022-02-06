import { SET_IS_GRID_VIEW, SET_SELECT_OPTION_VALUE } from './action_types';

export const state = () => ({
  is_grid_view: true,
  optionValue: 'price-lowest',
});
export const getters = {
  getGridViewStatus: state => state.is_grid_view,
  getOptionValue: state => state.optionValue,
};
export const actions = {
  setIsGridView: (context, status) => {
    context.commit(SET_IS_GRID_VIEW, status);
  },
  setOptionValue: (context, optionValue) => {
    context.commit(SET_SELECT_OPTION_VALUE, optionValue);
  },
};
export const mutations = {
  [SET_IS_GRID_VIEW](state, status) {
    state.is_grid_view = status;
  },
  [SET_SELECT_OPTION_VALUE](state, optionValue) {
    state.optionValue = optionValue;
  },
};
