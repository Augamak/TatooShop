export const Header = () => {
    return (
        <header className="header">
            <div className="contacts">
                <img className="headerImg" alt="pic" src="/public/assets/images/call.png"></img>
                <p className="number">+7 952 552-52-52</p>
            </div>
            
            <div className="logo">
                <p className="logoName">MR.DRISKELL</p>
                <p className="logoShop">TATTO SHOP</p>
            </div>
            <img className="headerImg" alt="cart" src="/public/assets/images/Cart.png"></img>
        </header>    
    )
}