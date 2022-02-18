import React from "react";
import PriceBox from "./PriceBox";
import {Box, Typography} from "@mui/material";
import './ProductBox.scss'

export default function ProductBox({Obj_P}) {
    return (
        <Box className={'product-box'}>
            <Box className={'product-img'}>
                <img src={Obj_P.default_img} alt=""/>
            </Box>
            <Box className={'product-content'}>
                <Typography variant={'h3'} className={'product-title'}>{Obj_P.title}</Typography>
                <Box className={'product-price'}>
                    <PriceBox price={Obj_P.price} is_show_default_price={Obj_P.is_show_default_price}/>
                </Box>
            </Box>
        </Box>
    )
}
