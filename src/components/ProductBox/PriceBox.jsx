import React from "react";
import {Typography} from "@mui/material";
import {numberWithCommas} from "../../package/NumberWithCommas";

export default function PriceBox({price, is_show_default_price}) {
    return (
        !!price.discount_percent && !is_show_default_price ?
            <>
                <Typography variant='p' component="p" className={'discount-price'}>{price.discount_percent}%</Typography>
                <Typography variant='p' component="p" className={'old-price'}>{numberWithCommas(price.rrp_price)}</Typography>
                <Typography variant='p' component="p" className={'new-price'}>{numberWithCommas(price.selling_price)}</Typography>
            </>
            :
            <Typography variant='p' component="p" className={'price'}>{numberWithCommas(price.rrp_price)}</Typography>
    )
}