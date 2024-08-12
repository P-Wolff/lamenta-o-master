import { Link } from 'react-router-dom';
import { useState } from 'react';

import './index.scss';



export default function Tabuada() {
    const[usuario, setUsuario] = useState(0);//usuario
    const[criarTabuada, setNumTabu] = useState([]);//tabuada


    function calcularTabuada(e) {
        usuario = Number(e.target.value);
        criarTabuada = []
        
        // Cada posição do array deve ser uma string "A x B = X"
        for (let i = 1; i <= 10; i++) {
            criarTabuada[i] = usuario * i;
        }
        // Dica:
        // tabuada.push
        setNumTabu(criarTabuada)
    }


    return (
        <div className='pagina-tabuada'>
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
                    <h1>Exercício 11 - Tabuada</h1>
                </Link>
            </section>

            <section className='grupo1'>
                <p>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</p>
            </section>

            <section className='cx-tabuada'>
                <div className='valorNumerico'>
                    <h1>Tabuada do {usuario}</h1>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(Number(e.target.value))}
                    />
                    <button>
                        <ul>
                            {Object.keys(Tabuada).map((key) => (
                                <li key={key}>
                                    {calcularTabuada} x {key} = {Tabuada[key]}
                                </li>
                            ))}
                        </ul> 
                    </button>

                </div>
            </section>
        </div>
    )
}

