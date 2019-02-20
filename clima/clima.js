const axios = require(`axios`);


const getClima = async(lat, lng) => {

let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=bed3a099b30b948cac9818401fe51bbf`)

    return resp.data.main.temp;
    
}



module.exports = {
    getClima
}