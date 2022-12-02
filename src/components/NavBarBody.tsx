import React, {FC, memo} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import styles from "../styles/NavBar.module.scss";
import SearchForm from "./SearchForm";
import TypeBar from "./TypeBar";

const NavBarBody: FC = memo(() => {
    return (
        <Navbar.Collapse  id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll >
            </Nav>
            <SearchForm/>
            <TypeBar styleMedia={styles.showMobile}/>
        </Navbar.Collapse>
    );
});

export default NavBarBody;