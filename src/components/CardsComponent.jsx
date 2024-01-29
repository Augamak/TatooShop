import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../App";

export const CardsComponent = (props) => {

    const {setCart, setTatoo} = useContext(ShopContext)

    const [amount, setAmount] = useState(0);



    const minusHandler = () => {
        if (amount == 0) return
        setAmount(amount - 1)
    }
    const plusHandler = () => {
        setAmount(amount + 1)
    }
    const addToCartHandler = () => {
        setCart((prev) => {
            return {
                ...prev,
                itemsAmount: prev.itemsAmount + amount,
                totalPrice: prev.totalPrice + amount * props.product.price, 
            }

        })
        setAmount (0)
    }

    const favHandler = () => {
        setTatoo(prev => {
            const temp = [...prev];
            temp.forEach(product => {
                if(props.product.id === product.id) {
                    product.favorite = !product.favorite
                }

            })
            return temp
        })
    }
    

    return (
        <div className="cards-post">
            <div className={props.product.favorite ? "favorite plus" : "favorite"} onClick={favHandler}>
                <svg className="plus" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path className="plus" fill-rule="evenodd" clip-rule="evenodd" d="M22.262 14.626V14.6229C22.7615 14.1003 23.1543 13.4847 23.418 12.8107C23.697 12.0976 23.8254 11.3346 23.7952 10.5695C23.765 9.80439 23.5768 9.05382 23.2424 8.36499C22.9081 7.67616 22.4348 7.06397 21.8524 6.56691C21.27 6.06986 20.591 5.69869 19.8582 5.47676C19.1253 5.25483 18.3545 5.18694 17.5942 5.27735C16.8339 5.36777 16.1005 5.61453 15.4401 6.00212C14.8934 6.32303 14.4065 6.73474 14 7.21867C13.5935 6.73474 13.1066 6.32303 12.5599 6.00212C11.8995 5.61453 11.1661 5.36777 10.4058 5.27735C9.64545 5.18694 8.87463 5.25483 8.14181 5.47676C7.40899 5.69869 6.73002 6.06986 6.14759 6.56691C5.56517 7.06397 5.0919 7.67616 4.75755 8.36499C4.42319 9.05382 4.23498 9.80439 4.20476 10.5695C4.17454 11.3346 4.30296 12.0976 4.58195 12.8107C4.86093 13.5238 5.28446 14.1714 5.82587 14.7128L14 22.8859L22.262 14.626ZM7.04399 13.6674L14 20.6244L21.0438 13.5786C21.4419 13.1804 21.7503 12.7016 21.9483 12.1745C22.1462 11.6473 22.2292 11.084 22.1916 10.5221C22.154 9.96029 21.9967 9.41299 21.7303 8.91692C21.4638 8.42084 21.0944 7.98747 20.6468 7.64585C20.1992 7.30423 19.6837 7.06227 19.1349 6.93618C18.5861 6.81009 18.0167 6.8028 17.4648 6.91478C16.913 7.02677 16.3915 7.25544 15.9352 7.58548C15.479 7.91552 15.0986 8.33928 14.8196 8.82836L14.7332 8.97969H13.2668L13.1804 8.82836C12.9014 8.33928 12.521 7.91552 12.0647 7.58548C11.6085 7.25544 11.087 7.02677 10.5351 6.91478C9.98329 6.8028 9.41389 6.81009 8.86509 6.93618C8.3163 7.06227 7.80081 7.30423 7.35318 7.64585C6.90556 7.98747 6.53614 8.42084 6.26971 8.91692C6.00328 9.41299 5.846 9.96029 5.8084 10.5221C5.7708 11.084 5.85375 11.6473 6.05171 12.1745C6.24966 12.7016 6.55803 13.1804 6.95615 13.5786L7.04399 13.6674Z" fill="#524336"/>
                </svg>
            </div>
            <img className="card-img" src={props.product.image}></img>
            <p className="model">{props.product.model}</p>
            <p className="price">{props.product.price}</p>
            <button className="cartButton" onClick={addToCartHandler}>{props.product.button}</button>
        

            <div >
                <div className="card-counter">
                    <button className="handler minus" onClick={minusHandler}>-</button>
                    <div className="amount">{amount}</div>
                    <button className="handler plus" onClick={plusHandler}>+</button>
                </div>
            </div>
        </div>
    )
}