import React, {useState} from 'react';
import './estilo.css';

export default function PaginaInicial() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(1);

  function gerarNumero1() {
    const novoNumero = Math.floor(Math.random() * (11-1) + 1);
    setNumeroAleatorio(novoNumero);
  }

  function gerarNumero2() {
    const novoNumero = Math.floor(Math.random() * (101-1) + 1);
    setNumeroAleatorio(novoNumero);
  }

  function gerarNumero3() {
    const novoNumero = Math.floor(Math.random() * (1001-1) + 1);
    setNumeroAleatorio(novoNumero);
  }

  return(
    <div className="conteudo-centralizado">
        <h3>Número aleatório:</h3>
        <h1>{numeroAleatorio}</h1>
        
        <div className='area-botao'>
          <label>
            Click no botão abaixo para gerar um número aleatório:
          </label>
          
          <button onClick={ gerarNumero1 }>
            Gerar número de 1 a 10
          </button>

          <button onClick={ gerarNumero2 }>
            Gerar número de 1 a 100
          </button>

          <button onClick={ gerarNumero3 }>
            Gerar número de 1 a 1000
          </button>
        </div>
      </div>
  );
}

