import { createStore, StoreOptions, ActionContext } from "vuex";

interface Product {
  sys: {
    id: string;
  };
  fields: {
    price: number;
  };
}

interface State {
  cartItems: Product[];
}

type ActionContextType = ActionContext<State, State>;

const store: StoreOptions<State> = {
  state() {
    return {
      cartItems: [],
    };
  },
  mutations: {
    ADD_TO_CART(state: State, product: Product) {
      state.cartItems.push(product);
    },
    CLEAR_CART(state: State) {
      state.cartItems = [];
    },
    REMOVE_FROM_CART(state: State, productId: string) {
      const index = state.cartItems.findIndex((item) => item.sys.id === productId);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      }
    },
  },
  actions: {
    addToCart({ commit }: ActionContextType, product: Product) {
      commit("ADD_TO_CART", product);
    },
    clearCart({ commit }: ActionContextType) {
      commit("CLEAR_CART");
    },
    removeFromCart({ commit }: ActionContextType, productId: string) {
      commit("REMOVE_FROM_CART", productId);
    },
  },
  getters: {
    cartTotal: (state: State) => {
      return state.cartItems.reduce((total, item) => total + item.fields.price, 0);
    },
    cartItemCount: (state: State) => {
      return state.cartItems.length;
    },
  },
};

export default createStore(store);
