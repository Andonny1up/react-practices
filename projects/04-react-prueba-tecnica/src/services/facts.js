const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFat = async () =>{
    const res = await fetch(CAT_ENDPOINT_RAMDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}