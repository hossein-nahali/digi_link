import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import image_not_found from './img/page-not-found.png'
import './ProductNotFound.scss'
import {NavLink} from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ProductNotFound() {

    return (
        <Container className={'product-not-found'}>
            <Box className={'product-not-found-box'}>
                <img src={image_not_found} alt="product not found"/>
                <Box className={'desc'}>
                    <Typography>
                        محصول یافت نشد
                    </Typography>
                    <Typography className={'home-link'}>
                        <NavLink to={'/'}>صحفه اصلی</NavLink>
                        <KeyboardArrowDownIcon/>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};