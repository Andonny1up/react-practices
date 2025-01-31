import { useState, useEffect } from "react"
import './App.css'

const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`

const App = () => {
    const [fact, setFact] = useState()
    const [imageUrl,setImageUrl] = useState()

    useEffect(() =>{
        fetch(CAT_ENDPOINT_RAMDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const {fact} = data
            setFact(fact)    
        })
    },[])

    useEffect(()=>{
        if (!fact) return

        const firstWord = fact.split(' ',3).join(' ')

        fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
            .then(res => {
                const {url} = res
                setImageUrl(url)
            })
    },[fact])

    return(
        <main>
            <h1>App de Gatitos</h1>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using words for ${fact}`}/>}
        </main>
    )
}

export default App