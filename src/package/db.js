import {IdProduct} from "./IdProduct";

export const CreateProduct = async (url, state) => {
    try {
        return await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        }).then(r => {
            return r
        });
    } catch (r) {
        return await r
    }
}

export const IsThereProduct = async (product_id) => {
    return await fetch(`http://localhost:8080/product?q=${product_id}`)
}