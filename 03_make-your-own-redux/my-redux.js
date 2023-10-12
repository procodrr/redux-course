export function myCreateStore(reducer) {
  let state
  const listeners = []
  const store = {
    getState() {
      return state
    },
    dispatch(action) {
      state = reducer(state, action)
      listeners.forEach((listener) => {
        listener()
      })
    },
    subscribe(listener) {
      listeners.push(listener)
      return function () {
        const listenerIndex = listeners.findIndex(
          (registeredListeners) => registeredListeners === listener
        )
        listeners.splice(listenerIndex, 1)
      }
    },
  }

  store.dispatch({ type: '@@INIT' })
  return store
}
