import React from "react";
import {Box, Typography} from "@mui/material";
import './Title.scss'

export default function Title({title_fa, title_en, info_feedback, img_brand}) {

    const direction = info_feedback && info_feedback.map((item) => <Typography
        key={item.url}> {item.title}</Typography>)

    const r_img_brand = img_brand && img_brand.map(index => <img key={index} src={index} alt="img brand"/>)

    return (
        <>
            <Box className={'title-fa'}>
                <Box className={'brand-img'}>
                    {r_img_brand}
                </Box>
                <Box className={'content'}>
                    <Box className={'direction'}>{direction}</Box>
                    <Typography variant="h1">{title_fa}</Typography>
                </Box>
            </Box>
            <Box className={'title-en d-flex align-items-center'}>
                <Typography>{title_en}</Typography>
                <span/>
            </Box>
        </>
    )
}