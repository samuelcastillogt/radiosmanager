import { Box, Button, TextField } from "@mui/material"
import { useStore } from "../store/modal"
import { radioService } from "../services/radios.service"
import { useState } from "react"


function Modal() {
    const closeModal = useStore((state) => state.closeModal)
    const radio = useStore((state) => state.radio)
    const [url, setUrl] = useState(radio.data.url)
    const [imagen, setImagen] = useState(radio.data.imagen)
    const [nombre, setNombre] = useState(radio.data.nombre)
    const updateRadio = async()=>{

      const response = await radioService.uodateRadio({
        id: radio.data.id,
        data: {
          nombre: nombre,
          url: url,
          imagen: imagen
        }
      })
      console.log(response)
      
    }
  return (
    <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 10}}>
        <Button style={{position: "absolute", top: 10, right: 10, backgroundColor: "red", borderRadius: "100%", width: "30px", height: "30px", color: "white"}} onClick={()=> closeModal()}>X</Button>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": "white",
        width: "400px",
        margin: "0 auto"
      }}
      noValidate
      autoComplete="off"
    >
        <h1>Editar Radio</h1>
      <TextField  id="outlined-basic" 
                  label="Nombre" 
                  variant="outlined" 
                  style={{background: "white"}}
                  defaultValue={radio.data.nombre} 
                  onChange={(e)=> setNombre(e.target.value)}
        />
              <TextField  id="outlined-basic" 
                  label="URL" 
                  variant="outlined" 
                  style={{background: "white"}}
                  defaultValue={radio.data.url} 
                  onChange={(e)=> setUrl(e.target.value)}
        />
              <TextField  id="outlined-basic" 
                  label="Imagen" 
                  variant="outlined" 
                  style={{background: "white"}}
                    defaultValue={radio.data.imagen} 
                  onChange={(e)=> setImagen(e.target.value)}
        />
        <img src={radio.data.imagen} style={{width: "100px", height: "100px", borderRadius: "100%"}}/>
        <Button variant="contained" onClick={updateRadio}>Guardar</Button>
    </Box>
    </div>
  )
}

export default Modal