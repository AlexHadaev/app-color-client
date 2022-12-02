import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {IColors} from "../types/types";
import ColorItem from "./ColorItem";
import styles from "../styles/ColorList.module.scss";
import {fetchColors} from "../http/colorAPI";
import {Spinner} from "react-bootstrap";

const ColorList = observer(
    () => {
        const {color} = useContext(Context)
        const [spinner, setSpinner] = useState<boolean>(true)
        const [isResult, setIsResult] = useState<boolean>(true)
        const querySearch = color.query || null

        useEffect(() => {
            fetchColors(color.selectedType.id, color.page, 12, querySearch).then(data => {
                setIsResult(!data.message)
                const rows = data.rows || []
                const count = data.count || 0

                color.setColors(rows)
                color.setTotalCount(count)
                setSpinner(false)

            })
        }, [ color.page, color.selectedType.id,   querySearch, ])
        // console.log('ColorList');
        return (
            <div className={`d-grid flex-wrap  ${styles.colorList}`}>
                {spinner &&
                <div className={styles.spinner}>
                    <Spinner animation="border" variant="primary"/>
                </div>
                }

                {isResult ?
                    color.colors.map((color: IColors) =>
                        <ColorItem key={color.id} item={color} width={220} height={208}/>
                    ) :
                    <h1 className={"mt-5 text-center"}>No result</h1>
                }
            </div>
        );
    }
);

export default ColorList;