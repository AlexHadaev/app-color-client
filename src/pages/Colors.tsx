import React, {FC, memo} from 'react'
import {Col} from "react-bootstrap"
import ColorList from "../components/ColorList"
import Pages from "../components/Pages"
import styles from "../styles/Colors.module.scss"
import Layout from "../components/Layout"

const Colors: FC = memo(
    () => {
        return (
            <Layout>
                <Col className={styles.colors}>
                    <ColorList/>
                    <Pages/>
                </Col>
            </Layout>
        );
    }
);

export default Colors;