import { useState } from "react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Cards } from "./components/constants/ProductData"

import { createContext } from "react"

export const ShopContext = createContext('')

export const App = () => {
  const [tatoo, setTatoo] = useState(Cards)
  const [cart, setCart] = useState({
    itemsAmount: 0,
    totalPrice: 0,
  })
 
  const ctxObject = {
    cart,
    setCart,
    tatoo,
    setTatoo,
  }

  return (
    <>
    <ShopContext.Provider value={ctxObject}>
      <Header/>
      <Main />
    </ShopContext.Provider>
    </>
  )
}

export default App
