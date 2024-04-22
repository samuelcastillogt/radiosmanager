import { useState, useContext, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './App.css'
import Add from "./screens/Add"
import Menu from './components/Menu';
import Edit from './screens/Edit';
export const ContenxtState = createContext()
function App() {
  const [state, setState] = useState(1)
  const handleChangeMenu = (option)=>{
    setState(option)
  }
  return (
    <ContenxtState.Provider value={state}>
      <div style={{display: "flex", flex: 1}}>
        <Menu handleChangeMenu={handleChangeMenu} />
        <div style={{width: "80vw"}}>
          {
            state == 1 && <Add /> 
          } 
                    {
            state == 2 && <Edit /> 
          } 
        </div>
                 
      </div>

         
    </ContenxtState.Provider>

  )
}

export default App
