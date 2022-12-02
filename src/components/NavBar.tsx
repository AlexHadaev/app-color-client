import React, {FC, useContext, useEffect, useState} from 'react';
import {Container, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import styles from "../styles/NavBar.module.scss"
import logo from '../assets/logo.svg'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import NavBarBody from "./NavBarBody";


const NavBar: FC = observer(
    () => {
        const {color} = useContext(Context)
        const [toggle, setToggle] = useState<boolean>(false)
        // console.log('NavBar', toggle, color.onToggle);

        const clickToggle = () => {
            setToggle(!toggle)
            color.setOnToggle(!color.onToggle)
        }
        useEffect(()=>{
            setToggle(color.onToggle)
        },[color.onToggle])

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
                                alt="logo"
                            />
                        </NavLink>
                        <NavLink className={styles.navbarLink} to={"/admin"}>Add Color</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={()=>clickToggle()} aria-controls="navbarScroll" className={styles.navbarToggle}>
                        |||
                    </Navbar.Toggle>
                    <NavBarBody/>
                </Container>
            </Navbar>
        );
    }
);

export default NavBar;