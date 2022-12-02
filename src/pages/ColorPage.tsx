import React, {FC, memo, useEffect, useState} from 'react'
import {Card, Col, Spinner} from "react-bootstrap"
import styles from "../styles/ColorPage.module.scss"
import {IColors} from "../types/types"
import ColorItem from "../components/ColorItem"
import {useParams} from "react-router-dom"
import {fetchOneColor} from "../http/colorAPI"
import Layout from "../components/Layout"
import {sortRGB} from "../utils/utils";

const ColorPage: FC = memo(() => {
    const [item, setItem] = useState<any>()
    const [shadows, setShadows] = useState<any>()
    const [spinner, setSpinner] = useState<boolean>(true)
    const [isResult, setIsResult] = useState<boolean>(false)
    const {id} = useParams()


    useEffect(() => {
        fetchOneColor(id).then(data => {
            setIsResult(!data.message)
            const rows = data.rows || []
            const dataColor = data.dataColor || {}

            setSpinner(false)
            setItem(dataColor)

            const sort = rows.sort(sortRGB);
            setShadows(sort)
            console.log(sort, );
        })
    }, [id])

    return (
        <Layout>
            <Col className={styles.colorPage}>
                {spinner ?
                    <div className={styles.spinner}>
                        <Spinner animation="border" variant="primary"/>
                    </div>:
                    !isResult &&  <h1 className={"mt-5 text-center"}>No result</h1>
                }
                {isResult &&
                    <Card className={styles.colorPageCard}>
                        <div className={styles.colorBox} style={{background: `rgba(${item.rgb})`}}/>
                        <h6>{item.hex}</h6>
                    </Card>
                }
                <div className={"d-flex flex-wrap p-0 " + styles.listShadow}>
                    {shadows && shadows.map((color: IColors) =>
                        <ColorItem key={color.id} item={color} width={175} height={175}/>
                    )}
                </div>

            </Col>
        </Layout>
    );
});

export default ColorPage;