import React,{useState} from 'react';
import TopBar from './TopBar';
import SideMenu from './SideMenu';



export default function Navigation({setBackgroundImage}) {
    const [openSideMenu,setOpenSideMenu] = useState(false);
    
    return ( <div>
        <TopBar setOpenSideMenu={setOpenSideMenu}/>
        <SideMenu
         openSideMenu={openSideMenu}
         setOpenSideMenu={setOpenSideMenu}
         setNewBgImage={setBackgroundImage}
         />
    </div>
    );
}