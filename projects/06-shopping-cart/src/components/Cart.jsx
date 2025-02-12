import './Cart.css'
import { useId } from "react";
import { AddToCartIcon, CartIcon,ClearCartIcon, RemoveFromCartIcon } from "./icons";
import { useCart } from '../hooks/useCart';
import Products from './Products';

const CartItem = ({thumbnail,price,title,quantity,addToCart}) =>{
    return(
        <li>
            <img 
                src={thumbnail} 
                alt={title} 
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart} style={{color: 'white'}}>+</button>
            </footer>
        </li>
    )
}


const Cart = () => {
  const cartCheckboxId = useId()
  const {cart,clearCart, addToCart} = useCart()

  return (
    <>
        <label className="cart-button" htmlFor={cartCheckboxId}>
            <CartIcon/>
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden/>

        <aside className="cart">
            <ul>
                {cart.map(product => (
                    <CartItem 
                        key={product.id} 
                        addToCart={() => addToCart(product)}
                        {...product}
                        />
                ))}
            </ul>
            <button 
                onClick={clearCart}
                style={{color: 'white'}}
            >
                <ClearCartIcon/>
            </button>
        </aside>
    </>
  )
}

export default Cart