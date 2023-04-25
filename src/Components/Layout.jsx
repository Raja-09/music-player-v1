import React from 'react';
import './styles/Layout.scss';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className='page'>
            <SideBar />

            <Outlet />

        </div>
    )
}

export default Layout;
