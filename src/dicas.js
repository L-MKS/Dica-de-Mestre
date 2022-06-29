import "./App.css";
import "./fundo.css"

function Dica({conselho, autor, cor}){
    
    return(
            <div id="box" className={cor}>
            <p id="texto">"{conselho}"</p>
            <p className="autor">- {autor} -</p>
            </div>   
    )

}

export default Dica;