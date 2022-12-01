import React, {useContext, useMemo} from 'react';
import styles from "../styles/ColorPage.module.scss";
import {Card, Col, Container, Row} from "react-bootstrap";
import TypeBar from "./TypeBar";
import {IColors} from "../types/types";
import ColorItem from "./ColorItem";
import {fetchTypes} from "../http/colorAPI";
import {Context} from "../index";

type LayoutProps = {
    children?: JSX.Element | JSX.Element[];
}
const Layout = ({children}:LayoutProps) => {

    return (
        <Container className={styles.container}>
            <Row>
                <TypeBar styleMedia={styles.showDesktop}/>
                {children}
            </Row>
        </Container>
    );
};

export default Layout;