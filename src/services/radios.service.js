import axios from "axios";
const serverURL = location.hostname == "localhost" ? "https://radiosserver.vercel.app/" : "https://radiosserver.vercel.app/"
console.log(location)
class RadioService{
    saveRadio = async(data)=>{
        return await axios.post(serverURL + "api/radio", data)
    }

    getRadios = async()=>{
        const response = await axios.get(serverURL + "api/radios")
        return  response.data
    }
}
export const radioService = new RadioService()