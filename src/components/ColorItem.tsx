import React, {FC, memo} from 'react';
import {Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {IColors} from "../types/types";
import styles from "../styles/ColorItem.module.scss";

interface ColorItemProps {
    width?: number | string;
    height?: number | string;
    item: IColors;
    onClick?: (color: IColors) => void;
}

const ColorItem:FC<ColorItemProps> = memo(
    ({item, width, height}) => {
        const history = useNavigate()
        return (
            <div className={styles.colorItem} style={{ width: width, cursor:'pointer'}} onClick={()=> history(('/color/'+item.id))}>
                <Card  text={"dark"} >
                    <div className={styles.colorBox} style={{ height:height, background:`rgba(${item.rgb})`}}/>
                    <h6 className={"sd"}>{item.hex}</h6>
                </Card>
            </div>
        );
    }
);

export default ColorItem;