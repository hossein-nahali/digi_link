import React, {useContext, useEffect, useReducer, useState} from "react";
import {useLocation} from "react-router";
import ProductNotFound from "../ProductNotFound";
import {Box, Container, Grid, Typography} from "@mui/material";
import ImageSlider from "./ImageSlider";
import './ShowSingleProduct.scss';
import Review from "./Review";
import Title from "./Title";
import Feedback from "./Feedback";
import PriceBox from "../Products/ProductBox/PriceBox";
import Specifications from "./specifications";

import SingleProductLoading from "../../package/loading/SingleProductLoading";
import contexts from "../../context/context";

export default function ShowSingleProduct({id}) {
    const context = useContext(contexts);
    const [error, setError] = useState({error: false});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8080/product?id=${id}`)
            .then(r => r.json())
            .then(r => {
                if (!(!!r.length)) {
                    setLoading(false)
                    setError({
                        error: true,
                        errorText: 'محصول پیدا نشد'
                    })
                }
                setLoading(false)
                context.dispatch({type: 'INIT_SINGLE_PRODUCT', data: r[0]})
            })
    }, [id]);


    // product not found
    if (error.error) {
        return <ProductNotFound/>
    }

    return (
        <Container className={'show-single-product'}>
            {
                !loading ?
                    <Grid container spacing={2} className={'mt-3'}>
                        <Grid item xs={12} lg={4} md={4} sm={4}>
                            <ImageSlider/>
                        </Grid>
                        <Grid item xs={12} lg={8} md={8} sm={8}>
                            <Box className={'info-box'}>
                                <Title/>
                                <Feedback/>
                                <PriceBox price={context.state.infoProduct.price}
                                          is_show_default_price={context.state.infoProduct.is_show_default_price}
                                          is_show_title={true}/>
                                <Review/>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Specifications/>
                        </Grid>
                    </Grid>
                    : <SingleProductLoading/>
            }
        </Container>
    )
}