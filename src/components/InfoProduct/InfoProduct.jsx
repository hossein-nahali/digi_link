import React, {useContext, useState} from "react";
import contexts from "../../context/context";
import {Container} from "@mui/material";
import './InfoProduct.scss'
import Image from "../Image";
import Price from "../Price";
import Specs from "../Specs";
import LoadingButton from '@mui/lab/LoadingButton';
import {Button} from "@mui/material";
import {Navigate} from "react-router-dom";
import {CreateProduct} from "../../package/db";
import SaveIcon from '@mui/icons-material/Add';
import {CModal} from "../../package/custom/Modal";

export default function InfoProduct() {
    const context = useContext(contexts);
    const {infoProduct} = useContext(contexts).state;
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState('success');
    const [textModal, setTextModal] = useState('');
    const closeModal = () => setModal(false);


    function add_product() {
        setLoading(true);
        CreateProduct('http://localhost:8080/product', infoProduct)
            .then(r => {
                setLoading(false);
                setModal(true);
                console.log(r);
                if (r.status === 201) {
                    setStatus('success');
                    setTextModal('محصول با موفقیت اضافه شد');
                } else {
                    setStatus('error');
                    setTextModal('عملیات با خطا موتجه شد');
                }
            })
    }

    function redirectHome() {
        setLoading(true);
        context.dispatch({type: 'RESET_VALUES'})
        return <Navigate to='/'/>
    }

    function redirectProductList() {
        context.dispatch({type: 'RESET_VALUES'})
    }

    return (
        <Container>
            <div className="main-product">
                <div className="desc">
                    <h1>{infoProduct.title}</h1>
                    <Price is_discount={infoProduct.discount} price={infoProduct.price}/>
                    <Specs/>
                </div>
                <div className="images d-flex mt-3 flex-wrap">
                    <h3>تصاویر</h3>
                    {
                        infoProduct.img.map((obj, index) => {
                            return <Image key={index} info_img={obj}/>
                        })
                    }
                </div>
                <div className="buttons">
                    <LoadingButton className={loading ? 'active-loading-btn' : ''} variant="contained" color="success"
                                   loading={loading} loadingPosition="start" onClick={add_product}
                                   startIcon={<SaveIcon/>}>
                        اضافه کردن محصول
                    </LoadingButton>
                    <Button variant="outlined" color="error" onClick={redirectHome} status={'error'}>
                        انصراف
                    </Button>
                    <CModal modal={modal} closeModal={closeModal} redirect={{redirectHome, redirectProductList}}
                            status={status}
                            text={textModal}/>
                </div>
            </div>
        </Container>
    )
}