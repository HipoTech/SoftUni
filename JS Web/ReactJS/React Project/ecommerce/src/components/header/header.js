import React from 'react';
import './header.css';
import TopHeader from './top-header/top-header';
import MiddleHeader from './middle-header/middle-header';
import NavigationMenu from './NavigationMenu/navigationMenu';

const Header = ({ userData }) => {
    return <header id="header">
        <TopHeader />
        <MiddleHeader userData={userData} />
        <NavigationMenu />
    </header>
};

export default Header;