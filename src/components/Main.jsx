
import { CardsComponent } from "./CardsComponent"

export const Main = ({tatoo, setTatoo}) => {
    return (
        <main>
            <img style={{backgroundColor: 'black'}} alt="pic" src="/public/assets/images/bg 2.png"></img>
            <div className="cards">
                {
                    tatoo.map(product => {
                        return (
                            <CardsComponent
                                setTatoo={setTatoo}
                                key={product.model}
                                product={product}

                            />    
                        )
                    })
                }
            </div>
        </main>    
    )
}