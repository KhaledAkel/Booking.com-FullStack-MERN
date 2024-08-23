import React, { useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import MenuItem from '../components/MenuItem'; // Correctly import MenuItem

function Menu() {
    const [clicked, setClicked] = useState(false);

    const toggleMenu = () => {
        setClicked(!clicked);
    };

    return (
        <div className='flex items-center relative'>
            <CgMenuRightAlt 
                className='text-3xl text-primary cursor-pointer hover:text-tertiary' 
                onClick={toggleMenu} 
            />
            {clicked && <MenuItem clicked={clicked} setClicked={setClicked} />}
        </div>
    );
}

export default Menu;
