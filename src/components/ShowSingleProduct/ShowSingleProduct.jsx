import React, {useEffect, useState} from "react";
import ProductNotFound from "../ProductNotFound";
import {Box, Container, Grid, Typography} from "@mui/material";
import ImageSlider from "./ImageSlider";
import './ShowSingleProduct.scss';
import Review from "./Review";
import Title from "./Title";
import Feedback from "./Feedback";
import PriceBox from "../Products/ProductBox/PriceBox";

export default function ShowSingleProduct({id}) {
    const [error, setError] = useState({error: false});
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});

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
                {
                    !loading &&
                    <>
                        <Grid item xs={4}>
                            {product.img && <ImageSlider imageList={product.img}/>}
                        </Grid>
                        <Grid item xs={8}>
                            <Box className={'info-box'}>
                                <Title title_fa={product.title_fa} title_en={product.title_en}
                                       info_feedback={product.brand_breadcrumb} img_brand={product.brand_img}/>
                                <Feedback data_layer={product.data_layer}/>
                                {
                                    product.price &&
                                    <Box className={'price'}>
                                        <Typography variant={'h3'}>قیمت :</Typography>
                                        <PriceBox price={product.price}
                                                  is_show_default_price={product.is_show_default_price}/>
                                    </Box>
                                }
                                <Review review={product.review}/>
                            </Box>
                        </Grid>
                    </>
                }
            </Grid>
        </Container>
    )
}