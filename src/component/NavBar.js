import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){   
    const [isOpen, setOpen] = useState(false)
    const [showMenu, setShowMenu] = useState(false);
    return(
       <>       
        <ul>                        
            <li className="menu-item"><NavLink exact to='/about' onClick={() => setShowMenu(!showMenu)}>About</NavLink></li>
            <li className="menu-item"><NavLink exact to='/resources' onClick={() => setShowMenu(!showMenu)}>Resources</NavLink></li>
            <li className="menu-item"><NavLink exact to='/news' onClick={() => setShowMenu(!showMenu)}>News</NavLink></li>
            <li className="menu-item"><NavLink exact to='/member' onClick={() => setShowMenu(!showMenu)}>Member</NavLink></li>
            <li className="menu-item"><NavLink exact to='/contact' onClick={() => setShowMenu(!showMenu)}>Contact</NavLink></li>
        </ul>
       </>
    )
}

export default NavBar;