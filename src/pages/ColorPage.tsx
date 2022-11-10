import React, {useContext, useEffect, useState} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {rgbaToHex} from "../utils/utils";
import styles from "../styles/ColorPage.module.scss"
import {IColors} from "../types/types";
import ColorItem from "../components/ColorItem";
import {Context} from "../index";
import {useParams} from "react-router-dom";
import {fetchOneColor, fetchTypes} from "../http/colorAPI";
import TypeBar from "../components/TypeBar";
import {observer} from "mobx-react-lite";

const ColorPage = observer(
    () => {
        const [item, setItem] = useState<any>()
        const {color} = useContext(Context)
        let {id} = useParams()

        useEffect(() => {
            fetchOneColor(id).then(data => {
                setItem(data)
            })
            fetchOneColor(id, 5).then(data => {
                color.setShadows(data.rows)
            })
        }, [id, color])

        useEffect(() => {
            fetchTypes().then(data => color.setTypes(data))
        }, [])

        return (
            <Container className={styles.container}>
                <Row>
                    <TypeBar styleMedia={styles.showDesktop}/>
                    <Col className={styles.colorPage}>
                        <div>
                            <Card className={styles.colorPageCard}>
                                {item &&
                                <>
                                    <div className={styles.colorBox} style={{background: `rgba(${item.color})`}}/>
                                    <h6>{rgbaToHex(item.color)}</h6>
                                </>
                                }

                            </Card>
                        </div>
                        <div className={"d-flex flex-wrap p-0 "+ styles.listShadow}>
                            {color.shadows.map((color: IColors) =>
                                <ColorItem key={color.id} item={color} width={175} height={175}/>
                            )}
                        </div>

                    </Col>
                </Row>
            </Container>

        );
    }
);

export default ColorPage;