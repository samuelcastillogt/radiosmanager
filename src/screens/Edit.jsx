import { useEffect, useState } from 'react'
import { radioService } from '../services/radios.service'
import RadioCard from '../components/RadioCard'
import { TextField } from '@mui/material'

function Edit() {
    const [loader, setloader]= useState(true)

    const [radios, setRadios]= useState([])
    const [filtro, setFiltro] = useState()
    const [filtrada, setFiltrada] = useState();
    const getDataRadios = async()=>{
        const response = await radioService.getRadios()
        
        setRadios(response)
        setloader(false)
        console.log("Carga completa")
    }
    useEffect(()=>{
        if(radios.length == 0){
            getDataRadios();
        }
    },[])
    useEffect(()=>{
        console.log("Filtro",filtro)
        if(filtro != undefined && filtro.length > 0){
            const f = radios.filter((item) => item.data.nombre.toLowerCase().includes(filtro.toLowerCase()))
            setFiltrada(f)
        }else{
            setFiltrada(undefined)
            setFiltro(undefined)
        }
    },[filtro])
  return (
    <div>
        <h2>Editar Radios</h2>
        <div>
            <TextField  id="outlined-basic"
                        label="Nombre" 
                        variant="outlined" 
                        style={{background: "white"}} 
                        onChange={(e)=> setFiltro(e.target.value)}
                        />
        </div>
        {
            loader && <p>Cargando...</p>
        }	
        {
            radios.length > 0 && filtro == undefined  && radios.map(item => <RadioCard data={item} key={item.id}/> )
        }
                {
            filtrada != undefined && filtrada.length > 0 && filtrada.map(item => <RadioCard data={item} key={item.id}/>)
        }
    </div>
  )
}

export default Edit