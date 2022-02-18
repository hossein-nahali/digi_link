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


export const parseLinkHeader = linkHeader => {
    const linkHeadersArray = linkHeader.split(", ").map(header => header.split("; "));
    const linkHeadersMap = linkHeadersArray.map(header => {
        const thisHeaderRel = header[1].replace(/"/g, "").replace("rel=", "");
        const thisHeaderUrl = header[0].slice(1, -1);
        return [thisHeaderRel, thisHeaderUrl]
    });
    return Object.fromEntries(linkHeadersMap);
}

// export const IsThereProduct = async (product_id) => {
//     return await fetch(`http://localhost:8080/product?q=${product_id}`)
// }