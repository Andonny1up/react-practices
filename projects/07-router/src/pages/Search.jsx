import React, { useEffect } from 'react'

function SearchPage({routeParams}) {
    useEffect(()=>{
        document.title = `Ha buscado ${routeParams.query}`
    },[])
  return (
    <div>
        <h1>Bucador, buscar {routeParams.query}</h1>
    </div>
  )
}

export default SearchPage