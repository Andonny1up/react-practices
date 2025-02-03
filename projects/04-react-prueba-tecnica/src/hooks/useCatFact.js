import { useState, useEffect } from "react"
import { getRandomFat } from "../services/facts"

export default () => {
    const [fact, setFact] = useState()

    const refreshFat = () =>{
        getRandomFat().then(newFact => setFact(newFact))
    }

    useEffect(refreshFat,[])

    return {fact,refreshFat}
}