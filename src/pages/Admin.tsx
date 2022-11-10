import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateColor from "../components/modals/CreateColor";
import GenerateColors from "../components/modals/GenerateColors";

const Admin = () => {
    const [generateVisible, setGenerateVisible] = useState<boolean>(false)
    const [typeVisible, setTypeVisible] = useState<boolean>(false)
    const [colorVisible, setColorVisible] = useState<boolean>(false)
    return (
        <Container className={"d-flex flex-column"}>
            <Button
                variant={"outline-dark"}
                className={"mt-4 p-2"}
                onClick={()=>setTypeVisible(true)}
            >
                Add type
            </Button>
            <Button
                variant={"outline-dark"}
                className={"mt-4 p-2"}
                onClick={()=>setColorVisible(true)}
            >
                Add color
            </Button>
            <Button
                variant={"outline-dark"}
                className={"mt-4 p-2"}
                onClick={()=>setGenerateVisible(true)}
            >
                Generate colors
            </Button>
            <GenerateColors show={generateVisible} onHide={()=>setGenerateVisible(false)}/>
            <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
            <CreateColor show={colorVisible} onHide={()=>setColorVisible(false)}/>
        </Container>
    );
};

export default Admin;