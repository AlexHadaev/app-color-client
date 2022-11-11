import React, {FC, useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../../http/colorAPI";

interface CreateTypeProps{
    show: boolean,
    onHide: () => void,
}

const CreateType: FC<CreateTypeProps> = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [noValid, setNoValid] = useState<boolean>(false)

    useEffect(()=> {
        show && setNoValid(false)
    }, [show])

    const addType = () => {
        if (value !== ''){
            setNoValid(false)
            createType({name: value}).then(() => {
                setValue('')
            })
            onHide()
        }else{
            setNoValid(true)
        }
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
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className={noValid? "is-invalid":''}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Enter type name"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;