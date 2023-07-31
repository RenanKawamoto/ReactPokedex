import { useState } from "react";

export default function Paginacao({limiteDeItensPorPagina, offset, total}){
    const QUANTIDADE_DE_PAGINACOES = 7;
    const QUANTIDADE_DE_PAGINACOES_A_ESQUERDA = (QUANTIDADE_DE_PAGINACOES-1)/2
    const paginaAtual = offset ? (offset/limiteDeItensPorPagina) + 1 : 1;
    const quantidadeDePaginas = Math.ceil(total/limiteDeItensPorPagina);
    const primeiraPagina = paginaAtual > QUANTIDADE_DE_PAGINACOES_A_ESQUERDA ? paginaAtual - QUANTIDADE_DE_PAGINACOES : 1;
    const [paginas, setPaginas] = useState([])
    return <div>
        <ul>
            {Array.from({length: QUANTIDADE_DE_PAGINACOES})
            .map((_, index)=> index + primeiraPagina)
            .map((page)=><li>{page}</li>)}
        </ul>
    </div>
}