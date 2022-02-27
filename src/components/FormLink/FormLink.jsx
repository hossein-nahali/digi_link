import React, {useContext, useState} from "react";
import {IconButton, TextField, Container} from "@mui/material";
import './FormLink.scss'
import SendIcon from '@mui/icons-material/Send';
import ValidationAddress from "../../package/ValidationAddress";
import contexts from "../../context/context";
import {Navigate} from 'react-router-dom';
import {GetData} from "../../package/GetData";
import {IdProduct} from "../../package/IdProduct";

export default function FormLink() {
    const [url, setUrl] = useState();
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState(false);
    const [textError, setTextError] = useState(false);
    const context = useContext(contexts);

    const formHandler = (e) => {
        e.preventDefault();
        const get_url = ValidationAddress(url);

        if (get_url) {
            if (get_url[2] === "www.digikala") {
                GetData(IdProduct(get_url)).then(response => {
                    if (response.status === 200) {
                        context.dispatch({type: 'INIT_PRODUCT', data: response.data, url: get_url.input})
                        setRedirect(true);
                    }
                })
            } else {
                setTextError('Enter the desired url from Digikala');
                setError(true)
            }
        } else {
            setRedirect(false)
            setError(true)
            setTextError('invalid url')
        }
    }

    const ChangeHandler = (e) => {
        setUrl(e.target.value);
        setError(false);
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
                        helperText={error ? textError : null}
                        id="demo-helper-text-aligned"
                        label="Link"
                        color={"info"}
                        className={'input-url'}
                        dir={'ltr'}
                        onChange={ChangeHandler}
                    />

                    <IconButton color="error" type={'submit'} className={'btn-form'}>
                        <SendIcon/>
                    </IconButton>
                </form>
            </div>
        </Container>
    )

}