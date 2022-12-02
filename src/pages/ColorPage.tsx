import React, {FC, memo, useEffect, useState} from 'react';
import {Card, Col} from "react-bootstrap";
import styles from "../styles/ColorPage.module.scss"
import {IColors} from "../types/types";
import ColorItem from "../components/ColorItem";
import {useParams} from "react-router-dom";
import {fetchOneColor} from "../http/colorAPI";
import Layout from "../components/Layout";

const ColorPage: FC = memo(() => {
    const [item, setItem] = useState<any>()
    const [shadows, setShadows] = useState<any>()
    const {id} = useParams()
    // console.log('colorPage');
    useEffect(() => {
        fetchOneColor(id).then(data => {
            setItem(data.dataColor)
            setShadows(data.rows)
        })
    }, [id])

    return (
        <Layout>
            <Col className={styles.colorPage}>
                <Card className={styles.colorPageCard}>
                    {item &&
                    <>
                        <div className={styles.colorBox} style={{background: `rgba(${item.rgb})`}}/>
                        <h6>{item.hex}</h6>
                    </>
                    }

                </Card>
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