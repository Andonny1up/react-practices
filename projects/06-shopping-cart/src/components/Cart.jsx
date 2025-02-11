import './Cart.css'
import { useId } from "react";
import { CartIcon,ClearCartIcon, RemoveFromCartIcon } from "./icons";

const Cart = () => {
  const cartCheckboxId = useId()

  return (
    <>
        <label className="cart-button" htmlFor={cartCheckboxId}>
            <CartIcon/>
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden/>

        <aside className="cart">
            <ul>
                <li>
                    <img 
                        src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png" 
                        alt="Loquesea" 
                    />
                    <div>
                        <strong>Eyeshadow Palette with Mirror</strong> - $19.99
                    </div>
                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button style={{color: 'white'}}>+</button>
                    </footer>
                </li>
            </ul>
            <button style={{color: 'white'}}>
                <ClearCartIcon/>
            </button>
        </aside>
    </>
  )
}

export default Cart