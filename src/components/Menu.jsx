import React, {useContext} from 'react'
import { ContenxtState } from '../App'

function Plus(props) {
    return (
      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
<path d="M12.0002 4.875C12.6216 4.875 13.1252 5.37868 13.1252 6V10.8752H18.0007C18.622 10.8752 19.1257 11.3789 19.1257 12.0002C19.1257 12.6216 18.622 13.1252 18.0007 13.1252H13.1252V18.0007C13.1252 18.622 12.6216 19.1257 12.0002 19.1257C11.3789 19.1257 10.8752 18.622 10.8752 18.0007V13.1252H6C5.37868 13.1252 4.875 12.6216 4.875 12.0002C4.875 11.3789 5.37868 10.8752 6 10.8752H10.8752V6C10.8752 5.37868 11.3789 4.875 12.0002 4.875Z" fill="#343C54"/>
</svg>

    );
  }

const listMenu = [
    {
    title: "Agegar Radio",
    value: 1,
    icon: <i class="lni lnis-plus"></i>
    
},
{
    title: "Editar Radio",
    value: 2,
    icon: Plus
    
}
]
function Menu(props) {
    const menu = useContext(ContenxtState)
  return (
    <div style={{color: "white", width: "200px", display: "flex",flex: 1, position: "fixed", flexDirection: "column", top: 0, left: 0}}>
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
                                    >{ item.icon } {item.title}
                                    </li>)}
        </ul>
    </div>
  )
}

export default Menu