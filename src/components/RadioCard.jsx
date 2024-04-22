import React from 'react'

function RadioCard(props) {
    const {data} = props
  return (
    <div style={{backgroundColor: "#2c3d61", margin: "10px", borderRadius: "10px", padding: "10px", display: "flex", flexWrap: "nowrap", justifyContent: "space-around", alignItems: "center"}}>
        <img src={data.data.imagen} style={{width: "100px", height: "100px", borderRadius: "100%"}}/>
        <div>
        <h3>{data.data.nombre}</h3>
        <h4>{data.data.categoria}</h4>
        <p style={{fontSize: "10px"}}>ID: {data.id}</p>            
        </div>
        <div>
            <button>Editar</button>
            <button>Eliminar</button>
        </div>
    </div>
  )
}

export default RadioCard