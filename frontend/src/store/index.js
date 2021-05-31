import { createStore } from "vuex";
import model from "../model/model.js";
export default createStore({
  state: {
    model: new model(),
  },
  mutations: {
    ADD(state, { title, text }) {
      state.model.add(title, text);
    },
    DELETE(state, id) {
      state.model.delete(id);
    },
    EDIT(state, { id, title, text }) {
      state.model.edit(id, title, text);
    },
    LOAD(state) {
      state.model.getItemsFromServer();
    },
  },
  actions: {
    ADD({ commit }, { title, text }) {
      commit("ADD", { title, text });
    },
    DELETE({ commit }, id) {
      commit("DELETE", id);
    },
    EDIT({ commit }, { id, title, text }) {
      commit("EDIT", { id, title, text });
    },
    LOAD({ commit }) {
      commit("LOAD");
    },
  },
  modules: {},
});
