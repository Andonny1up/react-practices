import {products as initialProducts} from './mocks/products.json'
import Products from "./components/Products"
import Header from './components/Header'
import { useState } from 'react'

const useFilters = () =>{
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filterProducts = (products) =>{
    return products.filter(product => {
      return(
        product.price >= filters.minPrice && (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  return {filterProducts, setFilters}
}

function App() {
  const [products, setProducts] = useState(initialProducts)
  const {filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts}></Products>
    </>
  )
}

export default App
