import React, {useEffect, useState} from 'react'
import {Box} from "@mui/material";
import './Specifications.scss'

export default function Specifications({specs}) {
    const [expanded, setExpanded] = useState(false)
    const [attributes, setAttributes] = useState([])

    useEffect(() => {
        if (specs)
            setAttributes(expanded ? specs[0].attributes : specs[0].attributes.slice(0, 10))
    }, [expanded, specs]);

    return (
        specs ?
            <Box className={'specifications'}>
                <h2>{specs[0].title}</h2>
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
                <button onClick={() => setExpanded(!expanded)}>test</button>
            </Box>
            :
            <p>loading...</p>
    )
}