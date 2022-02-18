import React, {useContext, useState} from 'react'
import './Image.scss';
import DoneIcon from '@mui/icons-material/Done';
import contexts from "../../context/context";

export default function Image({info_img, handler}) {
    const [checkbox, setCheckbox] = useState(false);
    const context = useContext(contexts);

    const CheckboxHandler = () => {
        setCheckbox(!checkbox);
        context.dispatch({type: 'IS_SHOW_IMG', id: info_img.id, is_show: checkbox})
    }


    return (
        <div className={`checkbox ${info_img.is_show ? 'active' : ''}`} onClick={CheckboxHandler}>
            <div className="is_cocked">
                <DoneIcon/>
            </div>
            <img
                src={info_img.src}
                alt=""/>
        </div>
    )
}