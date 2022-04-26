export const queryString = (location) => {
    if (!location) {
        return { q: "" };
    }
    
    const locationArray = location.replace("?", "").split("&");

    let parametrosURL = {};

    locationArray.forEach(element => {
        let [clave, valor] = element.split("=");
        valor = valor.replace("%20", " ");
        parametrosURL = {...parametrosURL, [clave]: valor}
    });
    
    return parametrosURL;
}