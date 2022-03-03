import React, {useContext} from "react";
import {Box} from "@mui/material";
import starimg from './img/star-yellow.png'
import './Feedback.scss'
import ContextSingleProduct from "../../../context/context";

export default function Feedback({data_layer}) {
    const context = useContext(ContextSingleProduct).state.infoProduct;

    return (
        <Box className={'feedback'}>
            <Box className={'star'}>
                <img src={starimg} alt="star img"/>
                <p className={'star'}>{context.data_layer && context.data_layer.count_star}</p>
                <p className={'comments-count'}>({context.data_layer && context.data_layer.total_comments})</p>
            </Box>
            <Box className={'comments'}>
                <p className={'comments-counts'}>دیدگاه {context.data_layer && context.data_layer.comments_count}</p>
            </Box>
            <Box className={'question'}>
                <p className={'question-counts'}>پرسش {context.data_layer && context.data_layer.questions_count}</p>
            </Box>
        </Box>
    )
}