const apiKey = "b9502258e92126a05642e164999a3937"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather"
import axios from "axios"

const getWeather = async (city) =>{
    try{
       let response = await axios.get(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
       return response.data
    }catch(error){
         console.log("error while making api request",error.message)
         return error.response
    }
}

export default getWeather