import React, {FC, useState} from 'react'
import {Button, Col, Container} from "react-bootstrap"
import CreateType from "../components/modals/CreateType"
import CreateColor from "../components/modals/CreateColor"
import GenerateColors from "../components/modals/GenerateColors"
import Layout from "../components/Layout"
import styles from "../styles/ColorPage.module.scss"

const Admin: FC = () => {
    const [generateVisible, setGenerateVisible] = useState<boolean>(false)
    const [typeVisible, setTypeVisible] = useState<boolean>(false)
    const [colorVisible, setColorVisible] = useState<boolean>(false)
    return (
        <Layout>
            <Col className={styles.colorPage}>
                <Container className={"d-flex flex-column"}>
                    <Button
                        variant={"outline-dark"}
                        className={"mt-4 p-2"}
                        onClick={()=>setTypeVisible(true)}
                    >
                        Add type
                    </Button>
                    <Button
                        variant={"outline-dark"}
                        className={"mt-4 p-2"}
                        onClick={()=>setColorVisible(true)}
                    >
                        Add color
                    </Button>
                    <Button
                        variant={"outline-dark"}
                        className={"mt-4 p-2"}
                        onClick={()=>setGenerateVisible(true)}
                    >
                        Generate colors
                    </Button>
                    <GenerateColors show={generateVisible} onHide={()=>setGenerateVisible(false)}/>
                    <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
                    <CreateColor show={colorVisible} onHide={()=>setColorVisible(false)}/>
                </Container>
            </Col>

        </Layout>

    )
}

export default Admin;