import React from "react";
import PriceBox from "./PriceBox";
import {Box, Typography} from "@mui/material";
import './ProductBox.scss'
import {Link} from "react-router-dom";

export default function ProductBox({Obj_P}) {
    return (
        <Box className={'product-box'}>
            <Box className={'product-img'}>
                <img src={Obj_P.default_img} alt=""/>
            </Box>
            <Box className={'product-content'}>
                <Typography variant={'h3'} className={'product-title'}>
                    <Link to={`/SingleProduct/${Obj_P.id}`}>{Obj_P.title}</Link>
                </Typography>
                <Box className={'product-price'}>
                    <PriceBox price={Obj_P.price} is_show_default_price={Obj_P.is_show_default_price}/>
                </Box>
            </Box>
        </Box>
    )
}
