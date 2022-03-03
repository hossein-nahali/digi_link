import React, {useContext} from "react";
import {Box, Typography} from "@mui/material";
import './Review.scss'
import ContextSingleProduct from "../../../context/context";

export default function Review() {
    const context = useContext(ContextSingleProduct).state.infoProduct;

    return (
        context.review && context.review.length ?
            <Box className={'review'}>
                <Typography variant={'h3'}>ویژگی ها</Typography>
                <ul>
                    {
                        context.review && context.review.map(item =>
                            <li key={item.title}>
                                <Box className={'d-flex'}>
                                    <p>{item.title} :</p>
                                    <p>{item.values.join(", ")}</p>
                                </Box>
                            </li>
                        )
                    }
                </ul>
            </Box>
            : null
    )
}