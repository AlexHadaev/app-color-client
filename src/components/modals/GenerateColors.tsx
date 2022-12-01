import React, {FC, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createColorGenerate} from "../../http/colorAPI";

interface GenerateColorProps {
    show:boolean,
    onHide: () => void
}
const GenerateColor:FC<GenerateColorProps> = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const generateColors = () => {
        const countColor = value || '20'
        createColorGenerate(countColor).then(data => setValue(''))
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
                        placeholder={"Enter count colors (default 20)"}
                    />
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