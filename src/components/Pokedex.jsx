import {useEffect, useState} from "react"
import Card from "./Card"
import NavBar from "./NavBar"
import Paginacao from "./Paginacao"

export default function Pokedex(){
    const limiteDeItensPorPagina = 10;
    const [pokemons, setPokemons] = useState([])
    const [pontoInicialDeConsulta, setPontoInicialDeConsulta] = useState(0)
    const [quantidadeDePokemons, setQuantidadeDePokemons] = useState(0)

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit="+limiteDeItensPorPagina+"&offset="+pontoInicialDeConsulta)
        .then(response => response.json())
        .then(data => {
            setPokemons(data.results)
            setQuantidadeDePokemons(data.count)
        })
    }, [pontoInicialDeConsulta])

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
        <Paginacao count={quantidadeDePokemons} itensPorPagina={limiteDeItensPorPagina} offset={pontoInicialDeConsulta} setOffset={setPontoInicialDeConsulta}/>
        <button onClick={()=> {            
            setPontoInicialDeConsulta(pontoInicialDeConsulta+10)
            }
        }>Poximos Dez</button>
    </div>
}