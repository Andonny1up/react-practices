import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

const API = 'https://www.omdbapi.com/?apikey=82cfb0e1&s='

const useMovies = ({search, sort}) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previusSearch = useRef(search)

    // const getMovies = useMemo(()=>{
    //     return async ({search}) =>{
    //         if (search === previusSearch.current) return

    //         try{
    //             setLoading(true)
    //             setError(null)
    //             previusSearch.current = search
    //             const newMovies = await searchMovies({search})
    //             setMovies(newMovies)
    //         }catch(e){
    //             setError(e.message)
    //         }finally{
    //             setLoading(false)
    //         }
    //     }
    // },[])

    const getMovies = useCallback(async ({search}) =>{
        if (search === previusSearch.current) return

        try{
            setLoading(true)
            setError(null)
            previusSearch.current = search
            const newMovies = await searchMovies({search})
            setMovies(newMovies)
        }catch(e){
            setError(e.message)
        }finally{
            setLoading(false)
        }
    },[])
    // const sortedMovies = sort ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) : movies
    const sortedMovies = useMemo(()=>{
        console.log('memo sor');
        
        return sort ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) : movies
    },[sort,movies]) 
    
    return {movies: sortedMovies, getMovies, loading, error}
}

export default useMovies