const { default: axios } = require("axios");

// FIXME: move to constants or environment
const UrlBase = "http://localhost:57016"; // NOTE: /api/v1
// const UrlBase = "http://192.168.1.55:57016"; // NOTE: /api/v1
const UrlList = "/feriados/";
const UrlGet = "/feriados/";
const UrlUpdt = "/feriados/";
const UrlLoad = "/feriados/many/";

export default {
    FeriadoApi(url = UrlBase) {
        return {
            List: () => axios.get(url + UrlList),
            Get: (id) => axios.get(url + UrlGet + id),
            Update: (id, data) => axios.put(url + UrlUpdt + id, data),
            Load: () => axios.get(url + UrlLoad),
        }
    }
}
