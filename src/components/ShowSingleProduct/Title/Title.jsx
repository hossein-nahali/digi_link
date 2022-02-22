import React from "react";
import {Box, Typography} from "@mui/material";
import './Title.scss'

export default function Title({title_fa, title_en}) {

    return (
        <>
            <Typography variant="h1">{title_fa}</Typography>
            <Box className={'title-en d-flex align-items-center'}>
                <Typography>{title_en}</Typography>
                <span/>
            </Box></>
    )
}