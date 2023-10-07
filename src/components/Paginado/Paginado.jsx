import { useState } from "react";
import styles from "./Paginado.module.css"


const Paginado = ({page, setPage, max}) => {

    const [input, setInput] = useState(1);

    const nextPage = () => {
      console.log("Cambiar pagina adelante");
      if (input > 0 || input === 0) {
        setInput(parseInt(input) + 1);
        setPage(parseInt(page) + 1);
      }
    }
    const prevPage = () => {
      console.log("Cambiar pagina atras");
      if (input > 0) {
        setInput(parseInt(input) - 1);
        setPage(parseInt(page) - 1);
      }
    }

    const onKeyDown = e => {
        if (e.keyCode == 13) {
          setPage (parseInt (e.target.value));
          if (
            parseInt (e.target.value < 1) ||
            parseInt (e.target.value) > Math.ceil (max) ||
            isNaN (parseInt (e.target.value))
          ) {
            setPage (1);
            setInput (1);
          } else {
            setPage (parseInt (e.target.value));
          }
        }
      };

      const onChange = e => {
        setInput (e.target.value);
      };

    return(
        <div className={styles.conteinerPag}>
            <button onClick={prevPage} className={styles.button}>Prev</button>
            <input
                onChange={e => onChange (e)}
                onKeyDown={e => onKeyDown (e)}
                name="page"
                autoComplete="on"
                value={input}
                className={styles.input}
      />
            <button onClick={nextPage} className={styles.button}>Next</button>
        </div>
    )
}

export default Paginado;