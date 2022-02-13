import React, {useContext, useState} from "react";
import '../css/Price.scss'
import {Switch} from "@mui/material";
import {LightTooltip} from "../package/custom/Tooltip";
import context from "../context/context";
import contexts from "../context/context";


export default function Price({is_discount, price}) {
    const [switchmode, setSwitchmode] = useState(true)
    const context = useContext(contexts);

    const switchChange = () => {
        setSwitchmode(!switchmode)
        context.dispatch({type: 'CHANGE_PRICE', is_discount_price: switchmode})
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return (
        <div className="main-price">
            <p>قیمت :</p>
            <div className={'show-price'}>
                {switchmode && is_discount ?
                    <>
                        <div className={'new-price'}>{numberWithCommas(price.selling_price)}</div>
                        <div className={'old-price'}>
                            <p>{numberWithCommas(price.rrp_price)}</p>
                            <span className={'percentage'}>{price.discount_percent}%</span>
                        </div>
                    </>
                    : <div className={'old-price'}>{numberWithCommas(price.rrp_price)}</div>
                }
            </div>
            {
                is_discount &&
                <div className="d-flex justify-content-end w-100">
                    <LightTooltip title={switchmode ? 'ذخیره با قیمت تخفیف خورده' : 'ذخیره با قیمت اصلی'}
                                  placement="right">
                        <Switch defaultChecked onChange={switchChange}/>
                    </LightTooltip>
                </div>
            }
        </div>
    )
}