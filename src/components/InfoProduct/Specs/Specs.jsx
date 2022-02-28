import React, {useContext, useState} from "react";
import './Specs.scss'
import {LightTooltip} from "../../../package/custom/Tooltip";
import {Switch} from "@mui/material";
import contexts from "../../../context/context";

export default function Specs() {
    const [switchmode, setSwitchmode] = useState(false)
    const context = useContext(contexts);

    const switchChange = () => {
        setSwitchmode(!switchmode);

        context.dispatch({type: 'CHANGE_SPECS', is_show_specifications: switchmode})
    }

    return (
        <div className="specifications">
            <p>مشخصات</p>

            <div className="d-flex justify-content-end w-100">
                <LightTooltip title={!switchmode ? 'نمایش مشخصات' : 'عدم نمایش مشخصات'}
                              placement="right">
                    <Switch defaultChecked onChange={switchChange}/>
                </LightTooltip>
            </div>
        </div>
    )
}