import React, {FC, useContext, useState} from 'react';
import styles from "../styles/NavBar.module.scss";
import {Form} from "react-bootstrap";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const SearchForm: FC = () => {
    const {color} = useContext(Context)
    const [querySearch, setQuerySearch] = useState<string>(color.query)
    const history = useNavigate()

    const handleKeyPress = (event:React.KeyboardEvent) => {
        if(event.key === 'Enter'){
            history('/color')
            event.preventDefault();
            color.setQuery(querySearch)
            color.setPage(1)
            color.setTotalCount(1)
            color.setOnToggle(false)
        }
    }
    return (
        <Form className={`d-flex ${styles.formSearch}`}>
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={querySearch}
                onKeyPress={(e)=>handleKeyPress(e)}
                onChange={(e) => setQuerySearch(e.target.value)}
            />

        </Form>
    );
};

export default SearchForm;