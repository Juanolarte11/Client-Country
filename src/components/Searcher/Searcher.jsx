// import React, { useEffect, useState } from "react";
// // import styles from "./searchBar.module.css";

// export default function SearchBar({ upDateCountries, countriesCopy }) {
//     const [input, setInput] = useState("");

//     // useEffect(() => {
//     //     handleSetCountries()
//     // }, [input]);

// const handleSetCountries = () => {
//     let newCountries = countriesCopy.filter((country) => {
//         country.name.toLowerCase().includes(input)
//     })
//     upDateCountries(newCountries)
// }



//     return (
//         <div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     value={input}
//                     onChange={(e) => {
//                         setInput(e.target.value)
//                         handleSetCountries()
//                     }}
//                 />
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";

export default function SearchBar({ upDateCountries, countriesCopy }) {
    const [input, setInput] = useState("");

    const handleSetCountries = () => {
        // Filtra los países en función del valor de input
        const newCountries = countriesCopy.filter((country) =>
            country.name.toLowerCase().includes(input.toLowerCase())
        );
        // Llama a la función para actualizar la lista de países en el componente padre
        upDateCountries(newCountries);
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                        handleSetCountries();
                    }}
                />
            </div>
        </div>
    );
}