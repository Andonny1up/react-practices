import useCatImage from "../hooks/useCatImage"

const Otro = () =>{
    const {imageUrl} = useCatImage({fact: 'Ramdom fat'})
    
    return(
        <div>
            {imageUrl && <img src={imageUrl} alt={`Image extracted using words for `}/>}
        </div>
    )
}

export default Otro