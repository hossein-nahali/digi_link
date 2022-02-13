import {Tooltip, tooltipClasses} from "@mui/material";
import styled from "@emotion/styled";

export const LightTooltip = styled(({className, ...props}) => (
    <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.df,
        color: '#ffffff',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

