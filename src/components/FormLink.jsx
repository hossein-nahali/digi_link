import React, {useContext, useState} from "react";
import {Container} from "react-bootstrap";
import {IconButton, TextField} from "@mui/material";
import '../css/FormLink.scss'
import SendIcon from '@mui/icons-material/Send';
import ValidationAddress from "../package/ValidationAddress";
import {Navigate} from 'react-router-dom';
import contexts from "../context/context";

export default function FormLink() {
    const [url, setUrl] = useState();
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(false);
    const context = useContext(contexts);

    const formHandler = (e) => {
        e.preventDefault();
        if (ValidationAddress(url)) {
            context.dispatch({type: 'SET_URL', url})
            setRedirect(true)
        } else {
            setRedirect(false)
            setError(true)
        }
    }

    return (
        <Container className={'form-link'}>
            {redirect && <Navigate to='/AddProduct'/>}
            <div className="main-form">
                <div className="header">
                    <h2>دیجی لینک</h2>
                    <p>لینک محصول مورد نظر خود را در دیجی کالا وارد کنید</p>
                </div>
                <form onSubmit={formHandler}>
                    <TextField
                        error={error}
                        id="demo-helper-text-aligned"
                        label="Link"
                        color={"info"}
                        className={'input-url'}
                        dir={'ltr'}
                        onChange={e => {
                            setUrl(e.target.value);
                            setError(false);
                        }}
                    />

                    <IconButton color="error" type={'submit'}
                                className={'btn-form'}><SendIcon/></IconButton>
                </form>
            </div>
        </Container>
    )

}