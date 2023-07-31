import { useEffect, useState } from "react"

export default function Card({url}){
    const [pokemonId, setPokemonId] = useState(null)
    const [pokemonName, setPokemonName] = useState(null)
    const [pokemonSpriteFront, setPokemonSpriteFront] = useState(null)
    const [pokemonAltura, setPokemonAltura] = useState(null)
    const [pokemonPeso, setPokemonPeso] = useState(null)
    const [saibaMais, setSaibaMais] = useState(false)
    

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setPokemonId(data.id)
            setPokemonName(data.name)
            setPokemonSpriteFront(data.sprites.front_default)
            setPokemonPeso(data.weight)
            setPokemonAltura(data.height)
        })
    }, [url])
    if(!saibaMais){
        return <div className="card box-shadow-default border-radius-card">
            <div className="card-header">
                <h2 className="card-header-icon">{pokemonId}</h2>
                <h2 className="card-header-title">{pokemonName}</h2>
            </div>
            <div className="card-content is-flex is-justify-content-center">
                <figure className="image is-96x96">
                    <img src={pokemonSpriteFront}/>
                </figure>
            </div>
            <div className="card-footer">
                <button className="button card-footer-item is-info" onClick={()=>setSaibaMais(!saibaMais)}>Saiba mais</button>
            </div>
        </div>
    }
    return <div className="card box-shadow-default border-radius-card">
        
        <div className="card-header">
                <h2 className="card-header-icon">{pokemonId}</h2>
                <h2 className="card-header-title">{pokemonName}</h2>
        </div>
        <div className="card-content is-flex is-justify-content-center">
            <ul>
            <li>Altura: {pokemonAltura} cm</li>
            <li>Peso: {pokemonPeso} kg</li>
            </ul>
        </div>
        <div className="card-footer">
            <button className="button card-footer-item is-info" onClick={()=>setSaibaMais(!saibaMais)}>Voltar</button>
        </div>
    </div>

}