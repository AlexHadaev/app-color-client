import React, {FC, useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchColors, fetchTypes} from "../http/colorAPI";
import ColorList from "../components/ColorList";
import Pages from "../components/Pages";
import styles from "../styles/Colors.module.scss";

const Colors: FC = observer(
    () => {
        const {color} = useContext(Context)

        useEffect(
            () => {
                fetchTypes().then(data => color.setTypes(data))
                fetchColors(null, null, 1, 12).then(data => {
                    color.setColors(data.rows)
                    color.setTotalCount(data.count)
                })

            }, []
        )

        useEffect(() => {
            fetchColors(color.selectedType.id, null, color.page, 12).then(data => {
                color.setColors(data.rows)
                color.setTotalCount(data.count)
            })
        }, [color.page, color.selectedType])
        return (
            <Container className={styles.container}>
                <Row>
                    <TypeBar styleMedia={styles.showDesktop}/>
                    <Col className={styles.colors}>
                        <ColorList/>
                        <Pages/>
                    </Col>
                </Row>

            </Container>
        );
    }
);

export default Colors;