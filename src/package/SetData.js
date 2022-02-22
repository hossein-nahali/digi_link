export const SetData = (data, url) => {

    const {
        default_variant,
        images,
        title_fa,
        title_en,
        id,
        specifications,
        review,
        data_layer,
        comments_count,
        questions_count,
    } = data.product

    return {
        id,
        title_fa,
        title_en,
        url,
        price: {
            rrp_price: default_variant.price.rrp_price,
            selling_price: default_variant.price.selling_price,
            discount_percent: default_variant.price.discount_percent,
        },
        discount: default_variant.price.discount_percent > 0,
        is_show_default_price: default_variant.price.discount_percent < 0,
        img: images.list.map((url, index) => {
            return {src: url.url[0], is_show: true, id: index}
        }),
        default_img: images.main.url[0] ? images.main.url[0] : '',
        is_show_specifications: true,
        specifications: specifications.map(specifications => specifications.attributes),
        review: review.attributes,
        data_layer,
        comments_count,
        questions_count,
    }
}