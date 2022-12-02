import React, {FC, useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {ITypes} from "../../types/types";
import {hexToRGB, rgbToHex} from "../../utils/utils"
import {createColor} from "../../http/colorAPI";

interface CreateColorProps {
    show: boolean,
    onHide: () => void
}

const CreateColor: FC<CreateColorProps> = observer(
    ({show, onHide}) => {
        const {color} = useContext(Context)
        const [name, setName] = useState('')
        const [noValidType, setNoValidType] = useState<boolean>(false)

        useEffect(() => {
            if (show) {
                setNoValidType(false)
            }
        }, [show])

        const addColor = () => {
            let formData = {}
            const colorCode = hexToRGB(name)

            if (color.selectedType.id) {
                const colorCodeHEX = rgbToHex(colorCode)
                formData = {
                    'rgb': colorCode,
                    'typeId': color.selectedType.id,
                    'hex': colorCodeHEX
                }

                createColor(formData).then(data => onHide())
            }
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
                    <Button variant={"outline-success"} onClick={addColor}>Add</Button>
                </Modal.Footer>
            </Modal>
        );
    }
);

export default CreateColor;