import React, {FC} from 'react';
import {Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {IColors} from "../types/types";
import {rgbaToHex} from "../utils/utils";
import styles from "../styles/ColorItem.module.scss";

interface ColorItemProps {
    width?: number | string;
    height?: number | string;
    item: IColors;
    onClick?: (color: IColors) => void;
}

const ColorItem:FC<ColorItemProps> = ({item, width, height}) => {
    //useHistory()
    const history = useNavigate()
    return (
        <div className={styles.colorItem} style={{ width: width, cursor:'pointer'}} onClick={()=> history(('/color/'+item.id))}>
            <Card  text={"dark"} >
                <div className={styles.colorBox} style={{ height:height, background:`rgba(${item.color})`}}/>
                <h6 className={"sd"}>{rgbaToHex(item.color)}</h6>
            </Card>
        </div>
    );
};

export default ColorItem;