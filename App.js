import React, { useState } from 'react';
import './App.css'

export default function App() {
  
const [valornaTela, setValornaTela] = useState('');
const [resultado, setResultado] = useState(0);
const [Acumulador, setAcumador] = useState();
const [operado, setOperado] = useState(false);

//Componetes
const Tela = (valor, result) => {
  return (
    <div  className='cssTela' >
      <span className='cssTelaOper' >{valor}</span>
      <span className='cssTelaRes'>{result}</span>
    </div>
  )
}

const Btn = (label, onClick) => {
  return (
    <button className='cssBtn' onClick={onClick} >{label}</button>
  )
}

//fuçoes
const AddDigitoTela = (digitos) =>{
  

  if ((digitos === '+' || digitos === '-' || digitos === '/' || digitos ==='*') && operado   ) {
    setOperado(false);
    setValornaTela(resultado + digitos);
    return;
  }
  
  if (operado) {
    setValornaTela(digitos);
    setOperado(false);
    return;
  }
  
  const valorDigitado = valornaTela+digitos;
  setValornaTela(valorDigitado);


}
const limparDigitoTela =()=>{
  setOperado(false);
  setValornaTela('');
  setResultado(0);
  setAcumador(0);
  return;
}
const operacao = (oper) =>{
  if (oper === "backspace") {
    let vtela = valornaTela;
    vtela = vtela.substring(0,(vtela.length -1));
    setValornaTela(vtela);
    setOperado(false);
    return;
  }
  try {
    const r = eval(valornaTela);
    setAcumador(r);
    setResultado(r);
    setOperado(true);

  } catch (error) {
    setResultado('ERROR:  ' + error )
  }

}
return (
    <>
    <div className='cssContainer' >
      <h3>Calculadora</h3>
      {Tela(valornaTela,resultado)}
      <div className='cssBtns' >
        { Btn('AC', limparDigitoTela) }
        { Btn('(', ()=> AddDigitoTela('(') ) }
        { Btn(')', ()=> AddDigitoTela(')') ) }
        { Btn('/', ()=> AddDigitoTela('/') ) }
        { Btn('7', ()=> AddDigitoTela('7') ) }
        { Btn('8', ()=> AddDigitoTela('8') ) }
        { Btn('9', ()=> AddDigitoTela('9') ) }
        { Btn('*', ()=> AddDigitoTela('*') ) }
        { Btn('4', ()=> AddDigitoTela('4') ) }
        { Btn('5', ()=> AddDigitoTela('5') ) }
        { Btn('6', ()=> AddDigitoTela('6') ) }
        { Btn('-', ()=> AddDigitoTela('-') ) }
        { Btn('1', ()=> AddDigitoTela('1') ) }
        { Btn('2', ()=> AddDigitoTela('2') ) }
        { Btn('3', ()=> AddDigitoTela('3') ) }
        { Btn('+', ()=> AddDigitoTela('+') ) }
        { Btn('0', ()=> AddDigitoTela('0') ) }
        { Btn('.', ()=> AddDigitoTela('.') ) }
        { Btn('<-', ()=> operacao('backspace') ) }
        { Btn('=', ()=> operacao('=') ) }
      </div>
    </div>
    </>
  );
}