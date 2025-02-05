
import { useEffect, useState, useRef,useCallback } from 'react'
import './App.css'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import debounce from 'just-debounce-it'

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
  const [sort,setSort] = useState(false)
  const {search,updateSearch,error} = useSearch()
  const { movies, getMovies, loading } = useMovies({search, sort})

  const debouncedGetMovies = useCallback(debounce(({search}) => {
    console.log('search',search);
    getMovies({search})
  },500),[getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    // const data = Object.fromEntries(new FormData(event.target))
    
    // const data = new FormData(event.target)
    // const query = data.get('query')
    getMovies({search})
  }

  const handleSort = () =>{
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch != ' ') {
      updateSearch(newSearch)
      debouncedGetMovies({search: newSearch})
    }
  }
  useEffect(() =>{
    console.log('new getMovies receives');
  },[getMovies])

  return (
    <div className='page'>
     <header>
      <h1>Buscador de peliculas</h1>
       <form className='form' on onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, Star Wars' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
       </form>
       {error && <p style={{color: 'red'}}>{error}</p>}
     </header>
     <main>
        {loading ? <p>Cargando...</p>:<Movies movies={movies}/>}
     </main>
    </div>
  )
}

export default App
