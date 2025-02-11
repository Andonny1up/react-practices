import { createContext,useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }){
    const [cart , setCart] = useState([])

    const addToCart = product => {
        // check if the producto is already in the cart
        const productInCartIndex = cart.findIndex( item => item.id === product.id)
    
        if (productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }
        // product is not cart
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }
    const removeFromCart = product =>{
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }
    const clearCart = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider value={
            {
                cart,
                addToCart,
                clearCart,
                removeFromCart
            }
        }>
            {children}
        </CartContext.Provider>
    )
}