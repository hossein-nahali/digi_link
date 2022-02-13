import React, {useContext} from "react";
import InfoProduct from "../components/InfoProduct";
import contexts from "../context/context";
import {Navigate} from 'react-router-dom';

export default function AddProduct() {
    const {infoProduct} = useContext(contexts).state;

    return (
        <>
            {!infoProduct.url ? <Navigate to='/'/> : <InfoProduct/>}
        </>
    )
}