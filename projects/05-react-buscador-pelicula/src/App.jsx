
import { useEffect, useState, useRef } from 'react'
import './App.css'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'

const API = 'https://www.omdbapi.com/?apikey=82cfb0e1&s=tumedia'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() =>{
    if (isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
    if (search === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (search.length < 3){
      setError('La busquda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  },[search])

  return {search,updateSearch,error}
}

function App() {
  const { movies } = useMovies()
  const {search,updateSearch,error} = useSearch()


  const handleSubmit = (event) => {
    event.preventDefault()
    // const data = Object.fromEntries(new FormData(event.target))
    
    // const data = new FormData(event.target)
    // const query = data.get('query')
    console.log(search);
  }
  const handleChange = (event) => {
    if (event.target.value != ' ') {
      updateSearch(event.target.value)
    }
  }

  return (
    <div className='page'>
     <header>
      <h1>Buscador de peliculas</h1>
       <form className='form' on onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, Star Wars' />
          <button type='submit'>Buscar</button>
       </form>
       {error && <p style={{color: 'red'}}>{error}</p>}
     </header>
     <main>
        <Movies movies={movies}/>
     </main>
    </div>
  )
}

export default App
