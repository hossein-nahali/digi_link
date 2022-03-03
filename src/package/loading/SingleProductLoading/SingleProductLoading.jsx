import React from "react";
import ContentLoader from "react-content-loader";
import {Grid} from "@mui/material";
import ImageSlider from "../../../components/ShowSingleProduct/ImageSlider";

export default function SingleProductLoading(props) {


    return (
        <Grid container spacing={2} className={'mt-3'}>
            <Grid item xs={12} lg={4} md={4} sm={4}>
                <ContentLoader
                    rtl={true}
                    width={'100%'}
                    height={'376'}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                >
                    <rect x="0" y="0" rx="5" ry="5" width="100%" height="376"/>
                </ContentLoader>
            </Grid>
            <Grid item xs={12} lg={8} md={8} sm={8}>
                <ContentLoader
                    rtl={true}
                    width={'100%'}
                    height={'300'}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}>
                    <rect x="0" y="0" rx="5" ry="5" width="52" height="52"/>
                    <rect x="70" y="10" rx="3" ry="3" width="52" height="10"/>
                    <rect x="130" y="10" rx="3" ry="3" width="52" height="10"/>
                    <rect x="70" y="30" rx="3" ry="3" width="100%" height="15"/>
                    <rect x="0" y="65" rx="3" ry="3" width="80%" height="7"/>
                    <rect x="80%" y="67" rx="3" ry="3" width="20%" height="2"/>
                    <rect x="0" y="90" rx="3" ry="3" width="52" height="10"/>
                    <rect x="60" y="90" rx="3" ry="3" width="52" height="10"/>
                    <rect x="120" y="90" rx="3" ry="3" width="52" height="10"/>
                    <rect x="120" y="90" rx="3" ry="3" width="52" height="10"/>
                    <rect x="0" y="120" rx="3" ry="3" width="52" height="10"/>
                    <rect x="0" y="140" rx="3" ry="3" width="200" height="10"/>
                    <rect x="0" y="180" rx="3" ry="3" width="200" height="12"/>
                    <rect x="10" y="200" rx="3" ry="3" width="150" height="7"/>
                    <rect x="10" y="215" rx="3" ry="3" width="180" height="7"/>
                    <rect x="10" y="230" rx="3" ry="3" width="160" height="7"/>
                    <rect x="10" y="245" rx="3" ry="3" width="120" height="7"/>
                    <rect x="10" y="260" rx="3" ry="3" width="170" height="7"/>
                </ContentLoader>
            </Grid>
        </Grid>
    )
}