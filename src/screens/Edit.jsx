import React, { useEffect, useState } from 'react'
import { radioService } from '../services/radios.service'
import RadioCard from '../components/RadioCard'

function Edit() {
    const [radios, setRadios]= useState([])
    const getDataRadios = async()=>{
        const response = await radioService.getRadios()
        setRadios(response)
        console.log("Carga completa")
    }
    useEffect(()=>{
        if(radios.length == 0){
            getDataRadios()
        }
    },[])
  return (
    <div>
        <h2>Editar Radios</h2>
        {
            radios.length > 0 && radios.map(item => <RadioCard data={item} />)
        }
    </div>
  )
}

export default Edit