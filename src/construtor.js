import "./App.css";
import Dica from "./dicas"
import Press from './botao';
import Imagem from "./imagem.js"

function Construir({source, autor, conselho, click, cor, bot1}){

return (
    <div className="App">
      
    <Imagem source={source}/>

    <div className="CaixaDeTexto">
        <Dica autor={autor} conselho={conselho} cor={cor}/>
        <Press bot1={bot1} click={click}>MAIS CONSELHOS</Press>
    </div>
    </div>
  )
}

export default Construir;