import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {IconButton, TextField} from "@mui/material";
import '../css/FormLink.scss'
import SendIcon from '@mui/icons-material/Send';
import ValidationAddress from "../package/ValidationAddress";
import {Redirect} from "react-router-dom";
import {Route} from "@mui/icons-material";

export default function FormLink() {
    const [url, setUrl] = useState();
    const [redirect, setRedirect] = useState(false);

    const formHandler = (e) => {
        e.preventDefault();
        if (ValidationAddress(url))
            setRedirect(true)
        setRedirect(false)
    }
    return (
        <Container className={'form-link'}>
            <div className="main-form">
                <div className="header">
                    <h2>دیجی لینک</h2>
                    <p>لینک محصول مورد نظر خود را در دیجی کالا وارد کنید</p>
                </div>
                <form onSubmit={formHandler}>
                    <TextField
                        id="demo-helper-text-aligned"
                        label="Link"
                        color={"info"}
                        className={'input-url'}
                        dir={'ltr'}
                        onChange={e => setUrl(e.target.value)}
                    />

                    <IconButton color="error" type={'submit'} className={'btn-form'}><SendIcon/></IconButton>
                </form>
            </div>
        </Container>

    )
}