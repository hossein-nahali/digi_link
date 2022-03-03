export const SetDataInit = (data, url) => {
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
        brand,
    } = data.product

    const {
        brand_breadcrumb
    } = data.seo;

    let imager = images.list.map((url, index) => {
        return {src: url.url[0], is_show: true, id: index}
    })

    return {
        id: id,
        title_fa: title_fa,
        title_en: title_en,
        url,
        price: {
            rrp_price: default_variant.price.rrp_price,
            selling_price: default_variant.price.selling_price,
            discount_percent: default_variant.price.discount_percent,
        },
        discount: default_variant.price.discount_percent > 0,
        is_show_default_price: default_variant.price.discount_percent < 0,
        img: imager,
        default_img: images.main.url[0] ? images.main.url[0] : '',
        is_show_specifications: true,
        specifications,
        review: review.attributes,
        data_layer: {
            count_star: data_layer.dimension9,
            total_comments: data_layer.metric6,
            comments_count,
            questions_count,
        },
        brand_breadcrumb: brand_breadcrumb,
        brand_img: brand.logo.url,
    }
}
