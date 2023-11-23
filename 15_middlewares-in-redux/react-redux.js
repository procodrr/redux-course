import { createContext, useContext, useEffect, useState } from 'react'

const StoreContext = createContext()

export function Provider({ children, store }) {
  const [state, setState] = useState(store.getState())
  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [])

  return (
    <StoreContext.Provider value={{ state, dispatch: store.dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useDispatch = () => useContext(StoreContext).dispatch
export const useSelector = (selector) =>
  selector(useContext(StoreContext).state)
