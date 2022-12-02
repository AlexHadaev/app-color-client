import React, {FC, memo, useContext} from 'react'
import {Context} from "../index"
import {Button, Col, ListGroup} from "react-bootstrap"
import {fetchColorRandom} from "../http/colorAPI";
import {useNavigate} from "react-router-dom";
import styles from "../styles/TypeBar.module.scss"
import TypeList from "./TypeList";

interface TypeBarProps{
    styleMedia: {},
    toggle?:boolean
}

const TypeBar:FC<TypeBarProps> = memo(
    (styleMedia) => {
        const {color} = useContext(Context)
        const history = useNavigate()
        // console.log('TypeBar');

        const randomColors = () => {
            color.setQuery('')

            fetchColorRandom(color.selectedType.id).then(data => {
                history('/color/'+data)
                color.setOnToggle(false)
            })
        }

        return (
            <Col className={styleMedia.styleMedia + ' ' + styles.typeBar}>
                <ListGroup>
                    <Button variant="outline-dark" className={`mb-3 ${styles.btnLight}`} onClick={randomColors}>
                        Random Color
                    </Button>
                    <TypeList/>
                </ListGroup>
            </Col>

        );
    }
);

export default TypeBar;