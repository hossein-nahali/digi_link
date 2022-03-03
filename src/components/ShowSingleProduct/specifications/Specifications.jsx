import React, {useContext, useEffect, useState} from 'react'
import {Box} from "@mui/material";
import ArrowIcon from '@mui/icons-material/KeyboardArrowDown';
import './Specifications.scss'
import SpecificationsSingleLoading from "../../../package/loading/SpecificationsSingleLoading";
import ContextSingleProduct from "../../../context/context";

export default function Specifications() {
    const [expanded, setExpanded] = useState(false)
    const [attributes, setAttributes] = useState([])
    const context = useContext(ContextSingleProduct).state.infoProduct;

    useEffect(() => {
        if (context.specifications.length)
            setAttributes(expanded ? context.specifications[0].attributes : context.specifications[0].attributes.slice(0, 5))
    }, [context.specifications, expanded]);

    return (
        context.specifications.length ?
            <Box className={'specifications-single-product'}>
                <h2>{context.specifications[0].title}</h2>
                <Box className={'table'}>
                    {
                        attributes && attributes.map((index, id) => {
                            return (
                                <div className={'parent-table'} key={index.title}>
                                    <p className={'title'}>{index.title}</p>
                                    <div className="attrs">
                                        {
                                            index.values.map(index => {
                                                return (
                                                    <p key={index}>{index}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </Box>
                {context.specifications[0].attributes && context.specifications[0].attributes.length > 5 &&
                <p className={'expanded'} onClick={() => setExpanded(!expanded)}>
                    {!expanded ? 'مشاهده بیشتر' : 'بستن'}
                    <ArrowIcon/>
                </p>
                }
            </Box>
            : <SpecificationsSingleLoading/>
    )
}