import { createContext, useState } from "react";


// 1 crear contexto
export const FiltersContext = createContext()

// 2 crear el provider, para proveer el contexto

export function FilterProvider ({children}){
    const [filters,setFilters] = useState({ 
        category: 'all',
        minPrice: 0 
    })

    return (
        <FiltersContext.Provider value={{filters,setFilters}}>
            {children}
        </FiltersContext.Provider>
    )
}