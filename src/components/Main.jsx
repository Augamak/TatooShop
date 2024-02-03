
import { useContext } from "react"
import { ShopContext } from "../App"
import { CardsComponent } from "./CardsComponent"

export const Main = () => {
    const { tatoo } = useContext(ShopContext)

    return (
        <main className="main">
            <img className="mainImg" style={{backgroundColor: 'black'}} alt="pic" src="/public/assets/images/bg 2.png" /> 
            <div className="mainCardsSection">
                <div className="cards">
                    {tatoo.map((product) => {
                        return <CardsComponent key={product.model} product={product} />
                    })}
                </div>
            </div>
           
                
        </main>    
    )
}