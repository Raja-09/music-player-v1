import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './styles/SideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faPlayCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import utunesLogo from '../assets/images/utunes.png';

function SideBar() {
    return (
        <div className='nav-bar'>
            <Link to={"/"} className='logo'>
                <img src={utunesLogo} alt="" />
            </Link>
            <nav>
                <NavLink exact="true" activeClassName="active" to='/'>
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className='search-link ' to='/search'>
                    <FontAwesomeIcon icon={faSearch} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="favorites-link " to='/favorites'>
                    <FontAwesomeIcon icon={faHeart} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="playlists-link " to='/playlists'>
                    <FontAwesomeIcon icon={faPlayCircle} />
                </NavLink>
            </nav>
        </div>
    )
}

export default SideBar
