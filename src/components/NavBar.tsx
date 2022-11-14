import React, {useContext, useEffect, useState} from 'react';
import {Container, Form, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import styles from "../styles/NavBar.module.scss"
import logo from '../assets/logo.svg'
import {searchColors} from "../http/colorAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import TypeBar from "./TypeBar"


const NavBar = observer(
    () => {
        const {color} = useContext(Context)
        const [querySearch, setQuerySearch] = useState<string>(color.query)

        useEffect(
            () => {
        //         searchColors(color.selectedType.id, query.toUpperCase(), color.page, 8).then(
        //             (res) => {
        //                 color.setColors(res.data.rows)
        //                 color.setTotalCount(res.data.count)
        //             }
        //         )
                setQuerySearch(color.query)
            }, [color.query]
        )

        const handleKeyPress = (event:React.KeyboardEvent) => {
            if(event.key === 'Enter'){
                event.preventDefault();
                color.setQuery(querySearch.toUpperCase())
            }
        }

        return (
            <Navbar
                expand="lg" className={styles.navbar}
                expanded={color.onToggle}
            >
                <Container>
                    <Navbar.Brand className={"d-flex align-items-center"}>
                        <NavLink to="/">
                            <img
                                src={logo}
                                width="52"
                                height="52"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </NavLink>
                        <NavLink className={styles.navbarLink} to={"/admin"}>Add Color</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={()=>color.setOnToggle(!color.onToggle)} aria-controls="navbarScroll" className={styles.navbarToggle}>
                        |||
                    </Navbar.Toggle>
                    <Navbar.Collapse  id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll >
                        </Nav>
                        <Form className={`d-flex ${styles.formSearch}`}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={querySearch}
                                onKeyPress={(e)=>handleKeyPress(e)}
                                onChange={(e) => setQuerySearch(e.target.value)}
                            />

                        </Form>
                        <TypeBar styleMedia={styles.showMobile}  toggle={true}/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
);

export default NavBar;