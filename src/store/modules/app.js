
const app = {
  state: {
    oneTest: 'one-test',
    count: 1
  },
  mutations: {
    sayHelloApp (state) {
      console.log('store app module say hello!')
    },
    increment (state, payload) {
      state.count += payload.amount
    }
  }
}

export default app
