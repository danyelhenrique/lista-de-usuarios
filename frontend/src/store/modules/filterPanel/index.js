const state = {
  isOpen: false,
};

const mutations = {
  TOOGLE_PANEL(state) {
    state.isOpen = !state.isOpen;
  },
};

const actions = {};

export default {
  state,
  mutations,
  actions,
};
