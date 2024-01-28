
import { useContext } from "react"
import { ShopContext } from "../App"
import { CardsComponent } from "./CardsComponent"

export const Main = () => {
    const { tatoo } = useContext(ShopContext)

    return (
        <main>
            <img style={{backgroundColor: 'black'}} alt="pic" src="/public/assets/images/bg 2.png"></img>
            <div className="cards">
                {
                    tatoo.map(product => {
                        return ( <CardsComponent key={product.model} product={product}/>)    
                    })
                }
            </div>
        </main>    
    )
}