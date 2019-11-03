import React from 'react';
import './header.css';
import TopHeader from './top-header/top-header';
import MiddleHeader from './middle-header/middle-header';
import BottomHeader from './bottom-header/bottom-header';

const Header = () => (
    <header id="header">
        <TopHeader />
        <MiddleHeader />
        <BottomHeader />
    </header>
);

export default Header;