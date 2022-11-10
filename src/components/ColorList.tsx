import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {IColors} from "../types/types";
import ColorItem from "./ColorItem";
import styles from "../styles/ColorList.module.scss";

const ColorList = observer(
    () => {
        const {color} = useContext(Context)
        // console.log(color)
        return (
            <div className={`d-grid flex-wrap  ${styles.colorList}`}>
                {color.colors.map((color:IColors) =>
                    <ColorItem key={color.id} item={color} width={220} height={208}/>
                )}
            </div>
        );
    }
);

export default ColorList;