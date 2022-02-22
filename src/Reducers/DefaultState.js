export const DefaultState = () => {

    return {
        infoProduct: {
            id: '',
            title_fa: '',
            title_en: '',
            url: '',
            price: {
                rrp_price: '',
                selling_price: '',
                discount_percent: '',
            },
            discount: '',
            is_show_default_price: '',
            img: [],
            default_img: '',
            specifications: []
        }
    }
}