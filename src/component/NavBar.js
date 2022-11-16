import {NavLink} from 'react-router-dom';

function NavBar(){
    return(
       <>
        <nav className="navBar">
            <ul>                        
                <li className="menu-item"><NavLink exact to='/about' >About</NavLink></li>
                <li className="menu-item"><NavLink exact to='/resources' >Resources</NavLink></li>
                <li className="menu-item"><NavLink exact to='/news' >News</NavLink></li>
                <li className="menu-item"><NavLink exact to='/member' >Member</NavLink></li>
                <li className="menu-item"><NavLink exact to='/contact' >Contact</NavLink></li>
            </ul>
        </nav>
       </>
    )
}

export default NavBar;