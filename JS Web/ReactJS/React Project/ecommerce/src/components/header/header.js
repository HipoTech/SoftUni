import React from 'react';
import './header.css';
import TopHeader from './top-header/top-header';
import MiddleHeader from './middle-header/middle-header';
import NavigationMenu from './NavigationMenu/navigationMenu';

const Header = () => (
    <header id="header">
        <TopHeader />
        <MiddleHeader />
        <NavigationMenu />
    </header>
);

export default Header;