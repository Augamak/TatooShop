import { useState } from "react"
import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import { Cards } from "./components/constants/ProductData"

export const App = () => {

  const[tatoo, setTatoo] = useState(Cards)


  return (
    <>
      <Header/>
      <Main tatoo={tatoo} setTatoo={setTatoo}/>
      <Footer />
    </>
  )
}

export default App
