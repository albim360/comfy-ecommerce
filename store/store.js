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
    REMOVE_FROM_CART(state, productId) { 
      const index = state.cartItems.findIndex(item => item.sys.id === productId);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
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
    removeFromCart({ commit }, productId) { 
      commit('REMOVE_FROM_CART', productId);
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
