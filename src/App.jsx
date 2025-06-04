import { useState, useContext, createContext } from 'react'
import {useStore} from './store/modal'
import './App.css'
import Add from "./screens/Add"
import Menu from './components/Menu';
import Edit from './screens/Edit';
import Modal from './components/Modal';
export const ContenxtState = createContext()
function App() {
  const [state, setState] = useState(1)
  const modalStatus = useStore((state => state.modal))
  const handleChangeMenu = (option)=>{
    setState(option)
  }
  return (
    <ContenxtState.Provider value={state}>
      {
        modalStatus == true && <Modal />
      }
      <div style={{display: "flex", flex: 1, backgroundColor:"black"}}>
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
