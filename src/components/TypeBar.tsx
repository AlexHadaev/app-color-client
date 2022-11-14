import React, {FC, useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Col, ListGroup} from "react-bootstrap";
import {ITypes} from "../types/types";
import {fetchColors} from "../http/colorAPI";
import {useNavigate} from "react-router-dom";
import styles from "../styles/TypeBar.module.scss"

interface TypeBarProps{
    styleMedia: {},
    toggle?:boolean
}

const TypeBar:FC<TypeBarProps> = observer(
    (styleMedia, toggle) => {
        const {color} = useContext(Context)
        const history = useNavigate()
        const [activeTab, setActiveTab] = useState<boolean>(true)
        useEffect(()=>{
            if (color.selectedType.id) setActiveTab(false)
        },[])

        const randomColors = () => {
            color.setQuery('')
            fetchColors(color.selectedType.id, 12, 1, 8).then(data => {
                color.setColors(data.rows)
                history('/color')
                if (toggle){
                    color.setOnToggle(false)
                }
            })
        }

        const changeType = (type:ITypes) => {
            color.setQuery('')
            color.setSelectedType(type)
            setActiveTab(false)
            history('/color')

            if (toggle){
                color.setOnToggle(false)
            }
        }

        const changeAllColors = () => {
            color.setQuery('')
            setActiveTab(true)
            color.setSelectedType(0)
            history('/color')
            if (toggle){
                color.setOnToggle(false)
            }
        }
        return (
            <Col className={styleMedia.styleMedia + ' ' + styles.typeBar}>
                <ListGroup>
                    <Button variant="outline-dark" className={`mb-3 ${styles.btnLight}`} onClick={randomColors}>
                        Random Color
                    </Button>
                    <ListGroup.Item
                        className={`pt-1 pb-1 ${styles.listGroupItem}` }
                        active={activeTab}
                        onClick={()=> changeAllColors()}
                    >
                        All colors
                    </ListGroup.Item>
                    {color.types.map((type:ITypes) =>
                        <ListGroup.Item
                            className={`pt-1 pb-1 ${styles.listGroupItem}` }
                            active={type.id === color.selectedType.id}
                            onClick={()=> changeType(type)}
                            key={type.id}
                        >
                            {type.name}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Col>

        );
    }
);

export default TypeBar;