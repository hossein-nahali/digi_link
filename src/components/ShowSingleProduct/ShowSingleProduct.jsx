import React, {useEffect, useState} from "react";
import ProductNotFound from "../ProductNotFound";
import {Box, Container, Grid, Typography} from "@mui/material";
import ImageSlider from "./ImageSlider";
import './ShowSingleProduct.scss';
import Review from "./Review";
import Title from "./Title";
import InfoComments from "./InfoComments";

export default function ShowSingleProduct({id}) {
    const [error, setError] = useState({error: false});
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/product?id=${id}`)
            .then(r => r.json())
            .then(r => {
                if (!(!!r.length))
                    setError({
                        error: true,
                        errorText: 'محصول پیدا نشد'
                    })
                setProduct(r[0]);
            })
    }, [id]);

    // product not found
    if (error.error) {
        return <ProductNotFound/>
    }

    return (
        <Container className={'show-single-product'}>
            <Grid container spacing={2} className={'mt-3'}>
                <Grid item xs={4}>
                    {product.img && <ImageSlider imageList={product.img}/>}
                </Grid>
                <Grid item xs={8}>
                    <Box className={'info-box'}>
                        <Title title_fa={product.title_fa} title_en={product.title_en}/>
                        <InfoComments/>
                        <Review review={product.review}/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}