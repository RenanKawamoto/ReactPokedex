export default function Paginacao({count, itensPorPagina, offset, setOffset}){
    function paginasEmTela(){
        if(quantidadeDePaginas > quantidadeDePaginasPermitidasEmTela){
            return quantidadeDePaginasPermitidasEmTela
        }
        return quantidadeDePaginas
    }

    const quantidadeDePaginas = count > 0 ? Math.ceil(count / itensPorPagina) : 1;
    const quantidadeDePaginasPermitidasEmTela = 5;
    const paginaAtual = offset == 0 ? 1 : (offset/itensPorPagina)+1;
    const quantidadeDeItensAEsquerda = Math.floor(quantidadeDePaginasPermitidasEmTela/2);
    const primeiroItem = (paginaAtual - quantidadeDeItensAEsquerda) > 0 ? paginaAtual - quantidadeDeItensAEsquerda : 1;

    return <nav className="pagination is-right mr-6">
        <ul className="pagination-list">
            {
                primeiroItem != 1 && <>
                <li><button onClick={()=>{setOffset(0)}} className="pagination-link">1</button></li> 
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                </>
            }
            {
                Array(paginasEmTela()).fill(null).map((_, index)=>
                {
                    if(index+primeiroItem == paginaAtual){
                        return <li>
                            <button className="pagination-link is-current">{index+primeiroItem}</button>
                        </li>
                    }
                    if(!(index+primeiroItem > quantidadeDePaginas)){
                        return <li>
                            <button onClick={()=>{setOffset(((index+primeiroItem)-1) * itensPorPagina)}} className="pagination-link">{index+primeiroItem}</button>
                        </li>
                    }
                })
            }     
            {
                primeiroItem+(quantidadeDePaginasPermitidasEmTela-1) < quantidadeDePaginas && <>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li><button onClick={()=>{setOffset(count-1)}} className="pagination-link">{quantidadeDePaginas}</button></li>
                </>
            }
            
        </ul>
    </nav>
}