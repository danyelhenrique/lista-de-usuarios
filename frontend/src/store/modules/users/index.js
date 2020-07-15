const state = {
  users: [],
};

const mutations = {
  ADD_USER(state, payload) {
    state.users = payload.user;
  },
  LOAD_USERS(state, payload) {
    state.users = payload.users;
  },
};

const actions = {};

export default {
  state,
  mutations,
  actions,
};
