export default function Formulario(props){
    return(
        <div>
            <input type="text" id="query" value={props.contenido} 
                onChange={e=>props.setContenido(e.target.value)} placeholder="Texto a buscar" />
            <button id="botonsearch" onClick={() => props.callServer()} >Buscar</button>
        </div>
    )
}