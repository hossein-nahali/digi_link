export const GetData = async (product_id) => {
    return await fetch(`http://localhost/?product_id=${product_id}`)
        .then(r => r.json())
}