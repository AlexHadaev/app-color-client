import React, {useContext, useState} from 'react';
import {ITypes} from "../types/types";
import {ListGroup} from "react-bootstrap";
import styles from "../styles/TypeBar.module.scss";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const TypeList = observer(() => {
    const {color} = useContext(Context)
    const history = useNavigate()
    const [activeTab, setActiveTab] = useState<boolean>(!color.selectedType.id)

    const changeAllColors = () => {
        color.setQuery('')
        setActiveTab(true)
        color.setSelectedType(0)
        color.setTotalCount(1)
        history('/color')
        color.setOnToggle(false)
    }

    const changeType = (type: ITypes) => {
        color.setQuery('')
        color.setSelectedType(type)
        setActiveTab(false)
        history('/color')
        color.setTotalCount(1)
        color.setOnToggle(false)
    }
    return (
        <>
            <ListGroup.Item
                className={`pt-1 pb-1 ${styles.listGroupItem}`}
                active={activeTab}
                onClick={() => changeAllColors()}
            >
                All colors
            </ListGroup.Item>
            {color.types.map((type: ITypes) =>
                <ListGroup.Item
                    className={`pt-1 pb-1 ${styles.listGroupItem}`}
                    active={type.id === color.selectedType.id}
                    onClick={() => changeType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </>
    );
});

export default TypeList;