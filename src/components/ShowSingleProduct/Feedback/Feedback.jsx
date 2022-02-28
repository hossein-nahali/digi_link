import React from "react";
import {Box} from "@mui/material";
import starimg from './img/star-yellow.png'
import './Feedback.scss'

export default function Feedback({data_layer}) {
    return (
        <Box className={'feedback'}>
            <Box className={'star'}>
                <img src={starimg} alt="star img"/>
                <p className={'star'}>{data_layer && data_layer.count_star}</p>
                <p className={'comments-count'}>({data_layer && data_layer.total_comments})</p>
            </Box>
            <Box className={'comments'}>
                <p className={'comments-counts'}>دیدگاه {data_layer && data_layer.comments_count}</p>
            </Box>
            <Box className={'question'}>
                <p className={'question-counts'}>پرسش {data_layer && data_layer.questions_count}</p>
            </Box>
        </Box>
    )
}