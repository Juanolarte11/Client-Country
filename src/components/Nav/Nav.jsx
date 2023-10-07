import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../Searcher/Searcher";

export default function NavComponent() {
    // return(
    //     <div className={style.nav}>
    //         <nav>
    //             <ul className={style.ul}>
    //                 <li className={style.li} key={1}><Link to={'/home'}>Home</Link></li>
    //                 <li className={style.li} key={1}><Link to={'/'}>Detail</Link></li>
    //             </ul>
    //         </nav>
    //     </div>
    // // )
    const [search, setSearch] = useState("");
    // const x = [];

    const handleChange = (e) => {
        e.preventDefault();
        // const { value } = e.target;
        // if (value.length) {
        //     console.log(value);
        //     setSearch(value);
        // }
        // console.log(value);
        // x.push(e.target.value)
        // console.log(x);
        setSearch(e.target.value)
        console.log(search);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (search) {
        //     console.log(search);
        // }
        console.log(e.target.value);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/home"> Countries App </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/detail">Detail</Nav.Link>
                    </Nav>
                    {/* <Form className="d-flex" onSubmit={handleSubmit}>
                        <Form.Control
                            type="search"
                            placeholder="Search..."
                            className="me-2"
                            aria-label="Search"
                            
                            onChange={handleChange}
                        />
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
