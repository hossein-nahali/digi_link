const ValidationAddress = (url) => {
    return String(url).toLowerCase().match(
        /(https?:\/\/)?([\da-z.-]+)\.([a-z]{2,6})([/\w.-]*)*\/?/
    );
};

export default ValidationAddress;