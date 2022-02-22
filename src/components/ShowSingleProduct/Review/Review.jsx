import React from "react";
import {Box, Typography} from "@mui/material";
import './Review.scss'

export default function Review({review}) {

    return (
        <Box className={'review'}>
            <Typography variant={'h3'}>ویژگی ها</Typography>
            <ul>
                {
                    review && review.map(item =>
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
    )
}