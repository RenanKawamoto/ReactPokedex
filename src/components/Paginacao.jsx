export default function Paginacao({count, itensPorPagina, offset, setOffset}){
    function paginasEmTela(){
        if(quantidadeDePaginas > quantidadeDePaginasPermitidasEmTela){
            return quantidadeDePaginasPermitidasEmTela
        }
        return quantidadeDePaginas
    }

    const quantidadeDePaginas = count > 0 ? Math.ceil(count / itensPorPagina) : 1;
    const quantidadeDePaginasPermitidasEmTela = 7;
    const paginaAtual = offset == 0 ? 1 : (offset/itensPorPagina)+1;
    const quantidadeDeItensAEsquerda = 3;
    const primeiroItem = (paginaAtual - quantidadeDeItensAEsquerda) > 0 ? paginaAtual - quantidadeDeItensAEsquerda : 1;

    return <div>
        <ul>
            {
                primeiroItem != 1 && <li><button onClick={()=>{setOffset(0)}} className="button">{'<<'}</button></li>  
            }
            {
                Array(paginasEmTela()).fill(null).map((_, index)=>
                {
                    if(index+primeiroItem == paginaAtual){
                        return <li>
                            <button className="button">{index+primeiroItem}</button>
                        </li>
                    }
                    if(!(index+primeiroItem > quantidadeDePaginas)){
                        return <li>
                            <button onClick={()=>{setOffset(((index+primeiroItem)-1) * itensPorPagina)}}>{index+primeiroItem}</button>
                        </li>
                    }
                })
            }     
            {
                primeiroItem+(quantidadeDePaginasPermitidasEmTela-1) < quantidadeDePaginas && <li><button onClick={()=>{setOffset(count-1)}} className="button">{">>"}</button></li>             
                
            }
            
        </ul>
    </div>
}