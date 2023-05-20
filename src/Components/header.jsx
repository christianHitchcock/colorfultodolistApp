import  React, { useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';





function Header(){
    const [isACtive , setIsActive] = useState(false);

    return (
        <header className='bgImages'>
            <h1>TODO</h1>
            <div className='ThemeToggle' onClick={() => setIsActive(!isACtive)}>
                {isACtive ? <LightModeIcon   sx={{ 
    color: "white",    
  }}/> : <NightlightRoundIcon  sx={{ 
    color: "white",  
  }}/>}
            </div>
           
        </header>
    );
}

export default Header;