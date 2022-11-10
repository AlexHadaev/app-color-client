import React from 'react';
import {observer} from "mobx-react-lite";
import {Pagination} from "react-bootstrap";
import styles from "../styles/Pages.module.scss";
import PaginationPage from "./PaginationPage";

const Pages = observer(
    () => {
        return (
            <Pagination className={styles.pages}>
                <PaginationPage/>
            </Pagination>
        );
    }
);

export default Pages;