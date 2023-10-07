import { useState } from "react";
import CardCountry from "../CardCountry/CardCountry";
import Paginado from "../Paginado/Paginado";
import style from "./ContainerCard.module.css";

export default function ContainerCountry({ countries }) {
    const [page, setPage] = useState(1);
    const [porPage, setPorPage] = useState(10);
    const max = countries.length / porPage;

    return (
        <div className={style.container}>
            <div className={style.paginado}>
                <Paginado page={page} setPage={setPage} max={max} />
                <a href="http://localhost:3000/activity" className={style.boton}>Crear nueva catividad</a>
            </div>
            <div className={style.containerCard}>
                {countries
                    .slice((page - 1) * porPage, (page - 1) * porPage + porPage)
                    .map((country) => (
                        <div key={country?.id} className={style.cards}>
                            <CardCountry
                                image={country?.image}
                                name={country?.name}
                                continent={country?.continent}
                                id={country?.id}
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}