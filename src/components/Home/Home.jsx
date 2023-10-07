import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../Redux/actions";
import CardCountry from "../CardCountry/CardCountry";
import NavComponent from "../Nav/Nav";
import Paginado from "../Paginado/Paginado";
import style from "./Home.module.css";
import { useEffect, useState } from "react";
import ContainerCountry from "../ContainerCountry/ContainerCard";
import LoadingPage from "../loadingPage/LoadingPage";
import SearchBar from "../Searcher/Searcher";

const Home = () => {
    let dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const [countriesCopy, setCountriesCopy] = useState([]);

    const upDateCountries = (newCountries) => {
        setCountriesCopy(newCountries)
    }

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    useEffect(() => {
        setCountriesCopy([...countries]); // Actualiza la copia cuando countries cambia
    }, [countries]);

    return (
        <div className={style.container}>
            {countries.length === 0 ? (
                <LoadingPage />
            ) : (
                <div className={style.innerContainer}>
                    <div className={style.containerNavAndSearch}>
                        <NavComponent className={style.navBar} />
                        <div className={style.searchOverlay}>
                            <SearchBar
                                upDateCountries={upDateCountries}
                                countriesCopy={countriesCopy}
                            />
                        </div>
                    </div>
                    <div className={style.containerCard}>
                        <ContainerCountry countries={countriesCopy} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
