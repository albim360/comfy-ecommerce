import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      cartItems: [],
    };
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cartItems.push(product);
    },
    CLEAR_CART(state) {
      state.cartItems = [];
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
      return product;
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },
  },
  getters: {
    cartTotal: (state) => {
      return state.cartItems.reduce((total, item) => total + item.fields.price, 0);
    },
    cartItemCount: (state) => {
      return state.cartItems.length;
    },
  },
});
