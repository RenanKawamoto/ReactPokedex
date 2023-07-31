import {useEffect, useState} from "react"
import Card from "./Card"
import NavBar from "./NavBar"
import Paginacao from "./Paginacao"

export default function Pokedex(){
    const limiteDeItensPorPagina = 10;
    const [pokemons, setPokemons] = useState([])
    const [paginaAtual, setPaginaAtual] = useState(0)
    const [quantidadeDePokemons, setQuantidadeDePokemons] = useState(0)

    useEffect(()=>{
        console.log(paginaAtual)
        fetch("https://pokeapi.co/api/v2/pokemon?limit="+limiteDeItensPorPagina+"&offset="+paginaAtual)
        .then(response => response.json())
        .then(data => {
            setPokemons(data.results)
            setQuantidadeDePokemons(data.count)
        })
    }, [paginaAtual])

    return <div>
        <NavBar/>
        <div className="section">
            <div className="columns is-multiline">
                {pokemons.map((pokemon, index) => (
                <div className="column is-one-fifth" key={index}>
                    <Card className="card" url={pokemon.url}/>
                </div>
            ))}
            </div>
        </div>
        <Paginacao limiteDeItensPorPagina={limiteDeItensPorPagina} total={192} offset={0}/>
        <button onClick={()=> {            
            setPaginaAtual(paginaAtual+10)
            }
        }>Poximos Dez</button>
    </div>
}