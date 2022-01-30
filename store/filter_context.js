export const state = () => ({
  items: [],
});
export const getters = {
  getItems: state => state.items,
};
export const actions = {
  setItems: (context, payload) => {
    context.commit('SET', payload);
  },
};
export const mutations = {
  SET(state, payload) {
    state.items.push(payload);
  },
};
