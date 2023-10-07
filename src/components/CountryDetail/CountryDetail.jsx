import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getCountriesId } from "../../Redux/actions";
import { useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import style from "./CountryDetail.module.css"


const CountryDetail = () => {

    const dispatch = useDispatch();
    const countryId = useSelector((state) => state.countriesId)
    const printLanguages = (languages) => {
        for (let propiedad in languages) {
            if (languages.hasOwnProperty(propiedad)) {
                return(<p>Lenguajes: {languages[propiedad]}</p>)
            }
        }
    }

    const { id } = useParams();

    useEffect(() => {
        dispatch(getCountriesId(id))

        return () => dispatch(clearDetail())
    }, [])


    let renderActivities = countryId.activities === undefined ? <div><p>Loading</p></div> :
        countryId.activities.length === 0 ? <div><p>This country doesn't has activities</p></div> :
            countryId.activities && countryId.activities.map(el => {
                return (
                    <div key={el.id}>
                        <hr></hr>
                        <p>Name:{el.name}</p>
                        <p>Difficulty:{el.difficulty}</p>
                        <p>Duration:{el.duration}</p>
                        <p>Season:{el.season}</p>
                    </div>
                );
            })


    return (
        <div className={style.containerAll}>
            <div>
                <Nav />
            </div>
            <div className={style.containerText} >
                <p className={style.texto}>{countryId?.id}</p>
                <h1 className={style.titulo}>{countryId?.name}</h1>
                <img src={countryId?.image} className={style.image} />
                <p className={style.texto}>{countryId?.continent}</p>
                <p className={style.texto}>Capital: {countryId?.capital}</p>
                <p className={style.texto}>{countryId?.subregion}</p>
                <p className={style.texto}>Area: {countryId?.area}</p>
                <p className={style.texto}>{printLanguages(countryId.languages)}</p>
                <p className={style.texto}>Population: {countryId?.population}</p>
                <div className={style.texto}>Action: {renderActivities}</div>
            </div>
        </div>
    )
}
export default CountryDetail;