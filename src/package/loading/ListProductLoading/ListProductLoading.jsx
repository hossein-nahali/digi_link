import React from "react";
import ContentLoader from "react-content-loader";

import {Grid} from "@mui/material";

export default function ListProductLoading(props) {


    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={3} md={3} sm={6}>
                <ContentLoader
                    rtl={true}
                    viewBox="0 0 276 350"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect x="0" y="-90" rx="0" ry="0" width="6" height="430"/>
                    <rect x="-90" y="0" rx="0" ry="0" width="370" height="6"/>
                    <rect x="270" y="-90" rx="0" ry="0" width="6" height="430"/>
                    <rect x="-90" y="340" rx="0" ry="0" width="370" height="6"/>
                    <rect x="15" y="15" rx="8" ry="8" width="245" height="220"/>
                    <rect x="15" y="250" rx="4" ry="4" width="220" height="15"/>
                    <rect x="15" y="270" rx="4" ry="4" width="200" height="15"/>
                    <rect x="15" y="310" rx="4" ry="4" width="89%" height="15"/>
                </ContentLoader>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6}>
                <ContentLoader
                    rtl={true}
                    viewBox="0 0 276 350"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect x="0" y="-90" rx="0" ry="0" width="6" height="430"/>
                    <rect x="-90" y="0" rx="0" ry="0" width="370" height="6"/>
                    <rect x="270" y="-90" rx="0" ry="0" width="6" height="430"/>
                    <rect x="-90" y="340" rx="0" ry="0" width="370" height="6"/>
                    <rect x="15" y="15" rx="8" ry="8" width="245" height="220"/>
                    <rect x="15" y="250" rx="4" ry="4" width="220" height="15"/>
                    <rect x="15" y="270" rx="4" ry="4" width="200" height="15"/>
                    <rect x="15" y="310" rx="4" ry="4" width="89%" height="15"/>
                </ContentLoader>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6}>
                <ContentLoader
                    rtl={true}
                    viewBox="0 0 276 350"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="0" y="-90" rx="0" ry="0" width="6" height="430"/>
                    <rect x="-90" y="0" rx="0" ry="0" width="370" height="6"/>
                    <rect x="270" y="-90" rx="0" ry="0" width="6" height="430"/>
                    <rect x="-90" y="340" rx="0" ry="0" width="370" height="6"/>
                    <rect x="15" y="15" rx="8" ry="8" width="245" height="220"/>
                    <rect x="15" y="250" rx="4" ry="4" width="220" height="15"/>
                    <rect x="15" y="270" rx="4" ry="4" width="200" height="15"/>
                    <rect x="15" y="310" rx="4" ry="4" width="89%" height="15"/>
                </ContentLoader>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6}>
                <ContentLoader
                    rtl={true}
                    viewBox="0 0 276 350"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="0" y="-90" rx="0" ry="0" width="6" height="430"/>
                    <rect x="-90" y="0" rx="0" ry="0" width="370" height="6"/>
                    <rect x="270" y="-90" rx="0" ry="0" width="6" height="430"/>
                    <rect x="-90" y="340" rx="0" ry="0" width="370" height="6"/>
                    <rect x="15" y="15" rx="8" ry="8" width="245" height="220"/>
                    <rect x="15" y="250" rx="4" ry="4" width="220" height="15"/>
                    <rect x="15" y="270" rx="4" ry="4" width="200" height="15"/>
                    <rect x="15" y="310" rx="4" ry="4" width="89%" height="15"/>
                </ContentLoader>
            </Grid>
        </Grid>
    )
}