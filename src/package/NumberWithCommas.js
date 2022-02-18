export const numberWithCommas = (c) => {
    return c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}
