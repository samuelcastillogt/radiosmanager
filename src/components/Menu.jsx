import React, {useContext} from 'react'
import { ContenxtState } from '../App'
const listMenu = [
    {
    title: "Agegar Radio",
    value: 1
},
{
    title: "Editar Radio",
    value: 2
}
]
function Menu(props) {
    const menu = useContext(ContenxtState)
  return (
    <div style={{color: "white", width: "200px", display: "flex",flex: 1}}>
        <ul style={{listStyle: "none", height: "100vh", display:"flex", alignItems: "center", flexDirection: "column"}}>
            {listMenu.map(item => <li 
                                    onClick={()=> props.handleChangeMenu(item.value)}
                                    style={{
                                        padding: "10px",
                                        backgroundColor: menu == item.value && "#2c3d61",
                                        color: "white",
                                        width: "100%",
                                        cursor: "pointer"
                                    }}
                                    >{item.title}
                                    </li>)}
        </ul>
    </div>
  )
}

export default Menu