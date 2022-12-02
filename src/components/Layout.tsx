import React, {memo} from 'react'
import styles from "../styles/ColorPage.module.scss"
import {Container, Row} from "react-bootstrap"
import TypeBar from "./TypeBar"

type LayoutProps = {
    children?: JSX.Element | JSX.Element[]
}
const Layout = memo(({children}:LayoutProps) => {
    // console.log('Layout')
    return (
        <Container className={styles.container}>
            <Row>
                <TypeBar styleMedia={styles.showDesktop}/>
                {children}
            </Row>
        </Container>
    )
})

export default Layout