import React from "react";
import {Box, Typography} from "@mui/material";
import {numberWithCommas} from "../../../package/NumberWithCommas";
import './PriceBox.scss'

export default function PriceBox({price, is_show_default_price, is_show_title = false}) {

    return (
        price ?
            <Box className={'product-price'}>
                <Box className={'title-price'}>
                    {is_show_title && <Typography variant={'h3'}>قیمت :</Typography>}
                </Box>
                <Box className={'price'}>
                    {
                        !!price.discount_percent && !is_show_default_price ?
                            <>
                                <Typography variant='p' component="p"
                                            className={'discount-price'}>{price.discount_percent}%</Typography>
                                <Typography variant='p' component="p"
                                            className={'new-price'}>{numberWithCommas(price.selling_price)}</Typography>
                                <Typography variant='p' component="p"
                                            className={'old-price'}>{numberWithCommas(price.rrp_price)}</Typography>
                            </>
                            :
                            <Typography variant='p' component="p"
                                        className={'price'}>{numberWithCommas(price.rrp_price)}</Typography>
                    }
                </Box>
            </Box>
            : <p>loading...</p>
    );
}