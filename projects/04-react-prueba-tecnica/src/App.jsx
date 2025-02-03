import useCatFact from "./hooks/useCatFact"
import useCatImage from "./hooks/useCatImage"
import Otro from "./components/Otro"
import './App.css'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`

const App = () => {
    const  {fact, refreshFat} = useCatFact()
    const {imageUrl} = useCatImage({fact})

    const handleClick = async () => {
        refreshFat()
    }
    return(
        <main>
            <h1>App de Gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>

            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extracted using words for ${fact}`}/>}
        </main>
    )
}

export default App