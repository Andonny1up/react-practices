import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../icons'
import { useCart } from '../../hooks/useCart'

const Products = ({products}) => {
    const {addToCart,removeFromCart, cart} = useCart()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }
  return (
    <main className='products'>
        <ul>
            {products.slice(0,10).map(product =>{
                const isProductInCart = checkProductInCart(product)
                return(
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> -${product.price}
                        </div>
                        <div>
                            <button
                                onClick={() => isProductInCart ? removeFromCart(product): addToCart(product)} 
                                style={{
                                    color: 'white',
                                    backgroundColor: isProductInCart ? 'red': '#09f'
                                }}
                            >
                                {
                                    isProductInCart
                                        ? <RemoveFromCartIcon/>
                                        : <AddToCartIcon/>
                                }
                            </button>
                        </div>
                    </li>
                )
            })}
        </ul>
    </main>
  )
}

export default Products