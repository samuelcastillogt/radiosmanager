import axios from "axios";
const serverURL = location.hostname == "localhost" ? "http://localhost:4000/" : "https://radiosserver.vercel.app/"
console.log(location)
class RadioService{
    saveRadio = async(data)=>{
        return await axios.post(serverURL + "api/radio", data)
    }
}
export const radioService = new RadioService()