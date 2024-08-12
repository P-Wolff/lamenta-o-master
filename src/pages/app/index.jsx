import { Link } from 'react-router-dom';


import './index.scss';


export default function App() {
  return (
    <div className="pagina-app">
      <div className='header'>
        <div className='info'>
          <img className='icone' src="/assets/images/logofrei.png" alt="logofrei" />
          <p className='titulo'>React FreiS</p>
        </div>

        <div className='text'>
          <p>Início</p>
          <p>Sobre</p>
        </div>
      </div>

    <div className='container'>
      <h1>Escolha um treino...</h1>
    </div>

    <div className='cartao'>
      <Link to='/eventos'> 
        <div className='bolota'>
        </div>
        <div className='text'>
            <h1>Cupom de desconto</h1>
            <p>Exercício 01</p>
        </div>
      </Link>
    </div>

    <div className='cartao2'>
      <div className='bolota2'>
        <div className='text2'>
          <h1>Converter Kg/gramas</h1>
          <p>Exercício 02</p>
        </div>
      </div>
    </div>

    <div className='cartato3'>
      <div className='bolota3'>
        <div className='text3'>
          <h1>Valor total por quantidade</h1>
          <p>Exercício 03</p>
        </div>
      </div>
    </div>


    <div className='cartato11'>
      <Link to={'/tabuada'}>
        <div className='bolota11'>
          <div className='text11'>
            <h1>Tabuada</h1>
            <p>Exercício 11</p>
          </div>
        </div>
      </Link>
    </div>

  </div>
  );
}

