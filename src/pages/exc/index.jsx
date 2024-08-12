import { Link } from 'react-router-dom';


import './index.scss';


export default function Exc() {
  return (
    <div className="pagina-exc">
      <Link to='/'>Ir para app</Link>
      <h1>Um sinal?</h1>
    </div>
  );
}