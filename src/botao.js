import "./App.css";

function Press({children, click, bot1}){

    return(
        <button className={bot1} onClick={click} id="botao">{children}</button>  
    )
    
}

export default Press;