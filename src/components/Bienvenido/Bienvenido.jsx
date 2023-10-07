import { Link } from "react-router-dom"
import style from "./Bienvenido.module.css"

const Bienvenido = () => {
    return(
        <div className={style.container}>
            <h1 className={style.titulo}>Bienvenidos</h1>
            <button className={style.boton}>
            <Link to='/home' className={style.Link} style={{ textDecoration: 'none' }}>CLICK</Link>
            </button>
        </div>
    )
}

export default Bienvenido;


