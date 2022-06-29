import "./App.css";
import "./fundo.css";
import Construir from "./construtor";

// Gerando mestre aleatório
const info = require("./api.json")
const indice = Math.floor(Math.random()*info.mestres.length)
const personagem = info.mestres[indice]
const imagem = personagem.retrato 
const face = require("./assets/"+imagem+".png")
const fundoClass = document.getElementById("fundo")
fundoClass.classList.add(personagem.ambiente)
const CorDaCaixa = personagem.box
const CorDoBotao = personagem.botao

// Gerando conselho aleatório do mestre selecionado acima
const quem = personagem.nome
const info2 = require("./conselhosAPI.json")
const indice2 = Math.floor(Math.random()*info2[quem].length)
const mensagem = info2[quem][indice2].dica

// Configurando botão de refresh
function recarregar(){
  document.location.reload();
}

// App renderizado
function App() {
  console.log(mensagem)
  return(
  
    <Construir 
      source={face} 
      autor={quem} 
      conselho={mensagem} 
      click={() => recarregar()}
      cor={CorDaCaixa}
      bot1={CorDoBotao}
      />

    )
}

export default App;