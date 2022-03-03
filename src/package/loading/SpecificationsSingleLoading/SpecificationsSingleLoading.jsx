import React from "react";
import ContentLoader from "react-content-loader";
import {Grid} from "@mui/material";
import ImageSlider from "../../../components/ShowSingleProduct/ImageSlider";

export default function SpecificationsSingleLoading(props) {


    return (
        <ContentLoader
            rtl={true}
            width={'100%'}
            height={'400'}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}>
            <rect x="0" y="15" rx="5" ry="5" width="100%" height="6"/>
            <rect x="0" y="50" rx="5" ry="5" width="100" height="20"/>
            <rect x="0" y="100" rx="5" ry="5" width="20%" height="50"/>
            <rect x="21%" y="100" rx="5" ry="5" width="79%" height="50"/>
            <rect x="0" y="160" rx="5" ry="5" width="20%" height="50"/>
            <rect x="21%" y="160" rx="5" ry="5" width="79%" height="50"/>
            <rect x="0" y="220" rx="5" ry="5" width="20%" height="50"/>
            <rect x="21%" y="220" rx="5" ry="5" width="79%" height="50"/>
            <rect x="0" y="280" rx="5" ry="5" width="20%" height="50"/>
            <rect x="21%" y="280" rx="5" ry="5" width="79%" height="50"/>
            <rect x="0" y="340" rx="5" ry="5" width="20%" height="50"/>
            <rect x="21%" y="340" rx="5" ry="5" width="79%" height="50"/>
        </ContentLoader>
    )
}