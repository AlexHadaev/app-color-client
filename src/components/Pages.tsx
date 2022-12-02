import React, {memo} from 'react';
import {Pagination} from "react-bootstrap";
import styles from "../styles/Pages.module.scss";
import PaginationPage from "./PaginationPage";

const Pages = memo(() => {
        // console.log('Pages');
        return (
            <Pagination className={styles.pages}>
                <PaginationPage/>
            </Pagination>
        );
    })
;

export default Pages;