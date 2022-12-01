import React, {FC, useContext, useEffect, useState} from 'react';
import {Col, Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchColors} from "../http/colorAPI";
import ColorList from "../components/ColorList";
import Pages from "../components/Pages";
import styles from "../styles/Colors.module.scss";
import Layout from "../components/Layout";

const Colors: FC = observer(
    () => {
        const {color} = useContext(Context)
        const [spinner, setSpinner] = useState<boolean>(true)
        const [isResult, setIsResult] = useState<boolean>(true)
        const querySearch = color.query || null
        // useMemo(
        //     () => {
        //         // fetchTypes().then(data => color.setTypes(data))
        //         fetchColors(null, 1, 12).then(data => {
        //             color.setColors(data.rows)
        //             color.setTotalCount(data.count)
        //             setSpinner(false)
        //         })
        //
        //     }, []
        // )

        useEffect(() => {
            console.log(color.message);

            fetchColors(color.selectedType.id, color.page, 12, querySearch).then(data => {
                // const checkResult = data.message?false:true
                setIsResult(!data.message)
                const rows = data.rows || []
                const count = data.count || 0
                console.log(!data.message);
                color.setColors(rows)
                color.setTotalCount(count)
                setSpinner(false)

            })
            //     }
            //
        }, [
            color.page,
            color.selectedType.id,
            querySearch,
            // color.totalCount
        ])
        return (
            <Layout>
                <Col className={styles.colors}>
                    {spinner &&
                    <div className={styles.spinner}>
                        <Spinner animation="border" variant="primary"/>
                    </div>
                    }
                    {isResult ?
                        <ColorList/> :
                        <h1 className={"mt-5 text-center"}>No result</h1>
                    }

                    <Pages/>
                </Col>
            </Layout>
        );
    }
);

export default Colors;