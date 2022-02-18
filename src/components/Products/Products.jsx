import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {getData, parseLinkHeader} from "../../package/db";
import ProductBox from "../ProductBox";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./Products.scss";

export default function Products() {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});

    useEffect(() => {
        setLoading(true)
        getData(`http://localhost:8080/product`)
            .then(r => r.json())
            .then(r => {
                setProduct(r);
                setLoading(false)
            })
            .catch(r => {
                setLoading(false);
                setError({
                    smg: 'عملیات با خطا روبرو شد لطفا دوباره تلاش کنید.',
                    logErr: r
                });
            })

    }, [])

    return (
        <Container className={'mt-3 products'}>
            {
                !loading
                    ?
                    <>
                        <Grid container spacing={2}>
                            {
                                product.map(obg => <Grid item className={'parent-grid'} xs={12} lg={3} md={3} sm={6}
                                                         key={obg.id}><ProductBox Obj_P={obg} key={obg.id}/></Grid>)
                            }
                        </Grid>
                    </>
                    : <p>loading ...</p>
            }
        </Container>
    )
}