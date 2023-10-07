import React from "react";
import styles from "./Detail.module.css"; // Importa los estilos CSS Modules
import imagenSebastian from "../../imagen/bello.jpg"; // Importa la imagen
import Nav from "../Nav/Nav";

export default function Detail() {
    return (
        <div className={styles.detailContainer}>
            <Nav />
            <h1>¡Mi nombre es Sebastian Olarte!</h1>
            <p className={styles.paragraph}>
                Soy un desarrollador web full stack egresado de Henry, una prestigiosa academia en línea que me brindó una formación intensiva y práctica en las últimas tecnologías del mercado.
                Tengo conocimientos y experiencia en HTML, CSS, JavaScript, React, Node.js, Express y Firebase, entre otros. He realizado varios proyectos individuales y grupales que demuestran mi capacidad para crear sitios web dinámicos,
                responsivos y seguros, siguiendo las mejores prácticas de código y diseño. Me apasiona el desarrollo web y estoy siempre dispuesto a aprender nuevas herramientas y metodologías que me permitan mejorar mis habilidades y ofrecer soluciones innovadoras a los clientes.
                Soy una persona responsable, proactiva, creativa, con muy buena capacidad de trabajo en equipo y comunicación. Estoy en busca de una oportunidad laboral que me permita poner en práctica mis conocimientos y seguir creciendo profesionalmente en el ámbito del desarrollo web.
            </p>
            <img src={imagenSebastian} alt="Sebastian Olarte" className={styles.image} />
            <div className={styles.icons}>
                <a href="https://github.com/Juanolarte11" target="_blank" rel="noopener noreferrer">
                    <i className={`fab fa-github ${styles.githubIcon}`}></i>
                </a>
                <a href="https://www.linkedin.com/in/sebastian-olarte-sanchez-fullstack/" target="_blank" rel="noopener noreferrer">
                    <i className={`fab fa-linkedin ${styles.linkedinIcon}`}></i>
                </a>
            </div>
        </div>
    );
}