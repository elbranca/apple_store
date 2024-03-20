import { createStore } from 'vuex'

export default createStore({
  state:() =>({
    bool: false,
    products:[] as Array<any>
  }),
  getters: {
    productsCount(state){
      return state.products.length;
    },
    productsAdded(state){
      return state.products;
    }
  },
  mutations: {
    addProduct(state, product){
      state.products.push(product);
    }
  },
  actions: {
    addProduct(context, product){
      context.commit('addProduct',product);
    }
  },
  modules: {
  }
})
