import React from 'react';
import './styles/Layout.scss';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className='container layout-page'>
            <SideBar />
            <div className="page">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;
