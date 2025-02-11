import useFilters from '../../hooks/useFilters'
import './Filters.css'
import { useState, useId } from 'react'

const Filters = () => {
  const {filters,setFilters} = useFilters()
  const minPriceFiterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) =>{
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  const handleChangeCategory = (event) =>{
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
        <div>
            <label htmlFor={minPriceFiterId}>A partir de:</label>
            <input 
              type="range" 
              id={minPriceFiterId} 
              min='0' 
              max='1000' 
              onChange={handleChangeMinPrice}
              value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>
        <div>
            <label htmlFor={categoryFilterId}>Categoria</label>
            <select name="" id={categoryFilterId } onChange={handleChangeCategory}>
                <option value="all">Todas</option>
                <option value="laptops">Portatiles</option>
                <option value="smartphones">Celulares</option>
                <option value="beauty">Belleza</option>
            </select>
        </div>
    </section>
  )
}

export default Filters