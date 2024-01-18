import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css'
import { Button } from '@mui/material';
import { radioService } from './services/radios.service';

function App() {
  const [nombre, setNombre] = useState(0)
  const [url, setUrl] = useState(0)
  const [imagen, setImagen] = useState(0)
  const saveRadio = async(data)=>{
    const response = await radioService.saveRadio({
      nombre,
      url,
      imagen
    })
    if(response.data == true){
      alert("Se ha Guardado")
    }else{
      alert("Ocurrio un error ")
    }
  }
  return (
    <>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField  id="outlined-basic" 
                  label="Nombre" 
                  variant="outlined" 
                  style={{background: "white"}} 
                  onChange={(e)=> setNombre(e.target.value)}
        />
              <TextField  id="outlined-basic" 
                  label="URL" 
                  variant="outlined" 
                  style={{background: "white"}} 
                  onChange={(e)=> setUrl(e.target.value)}
        />
              <TextField  id="outlined-basic" 
                  label="Imagen" 
                  variant="outlined" 
                  style={{background: "white"}} 
                  onChange={(e)=> setImagen(e.target.value)}
        />
        <Button variant="contained" onClick={saveRadio}>Guardar</Button>
    </Box>
    </>
  )
}

export default App
