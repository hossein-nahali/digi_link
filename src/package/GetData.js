export const GetData = async (product_id) => {
    return await fetch(`http://localhost/api_digi_link/?product_id=${product_id}`)
        .then(r => r.json())
}