import React, {useEffect, useState} from "react";
import ProductNotFound from "../ProductNotFound";
import {Container} from "@mui/material";

export default function ShowSingleProduct({id}) {
    const [error, setError] = useState({error: false});

    useEffect(() => {
        fetch(`http://localhost:8080/product?id=${id}`)
            .then(r => r.json())
            .then(r => {
                if (!(!!r.length))
                    setError({
                        error: true,
                        errorText: 'محصول پیدا نشد'
                    })
                console.log(r);
            })
    }, []);

    // product not found
    if (error.error) {
        return <ProductNotFound/>
    }

    return (
        <Container className={'show-single-product'}>
            
        </Container>
    )
}