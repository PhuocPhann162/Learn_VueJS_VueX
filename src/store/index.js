export default {
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Product 3", price: 60 },
      { name: "Product 1", price: 80 },
    ],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    updateProducts({ commit }, products) {
      commit("setProducts", products);
    },
  },
};
