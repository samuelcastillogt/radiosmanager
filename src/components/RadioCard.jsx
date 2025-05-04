import { useState } from 'react'
import { radioService } from '../services/radios.service'
import { useStore } from '../store/modal'

function RadioCard(props) {
    const {data} = props
    const openModal = useStore((state) => state.openModal)
    const UpdateRadio = async(data)=>{
        const response = await radioService.saveRadio(data)
        console.log(response)
    }
  return (
    <>
        <div style={{backgroundColor: "#2c3d61", margin: "10px", borderRadius: "10px", padding: "10px", display: "flex", flexWrap: "nowrap", justifyContent: "space-around", alignItems: "center"}}>
        <img src={data.data.imagen} style={{width: "100px", height: "100px", borderRadius: "100%"}}/>
        <div>
        <h3>{data.data.nombre}</h3>
        <h4>{data.data.categoria}</h4>
        <p style={{fontSize: "10px"}}>ID: {data.id}</p>            
        </div>
        <div>
            <button onClick={()=> openModal(data)}>Editar</button>
            <button>Eliminar</button>
        </div>
    </div>
    {/* {
      modal == true &&     <div>
      <h4>Datos</h4>
      <p>Nombre: {data.data.nombre}</p>
      <p>Categoria: {data.data.categoria}</p>
      <p>URL: {data.data.url}</p>
      <p>Imagen: {data.data.imagen}</p>
      <p>Descripcion: {data.data.descripcion}</p>
      <button onClick={()=> UpdateRadio(data)}>Actualizar</button>
      <button onClick={()=> setModal(false)}>cancelar</button>
  </div>
    } */}

    </>

  )
}

export default RadioCard