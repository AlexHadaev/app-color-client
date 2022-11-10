import React, {FC, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createColorGenerate} from "../../http/colorAPI";

interface GenerateColorProps {
    show:boolean,
    onHide: () => void
}
const GenerateColor:FC<GenerateColorProps> = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [check, setCheck] = useState(true)
    const generateColors = () => {
        createColorGenerate(value, check).then(data => setValue(''))
        onHide()
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
                    Generate colors
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        type={"number"}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Enter count colors"}
                    />
                    <Form.Label className={"mt-3"}>Add more color shades</Form.Label>
                    <Form.Check type={"checkbox"} checked={check} onChange={() => setCheck(!check)}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={generateColors}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default GenerateColor;