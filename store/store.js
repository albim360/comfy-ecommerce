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
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
      return product;
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
