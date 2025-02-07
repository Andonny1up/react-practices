import './Products.css'
import { AddToCartIcon } from '../icons'

const Products = ({products}) => {
  return (
    <main className='products'>
        <ul>
            {products.slice(0,10).map(product =>{
                return(
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> -${product.price}
                        </div>
                        <div>
                            <button style={{color: 'white'}}>
                                <AddToCartIcon/>
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