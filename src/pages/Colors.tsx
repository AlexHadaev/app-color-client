import React, {FC, memo} from 'react'
import {Col} from "react-bootstrap"
import ColorList from "../components/ColorList"
import styles from "../styles/Colors.module.scss"
import Layout from "../components/Layout"

const Colors: FC = memo(
    () => {
        return (
            <Layout>
                <Col className={styles.colors}>
                    <ColorList/>

                </Col>
            </Layout>
        );
    }
);

export default Colors;