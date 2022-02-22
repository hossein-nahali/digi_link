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

export const getData = async (url) => {
    try {

        return await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })

    } catch (r) {
        return r
    }
}