import { useState } from "react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import { Cards } from "./components/constants/ProductData"
import { createContext } from "react"

export const ShopContext = createContext('')

export const App = () => {

  const [tatoo, setTatoo] = useState(Cards)
  const [cart, setCart] = useState(0)
  const [totalProd, setTotalProd] = useState(0)

  const ctxObject = {
    cart,
    setCart,
    tatoo,
    setTatoo,
    totalProd,
    setTotalProd

  }

  return (
    <>
    <ShopContext.Provider value={ctxObject}>
      <Header/>
      <Main />
    </ShopContext.Provider>
    <Footer />
    </>
  )
}

export default App
