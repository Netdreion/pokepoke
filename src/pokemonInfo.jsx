import {useState} from "react"

const PokemonInfo=()=>{
const[poke,setPoke]=useState({})

const fetchData=async(poke)=>{
    const url="https://pokeapi.co/api/v2/pokemon/{poke}/"

    try {
        const response=await axios(url)
        return responde.data.map((pokecard)=>({
            name:pokecard.name,
            img:pokecard.img,
            description:pokecard.description
        }))
    }
}catch(error){
    console.log(error)
}

    return(
        <div>
            <input/>
            <button></button>
        </div>
    )
}