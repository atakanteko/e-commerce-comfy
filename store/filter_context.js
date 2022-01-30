import { SET_IS_GRID_VIEW } from './action_types';

export const state = () => ({
  is_grid_view: true,
});
export const getters = {
  getGridViewStatus: state => state.is_grid_view,
};
export const actions = {
  setIsGridView: (context, status) => {
    context.commit(SET_IS_GRID_VIEW, status);
  },
};
export const mutations = {
  [SET_IS_GRID_VIEW](state, status) {
    state.is_grid_view = status;
  },
};
