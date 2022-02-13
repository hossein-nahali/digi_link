import React from "react";
import Alert from '@mui/material/Alert';

export default function AlertBox({type = 'success', text}) {

    return (
        <Alert severity="error">{text}</Alert>
    )
}