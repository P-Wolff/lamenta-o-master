import { Link } from 'react-router-dom';
import { useState } from 'react';

import './index.scss';



export function tratarNumber(valor){
    return Number(valor.replaceAll('.') (','));

}

export default function Eventos() {
    const[res, setRes] = useState(0);//Resultado
    const[pedido, setPedido] = useState(0);//Pedido
    const[cupom, setCupom] = useState(0);//Cupom
    

    function alterarPedido(e) {
        let pedido = Number(e.target.value); 
        setPedido(pedido);
    }
    
    function alterarCupom(e) {
        let cupom = Number(e.target.value); 
        setCupom(cupom);
    }
    
    function mostrarResultado(){
        let desconto =  pedido - cupom;
        setRes(desconto);
    }

    return (
        <div className='pagina-eventos'>
            <header className='cabecalho'>
                <img className='icone' src="/assets/images/logofrei.png" alt="logofrei" />
                <p className='titulo'>React FreiS | Eventos</p>

                <div className='text'>
                    <p>Início</p>
                    <p>Sobre</p>
                </div>
            </header>

            <section className='voltar-menu'>
                <Link to='/'>
                    <img  className='imagem' src="https://s3-alpha-sig.figma.com/img/9074/e6e6/811ba1958a9b261fff4fb3a8f7c72556?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oza0TZRzl-0ryKj9PjIlpeLgoFEDZulaBztDASFoa3hg~Q9Pc~5BUWgwPzeQM3MKKgra5nZFTVvGQ6WTa9YGtAZSaQEJJy7dT60O2LeBg-1XRvHOgYPBeuQylmOY65mpFFJ6jKzmDVWjEXa16V7FhD86mLjtsc5GlAYXWqIK7I1hNqEYJR8q5fD9BpdW40~Lu9DJzGI0DBpsUAabXrwpdTA4zj1m9NcTfP2XkFe4~aitCg3ROOhnCyG4ci~grkvYzfVe-gxFHZZcZnGaK3uA4bqticlMAz18Gc-VJsVV3FHEQmNPg1srQ~h1Deif19JdQUjjx7LBLVPZJOJLX3elWA__" alt='' />
                    <h1>Exercício 01 - Cupom de desconto</h1>
                </Link>
            </section>

            <section className='grupo1'>
                <p>Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>
            </section>

            <section className='cx-cupom'>
                <div className='valorPedido'>
                    <p>Informe o valor do pedido</p>
                    <input type="text" onChange={ alterarPedido } />
                </div>

                <div className='valorCupom'>
                    <p>Informe o valor do cupom</p>
                    <input type="text" onChange={ alterarCupom } />
                </div>

                <button onClick={ mostrarResultado }></button>
                <h5 >O total é R$ {res}</h5>
            </section>
        </div>
    )
}

