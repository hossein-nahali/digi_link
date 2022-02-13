import {SetData} from "../package/SetData";
import {DefaultState} from "./DefaultState";

function AppReducer(prevState, action) {

    switch (action.type) {
        case "INIT_PRODUCT":
            return {
                infoProduct: SetData(action.data, action.url)
            }

        case "RESET_VALUES":
            return DefaultState()

        case "IS_SHOW_IMG":
            let items = prevState.infoProduct.img.find(item => item.id === action.id);
            items.is_show = action.is_show;

            return {
                infoProduct: {
                    ...prevState.infoProduct,
                    img: [
                        ...prevState.infoProduct.img,
                    ]
                }
            }

        case "CHANGE_PRICE":
            return {
                infoProduct: {
                    ...prevState.infoProduct,
                    is_show_default_price: action.is_discount_price,
                }
            }

        case "CHANGE_SPECS":
            return {
                infoProduct: {
                    ...prevState.infoProduct,
                    is_show_specifications: action.is_show_specifications,
                }
            }

        default:
            return prevState;
    }
}


export default AppReducer;