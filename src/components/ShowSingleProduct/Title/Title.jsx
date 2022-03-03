import React, {useContext} from "react";
import {Box, Typography} from "@mui/material";
import './Title.scss'
import ContextSingleProduct from "../../../context/context";

export default function Title() {
    const context = useContext(ContextSingleProduct).state.infoProduct;

    const direction = context.info_feedback && context.info_feedback.map((item) => <Typography
        key={item.url}> {item.title}</Typography>)

    const r_img_brand = context.img_brand && context.img_brand.map(index => <img key={index} src={index}
                                                                                 alt="img brand"/>)

    return (
        context &&
        <>
            <Box className={'title-fa'}>
                <Box className={'brand-img d-none d-sm-flex'}>
                    {r_img_brand}
                </Box>
                <Box className={'content'}>
                    <Box className={'direction'}>{direction}</Box>
                    <Typography variant="h1">{context.title_fa}</Typography>
                </Box>
            </Box>
            <Box className={'title-en d-flex align-items-center'}>
                <Typography>{context.title_en}</Typography>
                <span/>
            </Box>
        </>
    )
}