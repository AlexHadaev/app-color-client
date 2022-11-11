import React, {FC, useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
// import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
import {ITypes} from "../../types/types";
import {hexToRGB, rgbaToHex, shadows} from "../../utils/utils"
import {createColor, fetchColors, fetchTypes} from "../../http/colorAPI";

interface CreateColorProps {
    show: boolean,
    onHide: () => void
}

const CreateColor: FC<CreateColorProps> = observer(
    ({show, onHide}) => {
        const {color} = useContext(Context)
        const [shadow, setShadow] = useState<number>()
        const [name, setName] = useState('')
        const [noValidType, setNoValidType] = useState<boolean>(false)
        const [noValidShadow, setNoValidShadow] = useState<boolean>(false)

        useEffect(() => {
            if (show) {
                setNoValidType(false)
                setNoValidShadow(false)
            }
        }, [show])

        useEffect(() => {
            fetchTypes().then(data => color.setTypes(data))
            fetchColors().then(data => color.setColors(data.rows))
        }, [])


        const addDevice = () => {
            let formData = {}
            const colorCode = hexToRGB(name)

            if (shadow && color.selectedType.id) {
                const colorCodeHEX = rgbaToHex(colorCode + "," + shadow)
                // console.log(colorCodeHEX);
                formData = {
                    'color': colorCode + "," + shadow,
                    'shadow': colorCode,
                    'typeId': color.selectedType.id,
                    'colorHEXA': colorCodeHEX
                }

                createColor(formData).then(data => onHide())
            }
            shadow? setNoValidShadow(false) : setNoValidShadow(true)
            color.selectedType.id? setNoValidType(false): setNoValidType(true)
        }

        return (
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new color
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown className={"mt-2 mb-2"}>
                            <Dropdown.Toggle className={noValidType ? "btn-danger" : ''}>
                                {color.selectedType.name || 'Change type'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {color.types.map((type: ITypes) =>
                                    <Dropdown.Item
                                        onClick={() => color.setSelectedType(type)}
                                        key={type.id}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className={"mt-2 mb-2"}>
                            <Dropdown.Toggle className={noValidShadow ? "btn-danger" : ''}>
                                {shadow || 'Change shadow'}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>

                                {shadows().map((item: number) =>
                                    <Dropdown.Item
                                        onClick={() => setShadow(item)}
                                        key={item}
                                    >
                                        {item}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Label>Choose color</Form.Label>
                        <Form.Control
                            value={name}
                            type="color"
                            onChange={e => setName(e.target.value)}
                            title="Choose your color"
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                    <Button variant={"outline-success"} onClick={addDevice}>Add</Button>
                </Modal.Footer>
            </Modal>
        );
    }
);

export default CreateColor;