import React from "react";
import {useParams} from "react-router-dom";
import ShowSingleProduct from "../components/ShowSingleProduct";

export default function SingleProduct() {
    let params = useParams();
    return (
        <ShowSingleProduct id={params.id}/>
    )
}