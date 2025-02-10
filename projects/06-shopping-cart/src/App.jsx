import {products as initialProducts} from './mocks/products.json'
import Products from "./components/Products"
import Header from './components/Header'
import { useState } from 'react'
import Footer from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import useFilters from './hooks/useFilters'



function App() {
  const [products, setProducts] = useState(initialProducts)
  const { filters ,filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header/>
      <Products products={filteredProducts}></Products>
      { IS_DEVELOPMENT && <Footer filters={filters}/>}
    </>
  )
}

export default App
