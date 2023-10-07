import { Link } from "react-router-dom";
import style from "./CardCountry.module.css"


const CardCountry = ({name, continent, image, id}) => {

    return (
        <div className={style.container}>
            <div className={style.card}>
                <Link to={`/countries/${id}`} className={style.link}>
                    <img src={image} alt={name} className={style.cardImage} />
                </Link>
                <h1 className={style.title}>{name}</h1>
                <p className={style.cardName}>{continent}</p>
            </div>
        </div>
    );
}

export default CardCountry;



